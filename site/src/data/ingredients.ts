// SkinScore Ingredient Database
// Based on EU CosIng, SCCS safety opinions, and dermatology research.
// Each ingredient scored A-E for safety + efficacy combined.

export type ScoreGrade = "A" | "B" | "C" | "D" | "E";
export type IngredientCategory =
  | "active"           // Proven active (retinol, niacinamide, AHAs...)
  | "hydrator"         // Moisturizing agents (glycerin, HA, ceramides...)
  | "emollient"        // Skin-softening oils and butters
  | "antioxidant"      // Free radical protection
  | "preservative"     // Product preservation
  | "surfactant"       // Cleansing agents
  | "emulsifier"       // Stabilizes oil+water
  | "fragrance"        // Scent (natural or synthetic)
  | "colorant"         // Color additives
  | "sunscreen"        // UV filters
  | "thickener"        // Texture agents
  | "ph_adjuster"      // pH regulators
  | "solvent"          // Base/carrier
  | "humectant"        // Water-binding
  | "exfoliant"        // Chemical or physical exfoliation
  | "soothing"         // Calming, anti-inflammatory
  | "peptide"          // Anti-aging peptides
  | "botanical";       // Plant extracts

export type SkinType = "dry" | "oily" | "combination" | "sensitive" | "normal";

export interface Ingredient {
  id: string;
  inciName: string;
  name: { en: string; fr: string };
  category: IngredientCategory;
  score: ScoreGrade;
  color: "green" | "yellow" | "orange" | "red";
  comedogenic: number; // 0-5
  description: { en: string; fr: string };
  benefits: { en: string; fr: string };
  risks: { en: string; fr: string };
  concerns: string[]; // skin concerns it addresses
  goodFor: SkinType[];
  badFor: SkinType[];
  euRestricted: boolean;
  casNumber?: string;
  aliases?: string[];
}

export const ingredients: Ingredient[] = [
  // ===========================
  // TIER 1 ACTIVES (Gold standard)
  // ===========================
  {
    id: "retinol",
    inciName: "Retinol",
    name: { en: "Retinol", fr: "Retinol" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Vitamin A derivative and the gold standard anti-aging active. Promotes cell turnover, stimulates collagen production, and reduces fine lines, wrinkles, and hyperpigmentation. Extensively studied with decades of clinical evidence.",
      fr: "Derive de la vitamine A et reference absolue en anti-age. Stimule le renouvellement cellulaire, la production de collagene et reduit rides, ridules et hyperpigmentation. Des decennies de preuves cliniques."
    },
    benefits: {
      en: "Reduces wrinkles, fades dark spots, improves skin texture, treats acne, boosts collagen",
      fr: "Reduit les rides, attenue les taches, ameliore la texture, traite l'acne, stimule le collagene"
    },
    risks: {
      en: "Can cause irritation, dryness, and peeling during adjustment period (2-4 weeks). Increases sun sensitivity. Not recommended during pregnancy.",
      fr: "Peut causer irritation, secheresse et desquamation pendant la periode d'adaptation (2-4 semaines). Augmente la sensibilite au soleil. Deconseille pendant la grossesse."
    },
    concerns: ["anti-aging", "acne", "hyperpigmentation"],
    goodFor: ["normal", "oily", "combination"],
    badFor: ["sensitive"],
    euRestricted: false,
    casNumber: "68-26-8",
    aliases: ["vitamin a", "retinyl palmitate", "retinaldehyde"],
  },
  {
    id: "niacinamide",
    inciName: "Niacinamide",
    name: { en: "Niacinamide", fr: "Niacinamide" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Vitamin B3 derivative and one of the most versatile skincare actives. Strengthens the skin barrier, reduces pore appearance, controls sebum, fades dark spots, and has anti-inflammatory properties. Well-tolerated by all skin types.",
      fr: "Derive de la vitamine B3, l'un des actifs les plus polyvalents. Renforce la barriere cutanee, resserre les pores, controle le sebum, attenue les taches et possede des proprietes anti-inflammatoires. Bien tolere par tous les types de peau."
    },
    benefits: {
      en: "Reduces pores, controls oil, fades hyperpigmentation, strengthens barrier, anti-inflammatory",
      fr: "Resserre les pores, controle le sebum, attenue l'hyperpigmentation, renforce la barriere, anti-inflammatoire"
    },
    risks: {
      en: "Very well tolerated. Rare flushing at concentrations above 10%. Compatible with most other actives.",
      fr: "Tres bien tolere. Rare rougeur passagere au-dela de 10%. Compatible avec la plupart des autres actifs."
    },
    concerns: ["acne", "hyperpigmentation", "anti-aging", "pores", "oiliness"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "98-92-0",
    aliases: ["nicotinamide", "vitamin b3"],
  },
  {
    id: "ascorbic-acid",
    inciName: "Ascorbic Acid",
    name: { en: "Vitamin C (L-Ascorbic Acid)", fr: "Vitamine C (Acide L-ascorbique)" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most potent form of Vitamin C for skin. A powerful antioxidant that brightens skin, fades dark spots, protects against UV damage, and stimulates collagen synthesis. Best at 10-20% concentration, pH below 3.5.",
      fr: "La forme la plus puissante de vitamine C pour la peau. Antioxydant puissant qui illumine le teint, attenue les taches, protege des UV et stimule la synthese de collagene. Optimal a 10-20%, pH inferieur a 3,5."
    },
    benefits: {
      en: "Brightens, fades dark spots, antioxidant protection, boosts collagen, photoprotection",
      fr: "Eclat du teint, attenue les taches, protection antioxydante, stimule le collagene, photoprotection"
    },
    risks: {
      en: "Unstable (oxidizes quickly). Can sting on sensitive skin. Requires proper formulation (low pH, airless packaging).",
      fr: "Instable (s'oxyde rapidement). Peut picoter sur peau sensible. Necessite une formulation adaptee (pH bas, packaging airless)."
    },
    concerns: ["anti-aging", "hyperpigmentation"],
    goodFor: ["normal", "oily", "combination"],
    badFor: ["sensitive"],
    euRestricted: false,
    casNumber: "50-81-7",
    aliases: ["l-ascorbic acid", "vitamin c"],
  },
  {
    id: "salicylic-acid",
    inciName: "Salicylic Acid",
    name: { en: "Salicylic Acid (BHA)", fr: "Acide salicylique (BHA)" },
    category: "exfoliant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Beta-hydroxy acid (BHA) that penetrates into pores to dissolve sebum and dead skin cells. The gold standard for acne-prone and oily skin. Oil-soluble, so it works inside the pore unlike AHAs.",
      fr: "Acide beta-hydroxyle (BHA) qui penetre dans les pores pour dissoudre le sebum et les cellules mortes. La reference pour les peaux acneiques et grasses. Liposoluble, il agit a l'interieur du pore contrairement aux AHA."
    },
    benefits: {
      en: "Unclogs pores, reduces acne, controls oil, gentle exfoliation, anti-inflammatory",
      fr: "Desincruste les pores, reduit l'acne, controle le sebum, exfoliation douce, anti-inflammatoire"
    },
    risks: {
      en: "Can be drying at high concentrations. EU limit: 2% in leave-on products. Avoid during pregnancy (derivative of aspirin).",
      fr: "Peut dessecher a forte concentration. Limite UE : 2% en produit sans rincage. Eviter pendant la grossesse (derive de l'aspirine)."
    },
    concerns: ["acne", "pores", "oiliness"],
    goodFor: ["oily", "combination"],
    badFor: ["dry", "sensitive"],
    euRestricted: true,
    casNumber: "69-72-7",
    aliases: ["bha", "beta hydroxy acid"],
  },
  {
    id: "hyaluronic-acid",
    inciName: "Hyaluronic Acid",
    name: { en: "Hyaluronic Acid", fr: "Acide hyaluronique" },
    category: "humectant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A naturally occurring molecule that holds up to 1,000x its weight in water. The ultimate hydrator for all skin types. Available in different molecular weights for surface and deep hydration.",
      fr: "Molecule naturellement presente dans la peau, capable de retenir jusqu'a 1000 fois son poids en eau. L'hydratant ultime pour tous les types de peau. Disponible en differents poids moleculaires."
    },
    benefits: {
      en: "Intense hydration, plumps fine lines, lightweight, compatible with all skin types",
      fr: "Hydratation intense, repulpe les ridules, leger, compatible avec tous les types de peau"
    },
    risks: {
      en: "In very dry climates, low molecular weight HA can draw moisture from deeper skin layers. Always seal with a moisturizer.",
      fr: "En climat tres sec, l'HA de faible poids moleculaire peut puiser l'eau des couches profondes. Toujours sceller avec un hydratant."
    },
    concerns: ["dryness", "anti-aging"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "9004-61-9",
    aliases: ["sodium hyaluronate", "ha", "hyaluronan"],
  },
  {
    id: "glycolic-acid",
    inciName: "Glycolic Acid",
    name: { en: "Glycolic Acid (AHA)", fr: "Acide glycolique (AHA)" },
    category: "exfoliant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The smallest alpha-hydroxy acid (AHA), derived from sugarcane. Penetrates deeply for effective exfoliation. Accelerates cell turnover, improves texture, fades dark spots, and stimulates collagen at higher concentrations.",
      fr: "Le plus petit des acides alpha-hydroxyles (AHA), derive de la canne a sucre. Penetre en profondeur pour une exfoliation efficace. Accelere le renouvellement cellulaire, ameliore la texture et stimule le collagene."
    },
    benefits: {
      en: "Exfoliates, brightens, fades dark spots, improves texture, boosts collagen",
      fr: "Exfolie, illumine, attenue les taches, ameliore la texture, stimule le collagene"
    },
    risks: {
      en: "Increases sun sensitivity (SPF mandatory). Can irritate at high concentrations (>10%). Start low, build up.",
      fr: "Augmente la sensibilite au soleil (SPF obligatoire). Peut irriter a forte concentration (>10%). Commencer bas, augmenter progressivement."
    },
    concerns: ["anti-aging", "hyperpigmentation", "acne"],
    goodFor: ["normal", "oily", "combination"],
    badFor: ["sensitive"],
    euRestricted: true,
    casNumber: "79-14-1",
    aliases: ["aha", "alpha hydroxy acid"],
  },
  {
    id: "azelaic-acid",
    inciName: "Azelaic Acid",
    name: { en: "Azelaic Acid", fr: "Acide azelaique" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A multi-tasking acid naturally produced by yeast on normal skin. Anti-inflammatory, antibacterial, and tyrosinase-inhibiting. One of the few actives safe in pregnancy and effective for rosacea.",
      fr: "Acide multifonction naturellement produit par les levures de la peau. Anti-inflammatoire, antibacterien et inhibiteur de la tyrosinase. L'un des rares actifs surs pendant la grossesse et efficace sur la rosacee."
    },
    benefits: {
      en: "Treats acne and rosacea, fades dark spots, anti-inflammatory, pregnancy-safe",
      fr: "Traite l'acne et la rosacee, attenue les taches, anti-inflammatoire, sur pendant la grossesse"
    },
    risks: {
      en: "Mild tingling or itching in first uses. Generally very well tolerated.",
      fr: "Leger picotement ou demangeaison aux premiers usages. Generalement tres bien tolere."
    },
    concerns: ["acne", "rosacea", "hyperpigmentation"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "123-99-9",
  },
  {
    id: "ceramide-np",
    inciName: "Ceramide NP",
    name: { en: "Ceramide NP", fr: "Ceramide NP" },
    category: "hydrator",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "One of the three essential ceramides (NP, AP, EOP) that make up 50% of the skin barrier. Restores and maintains the lipid barrier, prevents moisture loss, and protects against environmental damage.",
      fr: "L'un des trois ceramides essentiels (NP, AP, EOP) qui composent 50% de la barriere cutanee. Restaure la barriere lipidique, previent la perte en eau et protege contre les agressions exterieures."
    },
    benefits: {
      en: "Restores skin barrier, locks in moisture, reduces sensitivity, repairs damaged skin",
      fr: "Restaure la barriere cutanee, retient l'hydratation, reduit la sensibilite, repare la peau abimee"
    },
    risks: {
      en: "No known risks. One of the safest and most beneficial ingredients in skincare.",
      fr: "Aucun risque connu. L'un des ingredients les plus surs et benefiques en skincare."
    },
    concerns: ["dryness", "sensitivity"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "100403-19-8",
    aliases: ["ceramide 3", "n-stearoyl phytosphingosine"],
  },

  // ===========================
  // HYDRATORS & EMOLLIENTS
  // ===========================
  {
    id: "glycerin",
    inciName: "Glycerin",
    name: { en: "Glycerin", fr: "Glycerine" },
    category: "humectant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most widely used humectant in skincare. Draws water from the environment and deeper skin layers to hydrate the surface. Found in nearly every well-formulated moisturizer.",
      fr: "L'humectant le plus utilise en skincare. Attire l'eau de l'environnement et des couches profondes pour hydrater la surface. Present dans presque tous les hydratants bien formules."
    },
    benefits: { en: "Hydrates, softens, strengthens barrier, non-comedogenic", fr: "Hydrate, adoucit, renforce la barriere, non comedogene" },
    risks: { en: "None at typical concentrations. Can feel sticky at very high percentages.", fr: "Aucun aux concentrations habituelles. Peut etre collant a tres haute concentration." },
    concerns: ["dryness"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "56-81-5",
  },
  {
    id: "squalane",
    inciName: "Squalane",
    name: { en: "Squalane", fr: "Squalane" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Hydrogenated form of squalene, naturally found in human sebum. Lightweight, non-greasy oil that mimics skin's natural lipids. Excellent for all skin types including oily.",
      fr: "Forme hydrogenee du squalene, naturellement present dans le sebum humain. Huile legere et non grasse qui imite les lipides naturels de la peau. Excellent pour tous les types de peau."
    },
    benefits: { en: "Lightweight hydration, mimics natural sebum, non-comedogenic, antioxidant", fr: "Hydratation legere, imite le sebum naturel, non comedogene, antioxydant" },
    risks: { en: "None. One of the safest emollients.", fr: "Aucun. L'un des emollients les plus surs." },
    concerns: ["dryness"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "111-01-3",
  },
  {
    id: "panthenol",
    inciName: "Panthenol",
    name: { en: "Panthenol (Pro-Vitamin B5)", fr: "Panthenol (Provitamine B5)" },
    category: "soothing",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Pro-vitamin B5 that converts to pantothenic acid in the skin. Deeply hydrating, soothing, and wound-healing. A staple in products for sensitive and damaged skin.",
      fr: "Provitamine B5 qui se convertit en acide pantothenique dans la peau. Profondement hydratant, apaisant et cicatrisant. Un incontournable pour les peaux sensibles et abimees."
    },
    benefits: { en: "Soothes, heals, deeply hydrates, strengthens barrier, anti-inflammatory", fr: "Apaise, cicatrise, hydrate en profondeur, renforce la barriere, anti-inflammatoire" },
    risks: { en: "Extremely well tolerated. No known risks.", fr: "Extremement bien tolere. Aucun risque connu." },
    concerns: ["dryness", "sensitivity"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "81-13-0",
    aliases: ["dexpanthenol", "d-panthenol", "provitamin b5"],
  },
  {
    id: "shea-butter",
    inciName: "Butyrospermum Parkii Butter",
    name: { en: "Shea Butter", fr: "Beurre de karite" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Rich plant butter from the African shea tree. Loaded with fatty acids, vitamins A and E. Deeply nourishing without being comedogenic. A gold standard for dry skin.",
      fr: "Beurre vegetal riche issu du karite africain. Riche en acides gras, vitamines A et E. Nourrissant en profondeur sans etre comedogene. La reference pour les peaux seches."
    },
    benefits: { en: "Deep nourishment, anti-inflammatory, restores barrier, rich in vitamins", fr: "Nutrition profonde, anti-inflammatoire, restaure la barriere, riche en vitamines" },
    risks: { en: "Can feel heavy on oily skin. Rare tree nut sensitivity (very rare with refined).", fr: "Peut paraitre lourd sur peau grasse. Rare sensibilite aux fruits a coque (tres rare avec le raffine)." },
    concerns: ["dryness"],
    goodFor: ["dry", "normal", "sensitive"],
    badFor: ["oily"],
    euRestricted: false,
    casNumber: "194043-92-0",
    aliases: ["karite", "shea"],
  },

  // ===========================
  // ANTIOXIDANTS
  // ===========================
  {
    id: "tocopherol",
    inciName: "Tocopherol",
    name: { en: "Vitamin E (Tocopherol)", fr: "Vitamine E (Tocopherol)" },
    category: "antioxidant",
    score: "A",
    color: "green",
    comedogenic: 2,
    description: {
      en: "Fat-soluble antioxidant that protects cell membranes from oxidative damage. Synergizes with vitamin C for enhanced photoprotection. Also stabilizes formulations.",
      fr: "Antioxydant liposoluble qui protege les membranes cellulaires du stress oxydatif. En synergie avec la vitamine C pour une photoprotection renforcee. Stabilise egalement les formulations."
    },
    benefits: { en: "Antioxidant, moisturizing, anti-inflammatory, stabilizes vitamin C", fr: "Antioxydant, hydratant, anti-inflammatoire, stabilise la vitamine C" },
    risks: { en: "Slightly comedogenic for some. Rare contact dermatitis.", fr: "Legerement comedogene pour certains. Rare dermatite de contact." },
    concerns: ["anti-aging"],
    goodFor: ["dry", "normal", "combination"],
    badFor: [],
    euRestricted: false,
    casNumber: "59-02-9",
    aliases: ["vitamin e", "tocopheryl acetate"],
  },
  {
    id: "centella-asiatica",
    inciName: "Centella Asiatica Extract",
    name: { en: "Centella Asiatica (Cica)", fr: "Centella Asiatica (Cica)" },
    category: "soothing",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Ancient medicinal plant, a K-beauty hero ingredient. Contains madecassoside, asiaticoside, and asiatic acid. Powerful wound healer, anti-inflammatory, and collagen stimulator.",
      fr: "Plante medicinale ancestrale, ingredient star de la K-beauty. Contient madecassoside, asiaticoside et acide asiatique. Puissant cicatrisant, anti-inflammatoire et stimulateur de collagene."
    },
    benefits: { en: "Soothes, heals, stimulates collagen, anti-inflammatory, strengthens barrier", fr: "Apaise, cicatrise, stimule le collagene, anti-inflammatoire, renforce la barriere" },
    risks: { en: "Very well tolerated. Extremely rare sensitization.", fr: "Tres bien tolere. Sensibilisation extremement rare." },
    concerns: ["sensitivity", "rosacea", "anti-aging"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "84696-21-9",
    aliases: ["cica", "madecassoside", "asiaticoside", "tiger grass"],
  },

  // ===========================
  // SUNSCREEN FILTERS
  // ===========================
  {
    id: "zinc-oxide",
    inciName: "Zinc Oxide",
    name: { en: "Zinc Oxide", fr: "Oxyde de zinc" },
    category: "sunscreen",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Mineral (physical) UV filter that blocks both UVA and UVB rays. Sits on top of skin and reflects UV. The safest sunscreen option, especially for sensitive and rosacea-prone skin.",
      fr: "Filtre UV mineral (physique) qui bloque les UVA et UVB. Reste en surface et reflechit les UV. L'option solaire la plus sure, surtout pour les peaux sensibles et sujettes a la rosacee."
    },
    benefits: { en: "Broad-spectrum UV protection, anti-inflammatory, safe for sensitive skin, reef-safe", fr: "Protection UV large spectre, anti-inflammatoire, sur pour peau sensible, respectueux des recifs" },
    risks: { en: "Can leave white cast on darker skin tones. Nano-zinc reduces this but raises inhalation concerns in sprays.", fr: "Peut laisser un film blanc sur peaux foncees. Le nano-zinc reduit cet effet mais pose des questions en spray." },
    concerns: ["sensitivity", "rosacea"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "1314-13-2",
  },

  // ===========================
  // PEPTIDES
  // ===========================
  {
    id: "copper-tripeptide-1",
    inciName: "Copper Tripeptide-1",
    name: { en: "Copper Peptide (GHK-Cu)", fr: "Peptide de cuivre (GHK-Cu)" },
    category: "peptide",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A naturally occurring copper-binding peptide with remarkable wound-healing and anti-aging properties. Stimulates collagen, elastin, and glycosaminoglycan synthesis. Remodels damaged tissue.",
      fr: "Peptide naturellement lie au cuivre avec des proprietes cicatrisantes et anti-age remarquables. Stimule la synthese de collagene, d'elastine et de glycosaminoglycanes."
    },
    benefits: { en: "Stimulates collagen, heals, firms, anti-inflammatory, antioxidant", fr: "Stimule le collagene, cicatrise, raffermit, anti-inflammatoire, antioxydant" },
    risks: { en: "Do not combine with strong acids (vitamin C at low pH) as copper can oxidize ascorbic acid.", fr: "Ne pas combiner avec des acides forts (vitamine C a pH bas) car le cuivre peut oxyder l'acide ascorbique." },
    concerns: ["anti-aging"],
    goodFor: ["dry", "normal", "combination", "sensitive"],
    badFor: [],
    euRestricted: false,
    casNumber: "49557-75-7",
    aliases: ["ghk-cu"],
  },

  // ===========================
  // CONCERNING INGREDIENTS
  // ===========================
  {
    id: "fragrance",
    inciName: "Parfum",
    name: { en: "Fragrance (Parfum)", fr: "Parfum" },
    category: "fragrance",
    score: "D",
    color: "orange",
    comedogenic: 0,
    description: {
      en: "Umbrella term for any scent blend, which can contain hundreds of undisclosed chemicals. The #1 cause of allergic contact dermatitis in cosmetics. The EU lists 26 fragrance allergens that must be declared.",
      fr: "Terme parapluie pour tout melange odorant, pouvant contenir des centaines de molecules non divulguees. Cause n1 de dermatite de contact allergique en cosmetique. L'UE liste 26 allergenes a declarer."
    },
    benefits: { en: "Pleasant sensory experience, brand identity", fr: "Experience sensorielle agreable, identite de marque" },
    risks: { en: "Top allergen, undisclosed composition, cumulative sensitization risk, photosensitivity for some components", fr: "Allergene majeur, composition non divulguee, risque de sensibilisation cumulative, photosensibilite pour certains composants" },
    concerns: [],
    goodFor: [],
    badFor: ["sensitive", "dry"],
    euRestricted: false,
    aliases: ["parfum", "aroma"],
  },
  {
    id: "alcohol-denat",
    inciName: "Alcohol Denat.",
    name: { en: "Denatured Alcohol", fr: "Alcool denature" },
    category: "solvent",
    score: "D",
    color: "orange",
    comedogenic: 0,
    description: {
      en: "Denatured ethanol used as a solvent and to improve product feel (fast-drying, lightweight). At high concentrations (top 5 on INCI list), disrupts the skin barrier and causes dryness.",
      fr: "Ethanol denature utilise comme solvant et pour ameliorer la texture (sechage rapide, leger). A forte concentration (top 5 de la liste INCI), altere la barriere cutanee et desseche."
    },
    benefits: { en: "Lightweight feel, fast absorption, preservative, dissolves actives", fr: "Texture legere, absorption rapide, conservateur, dissout les actifs" },
    risks: { en: "Disrupts skin barrier at high concentrations, drying, increases TEWL, may accelerate aging with chronic use", fr: "Altere la barriere cutanee a forte concentration, dessechant, augmente la perte en eau, peut accelerer le vieillissement a l'usage chronique" },
    concerns: [],
    goodFor: ["oily"],
    badFor: ["dry", "sensitive"],
    euRestricted: false,
    casNumber: "64-17-5",
    aliases: ["alcohol", "ethanol", "sd alcohol"],
  },
  {
    id: "sodium-lauryl-sulfate",
    inciName: "Sodium Lauryl Sulfate",
    name: { en: "Sodium Lauryl Sulfate (SLS)", fr: "Laurylsulfate de sodium (SLS)" },
    category: "surfactant",
    score: "D",
    color: "orange",
    comedogenic: 0,
    description: {
      en: "A harsh anionic surfactant used in cleansers. Creates rich lather but strips the skin barrier aggressively. One of the most studied irritants in dermatology (used as a positive control in patch tests).",
      fr: "Tensioactif anionique agressif utilise dans les nettoyants. Mousse abondante mais altere la barriere cutanee. L'un des irritants les plus etudies en dermatologie (controle positif en patch tests)."
    },
    benefits: { en: "Effective cleansing, rich lather, low cost", fr: "Nettoyage efficace, mousse abondante, faible cout" },
    risks: { en: "Strips skin barrier, causes irritation, dryness, and inflammation. Avoid in leave-on products.", fr: "Altere la barriere cutanee, cause irritation, secheresse et inflammation. Eviter dans les produits sans rincage." },
    concerns: [],
    goodFor: [],
    badFor: ["dry", "sensitive", "normal"],
    euRestricted: false,
    casNumber: "151-21-3",
    aliases: ["sls", "sodium dodecyl sulfate"],
  },
  {
    id: "oxybenzone",
    inciName: "Benzophenone-3",
    name: { en: "Oxybenzone", fr: "Oxybenzone" },
    category: "sunscreen",
    score: "E",
    color: "red",
    comedogenic: 0,
    description: {
      en: "Chemical UV filter with broad-spectrum protection but significant safety concerns. Endocrine disruptor, photoallergy risk, and harmful to coral reefs. Banned in Hawaii and Palau.",
      fr: "Filtre UV chimique a large spectre mais avec des preoccupations de securite majeures. Perturbateur endocrinien, risque de photoallergie et nocif pour les recifs coralliens. Interdit a Hawaii et Palau."
    },
    benefits: { en: "Broad-spectrum UV protection, photostable, low cost", fr: "Protection UV large spectre, photostable, faible cout" },
    risks: { en: "Endocrine disruptor (estrogenic activity), photoallergy, environmental damage to coral reefs, detected in breast milk", fr: "Perturbateur endocrinien (activite estrogenique), photoallergie, dommages environnementaux aux recifs, detecte dans le lait maternel" },
    concerns: [],
    goodFor: [],
    badFor: ["dry", "oily", "combination", "sensitive", "normal"],
    euRestricted: true,
    casNumber: "131-57-7",
    aliases: ["benzophenone-3", "bp-3"],
  },
  {
    id: "methylisothiazolinone",
    inciName: "Methylisothiazolinone",
    name: { en: "Methylisothiazolinone (MI)", fr: "Methylisothiazolinone (MI)" },
    category: "preservative",
    score: "E",
    color: "red",
    comedogenic: 0,
    description: {
      en: "Preservative that became the 'Allergen of the Year' in 2013. Powerful sensitizer that caused an epidemic of contact dermatitis. Now banned in EU leave-on products, restricted in rinse-off.",
      fr: "Conservateur nomme 'Allergene de l'annee' en 2013. Sensibilisant puissant qui a provoque une epidemie de dermatite de contact. Interdit dans les produits sans rincage en UE, restreint en rincage."
    },
    benefits: { en: "Effective broad-spectrum preservation", fr: "Conservation efficace a large spectre" },
    risks: { en: "Strong sensitizer, banned in EU leave-on products since 2016, contact dermatitis epidemic", fr: "Sensibilisant puissant, interdit dans les produits sans rincage en UE depuis 2016, epidemie de dermatite de contact" },
    concerns: [],
    goodFor: [],
    badFor: ["dry", "oily", "combination", "sensitive", "normal"],
    euRestricted: true,
    casNumber: "2682-20-4",
    aliases: ["mi", "mit", "kathon"],
  },

  // ===========================
  // COMMON BASES & NEUTRALS
  // ===========================
  {
    id: "aqua",
    inciName: "Aqua",
    name: { en: "Water", fr: "Eau" },
    category: "solvent",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most common first ingredient in skincare. Acts as a solvent and carrier for active ingredients. Purified or deionized water.",
      fr: "L'ingredient le plus courant en premiere position. Solvant et vehicule pour les actifs. Eau purifiee ou deionisee."
    },
    benefits: { en: "Universal solvent, hydrating base", fr: "Solvant universel, base hydratante" },
    risks: { en: "None", fr: "Aucun" },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    aliases: ["water", "eau"],
  },
  {
    id: "phenoxyethanol",
    inciName: "Phenoxyethanol",
    name: { en: "Phenoxyethanol", fr: "Phenoxyethanol" },
    category: "preservative",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most common preservative in modern skincare, replacing parabens. Safe at the EU limit of 1%. Used by nearly every brand from CeraVe to La Roche-Posay.",
      fr: "Le conservateur le plus courant en skincare moderne, remplacant les parabenes. Sur a la limite UE de 1%. Utilise par presque toutes les marques, de CeraVe a La Roche-Posay."
    },
    benefits: { en: "Effective preservation, well-studied safety profile, widely accepted", fr: "Conservation efficace, profil de securite bien etudie, largement accepte" },
    risks: { en: "Safe at EU limit (1%). Very rare sensitization. Safe alternative to parabens.", fr: "Sur a la limite UE (1%). Sensibilisation tres rare. Alternative sure aux parabenes." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: true,
    casNumber: "122-99-6",
  },
  {
    id: "dimethicone",
    inciName: "Dimethicone",
    name: { en: "Dimethicone", fr: "Dimethicone" },
    category: "emollient",
    score: "B",
    color: "green",
    comedogenic: 1,
    description: {
      en: "Silicone-based emollient that creates a smooth, protective film on skin. Gives products a silky feel. Does not penetrate skin, sits on surface. Non-toxic, non-sensitizing.",
      fr: "Emollient a base de silicone qui cree un film protecteur lisse sur la peau. Donne une texture soyeuse aux produits. Ne penetre pas la peau. Non toxique, non sensibilisant."
    },
    benefits: { en: "Smooth texture, protective barrier, locks in moisture, non-irritating", fr: "Texture lisse, barriere protectrice, retient l'hydratation, non irritant" },
    risks: { en: "Occlusive (can trap irritants underneath). May feel heavy. Not biodegradable.", fr: "Occlusif (peut pieger des irritants en dessous). Peut paraitre lourd. Non biodegradable." },
    concerns: [],
    goodFor: ["dry", "normal", "combination"],
    badFor: [],
    euRestricted: false,
    casNumber: "9006-65-9",
    aliases: ["polydimethylsiloxane", "pdms"],
  },

  // ===========================
  // BOTANICALS
  // ===========================
  {
    id: "alpha-arbutin",
    inciName: "Alpha-Arbutin",
    name: { en: "Alpha-Arbutin", fr: "Alpha-Arbutine" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Biosynthetic derivative of hydroquinone, but without the toxicity. Inhibits tyrosinase to reduce melanin production. The safest and most effective brightening agent after vitamin C.",
      fr: "Derive biosynthetique de l'hydroquinone, mais sans la toxicite. Inhibe la tyrosinase pour reduire la production de melanine. L'agent eclaircissant le plus sur et efficace apres la vitamine C."
    },
    benefits: { en: "Fades dark spots, brightens, inhibits melanin, safe alternative to hydroquinone", fr: "Attenue les taches, illumine, inhibe la melanine, alternative sure a l'hydroquinone" },
    risks: { en: "Very well tolerated. No significant risks at cosmetic concentrations (up to 2%).", fr: "Tres bien tolere. Aucun risque significatif aux concentrations cosmetiques (jusqu'a 2%)." },
    concerns: ["hyperpigmentation"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "84380-01-8",
    aliases: ["arbutin"],
  },
  {
    id: "bakuchiol",
    inciName: "Bakuchiol",
    name: { en: "Bakuchiol", fr: "Bakuchiol" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Plant-derived retinol alternative from the Babchi plant. Mimics retinol's anti-aging effects (collagen stimulation, cell turnover) without the irritation. Pregnancy-safe.",
      fr: "Alternative vegetale au retinol issue de la plante Babchi. Imite les effets anti-age du retinol (stimulation du collagene, renouvellement cellulaire) sans l'irritation. Compatible grossesse."
    },
    benefits: { en: "Anti-aging without irritation, pregnancy-safe, antioxidant, collagen stimulation", fr: "Anti-age sans irritation, compatible grossesse, antioxydant, stimulation du collagene" },
    risks: { en: "Minimal. Less studied than retinol long-term, but current evidence is very positive.", fr: "Minimes. Moins etudie que le retinol a long terme, mais les preuves actuelles sont tres positives." },
    concerns: ["anti-aging"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "10309-37-2",
  },
  {
    id: "tranexamic-acid",
    inciName: "Tranexamic Acid",
    name: { en: "Tranexamic Acid", fr: "Acide tranexamique" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Originally a blood-clotting medication, now a rising star in skincare for hyperpigmentation. Inhibits UV-induced melanin production. Effective for melasma, post-inflammatory hyperpigmentation, and sun spots.",
      fr: "A l'origine un medicament anti-hemorragique, maintenant une star montante en skincare pour l'hyperpigmentation. Inhibe la production de melanine induite par les UV. Efficace sur melasma et taches."
    },
    benefits: { en: "Fades melasma, reduces dark spots, prevents UV-induced pigmentation, well-tolerated", fr: "Attenue le melasma, reduit les taches, previent la pigmentation UV, bien tolere" },
    risks: { en: "Very well tolerated topically. No significant risks at cosmetic concentrations.", fr: "Tres bien tolere en topique. Aucun risque significatif aux concentrations cosmetiques." },
    concerns: ["hyperpigmentation"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "1197-18-8",
  },
  {
    id: "lactic-acid",
    inciName: "Lactic Acid",
    name: { en: "Lactic Acid (AHA)", fr: "Acide lactique (AHA)" },
    category: "exfoliant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A gentle AHA naturally found in milk. Larger molecule than glycolic acid, so less penetrating but also less irritating. Exfoliates while hydrating (humectant properties).",
      fr: "AHA doux naturellement present dans le lait. Molecule plus grosse que l'acide glycolique, donc moins penetrante mais aussi moins irritante. Exfolie tout en hydratant."
    },
    benefits: { en: "Gentle exfoliation, hydrating, brightening, suitable for beginners", fr: "Exfoliation douce, hydratante, eclat du teint, adaptee aux debutants" },
    risks: { en: "Increases sun sensitivity. Milder than glycolic acid but can still irritate sensitive skin.", fr: "Augmente la sensibilite au soleil. Plus doux que l'acide glycolique mais peut irriter les peaux sensibles." },
    concerns: ["dryness", "anti-aging", "hyperpigmentation"],
    goodFor: ["dry", "normal", "combination", "sensitive"],
    badFor: [],
    euRestricted: true,
    casNumber: "50-21-5",
  },
  {
    id: "urea",
    inciName: "Urea",
    name: { en: "Urea", fr: "Uree" },
    category: "humectant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Natural moisturising factor (NMF) component. At low concentrations (2-10%) it's a powerful humectant. At higher concentrations (10-40%) it becomes a keratolytic that softens rough skin.",
      fr: "Composant du facteur naturel d'hydratation (NMF). A faible concentration (2-10%) c'est un puissant humectant. A forte concentration (10-40%) il devient un keratolytique qui adoucit les peaux rugueuses."
    },
    benefits: { en: "Deep hydration, softens calluses, restores NMF, exfoliates at high %", fr: "Hydratation profonde, adoucit les callosites, restaure le NMF, exfolie a haut %" },
    risks: { en: "Can sting on broken skin. At 40%+ concentrations, only for body/feet.", fr: "Peut piquer sur peau lesee. A 40%+, uniquement pour corps/pieds." },
    concerns: ["dryness"],
    goodFor: ["dry", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "57-13-6",
  },

  // ===========================
  // BATCH 2: Common INCI ingredients (emulsifiers, thickeners, preservatives, botanicals)
  // ===========================
  {
    id: "cetearyl-alcohol",
    inciName: "Cetearyl Alcohol",
    name: { en: "Cetearyl Alcohol", fr: "Alcool cetearylique" },
    category: "emulsifier",
    score: "B",
    color: "green",
    comedogenic: 2,
    description: {
      en: "A fatty alcohol (not a drying alcohol) used as an emulsifier and thickener. Gives products a creamy, luxurious texture. Found in most moisturisers and conditioners.",
      fr: "Un alcool gras (pas un alcool dessechant) utilise comme emulsifiant et epaississant. Donne aux produits une texture cremeuse et onctueuse. Present dans la plupart des hydratants.",
    },
    benefits: { en: "Emollient, thickener, smooth texture, stabilises formulas", fr: "Emollient, epaississant, texture lisse, stabilise les formules" },
    risks: { en: "Mildly comedogenic for some (rating 2/5). Can exacerbate fungal acne.", fr: "Legerement comedogene pour certains (note 2/5). Peut aggraver l'acne fongique." },
    concerns: [],
    goodFor: ["dry", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "67762-27-0",
    aliases: ["cetostearyl alcohol", "c16-18 alcohol"],
  },
  {
    id: "caprylic-capric-triglyceride",
    inciName: "Caprylic/Capric Triglyceride",
    name: { en: "Caprylic/Capric Triglyceride", fr: "Triglyceride caprique/caprylique" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 1,
    description: {
      en: "A light, skin-friendly emollient derived from coconut oil. Acts as a carrier for other ingredients and provides a silky, non-greasy feel. One of the most common and safest emollients in skincare.",
      fr: "Un emollient leger et compatible avec la peau, derive de l'huile de coco. Sert de vehicule et apporte un toucher soyeux et non gras. L'un des emollients les plus courants et les plus surs.",
    },
    benefits: { en: "Lightweight emollient, non-greasy, excellent carrier, very safe", fr: "Emollient leger, non gras, excellent vehicule, tres sur" },
    risks: { en: "No significant risks. Extremely well tolerated.", fr: "Aucun risque significatif. Extremement bien tolere." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "65381-09-1",
    aliases: ["mct oil", "coco-caprylate"],
  },
  {
    id: "butylene-glycol",
    inciName: "Butylene Glycol",
    name: { en: "Butylene Glycol", fr: "Butylene glycol" },
    category: "humectant",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A lightweight humectant and solvent that helps other ingredients penetrate the skin. Also acts as a preservative booster. Extremely common in K-beauty and Western formulations.",
      fr: "Un humectant leger et solvant qui aide les autres ingredients a penetrer la peau. Agit aussi comme amplificateur de conservation. Tres courant en K-beauty et en formulations occidentales.",
    },
    benefits: { en: "Humectant, enhances penetration, preservative booster, lightweight", fr: "Humectant, ameliore la penetration, amplificateur de conservation, leger" },
    risks: { en: "Very well tolerated. Rare irritation at high concentrations.", fr: "Tres bien tolere. Rare irritation a haute concentration." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "107-88-0",
  },
  {
    id: "propanediol",
    inciName: "Propanediol",
    name: { en: "Propanediol", fr: "Propanediol" },
    category: "humectant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A plant-derived alternative to propylene glycol. Humectant and solvent that helps active ingredients absorb better. Bio-based, sustainable, and very gentle on skin.",
      fr: "Alternative d'origine vegetale au propylene glycol. Humectant et solvant qui ameliore l'absorption des actifs. Bio-source, durable et tres doux pour la peau.",
    },
    benefits: { en: "Humectant, enhances absorption, plant-derived, gentle", fr: "Humectant, ameliore l'absorption, d'origine vegetale, doux" },
    risks: { en: "No significant risks.", fr: "Aucun risque significatif." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "504-63-2",
  },
  {
    id: "carbomer",
    inciName: "Carbomer",
    name: { en: "Carbomer", fr: "Carbomere" },
    category: "thickener",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A synthetic polymer used to thicken and stabilise gel and cream formulations. Creates the gel-like texture in many skincare products. Completely inert and non-irritating.",
      fr: "Un polymere synthetique utilise pour epaissir et stabiliser les formulations gel et creme. Cree la texture gelee de nombreux produits. Completement inerte et non irritant.",
    },
    benefits: { en: "Thickener, stabiliser, creates gel texture, inert", fr: "Epaississant, stabilisant, cree la texture gel, inerte" },
    risks: { en: "None. Completely inert on skin.", fr: "Aucun. Completement inerte sur la peau." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "9003-01-4",
  },
  {
    id: "xanthan-gum",
    inciName: "Xanthan Gum",
    name: { en: "Xanthan Gum", fr: "Gomme xanthane" },
    category: "thickener",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A natural polysaccharide produced by bacterial fermentation. Used as a thickener and stabiliser. Gives creams and gels their smooth, spreadable consistency.",
      fr: "Un polysaccharide naturel produit par fermentation bacterienne. Utilise comme epaississant et stabilisant. Donne aux cremes et gels leur consistance lisse et facile a etaler.",
    },
    benefits: { en: "Natural thickener, stabiliser, smooth texture", fr: "Epaississant naturel, stabilisant, texture lisse" },
    risks: { en: "None.", fr: "Aucun." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "11138-66-2",
  },
  {
    id: "allantoin",
    inciName: "Allantoin",
    name: { en: "Allantoin", fr: "Allantoine" },
    category: "soothing",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A gentle skin-soothing and conditioning agent found naturally in comfrey root. Promotes cell regeneration, moisturises, and calms irritated skin. Often found in sensitive skin and baby products.",
      fr: "Un agent apaisant et conditionneur doux, naturellement present dans la racine de consoude. Favorise la regeneration cellulaire, hydrate et calme les peaux irritees. Souvent dans les produits peaux sensibles et bebe.",
    },
    benefits: { en: "Soothes, heals, promotes cell renewal, moisturises", fr: "Apaise, cicatrise, favorise le renouvellement cellulaire, hydrate" },
    risks: { en: "No known risks. Extremely gentle.", fr: "Aucun risque connu. Extremement doux." },
    concerns: ["sensitivity", "dryness"],
    goodFor: ["dry", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "97-59-6",
  },
  {
    id: "sodium-hydroxide",
    inciName: "Sodium Hydroxide",
    name: { en: "Sodium Hydroxide", fr: "Hydroxyde de sodium" },
    category: "ph_adjuster",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A pH adjuster (lye) used in tiny amounts to bring formulas to skin-compatible pH. Despite sounding harsh, it's completely safe at the trace amounts used in cosmetics. Essential for AHA/BHA products.",
      fr: "Un ajusteur de pH (soude) utilise en infimes quantites pour amener les formules a un pH compatible avec la peau. Malgre son nom, completement sur aux traces utilisees en cosmetique. Essentiel pour les produits AHA/BHA.",
    },
    benefits: { en: "pH regulation, essential for acid-based formulas", fr: "Regulation du pH, essentiel pour les formules a base d'acides" },
    risks: { en: "None at cosmetic concentrations (trace amounts).", fr: "Aucun aux concentrations cosmetiques (traces)." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "1310-73-2",
    aliases: ["lye", "caustic soda"],
  },
  {
    id: "citric-acid",
    inciName: "Citric Acid",
    name: { en: "Citric Acid", fr: "Acide citrique" },
    category: "ph_adjuster",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A weak organic acid naturally found in citrus fruits. Used primarily as a pH adjuster and chelating agent. At higher concentrations can act as a mild AHA exfoliant.",
      fr: "Un acide organique faible naturellement present dans les agrumes. Utilise principalement comme ajusteur de pH et agent chelateur. A plus forte concentration, peut agir comme un exfoliant AHA doux.",
    },
    benefits: { en: "pH adjuster, chelating agent, mild exfoliant at high %", fr: "Ajusteur de pH, agent chelateur, exfoliant doux a haut %" },
    risks: { en: "None at typical cosmetic concentrations.", fr: "Aucun aux concentrations cosmetiques habituelles." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "77-92-9",
  },
  {
    id: "ethylhexylglycerin",
    inciName: "Ethylhexylglycerin",
    name: { en: "Ethylhexylglycerin", fr: "Ethylhexylglycerin" },
    category: "preservative",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A preservative booster and skin conditioning agent derived from glycerin. Often paired with phenoxyethanol to boost its effectiveness. Also functions as a deodorant active.",
      fr: "Un amplificateur de conservation et agent conditionneur derive de la glycerine. Souvent associe au phenoxyethanol pour booster son efficacite. Fonctionne aussi comme actif deodorant.",
    },
    benefits: { en: "Preservative booster, skin conditioning, deodorant properties", fr: "Amplificateur de conservation, conditionneur, proprietes deodorantes" },
    risks: { en: "Very rare sensitisation. Generally safe.", fr: "Sensibilisation tres rare. Generalement sur." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "70445-33-9",
  },
  {
    id: "disodium-edta",
    inciName: "Disodium EDTA",
    name: { en: "Disodium EDTA", fr: "EDTA disodique" },
    category: "ph_adjuster",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A chelating agent that binds to metal ions in water, preventing them from destabilising the formula. Improves the efficacy of preservatives. Very common, generally safe.",
      fr: "Un agent chelateur qui se lie aux ions metalliques dans l'eau, empechant la destabilisation de la formule. Ameliore l'efficacite des conservateurs. Tres courant, generalement sur.",
    },
    benefits: { en: "Stabilises formulas, boosts preservative efficacy", fr: "Stabilise les formules, booste l'efficacite des conservateurs" },
    risks: { en: "Environmental concern (not readily biodegradable). Safe on skin.", fr: "Preoccupation environnementale (non facilement biodegradable). Sur sur la peau." },
    concerns: [],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "139-33-3",
  },
  {
    id: "coconut-oil",
    inciName: "Cocos Nucifera Oil",
    name: { en: "Coconut Oil", fr: "Huile de coco" },
    category: "emollient",
    score: "C",
    color: "yellow",
    comedogenic: 4,
    description: {
      en: "A popular natural oil rich in lauric acid (antibacterial). Highly comedogenic (4/5) for facial use. Fine for body care, but a common cause of breakouts when used on the face.",
      fr: "Une huile naturelle populaire riche en acide laurique (antibacterien). Hautement comedogene (4/5) pour le visage. Correct pour le corps, mais cause frequente de boutons sur le visage.",
    },
    benefits: { en: "Antibacterial (lauric acid), deeply moisturising, natural", fr: "Antibacterien (acide laurique), hydratation profonde, naturel" },
    risks: { en: "Highly comedogenic (4/5). Major breakout risk on face. Avoid if acne-prone.", fr: "Hautement comedogene (4/5). Risque majeur de boutons sur le visage. Eviter si peau acneique." },
    concerns: [],
    goodFor: ["dry"],
    badFor: ["oily", "combination"],
    euRestricted: false,
    casNumber: "8001-31-8",
    aliases: ["cocos nucifera", "virgin coconut oil"],
  },
  {
    id: "jojoba-oil",
    inciName: "Simmondsia Chinensis Seed Oil",
    name: { en: "Jojoba Oil", fr: "Huile de jojoba" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 2,
    description: {
      en: "Technically a liquid wax, not an oil. Closely mimics human sebum, making it one of the most skin-compatible plant oils. Balances oil production rather than clogging pores.",
      fr: "Techniquement une cire liquide, pas une huile. Imite etroitement le sebum humain, ce qui en fait l'une des huiles vegetales les plus compatibles avec la peau. Equilibre la production de sebum.",
    },
    benefits: { en: "Mimics sebum, balances oil production, non-irritating, versatile", fr: "Imite le sebum, equilibre la production d'huile, non irritant, polyvalent" },
    risks: { en: "Low comedogenic risk (2/5). Generally very well tolerated.", fr: "Faible risque comedogene (2/5). Generalement tres bien tolere." },
    concerns: ["dryness"],
    goodFor: ["dry", "normal", "combination"],
    badFor: [],
    euRestricted: false,
    casNumber: "61789-91-1",
    aliases: ["jojoba", "simmondsia chinensis"],
  },
  {
    id: "rosehip-oil",
    inciName: "Rosa Canina Seed Oil",
    name: { en: "Rosehip Seed Oil", fr: "Huile de rose musquee" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 1,
    description: {
      en: "A dry, lightweight facial oil rich in omega-3, omega-6, and vitamin A (retinoids). One of the few plant oils with clinical evidence for improving scars, hyperpigmentation, and skin elasticity.",
      fr: "Une huile faciale seche et legere riche en omega-3, omega-6 et vitamine A (retinoides). L'une des rares huiles vegetales avec des preuves cliniques pour ameliorer cicatrices, hyperpigmentation et elasticite.",
    },
    benefits: { en: "Natural retinoids, fades scars, improves elasticity, lightweight", fr: "Retinoides naturels, attenue les cicatrices, ameliore l'elasticite, legere" },
    risks: { en: "Very low comedogenic risk (1/5). Can oxidise if not stored properly.", fr: "Tres faible risque comedogene (1/5). Peut s'oxyder si mal conservee." },
    concerns: ["anti-aging", "hyperpigmentation", "dryness"],
    goodFor: ["dry", "normal", "combination", "sensitive"],
    badFor: [],
    euRestricted: false,
    casNumber: "84603-93-0",
    aliases: ["rosehip oil", "rosa mosqueta"],
  },
  {
    id: "argan-oil",
    inciName: "Argania Spinosa Kernel Oil",
    name: { en: "Argan Oil", fr: "Huile d'argan" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Moroccan argan oil, rich in vitamin E, oleic acid, and linoleic acid. Non-comedogenic despite being an oil. Nourishes without clogging pores. Also excellent for hair.",
      fr: "Huile d'argan marocaine, riche en vitamine E, acide oleique et acide linoleique. Non comedogene malgre son caractere huileux. Nourrit sans obstruer les pores. Excellente aussi pour les cheveux.",
    },
    benefits: { en: "Rich in vitamin E, non-comedogenic oil, nourishing, versatile", fr: "Riche en vitamine E, huile non comedogene, nourrissante, polyvalente" },
    risks: { en: "Very rare tree nut allergy. Otherwise extremely safe.", fr: "Tres rare allergie aux fruits a coque. Sinon extremement sure." },
    concerns: ["dryness", "anti-aging"],
    goodFor: ["dry", "normal", "sensitive"],
    badFor: [],
    euRestricted: false,
    casNumber: "223747-87-1",
    aliases: ["argania spinosa", "moroccan oil"],
  },
  {
    id: "tea-tree-oil",
    inciName: "Melaleuca Alternifolia Leaf Oil",
    name: { en: "Tea Tree Oil", fr: "Huile d'arbre a the" },
    category: "botanical",
    score: "B",
    color: "yellow",
    comedogenic: 1,
    description: {
      en: "An essential oil with proven antibacterial and anti-inflammatory properties. Clinical evidence supports 5% tea tree oil as effective against mild-moderate acne, comparable to benzoyl peroxide but slower.",
      fr: "Une huile essentielle aux proprietes antibacteriennes et anti-inflammatoires prouvees. Les preuves cliniques soutiennent l'huile d'arbre a the a 5% contre l'acne legere a moderee, comparable au peroxyde de benzoyle mais plus lent.",
    },
    benefits: { en: "Antibacterial, anti-acne (clinical evidence), anti-inflammatory", fr: "Antibacterien, anti-acne (preuves cliniques), anti-inflammatoire" },
    risks: { en: "Potent essential oil - can irritate at high concentrations. Always use diluted. Contact sensitiser for some.", fr: "Huile essentielle puissante - peut irriter a forte concentration. Toujours utiliser diluee. Sensibilisant de contact pour certains." },
    concerns: ["acne"],
    goodFor: ["oily", "combination"],
    badFor: ["sensitive", "dry"],
    euRestricted: false,
    casNumber: "68647-73-4",
    aliases: ["tea tree", "melaleuca"],
  },
  {
    id: "green-tea-extract",
    inciName: "Camellia Sinensis Leaf Extract",
    name: { en: "Green Tea Extract", fr: "Extrait de the vert" },
    category: "antioxidant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Rich in EGCG (epigallocatechin gallate), one of the most potent natural antioxidants. Anti-inflammatory, photoprotective, and sebum-reducing properties. Complements vitamin C and E.",
      fr: "Riche en EGCG (epigallocatechine gallate), l'un des antioxydants naturels les plus puissants. Proprietes anti-inflammatoires, photoprotectrices et sebo-regulatrices. Complementaire a la vitamine C et E.",
    },
    benefits: { en: "Powerful antioxidant (EGCG), anti-inflammatory, photoprotective, oil-reducing", fr: "Antioxydant puissant (EGCG), anti-inflammatoire, photoprotecteur, sebo-regulateur" },
    risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmetiques." },
    concerns: ["anti-aging", "oiliness"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "84650-60-2",
    aliases: ["camellia sinensis", "green tea", "egcg"],
  },
  {
    id: "snail-secretion-filtrate",
    inciName: "Snail Secretion Filtrate",
    name: { en: "Snail Mucin", fr: "Mucine d'escargot" },
    category: "hydrator",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Filtered secretion from Cryptomphalus aspersa snails, a K-beauty hero ingredient. Contains glycoproteins, hyaluronic acid, glycolic acid, and antimicrobial peptides. Deeply hydrating and wound-healing.",
      fr: "Secretion filtree d'escargots Cryptomphalus aspersa, ingredient star de la K-beauty. Contient glycoproteines, acide hyaluronique, acide glycolique et peptides antimicrobiens. Profondement hydratant et cicatrisant.",
    },
    benefits: { en: "Deep hydration, wound healing, contains natural HA + glycolic acid", fr: "Hydratation profonde, cicatrisation, contient HA naturel + acide glycolique" },
    risks: { en: "Not vegan. Limited standardisation (composition varies). Clinical evidence growing but less robust than established actives.", fr: "Non vegan. Standardisation limitee (composition variable). Preuves cliniques en croissance mais moins solides que les actifs etablis." },
    concerns: ["dryness", "anti-aging"],
    goodFor: ["dry", "normal", "combination", "sensitive"],
    badFor: [],
    euRestricted: false,
    aliases: ["snail mucin", "snail extract"],
  },
  {
    id: "ferulic-acid",
    inciName: "Ferulic Acid",
    name: { en: "Ferulic Acid", fr: "Acide ferulique" },
    category: "antioxidant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A plant-derived antioxidant that doubles the photoprotective power of vitamins C and E when combined. The third ingredient in the famous C+E+Ferulic combo (SkinCeuticals patent). Stabilises vitamin C.",
      fr: "Un antioxydant d'origine vegetale qui double le pouvoir photoprotecteur des vitamines C et E en combinaison. Le troisieme ingredient du celebre combo C+E+Ferulique (brevet SkinCeuticals). Stabilise la vitamine C.",
    },
    benefits: { en: "Doubles vitamin C+E photoprotection, stabilises vitamin C, antioxidant", fr: "Double la photoprotection vitamine C+E, stabilise la vitamine C, antioxydant" },
    risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmetiques." },
    concerns: ["anti-aging"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "1135-24-6",
  },
  {
    id: "madecassoside",
    inciName: "Madecassoside",
    name: { en: "Madecassoside", fr: "Madecassoside" },
    category: "soothing",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most active compound from centella asiatica. Potent anti-inflammatory and wound-healing molecule. The key ingredient in La Roche-Posay Cicaplast. Stimulates collagen synthesis.",
      fr: "Le compose le plus actif de la centella asiatica. Molecule anti-inflammatoire et cicatrisante puissante. L'ingredient cle du Cicaplast La Roche-Posay. Stimule la synthese de collagene.",
    },
    benefits: { en: "Powerful wound healing, anti-inflammatory, collagen stimulation, soothes", fr: "Cicatrisation puissante, anti-inflammatoire, stimulation du collagene, apaise" },
    risks: { en: "None. Extremely safe.", fr: "Aucun. Extremement sur." },
    concerns: ["sensitivity", "rosacea", "anti-aging"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "34540-22-2",
    aliases: ["centella asiatica active", "cica active"],
  },
  {
    id: "kojic-acid",
    inciName: "Kojic Acid",
    name: { en: "Kojic Acid", fr: "Acide kojique" },
    category: "active",
    score: "B",
    color: "yellow",
    comedogenic: 0,
    description: {
      en: "A tyrosinase inhibitor derived from fungi, used to brighten skin and fade dark spots. Effective but can be irritating and unstable. Often combined with other brighteners for better results.",
      fr: "Un inhibiteur de la tyrosinase derive de champignons, utilise pour eclaircir la peau et attenues les taches. Efficace mais peut etre irritant et instable. Souvent combine a d'autres eclaircissants.",
    },
    benefits: { en: "Brightens, fades dark spots, inhibits melanin production", fr: "Eclaircit, attenue les taches, inhibe la production de melanine" },
    risks: { en: "Can cause contact dermatitis in sensitive individuals. Unstable (oxidises). May cause redness.", fr: "Peut causer une dermatite de contact chez les individus sensibles. Instable (s'oxyde). Peut causer des rougeurs." },
    concerns: ["hyperpigmentation"],
    goodFor: ["normal", "oily", "combination"],
    badFor: ["sensitive"],
    euRestricted: false,
    casNumber: "501-30-4",
  },
  {
    id: "zinc-pca",
    inciName: "Zinc PCA",
    name: { en: "Zinc PCA", fr: "PCA de zinc" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Zinc salt of pyrrolidone carboxylic acid. Controls sebum production, has antimicrobial properties, and supports wound healing. A key ingredient in anti-acne formulations alongside niacinamide.",
      fr: "Sel de zinc de l'acide pyrrolidone carboxylique. Controle la production de sebum, possede des proprietes antimicrobiennes et soutient la cicatrisation. Ingredient cle des formulations anti-acne.",
    },
    benefits: { en: "Controls sebum, antimicrobial, wound healing, anti-inflammatory", fr: "Controle le sebum, antimicrobien, cicatrisant, anti-inflammatoire" },
    risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmetiques." },
    concerns: ["acne", "oiliness", "pores"],
    goodFor: ["oily", "combination"],
    badFor: [],
    euRestricted: false,
    casNumber: "15454-75-8",
    aliases: ["zinc pyrrolidone carboxylate"],
  },
  {
    id: "propylene-glycol",
    inciName: "Propylene Glycol",
    name: { en: "Propylene Glycol", fr: "Propylene glycol" },
    category: "humectant",
    score: "C",
    color: "yellow",
    comedogenic: 0,
    description: {
      en: "A synthetic humectant and penetration enhancer. Effective but can irritate sensitive skin. Being replaced by propanediol (plant-derived alternative) in many modern formulations.",
      fr: "Un humectant synthetique et amplificateur de penetration. Efficace mais peut irriter les peaux sensibles. Remplace par le propanediol (alternative vegetale) dans de nombreuses formulations modernes.",
    },
    benefits: { en: "Humectant, penetration enhancer, preservative booster", fr: "Humectant, amplificateur de penetration, amplificateur de conservation" },
    risks: { en: "Can irritate sensitive skin. Mild allergen for some (rare). Being phased out in favour of propanediol.", fr: "Peut irriter les peaux sensibles. Allergene leger pour certains (rare). Progressivement remplace par le propanediol." },
    concerns: [],
    goodFor: ["normal", "oily", "combination"],
    badFor: ["sensitive"],
    euRestricted: false,
    casNumber: "57-55-6",
  },
  {
    id: "mineral-oil",
    inciName: "Paraffinum Liquidum",
    name: { en: "Mineral Oil", fr: "Huile minerale" },
    category: "emollient",
    score: "C",
    color: "yellow",
    comedogenic: 2,
    description: {
      en: "A petroleum-derived occlusive emollient. Very effective at preventing moisture loss. Cosmetic-grade mineral oil is highly purified and safe, but perception has shifted against it.",
      fr: "Un emollient occlusif derive du petrole. Tres efficace pour prevenir la perte en eau. L'huile minerale cosmetique est hautement purifiee et sure, mais la perception a evolue contre.",
    },
    benefits: { en: "Highly effective occlusive, prevents TEWL, inexpensive, inert", fr: "Occlusif tres efficace, previent la perte en eau, peu couteux, inerte" },
    risks: { en: "Can clog pores for some (2/5). Environmental/perception concern. Does not provide nutrients.", fr: "Peut obstruer les pores chez certains (2/5). Preoccupation environnementale/perception. N'apporte aucun nutriment." },
    concerns: ["dryness"],
    goodFor: ["dry"],
    badFor: ["oily"],
    euRestricted: false,
    casNumber: "8042-47-5",
    aliases: ["paraffinum liquidum", "liquid paraffin", "white mineral oil"],
  },

  // ===========================
  // BATCH 3: 100 common INCI ingredients (filling gaps)
  // ===========================
  { id: "cetyl-alcohol", inciName: "Cetyl Alcohol", name: { en: "Cetyl Alcohol", fr: "Alcool cetylique" }, category: "emollient", score: "B", color: "green", comedogenic: 2, description: { en: "A fatty alcohol that acts as an emollient and thickener. Not a drying alcohol. Gives products a smooth, creamy texture.", fr: "Un alcool gras qui agit comme emollient et epaississant. Pas un alcool dessechant. Donne une texture lisse et cremeuse." }, benefits: { en: "Emollient, thickener, smooth texture", fr: "Emollient, epaississant, texture lisse" }, risks: { en: "Mildly comedogenic (2/5). Can worsen fungal acne.", fr: "Legerement comedogene (2/5). Peut aggraver l'acne fongique." }, concerns: [], goodFor: ["dry", "normal"], badFor: [], euRestricted: false, casNumber: "36653-82-4" },
  { id: "stearic-acid", inciName: "Stearic Acid", name: { en: "Stearic Acid", fr: "Acide stearique" }, category: "emollient", score: "B", color: "green", comedogenic: 2, description: { en: "A saturated fatty acid used as an emulsifier, thickener, and cleansing agent. Found naturally in cocoa butter and shea butter.", fr: "Un acide gras sature utilise comme emulsifiant, epaississant et agent nettoyant. Present naturellement dans le beurre de cacao et le karite." }, benefits: { en: "Emulsifier, thickener, cleansing", fr: "Emulsifiant, epaississant, nettoyant" }, risks: { en: "Mildly comedogenic (2/5).", fr: "Legerement comedogene (2/5)." }, concerns: [], goodFor: ["dry", "normal"], badFor: [], euRestricted: false, casNumber: "57-11-4" },
  { id: "polysorbate-20", inciName: "Polysorbate 20", name: { en: "Polysorbate 20", fr: "Polysorbate 20" }, category: "emulsifier", score: "B", color: "green", comedogenic: 0, description: { en: "A mild non-ionic surfactant and emulsifier derived from sorbitol and lauric acid. Helps oil and water mix in formulations.", fr: "Un tensioactif et emulsifiant doux non ionique derive du sorbitol et de l'acide laurique. Aide a melanger huile et eau." }, benefits: { en: "Gentle emulsifier, solubiliser", fr: "Emulsifiant doux, solubilisant" }, risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmetiques." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "9005-64-5" },
  { id: "sodium-hyaluronate", inciName: "Sodium Hyaluronate", name: { en: "Sodium Hyaluronate", fr: "Hyaluronate de sodium" }, category: "humectant", score: "A", color: "green", comedogenic: 0, description: { en: "The sodium salt form of hyaluronic acid. Smaller molecular weight allows deeper penetration into the skin. Same hydrating benefits as HA.", fr: "La forme sel de sodium de l'acide hyaluronique. Poids moleculaire plus petit permettant une penetration plus profonde. Memes benefices hydratants." }, benefits: { en: "Deep hydration, plumps skin, smaller molecule penetrates better", fr: "Hydratation profonde, repulpe la peau, molecule plus petite penetre mieux" }, risks: { en: "Same as hyaluronic acid. Seal with moisturiser.", fr: "Memes que l'acide hyaluronique. Sceller avec un hydratant." }, concerns: ["dryness", "anti-aging"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "9067-32-7", aliases: ["ha", "sodium hyaluronate crosspolymer"] },
  { id: "cholesterol", inciName: "Cholesterol", name: { en: "Cholesterol", fr: "Cholesterol" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "A lipid naturally found in the skin barrier. Works with ceramides and fatty acids to repair and maintain the barrier. Essential for healthy skin.", fr: "Un lipide naturellement present dans la barriere cutanee. Fonctionne avec les ceramides et acides gras pour reparer la barriere. Essentiel pour une peau saine." }, benefits: { en: "Barrier repair, works with ceramides, skin-identical lipid", fr: "Reparation barriere, synergie avec ceramides, lipide identique a la peau" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "57-88-5" },
  { id: "phytosphingosine", inciName: "Phytosphingosine", name: { en: "Phytosphingosine", fr: "Phytosphingosine" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "A ceramide precursor naturally found in the skin. Anti-inflammatory and antimicrobial. Part of the CeraVe ceramide complex.", fr: "Un precurseur de ceramides naturellement present dans la peau. Anti-inflammatoire et antimicrobien. Fait partie du complexe ceramides CeraVe." }, benefits: { en: "Ceramide precursor, anti-inflammatory, antimicrobial, barrier repair", fr: "Precurseur de ceramides, anti-inflammatoire, antimicrobien, reparation barriere" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["sensitivity", "dryness"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "554-62-1" },
  { id: "cera-alba", inciName: "Cera Alba", name: { en: "Beeswax", fr: "Cire d'abeille" }, category: "emollient", score: "B", color: "green", comedogenic: 2, description: { en: "Natural wax produced by honey bees. Creates a protective, occlusive barrier on skin. Used in balms and rich creams.", fr: "Cire naturelle produite par les abeilles. Cree une barriere protectrice et occlusive. Utilisee dans les baumes et cremes riches." }, benefits: { en: "Protective barrier, natural occlusive, texture builder", fr: "Barriere protectrice, occlusif naturel, constructeur de texture" }, risks: { en: "Comedogenic (2/5). Not vegan. Rare contact allergy.", fr: "Comedogene (2/5). Non vegan. Rare allergie de contact." }, concerns: ["dryness"], goodFor: ["dry"], badFor: ["oily"], euRestricted: false, casNumber: "8012-89-3", aliases: ["beeswax"] },
  { id: "titanium-dioxide", inciName: "Titanium Dioxide", name: { en: "Titanium Dioxide", fr: "Dioxyde de titane" }, category: "sunscreen", score: "A", color: "green", comedogenic: 0, description: { en: "Mineral UV filter that primarily blocks UVB rays. Physical sunscreen that sits on skin surface. Often combined with zinc oxide for broad-spectrum protection.", fr: "Filtre UV mineral qui bloque principalement les UVB. Protection solaire physique qui reste en surface. Souvent combine a l'oxyde de zinc pour une protection large spectre." }, benefits: { en: "Physical UV protection, non-irritating, photostable", fr: "Protection UV physique, non irritant, photostable" }, risks: { en: "White cast on dark skin. Nano form raises inhalation concerns in sprays.", fr: "Trace blanche sur peaux foncees. La forme nano pose des questions en spray." }, concerns: ["sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "13463-67-7" },
  { id: "adenosine", inciName: "Adenosine", name: { en: "Adenosine", fr: "Adenosine" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "A naturally occurring nucleoside with proven anti-wrinkle properties. Stimulates collagen production and relaxes wrinkles. Very popular in K-beauty.", fr: "Un nucleoside naturel aux proprietes anti-rides prouvees. Stimule la production de collagene et detend les rides. Tres populaire en K-beauty." }, benefits: { en: "Anti-wrinkle, collagen stimulation, wound healing, anti-inflammatory", fr: "Anti-rides, stimulation collagene, cicatrisation, anti-inflammatoire" }, risks: { en: "None. Very well tolerated.", fr: "Aucun. Tres bien tolere." }, concerns: ["anti-aging"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "58-61-7" },
  { id: "ascorbyl-glucoside", inciName: "Ascorbyl Glucoside", name: { en: "Ascorbyl Glucoside", fr: "Ascorbyl glucoside" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "A stable vitamin C derivative that converts to ascorbic acid in the skin. Less potent than L-ascorbic acid but much more stable and less irritating.", fr: "Un derive stable de la vitamine C qui se convertit en acide ascorbique dans la peau. Moins puissant que l'acide L-ascorbique mais beaucoup plus stable et moins irritant." }, benefits: { en: "Stable vitamin C, brightening, antioxidant, less irritating", fr: "Vitamine C stable, eclat, antioxydant, moins irritant" }, risks: { en: "Less potent than pure vitamin C. Results take longer.", fr: "Moins puissant que la vitamine C pure. Resultats plus lents." }, concerns: ["anti-aging", "hyperpigmentation"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "129499-78-1" },
  { id: "bisabolol", inciName: "Bisabolol", name: { en: "Bisabolol (Alpha-Bisabolol)", fr: "Bisabolol (Alpha-Bisabolol)" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "A terpenoid derived from chamomile. Potent anti-inflammatory and skin-soothing agent. Also enhances penetration of other active ingredients.", fr: "Un terpenoide derive de la camomille. Puissant agent anti-inflammatoire et apaisant. Ameliore aussi la penetration d'autres actifs." }, benefits: { en: "Anti-inflammatory, soothing, enhances penetration, antioxidant", fr: "Anti-inflammatoire, apaisant, ameliore la penetration, antioxydant" }, risks: { en: "None. Very well tolerated, even on sensitive skin.", fr: "Aucun. Tres bien tolere, meme sur peau sensible." }, concerns: ["sensitivity", "rosacea"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "515-69-5", aliases: ["alpha-bisabolol", "levomenol"] },
  { id: "sucralfate", inciName: "Sucralfate", name: { en: "Sucralfate", fr: "Sucralfate" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "Originally a stomach ulcer medication, repurposed for skin repair. Creates a protective film that promotes wound healing. Key ingredient in Avene Cicalfate.", fr: "A l'origine un medicament anti-ulcere gastrique, reconverti pour la reparation cutanee. Cree un film protecteur favorisant la cicatrisation. Ingredient cle du Cicalfate Avene." }, benefits: { en: "Wound healing, protective film, anti-inflammatory", fr: "Cicatrisation, film protecteur, anti-inflammatoire" }, risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmetiques." }, concerns: ["sensitivity"], goodFor: ["sensitive", "dry", "normal"], badFor: [], euRestricted: false, casNumber: "54182-58-0" },
  { id: "glyceryl-stearate", inciName: "Glyceryl Stearate", name: { en: "Glyceryl Stearate", fr: "Stearate de glyceryle" }, category: "emulsifier", score: "B", color: "green", comedogenic: 1, description: { en: "One of the most common emulsifiers in skincare. Helps oil and water phases stay mixed. Also acts as a mild emollient.", fr: "L'un des emulsifiants les plus courants en skincare. Aide les phases huile et eau a rester melangees. Agit aussi comme emollient doux." }, benefits: { en: "Emulsifier, mild emollient, stabiliser", fr: "Emulsifiant, emollient doux, stabilisant" }, risks: { en: "Very low comedogenic risk (1/5). Safe for most.", fr: "Tres faible risque comedogene (1/5). Sur pour la plupart." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "31566-31-1" },
  { id: "isopropyl-myristate", inciName: "Isopropyl Myristate", name: { en: "Isopropyl Myristate", fr: "Myristate d'isopropyle" }, category: "emollient", score: "D", color: "orange", comedogenic: 5, description: { en: "An emollient and penetration enhancer with the highest comedogenic rating (5/5). Makes products feel smooth and non-greasy but is a major pore-clogging risk.", fr: "Un emollient et amplificateur de penetration avec la note comedogene la plus elevee (5/5). Rend les produits lisses et non gras mais risque majeur d'obstruction des pores." }, benefits: { en: "Smooth texture, fast absorption, penetration enhancer", fr: "Texture lisse, absorption rapide, amplificateur de penetration" }, risks: { en: "Highest comedogenic rating (5/5). Major breakout risk. Avoid if acne-prone.", fr: "Note comedogene maximale (5/5). Risque majeur de boutons. Eviter si peau acneique." }, concerns: [], goodFor: [], badFor: ["oily", "combination"], euRestricted: false, casNumber: "110-27-0" },
  { id: "pentylene-glycol", inciName: "Pentylene Glycol", name: { en: "Pentylene Glycol", fr: "Pentylene glycol" }, category: "humectant", score: "A", color: "green", comedogenic: 0, description: { en: "A plant-derived humectant with antimicrobial properties. Also acts as a preservative booster, allowing lower concentrations of traditional preservatives.", fr: "Un humectant d'origine vegetale aux proprietes antimicrobiennes. Agit aussi comme amplificateur de conservation, permettant de reduire les conservateurs traditionnels." }, benefits: { en: "Humectant, antimicrobial, preservative booster, plant-derived", fr: "Humectant, antimicrobien, amplificateur de conservation, d'origine vegetale" }, risks: { en: "None. Very well tolerated.", fr: "Aucun. Tres bien tolere." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "5343-92-0" },
  { id: "nylon-12", inciName: "Nylon-12", name: { en: "Nylon-12", fr: "Nylon-12" }, category: "thickener", score: "C", color: "yellow", comedogenic: 0, description: { en: "A synthetic polymer used for mattifying and oil-absorbing properties. Creates a soft-focus, blurred effect on skin. Environmental concern as a microplastic.", fr: "Un polymere synthetique utilise pour ses proprietes matifiantes et absorbantes. Cree un effet flou et soft-focus sur la peau. Preoccupation environnementale comme microplastique." }, benefits: { en: "Mattifying, oil-absorbing, soft-focus effect", fr: "Matifiant, absorbant le sebum, effet soft-focus" }, risks: { en: "Microplastic (environmental concern). Not biodegradable.", fr: "Microplastique (preoccupation environnementale). Non biodegradable." }, concerns: ["oiliness"], goodFor: ["oily"], badFor: [], euRestricted: false, casNumber: "25038-74-8" },
  { id: "colloidal-oatmeal", inciName: "Avena Sativa Kernel Flour", name: { en: "Colloidal Oatmeal", fr: "Avoine colloidale" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "Finely ground oats with FDA-approved skin protectant status. Clinically proven to relieve itching, inflammation, and dryness. A cornerstone of eczema treatment.", fr: "Flocons d'avoine finement moulus avec statut de protecteur cutane approuve par la FDA. Cliniquement prouve pour soulager demangeaisons, inflammation et secheresse. Pilier du traitement de l'eczema." }, benefits: { en: "FDA-approved skin protectant, relieves itching, anti-inflammatory, moisturising", fr: "Protecteur cutane approuve FDA, soulage les demangeaisons, anti-inflammatoire, hydratant" }, risks: { en: "Rare oat allergy. Otherwise extremely safe.", fr: "Rare allergie a l'avoine. Sinon extremement sur." }, concerns: ["sensitivity", "dryness"], goodFor: ["dry", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "131470-90-5", aliases: ["avena sativa", "oat extract"] },
  { id: "cocamidopropyl-betaine", inciName: "Cocamidopropyl Betaine", name: { en: "Cocamidopropyl Betaine", fr: "Cocamidopropyl betaine" }, category: "surfactant", score: "B", color: "green", comedogenic: 0, description: { en: "A mild amphoteric surfactant derived from coconut oil. Much gentler than SLS. Commonly used in 'gentle' and 'sensitive skin' cleansers.", fr: "Un tensioactif amphotere doux derive de l'huile de coco. Beaucoup plus doux que le SLS. Couramment utilise dans les nettoyants 'doux' et 'peaux sensibles'." }, benefits: { en: "Gentle cleansing, mild foam, coconut-derived", fr: "Nettoyage doux, mousse legere, derive de coco" }, risks: { en: "Rare contact allergy (ACDS Allergen of the Year 2004). Generally very safe.", fr: "Rare allergie de contact (allergene de l'annee ACDS 2004). Generalement tres sur." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "61789-40-0" },
  { id: "sodium-lauroyl-sarcosinate", inciName: "Sodium Lauroyl Sarcosinate", name: { en: "Sodium Lauroyl Sarcosinate", fr: "Lauroyl sarcosinate de sodium" }, category: "surfactant", score: "A", color: "green", comedogenic: 0, description: { en: "One of the gentlest surfactants available. Amino acid-derived, does not strip the skin barrier. Used in CeraVe and other dermatologist-recommended cleansers.", fr: "L'un des tensioactifs les plus doux disponibles. Derive d'acide amine, n'altere pas la barriere cutanee. Utilise dans CeraVe et autres nettoyants recommandes par les dermatologues." }, benefits: { en: "Ultra-gentle cleansing, amino acid-derived, preserves barrier", fr: "Nettoyage ultra-doux, derive d'acide amine, preserve la barriere" }, risks: { en: "None. One of the safest surfactants.", fr: "Aucun. L'un des tensioactifs les plus surs." }, concerns: ["sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "137-16-6" },
  { id: "gluconolactone", inciName: "Gluconolactone", name: { en: "Gluconolactone (PHA)", fr: "Gluconolactone (PHA)" }, category: "exfoliant", score: "A", color: "green", comedogenic: 0, description: { en: "A polyhydroxy acid (PHA) that exfoliates more gently than AHAs. Larger molecule size means slower penetration and less irritation. Also a humectant and antioxidant.", fr: "Un acide polyhydroxyle (PHA) qui exfolie plus doucement que les AHA. Plus grosse molecule = penetration plus lente et moins d'irritation. Aussi humectant et antioxydant." }, benefits: { en: "Gentle exfoliation (no sun sensitivity), humectant, antioxidant", fr: "Exfoliation douce (pas de photosensibilite), humectant, antioxydant" }, risks: { en: "Very gentle. May tingle at high concentrations.", fr: "Tres doux. Peut picoter a forte concentration." }, concerns: ["acne", "anti-aging", "pores"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "90-80-2", aliases: ["pha", "polyhydroxy acid"] },
  { id: "mandelic-acid", inciName: "Mandelic Acid", name: { en: "Mandelic Acid", fr: "Acide mandélique" }, category: "exfoliant", score: "A", color: "green", comedogenic: 0, description: { en: "An AHA derived from bitter almonds with a larger molecular size than glycolic acid. Gentler exfoliation, also has antibacterial and melanin-inhibiting properties. Great for dark skin tones.", fr: "Un AHA dérivé des amandes amères avec une taille moléculaire plus grande que l'acide glycolique. Exfoliation plus douce, propriétés antibactériennes et anti-mélanine. Excellent pour les peaux foncées." }, benefits: { en: "Gentle AHA, antibacterial, safe for dark skin, fades hyperpigmentation", fr: "AHA doux, antibactérien, sûr pour peaux foncées, atténue l'hyperpigmentation" }, risks: { en: "Increases sun sensitivity (less than glycolic). SPF recommended.", fr: "Augmente la photosensibilité (moins que le glycolique). SPF recommandé." }, concerns: ["acne", "hyperpigmentation"], goodFor: ["oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "90-64-2" },
  { id: "benzoyl-peroxide", inciName: "Benzoyl Peroxide", name: { en: "Benzoyl Peroxide", fr: "Peroxyde de benzoyle" }, category: "active", score: "B", color: "yellow", comedogenic: 0, description: { en: "The most effective OTC anti-acne ingredient. Kills acne-causing bacteria (C. acnes) on contact. Available at 2.5%, 5%, and 10%. Evidence shows 2.5% is as effective as 10% with less irritation.", fr: "L'ingredient anti-acné OTC le plus efficace. Tue les bactéries responsables de l'acné (C. acnes) au contact. Disponible à 2,5%, 5% et 10%. Les preuves montrent que 2,5% est aussi efficace que 10% avec moins d'irritation." }, benefits: { en: "Kills acne bacteria, reduces inflammation, prevents resistance", fr: "Tue les bactéries acnéiques, réduit l'inflammation, prévient la résistance" }, risks: { en: "Drying, can bleach fabrics and hair. Start at 2.5%. Contact sensitizer for some.", fr: "Desséchant, peut décolorer tissus et cheveux. Commencer à 2,5%. Sensibilisant de contact pour certains." }, concerns: ["acne"], goodFor: ["oily", "combination"], badFor: ["dry", "sensitive"], euRestricted: true, casNumber: "94-36-0", aliases: ["bpo"] },
  { id: "petrolatum", inciName: "Petrolatum", name: { en: "Petrolatum (Vaseline)", fr: "Vaseline (Petrolatum)" }, category: "emollient", score: "B", color: "green", comedogenic: 0, description: { en: "The most effective occlusive available, reducing transepidermal water loss by 99%. Cosmetic-grade petrolatum is highly refined and non-comedogenic despite myths.", fr: "L'occlusif le plus efficace disponible, réduisant la perte en eau transépidermique de 99%. La vaseline cosmétique est hautement raffinée et non comédogène malgré les mythes." }, benefits: { en: "Most effective occlusive (99% TEWL reduction), safe, non-comedogenic", fr: "Occlusif le plus efficace (99% réduction TEWL), sûr, non comédogène" }, risks: { en: "Perception issue. Some prefer plant-based alternatives. Can feel heavy.", fr: "Problème de perception. Certains préfèrent les alternatives végétales. Peut paraître lourd." }, concerns: ["dryness"], goodFor: ["dry", "sensitive"], badFor: [], euRestricted: false, casNumber: "8009-03-8", aliases: ["vaseline", "petroleum jelly"] },
  // ===========================
  // BATCH 4: More ingredients (surfactants, preservatives, actives, oils)
  // ===========================
  { id: "adapalene", inciName: "Adapalene", name: { en: "Adapalene", fr: "Adapalene" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "A third-generation retinoid available OTC (Differin). More stable and less irritating than retinol while being more effective for acne. First-line treatment for comedonal acne.", fr: "Un retinoide de 3e generation disponible sans ordonnance (Differin). Plus stable et moins irritant que le retinol tout en etant plus efficace contre l'acne. Traitement de premiere intention pour l'acne comedonnale." }, benefits: { en: "Gold standard for acne (comedonal), less irritating than retinol, photostable", fr: "Reference pour l'acne comedonnale, moins irritant que le retinol, photostable" }, risks: { en: "Drying, peeling in first weeks. Not for use during pregnancy.", fr: "Dessechant, desquamation les premieres semaines. Pas pendant la grossesse." }, concerns: ["acne"], goodFor: ["oily", "combination", "normal"], badFor: ["dry", "sensitive"], euRestricted: true, casNumber: "106685-40-9" },
  { id: "tretinoin", inciName: "Tretinoin", name: { en: "Tretinoin", fr: "Tretinoine" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "Prescription-strength retinoid (Retin-A). The most potent and most studied anti-aging and anti-acne ingredient. Directly activates retinoic acid receptors without conversion.", fr: "Retinoide sur ordonnance (Retin-A). L'ingredient anti-age et anti-acne le plus puissant et le plus etudie. Active directement les recepteurs de l'acide retinoique sans conversion." }, benefits: { en: "Most potent retinoid, decades of clinical evidence, anti-aging + anti-acne", fr: "Retinoide le plus puissant, decennies de preuves cliniques, anti-age + anti-acne" }, risks: { en: "Prescription only. Significant irritation, peeling, sun sensitivity. Not for pregnancy.", fr: "Sur ordonnance uniquement. Irritation significative, desquamation, photosensibilite. Pas pendant la grossesse." }, concerns: ["anti-aging", "acne", "hyperpigmentation"], goodFor: ["normal", "oily"], badFor: ["sensitive", "dry"], euRestricted: true, casNumber: "302-79-4", aliases: ["retin-a", "retinoic acid"] },
  { id: "hydroquinone", inciName: "Hydroquinone", name: { en: "Hydroquinone", fr: "Hydroquinone" }, category: "active", score: "E", color: "red", comedogenic: 0, description: { en: "The most effective depigmenting agent known, but banned in EU cosmetics due to cytotoxicity and safety concerns. Only available by prescription in most countries.", fr: "L'agent depigmentant le plus efficace connu, mais interdit en cosmetique UE en raison de sa cytotoxicite. Disponible uniquement sur ordonnance dans la plupart des pays." }, benefits: { en: "Most effective skin lightener (prescription)", fr: "Eclaircissant cutane le plus efficace (ordonnance)" }, risks: { en: "EU-banned in cosmetics. Cytotoxic. Can cause ochronosis (paradoxical darkening) with prolonged use.", fr: "Interdit en cosmetique UE. Cytotoxique. Peut causer l'ochronose (assombrissement paradoxal) avec usage prolonge." }, concerns: ["hyperpigmentation"], goodFor: [], badFor: ["dry", "oily", "combination", "sensitive", "normal"], euRestricted: true, casNumber: "123-31-9" },
  { id: "sodium-laureth-sulfate", inciName: "Sodium Laureth Sulfate", name: { en: "Sodium Laureth Sulfate (SLES)", fr: "Laureth sulfate de sodium (SLES)" }, category: "surfactant", score: "C", color: "yellow", comedogenic: 0, description: { en: "A milder cousin of SLS (ethoxylated version). Still a relatively harsh surfactant but less irritating than SLS. Very common in cleansers and shampoos.", fr: "Un cousin plus doux du SLS (version ethoxilee). Toujours un tensioactif relativement agressif mais moins irritant que le SLS. Tres courant dans nettoyants et shampoings." }, benefits: { en: "Effective cleansing, good foam, less harsh than SLS", fr: "Nettoyage efficace, bonne mousse, moins agressif que le SLS" }, risks: { en: "Can still irritate sensitive skin. Milder than SLS but not as gentle as glucosides.", fr: "Peut encore irriter les peaux sensibles. Plus doux que le SLS mais pas aussi doux que les glucosides." }, concerns: [], goodFor: ["oily", "normal"], badFor: ["sensitive", "dry"], euRestricted: false, casNumber: "9004-82-4", aliases: ["sles"] },
  { id: "polyethylene", inciName: "Polyethylene", name: { en: "Polyethylene", fr: "Polyethylene" }, category: "thickener", score: "D", color: "orange", comedogenic: 0, description: { en: "A synthetic plastic polymer. Used as a binder, film-former, or in scrubs as microbeads (now banned in many countries). Major environmental concern as a microplastic.", fr: "Un polymere plastique synthetique. Utilise comme liant, filmogene ou en microbilles dans les gommages (desormais interdits dans de nombreux pays). Preoccupation environnementale majeure comme microplastique." }, benefits: { en: "Texture agent, film-former, binder", fr: "Agent de texture, filmogene, liant" }, risks: { en: "Microplastic (environmental pollution). Microbeads banned in EU, US, UK. Non-biodegradable.", fr: "Microplastique (pollution). Microbilles interdites en UE, US, UK. Non biodegradable." }, concerns: [], goodFor: [], badFor: [], euRestricted: true, casNumber: "9002-88-4", aliases: ["microplastic", "microbeads"] },
  { id: "avobenzone", inciName: "Avobenzone", name: { en: "Avobenzone", fr: "Avobenzone" }, category: "sunscreen", score: "B", color: "yellow", comedogenic: 0, description: { en: "A chemical UVA filter widely used in US sunscreens. Provides broad-spectrum protection but is photo-unstable (degrades in sunlight) and needs stabilisers like octocrylene.", fr: "Un filtre UVA chimique largement utilise dans les cremes solaires US. Protection large spectre mais photo-instable (se degrade au soleil) et necessite des stabilisants comme l'octocrylene." }, benefits: { en: "Broad UVA protection, lightweight, cosmetically elegant", fr: "Protection UVA large spectre, leger, cosmetiquement elegant" }, risks: { en: "Photo-unstable (needs stabilisers). Potential endocrine disruptor (debated). Can stain clothes.", fr: "Photo-instable (necessite stabilisants). Potentiel perturbateur endocrinien (debattu). Peut tacher les vetements." }, concerns: [], goodFor: ["normal", "oily", "combination"], badFor: ["sensitive"], euRestricted: false, casNumber: "70356-09-1", aliases: ["butyl methoxydibenzoylmethane", "parsol 1789"] },
  { id: "homosalate", inciName: "Homosalate", name: { en: "Homosalate", fr: "Homosalate" }, category: "sunscreen", score: "C", color: "yellow", comedogenic: 0, description: { en: "A chemical UVB filter commonly used in US sunscreens. SCCS has recommended restricting to max 1.4% due to endocrine disruption concerns (EU considering restriction).", fr: "Un filtre UVB chimique courant dans les cremes solaires US. Le SCCS recommande de restreindre a max 1,4% en raison de preoccupations de perturbation endocrinienne (restriction UE en cours)." }, benefits: { en: "UVB protection, lightweight, good solvent for other filters", fr: "Protection UVB, leger, bon solvant pour d'autres filtres" }, risks: { en: "SCCS recommends max 1.4% (endocrine disruptor concern). EU restriction pending.", fr: "Le SCCS recommande max 1,4% (preoccupation perturbateur endocrinien). Restriction UE en attente." }, concerns: [], goodFor: ["normal", "oily"], badFor: ["sensitive"], euRestricted: true, casNumber: "118-56-9" },
  { id: "octocrylene", inciName: "Octocrylene", name: { en: "Octocrylene", fr: "Octocrylene" }, category: "sunscreen", score: "C", color: "yellow", comedogenic: 0, description: { en: "A chemical UV filter that stabilises avobenzone. Generates benzophenone (a suspected endocrine disruptor) upon degradation. Common in US and EU sunscreens.", fr: "Un filtre UV chimique qui stabilise l'avobenzone. Genere de la benzophenone (perturbateur endocrinien suspecte) en se degradant. Courant dans les cremes solaires US et UE." }, benefits: { en: "UVB protection, stabilises avobenzone, photostable", fr: "Protection UVB, stabilise l'avobenzone, photostable" }, risks: { en: "Generates benzophenone upon aging. Suspected endocrine disruptor. Coral reef concern.", fr: "Genere de la benzophenone en vieillissant. Perturbateur endocrinien suspecte. Preoccupation recifs coralliens." }, concerns: [], goodFor: ["normal", "oily"], badFor: ["sensitive"], euRestricted: false, casNumber: "6197-30-4" },
  { id: "ceramide-ap", inciName: "Ceramide AP", name: { en: "Ceramide AP", fr: "Ceramide AP" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "One of three essential ceramides in the skin barrier (with NP and EOP). Helps maintain the lipid matrix between skin cells. Part of the CeraVe triple ceramide complex.", fr: "L'un des trois ceramides essentiels de la barriere cutanee (avec NP et EOP). Maintient la matrice lipidique entre les cellules. Fait partie du triple complexe ceramides CeraVe." }, benefits: { en: "Barrier repair, moisture retention, works with NP and EOP", fr: "Reparation barriere, retention d'eau, fonctionne avec NP et EOP" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "100403-19-8" },
  { id: "ceramide-eop", inciName: "Ceramide EOP", name: { en: "Ceramide EOP", fr: "Ceramide EOP" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "The third essential ceramide in the skin barrier trio. Works synergistically with ceramides NP and AP. Critical for maintaining the waterproof barrier function.", fr: "Le troisieme ceramide essentiel du trio de la barriere cutanee. Fonctionne en synergie avec les ceramides NP et AP. Critique pour maintenir la fonction barriere impermeabilisante." }, benefits: { en: "Barrier repair, waterproof barrier, synergy with NP/AP", fr: "Reparation barriere, barriere impermeabilisante, synergie avec NP/AP" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false },
  { id: "beta-glucan", inciName: "Beta-Glucan", name: { en: "Beta-Glucan", fr: "Beta-glucane" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "A polysaccharide with potent wound-healing and immune-boosting properties. Deeply hydrating, soothing, and anti-aging. Some studies show efficacy comparable to hyaluronic acid for hydration.", fr: "Un polysaccharide aux proprietes cicatrisantes et immuno-stimulantes puissantes. Profondement hydratant, apaisant et anti-age. Certaines etudes montrent une efficacite comparable a l'acide hyaluronique pour l'hydratation." }, benefits: { en: "Wound healing, hydrating (comparable to HA), anti-inflammatory, immune support", fr: "Cicatrisant, hydratant (comparable a l'HA), anti-inflammatoire, soutien immunitaire" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity", "anti-aging"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "9041-22-9" },
  { id: "propolis-extract", inciName: "Propolis Extract", name: { en: "Propolis Extract", fr: "Extrait de propolis" }, category: "botanical", score: "A", color: "green", comedogenic: 0, description: { en: "A resinous substance collected by bees with powerful antimicrobial, anti-inflammatory, and antioxidant properties. A K-beauty staple ingredient for acne-prone and sensitive skin.", fr: "Substance resineuse collectee par les abeilles aux proprietes antimicrobiennes, anti-inflammatoires et antioxydantes puissantes. Ingredient star de la K-beauty pour peaux acneiques et sensibles." }, benefits: { en: "Antimicrobial, anti-inflammatory, antioxidant, wound healing", fr: "Antimicrobien, anti-inflammatoire, antioxydant, cicatrisant" }, risks: { en: "Allergic reaction possible if allergic to bees/bee products.", fr: "Reaction allergique possible si allergie aux abeilles/produits de la ruche." }, concerns: ["acne", "sensitivity"], goodFor: ["oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, aliases: ["bee propolis"] },
  { id: "heartleaf-extract", inciName: "Houttuynia Cordata Extract", name: { en: "Heartleaf Extract", fr: "Extrait de Houttuynia Cordata" }, category: "botanical", score: "A", color: "green", comedogenic: 0, description: { en: "The trending K-beauty ingredient (Anua, Skin1004). Powerful anti-inflammatory, antibacterial, and antioxidant. Calms redness, reduces acne inflammation, and soothes sensitised skin.", fr: "L'ingredient tendance de la K-beauty (Anua, Skin1004). Puissant anti-inflammatoire, antibacterien et antioxydant. Calme les rougeurs, reduit l'inflammation acneique et apaise les peaux sensibilisees." }, benefits: { en: "Anti-inflammatory, antibacterial, antioxidant, calms redness", fr: "Anti-inflammatoire, antibacterien, antioxydant, calme les rougeurs" }, risks: { en: "Generally very well tolerated. Very rare sensitisation.", fr: "Generalement tres bien tolere. Sensibilisation tres rare." }, concerns: ["sensitivity", "acne", "rosacea"], goodFor: ["oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "84012-20-8", aliases: ["houttuynia cordata", "dokudami"] },
  { id: "trehalose", inciName: "Trehalose", name: { en: "Trehalose", fr: "Trehalose" }, category: "humectant", score: "A", color: "green", comedogenic: 0, description: { en: "A natural sugar with exceptional water-binding properties. Found in organisms that survive extreme dehydration. Protects cell membranes and proteins from drying damage.", fr: "Un sucre naturel aux proprietes de retention d'eau exceptionnelles. Trouve dans les organismes qui survivent a la deshydratation extreme. Protege les membranes cellulaires." }, benefits: { en: "Exceptional water retention, cell protection, lightweight hydration", fr: "Retention d'eau exceptionnelle, protection cellulaire, hydratation legere" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "99-20-7" },
  { id: "saccharomyces-ferment-filtrate", inciName: "Saccharomyces Ferment Filtrate", name: { en: "Saccharomyces Ferment Filtrate (Pitera)", fr: "Filtrat de fermentation de Saccharomyces (Pitera)" }, category: "active", score: "B", color: "green", comedogenic: 0, description: { en: "Yeast ferment filtrate made famous by SK-II's Facial Treatment Essence. Contains amino acids, minerals, organic acids. Brightens, hydrates, and improves skin texture over time.", fr: "Filtrat de ferment de levure rendu celebre par l'Essence SK-II. Contient acides amines, mineraux, acides organiques. Illumine, hydrate et ameliore la texture au fil du temps." }, benefits: { en: "Brightening, hydrating, improves texture, rich in nutrients", fr: "Eclat, hydratation, ameliore la texture, riche en nutriments" }, risks: { en: "Can irritate fungal acne-prone skin (yeast-derived). Otherwise safe.", fr: "Peut irriter les peaux sujettes a l'acne fongique (derive de levure). Sinon sur." }, concerns: ["anti-aging", "dryness"], goodFor: ["dry", "normal", "combination"], badFor: [], euRestricted: false, aliases: ["pitera", "galactomyces ferment filtrate", "yeast ferment"] },
];

// Helper: get ingredient by ID
export function getIngredient(id: string): Ingredient | undefined {
  return ingredients.find((i) => i.id === id);
}

// Helper: search ingredients by name or alias
export function searchIngredients(query: string): Ingredient[] {
  const q = query.toLowerCase().trim();
  return ingredients.filter(
    (i) =>
      i.id.includes(q) ||
      i.inciName.toLowerCase().includes(q) ||
      i.name.en.toLowerCase().includes(q) ||
      i.name.fr.toLowerCase().includes(q) ||
      i.aliases?.some((a) => a.toLowerCase().includes(q))
  );
}
