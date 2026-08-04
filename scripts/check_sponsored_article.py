#!/usr/bin/env python3
"""Validate the non-negotiable terms of a sponsored Markdown article."""

from __future__ import annotations

import argparse
import re
import sys
from datetime import datetime
from pathlib import Path


FRONTMATTER_RE = re.compile(r"\A---\s*\n(?P<frontmatter>.*?)\n---\s*\n", re.DOTALL)
WORD_RE = re.compile(r"\b[\wÀ-ÖØ-öø-ÿ]+(?:['’\-][\wÀ-ÖØ-öø-ÿ]+)*\b", re.UNICODE)
DISCLOSURE_RE = re.compile(
    r"\b(?:article\s+sponsoris[ée]|contenu\s+sponsoris[ée]|partenariat\s+r[ée]mun[ée]r[ée])\b",
    re.IGNORECASE,
)


def markdown_to_prose(markdown: str) -> str:
    """Remove URLs and lightweight Markdown syntax without dropping link labels."""
    text = re.sub(r"```.*?```", " ", markdown, flags=re.DOTALL)
    text = re.sub(r"!\[([^\]]*)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"[#>*_`~|]", " ", text)


def validate(
    path: Path,
    target_url: str,
    minimum_words: int,
    max_link_word: int,
    anchor_text: str | None = None,
) -> list[str]:
    if not path.is_file():
        return [f"article not found: {path}"]

    raw = path.read_text(encoding="utf-8")
    match = FRONTMATTER_RE.match(raw)
    if not match:
        return ["missing YAML frontmatter"]

    frontmatter = match.group("frontmatter")
    body = raw[match.end() :]
    errors: list[str] = []

    words = WORD_RE.findall(markdown_to_prose(body))
    if len(words) < minimum_words:
        errors.append(f"article has {len(words)} words; minimum is {minimum_words}")

    target_match = re.search(
        rf"(?:\[[^\]]+\]\({re.escape(target_url)}\)|<a\s+[^>]*href=[\"']{re.escape(target_url)}[\"'][^>]*>)",
        body,
        flags=re.IGNORECASE,
    )
    if not target_match:
        errors.append(f"missing target link: {target_url}")
    else:
        words_before_link = len(WORD_RE.findall(markdown_to_prose(body[: target_match.start()])))
        if words_before_link > max_link_word:
            errors.append(
                f"target link starts after word {words_before_link}; must appear by word {max_link_word}"
            )
        if re.search(r"rel=[\"'][^\"']*nofollow", target_match.group(0), re.IGNORECASE):
            errors.append("target link contains rel=nofollow")

        if anchor_text is not None:
            markdown_anchor = re.search(
                rf"\[(?P<label>[^\]]+)\]\({re.escape(target_url)}\)",
                body,
            )
            html_anchor = re.search(
                rf"<a\s+[^>]*href=[\"']{re.escape(target_url)}[\"'][^>]*>"
                rf"(?P<label>.*?)</a>",
                body,
                flags=re.IGNORECASE | re.DOTALL,
            )
            actual_anchor = markdown_anchor or html_anchor
            actual_text = (
                re.sub(r"<[^>]+>", "", actual_anchor.group("label")).strip()
                if actual_anchor
                else None
            )
            if actual_text != anchor_text:
                errors.append(
                    f"target link anchor is {actual_text!r}; expected {anchor_text!r}"
                )

    has_frontmatter_image = bool(re.search(r"(?m)^image:\s*[\"']?\S+", frontmatter))
    has_body_image = bool(re.search(r"!\[[^\]]*\]\([^)]+\)", body))
    if not (has_frontmatter_image or has_body_image):
        errors.append("missing article image")

    if not DISCLOSURE_RE.search(body):
        errors.append("missing sponsorship disclosure")
    if re.search(r"rocketlinks", raw, re.IGNORECASE):
        errors.append("forbidden platform name present")
    if not re.search(r"(?m)^draft:\s*false\s*$", frontmatter):
        errors.append("frontmatter must contain draft: false")
    if not re.search(r"(?m)^lang:\s*[\"']?fr[\"']?\s*$", frontmatter):
        errors.append("frontmatter must contain lang: fr")

    date_match = re.search(r"(?m)^date:\s*[\"']?([^\"'\n]+)[\"']?\s*$", frontmatter)
    if not date_match:
        errors.append("frontmatter must contain a publication date")
    else:
        try:
            publication_date = datetime.fromisoformat(date_match.group(1).strip())
            comparison_now = datetime.now(publication_date.tzinfo) if publication_date.tzinfo else datetime.now()
            if publication_date > comparison_now:
                errors.append(
                    f"publication date is in the future: {publication_date.isoformat()}"
                )
        except ValueError:
            errors.append(f"invalid publication date: {date_match.group(1).strip()}")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("article", type=Path)
    parser.add_argument("--target-url", required=True)
    parser.add_argument("--anchor-text")
    parser.add_argument("--minimum-words", type=int, default=1000)
    parser.add_argument("--max-link-word", type=int, default=150)
    args = parser.parse_args()

    errors = validate(
        args.article,
        args.target_url,
        args.minimum_words,
        args.max_link_word,
        args.anchor_text,
    )
    if errors:
        for error in errors:
            print(f"FAIL: {error}", file=sys.stderr)
        return 1

    print(f"PASS: {args.article} satisfies the sponsored-article brief")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
