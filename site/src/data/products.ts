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

  // ===========================
  // CETAPHIL
  // ===========================
  {
    id: "cetaphil-gentle-skin-cleanser",
    name: "Gentle Skin Cleanser",
    brand: "Cetaphil",
    type: "cleanser",
    score: "B",
    scoreNumeric: 73,
    subScores: { efficacy: "C", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 10,
    size: "500ml",
    country: "US",
    concerns: ["sensitivity", "dryness"],
    bestFor: ["sensitive", "dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Cetyl Alcohol", position: 2 },
      { name: "Propylene Glycol", position: 3 },
      { name: "Sodium Lauryl Sulfate", ingredientId: "sodium-lauryl-sulfate", position: 4 },
      { name: "Stearyl Alcohol", position: 5 },
      { name: "Methylparaben", position: 6 },
      { name: "Propylparaben", position: 7 },
      { name: "Butylparaben", position: 8 },
    ],
    summary: {
      en: "A classic gentle cleanser recommended by dermatologists for decades. However, the formula contains SLS and three parabens (methyl, propyl, butyl), which lower its safety score. Effective but dated formula compared to modern alternatives.",
      fr: "Un classique recommande par les dermatologues depuis des decennies. Cependant, la formule contient du SLS et trois parabenes (methyl, propyl, butyl), ce qui baisse son score de securite. Efficace mais formule datee par rapport aux alternatives modernes.",
    },
    strengths: {
      en: ["Very gentle cleansing action", "Long dermatologist track record", "Affordable, large format", "No fragrance"],
      fr: ["Action nettoyante tres douce", "Long historique dermatologique", "Abordable, grand format", "Sans parfum"],
    },
    weaknesses: {
      en: ["Contains SLS (irritant for some)", "Three parabens (endocrine disruptor concern)", "No active beneficial ingredients", "Outdated formula"],
      fr: ["Contient du SLS (irritant pour certains)", "Trois parabenes (perturbateur endocrinien)", "Aucun actif benefique", "Formule datee"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["gentle-cleanser", "classic", "sensitive-skin"],
  },

  // ===========================
  // SKINCEUTICALS
  // ===========================
  {
    id: "skinceuticals-ce-ferulic",
    name: "C E Ferulic",
    brand: "SkinCeuticals",
    type: "serum",
    score: "A",
    scoreNumeric: 93,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "B" },
    price: 160,
    size: "30ml",
    country: "US",
    concerns: ["anti-aging", "hyperpigmentation"],
    bestFor: ["normal", "oily", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Ethoxydiglycol", position: 2 },
      { name: "Ascorbic Acid", ingredientId: "ascorbic-acid", position: 3, percentage: 15 },
      { name: "Glycerin", ingredientId: "glycerin", position: 4 },
      { name: "Propylene Glycol", position: 5 },
      { name: "Laureth-23", position: 6 },
      { name: "Tocopherol", ingredientId: "tocopherol", position: 7, percentage: 1 },
      { name: "Ferulic Acid", position: 8 },
      { name: "Panthenol", ingredientId: "panthenol", position: 9 },
      { name: "Triethanolamine", position: 10 },
      { name: "Sodium Hyaluronate", position: 11 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 12 },
    ],
    summary: {
      en: "The gold standard vitamin C serum backed by a Duke University patent. 15% L-ascorbic acid + 1% vitamin E + 0.5% ferulic acid create a synergistic antioxidant trio that provides 8x photoprotection. The most researched vitamin C formula on the market.",
      fr: "Le serum vitamine C de reference, brevete par Duke University. 15% d'acide L-ascorbique + 1% vitamine E + 0,5% acide ferulique creent un trio antioxydant synergique offrant 8x la photoprotection. La formule vitamine C la plus etudiee du marche.",
    },
    strengths: {
      en: ["15% L-ascorbic acid at optimal pH", "Patented C+E+Ferulic synergy (8x photoprotection)", "Panthenol + hyaluronic acid support", "Most clinically studied vitamin C serum"],
      fr: ["15% d'acide L-ascorbique a pH optimal", "Synergie brevetee C+E+Ferulique (8x photoprotection)", "Support panthenol + acide hyaluronique", "Serum vitamine C le plus etudie cliniquement"],
    },
    weaknesses: {
      en: ["Extremely expensive (160EUR/30ml)", "Oxidizes quickly (amber color = expired)", "Can sting on sensitive skin", "Concentrations not all disclosed"],
      fr: ["Extremement cher (160EUR/30ml)", "S'oxyde rapidement (couleur ambre = expire)", "Peut picoter sur peau sensible", "Concentrations pas toutes divulguees"],
    },
    claims: { dermatologistTested: true, fragranceFree: true },
    tags: ["vitamin-c", "antioxidant", "anti-aging", "premium", "patented"],
  },

  // ===========================
  // DRUNK ELEPHANT
  // ===========================
  {
    id: "drunk-elephant-protini-polypeptide-cream",
    name: "Protini Polypeptide Cream",
    brand: "Drunk Elephant",
    type: "moisturizer",
    score: "A",
    scoreNumeric: 86,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "B" },
    price: 68,
    size: "50ml",
    country: "US",
    concerns: ["anti-aging", "dryness"],
    bestFor: ["normal", "combination", "dry"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Dicaprylyl Carbonate", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Cetearyl Alcohol", position: 4 },
      { name: "Squalane", ingredientId: "squalane", position: 5 },
      { name: "Acetyl Hexapeptide-8", position: 6 },
      { name: "Copper Tripeptide-1", ingredientId: "copper-tripeptide-1", position: 7 },
      { name: "Palmitoyl Tetrapeptide-7", position: 8 },
      { name: "Palmitoyl Tripeptide-1", position: 9 },
      { name: "Acetyl Glutamyl Heptapeptide-1", position: 10 },
      { name: "Sh-Oligopeptide-1", position: 11 },
      { name: "Sh-Oligopeptide-2", position: 12 },
      { name: "Sh-Polypeptide-1", position: 13 },
      { name: "Sodium Hyaluronate", position: 14 },
      { name: "Pygmy Waterlily Stem Cell Extract", position: 15 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 16 },
    ],
    summary: {
      en: "A peptide-packed protein moisturizer with 9 signal peptides including copper tripeptide-1. Squalane and glycerin provide hydration while the peptide complex targets fine lines, firmness, and skin elasticity. Clean formula, no fragrance.",
      fr: "Un hydratant proteique charge en peptides avec 9 peptides de signalisation dont le tripeptide de cuivre-1. Squalane et glycerine hydratent pendant que le complexe peptidique cible rides, fermete et elasticite. Formule clean, sans parfum.",
    },
    strengths: {
      en: ["9 peptides including copper tripeptide-1", "Squalane + glycerin hydration", "No fragrance, no essential oils", "Clean formula philosophy"],
      fr: ["9 peptides dont le tripeptide de cuivre-1", "Hydratation squalane + glycerine", "Sans parfum, sans huiles essentielles", "Philosophie formule clean"],
    },
    weaknesses: {
      en: ["Expensive (68EUR/50ml)", "Peptide concentrations not disclosed", "Some peptides lack robust clinical evidence"],
      fr: ["Cher (68EUR/50ml)", "Concentrations peptides non divulguees", "Certains peptides manquent de preuves cliniques solides"],
    },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["peptides", "anti-aging", "clean-beauty", "premium"],
  },

  // ===========================
  // AVENE
  // ===========================
  {
    id: "avene-cicalfate-plus-restorative-cream",
    name: "Cicalfate+ Restorative Protective Cream",
    brand: "Avene",
    type: "moisturizer",
    score: "A",
    scoreNumeric: 85,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 14,
    size: "40ml",
    country: "FR",
    concerns: ["sensitivity", "dryness", "rosacea"],
    bestFor: ["sensitive", "dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Avene Thermal Spring Water", position: 2 },
      { name: "Mineral Oil", position: 3 },
      { name: "Glycerin", ingredientId: "glycerin", position: 4 },
      { name: "Zinc Oxide", ingredientId: "zinc-oxide", position: 5 },
      { name: "Sucralfate", position: 6 },
      { name: "Copper Sulfate", position: 7 },
      { name: "Zinc Sulfate", position: 8 },
      { name: "Beeswax", position: 9 },
      { name: "Microcrystalline Wax", position: 10 },
    ],
    summary: {
      en: "A protective repair cream formulated with sucralfate (the ingredient in stomach ulcer medication, repurposed for skin repair), zinc oxide, and copper/zinc minerals. Designed for irritated, damaged skin including post-procedure.",
      fr: "Une creme reparatrice protectrice formulee avec du sucralfate (l'ingredient des medicaments anti-ulcere gastrique, reconverti pour la reparation cutanee), de l'oxyde de zinc et des mineraux cuivre/zinc. Concue pour les peaux irritees et abimees.",
    },
    strengths: {
      en: ["Sucralfate for wound healing", "Zinc oxide anti-inflammatory", "Copper + zinc mineral complex", "Excellent post-procedure cream"],
      fr: ["Sucralfate pour la cicatrisation", "Oxyde de zinc anti-inflammatoire", "Complexe mineral cuivre + zinc", "Excellente creme post-acte"],
    },
    weaknesses: {
      en: ["Contains mineral oil (occlusive, some prefer plant oils)", "Thick texture, can feel heavy", "Beeswax not vegan"],
      fr: ["Contient de l'huile minerale (occlusif)", "Texture epaisse, peut etre lourde", "Cire d'abeille non vegan"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["sucralfate", "repair", "post-procedure", "sensitive-skin", "zinc"],
  },

  // ===========================
  // EUCERIN
  // ===========================
  {
    id: "eucerin-urearepair-plus-5-cream",
    name: "UreaRepair Plus 5% Urea Body Cream",
    brand: "Eucerin",
    type: "body-care",
    score: "A",
    scoreNumeric: 84,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 12,
    size: "450ml",
    country: "DE",
    concerns: ["dryness"],
    bestFor: ["dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Glycerin", ingredientId: "glycerin", position: 2 },
      { name: "Urea", ingredientId: "urea", position: 3, percentage: 5 },
      { name: "Cetearyl Alcohol", position: 4 },
      { name: "Caprylic/Capric Triglyceride", position: 5 },
      { name: "Ceramide NP", ingredientId: "ceramide-np", position: 6 },
      { name: "Sodium Lactate", position: 7 },
      { name: "Glyceryl Glucoside", position: 8 },
      { name: "Lactic Acid", ingredientId: "lactic-acid", position: 9 },
      { name: "Arginine HCl", position: 10 },
      { name: "Cholesterol", position: 11 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 12 },
    ],
    summary: {
      en: "A clinical-grade body cream with 5% urea (NMF component) + ceramide NP + lactic acid. The urea-ceramide combination restores the skin's natural moisturising factor while repairing the lipid barrier. German dermatology at its best.",
      fr: "Une creme corporelle de grade clinique avec 5% d'uree (composant NMF) + ceramide NP + acide lactique. La combinaison uree-ceramide restaure le facteur naturel d'hydratation tout en reparant la barriere lipidique. La dermatologie allemande a son meilleur.",
    },
    strengths: {
      en: ["5% urea (proven NMF replenisher)", "Ceramide NP for barrier repair", "Lactic acid gentle exfoliation", "Large format, excellent value"],
      fr: ["5% uree (reconstitution NMF prouvee)", "Ceramide NP pour la barriere", "Acide lactique exfoliation douce", "Grand format, excellent rapport qualite-prix"],
    },
    weaknesses: {
      en: ["Can sting on cracked/open skin", "Not for face (body cream)", "Urea smell can be noticeable"],
      fr: ["Peut piquer sur peau fissuree/ouverte", "Pas pour le visage (creme corps)", "L'odeur d'uree peut etre perceptible"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["urea", "ceramides", "body-care", "dry-skin", "german-derm"],
  },

  // ===========================
  // SVR
  // ===========================
  {
    id: "svr-sebiaclear-serum",
    name: "Sebiaclear Serum",
    brand: "SVR",
    type: "serum",
    score: "A",
    scoreNumeric: 86,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 18,
    size: "30ml",
    country: "FR",
    concerns: ["acne", "pores", "oiliness"],
    bestFor: ["oily", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 2, percentage: 4 },
      { name: "Gluconolactone", position: 3, percentage: 14 },
      { name: "Glycerin", ingredientId: "glycerin", position: 4 },
      { name: "Salicylic Acid", ingredientId: "salicylic-acid", position: 5 },
      { name: "Panthenol", ingredientId: "panthenol", position: 6 },
      { name: "Zinc PCA", position: 7 },
      { name: "Sodium Hydroxide", position: 8 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 9 },
    ],
    summary: {
      en: "A French pharmacy powerhouse. 14% gluconolactone (PHA - gentler than AHA) + 4% niacinamide + salicylic acid + zinc PCA. Triple-action on pores, oil, and blemishes without irritation. PHA provides exfoliation without sun sensitivity.",
      fr: "Un concentre de pharmacie francaise. 14% gluconolactone (PHA - plus doux que l'AHA) + 4% niacinamide + acide salicylique + zinc PCA. Triple action sur les pores, le sebum et les imperfections sans irritation.",
    },
    strengths: {
      en: ["14% PHA (gentle exfoliation, no sun sensitivity)", "Niacinamide + salicylic acid + zinc triple action", "Panthenol to soothe", "Excellent French pharmacy value"],
      fr: ["14% PHA (exfoliation douce, pas de photosensibilite)", "Triple action niacinamide + salicylique + zinc", "Panthenol apaisant", "Excellent rapport qualite-prix pharmacie"],
    },
    weaknesses: {
      en: ["14% gluconolactone may tingle initially", "Limited availability outside France/EU"],
      fr: ["14% gluconolactone peut picoter au debut", "Disponibilite limitee hors France/UE"],
    },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["pha", "niacinamide", "salicylic-acid", "french-pharmacy", "anti-acne"],
  },

  // ===========================
  // VICHY
  // ===========================
  {
    id: "vichy-mineral-89",
    name: "Mineral 89 Hyaluronic Acid Serum",
    brand: "Vichy",
    type: "serum",
    score: "B",
    scoreNumeric: 77,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 22,
    size: "50ml",
    country: "FR",
    concerns: ["dryness", "sensitivity"],
    bestFor: ["dry", "sensitive", "normal", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Vichy Mineralizing Thermal Water", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Sodium Hyaluronate", position: 4 },
      { name: "Caprylyl Glycol", position: 5 },
      { name: "Carbomer", position: 6 },
      { name: "Citric Acid", position: 7 },
      { name: "Sodium Hydroxide", position: 8 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 9 },
      { name: "Parfum", ingredientId: "fragrance", position: 10 },
    ],
    summary: {
      en: "A lightweight hydrating serum with Vichy mineralizing thermal water and sodium hyaluronate. Simple formula, good hydration, but loses points for containing fragrance. A solid basic hydrator but not as clean as competitors.",
      fr: "Un serum hydratant leger avec eau thermale mineralisante Vichy et hyaluronate de sodium. Formule simple, bonne hydratation, mais perd des points pour le parfum. Un bon hydratant basique mais pas aussi clean que les concurrents.",
    },
    strengths: {
      en: ["Vichy thermal water minerals", "Sodium hyaluronate hydration", "Lightweight gel texture", "Simple short ingredient list"],
      fr: ["Mineraux eau thermale Vichy", "Hydratation hyaluronate de sodium", "Texture gel legere", "Liste d'ingredients courte et simple"],
    },
    weaknesses: {
      en: ["Contains fragrance/parfum (allergen)", "No proven active ingredients beyond HA", "Premium price for basic formula"],
      fr: ["Contient du parfum (allergene)", "Pas d'actifs prouves au-dela de l'HA", "Prix premium pour une formule basique"],
    },
    claims: { dermatologistTested: true },
    tags: ["hyaluronic-acid", "thermal-water", "french-pharmacy", "hydration"],
  },

  // ===========================
  // NIVEA
  // ===========================
  {
    id: "nivea-creme",
    name: "Creme (Original)",
    brand: "Nivea",
    type: "moisturizer",
    score: "C",
    scoreNumeric: 58,
    subScores: { efficacy: "D", safety: "C", comedogenicity: "C", transparency: "B", skinTypeFit: "C" },
    price: 5,
    size: "150ml",
    country: "DE",
    concerns: ["dryness"],
    bestFor: ["dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Paraffinum Liquidum", position: 2 },
      { name: "Cera Microcristallina", position: 3 },
      { name: "Glycerin", ingredientId: "glycerin", position: 4 },
      { name: "Lanolin Alcohol", position: 5 },
      { name: "Paraffin", position: 6 },
      { name: "Panthenol", ingredientId: "panthenol", position: 7 },
      { name: "Decyl Oleate", position: 8 },
      { name: "Octyldodecanol", position: 9 },
      { name: "Aluminum Stearate", position: 10 },
      { name: "Citric Acid", position: 11 },
      { name: "Magnesium Sulfate", position: 12 },
      { name: "Parfum", ingredientId: "fragrance", position: 13 },
    ],
    summary: {
      en: "The iconic blue tin, unchanged for over 100 years. Heavy mineral oil and paraffin base with panthenol. Effective occlusive moisture barrier but contains fragrance and mineral oil derivatives that modern dermatology is moving away from.",
      fr: "L'iconique boite bleue, inchangee depuis plus de 100 ans. Base lourde d'huile minerale et paraffine avec panthenol. Barriere hydratante occlusive efficace mais contient du parfum et des derives d'huile minerale dont la dermatologie moderne s'eloigne.",
    },
    strengths: {
      en: ["Extremely affordable", "Effective moisture barrier", "Panthenol included", "Iconic, proven formula"],
      fr: ["Extremement abordable", "Barriere hydratante efficace", "Panthenol inclus", "Formule iconique et eprouvee"],
    },
    weaknesses: {
      en: ["Mineral oil and paraffin base", "Contains fragrance", "No active ingredients", "Heavy, occlusive (may clog pores)", "Lanolin can sensitize"],
      fr: ["Base huile minerale et paraffine", "Contient du parfum", "Aucun actif", "Lourd, occlusif (peut obstruer les pores)", "La lanoline peut sensibiliser"],
    },
    claims: {},
    tags: ["classic", "affordable", "occlusive", "mineral-oil"],
  },

  // ===========================
  // GARNIER
  // ===========================
  {
    id: "garnier-micellar-water-all-in-one",
    name: "Micellar Cleansing Water All-in-1",
    brand: "Garnier",
    type: "cleanser",
    score: "C",
    scoreNumeric: 62,
    subScores: { efficacy: "C", safety: "C", comedogenicity: "A", transparency: "B", skinTypeFit: "B" },
    price: 6,
    size: "400ml",
    country: "FR",
    concerns: ["sensitivity"],
    bestFor: ["normal", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Hexylene Glycol", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Disodium Cocoamphodiacetate", position: 4 },
      { name: "Disodium EDTA", position: 5 },
      { name: "Poloxamer 184", position: 6 },
      { name: "Polyaminopropyl Biguanide", position: 7 },
      { name: "Parfum", ingredientId: "fragrance", position: 8 },
    ],
    summary: {
      en: "The bestselling micellar water globally. Basic cleansing formula at an unbeatable price. However, contains polyaminopropyl biguanide (PHMB, a preservative with EU restrictions on concentration) and fragrance, both of which lower its score.",
      fr: "L'eau micellaire la plus vendue au monde. Formule nettoyante basique a un prix imbattable. Cependant, contient du polyaminopropyl biguanide (PHMB, conservateur avec restrictions UE) et du parfum, ce qui baisse son score.",
    },
    strengths: {
      en: ["Extremely affordable", "Effective basic cleansing", "Widely available everywhere", "No-rinse formula"],
      fr: ["Extremement abordable", "Nettoyage basique efficace", "Disponible partout", "Formule sans rincage"],
    },
    weaknesses: {
      en: ["Contains PHMB (EU-restricted preservative)", "Contains fragrance", "No beneficial actives", "Inferior to Bioderma Sensibio for sensitive skin"],
      fr: ["Contient du PHMB (conservateur reglemente UE)", "Contient du parfum", "Aucun actif benefique", "Inferieur au Bioderma Sensibio pour peaux sensibles"],
    },
    claims: {},
    tags: ["micellar-water", "affordable", "mass-market"],
  },

  // ===========================
  // THE ORDINARY (more)
  // ===========================
  {
    id: "the-ordinary-hyaluronic-acid-2-b5",
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    type: "serum",
    score: "A",
    scoreNumeric: 85,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 7,
    size: "30ml",
    country: "CA",
    concerns: ["dryness", "anti-aging"],
    bestFor: ["dry", "oily", "combination", "sensitive", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Sodium Hyaluronate", position: 2 },
      { name: "Sodium Hyaluronate Crosspolymer", position: 3 },
      { name: "Panthenol", ingredientId: "panthenol", position: 4 },
      { name: "Ahnfeltia Concinna Extract", position: 5 },
      { name: "Glycerin", ingredientId: "glycerin", position: 6 },
      { name: "Pentylene Glycol", position: 7 },
      { name: "Propanediol", position: 8 },
      { name: "Sodium Phosphate", position: 9 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 10 },
      { name: "Chlorphenesin", position: 11 },
    ],
    summary: {
      en: "Multi-molecular weight hyaluronic acid (surface + deep hydration) combined with pro-vitamin B5 (panthenol). Lightweight, non-sticky, works for every skin type. A universal hydrating serum at an unreal price point.",
      fr: "Acide hyaluronique multi-poids moleculaire (hydratation surface + profondeur) combine a la provitamine B5 (panthenol). Leger, non collant, convient a tous les types de peau. Un serum hydratant universel a un prix irreal.",
    },
    strengths: {
      en: ["Multi-weight HA for surface + deep hydration", "Panthenol (B5) for barrier support", "Suitable for ALL skin types", "Incredible value (7EUR)"],
      fr: ["HA multi-poids pour hydratation surface + profondeur", "Panthenol (B5) pour la barriere", "Convient a TOUS les types de peau", "Rapport qualite-prix incroyable (7EUR)"],
    },
    weaknesses: {
      en: ["Can feel sticky if over-applied", "Needs moisturizer on top to seal", "In dry climates, may draw moisture from skin"],
      fr: ["Peut etre collant en cas de surdosage", "Necessite un hydratant par-dessus pour sceller", "En climat sec, peut puiser l'eau de la peau"],
    },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["hyaluronic-acid", "panthenol", "hydration", "affordable", "universal"],
  },
  {
    id: "the-ordinary-azelaic-acid-suspension-10",
    name: "Azelaic Acid Suspension 10%",
    brand: "The Ordinary",
    type: "serum",
    score: "A",
    scoreNumeric: 88,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 8,
    size: "30ml",
    country: "CA",
    concerns: ["acne", "rosacea", "hyperpigmentation"],
    bestFor: ["oily", "combination", "sensitive", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Azelaic Acid", ingredientId: "azelaic-acid", position: 2, percentage: 10 },
      { name: "Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer", position: 3 },
      { name: "Isoceteth-20", position: 4 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 5 },
      { name: "Isohexadecane", position: 6 },
      { name: "Polysorbate 60", position: 7 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 8 },
      { name: "Chlorphenesin", position: 9 },
    ],
    summary: {
      en: "10% azelaic acid in a cream suspension. One of the few actives that treats acne, rosacea, AND hyperpigmentation simultaneously. Safe in pregnancy. Silicone-based texture glides on smoothly. An underrated multi-tasker.",
      fr: "10% d'acide azelaique en suspension creme. L'un des rares actifs qui traite l'acne, la rosacee ET l'hyperpigmentation simultanement. Sur pendant la grossesse. Texture a base de silicone qui glisse en douceur.",
    },
    strengths: {
      en: ["10% azelaic acid (effective for acne + rosacea + dark spots)", "Pregnancy-safe", "Anti-inflammatory", "Transparent 10% concentration"],
      fr: ["10% acide azelaique (efficace acne + rosacee + taches)", "Sur pendant la grossesse", "Anti-inflammatoire", "Concentration 10% transparente"],
    },
    weaknesses: {
      en: ["Gritty texture (suspension, not solution)", "Can pill under makeup", "Mild tingling in first uses"],
      fr: ["Texture granuleuse (suspension, pas solution)", "Peut boulocher sous le maquillage", "Leger picotement aux premiers usages"],
    },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["azelaic-acid", "rosacea", "acne", "pregnancy-safe", "affordable"],
  },

  // ===========================
  // BATCH 2: 20 additional high-SEO products
  // ===========================
  {
    id: "the-ordinary-glycolic-acid-7-toning-solution",
    name: "Glycolic Acid 7% Toning Solution",
    brand: "The Ordinary",
    type: "toner",
    score: "B",
    scoreNumeric: 79,
    subScores: { efficacy: "A", safety: "B", comedogenicity: "A", transparency: "A", skinTypeFit: "C" },
    price: 9, size: "240ml", country: "CA",
    concerns: ["anti-aging", "hyperpigmentation", "pores"],
    bestFor: ["oily", "combination", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Glycolic Acid", ingredientId: "glycolic-acid", position: 2, percentage: 7 },
      { name: "Rosa Damascena Flower Water", position: 3 },
      { name: "Centaurea Cyanus Flower Water", position: 4 },
      { name: "Aloe Barbadensis Leaf Water", position: 5 },
      { name: "Propanediol", position: 6 },
      { name: "Glycerin", ingredientId: "glycerin", position: 7 },
      { name: "Triethanolamine", position: 8 },
      { name: "Aminomethyl Propanol", position: 9 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 10 },
      { name: "Chlorphenesin", position: 11 },
    ],
    summary: {
      en: "A daily-use AHA toning solution with 7% glycolic acid. Exfoliates, brightens, and improves texture over time. Rose water adds a gentle touch. SPF mandatory during use.",
      fr: "Solution tonique AHA a usage quotidien avec 7% d'acide glycolique. Exfolie, illumine et ameliore la texture au fil du temps. L'eau de rose adoucit. SPF obligatoire pendant l'utilisation.",
    },
    strengths: { en: ["7% glycolic at great value", "240ml large format", "Rose + aloe water soothing base"], fr: ["7% glycolique a prix imbattable", "Grand format 240ml", "Base apaisante rose + aloe"] },
    weaknesses: { en: ["Increases sun sensitivity", "Too strong for sensitive skin", "pH very low (can irritate)"], fr: ["Augmente la photosensibilite", "Trop fort pour peaux sensibles", "pH tres bas (peut irriter)"] },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["aha", "glycolic-acid", "toner", "exfoliant", "affordable"],
  },
  {
    id: "the-ordinary-alpha-arbutin-2-ha",
    name: "Alpha Arbutin 2% + HA",
    brand: "The Ordinary",
    type: "serum",
    score: "A",
    scoreNumeric: 86,
    subScores: { efficacy: "A", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 9, size: "30ml", country: "CA",
    concerns: ["hyperpigmentation"],
    bestFor: ["dry", "oily", "combination", "sensitive", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Alpha-Arbutin", ingredientId: "alpha-arbutin", position: 2, percentage: 2 },
      { name: "Sodium Hyaluronate", position: 3 },
      { name: "Sodium Hyaluronate Crosspolymer", position: 4 },
      { name: "Glycerin", ingredientId: "glycerin", position: 5 },
      { name: "Pentylene Glycol", position: 6 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 7 },
      { name: "Chlorphenesin", position: 8 },
    ],
    summary: {
      en: "A concentrated brightening serum with 2% alpha-arbutin (hydroquinone alternative) and hyaluronic acid. Targets dark spots, melasma, and post-inflammatory hyperpigmentation without irritation.",
      fr: "Un serum eclaircissant concentre avec 2% d'alpha-arbutine (alternative a l'hydroquinone) et acide hyaluronique. Cible les taches brunes, le melasma et l'hyperpigmentation post-inflammatoire sans irritation.",
    },
    strengths: { en: ["2% alpha-arbutin (safe brightener)", "Hyaluronic acid hydration", "8-ingredient clean formula", "Safe for all skin types"], fr: ["2% alpha-arbutine (eclaircissant sur)", "Hydratation acide hyaluronique", "Formule clean 8 ingredients", "Sur pour tous types de peau"] },
    weaknesses: { en: ["Slow results (8-12 weeks)", "Not as potent as prescription hydroquinone"], fr: ["Resultats lents (8-12 semaines)", "Moins puissant que l'hydroquinone sur prescription"] },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["alpha-arbutin", "brightening", "hyperpigmentation", "affordable"],
  },
  {
    id: "la-roche-posay-anthelios-uvmune-400-spf50",
    name: "Anthelios UVMune 400 SPF50+",
    brand: "La Roche-Posay",
    type: "sunscreen",
    score: "A",
    scoreNumeric: 87,
    subScores: { efficacy: "A", safety: "B", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 18, size: "50ml", country: "FR",
    concerns: ["anti-aging", "hyperpigmentation"],
    bestFor: ["dry", "oily", "combination", "sensitive", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Diisopropyl Sebacate", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Ethylhexyl Salicylate", position: 4 },
      { name: "Diethylamino Hydroxybenzoyl Hexyl Benzoate", position: 5 },
      { name: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine", position: 6 },
      { name: "Silica", position: 7 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 8 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 9 },
    ],
    summary: {
      en: "La Roche-Posay's latest generation SPF50+ with Mexoryl 400, the first filter to protect against ultra-long UVA rays. Lightweight fluid, invisible finish, with added niacinamide. The dermatologist's go-to sunscreen.",
      fr: "La derniere generation SPF50+ de La Roche-Posay avec Mexoryl 400, le premier filtre protegeant contre les UVA ultra-longs. Fluide leger, fini invisible, avec niacinamide ajoute. La creme solaire de reference des dermatologues.",
    },
    strengths: { en: ["Mexoryl 400 (ultra-long UVA protection)", "Niacinamide added", "Lightweight fluid texture", "Dermatologist gold standard SPF"], fr: ["Mexoryl 400 (protection UVA ultra-longs)", "Niacinamide ajoute", "Texture fluide legere", "Reference SPF des dermatologues"] },
    weaknesses: { en: ["Chemical UV filters (not mineral)", "Can leave slight white cast on dark skin", "Price per ml is high"], fr: ["Filtres UV chimiques (pas mineraux)", "Leger voile blanc possible sur peaux foncees", "Prix au ml eleve"] },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["spf50", "sunscreen", "mexoryl", "niacinamide", "french-pharmacy"],
  },
  {
    id: "kiehls-ultra-facial-cream",
    name: "Ultra Facial Cream",
    brand: "Kiehl's",
    type: "moisturizer",
    score: "B",
    scoreNumeric: 71,
    subScores: { efficacy: "C", safety: "B", comedogenicity: "B", transparency: "B", skinTypeFit: "B" },
    price: 35, size: "50ml", country: "US",
    concerns: ["dryness"],
    bestFor: ["dry", "normal", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Squalane", ingredientId: "squalane", position: 2 },
      { name: "Glycerin", ingredientId: "glycerin", position: 3 },
      { name: "Bis-PEG-18 Methyl Ether Dimethyl Silane", position: 4 },
      { name: "Sucrose Stearate", position: 5 },
      { name: "Stearyl Alcohol", position: 6 },
      { name: "Pentaerythrityl Tetraethylhexanoate", position: 7 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 8 },
      { name: "Prunus Armeniaca Kernel Oil", position: 9 },
      { name: "Parfum", ingredientId: "fragrance", position: 10 },
    ],
    summary: {
      en: "A classic lightweight moisturizer with squalane and glycerin. Pleasant texture, decent hydration, but loses points for fragrance and lack of active ingredients. Overpays for what it delivers compared to CeraVe or La Roche-Posay.",
      fr: "Un classique hydratant leger avec squalane et glycerine. Texture agreable, hydratation correcte, mais perd des points pour le parfum et l'absence d'actifs. Rapport qualite-prix inferieur a CeraVe ou La Roche-Posay.",
    },
    strengths: { en: ["Squalane + glycerin hydration", "Lightweight comfortable texture", "Well-known trusted brand"], fr: ["Hydratation squalane + glycerine", "Texture legere et confortable", "Marque reconnue et fiable"] },
    weaknesses: { en: ["Contains fragrance", "No active ingredients", "Overpriced vs drugstore alternatives", "PEG-based emulsifiers"], fr: ["Contient du parfum", "Aucun actif", "Surpaye vs alternatives pharmacie", "Emulsifiants a base de PEG"] },
    claims: {},
    tags: ["squalane", "lightweight", "classic", "premium-price"],
  },
  {
    id: "olay-regenerist-micro-sculpting-cream",
    name: "Regenerist Micro-Sculpting Cream",
    brand: "Olay",
    type: "moisturizer",
    score: "C",
    scoreNumeric: 65,
    subScores: { efficacy: "B", safety: "C", comedogenicity: "C", transparency: "D", skinTypeFit: "C" },
    price: 30, size: "50ml", country: "US",
    concerns: ["anti-aging", "dryness"],
    bestFor: ["dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Glycerin", ingredientId: "glycerin", position: 2 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 3 },
      { name: "Isohexadecane", position: 4 },
      { name: "Panthenol", ingredientId: "panthenol", position: 5 },
      { name: "Tocopheryl Acetate", position: 6 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 7 },
      { name: "Polyethylene", position: 8 },
      { name: "Parfum", ingredientId: "fragrance", position: 9 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 10 },
      { name: "Methylparaben", position: 11 },
      { name: "Ethylparaben", position: 12 },
    ],
    summary: {
      en: "A mass-market anti-aging cream with niacinamide and panthenol. Active ingredients are good but buried under fragrance, parabens, and polyethylene. The actives work, but the formula could be much cleaner.",
      fr: "Une creme anti-age grand public avec niacinamide et panthenol. Les actifs sont bons mais noyes sous le parfum, les parabenes et le polyethylene. Les actifs fonctionnent, mais la formule pourrait etre bien plus propre.",
    },
    strengths: { en: ["Niacinamide + panthenol + vitamin E", "Widely available", "Decent anti-aging actives"], fr: ["Niacinamide + panthenol + vitamine E", "Tres disponible", "Actifs anti-age corrects"] },
    weaknesses: { en: ["Fragrance", "Methylparaben + ethylparaben", "Polyethylene (microplastic)", "Low transparency on concentrations"], fr: ["Parfum", "Methylparabene + ethylparabene", "Polyethylene (microplastique)", "Faible transparence sur les concentrations"] },
    claims: { dermatologistTested: true },
    tags: ["niacinamide", "anti-aging", "mass-market", "fragrance"],
  },
  {
    id: "the-ordinary-squalane-cleanser",
    name: "Squalane Cleanser",
    brand: "The Ordinary",
    type: "cleanser",
    score: "A",
    scoreNumeric: 83,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 8, size: "50ml", country: "CA",
    concerns: ["dryness", "sensitivity"],
    bestFor: ["dry", "sensitive", "normal", "combination"],
    ingredients: [
      { name: "Squalane", ingredientId: "squalane", position: 1 },
      { name: "Aqua", ingredientId: "aqua", position: 2 },
      { name: "Cetyl Ethylhexanoate", position: 3 },
      { name: "Ethyl Macadamiate", position: 4 },
      { name: "Caprylic/Capric Triglyceride", position: 5 },
      { name: "Hydrogenated Starch Hydrolysate", position: 6 },
      { name: "Sucrose Stearate", position: 7 },
      { name: "Glycerin", ingredientId: "glycerin", position: 8 },
      { name: "Sucrose Laurate", position: 9 },
    ],
    summary: {
      en: "An oil-based balm cleanser that melts makeup and SPF without stripping. Squalane-first formula with no surfactants at all - dissolves through emulsification. Perfect first cleanse in a double-cleanse routine.",
      fr: "Un nettoyant baume a base d'huile qui dissout le maquillage et le SPF sans agresser. Formule squalane en premier, sans aucun tensioactif. Parfait pour le premier nettoyage en double nettoyage.",
    },
    strengths: { en: ["Squalane-first, zero surfactants", "Dissolves makeup and SPF gently", "No fragrance, minimal ingredients", "Balm-to-oil texture"], fr: ["Squalane en premier, zero tensioactif", "Dissout maquillage et SPF en douceur", "Sans parfum, ingredients minimaux", "Texture baume-huile"] },
    weaknesses: { en: ["Needs second cleanser after", "Small tube (50ml)", "Can leave oily residue"], fr: ["Necessite un second nettoyant apres", "Petit tube (50ml)", "Peut laisser un residu huileux"] },
    claims: { vegan: true, crueltyFree: true, fragranceFree: true },
    tags: ["squalane", "oil-cleanser", "double-cleanse", "gentle"],
  },
  {
    id: "cosrx-advanced-snail-96-mucin-power-essence",
    name: "Advanced Snail 96 Mucin Power Essence",
    brand: "COSRX",
    type: "serum",
    score: "B",
    scoreNumeric: 75,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "C", skinTypeFit: "A" },
    price: 22, size: "100ml", country: "KR",
    concerns: ["dryness", "anti-aging", "hyperpigmentation"],
    bestFor: ["dry", "sensitive", "normal", "combination"],
    ingredients: [
      { name: "Snail Secretion Filtrate", position: 1, percentage: 96 },
      { name: "Betaine", position: 2 },
      { name: "Sodium Hyaluronate", position: 3 },
      { name: "Panthenol", ingredientId: "panthenol", position: 4 },
      { name: "Arginine", position: 5 },
      { name: "Allantoin", position: 6 },
      { name: "Ethyl Hexanediol", position: 7 },
      { name: "1,2-Hexanediol", position: 8 },
    ],
    summary: {
      en: "The K-beauty cult essence with 96% snail mucin. Deeply hydrating, soothing, and helps with skin repair and mild brightening. The slimy texture is an acquired taste but the results are praised globally.",
      fr: "L'essence culte de la K-beauty avec 96% de mucine d'escargot. Profondement hydratante, apaisante, aide a la reparation cutanee et a un leger eclaircissement. La texture visqueuse s'apprivoise mais les resultats sont loues mondialement.",
    },
    strengths: { en: ["96% snail mucin (hydration + repair)", "Panthenol + HA + allantoin", "Large 100ml format", "K-beauty cult classic"], fr: ["96% mucine d'escargot (hydratation + reparation)", "Panthenol + HA + allantoine", "Grand format 100ml", "Classique culte K-beauty"] },
    weaknesses: { en: ["Not vegan (snail-derived)", "Clinical evidence limited vs established actives", "Slimy texture not for everyone"], fr: ["Non vegan (derive d'escargot)", "Preuves cliniques limitees vs actifs etablis", "Texture visqueuse pas pour tout le monde"] },
    claims: { crueltyFree: false },
    tags: ["snail-mucin", "k-beauty", "hydration", "essence", "cult"],
  },
  {
    id: "la-roche-posay-toleriane-sensitive-cream",
    name: "Toleriane Sensitive Cream",
    brand: "La Roche-Posay",
    type: "moisturizer",
    score: "A",
    scoreNumeric: 84,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "A", skinTypeFit: "A" },
    price: 16, size: "40ml", country: "FR",
    concerns: ["sensitivity", "dryness", "rosacea"],
    bestFor: ["sensitive", "dry", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Glycerin", ingredientId: "glycerin", position: 2 },
      { name: "Squalane", ingredientId: "squalane", position: 3 },
      { name: "Pentaerythrityl Tetraethylhexanoate", position: 4 },
      { name: "Butyrospermum Parkii Butter", ingredientId: "shea-butter", position: 5 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 6 },
      { name: "Cetearyl Alcohol", position: 7 },
      { name: "Ceramide NP", ingredientId: "ceramide-np", position: 8 },
      { name: "Tocopherol", ingredientId: "tocopherol", position: 9 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 10 },
    ],
    summary: {
      en: "A prebiotic-enriched moisturizer for sensitive and intolerant skin. Niacinamide + ceramide NP + squalane + shea butter create a comprehensive barrier-repair formula. Minimal ingredients, maximum tolerance.",
      fr: "Un hydratant enrichi en prebiotiques pour peaux sensibles et intolerantes. Niacinamide + ceramide NP + squalane + beurre de karite creent une formule reparatrice de barriere complete. Ingredients minimaux, tolerance maximale.",
    },
    strengths: { en: ["Niacinamide + ceramide + squalane + shea", "Prebiotic formula (skin microbiome)", "No fragrance, minimal formula", "Excellent for rosacea-prone skin"], fr: ["Niacinamide + ceramide + squalane + karite", "Formule prebiotique (microbiome cutane)", "Sans parfum, formule minimale", "Excellente pour peaux sujettes a la rosacee"] },
    weaknesses: { en: ["Small tube for the price", "Not very hydrating for very dry skin", "Basic texture, nothing luxurious"], fr: ["Petit tube pour le prix", "Hydratation insuffisante pour peaux tres seches", "Texture basique, rien de luxueux"] },
    claims: { fragranceFree: true, dermatologistTested: true },
    tags: ["sensitive-skin", "ceramides", "niacinamide", "prebiotic", "french-pharmacy"],
  },
  {
    id: "paula-choice-clinical-1-retinol",
    name: "Clinical 1% Retinol Treatment",
    brand: "Paula's Choice",
    type: "serum",
    score: "A",
    scoreNumeric: 86,
    subScores: { efficacy: "A", safety: "B", comedogenicity: "A", transparency: "A", skinTypeFit: "C" },
    price: 58, size: "30ml", country: "US",
    concerns: ["anti-aging", "hyperpigmentation", "acne"],
    bestFor: ["normal", "oily", "combination"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Isododecane", position: 2 },
      { name: "Dimethicone", ingredientId: "dimethicone", position: 3 },
      { name: "Retinol", ingredientId: "retinol", position: 4, percentage: 1 },
      { name: "Squalane", ingredientId: "squalane", position: 5 },
      { name: "Tocopherol", ingredientId: "tocopherol", position: 6 },
      { name: "Glycerin", ingredientId: "glycerin", position: 7 },
      { name: "Ceramide NP", ingredientId: "ceramide-np", position: 8 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 9 },
    ],
    summary: {
      en: "The strongest OTC retinol available. 1% pure retinol in a squalane + ceramide base to minimize irritation. For experienced retinol users only - powerful anti-aging results but requires tolerance.",
      fr: "Le retinol le plus fort disponible sans ordonnance. 1% retinol pur dans une base squalane + ceramide pour minimiser l'irritation. Pour utilisateurs experimentes seulement - resultats anti-age puissants.",
    },
    strengths: { en: ["1% retinol (highest OTC concentration)", "Squalane + ceramide NP for barrier protection", "Transparent concentration disclosed", "Vitamin E antioxidant support"], fr: ["1% retinol (concentration max sans ordonnance)", "Squalane + ceramide NP pour la barriere", "Concentration transparente affichee", "Support antioxydant vitamine E"] },
    weaknesses: { en: ["Too strong for beginners (start at 0.3%)", "Expensive (58EUR)", "Irritation likely in first weeks", "SPF essential every day"], fr: ["Trop fort pour les debutants (commencer a 0,3%)", "Cher (58EUR)", "Irritation probable les premieres semaines", "SPF essentiel chaque jour"] },
    claims: { crueltyFree: true, fragranceFree: true },
    tags: ["retinol", "anti-aging", "advanced", "premium"],
  },
  {
    id: "beauty-of-joseon-relief-sun-rice-probiotics-spf50",
    name: "Relief Sun: Rice + Probiotics SPF50+",
    brand: "Beauty of Joseon",
    type: "sunscreen",
    score: "A",
    scoreNumeric: 82,
    subScores: { efficacy: "B", safety: "A", comedogenicity: "A", transparency: "B", skinTypeFit: "A" },
    price: 15, size: "50ml", country: "KR",
    concerns: ["anti-aging", "sensitivity"],
    bestFor: ["dry", "oily", "combination", "sensitive", "normal"],
    ingredients: [
      { name: "Aqua", ingredientId: "aqua", position: 1 },
      { name: "Diethylamino Hydroxybenzoyl Hexyl Benzoate", position: 2 },
      { name: "Oryza Sativa Bran Extract", position: 3, percentage: 30 },
      { name: "Glycerin", ingredientId: "glycerin", position: 4 },
      { name: "Ethylhexyl Triazone", position: 5 },
      { name: "Niacinamide", ingredientId: "niacinamide", position: 6 },
      { name: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine", position: 7 },
      { name: "Lactobacillus/Rice Bran Ferment Filtrate", position: 8 },
      { name: "Phenoxyethanol", ingredientId: "phenoxyethanol", position: 9 },
    ],
    summary: {
      en: "The viral K-beauty SPF that broke TikTok. Rice bran extract (30%) + probiotics + niacinamide in a lightweight, no-white-cast formula. SPF50+ PA++++ with modern chemical filters. Affordable, elegant, effective.",
      fr: "Le SPF K-beauty viral qui a enflamme TikTok. Extrait de son de riz (30%) + probiotiques + niacinamide dans une formule legere sans trace blanche. SPF50+ PA++++ avec filtres chimiques modernes. Abordable, elegant, efficace.",
    },
    strengths: { en: ["No white cast", "Rice bran + probiotic + niacinamide", "Lightweight dewy finish", "SPF50+ PA++++ at 15EUR"], fr: ["Pas de trace blanche", "Son de riz + probiotique + niacinamide", "Fini leger et glowy", "SPF50+ PA++++ a 15EUR"] },
    weaknesses: { en: ["Chemical UV filters (not mineral)", "May be too dewy for very oily skin", "Availability can be limited outside Asia"], fr: ["Filtres UV chimiques (pas mineraux)", "Peut etre trop glowy pour peau tres grasse", "Disponibilite limitee hors Asie"] },
    claims: { crueltyFree: true },
    tags: ["spf50", "k-beauty", "rice", "probiotics", "no-white-cast", "viral"],
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

// === AUTO-GENERATED BATCH: Additional popular products ===

// Note: these products are appended to the products array above
// To add: edit the `];` closing bracket above and add these before it
