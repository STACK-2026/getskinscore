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
