#!/usr/bin/env python3
"""Generate a deep-dive review for the next ingredient in the queue.

Pipeline: Mistral drafts JSON matching IngredientDeepContent, Claude
audits against STACK-2026 quality rules, Mistral fixes if needed, script
renders TS literal and commits via GitHub Contents API.

Run locally with --dry-run to preview without committing.
"""
from __future__ import annotations

import argparse
import json
import logging
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from enrich_common import (  # noqa: E402
    claude_audit,
    commit_path_to_ts,
    extract_json,
    github_get_file,
    github_put_file,
    log,
    mistral_call,
    sanitize_deep,
    ts_literal,
)

SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR.parent
QUEUE_PATH = SCRIPT_DIR / "ingredients_queue.json"
TS_PATH_REL = "site/src/data/ingredient-deep-content.ts"
TS_PATH_ABS = REPO_ROOT / TS_PATH_REL
INGREDIENTS_TS_REL = "site/src/data/ingredients.ts"
INGREDIENTS_TS_ABS = REPO_ROOT / INGREDIENTS_TS_REL

DRAFT_SYSTEM = """You are a senior dermatology-aware copywriter for SkinScore (getskinscore.com), an independent skincare rating platform. Your job: produce a deep editorial review of a SINGLE cosmetic ingredient, in English AND French, with strong scientific grounding (citable evidence, no fabricated studies, no em-dashes).

OUTPUT FORMAT: return a single JSON object, no markdown fences, matching exactly:
{
  "speakableTerm": {"en": "...", "fr": "..."},  // 1-3 words, ingredient display name
  "speakable": {"en": "...", "fr": "..."},       // 60-100 words each, TL;DR with verdict, starts with the term (will get <strong>)
  "mechanism": {"en": "...", "fr": "..."},       // 180-280 words each, molecular/biochemical mechanism
  "evidence": {"en": "...", "fr": "..."},        // 180-280 words each, 3+ real clinical references cited inline (first author + year + journal)
  "dosing": {"en": "...", "fr": "..."},          // 130-200 words each, concentration ranges, application protocol, SPF caveats
  "interactions": {"en": "...", "fr": "..."},    // 90-150 words each, what to layer, what to separate
  "mistakes": {"en": "...", "fr": "..."},        // 90-150 words each, 2-3 typical user errors
  "faq": [                                       // exactly 3 entries
    {"question": {"en": "...", "fr": "..."}, "answer": {"en": "...", "fr": "..."}}
  ],
  "sources": [                                   // exactly 5 entries, real citations only
    {"label": "FirstAuthor et al. Topic. Journal YEAR", "url": "https://pubmed.ncbi.nlm.nih.gov/..."}
  ]
}

STACK-2026 HARD RULES:
- Zero em-dash (U+2014) or en-dash (U+2013). Use commas, colons, or simple hyphens.
- French uses tutoiement ("tu" form), proper accents (é è ê à ç ô û), not stripped ASCII.
- Numbers only with adjacent source or clear regulatory reference.
- No invented studies. Use PubMed, SCCS, EU CosIng, ACOG, NHS, AAD, NICE, CIR, DermNet NZ.
- No fabricated dermatologist quotes. No "studies show" without a named citation.
- Sources must be verifiable: format "FirstAuthor et al. Topic. Journal YEAR" with a real PubMed or official URL.
- Do NOT output speakableTerm matching the ingredient id verbatim, use the display form (e.g. "Vitamin C" not "ascorbic-acid").
"""

AUDIT_SYSTEM = """You audit a JSON draft of a cosmetic ingredient deep-dive for STACK-2026 quality.

Return ONLY a JSON object:
{
  "verdict": "CLEAN" | "MINOR" | "MAJOR",
  "issues": [{"field": "...", "severity": "MINOR|MAJOR", "description": "..."}],
  "hallucinations": [{"claim": "max 150 chars", "reason": "..."}]
}

MAJOR triggers:
- em-dash or en-dash anywhere in content
- French with stripped accents (e.g. "Securite" instead of "Sécurité")
- fabricated studies or unverifiable citations
- missing or malformed sections (speakable under 40 or over 150 words, mechanism under 120 words, evidence under 120 words, fewer than 3 FAQ entries, fewer than 5 sources)
- numbers without source
- dermatologist quotes without a verifiable attribution

MINOR triggers:
- light style issues, awkward phrasing, minor redundancy

IGNORE: creative choices, opinion, tone."""


def load_queue() -> list[str]:
    return json.loads(QUEUE_PATH.read_text())


def save_queue(q: list[str]) -> None:
    QUEUE_PATH.write_text(json.dumps(q, indent=2) + "\n")


def already_enriched(ts_text: str, ing_id: str) -> bool:
    return bool(re.search(r'id:\s*"' + re.escape(ing_id) + r'"', ts_text))


def get_ingredient_stub(ts_text: str, ing_id: str) -> dict | None:
    """Extract a small stub (inci, name EN/FR, category, score) for the LLM."""
    m = re.search(r'\n  \{\s*\n\s*id:\s*"' + re.escape(ing_id) + r'"[\s\S]*?\n  \}', ts_text)
    if not m:
        return None
    block = m.group()
    def field(name: str) -> str | None:
        fm = re.search(rf'{name}:\s*"([^"]+)"', block)
        return fm.group(1) if fm else None
    def bilingual(name: str) -> dict | None:
        fm = re.search(rf'{name}:\s*\{{\s*en:\s*"([^"]+)"\s*,\s*fr:\s*"([^"]+)"', block)
        return {"en": fm.group(1), "fr": fm.group(2)} if fm else None
    return {
        "id": ing_id,
        "inciName": field("inciName"),
        "name": bilingual("name"),
        "category": field("category"),
        "score": field("score"),
        "description": bilingual("description"),
        "benefits": bilingual("benefits"),
        "risks": bilingual("risks"),
    }


def build_user_prompt(stub: dict) -> str:
    return f"""Write a deep-dive review for the ingredient below.

Ingredient metadata from SkinScore database:
- id: {stub['id']}
- INCI name: {stub['inciName']}
- Display name (EN): {stub['name']['en'] if stub['name'] else stub['id']}
- Display name (FR): {stub['name']['fr'] if stub['name'] else stub['id']}
- Category: {stub['category']}
- Overall grade: {stub['score']}
- Short description (EN): {stub['description']['en'] if stub['description'] else ''}
- Short description (FR): {stub['description']['fr'] if stub['description'] else ''}
- Benefits (EN): {stub['benefits']['en'] if stub['benefits'] else ''}
- Risks (EN): {stub['risks']['en'] if stub['risks'] else ''}

Produce the JSON object now, EN and FR both fully populated. Real citations only."""


def generate(stub: dict) -> dict:
    raw = mistral_call(DRAFT_SYSTEM, build_user_prompt(stub), temperature=0.3, max_tokens=8000)
    draft = extract_json(raw)
    draft["id"] = stub["id"]

    audit_raw = claude_audit(AUDIT_SYSTEM, f"DRAFT TO AUDIT:\n\n{json.dumps(draft, ensure_ascii=False)[:12000]}\n\nReturn the audit JSON only.", max_tokens=1500)
    try:
        audit = extract_json(audit_raw)
    except Exception:
        audit = {"verdict": "UNKNOWN", "issues": [], "hallucinations": []}

    verdict = audit.get("verdict", "UNKNOWN")
    log.info("Claude audit verdict: %s (%d issues, %d hallucinations)",
             verdict, len(audit.get("issues", [])), len(audit.get("hallucinations", [])))

    if verdict == "MAJOR":
        issues_text = "\n".join(
            f"- [{i.get('severity','?')}] {i.get('field','?')}: {i.get('description','')}"
            for i in audit.get("issues", [])
        )
        hall_text = "\n".join(
            f"- HALLUCINATION: {h.get('claim','')} ({h.get('reason','')})"
            for h in audit.get("hallucinations", [])
        )
        fix_user = (
            f"DRAFT TO FIX:\n\n{json.dumps(draft, ensure_ascii=False)[:12000]}\n\n"
            f"ISSUES:\n{issues_text}\n{hall_text}\n\n"
            "Return the CORRECTED JSON object, same structure, no explanation."
        )
        fixed_raw = mistral_call(DRAFT_SYSTEM, fix_user, temperature=0.2, max_tokens=8000)
        draft = extract_json(fixed_raw)
        draft["id"] = stub["id"]

    return sanitize_deep(draft)


def render_ts_block(record: dict, note: str = "") -> str:
    """Render the record as an indented TS object literal with trailing comma."""
    # Enforce field order matching the TS interface
    ordered_keys = [
        "id", "speakableTerm", "speakable", "mechanism", "evidence",
        "dosing", "interactions", "mistakes", "faq", "sources",
    ]
    ordered = {k: record[k] for k in ordered_keys if k in record}
    body = ts_literal(ordered, indent=1)
    comment = f"  // {note}\n" if note else ""
    return f"{comment}  {body},"


def run(dry_run: bool = False) -> int:
    queue = load_queue()
    if not queue:
        log.info("Queue empty, nothing to enrich")
        return 0

    # Load current TS files (local in dry-run, remote otherwise)
    if dry_run:
        ts_text = TS_PATH_ABS.read_text()
        ingredients_text = INGREDIENTS_TS_ABS.read_text()
    else:
        ts_text, _ = github_get_file(TS_PATH_REL)
        ingredients_text, _ = github_get_file(INGREDIENTS_TS_REL)

    next_id = None
    for candidate in queue:
        if already_enriched(ts_text, candidate):
            log.info("Already enriched: %s, skip", candidate)
            continue
        next_id = candidate
        break

    if not next_id:
        log.info("All queued ingredients already enriched")
        return 0

    stub = get_ingredient_stub(ingredients_text, next_id)
    if not stub:
        log.error("Ingredient stub not found in ingredients.ts: %s", next_id)
        return 2
    log.info("Enriching: %s (%s, grade %s)", next_id, stub["inciName"], stub["score"])

    record = generate(stub)
    block = render_ts_block(record, note=f"Auto-enriched {next_id}")
    updated_ts = commit_path_to_ts(ts_text, block)

    if dry_run:
        preview_path = SCRIPT_DIR / f".dry-run-{next_id}.ts"
        preview_path.write_text(updated_ts)
        log.info("DRY RUN written to %s", preview_path)
        return 0

    commit_msg = f"feat(enrich): auto deep-dive for {next_id} (Mistral draft + Claude audit)"
    github_put_file(TS_PATH_REL, updated_ts, commit_msg)
    # Rotate: move enriched id to the end of the queue (idempotent)
    queue_filtered = [x for x in queue if x != next_id]
    save_queue(queue_filtered)
    # Also commit the updated queue so subsequent runs know it moved
    updated_queue_text = json.dumps(queue_filtered, indent=2) + "\n"
    github_put_file("scripts/ingredients_queue.json", updated_queue_text, f"chore(enrich): queue rotation after {next_id}")
    log.info("Committed %s and rotated queue", next_id)
    return 0


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="Preview without committing")
    args = ap.parse_args()
    sys.exit(run(dry_run=args.dry_run))
