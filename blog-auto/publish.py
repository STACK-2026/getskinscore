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


def find_next_article(articles, published):
    """Find the next article to publish based on date."""
    now = datetime.now(timezone.utc)
    today = now.strftime("%Y-%m-%d")

    for article in articles:
        slug = article["slug"]
        date = article["date"]

        # Skip already published
        if slug in published:
            continue

        # Only publish if date is today or past
        if date <= today:
            return article

    return None


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

    print(f"  Generating article: {title} ({lang})...")

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=8000,
        system=system_prompt,
        messages=[{"role": "user", "content": user_prompt}],
    )

    return message.content[0].text


def write_article(slug, content):
    """Write article to blog directory."""
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    filepath = BLOG_DIR / f"{slug}.md"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  Written to {filepath}")
    return filepath


def git_commit_push(filepath, title):
    """Commit and push the article."""
    try:
        subprocess.run(["git", "add", str(filepath)], check=True)
        subprocess.run(
            ["git", "commit", "-m", f"blog: {title}"],
            check=True,
        )
        subprocess.run(["git", "push"], check=True)
        print("  Committed and pushed.")
    except subprocess.CalledProcessError as e:
        print(f"  Git error: {e}")


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

    article = find_next_article(articles, published)

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
