#!/usr/bin/env python3
"""Generate a StarProductContent review for the next product in the queue.

Same Mistral-draft + Claude-audit pipeline as enrich_ingredient.py, output
format matches the StarProductContent interface defined in
site/src/data/star-product-content.ts.
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
QUEUE_PATH = SCRIPT_DIR / "products_queue.json"
TS_PATH_REL = "site/src/data/star-product-content.ts"
TS_PATH_ABS = REPO_ROOT / TS_PATH_REL
PRODUCTS_TS_REL = "site/src/data/products.ts"
PRODUCTS_TS_ABS = REPO_ROOT / PRODUCTS_TS_REL

DRAFT_SYSTEM = """You are a senior dermatology-aware copywriter for SkinScore (getskinscore.com), an independent skincare rating platform.

Produce a full StarProductContent editorial for a SINGLE skincare product, EN + FR, with honest and evidence-oriented tone. Brand voice: anti-marketing, science-backed, tutoiement in French.

OUTPUT: single JSON object, no markdown fences, matching EXACTLY:
{
  "editorialReview": {"en": "...", "fr": "..."},   // 140-220 words each, full verdict with score context and 2-3 named ingredient facts
  "howToUse": {"en": "...", "fr": "..."},          // 80-140 words each, frequency, AM/PM, layering, format caveats
  "whoIsItFor": {"en": "...", "fr": "..."},        // 60-120 words each, skin types and concerns that fit, honest "not ideal for" line
  "whatToExpect": {"en": "...", "fr": "..."},      // 80-140 words each, timeline (week 1, week 4, week 12), realistic outcomes
  "commonMistakes": {"en": "...", "fr": "..."},    // 80-140 words each, 2-3 recurring misuses, use real newline between items, not bullets
  "faq": [                                         // exactly 3 entries
    {"question": {"en": "...", "fr": "..."}, "answer": {"en": "...", "fr": "..."}}
  ],
  "vsCompetitors": [                               // exactly 2 entries, real comparison with other Skincore products
    {"competitorId": "slug-of-existing-product", "competitorName": "Brand ProductName",
     "verdict": {"en": "...", "fr": "..."}}
  ]
}

STACK-2026 HARD RULES:
- Zero em-dash (U+2014), zero en-dash (U+2013). Use commas, colons, periods, or simple hyphens.
- French uses tutoiement ("tu/ton/tes") with proper accents (é è ê à ç ô û ï).
- No invented dermatologist quotes. No fabricated marketing claims.
- Concentrations and clinical claims must be defensible against the product INCI or published literature. If unknown, state "undisclosed" rather than invent.
- For vsCompetitors, pick competitorId values that EXIST in the SkinScore product catalog (the prompt will list candidates).
- Editorial tone must acknowledge the grade honestly: A means strong endorsement, B means good with caveats, C means mid-tier with alternatives, D or E means avoid.
"""

AUDIT_SYSTEM = """You audit a JSON product review draft for STACK-2026 quality.

Return ONLY JSON:
{
  "verdict": "CLEAN" | "MINOR" | "MAJOR",
  "issues": [{"field": "...", "severity": "MINOR|MAJOR", "description": "..."}],
  "hallucinations": [{"claim": "max 150 chars", "reason": "..."}]
}

MAJOR:
- em-dash or en-dash anywhere
- French without accents (e.g. "efficacite" instead of "efficacité")
- French in vouvoiement instead of tutoiement
- fabricated dermatologist quotes or unsourced clinical numbers
- vsCompetitors with wrong competitor ID not present in product catalog (list supplied with draft)
- any section under word-count minimum: editorialReview<120, howToUse<60, whoIsItFor<50, whatToExpect<60, commonMistakes<60
- missing required sections, fewer than 3 FAQ entries or fewer than 2 vsCompetitors

MINOR:
- phrasing, redundancy, minor inconsistencies

IGNORE: opinion, tone."""


def load_queue() -> list[str]:
    return json.loads(QUEUE_PATH.read_text())


def save_queue(q: list[str]) -> None:
    QUEUE_PATH.write_text(json.dumps(q, indent=2) + "\n")


def already_enriched(ts_text: str, product_id: str) -> bool:
    return bool(re.search(r'id:\s*"' + re.escape(product_id) + r'"', ts_text))


def get_product_stub(ts_text: str, product_id: str) -> dict | None:
    m = re.search(r'\n  \{\s*\n\s*id:\s*"' + re.escape(product_id) + r'"[\s\S]*?\n  \}', ts_text)
    if not m:
        return None
    block = m.group()
    def field(name: str) -> str | None:
        fm = re.search(rf'{name}:\s*"([^"]+)"', block)
        return fm.group(1) if fm else None
    def bilingual(name: str) -> dict | None:
        fm = re.search(rf'{name}:\s*\{{\s*en:\s*"([^"]+)"\s*,\s*fr:\s*"([^"]+)"', block)
        return {"en": fm.group(1), "fr": fm.group(2)} if fm else None
    def number(name: str) -> float | None:
        fm = re.search(rf'{name}:\s*([0-9.]+)', block)
        return float(fm.group(1)) if fm else None
    return {
        "id": product_id,
        "brand": field("brand"),
        "name": field("name"),
        "type": field("type"),
        "score": field("score"),
        "scoreNumeric": number("scoreNumeric"),
        "summary": bilingual("summary"),
    }


def list_candidate_competitors(ts_text: str, own_type: str | None, own_id: str) -> list[dict]:
    """Return a short list of products in the same category for competitor picks."""
    ids = re.findall(r'id:\s*"([^"]+)"', ts_text)
    rows: list[dict] = []
    seen: set[str] = set()
    for pid in ids:
        if pid == own_id or pid in seen:
            continue
        seen.add(pid)
        stub = get_product_stub(ts_text, pid)
        if not stub:
            continue
        if own_type and stub.get("type") != own_type:
            continue
        rows.append({"id": stub["id"], "brand": stub["brand"], "name": stub["name"], "score": stub["score"]})
        if len(rows) >= 20:
            break
    return rows


def build_user_prompt(stub: dict, candidates: list[dict]) -> str:
    candidate_block = "\n".join(
        f"  - {c['id']} ({c['brand']} {c['name']}, grade {c['score']})" for c in candidates
    )
    if not candidate_block:
        candidate_block = "  (no same-category candidates, you may omit the vsCompetitors entry if needed)"
    return f"""Product to review:
- id: {stub['id']}
- Brand: {stub['brand']}
- Name: {stub['name']}
- Category: {stub['type']}
- SkinScore grade: {stub['score']} ({stub['scoreNumeric']}/100)
- Summary (EN): {stub['summary']['en'] if stub['summary'] else ''}
- Summary (FR): {stub['summary']['fr'] if stub['summary'] else ''}

Competitor candidates (same category) you MAY choose from for vsCompetitors:
{candidate_block}

Produce the JSON now, EN and FR both fully populated, grade treated honestly."""


def generate(stub: dict, candidates: list[dict]) -> dict:
    raw = mistral_call(DRAFT_SYSTEM, build_user_prompt(stub, candidates), temperature=0.3, max_tokens=8000)
    draft = extract_json(raw)
    draft["id"] = stub["id"]

    audit_ctx = f"DRAFT:\n\n{json.dumps(draft, ensure_ascii=False)[:12000]}\n\nCOMPETITOR CATALOG:\n{json.dumps([c['id'] for c in candidates])}"
    audit_raw = claude_audit(AUDIT_SYSTEM, audit_ctx, max_tokens=1500)
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
        fix_user = (
            f"DRAFT TO FIX:\n\n{json.dumps(draft, ensure_ascii=False)[:12000]}\n\n"
            f"ISSUES:\n{issues_text}\n\nReturn CORRECTED JSON object, same structure, no explanation."
        )
        fixed_raw = mistral_call(DRAFT_SYSTEM, fix_user, temperature=0.2, max_tokens=8000)
        draft = extract_json(fixed_raw)
        draft["id"] = stub["id"]

    return sanitize_deep(draft)


def render_ts_block(record: dict) -> str:
    ordered_keys = [
        "id", "editorialReview", "howToUse", "whoIsItFor", "whatToExpect",
        "commonMistakes", "faq", "vsCompetitors",
    ]
    ordered = {k: record[k] for k in ordered_keys if k in record}
    body = ts_literal(ordered, indent=1)
    return f"  {body},"


def run(dry_run: bool = False) -> int:
    queue = load_queue()
    if not queue:
        log.info("Queue empty")
        return 0

    if dry_run:
        ts_text = TS_PATH_ABS.read_text()
        products_text = PRODUCTS_TS_ABS.read_text()
    else:
        ts_text, _ = github_get_file(TS_PATH_REL)
        products_text, _ = github_get_file(PRODUCTS_TS_REL)

    next_id = None
    for candidate in queue:
        if already_enriched(ts_text, candidate):
            log.info("Already enriched: %s", candidate)
            continue
        next_id = candidate
        break

    if not next_id:
        log.info("All queued products already enriched")
        return 0

    stub = get_product_stub(products_text, next_id)
    if not stub:
        log.error("Product stub not found in products.ts: %s", next_id)
        return 2

    candidates = list_candidate_competitors(products_text, stub.get("type"), next_id)
    log.info("Enriching: %s (%s, grade %s), %d competitor candidates",
             next_id, stub.get("brand"), stub.get("score"), len(candidates))

    record = generate(stub, candidates)
    block = render_ts_block(record)
    updated_ts = commit_path_to_ts(ts_text, block)

    if dry_run:
        preview = SCRIPT_DIR / f".dry-run-product-{next_id}.ts"
        preview.write_text(updated_ts)
        log.info("DRY RUN written to %s", preview)
        return 0

    commit_msg = f"feat(enrich): auto star content for {next_id} (Mistral draft + Claude audit)"
    github_put_file(TS_PATH_REL, updated_ts, commit_msg)
    queue_filtered = [x for x in queue if x != next_id]
    save_queue(queue_filtered)
    github_put_file("scripts/products_queue.json", json.dumps(queue_filtered, indent=2) + "\n", f"chore(enrich): queue rotation after {next_id}")
    log.info("Committed %s", next_id)
    return 0


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    sys.exit(run(dry_run=args.dry_run))
