#!/usr/bin/env python3
"""
getskinscore — mass skincare product scraper using shared Mistral extractor.

Feeds product URLs through the shared extraction framework and writes
JSONL of structured skincare data (INCI, actives, SPF, category, price)
for later Supabase import.

Usage:

    # One URL
    python3 scripts/mistral_scrape.py --url https://www.cerave.com/products/moisturizing-cream

    # Many URLs from a file
    python3 scripts/mistral_scrape.py --urls-file pending/urls.txt --out pending/scraped.jsonl

    # From a sitemap with a filter
    python3 scripts/mistral_scrape.py \
      --sitemap https://www.paulaschoice.com/sitemap.xml \
      --filter /product/ --limit 100

Defaults:
    - output: pending/mistral_scraped.jsonl (append mode, dedup by URL)
    - rate limit: 1.5 s between requests
    - HTML cached in ~/.cache/stack2026/mistral_html/
"""

from __future__ import annotations
import argparse
import json
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "scripts"))
from mistral_extract import (  # type: ignore
    MistralExtractor,
    SKINCARE_SCHEMA,
    clean_main_content,
    fetch_html,
    fetch_sitemap_urls,
)

REPO = Path(__file__).resolve().parents[1]
DEFAULT_OUT = REPO / "pending" / "mistral_scraped.jsonl"


def load_seen(out_path: Path) -> set[str]:
    seen: set[str] = set()
    if out_path.exists():
        for line in out_path.read_text(encoding="utf-8").splitlines():
            try:
                seen.add(json.loads(line)["url"])
            except Exception:
                pass
    return seen


def scrape_one(ex: MistralExtractor, url: str, *, use_cache: bool = True) -> dict:
    html = fetch_html(url, use_cache=use_cache)
    clean = clean_main_content(html)
    data = ex.extract(clean, schema=SKINCARE_SCHEMA)
    data["url"] = url
    return data


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    src = p.add_mutually_exclusive_group(required=True)
    src.add_argument("--url")
    src.add_argument("--urls-file")
    src.add_argument("--sitemap")
    p.add_argument("--filter")
    p.add_argument("--limit", type=int, default=0)
    p.add_argument("--out", type=Path, default=DEFAULT_OUT)
    p.add_argument("--delay", type=float, default=1.5)
    p.add_argument("--no-cache", action="store_true")
    p.add_argument("--model", default=None)
    args = p.parse_args()

    urls: list[str] = []
    if args.url:
        urls = [args.url]
    elif args.urls_file:
        urls = [u.strip() for u in Path(args.urls_file).read_text().splitlines() if u.strip() and not u.startswith("#")]
    elif args.sitemap:
        print(f"[discover] {args.sitemap}", file=sys.stderr)
        urls = fetch_sitemap_urls(args.sitemap, filter_substring=args.filter)
        print(f"[discover] {len(urls)} URLs found", file=sys.stderr)

    if args.limit and len(urls) > args.limit:
        urls = urls[: args.limit]

    args.out.parent.mkdir(parents=True, exist_ok=True)
    seen = load_seen(args.out)

    ex = MistralExtractor(model=args.model)
    ok = 0
    fail = 0

    with args.out.open("a", encoding="utf-8") as f:
        for i, url in enumerate(urls, 1):
            if url in seen:
                print(f"[skip {i}/{len(urls)}] cached {url}", file=sys.stderr)
                continue
            print(f"[{i}/{len(urls)}] {url}", file=sys.stderr)
            try:
                data = scrape_one(ex, url, use_cache=not args.no_cache)
                f.write(json.dumps(data, ensure_ascii=False) + "\n")
                f.flush()
                seen.add(url)
                ok += 1
                print(f"  -> {data.get('brand')} / {data.get('name')} "
                      f"[{len(data.get('inci') or [])} inci]", file=sys.stderr)
            except Exception as e:
                fail += 1
                print(f"  !! {e}", file=sys.stderr)
            if i < len(urls):
                time.sleep(args.delay)

    print(f"\n[done] ok={ok} fail={fail} out={args.out}", file=sys.stderr)


if __name__ == "__main__":
    main()
