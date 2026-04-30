#!/usr/bin/env python3
"""Shared helpers for enrichment crons.

Pipeline: Mistral-large drafts, Claude Sonnet audits, Mistral-large fixes
if audit flags MAJOR issues. Claude is used ONLY for small audit JSON
payloads to keep API cost minimal.

Outputs are appended to the appropriate TS data file via regex insertion,
then committed via GitHub Contents API (atomic, no git push race).
"""
from __future__ import annotations

import base64
import json
import logging
import os
import re
import sys
import time
import urllib.parse
from pathlib import Path
from typing import Any

import requests
from dotenv import load_dotenv

ENV_MASTER = Path.home() / "stack-2026" / ".env.master"
if ENV_MASTER.exists():
    load_dotenv(ENV_MASTER)
load_dotenv()

MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY", "")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")
GITHUB_REPOSITORY = os.getenv("GITHUB_REPOSITORY", "STACK-2026/getskinscore")

MISTRAL_URL = "https://api.mistral.ai/v1/chat/completions"
MISTRAL_LARGE = "mistral-large-latest"
ANTHROPIC_URL = "https://api.anthropic.com/v1/messages"
CLAUDE_SONNET = "claude-sonnet-4-6"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
log = logging.getLogger("enrich")


def mistral_call(system: str, user: str, *, temperature: float = 0.3, max_tokens: int = 8000, retries: int = 3) -> str:
    if not MISTRAL_API_KEY:
        raise RuntimeError("MISTRAL_API_KEY missing")
    payload = {
        "model": MISTRAL_LARGE,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "temperature": temperature,
        "max_tokens": max_tokens,
    }
    last: Exception | None = None
    for attempt in range(retries):
        try:
            r = requests.post(
                MISTRAL_URL,
                json=payload,
                headers={
                    "Authorization": f"Bearer {MISTRAL_API_KEY}",
                    "Content-Type": "application/json",
                },
                timeout=300,
            )
            if r.status_code in (429, 503):
                wait = 5 * (2 ** attempt)
                log.warning("Mistral %s, retry %ss", r.status_code, wait)
                time.sleep(wait)
                continue
            r.raise_for_status()
            return r.json()["choices"][0]["message"]["content"]
        except Exception as e:  # noqa: BLE001
            last = e
            log.warning("Mistral attempt %s failed: %s", attempt + 1, e)
            time.sleep(3)
    raise last or RuntimeError("Mistral failed")


def claude_audit(system: str, user: str, *, max_tokens: int = 1500, retries: int = 3) -> str:
    if not ANTHROPIC_API_KEY:
        raise RuntimeError("ANTHROPIC_API_KEY missing")
    payload = {
        "model": CLAUDE_SONNET,
        "max_tokens": max_tokens,
        "system": system,
        "messages": [{"role": "user", "content": user}],
    }
    last: Exception | None = None
    for attempt in range(retries):
        try:
            r = requests.post(
                ANTHROPIC_URL,
                json=payload,
                headers={
                    "x-api-key": ANTHROPIC_API_KEY,
                    "anthropic-version": "2023-06-01",
                    "content-type": "application/json",
                },
                timeout=120,
            )
            if r.status_code in (429, 529):
                wait = 10 * (2 ** attempt)
                log.warning("Claude %s, retry %ss", r.status_code, wait)
                time.sleep(wait)
                continue
            r.raise_for_status()
            blocks = r.json().get("content", [])
            return "".join(b.get("text", "") for b in blocks)
        except Exception as e:  # noqa: BLE001
            last = e
            log.warning("Claude attempt %s failed: %s", attempt + 1, e)
            time.sleep(5)
    raise last or RuntimeError("Claude audit failed")


def extract_json(text: str) -> dict:
    """Extract the first balanced JSON object from LLM output."""
    # Strip markdown fences if present
    t = text.strip()
    t = re.sub(r"^```(?:json)?\s*\n", "", t)
    t = re.sub(r"\n```\s*$", "", t)
    # Find first { and match braces
    start = t.find("{")
    if start == -1:
        raise ValueError("No JSON object in response")
    depth = 0
    for i, ch in enumerate(t[start:], start):
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return json.loads(t[start:i + 1], strict=False)
    raise ValueError("Unbalanced JSON braces")


def ts_literal(value: Any, indent: int = 0) -> str:
    """Render a Python value as a TypeScript object literal.

    Strings are wrapped in JSON-safe double quotes. Arrays use TS syntax.
    Keys are emitted unquoted when they are valid identifiers, else quoted.
    """
    pad = "  " * indent
    if isinstance(value, str):
        return json.dumps(value, ensure_ascii=False)
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    if value is None:
        return "undefined"
    if isinstance(value, list):
        if not value:
            return "[]"
        inner = ",\n".join(pad + "  " + ts_literal(v, indent + 1) for v in value)
        return "[\n" + inner + "\n" + pad + "]"
    if isinstance(value, dict):
        if not value:
            return "{}"
        parts = []
        for k, v in value.items():
            key = k if re.fullmatch(r"[A-Za-z_$][A-Za-z0-9_$]*", k) else json.dumps(k)
            parts.append(pad + "  " + key + ": " + ts_literal(v, indent + 1))
        return "{\n" + ",\n".join(parts) + "\n" + pad + "}"
    raise TypeError(f"Unsupported TS type: {type(value)}")


def _gh_headers() -> dict:
    return {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }


def _git_db_put_file(path: str, content: str, message: str, branch: str = "main") -> str:
    """PUT via Git Database API for files >1MB (cap Contents API).
    blob -> tree -> commit -> ref update. Returns blob SHA."""
    base = f"https://api.github.com/repos/{GITHUB_REPOSITORY}"
    h = _gh_headers()
    r = requests.post(f"{base}/git/blobs", headers=h, json={
        "content": base64.b64encode(content.encode()).decode(),
        "encoding": "base64",
    }, timeout=60)
    r.raise_for_status()
    blob_sha = r.json()["sha"]
    r = requests.get(f"{base}/git/refs/heads/{branch}", headers=h, timeout=30)
    r.raise_for_status()
    parent = r.json()["object"]["sha"]
    r = requests.get(f"{base}/git/commits/{parent}", headers=h, timeout=30)
    r.raise_for_status()
    base_tree = r.json()["tree"]["sha"]
    r = requests.post(f"{base}/git/trees", headers=h, json={
        "base_tree": base_tree,
        "tree": [{"path": path, "mode": "100644", "type": "blob", "sha": blob_sha}],
    }, timeout=60)
    r.raise_for_status()
    tree_sha = r.json()["sha"]
    r = requests.post(f"{base}/git/commits", headers=h, json={
        "message": message,
        "tree": tree_sha,
        "parents": [parent],
    }, timeout=30)
    r.raise_for_status()
    commit_sha = r.json()["sha"]
    r = requests.patch(f"{base}/git/refs/heads/{branch}", headers=h, json={"sha": commit_sha}, timeout=30)
    r.raise_for_status()
    return blob_sha


def github_put_file(path: str, content: str, message: str, branch: str = "main") -> str:
    """Idempotent PUT. Falls back to Git DB API for files >1MB (Contents API cap)."""
    if not GITHUB_TOKEN:
        raise RuntimeError("GITHUB_TOKEN missing")
    if len(content.encode()) > 1_000_000:
        return _git_db_put_file(path, content, message, branch)
    api = f"https://api.github.com/repos/{GITHUB_REPOSITORY}/contents/{urllib.parse.quote(path)}"
    headers = _gh_headers()
    sha = None
    r = requests.get(api, headers=headers, params={"ref": branch}, timeout=30)
    if r.status_code == 200:
        sha = r.json().get("sha")
    body = {
        "message": message,
        "content": base64.b64encode(content.encode()).decode(),
        "branch": branch,
    }
    if sha:
        body["sha"] = sha
    for attempt in range(3):
        r = requests.put(api, headers=headers, json=body, timeout=30)
        if r.status_code in (200, 201):
            return r.json()["content"]["sha"]
        if r.status_code in (409, 422):
            log.warning("GitHub PUT conflict %s, refetch SHA", r.status_code)
            rr = requests.get(api, headers=headers, params={"ref": branch}, timeout=30)
            if rr.status_code == 200:
                body["sha"] = rr.json().get("sha")
            time.sleep(2)
            continue
        r.raise_for_status()
    raise RuntimeError(f"GitHub PUT failed after retries: {r.status_code} {r.text[:300]}")


def github_get_file(path: str, branch: str = "main") -> tuple[str, str]:
    """Fetch (text, sha). Files >1MB return empty content via Contents API:
    fall back to Git Blobs API (100MB cap). products.ts (~4MB) hits this path."""
    if not GITHUB_TOKEN:
        raise RuntimeError("GITHUB_TOKEN missing")
    api = f"https://api.github.com/repos/{GITHUB_REPOSITORY}/contents/{urllib.parse.quote(path)}"
    r = requests.get(
        api,
        headers=_gh_headers(),
        params={"ref": branch},
        timeout=30,
    )
    r.raise_for_status()
    data = r.json()
    sha = data["sha"]
    if data.get("content"):
        return base64.b64decode(data["content"]).decode(), sha
    blob = requests.get(
        f"https://api.github.com/repos/{GITHUB_REPOSITORY}/git/blobs/{sha}",
        headers=_gh_headers(),
        timeout=60,
    )
    blob.raise_for_status()
    return base64.b64decode(blob.json()["content"]).decode(), sha


def sanitize(s: str) -> str:
    """Strip em-dashes, en-dashes and stray smart quotes per STACK-2026 rule."""
    s = s.replace("—", ", ").replace("–", "-")
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    return s


def sanitize_deep(obj: Any) -> Any:
    if isinstance(obj, str):
        return sanitize(obj)
    if isinstance(obj, list):
        return [sanitize_deep(x) for x in obj]
    if isinstance(obj, dict):
        return {k: sanitize_deep(v) for k, v in obj.items()}
    return obj


def commit_path_to_ts(ts_text: str, block: str) -> str:
    """Insert a TS object literal before the closing `];` of the array."""
    m = re.search(r"\n\];\s*(\n\s*export function|\Z)", ts_text)
    if not m:
        raise ValueError("Cannot locate closing `];` of the data array")
    end = m.start()
    # Ensure a trailing comma before insertion
    before = ts_text[:end].rstrip()
    if not before.endswith(","):
        before = before + ","
    return before + "\n" + block + "\n" + ts_text[end:]
