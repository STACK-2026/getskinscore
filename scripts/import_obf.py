"""
SkinScore — Open Beauty Facts bulk importer
Downloads skincare products with complete INCI lists from Open Beauty Facts API.
Filters, scores, and outputs TypeScript product entries.

Usage:
  python3 scripts/import_obf.py --limit 100 --dry-run
  python3 scripts/import_obf.py --limit 500 --output site/src/data/products_obf.ts
"""

import argparse
import json
import re
import time
import urllib.request
import urllib.parse
from typing import Optional

# Skincare category keywords (OBF uses free-text categories)
SKINCARE_CATEGORIES = [
    "moisturizer", "cleanser", "serum", "sunscreen", "cream", "lotion",
    "face wash", "toner", "mask", "exfoliant", "eye cream", "lip",
    "hydratant", "nettoyant", "creme", "soin", "solaire", "masque",
    "micellar", "moisturiser", "facial", "skincare", "skin care",
    "anti-aging", "anti-age", "acne", "body lotion", "body cream",
    "hand cream", "night cream", "day cream",
]

# Map OBF categories to our ProductType
def detect_product_type(name: str, categories: str) -> Optional[str]:
    text = (name + " " + categories).lower()
    if any(w in text for w in ["cleanser", "nettoyant", "face wash", "micellar", "demaquill"]):
        return "cleanser"
    if any(w in text for w in ["sunscreen", "spf", "solaire", "sun protection", "uv"]):
        return "sunscreen"
    if any(w in text for w in ["serum", "sérum", "concentrate", "ampoule", "essence"]):
        return "serum"
    if any(w in text for w in ["exfoliant", "peel", "scrub", "gommage", "aha", "bha"]):
        return "exfoliant"
    if any(w in text for w in ["mask", "masque"]):
        return "mask"
    if any(w in text for w in ["toner", "tonique", "lotion tonique", "toning"]):
        return "toner"
    if any(w in text for w in ["eye cream", "contour yeux", "eye"]):
        return "eye-cream"
    if any(w in text for w in ["lip", "lèvre", "baume"]):
        return "lip-care"
    if any(w in text for w in ["body", "corps"]):
        return "body-care"
    if any(w in text for w in ["moistur", "cream", "crème", "hydrat", "lotion"]):
        return "moisturizer"
    return None


def parse_inci(inci_text: str) -> list[dict]:
    """Parse INCI text into structured ingredient list."""
    if not inci_text:
        return []

    # Clean up common formatting issues
    text = inci_text.strip()
    text = re.sub(r'\s+', ' ', text)

    # Split on commas (standard INCI separator)
    parts = [p.strip().rstrip('.') for p in text.split(',')]
    ingredients = []

    for i, part in enumerate(parts):
        if not part or len(part) < 2:
            continue
        # Clean ingredient name
        name = re.sub(r'\[.*?\]', '', part).strip()
        name = re.sub(r'\(.*?\)', '', name).strip()
        name = name.strip('* ')

        if len(name) < 2 or len(name) > 100:
            continue

        ingredients.append({
            "name": name,
            "position": i + 1,
        })

    return ingredients


def slugify(text: str) -> str:
    """Create URL-safe slug."""
    slug = text.lower()
    slug = re.sub(r'[àáâãäå]', 'a', slug)
    slug = re.sub(r'[èéêë]', 'e', slug)
    slug = re.sub(r'[ìíîï]', 'i', slug)
    slug = re.sub(r'[òóôõö]', 'o', slug)
    slug = re.sub(r'[ùúûü]', 'u', slug)
    slug = re.sub(r'[ñ]', 'n', slug)
    slug = re.sub(r'[ç]', 'c', slug)
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    return slug[:80]


def fetch_products(page: int = 1, page_size: int = 100) -> dict:
    """Fetch products from Open Beauty Facts API."""
    params = {
        "action": "process",
        "json": "1",
        "page_size": str(page_size),
        "page": str(page),
        "fields": "code,product_name,brands,ingredients_text,categories,image_url,image_front_url,quantity,countries",
        "tagtype_0": "states",
        "tag_contains_0": "contains",
        "tag_0": "en:ingredients-completed",
    }

    url = "https://world.openbeautyfacts.org/cgi/search.pl?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "SkinScore/1.0 (contact@getskinscore.com)"})

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read())
    except Exception as e:
        print(f"  [error] Page {page}: {e}")
        return {"products": []}


def is_skincare(product: dict) -> bool:
    """Check if a product is skincare (not makeup, hair, etc.)."""
    name = (product.get("product_name") or "").lower()
    categories = (product.get("categories") or "").lower()
    text = name + " " + categories

    # Exclude non-skincare
    excludes = ["shampoo", "shampooing", "hair", "cheveux", "parfum", "perfume",
                "deodorant", "déodorant", "toothpaste", "dentifrice", "makeup", "maquillage",
                "mascara", "lipstick", "rouge", "foundation", "fond de teint",
                "nail", "ongle", "shower gel", "gel douche", "bath", "bain"]
    if any(w in text for w in excludes):
        return False

    # Include skincare
    return any(w in text for w in SKINCARE_CATEGORIES)


def process_product(raw: dict) -> Optional[dict]:
    """Process a raw OBF product into SkinScore format."""
    name = raw.get("product_name", "").strip()
    brand = raw.get("brands", "").strip()
    inci_text = raw.get("ingredients_text", "").strip()
    categories = raw.get("categories", "")

    # Skip if missing essential data
    if not name or not brand or not inci_text or len(inci_text) < 20:
        return None

    # Skip if not skincare
    if not is_skincare(raw):
        return None

    # Detect product type
    product_type = detect_product_type(name, categories)
    if not product_type:
        return None

    # Parse INCI
    ingredients = parse_inci(inci_text)
    if len(ingredients) < 3:
        return None

    # Generate slug
    slug = slugify(f"{brand}-{name}")
    if not slug or len(slug) < 5:
        return None

    # Get image
    image = raw.get("image_front_url") or raw.get("image_url") or None

    # Detect country
    countries = (raw.get("countries") or "").lower()
    country = "INTL"
    if "france" in countries:
        country = "FR"
    elif "united states" in countries:
        country = "US"
    elif "united kingdom" in countries:
        country = "UK"
    elif "germany" in countries or "deutschland" in countries:
        country = "DE"
    elif "korea" in countries:
        country = "KR"
    elif "japan" in countries:
        country = "JP"

    return {
        "id": slug,
        "name": name,
        "brand": brand.split(",")[0].strip(),  # Take first brand if multiple
        "type": product_type,
        "barcode": raw.get("code"),
        "image": image,
        "country": country,
        "ingredients": ingredients,
        "inci_raw": inci_text,
        "size": raw.get("quantity"),
    }


def main():
    parser = argparse.ArgumentParser(description="Import skincare products from Open Beauty Facts")
    parser.add_argument("--limit", type=int, default=100, help="Max products to import")
    parser.add_argument("--output", type=str, default=None, help="Output file path")
    parser.add_argument("--dry-run", action="store_true", help="Print stats without writing")
    args = parser.parse_args()

    print(f"SkinScore OBF Importer — fetching up to {args.limit} skincare products...\n")

    all_products = []
    page = 1
    seen_slugs = set()

    while len(all_products) < args.limit:
        print(f"  Fetching page {page}...")
        data = fetch_products(page=page, page_size=100)
        raw_products = data.get("products", [])

        if not raw_products:
            print("  No more products.")
            break

        for raw in raw_products:
            if len(all_products) >= args.limit:
                break

            processed = process_product(raw)
            if processed and processed["id"] not in seen_slugs:
                seen_slugs.add(processed["id"])
                all_products.append(processed)

        print(f"  -> {len(all_products)} skincare products so far")
        page += 1
        time.sleep(1)  # Be polite to the API

    print(f"\n=== RESULTS ===")
    print(f"Total skincare products: {len(all_products)}")

    # Stats
    types = {}
    countries = {}
    for p in all_products:
        types[p["type"]] = types.get(p["type"], 0) + 1
        countries[p["country"]] = countries.get(p["country"], 0) + 1

    print(f"\nBy type:")
    for t, c in sorted(types.items(), key=lambda x: -x[1]):
        print(f"  {t}: {c}")

    print(f"\nBy country:")
    for co, c in sorted(countries.items(), key=lambda x: -x[1]):
        print(f"  {co}: {c}")

    print(f"\nWith images: {sum(1 for p in all_products if p.get('image'))}")
    print(f"Avg ingredients: {sum(len(p['ingredients']) for p in all_products) / max(len(all_products), 1):.1f}")

    if args.dry_run:
        print("\n[DRY RUN] No files written.")
        # Print first 5 as examples
        for p in all_products[:5]:
            print(f"\n  {p['brand']} - {p['name']}")
            print(f"  Type: {p['type']} | Country: {p['country']} | Ingredients: {len(p['ingredients'])}")
            print(f"  INCI: {p['inci_raw'][:100]}...")
        return

    if args.output:
        # Write as JSON for further processing
        with open(args.output, "w") as f:
            json.dump(all_products, f, indent=2, ensure_ascii=False)
        print(f"\nWritten to {args.output}")
    else:
        # Write as JSON to stdout
        print(json.dumps(all_products[:5], indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
