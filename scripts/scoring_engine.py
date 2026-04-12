"""
SkinScore Scoring Engine
Scores skincare products from A to E across 5 dimensions.
Based on EU CosIng data, SCCS safety opinions, and dermatology research.
"""

# --- Grade thresholds ---
def numeric_to_grade(n: float) -> str:
    if n >= 85: return "A"
    if n >= 70: return "B"
    if n >= 55: return "C"
    if n >= 40: return "D"
    return "E"


# --- Proven active ingredients with efficacy tiers ---
PROVEN_ACTIVES = {
    # Tier 1: gold standard, extensive clinical evidence
    "retinol": {"tier": 1, "concerns": ["anti-aging", "acne", "hyperpigmentation"]},
    "tretinoin": {"tier": 1, "concerns": ["anti-aging", "acne"]},
    "adapalene": {"tier": 1, "concerns": ["acne"]},
    "niacinamide": {"tier": 1, "concerns": ["acne", "hyperpigmentation", "anti-aging", "pores", "oiliness"]},
    "ascorbic acid": {"tier": 1, "concerns": ["anti-aging", "hyperpigmentation"]},
    "salicylic acid": {"tier": 1, "concerns": ["acne", "pores", "oiliness"]},
    "glycolic acid": {"tier": 1, "concerns": ["anti-aging", "hyperpigmentation", "acne"]},
    "lactic acid": {"tier": 1, "concerns": ["dryness", "anti-aging", "hyperpigmentation"]},
    "hyaluronic acid": {"tier": 1, "concerns": ["dryness", "anti-aging"]},
    "azelaic acid": {"tier": 1, "concerns": ["acne", "rosacea", "hyperpigmentation"]},
    "benzoyl peroxide": {"tier": 1, "concerns": ["acne"]},
    "zinc oxide": {"tier": 1, "concerns": ["sensitivity", "rosacea"]},
    "titanium dioxide": {"tier": 1, "concerns": ["sensitivity"]},
    "ceramide np": {"tier": 1, "concerns": ["dryness", "sensitivity"]},
    "ceramide ap": {"tier": 1, "concerns": ["dryness", "sensitivity"]},
    "ceramide eop": {"tier": 1, "concerns": ["dryness", "sensitivity"]},

    # Tier 2: good evidence, widely recommended
    "alpha arbutin": {"tier": 2, "concerns": ["hyperpigmentation"]},
    "tranexamic acid": {"tier": 2, "concerns": ["hyperpigmentation"]},
    "kojic acid": {"tier": 2, "concerns": ["hyperpigmentation"]},
    "panthenol": {"tier": 2, "concerns": ["dryness", "sensitivity"]},
    "allantoin": {"tier": 2, "concerns": ["sensitivity", "dryness"]},
    "squalane": {"tier": 2, "concerns": ["dryness"]},
    "tocopherol": {"tier": 2, "concerns": ["anti-aging"]},
    "tocopheryl acetate": {"tier": 2, "concerns": ["anti-aging"]},
    "bakuchiol": {"tier": 2, "concerns": ["anti-aging"]},
    "centella asiatica extract": {"tier": 2, "concerns": ["sensitivity", "rosacea", "anti-aging"]},
    "madecassoside": {"tier": 2, "concerns": ["sensitivity", "rosacea"]},
    "bisabolol": {"tier": 2, "concerns": ["sensitivity", "rosacea"]},
    "licorice root extract": {"tier": 2, "concerns": ["hyperpigmentation", "sensitivity"]},
    "glycyrrhiza glabra root extract": {"tier": 2, "concerns": ["hyperpigmentation", "sensitivity"]},
    "peptide": {"tier": 2, "concerns": ["anti-aging"]},  # generic match
    "copper tripeptide-1": {"tier": 2, "concerns": ["anti-aging"]},
    "palmitoyl tripeptide-1": {"tier": 2, "concerns": ["anti-aging"]},
    "matrixyl": {"tier": 2, "concerns": ["anti-aging"]},
    "mandelic acid": {"tier": 2, "concerns": ["acne", "hyperpigmentation"]},
    "phytic acid": {"tier": 2, "concerns": ["hyperpigmentation"]},
    "sodium hyaluronate": {"tier": 2, "concerns": ["dryness", "anti-aging"]},
    "urea": {"tier": 2, "concerns": ["dryness"]},

    # Tier 3: emerging evidence or traditional use
    "green tea extract": {"tier": 3, "concerns": ["anti-aging"]},
    "resveratrol": {"tier": 3, "concerns": ["anti-aging"]},
    "ferulic acid": {"tier": 3, "concerns": ["anti-aging"]},
    "coenzyme q10": {"tier": 3, "concerns": ["anti-aging"]},
    "snail secretion filtrate": {"tier": 3, "concerns": ["anti-aging", "dryness"]},
    "rice bran extract": {"tier": 3, "concerns": ["hyperpigmentation"]},
    "turmeric extract": {"tier": 3, "concerns": ["hyperpigmentation"]},
    "tea tree oil": {"tier": 3, "concerns": ["acne"]},
    "willow bark extract": {"tier": 3, "concerns": ["acne", "pores"]},
}

# --- Harmful / concerning ingredients ---
HARMFUL_INGREDIENTS = {
    # Severe: EU-banned or heavily restricted
    "hydroquinone": {"severity": "severe", "reason": "EU-banned in cosmetics (except prescription), cytotoxic"},
    "formaldehyde": {"severity": "severe", "reason": "Carcinogen (IARC Group 1), EU-banned as preservative"},
    "mercury": {"severity": "severe", "reason": "Neurotoxin, EU-banned"},

    # High concern: endocrine disruptors, strong sensitizers
    "butylparaben": {"severity": "high", "reason": "Endocrine disruptor, SCCS restricted"},
    "propylparaben": {"severity": "high", "reason": "Endocrine disruptor, SCCS restricted"},
    "oxybenzone": {"severity": "high", "reason": "Endocrine disruptor, coral reef damage, photoallergy"},
    "benzophenone-3": {"severity": "high", "reason": "Same as oxybenzone"},
    "octinoxate": {"severity": "high", "reason": "Endocrine disruptor, environmental concern"},
    "ethylhexyl methoxycinnamate": {"severity": "high", "reason": "Same as octinoxate"},
    "triclosan": {"severity": "high", "reason": "Endocrine disruptor, antibiotic resistance"},
    "bha": {"severity": "high", "reason": "Butylated hydroxyanisole, possible endocrine disruptor"},
    "resorcinol": {"severity": "high", "reason": "Endocrine disruptor, skin sensitizer"},

    # Moderate concern: irritants, questionable preservatives
    "alcohol denat": {"severity": "moderate", "reason": "Drying, disrupts skin barrier at high concentrations"},
    "sd alcohol": {"severity": "moderate", "reason": "Same as alcohol denat"},
    "fragrance": {"severity": "moderate", "reason": "Top allergen (EU 26 allergens), undisclosed mix"},
    "parfum": {"severity": "moderate", "reason": "Same as fragrance"},
    "methylisothiazolinone": {"severity": "moderate", "reason": "Strong sensitizer, EU-restricted in leave-on"},
    "methylchloroisothiazolinone": {"severity": "moderate", "reason": "Strong sensitizer, EU-restricted"},
    "sodium lauryl sulfate": {"severity": "moderate", "reason": "Irritant, strips skin barrier"},
    "sodium laureth sulfate": {"severity": "moderate", "reason": "Mild irritant, less harsh than SLS"},
    "dmdm hydantoin": {"severity": "moderate", "reason": "Formaldehyde releaser"},
    "imidazolidinyl urea": {"severity": "moderate", "reason": "Formaldehyde releaser"},
    "diazolidinyl urea": {"severity": "moderate", "reason": "Formaldehyde releaser"},
    "quaternium-15": {"severity": "moderate", "reason": "Formaldehyde releaser"},
    "bronopol": {"severity": "moderate", "reason": "Formaldehyde releaser"},

    # Low concern: generally safe but with caveats
    "phenoxyethanol": {"severity": "low", "reason": "Safe at EU limit (1%), mild sensitizer for some"},
    "ethylhexylglycerin": {"severity": "low", "reason": "Generally safe, rare sensitizer"},
    "dimethicone": {"severity": "low", "reason": "Safe, but occlusive, may trap irritants"},
    "mineral oil": {"severity": "low", "reason": "Comedogenic for some, not harmful"},
    "petrolatum": {"severity": "low", "reason": "Safe, very occlusive"},
}

# --- Comedogenic ratings (0-5 scale, classic dermatology scale) ---
COMEDOGENIC = {
    "coconut oil": 4,
    "cocoa butter": 4,
    "wheat germ oil": 5,
    "isopropyl myristate": 5,
    "isopropyl palmitate": 4,
    "soybean oil": 3,
    "corn oil": 3,
    "myristyl myristate": 5,
    "acetylated lanolin": 4,
    "algae extract": 4,
    "carrageenan": 5,
    "lauric acid": 4,
    "myristic acid": 3,
    "oleic acid": 3,
    "palmitic acid": 2,
    "stearic acid": 2,
    "shea butter": 0,
    "argan oil": 0,
    "jojoba oil": 2,
    "rosehip oil": 1,
    "squalane": 0,
    "niacinamide": 0,
    "hyaluronic acid": 0,
    "glycerin": 0,
    "dimethicone": 1,
    "mineral oil": 2,
    "petrolatum": 0,
    "lanolin": 2,
    "beeswax": 2,
}


def score_efficacy(ingredients: list[dict]) -> int:
    """
    30% weight. Evaluates presence and position of proven active ingredients.
    """
    score = 50  # baseline
    actives_found = []

    for i, ing in enumerate(ingredients):
        name = ing.get("name", "").lower().strip()
        position = ing.get("position", i + 1)

        for active_name, active_data in PROVEN_ACTIVES.items():
            if active_name in name:
                tier = active_data["tier"]
                # Tier 1 active in top 10 = major boost
                if tier == 1 and position <= 10:
                    score += 12
                elif tier == 1:
                    score += 7
                elif tier == 2 and position <= 10:
                    score += 8
                elif tier == 2:
                    score += 5
                elif tier == 3:
                    score += 3
                actives_found.append(active_name)
                break

    # Bonus for multiple actives (synergy)
    if len(actives_found) >= 4:
        score += 10
    elif len(actives_found) >= 2:
        score += 5

    # Penalty for no actives at all
    if len(actives_found) == 0:
        score -= 20

    return max(0, min(100, score))


def score_safety(ingredients: list[dict]) -> int:
    """
    25% weight. Penalizes harmful, restricted, or sensitizing ingredients.
    """
    score = 90  # start high, deduct

    for ing in ingredients:
        name = ing.get("name", "").lower().strip()
        position = ing.get("position", 99)

        for harmful_name, data in HARMFUL_INGREDIENTS.items():
            if harmful_name in name:
                severity = data["severity"]
                if severity == "severe":
                    score -= 40
                elif severity == "high":
                    # Worse if in top positions (higher concentration)
                    score -= 25 if position <= 5 else 15
                elif severity == "moderate":
                    score -= 12 if position <= 5 else 7
                elif severity == "low":
                    score -= 3
                break

    return max(0, min(100, score))


def score_comedogenicity(ingredients: list[dict]) -> int:
    """
    20% weight. Evaluates pore-clogging risk of the formula.
    """
    score = 85  # start good
    total_comedogenic_weight = 0

    for i, ing in enumerate(ingredients):
        name = ing.get("name", "").lower().strip()
        position = ing.get("position", i + 1)

        for comedogenic_name, rating in COMEDOGENIC.items():
            if comedogenic_name in name:
                if rating >= 4:
                    # Highly comedogenic in top 5 = big penalty
                    penalty = 20 if position <= 5 else 10
                    score -= penalty
                elif rating >= 3:
                    penalty = 10 if position <= 5 else 5
                    score -= penalty
                elif rating >= 2:
                    score -= 2
                total_comedogenic_weight += rating
                break

    return max(0, min(100, score))


def score_transparency(ingredients: list[dict], claims: dict = None) -> int:
    """
    15% weight. Evaluates ingredient disclosure and brand transparency.
    """
    score = 50  # baseline

    # Full INCI list provided?
    if len(ingredients) >= 5:
        score += 15
    if len(ingredients) >= 15:
        score += 10

    # Percentages disclosed?
    has_percentages = any(ing.get("percentage") for ing in ingredients)
    if has_percentages:
        score += 15

    # Claims/certifications
    if claims:
        if claims.get("cruelty_free"):
            score += 5
        if claims.get("vegan"):
            score += 3
        if claims.get("fragrance_free"):
            score += 5
        if claims.get("dermatologist_tested"):
            score += 5
        if claims.get("certified_organic"):
            score += 5

    # Penalty for vague ingredients
    vague_terms = ["fragrance", "parfum", "flavor", "aroma", "color"]
    for ing in ingredients:
        name = ing.get("name", "").lower().strip()
        if any(v in name for v in vague_terms):
            score -= 8

    return max(0, min(100, score))


def score_skin_type_fit(ingredients: list[dict], skin_type: str = "normal") -> int:
    """
    10% weight. How well the formula suits a specific skin type.
    """
    score = 70  # baseline

    ingredient_names = [ing.get("name", "").lower().strip() for ing in ingredients]
    all_text = " ".join(ingredient_names)

    if skin_type == "dry":
        # Boost for hydrating, emollient ingredients
        hydrators = ["hyaluronic acid", "sodium hyaluronate", "glycerin", "squalane",
                      "ceramide", "shea butter", "panthenol", "urea", "allantoin"]
        for h in hydrators:
            if h in all_text:
                score += 5
        # Penalty for drying ingredients
        if "alcohol denat" in all_text or "sd alcohol" in all_text:
            score -= 20
        if "salicylic acid" in all_text:
            score -= 5

    elif skin_type == "oily":
        # Boost for oil control, lightweight
        if "niacinamide" in all_text: score += 10
        if "salicylic acid" in all_text: score += 8
        if "zinc" in all_text: score += 5
        # Penalty for heavy oils/butters
        heavy = ["coconut oil", "cocoa butter", "shea butter", "mineral oil"]
        for h in heavy:
            if h in all_text: score -= 8

    elif skin_type == "sensitive":
        # Boost for soothing
        soothers = ["centella", "madecassoside", "bisabolol", "allantoin", "panthenol", "ceramide"]
        for s in soothers:
            if s in all_text: score += 5
        # Strong penalty for irritants
        irritants = ["fragrance", "parfum", "alcohol denat", "essential oil",
                     "menthol", "camphor", "sodium lauryl sulfate"]
        for ir in irritants:
            if ir in all_text: score -= 12

    elif skin_type == "combination":
        # Balanced approach
        if "niacinamide" in all_text: score += 8
        if "hyaluronic acid" in all_text: score += 5

    return max(0, min(100, score))


def score_product(ingredients: list[dict], claims: dict = None, skin_type: str = "normal") -> dict:
    """
    Main scoring function. Returns full score breakdown.

    Args:
        ingredients: list of {"name": str, "position": int, "percentage": float|None}
        claims: dict of boolean flags (cruelty_free, vegan, fragrance_free, etc.)
        skin_type: "dry"|"oily"|"combination"|"sensitive"|"normal"

    Returns:
        {
            "score_numeric": int (0-100),
            "grade": str (A-E),
            "sub_scores": {
                "efficacy": {"numeric": int, "grade": str},
                "safety": {"numeric": int, "grade": str},
                "comedogenicity": {"numeric": int, "grade": str},
                "transparency": {"numeric": int, "grade": str},
                "skin_type_fit": {"numeric": int, "grade": str},
            }
        }
    """
    eff = score_efficacy(ingredients)
    saf = score_safety(ingredients)
    com = score_comedogenicity(ingredients)
    tra = score_transparency(ingredients, claims)
    fit = score_skin_type_fit(ingredients, skin_type)

    # Weighted final score
    final = (eff * 0.30) + (saf * 0.25) + (com * 0.20) + (tra * 0.15) + (fit * 0.10)
    final = round(final)

    return {
        "score_numeric": final,
        "grade": numeric_to_grade(final),
        "sub_scores": {
            "efficacy": {"numeric": eff, "grade": numeric_to_grade(eff)},
            "safety": {"numeric": saf, "grade": numeric_to_grade(saf)},
            "comedogenicity": {"numeric": com, "grade": numeric_to_grade(com)},
            "transparency": {"numeric": tra, "grade": numeric_to_grade(tra)},
            "skin_type_fit": {"numeric": fit, "grade": numeric_to_grade(fit)},
        },
    }


if __name__ == "__main__":
    # Test with CeraVe Moisturizing Cream
    test_product = [
        {"name": "Aqua", "position": 1},
        {"name": "Glycerin", "position": 2},
        {"name": "Cetearyl Alcohol", "position": 3},
        {"name": "Caprylic/Capric Triglyceride", "position": 4},
        {"name": "Cetyl Alcohol", "position": 5},
        {"name": "Ceramide NP", "position": 6},
        {"name": "Ceramide AP", "position": 7},
        {"name": "Ceramide EOP", "position": 8},
        {"name": "Carbomer", "position": 9},
        {"name": "Dimethicone", "position": 10},
        {"name": "Petrolatum", "position": 11},
        {"name": "Niacinamide", "position": 12},
        {"name": "Cholesterol", "position": 13},
        {"name": "Hyaluronic Acid", "position": 14},
        {"name": "Sodium Lauroyl Lactylate", "position": 15},
        {"name": "Phytosphingosine", "position": 16},
        {"name": "Xanthan Gum", "position": 17},
        {"name": "Phenoxyethanol", "position": 18},
        {"name": "Ethylhexylglycerin", "position": 19},
        {"name": "Sodium Hydroxide", "position": 20},
    ]

    result = score_product(
        test_product,
        claims={"fragrance_free": True, "dermatologist_tested": True, "cruelty_free": False},
        skin_type="dry",
    )

    print(f"CeraVe Moisturizing Cream: {result['grade']} ({result['score_numeric']}/100)")
    for dim, data in result["sub_scores"].items():
        print(f"  {dim}: {data['grade']} ({data['numeric']})")
