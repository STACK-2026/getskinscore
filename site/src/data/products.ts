// SkinScore Product Database
// Each product scored via scoring_engine.py, with full INCI decoded.

import type { ScoreGrade } from "./ingredients";

export type ProductType =
  | "cleanser"
  | "moisturizer"
  | "serum"
  | "sunscreen"
  | "exfoliant"
  | "mask"
  | "toner"
  | "eye-cream"
  | "lip-care"
  | "body-care";

export type SkinType = "dry" | "oily" | "combination" | "sensitive" | "normal";

export interface ProductIngredient {
  name: string;       // INCI name as on packaging
  ingredientId?: string; // link to ingredients.ts
  position: number;
  percentage?: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  type: ProductType;
  score: ScoreGrade;
  scoreNumeric: number;
  subScores: {
    efficacy: ScoreGrade;
    safety: ScoreGrade;
    comedogenicity: ScoreGrade;
    transparency: ScoreGrade;
    skinTypeFit: ScoreGrade;
  };
  price?: number;       // EUR approximate
  size?: string;        // "50ml", "200ml"
  image?: string;
  country?: string;
  ingredients: ProductIngredient[];
  concerns: string[];   // skin concerns it addresses
  bestFor: SkinType[];
  summary: { en: string; fr: string };
  strengths: { en: string[]; fr: string[] };
  weaknesses: { en: string[]; fr: string[] };
  claims?: {
    vegan?: boolean;
    crueltyFree?: boolean;
    fragranceFree?: boolean;
    dermatologistTested?: boolean;
    certifiedOrganic?: boolean;
  };
  tags: string[];
}

export const products: Product[] = [
  // ===========================
  // CERAVE
  // ===========================
  {
    id: "cerave-moisturizing-cream",
    name: "Moisturizing Cream",
    brand: "CeraVe",
    type: "moisturizer",
    score: "A",
    scoreNumeric: 88,
    subScores: { efficacy: "A", safety: "B", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 15,
    size: "340g",
    country: "US",
    concerns: ["dryness", "sensitivity"],
    bestFor: ["dry", "normal", "sensitive"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Glycerin", ingredientId: "glycerin", position: 2 },
      { name: "Cetearyl Alcohol", position: 3 },
      { name: "Caprylic/Capric Triglyceride", position: 4 },
      { name: "Cetyl Alcohol", position: 5 },
      { name: "Ceramide NP", ingredientId: "ceramide-np", position: 6 },
      { name: "Ceramide AP", position: 7 },
      { name: "Ceramide EOP", position: 8 },
      { name: "Carbomer", position: 9 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 10 },
      { name: "Petrolatum", position: 11 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 12 },
      { name: "Cholesterol", position: 13 },
      { name: "Hyaluronic Acid", ingredientId: "hyaluronic-acid", position: 14 },
      { name: "Sodium Lauroyl Lactylate", position: 15 },
      { name: "Phytosphingosine", position: 16 },
      { name: "Xanthan Gum", position: 17 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 18 },
      { name: "Ethylhexylglycerin", position: 19 },
      { name: "Sodium Hydroxide", position: 20 },
    ],
    summary: {
      en: "The gold standard drugstore moisturizer. Three essential ceramides (NP, AP, EOP) with hyaluronic acid and niacinamide rebuild the skin barrier while locking in moisture. Developed with dermatologists, fragrance-free, suitable for eczema-prone skin.",
      fr: "La reference des hydratants en pharmacie. Trois ceramides essentiels (NP, AP, EOP) avec acide hyaluronique et niacinamide restaurent la barriere cutanee. Developpe avec des dermatologues, sans parfum, adapte aux peaux a tendance eczema.",
    },
    strengths: {
      en: ["Three essential ceramides for barrier repair", "Fragrance-free, non-irritating", "Niacinamide + hyaluronic acid", "Excellent value (large format)"],
      fr: ["Trois ceramides essentiels pour la barriere", "Sans parfum, non irritant", "Niacinamide + acide hyaluronique", "Excellent rapport qualite-prix (grand format)"],
    },
    weaknesses: {
      en: ["Contains petrolatum (occlusive, may feel heavy)", "Dimethicone can trap irritants", "No active anti-aging ingredients"],
      fr: ["Contient de la vaseline (occlusif, peut etre lourd)", "Le dimethicone peut pieger des irritants", "Pas d'actifs anti-age"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["ceramides", "fragrance-free", "dermatologist-developed", "barrier-repair"],
  },
  {
    id: "cerave-foaming-cleanser",
    name: "Foaming Facial Cleanser",
    brand: "CeraVe",
    type: "cleanser",
    score: "A",
    scoreNumeric: 85,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 12,
    size: "236ml",
    country: "US",
    concerns: ["acne", "oiliness"],
    bestFor: ["oily", "combination", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Cocamidopropyl Hydroxysultaine", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Sodium Lauroyl Sarcosinate", position: 4 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 5 },
      { name: "PEG-150 Pentaerythrityl Tetrastearate", position: 6 },
      { name: "Ceramide NP", ingredientId: "ceramide-np", position: 7 },
      { name: "Ceramide AP", position: 8 },
      { name: "Ceramide EOP", position: 9 },
      { name: "Cholesterol", position: 10 },
      { name: "Hyaluronic Acid", ingredientId: "hyaluronic-acid", position: 11 },
      { name: "Phytosphingosine", position: 12 },
      { name: "Sodium Chloride", position: 13 },
      { name: "Sodium Hydroxide", position: 14 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 15 },
    ],
    summary: {
      en: "Gentle foaming cleanser that removes excess oil without stripping the barrier. Uses mild surfactants (hydroxysultaine, sarcosinate) instead of harsh SLS. Contains ceramides and niacinamide to protect the skin while cleansing.",
      fr: "Nettoyant moussant doux qui elimine l'exces de sebum sans alterer la barriere. Utilise des tensioactifs doux (hydroxysultaine, sarcosinate) au lieu du SLS agressif. Contient des ceramides et niacinamide pour proteger la peau.",
    },
    strengths: {
      en: ["Gentle surfactants (no SLS)", "Ceramides protect barrier while cleansing", "Niacinamide + hyaluronic acid", "Non-comedogenic, fragrance-free"],
      fr: ["Tensioactifs doux (pas de SLS)", "Ceramides protegent la barriere au nettoyage", "Niacinamide + acide hyaluronique", "Non comedogene, sans parfum"],
    },
    weaknesses: {
      en: ["May be too gentle for heavy makeup removal", "Contains PEGs (minor concern)"],
      fr: ["Peut etre trop doux pour demaquillage lourd", "Contient des PEGs (preoccupation mineure)"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["ceramides", "gentle-cleanser", "fragrance-free", "oily-skin"],
  },

  // ===========================
  // THE ORDINARY
  // ===========================
  {
    id: "the-ordinary-niacinamide-10-zinc-1",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    type: "serum",
    score: "A",
    scoreNumeric: 91,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 6,
    size: "30ml",
    country: "CA",
    concerns: ["acne", "pores", "oiliness", "hyperpigmentation"],
    bestFor: ["oily", "combination", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 2, percentage: 10 },
      { name: "Zinc PCA", position: 3, percentage: 1 },
      { name: "Dimethyl Isosorbide", position: 4 },
      { name: "Tamarindus Indica Seed Gum", position: 5 },
      { name: "Pentylene Glycol", position: 6 },
      { name: "Sodium Gluconate", position: 7 },
      { name: "Isoceteth-20", position: 8 },
      { name: "Ethoxydiglycol", position: 9 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 10 },
      { name: "Chlorphenesin", position: 11 },
    ],
    summary: {
      en: "The most popular serum in the world for good reason. High-concentration niacinamide (10%) paired with zinc PCA targets pores, oil control, and blemishes simultaneously. Clean formula, no fillers, transparent concentrations.",
      fr: "Le serum le plus populaire au monde, a juste titre. Niacinamide a haute concentration (10%) associe au zinc PCA cible les pores, le controle du sebum et les imperfections simultanement. Formule clean, pas de fillers, concentrations transparentes.",
    },
    strengths: {
      en: ["High-dose niacinamide (10%) with proven efficacy", "Zinc PCA for oil control", "Incredibly affordable", "Transparent concentrations disclosed"],
      fr: ["Niacinamide haute dose (10%) a l'efficacite prouvee", "Zinc PCA pour le controle du sebum", "Prix incroyablement accessible", "Concentrations transparentes affichees"],
    },
    weaknesses: {
      en: ["Can cause flushing at 10% for some (lower % works too)", "Minimal hydration (pair with moisturizer)", "Pilling when layered with some products"],
      fr: ["Peut causer des rougeurs a 10% chez certains (un % plus bas fonctionne aussi)", "Hydratation minimale (associer a un hydratant)", "Boulochage avec certains produits"],
    },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["niacinamide", "zinc", "oil-control", "pores", "affordable", "transparent"],
  },
  {
    id: "the-ordinary-aha-30-bha-2-peeling",
    name: "AHA 30% + BHA 2% Peeling Solution",
    brand: "The Ordinary",
    type: "exfoliant",
    score: "B",
    scoreNumeric: 76,
    subScores: { efficacy: "A", safety: "C", comedogenicity: "A", transparency: "A", skinTypeFit: "C" },
    price: 8,
    size: "30ml",
    country: "CA",
    concerns: ["acne", "hyperpigmentation", "anti-aging"],
    bestFor: ["oily", "combination", "normal"],
    ingredients: [
      { name: "Glycolic Acid", ingredientId: "glycolic-acid", position: 1, percentage: 30 },
      { name: "Aqua", ingredientId: "aqua", position: 2 },
      { name: "Aloe Barbadensis Leaf Water", position: 3 },
      { name: "Sodium Hydroxide", position: 4 },
      { name: "Daucus Carota Sativa Extract", position: 5 },
      { name: "Propanediol", position: 6 },
      { name: "Cocamidopropyl Dimethylamine", position: 7 },
      { name: "Salicylic Acid", ingredientId: "salicylic-acid", position: 8, percentage: 2 },
      { name: "Lactic Acid", ingredientId: "lactic-acid", position: 9 },
      { name: "Tartaric Acid", position: 10 },
      { name: "Citric Acid", position: 11 },
      { name: "Pentylene Glycol", position: 12 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 13 },
      { name: "Chlorphenesin", position: 14 },
    ],
    summary: {
      en: "A powerful weekly chemical peel with 30% AHAs (glycolic, lactic, tartaric, citric) and 2% BHA (salicylic acid). Dramatically improves texture, fades scars, and unclogs pores. Not for beginners or sensitive skin.",
      fr: "Un peeling chimique puissant a utiliser une fois par semaine avec 30% d'AHA (glycolique, lactique, tartrique, citrique) et 2% de BHA (acide salicylique). Ameliore radicalement la texture et desincruste les pores. Pas pour les debutants.",
    },
    strengths: {
      en: ["Extremely effective exfoliation", "Multi-acid blend for comprehensive results", "Transparent concentrations", "Exceptional value"],
      fr: ["Exfoliation extremement efficace", "Melange multi-acides pour des resultats complets", "Concentrations transparentes", "Rapport qualite-prix exceptionnel"],
    },
    weaknesses: {
      en: ["Too strong for sensitive skin", "Risk of chemical burn if misused", "Increases sun sensitivity dramatically", "Max 10 minutes, once per week only"],
      fr: ["Trop fort pour les peaux sensibles", "Risque de brulure chimique si mal utilise", "Augmente fortement la sensibilite au soleil", "Maximum 10 minutes, une fois par semaine"],
    },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["aha", "bha", "chemical-peel", "exfoliant", "advanced-users"],
  },
  {
    id: "the-ordinary-retinol-0-5-squalane",
    name: "Retinol 0.5% in Squalane",
    brand: "The Ordinary",
    type: "serum",
    score: "A",
    scoreNumeric: 87,
    subScores: { efficacy: "A", safety: "B", comedogenicity: "A", transparency: "A", skinTypeFit: "B" },
    price: 6,
    size: "30ml",
    country: "CA",
    concerns: ["anti-aging", "acne", "hyperpigmentation"],
    bestFor: ["normal", "oily", "combination"],
    ingredients: [
      { name: "Squalane", ingredientId: "squalane", position: 1 },
      { name: "Caprylic/Capric Triglyceride", position: 2 },
      { name: "Retinol", ingredientId: "retinol", position: 3, percentage: 0.5 },
      { name: "Solanum Lycopersicum Fruit Extract", position: 4 },
      { name: "Simmondsia Chinensis Seed Oil", position: 5 },
      { name: "BHT", position: 6 },
      { name: "Rosmarinus Officinalis Leaf Extract", position: 7 },
    ],
    summary: {
      en: "Pure retinol at 0.5% delivered in a squalane base for a gentle, non-drying formula. An excellent mid-level retinol for those who have built tolerance. Minimal formula with only 7 ingredients.",
      fr: "Retinol pur a 0,5% dans une base de squalane pour une formule douce et non dessechante. Un excellent retinol de niveau intermediaire pour ceux qui ont construit une tolerance. Formule minimaliste de 7 ingredients.",
    },
    strengths: {
      en: ["Pure retinol at effective concentration", "Squalane base prevents dryness", "Ultra-short ingredient list (7 only)", "Transparent 0.5% concentration"],
      fr: ["Retinol pur a concentration efficace", "Base squalane previent le dessechement", "Liste d'ingredients ultra-courte (7 seulement)", "Concentration 0,5% transparente"],
    },
    weaknesses: {
      en: ["Contains BHT (antioxidant preservative, mild concern)", "Not for retinol beginners (start at 0.2%)", "Must use SPF daily"],
      fr: ["Contient du BHT (conservateur antioxydant, preoccupation mineure)", "Pas pour les debutants retinol (commencer a 0,2%)", "SPF quotidien obligatoire"],
    },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["retinol", "anti-aging", "squalane", "minimal-formula", "transparent"],
  },

  // ===========================
  // LA ROCHE-POSAY
  // ===========================
  {
    id: "la-roche-posay-cicaplast-baume-b5",
    name: "Cicaplast Baume B5+",
    brand: "La Roche-Posay",
    type: "moisturizer",
    score: "A",
    scoreNumeric: 90,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 14,
    size: "40ml",
    country: "FR",
    concerns: ["sensitivity", "dryness", "rosacea"],
    bestFor: ["dry", "sensitive", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Hydrogenated Polyisobutene", position: 2 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 3 },
      { name: "Glycerin", ingredientId: "glycerin", position: 4 },
      { name: "Butyrospermum Parkii Butter", ingredientId: "shea-butter", position: 5, percentage: 5 },
      { name: "Panthenol", ingredientId: "panthenol", position: 6, percentage: 5 },
      { name: "Aluminum Starch Octenylsuccinate", position: 7 },
      { name: "Propanediol", position: 8 },
      { name: "Zinc Gluconate", position: 9 },
      { name: "Madecassoside", position: 10 },
      { name: "Manganese Gluconate", position: 11 },
      { name: "Copper Gluconate", position: 12 },
      { name: "Acetylated Glycol Stearate", position: 13 },
      { name: "Sodium Hydroxide", position: 14 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 15 },
    ],
    summary: {
      en: "The #1 dermatologist-recommended repair balm worldwide. 5% panthenol + 5% shea butter + madecassoside (centella derivative) form a triple-action repair formula. Soothes, protects, and repairs damaged skin barrier. A staple in every dermatologist's toolkit.",
      fr: "Le baume reparateur n1 recommande par les dermatologues dans le monde. 5% panthenol + 5% beurre de karite + madecassoside (derive de centella) forment une formule reparatrice triple action. Apaise, protege et repare la barriere cutanee.",
    },
    strengths: {
      en: ["5% panthenol + madecassoside (clinically proven repair)", "5% shea butter for deep nourishment", "Zinc + copper + manganese minerals", "Fragrance-free, suitable for damaged skin"],
      fr: ["5% panthenol + madecassoside (reparation cliniquement prouvee)", "5% beurre de karite pour une nutrition profonde", "Mineraux zinc + cuivre + manganese", "Sans parfum, adapte aux peaux abimees"],
    },
    weaknesses: {
      en: ["Thick texture may feel heavy on oily skin", "Dimethicone is second ingredient (occlusive)", "Small tube for the price"],
      fr: ["Texture epaisse qui peut etre lourde sur peau grasse", "Dimethicone en deuxieme position (occlusif)", "Petit tube pour le prix"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["panthenol", "madecassoside", "barrier-repair", "dermatologist-recommended", "sensitive-skin"],
  },
  {
    id: "la-roche-posay-effaclar-duo-plus",
    name: "Effaclar Duo+ SPF 30",
    brand: "La Roche-Posay",
    type: "moisturizer",
    score: "B",
    scoreNumeric: 78,
    subScores: { efficacy: "A", safety: "B", comedogenicity: "B", transparency: "B", skinTypeFit: "A" },
    price: 18,
    size: "40ml",
    country: "FR",
    concerns: ["acne", "oiliness", "pores"],
    bestFor: ["oily", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 2 },
      { name: "Diisopropyl Sebacate", position: 3 },
      { name: "Isononyl Isononanoate", position: 4 },
      { name: "Glycerin", ingredientId: "glycerin", position: 5 },
      { name: "Salicylic Acid", ingredientId: "salicylic-acid", position: 6 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 7 },
      { name: "Nylon-12", position: 8 },
      { name: "Piroctone Olamine", position: 9 },
      { name: "Zinc PCA", position: 10 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 11 },
    ],
    summary: {
      en: "Targeted anti-blemish moisturizer with SPF 30. Combines niacinamide, salicylic acid, piroctone olamine, and zinc PCA to fight acne on multiple fronts. Lightweight, non-comedogenic, with built-in sun protection.",
      fr: "Hydratant anti-imperfections cible avec SPF 30. Combine niacinamide, acide salicylique, piroctone olamine et zinc PCA pour combattre l'acne sur plusieurs fronts. Leger, non comedogene, avec protection solaire integree.",
    },
    strengths: {
      en: ["Multi-active anti-acne formula", "Built-in SPF 30", "Niacinamide + salicylic acid + zinc", "Non-comedogenic"],
      fr: ["Formule multi-actifs anti-acne", "SPF 30 integre", "Niacinamide + acide salicylique + zinc", "Non comedogene"],
    },
    weaknesses: {
      en: ["Contains nylon-12 (environmental concern)", "Chemical UV filters (not mineral)", "Price higher than basic moisturizers"],
      fr: ["Contient du nylon-12 (preoccupation environnementale)", "Filtres UV chimiques (pas mineraux)", "Prix plus eleve qu'un hydratant basique"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["anti-acne", "spf", "niacinamide", "salicylic-acid", "oily-skin"],
  },

  // ===========================
  // PAULA'S CHOICE
  // ===========================
  {
    id: "paulas-choice-2-bha-liquid-exfoliant",
    name: "Skin Perfecting 2% BHA Liquid Exfoliant",
    brand: "Paula's Choice",
    type: "exfoliant",
    score: "A",
    scoreNumeric: 89,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 35,
    size: "118ml",
    country: "US",
    concerns: ["acne", "pores", "oiliness", "anti-aging"],
    bestFor: ["oily", "combination", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Methylpropanediol", position: 2 },
      { name: "Butylene Glycol", position: 3 },
      { name: "Salicylic Acid", ingredientId: "salicylic-acid", position: 4, percentage: 2 },
      { name: "Polysorbate 20", position: 5 },
      { name: "Green Tea Extract", position: 6 },
      { name: "Methylcellulose", position: 7 },
      { name: "Sodium Hydroxide", position: 8 },
      { name: "Tetrasodium EDTA", position: 9 },
    ],
    summary: {
      en: "The cult BHA exfoliant. 2% salicylic acid at optimal pH penetrates pores to dissolve clogs, smooth texture, and reduce blackheads. Liquid format allows for easy application over the entire face. Green tea provides antioxidant support.",
      fr: "L'exfoliant BHA culte. 2% d'acide salicylique a pH optimal penetre les pores pour dissoudre les obstructions, lisser la texture et reduire les points noirs. Format liquide pour une application facile sur tout le visage.",
    },
    strengths: {
      en: ["2% BHA at optimal pH for maximum penetration", "Ultra-clean 9-ingredient formula", "Green tea antioxidant", "Liquid format - easy, even application"],
      fr: ["2% BHA a pH optimal pour une penetration maximale", "Formule ultra-clean de 9 ingredients", "Antioxydant the vert", "Format liquide - application facile et uniforme"],
    },
    weaknesses: {
      en: ["Premium price point", "Can be drying if overused", "Increases sun sensitivity"],
      fr: ["Prix premium", "Peut dessecher en cas de surutilisation", "Augmente la sensibilite au soleil"],
    },
    claims: { crueltyFree: true, fragranceFree: true },
    tags: ["bha", "salicylic-acid", "exfoliant", "pores", "cult-product"],
  },

  // ===========================
  // BIODERMA
  // ===========================
  {
    id: "bioderma-sensibio-h2o",
    name: "Sensibio H2O Micellar Water",
    brand: "Bioderma",
    type: "cleanser",
    score: "B",
    scoreNumeric: 74,
    subScores: { efficacy: "C", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 12,
    size: "500ml",
    country: "FR",
    concerns: ["sensitivity"],
    bestFor: ["sensitive", "dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "PEG-6 Caprylic/Capric Glycerides", position: 2 },
      { name: "Fructooligosaccharides", position: 3 },
      { name: "Mannitol", position: 4 },
      { name: "Xylitol", position: 5 },
      { name: "Rhamnose", position: 6 },
      { name: "Cucumis Sativus Fruit Extract", position: 7 },
      { name: "Propylene Glycol", position: 8 },
      { name: "Disodium EDTA", position: 9 },
      { name: "Cetrimonium Bromide", position: 10 },
    ],
    summary: {
      en: "The original micellar water that started the trend. Formulated to mimic the skin's natural composition. Extremely gentle cleansing with no need to rinse. The go-to for sensitive, reactive skin.",
      fr: "L'eau micellaire originale qui a lance la tendance. Formulee pour imiter la composition naturelle de la peau. Nettoyage extremement doux sans rincage. La reference pour les peaux sensibles et reactives.",
    },
    strengths: {
      en: ["Extremely gentle, no-rinse formula", "D.A.F. complex for sensitive skin", "No fragrance, no alcohol", "Excellent first step cleanser"],
      fr: ["Formule extremement douce sans rincage", "Complexe D.A.F. pour peaux sensibles", "Sans parfum, sans alcool", "Excellent premier nettoyage"],
    },
    weaknesses: {
      en: ["Low efficacy (no active ingredients)", "Contains PEGs and cetrimonium bromide", "Not sufficient as sole cleanser for makeup"],
      fr: ["Faible efficacite (pas d'actifs)", "Contient des PEGs et du cetrimonium bromide", "Insuffisant comme seul nettoyant pour le maquillage"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["micellar-water", "sensitive-skin", "gentle", "no-rinse"],
  },

  // ===========================
  // NEUTROGENA
  // ===========================
  {
    id: "neutrogena-hydro-boost-water-gel",
    name: "Hydro Boost Water Gel",
    brand: "Neutrogena",
    type: "moisturizer",
    score: "B",
    scoreNumeric: 72,
    subScores: { efficacy: "B", safety: "C", comedogenicity: "A", transparency: "B", skinTypeFit: "B" },
    price: 14,
    size: "50ml",
    country: "US",
    concerns: ["dryness"],
    bestFor: ["oily", "combination", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Dimethicone/Vinyl Dimethicone Crosspolymer", position: 4 },
      { name: "Sodium Hyaluronate", position: 5 },
      { name: "Ethylhexylglycerin", position: 6 },
      { name: "Polyacrylamide", position: 7 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 8 },
      { name: "C13-14 Isoparaffin", position: 9 },
      { name: "Laureth-7", position: 10 },
      { name: "Parfum", ingredientId: "fragrance", position: 11 },
    ],
    summary: {
      en: "Lightweight gel moisturizer with hyaluronic acid for oil-free hydration. Popular for its refreshing texture, but contains fragrance which limits its score. Good for oily skin types seeking lightweight moisture.",
      fr: "Hydratant gel leger a l'acide hyaluronique pour une hydratation sans huile. Populaire pour sa texture rafraichissante, mais contient du parfum ce qui limite son score. Bon pour les peaux grasses cherchant une hydratation legere.",
    },
    strengths: {
      en: ["Lightweight gel texture", "Hyaluronic acid hydration", "Non-comedogenic", "Affordable"],
      fr: ["Texture gel legere", "Hydratation acide hyaluronique", "Non comedogene", "Abordable"],
    },
    weaknesses: {
      en: ["Contains fragrance/parfum (allergen risk)", "Dimethicone as #2 ingredient", "Contains polyacrylamide and isoparaffin"],
      fr: ["Contient du parfum (risque allergene)", "Dimethicone en 2e position", "Contient polyacrylamide et isoparaffine"],
    },
    claims: { dermatologistTested: true },
    tags: ["hyaluronic-acid", "gel-moisturizer", "lightweight", "oily-skin"],
  },
];

// Helpers
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((p) => p.type === type);
}

export function getProductsByConcern(concern: string): Product[] {
  return products.filter((p) => p.concerns.includes(concern));
}

export function getUniqueBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}

export function brandSlug(brand: string): string {
  return brand.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
