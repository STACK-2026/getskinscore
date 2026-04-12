"""
Convert raw INCI product data into TypeScript Product entries.
Reads from products_raw.json, outputs appendable TS code.
Uses scoring_engine.py for automatic scoring.
"""

import json
import re
import sys
sys.path.insert(0, '.')
from scoring_engine import score_product, numeric_to_grade


def slugify(text):
    slug = text.lower()
    slug = re.sub(r'[àáâãäå]', 'a', slug)
    slug = re.sub(r'[èéêë]', 'e', slug)
    slug = re.sub(r'[ìíîï]', 'i', slug)
    slug = re.sub(r'[òóôõö]', 'o', slug)
    slug = re.sub(r'[ùúûü]', 'u', slug)
    slug = re.sub(r'[ç]', 'c', slug)
    slug = re.sub(r'[ñ]', 'n', slug)
    slug = re.sub(r"[''']", '', slug)
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    return slug.strip('-')[:80]


def parse_inci(text):
    """Parse INCI string into ingredient list."""
    parts = [p.strip().rstrip('.') for p in text.split(',')]
    ingredients = []
    for i, part in enumerate(parts):
        name = re.sub(r'\[.*?\]', '', part).strip()
        name = re.sub(r'\((\d+\.?\d*%?)\)', '', name).strip()
        name = name.strip('* ')
        if len(name) < 2 or len(name) > 80:
            continue
        # Extract percentage if present
        pct_match = re.search(r'(\d+\.?\d*)%', part)
        pct = float(pct_match.group(1)) if pct_match else None
        ingredients.append({
            "name": name,
            "position": i + 1,
            "percentage": pct,
        })
    return ingredients


def detect_type(name, category_hint=""):
    text = (name + " " + category_hint).lower()
    if any(w in text for w in ["cleanser", "nettoyant", "wash", "micellar"]):
        return "cleanser"
    if any(w in text for w in ["sunscreen", "spf", "solaire", "uv"]):
        return "sunscreen"
    if any(w in text for w in ["serum", "sérum", "ampoule", "essence", "drops", "potion"]):
        return "serum"
    if any(w in text for w in ["exfoliant", "peel", "scrub", "microfoliant"]):
        return "exfoliant"
    if any(w in text for w in ["mask", "masque"]):
        return "mask"
    if any(w in text for w in ["toner", "tonique", "spray", "mist"]):
        return "toner"
    if any(w in text for w in ["eye"]):
        return "eye-cream"
    if any(w in text for w in ["lip", "baume"]):
        return "lip-care"
    if any(w in text for w in ["body", "corps", "huile"]):
        return "body-care"
    return "moisturizer"


def detect_concerns(ingredients, name):
    text = " ".join([i["name"].lower() for i in ingredients]) + " " + name.lower()
    concerns = []
    if any(w in text for w in ["retinol", "peptide", "collagen", "anti-ag"]):
        concerns.append("anti-aging")
    if any(w in text for w in ["salicylic", "niacinamide", "zinc", "acne", "blemish"]):
        concerns.append("acne")
    if any(w in text for w in ["arbutin", "tranexamic", "kojic", "brightening", "dark spot"]):
        concerns.append("hyperpigmentation")
    if any(w in text for w in ["hyaluronic", "ceramide", "urea", "glycerin", "hydrat", "moisture"]):
        concerns.append("dryness")
    if any(w in text for w in ["centella", "madecassoside", "allantoin", "sensitive", "calming"]):
        concerns.append("sensitivity")
    if any(w in text for w in ["rosacea", "redness", "anti-redness"]):
        concerns.append("rosacea")
    return concerns or ["dryness"]


def detect_skin_types(ingredients, concerns):
    types = ["normal"]
    if "dryness" in concerns or "sensitivity" in concerns:
        types.extend(["dry", "sensitive"])
    if "acne" in concerns:
        types.extend(["oily", "combination"])
    if not any(t in types for t in ["dry", "oily"]):
        types.extend(["combination"])
    return list(set(types))


def convert_product(raw):
    name = raw["name"]
    brand = raw["brand"]
    inci = raw["inci"]
    ptype = raw.get("type") or detect_type(name)
    price = raw.get("price")
    size = raw.get("size")
    country = raw.get("country", "INTL")

    ingredients = parse_inci(inci)
    if len(ingredients) < 3:
        return None

    # Score
    result = score_product(ingredients)
    concerns = detect_concerns(ingredients, name)
    best_for = detect_skin_types(ingredients, concerns)

    slug = slugify(f"{brand}-{name}")

    return {
        "id": slug,
        "name": name,
        "brand": brand,
        "type": ptype,
        "score": result["grade"],
        "scoreNumeric": result["score_numeric"],
        "subScores": {k: v["grade"] for k, v in result["sub_scores"].items()},
        "price": price,
        "size": size,
        "country": country,
        "concerns": concerns,
        "bestFor": best_for,
        "ingredients": [
            {"name": i["name"], "position": i["position"],
             **({"percentage": i["percentage"]} if i.get("percentage") else {})}
            for i in ingredients
        ],
    }


def to_ts(product):
    """Generate TypeScript object literal."""
    p = product
    lines = []
    lines.append(f'  {{')
    lines.append(f'    id: "{p["id"]}",')
    lines.append(f'    name: "{p["name"]}",')
    lines.append(f'    brand: "{p["brand"]}",')
    lines.append(f'    type: "{p["type"]}",')
    lines.append(f'    score: "{p["score"]}",')
    lines.append(f'    scoreNumeric: {p["scoreNumeric"]},')
    ss = p["subScores"]
    lines.append(f'    subScores: {{ efficacy: "{ss["efficacy"]}", safety: "{ss["safety"]}", comedogenicity: "{ss["comedogenicity"]}", transparency: "{ss["transparency"]}", skinTypeFit: "{ss["skin_type_fit"]}" }},')
    if p.get("price"):
        lines.append(f'    price: {p["price"]},')
    if p.get("size"):
        lines.append(f'    size: "{p["size"]}",')
    lines.append(f'    country: "{p["country"]}",')
    lines.append(f'    concerns: {json.dumps(p["concerns"])},')
    lines.append(f'    bestFor: {json.dumps(p["bestFor"])},')

    # Ingredients
    lines.append(f'    ingredients: [')
    for ing in p["ingredients"]:
        pct = f', percentage: {ing["percentage"]}' if ing.get("percentage") else ""
        lines.append(f'      {{ name: "{ing["name"]}", position: {ing["position"]}{pct} }},')
    lines.append(f'    ],')

    # Minimal summary
    lines.append(f'    summary: {{ en: "", fr: "" }},')
    lines.append(f'    strengths: {{ en: [], fr: [] }},')
    lines.append(f'    weaknesses: {{ en: [], fr: [] }},')
    lines.append(f'    claims: {{}},')
    lines.append(f'    tags: [],')
    lines.append(f'  }},')
    return '\n'.join(lines)


if __name__ == "__main__":
    with open("scripts/products_raw.json") as f:
        raw_products = json.load(f)

    print(f"Converting {len(raw_products)} products...\n")

    converted = []
    for raw in raw_products:
        result = convert_product(raw)
        if result:
            converted.append(result)
            print(f"  {result['brand']} - {result['name']}: {result['score']} ({result['scoreNumeric']})")

    print(f"\n{len(converted)} products converted.")

    # Output TS
    ts_output = "\n".join(to_ts(p) for p in converted)
    with open("scripts/products_batch.ts", "w") as f:
        f.write(ts_output)
    print(f"Written to scripts/products_batch.ts")
