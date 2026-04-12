#!/usr/bin/env python3
"""
SkinScore OG Image Generator
Generates 1200x630 PNG OG images for product, ingredient, and brand pages.
Uses PIL (Pillow) to create simple but branded images.

Usage:
  pip install Pillow
  python3 scripts/generate_og_images.py --type products --limit 50
  python3 scripts/generate_og_images.py --type ingredients
  python3 scripts/generate_og_images.py --type brands --limit 30
"""

import argparse
import json
import os
import re
import sys

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Install Pillow: pip install Pillow")
    sys.exit(1)

# Brand colors
VIOLET = (124, 58, 237)
INDIGO = (79, 70, 229)
WHITE = (255, 255, 255)
SLATE_800 = (30, 41, 59)
SLATE_500 = (100, 116, 139)
GRADE_COLORS = {
    "A": (16, 185, 129),
    "B": (52, 211, 153),
    "C": (251, 191, 36),
    "D": (249, 115, 22),
    "E": (239, 68, 68),
}

OUTPUT_DIR = "site/public/og"
WIDTH = 1200
HEIGHT = 630


def get_font(size, bold=False):
    """Try to load a system font, fallback to default."""
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    bold_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ]

    paths = bold_paths if bold else font_paths
    for path in paths:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except:
                continue

    return ImageFont.load_default()


def create_gradient_bg():
    """Create a violet-to-indigo gradient background."""
    img = Image.new("RGB", (WIDTH, HEIGHT), WHITE)
    draw = ImageDraw.Draw(img)

    for y in range(HEIGHT):
        ratio = y / HEIGHT
        r = int(VIOLET[0] + (INDIGO[0] - VIOLET[0]) * ratio)
        g = int(VIOLET[1] + (INDIGO[1] - VIOLET[1]) * ratio)
        b = int(VIOLET[2] + (INDIGO[2] - VIOLET[2]) * ratio)
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

    return img, draw


def draw_grade_badge(draw, x, y, grade, size=80):
    """Draw a circular grade badge."""
    color = GRADE_COLORS.get(grade, GRADE_COLORS["C"])
    draw.ellipse([x, y, x + size, y + size], fill=color)
    font = get_font(int(size * 0.55), bold=True)
    bbox = font.getbbox(grade)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x + (size - tw) / 2, y + (size - th) / 2 - 4), grade, fill=WHITE, font=font)


def truncate(text, max_len=50):
    if len(text) <= max_len:
        return text
    return text[:max_len - 3] + "..."


def generate_product_og(product_id, brand, name, score, score_numeric):
    """Generate OG image for a product page."""
    img, draw = create_gradient_bg()

    # SkinScore logo text
    font_logo = get_font(28, bold=True)
    draw.text((60, 40), "SkinScore", fill=(255, 255, 255, 200), font=font_logo)

    # Grade badge (large)
    draw_grade_badge(draw, 60, 140, score, size=160)

    # Score number
    font_score = get_font(48, bold=True)
    draw.text((240, 160), f"{score_numeric}/100", fill=WHITE, font=font_score)

    # Brand
    font_brand = get_font(28)
    draw.text((240, 230), truncate(brand, 40), fill=(200, 200, 255), font=font_brand)

    # Product name
    font_name = get_font(42, bold=True)
    draw.text((240, 270), truncate(name, 35), fill=WHITE, font=font_name)

    # Tagline
    font_tag = get_font(22)
    draw.text((60, HEIGHT - 80), "Independent skincare ratings | getskinscore.com", fill=(180, 180, 220), font=font_tag)

    # Save
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    filepath = os.path.join(OUTPUT_DIR, f"product-{product_id}.png")
    img.save(filepath, "PNG", optimize=True)
    return filepath


def generate_ingredient_og(ingredient_id, name, score, category):
    """Generate OG image for an ingredient page."""
    img, draw = create_gradient_bg()

    font_logo = get_font(28, bold=True)
    draw.text((60, 40), "SkinScore", fill=(255, 255, 255, 200), font=font_logo)

    draw_grade_badge(draw, 60, 160, score, size=140)

    font_name = get_font(52, bold=True)
    draw.text((230, 180), truncate(name, 30), fill=WHITE, font=font_name)

    font_cat = get_font(26)
    draw.text((230, 250), category.replace("_", " ").title(), fill=(200, 200, 255), font=font_cat)

    font_tag = get_font(22)
    draw.text((60, HEIGHT - 80), "Ingredient decoded | getskinscore.com", fill=(180, 180, 220), font=font_tag)

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    filepath = os.path.join(OUTPUT_DIR, f"ingredient-{ingredient_id}.png")
    img.save(filepath, "PNG", optimize=True)
    return filepath


def generate_brand_og(brand_slug, brand_name, avg_score, product_count):
    """Generate OG image for a brand page."""
    img, draw = create_gradient_bg()

    font_logo = get_font(28, bold=True)
    draw.text((60, 40), "SkinScore", fill=(255, 255, 255, 200), font=font_logo)

    draw_grade_badge(draw, 60, 160, avg_score, size=140)

    font_name = get_font(52, bold=True)
    draw.text((230, 170), truncate(brand_name, 25), fill=WHITE, font=font_name)

    font_sub = get_font(28)
    draw.text((230, 240), f"{product_count} products rated", fill=(200, 200, 255), font=font_sub)

    font_tag = get_font(22)
    draw.text((60, HEIGHT - 80), "Brand ratings | getskinscore.com", fill=(180, 180, 220), font=font_tag)

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    filepath = os.path.join(OUTPUT_DIR, f"brand-{brand_slug}.png")
    img.save(filepath, "PNG", optimize=True)
    return filepath


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--type", choices=["products", "ingredients", "brands"], required=True)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    # Read products.ts to extract data
    with open("site/src/data/products.ts") as f:
        content = f.read()

    if args.type == "products":
        # Extract product data
        pattern = r'id: "([^"]+)".*?brand: "([^"]+)".*?name: "([^"]+)".*?score: "([A-E])".*?scoreNumeric: (\d+)'
        matches = re.findall(pattern, content, re.DOTALL)

        count = 0
        for pid, brand, name, score, score_num in matches:
            if args.limit and count >= args.limit:
                break
            filepath = generate_product_og(pid, brand, name, score, int(score_num))
            count += 1
            if count % 50 == 0:
                print(f"  Generated {count} product OG images...")

        print(f"Generated {count} product OG images in {OUTPUT_DIR}/")

    elif args.type == "ingredients":
        with open("site/src/data/ingredients.ts") as f:
            ing_content = f.read()

        pattern = r'id: "([^"]+)".*?name: \{ en: "([^"]+)".*?score: "([A-E])".*?category: "([^"]+)"'
        matches = re.findall(pattern, ing_content, re.DOTALL)

        count = 0
        for iid, name, score, category in matches:
            filepath = generate_ingredient_og(iid, name, score, category)
            count += 1

        print(f"Generated {count} ingredient OG images in {OUTPUT_DIR}/")

    elif args.type == "brands":
        # Extract unique brands with avg scores
        brand_pattern = r'brand: "([^"]+)".*?scoreNumeric: (\d+)'
        matches = re.findall(brand_pattern, content, re.DOTALL)

        brands = {}
        for brand, score in matches:
            if brand not in brands:
                brands[brand] = {"scores": [], "count": 0}
            brands[brand]["scores"].append(int(score))
            brands[brand]["count"] += 1

        count = 0
        for brand, data in sorted(brands.items(), key=lambda x: -x[1]["count"]):
            if args.limit and count >= args.limit:
                break
            avg = sum(data["scores"]) // len(data["scores"])
            grade = "A" if avg >= 85 else "B" if avg >= 70 else "C" if avg >= 55 else "D" if avg >= 40 else "E"
            slug = re.sub(r'[^a-z0-9]+', '-', brand.lower()).strip('-')
            if len(slug) >= 2:
                filepath = generate_brand_og(slug, brand, grade, data["count"])
                count += 1

        print(f"Generated {count} brand OG images in {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
