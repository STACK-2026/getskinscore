#!/usr/bin/env python3
"""
SkinScore Blog Auto - Publish next scheduled article
Generates article via Claude API, writes to site/src/content/blog/, commits + pushes.
"""

import anthropic
import json
import os
import re
import subprocess
import sys
import random
from datetime import datetime, timezone, timedelta
from pathlib import Path

import sys as _sys_mistral
_sys_mistral.path.insert(0, str(Path(__file__).parent))
try:
    from mistral_pipeline import generate_with_mistral_audit as _mistral_gen
except Exception:
    _mistral_gen = None


# Config
SITE_DIR = Path(__file__).parent.parent / "site"
BLOG_DIR = SITE_DIR / "src" / "content" / "blog"
ARTICLES_FILE = Path(__file__).parent / "articles.json"
PROMPT_FILE = Path(__file__).parent / "prompts" / "article-seo.md"
LOG_DIR = Path(__file__).parent / "logs"

SITE_URL = os.environ.get("SITE_URL", "https://getskinscore.com")


def load_articles():
    with open(ARTICLES_FILE) as f:
        return json.load(f)


def load_prompt():
    with open(PROMPT_FILE) as f:
        return f.read()


def get_published_slugs():
    """Get slugs already published."""
    slugs = set()
    if BLOG_DIR.exists():
        for f in BLOG_DIR.glob("*.md"):
            slugs.add(f.stem)
    return slugs


def find_next_article(articles, published, force=False):
    """Find the next article to publish based on date."""
    now = datetime.now(timezone.utc)
    today = now.strftime("%Y-%m-%d")

    for article in articles:
        slug = article["slug"]
        date = article["date"]

        # Skip already published
        if slug in published:
            continue

        # Force mode: publish next regardless of date
        if force:
            return article

        # Only publish if date is today or past
        if date <= today:
            return article

    return None



def _build_serp_enrichment(article):
    """Returns SERP brief enrichment text to append to user_prompt, or empty string."""
    serp_brief = (article.get("serp_brief") or {}).get("brief")
    if not serp_brief:
        return ""
    top10 = serp_brief.get("top10", [])
    weak_angles = serp_brief.get("weak_angles", [])
    winning_moves = serp_brief.get("winning_moves", [])
    must_sections = serp_brief.get("must_include_sections", [])
    citable_facts = serp_brief.get("citable_facts_to_verify", [])
    entities = serp_brief.get("entities_to_mention", [])
    target_words = serp_brief.get("target_word_count", 3500)
    intent = serp_brief.get("intent_type", "informational")
    snippet_opp = serp_brief.get("featured_snippet_opportunity", "")
    serp_features = serp_brief.get("serp_features_detected", [])
    competitors_block = "\n".join(
        f"  #{c.get('rank','?')} {c.get('domain','?')} : angle=\"{c.get('main_angle','')[:120]}\" | weakness=\"{c.get('weakness','')[:100]}\""
        for c in top10[:10]
    )
    return f"""

BRIEF SERP (analyse Gemini + Google Search grounding, top 10)
=============================================================

INTENT : {intent}
TARGET WORDS : {target_words} (>= 3500 requis pour standard STACK-2026)
SERP FEATURES : {", ".join(serp_features) if serp_features else "aucune"}
FEATURED SNIPPET : {snippet_opp}

TOP 10 CONCURRENTS :
{competitors_block}

ANGLES FAIBLES A EXPLOITER :
""" + "\n".join(f"  - {a}" for a in weak_angles) + f"""

WINNING MOVES (pour battre le top 3) :
""" + "\n".join(f"  - {m}" for m in winning_moves) + f"""

SECTIONS H2 OBLIGATOIRES (inspire-toi, reformule pour ta voix) :
""" + "\n".join(f"  - {s}" for s in must_sections) + f"""

FAITS CITABLES (verifie avant de reutiliser) :
""" + "\n".join(f"  - {fact}" for fact in citable_facts) + f"""

ENTITES A MENTIONNER : {", ".join(entities)}

REGLE : ton article doit etre SUPERIEUR au top 3 en (1) profondeur sur les weak_angles, (2) execution des winning_moves, (3) clarte/citabilite LLM, (4) E-E-A-T."""



def generate_article(article, system_prompt):
    """Generate article content via Claude API."""
    client = anthropic.Anthropic()

    lang = article.get("lang", "en")
    title = article.get(f"title_{lang}") or article.get("title_en") or article.get("title_fr")
    keywords = article.get("keywords", "")
    category = article.get("category", "ingredients")
    author_id = article.get("author", "dr-elena-voss")

    author_names = {
        "dr-elena-voss": "Dr. Elena Voss",
        "marc-severin": "Marc Severin",
        "dr-sarah-chen": "Dr. Sarah Chen",
        "lina-park": "Lina Park",
    }
    author = author_names.get(author_id, "Dr. Elena Voss")

    # Random time between 7h-9h
    hour = random.randint(7, 8)
    minute = random.randint(0, 59)
    second = random.randint(0, 59)
    date_str = f"{article['date']}T{hour:02d}:{minute:02d}:{second:02d}+02:00"

    user_prompt = f"""Write a complete blog article for SkinScore ({SITE_URL}).

Title: {title}
Language: {lang}
Category: {category}
Keywords: {keywords}
Author: {author}
Date: {date_str}

Requirements:
- Follow ALL rules from the system prompt
- Minimum 2000 words
- Include frontmatter in the exact format specified
- Include internal links to SkinScore pages (e.g., [CeraVe Moisturizing Cream]({SITE_URL}/product/cerave-moisturizing-cream))
- Include external links to authority sources
- Include FAQ section (2-3 questions)
- Include Sources section with links
- Use Unsplash image URL for the hero image (search for a relevant skincare/beauty photo)
- Set lastReviewed to {article['date']}
- Set reviewedBy to "SkinScore Research Team"

Write the complete article now, starting with the frontmatter."""
    user_prompt = user_prompt + _build_serp_enrichment(article)

    print(f"  Generating article: {title} ({lang})...")

    if _mistral_gen and os.environ.get("MISTRAL_API_KEY"):
        try:
            print(f"  [pipeline] Mistral+Claude-audit")
            return _mistral_gen(system_prompt, user_prompt, max_tokens=14000)
        except Exception as e:
            print(f"  [pipeline] Mistral failed, fallback Claude: {e}")

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=8000,
        system=system_prompt,
        messages=[{"role": "user", "content": user_prompt}],
    )

    return message.content[0].text


def clamp_frontmatter_description(content, max_len=160):
    """Clamp frontmatter `description:` to Astro schema max. Truncate at last word boundary."""
    lines = content.split("\n")
    for i, line in enumerate(lines):
        if line.startswith("description:"):
            # extract value between quotes (or unquoted)
            raw = line[len("description:"):].strip()
            quote = ""
            if raw.startswith(('"', "'")) and raw.endswith(raw[0]) and len(raw) >= 2:
                quote = raw[0]
                value = raw[1:-1]
            else:
                value = raw
            if len(value) > max_len:
                # truncate at last word boundary before max_len, strip trailing punctuation
                truncated = value[:max_len].rsplit(" ", 1)[0].rstrip(",.;: ")
                lines[i] = f'description: {quote}{truncated}{quote}'
                print(f"  Clamped description from {len(value)} -> {len(truncated)} chars")
            break
    return "\n".join(lines)


def write_article(slug, content):
    """Write article to blog directory."""
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    content = clamp_frontmatter_description(content)
    filepath = BLOG_DIR / f"{slug}.md"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  Written to {filepath}")
    return filepath


def git_commit_push(filepath, title):
    """Push via GitHub Contents API - atomic, no race conditions."""
    import base64, requests, os
    token = os.getenv("GITHUB_TOKEN") or os.getenv("GH_TOKEN")
    repo  = os.getenv("GITHUB_REPOSITORY")
    if not token or not repo:
        print("  GITHUB_TOKEN or GITHUB_REPOSITORY missing")
        return False

    rel = str(filepath).split("/site/")[-1]
    rel = "site/" + rel if not rel.startswith("site/") else rel
    api = f"https://api.github.com/repos/{repo}/contents/{rel}"
    headers = {"Authorization": f"Bearer {token}", "Accept": "application/vnd.github+json"}
    content_b64 = base64.b64encode(open(filepath, "rb").read()).decode()

    for attempt in range(1, 6):
        sha = None
        r = requests.get(api, headers=headers, params={"ref": "main"}, timeout=30)
        if r.status_code == 200:
            sha = r.json().get("sha")
        elif r.status_code != 404:
            print(f"  API GET error {r.status_code}")
            return False
        payload = {"message": f"blog: {title}", "content": content_b64, "branch": "main"}
        if sha:
            payload["sha"] = sha
        r = requests.put(api, headers=headers, json=payload, timeout=30)
        if r.status_code in (200, 201):
            print(f"  API PUT OK (attempt {attempt}).")
            return True
        if r.status_code in (409, 422):
            print(f"  API PUT conflict, retrying ({attempt}/5)")
            continue
        print(f"  API PUT error {r.status_code}: {r.text[:200]}")
        return False
    print("  API PUT failed after 5 retries")
    return False

def log_result(slug, success, error=None):
    """Log publication result."""
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    log_file = LOG_DIR / f"{datetime.now().strftime('%Y-%m-%d')}.log"
    with open(log_file, "a") as f:
        status = "OK" if success else f"FAIL: {error}"
        f.write(f"{datetime.now().isoformat()} | {slug} | {status}\n")


def main():
    force = "--force" in sys.argv

    print("SkinScore Blog Auto")
    print(f"  Site: {SITE_URL}")
    print(f"  Blog dir: {BLOG_DIR}")

    articles = load_articles()
    published = get_published_slugs()
    system_prompt = load_prompt()

    print(f"  Articles planned: {len(articles)}")
    print(f"  Already published: {len(published)}")

    article = find_next_article(articles, published, force=force)

    if not article:
        print("  No article to publish today.")
        return

    slug = article["slug"]
    lang = article.get("lang", "en")
    title = article.get(f"title_{lang}") or article.get("title_en") or article.get("title_fr")

    print(f"\n  Next article: {title}")
    print(f"  Slug: {slug}")
    print(f"  Date: {article['date']}")

    try:
        content = generate_article(article, system_prompt)

        # Validate content
        if "---" not in content[:10]:
            print("  WARNING: Content may not have frontmatter")

        filepath = write_article(slug, content)
        git_commit_push(filepath, title)
        log_result(slug, True)
        print(f"\n  Published: {title}")

    except Exception as e:
        print(f"\n  ERROR: {e}")
        log_result(slug, False, str(e))
        raise


if __name__ == "__main__":
    main()
