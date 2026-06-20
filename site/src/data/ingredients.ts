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
    name: { en: "Retinol", fr: "Rétinol" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Vitamin A derivative and the gold standard anti-aging active. Promotes cell turnover, stimulates collagen production, and reduces fine lines, wrinkles, and hyperpigmentation. Extensively studied with decades of clinical evidence.",
      fr: "Dérivé de la vitamine A et référence absolue en anti-âge. Stimule le renouvellement cellulaire, la production de collagène et réduit rides, ridules et hyperpigmentation. Des décennies de preuves cliniques."
    },
    benefits: {
      en: "Reduces wrinkles, fades dark spots, improves skin texture, treats acne, boosts collagen",
      fr: "Réduit les rides, atténue les taches, améliore la texture, traite l'acné, stimule le collagène"
    },
    risks: {
      en: "Can cause irritation, dryness, and peeling during adjustment period (2-4 weeks). Increases sun sensitivity. Not recommended during pregnancy.",
      fr: "Peut causer irritation, sécheresse et desquamation pendant la période d'adaptation (2-4 semaines). Augmente la sensibilité au soleil. Déconseillé pendant la grossesse."
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
      fr: "Dérivé de la vitamine B3, l'un des actifs les plus polyvalents. Renforce la barrière cutanée, resserre les pores, contrôle le sébum, atténue les taches et possède des propriétés anti-inflammatoires. Bien toléré par tous les types de peau."
    },
    benefits: {
      en: "Reduces pores, controls oil, fades hyperpigmentation, strengthens barrier, anti-inflammatory",
      fr: "Resserre les pores, contrôle le sébum, atténue l'hyperpigmentation, renforce la barrière, anti-inflammatoire"
    },
    risks: {
      en: "Very well tolerated. Rare flushing at concentrations above 10%. Compatible with most other actives.",
      fr: "Très bien toléré. Rare rougeur passagère au-delà de 10%. Compatible avec la plupart des autres actifs."
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
      fr: "La forme la plus puissante de vitamine C pour la peau. Antioxydant puissant qui illumine le teint, atténue les taches, protège des UV et stimule la synthèse de collagène. Optimal à 10-20%, pH inférieur à 3,5."
    },
    benefits: {
      en: "Brightens, fades dark spots, antioxidant protection, boosts collagen, photoprotection",
      fr: "Éclat du teint, atténue les taches, protection antioxydante, stimule le collagène, photoprotection"
    },
    risks: {
      en: "Unstable (oxidizes quickly). Can sting on sensitive skin. Requires proper formulation (low pH, airless packaging).",
      fr: "Instable (s'oxyde rapidement). Peut picoter sur peau sensible. Nécessite une formulation adaptée (pH bas, packaging airless)."
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
      fr: "Acide bêta-hydroxylé (BHA) qui pénètre dans les pores pour dissoudre le sébum et les cellules mortes. La référence pour les peaux acnéiques et grasses. Liposoluble, il agit à l'intérieur du pore contrairement aux AHA."
    },
    benefits: {
      en: "Unclogs pores, reduces acne, controls oil, gentle exfoliation, anti-inflammatory",
      fr: "Désincruste les pores, réduit l'acné, contrôle le sébum, exfoliation douce, anti-inflammatoire"
    },
    risks: {
      en: "Can be drying at high concentrations. EU limit: 2% in leave-on products. Avoid during pregnancy (derivative of aspirin).",
      fr: "Peut dessécher à forte concentration. Limite UE : 2% en produit sans rinçage. Éviter pendant la grossesse (dérivé de l'aspirine)."
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
      fr: "Molécule naturellement présente dans la peau, capable de retenir jusqu'à 1000 fois son poids en eau. L'hydratant ultime pour tous les types de peau. Disponible en différents poids moléculaires."
    },
    benefits: {
      en: "Intense hydration, plumps fine lines, lightweight, compatible with all skin types",
      fr: "Hydratation intense, repulpe les ridules, léger, compatible avec tous les types de peau"
    },
    risks: {
      en: "In very dry climates, low molecular weight HA can draw moisture from deeper skin layers. Always seal with a moisturizer.",
      fr: "En climat très sec, l'HA de faible poids moléculaire peut puiser l'eau des couches profondes. Toujours sceller avec un hydratant."
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
      fr: "Le plus petit des acides alpha-hydroxylés (AHA), dérivé de la canne à sucre. Pénètre en profondeur pour une exfoliation efficace. Accélère le renouvellement cellulaire, améliore la texture et stimule le collagène."
    },
    benefits: {
      en: "Exfoliates, brightens, fades dark spots, improves texture, boosts collagen",
      fr: "Exfolie, illumine, atténue les taches, améliore la texture, stimule le collagène"
    },
    risks: {
      en: "Increases sun sensitivity (SPF mandatory). Can irritate at high concentrations (>10%). Start low, build up.",
      fr: "Augmente la sensibilité au soleil (SPF obligatoire). Peut irriter à forte concentration (>10%). Commencer bas, augmenter progressivement."
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
    name: { en: "Azelaic Acid", fr: "Acide azélaïque" },
    category: "active",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A multi-tasking acid naturally produced by yeast on normal skin. Anti-inflammatory, antibacterial, and tyrosinase-inhibiting. One of the few actives safe in pregnancy and effective for rosacea.",
      fr: "Acide multifonction naturellement produit par les levures de la peau. Anti-inflammatoire, antibactérien et inhibiteur de la tyrosinase. L'un des rares actifs sûrs pendant la grossesse et efficace sur la rosacée."
    },
    benefits: {
      en: "Treats acne and rosacea, fades dark spots, anti-inflammatory, pregnancy-safe",
      fr: "Traite l'acné et la rosacée, atténue les taches, anti-inflammatoire, sûr pendant la grossesse"
    },
    risks: {
      en: "Mild tingling or itching in first uses. Generally very well tolerated.",
      fr: "Léger picotement ou démangeaison aux premiers usages. Généralement très bien toléré."
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
    name: { en: "Ceramide NP", fr: "Céramide NP" },
    category: "hydrator",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "One of the three essential ceramides (NP, AP, EOP) that make up 50% of the skin barrier. Restores and maintains the lipid barrier, prevents moisture loss, and protects against environmental damage.",
      fr: "L'un des trois céramides essentiels (NP, AP, EOP) qui composent 50% de la barrière cutanée. Restaure la barrière lipidique, prévient la perte en eau et protège contre les agressions extérieures."
    },
    benefits: {
      en: "Restores skin barrier, locks in moisture, reduces sensitivity, repairs damaged skin",
      fr: "Restaure la barrière cutanée, retient l'hydratation, réduit la sensibilité, répare la peau abîmée"
    },
    risks: {
      en: "No known risks. One of the safest and most beneficial ingredients in skincare.",
      fr: "Aucun risque connu. L'un des ingrédients les plus sûrs et bénéfiques en skincare."
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
    name: { en: "Glycerin", fr: "Glycérine" },
    category: "humectant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most widely used humectant in skincare. Draws water from the environment and deeper skin layers to hydrate the surface. Found in nearly every well-formulated moisturizer.",
      fr: "L'humectant le plus utilisé en skincare. Attire l'eau de l'environnement et des couches profondes pour hydrater la surface. Présent dans presque tous les hydratants bien formulés."
    },
    benefits: { en: "Hydrates, softens, strengthens barrier, non-comedogenic", fr: "Hydrate, adoucit, renforce la barrière, non comédogène" },
    risks: { en: "None at typical concentrations. Can feel sticky at very high percentages.", fr: "Aucun aux concentrations habituelles. Peut être collant à très haute concentration." },
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
      fr: "Forme hydrogénée du squalène, naturellement présent dans le sébum humain. Huile légère et non grasse qui imite les lipides naturels de la peau. Excellent pour tous les types de peau."
    },
    benefits: { en: "Lightweight hydration, mimics natural sebum, non-comedogenic, antioxidant", fr: "Hydratation légère, imite le sébum naturel, non comédogène, antioxydant" },
    risks: { en: "None. One of the safest emollients.", fr: "Aucun. L'un des émollients les plus sûrs." },
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
      fr: "Provitamine B5 qui se convertit en acide pantothénique dans la peau. Profondément hydratant, apaisant et cicatrisant. Un incontournable pour les peaux sensibles et abîmées."
    },
    benefits: { en: "Soothes, heals, deeply hydrates, strengthens barrier, anti-inflammatory", fr: "Apaise, cicatrise, hydrate en profondeur, renforce la barrière, anti-inflammatoire" },
    risks: { en: "Extremely well tolerated. No known risks.", fr: "Extrêmement bien toléré. Aucun risque connu." },
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
    name: { en: "Shea Butter", fr: "Beurre de karité" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Rich plant butter from the African shea tree. Loaded with fatty acids, vitamins A and E. Deeply nourishing without being comedogenic. A gold standard for dry skin.",
      fr: "Beurre végétal riche issu du karité africain. Riche en acides gras, vitamines A et E. Nourrissant en profondeur sans être comédogène. La référence pour les peaux sèches."
    },
    benefits: { en: "Deep nourishment, anti-inflammatory, restores barrier, rich in vitamins", fr: "Nutrition profonde, anti-inflammatoire, restaure la barrière, riche en vitamines" },
    risks: { en: "Can feel heavy on oily skin. Rare tree nut sensitivity (very rare with refined).", fr: "Peut paraître lourd sur peau grasse. Rare sensibilité aux fruits à coque (très rare avec le raffiné)." },
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
      fr: "Antioxydant liposoluble qui protège les membranes cellulaires du stress oxydatif. En synergie avec la vitamine C pour une photoprotection renforcée. Stabilise également les formulations."
    },
    benefits: { en: "Antioxidant, moisturizing, anti-inflammatory, stabilizes vitamin C", fr: "Antioxydant, hydratant, anti-inflammatoire, stabilise la vitamine C" },
    risks: { en: "Slightly comedogenic for some. Rare contact dermatitis.", fr: "Légèrement comédogène pour certains. Rare dermatite de contact." },
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
      fr: "Plante médicinale ancestrale, ingrédient star de la K-beauty. Contient madecassoside, asiaticoside et acide asiatique. Puissant cicatrisant, anti-inflammatoire et stimulateur de collagène."
    },
    benefits: { en: "Soothes, heals, stimulates collagen, anti-inflammatory, strengthens barrier", fr: "Apaise, cicatrise, stimule le collagène, anti-inflammatoire, renforce la barrière" },
    risks: { en: "Very well tolerated. Extremely rare sensitization.", fr: "Très bien toléré. Sensibilisation extrêmement rare." },
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
      fr: "Filtre UV minéral (physique) qui bloque les UVA et UVB. Reste en surface et réfléchit les UV. L'option solaire la plus sûre, surtout pour les peaux sensibles et sujettes à la rosacée."
    },
    benefits: { en: "Broad-spectrum UV protection, anti-inflammatory, safe for sensitive skin, reef-safe", fr: "Protection UV large spectre, anti-inflammatoire, sûr pour peau sensible, respectueux des récifs" },
    risks: { en: "Can leave white cast on darker skin tones. Nano-zinc reduces this but raises inhalation concerns in sprays.", fr: "Peut laisser un film blanc sur peaux foncées. Le nano-zinc réduit cet effet mais pose des questions en spray." },
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
      fr: "Peptide naturellement lié au cuivre avec des propriétés cicatrisantes et anti-âge remarquables. Stimule la synthèse de collagène, d'élastine et de glycosaminoglycanes."
    },
    benefits: { en: "Stimulates collagen, heals, firms, anti-inflammatory, antioxidant", fr: "Stimule le collagène, cicatrise, raffermit, anti-inflammatoire, antioxydant" },
    risks: { en: "Do not combine with strong acids (vitamin C at low pH) as copper can oxidize ascorbic acid.", fr: "Ne pas combiner avec des acides forts (vitamine C à pH bas) car le cuivre peut oxyder l'acide ascorbique." },
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
      fr: "Terme parapluie pour tout mélange odorant, pouvant contenir des centaines de molécules non divulguées. Cause n1 de dermatite de contact allergique en cosmétique. L'UE liste 26 allergènes à déclarer."
    },
    benefits: { en: "Pleasant sensory experience, brand identity", fr: "Expérience sensorielle agréable, identité de marque" },
    risks: { en: "Top allergen, undisclosed composition, cumulative sensitization risk, photosensitivity for some components", fr: "Allergène majeur, composition non divulguée, risque de sensibilisation cumulative, photosensibilité pour certains composants" },
    concerns: [],
    goodFor: [],
    badFor: ["sensitive", "dry"],
    euRestricted: false,
    aliases: ["parfum", "aroma"],
  },
  {
    id: "alcohol-denat",
    inciName: "Alcohol Denat.",
    name: { en: "Denatured Alcohol", fr: "Alcool dénaturé" },
    category: "solvent",
    score: "D",
    color: "orange",
    comedogenic: 0,
    description: {
      en: "Denatured ethanol used as a solvent and to improve product feel (fast-drying, lightweight). At high concentrations (top 5 on INCI list), disrupts the skin barrier and causes dryness.",
      fr: "Éthanol dénaturé utilisé comme solvant et pour améliorer la texture (séchage rapide, léger). À forte concentration (top 5 de la liste INCI), altère la barrière cutanée et dessèche."
    },
    benefits: { en: "Lightweight feel, fast absorption, preservative, dissolves actives", fr: "Texture légère, absorption rapide, conservateur, dissout les actifs" },
    risks: { en: "Disrupts skin barrier at high concentrations, drying, increases TEWL, may accelerate aging with chronic use", fr: "Altère la barrière cutanée à forte concentration, desséchant, augmente la perte en eau, peut accélérer le vieillissement à l'usage chronique" },
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
      fr: "Tensioactif anionique agressif utilisé dans les nettoyants. Mousse abondante mais altère la barrière cutanée. L'un des irritants les plus étudiés en dermatologie (contrôle positif en patch tests)."
    },
    benefits: { en: "Effective cleansing, rich lather, low cost", fr: "Nettoyage efficace, mousse abondante, faible coût" },
    risks: { en: "Strips skin barrier, causes irritation, dryness, and inflammation. Avoid in leave-on products.", fr: "Altère la barrière cutanée, cause irritation, sécheresse et inflammation. Éviter dans les produits sans rinçage." },
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
      fr: "Filtre UV chimique à large spectre mais avec des préoccupations de sécurité majeures. Perturbateur endocrinien, risque de photoallergie et nocif pour les récifs coralliens. Interdit à Hawaii et Palau."
    },
    benefits: { en: "Broad-spectrum UV protection, photostable, low cost", fr: "Protection UV large spectre, photostable, faible coût" },
    risks: { en: "Endocrine disruptor (estrogenic activity), photoallergy, environmental damage to coral reefs, detected in breast milk", fr: "Perturbateur endocrinien (activité estrogenique), photoallergie, dommages environnementaux aux récifs, détecté dans le lait maternel" },
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
      fr: "Conservateur nommé 'Allergène de l'année' en 2013. Sensibilisant puissant qui a provoqué une épidémie de dermatite de contact. Interdit dans les produits sans rinçage en UE, restreint en rinçage."
    },
    benefits: { en: "Effective broad-spectrum preservation", fr: "Conservation efficace à large spectre" },
    risks: { en: "Strong sensitizer, banned in EU leave-on products since 2016, contact dermatitis epidemic", fr: "Sensibilisant puissant, interdit dans les produits sans rinçage en UE depuis 2016, épidémie de dermatite de contact" },
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
      fr: "L'ingrédient le plus courant en première position. Solvant et véhicule pour les actifs. Eau purifiée ou déionisée."
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
      fr: "Le conservateur le plus courant en skincare moderne, remplaçant les parabènes. Sûr à la limite UE de 1%. Utilisé par presque toutes les marques, de CeraVe à La Roche-Posay."
    },
    benefits: { en: "Effective preservation, well-studied safety profile, widely accepted", fr: "Conservation efficace, profil de sécurité bien étudié, largement accepté" },
    risks: { en: "Safe at EU limit (1%). Very rare sensitization. Safe alternative to parabens.", fr: "Sûr à la limite UE (1%). Sensibilisation très rare. Alternative sûre aux parabènes." },
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
      fr: "Émollient à base de silicone qui crée un film protecteur lisse sur la peau. Donne une texture soyeuse aux produits. Ne pénètre pas la peau. Non toxique, non sensibilisant."
    },
    benefits: { en: "Smooth texture, protective barrier, locks in moisture, non-irritating", fr: "Texture lisse, barrière protectrice, retient l'hydratation, non irritant" },
    risks: { en: "Occlusive (can trap irritants underneath). May feel heavy. Not biodegradable.", fr: "Occlusif (peut piéger des irritants en dessous). Peut paraître lourd. Non biodégradable." },
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
      fr: "Dérivé biosynthétique de l'hydroquinone, mais sans la toxicité. Inhibe la tyrosinase pour réduire la production de mélanine. L'agent éclaircissant le plus sûr et efficace après la vitamine C."
    },
    benefits: { en: "Fades dark spots, brightens, inhibits melanin, safe alternative to hydroquinone", fr: "Atténue les taches, illumine, inhibe la mélanine, alternative sûre à l'hydroquinone" },
    risks: { en: "Very well tolerated. No significant risks at cosmetic concentrations (up to 2%).", fr: "Très bien toléré. Aucun risque significatif aux concentrations cosmétiques (jusqu'à 2%)." },
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
      fr: "Alternative végétale au rétinol issue de la plante Babchi. Imite les effets anti-âge du rétinol (stimulation du collagène, renouvellement cellulaire) sans l'irritation. Compatible grossesse."
    },
    benefits: { en: "Anti-aging without irritation, pregnancy-safe, antioxidant, collagen stimulation", fr: "Anti-âge sans irritation, compatible grossesse, antioxydant, stimulation du collagène" },
    risks: { en: "Minimal. Less studied than retinol long-term, but current evidence is very positive.", fr: "Minimes. Moins étudié que le rétinol à long terme, mais les preuves actuelles sont très positives." },
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
      fr: "À l'origine un médicament anti-hémorragique, maintenant une star montante en skincare pour l'hyperpigmentation. Inhibe la production de mélanine induite par les UV. Efficace sur melasma et taches."
    },
    benefits: { en: "Fades melasma, reduces dark spots, prevents UV-induced pigmentation, well-tolerated", fr: "Atténue le melasma, réduit les taches, prévient la pigmentation UV, bien toléré" },
    risks: { en: "Very well tolerated topically. No significant risks at cosmetic concentrations.", fr: "Très bien toléré en topique. Aucun risque significatif aux concentrations cosmétiques." },
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
      fr: "AHA doux naturellement présent dans le lait. Molécule plus grosse que l'acide glycolique, donc moins pénétrante mais aussi moins irritante. Exfolie tout en hydratant."
    },
    benefits: { en: "Gentle exfoliation, hydrating, brightening, suitable for beginners", fr: "Exfoliation douce, hydratante, éclat du teint, adaptée aux débutants" },
    risks: { en: "Increases sun sensitivity. Milder than glycolic acid but can still irritate sensitive skin.", fr: "Augmente la sensibilité au soleil. Plus doux que l'acide glycolique mais peut irriter les peaux sensibles." },
    concerns: ["dryness", "anti-aging", "hyperpigmentation"],
    goodFor: ["dry", "normal", "combination", "sensitive"],
    badFor: [],
    euRestricted: true,
    casNumber: "50-21-5",
  },
  {
    id: "urea",
    inciName: "Urea",
    name: { en: "Urea", fr: "Urée" },
    category: "humectant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Natural moisturising factor (NMF) component. At low concentrations (2-10%) it's a powerful humectant. At higher concentrations (10-40%) it becomes a keratolytic that softens rough skin.",
      fr: "Composant du facteur naturel d'hydratation (NMF). À faible concentration (2-10%) c'est un puissant humectant. À forte concentration (10-40%) il devient un kératolytique qui adoucit les peaux rugueuses."
    },
    benefits: { en: "Deep hydration, softens calluses, restores NMF, exfoliates at high %", fr: "Hydratation profonde, adoucit les callosités, restaure le NMF, exfolie à haut %" },
    risks: { en: "Can sting on broken skin. At 40%+ concentrations, only for body/feet.", fr: "Peut piquer sur peau lésée. À 40%+, uniquement pour corps/pieds." },
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
    name: { en: "Cetearyl Alcohol", fr: "Alcool cétéarylique" },
    category: "emulsifier",
    score: "B",
    color: "green",
    comedogenic: 2,
    description: {
      en: "A fatty alcohol (not a drying alcohol) used as an emulsifier and thickener. Gives products a creamy, luxurious texture. Found in most moisturisers and conditioners.",
      fr: "Un alcool gras (pas un alcool desséchant) utilisé comme émulsifiant et épaississant. Donne aux produits une texture crémeuse et onctueuse. Présent dans la plupart des hydratants.",
    },
    benefits: { en: "Emollient, thickener, smooth texture, stabilises formulas", fr: "Émollient, épaississant, texture lisse, stabilise les formules" },
    risks: { en: "Mildly comedogenic for some (rating 2/5). Can exacerbate fungal acne.", fr: "Légèrement comédogène pour certains (note 2/5). Peut aggraver l'acné fongique." },
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
    name: { en: "Caprylic/Capric Triglyceride", fr: "Triglycéride caprique/caprylique" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 1,
    description: {
      en: "A light, skin-friendly emollient derived from coconut oil. Acts as a carrier for other ingredients and provides a silky, non-greasy feel. One of the most common and safest emollients in skincare.",
      fr: "Un émollient léger et compatible avec la peau, dérivé de l'huile de coco. Sert de véhicule et apporte un toucher soyeux et non gras. L'un des émollients les plus courants et les plus sûrs.",
    },
    benefits: { en: "Lightweight emollient, non-greasy, excellent carrier, very safe", fr: "Émollient léger, non gras, excellent véhicule, très sûr" },
    risks: { en: "No significant risks. Extremely well tolerated.", fr: "Aucun risque significatif. Extrêmement bien toléré." },
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
      fr: "Un humectant léger et solvant qui aide les autres ingrédients à pénétrer la peau. Agit aussi comme amplificateur de conservation. Très courant en K-beauty et en formulations occidentales.",
    },
    benefits: { en: "Humectant, enhances penetration, preservative booster, lightweight", fr: "Humectant, améliore la pénétration, amplificateur de conservation, léger" },
    risks: { en: "Very well tolerated. Rare irritation at high concentrations.", fr: "Très bien toléré. Rare irritation à haute concentration." },
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
      fr: "Alternative d'origine végétale au propylène glycol. Humectant et solvant qui améliore l'absorption des actifs. Bio-sourcé, durable et très doux pour la peau.",
    },
    benefits: { en: "Humectant, enhances absorption, plant-derived, gentle", fr: "Humectant, améliore l'absorption, d'origine végétale, doux" },
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
    name: { en: "Carbomer", fr: "Carbomère" },
    category: "thickener",
    score: "B",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A synthetic polymer used to thicken and stabilise gel and cream formulations. Creates the gel-like texture in many skincare products. Completely inert and non-irritating.",
      fr: "Un polymère synthétique utilisé pour épaissir et stabiliser les formulations gel et crème. Crée la texture gelée de nombreux produits. Complètement inerte et non irritant.",
    },
    benefits: { en: "Thickener, stabiliser, creates gel texture, inert", fr: "Épaississant, stabilisant, crée la texture gel, inerte" },
    risks: { en: "None. Completely inert on skin.", fr: "Aucun. Complètement inerte sur la peau." },
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
      fr: "Un polysaccharide naturel produit par fermentation bactérienne. Utilisé comme épaississant et stabilisant. Donne aux crèmes et gels leur consistance lisse et facile à étaler.",
    },
    benefits: { en: "Natural thickener, stabiliser, smooth texture", fr: "Épaississant naturel, stabilisant, texture lisse" },
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
    name: { en: "Allantoin", fr: "Allantoïne" },
    category: "soothing",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A gentle skin-soothing and conditioning agent found naturally in comfrey root. Promotes cell regeneration, moisturises, and calms irritated skin. Often found in sensitive skin and baby products.",
      fr: "Un agent apaisant et conditionneur doux, naturellement présent dans la racine de consoude. Favorise la régénération cellulaire, hydrate et calme les peaux irritées. Souvent dans les produits peaux sensibles et bébé.",
    },
    benefits: { en: "Soothes, heals, promotes cell renewal, moisturises", fr: "Apaise, cicatrise, favorise le renouvellement cellulaire, hydrate" },
    risks: { en: "No known risks. Extremely gentle.", fr: "Aucun risque connu. Extrêmement doux." },
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
      fr: "Un ajusteur de pH (soude) utilisé en infimes quantités pour amener les formules à un pH compatible avec la peau. Malgré son nom, complètement sûr aux traces utilisées en cosmétique. Essentiel pour les produits AHA/BHA.",
    },
    benefits: { en: "pH regulation, essential for acid-based formulas", fr: "Régulation du pH, essentiel pour les formules à base d'acides" },
    risks: { en: "None at cosmetic concentrations (trace amounts).", fr: "Aucun aux concentrations cosmétiques (traces)." },
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
      fr: "Un acide organique faible naturellement présent dans les agrumes. Utilisé principalement comme ajusteur de pH et agent chélateur. À plus forte concentration, peut agir comme un exfoliant AHA doux.",
    },
    benefits: { en: "pH adjuster, chelating agent, mild exfoliant at high %", fr: "Ajusteur de pH, agent chélateur, exfoliant doux à haut %" },
    risks: { en: "None at typical cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques habituelles." },
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
      fr: "Un amplificateur de conservation et agent conditionneur dérivé de la glycérine. Souvent associé au phénoxyéthanol pour booster son efficacité. Fonctionne aussi comme actif déodorant.",
    },
    benefits: { en: "Preservative booster, skin conditioning, deodorant properties", fr: "Amplificateur de conservation, conditionneur, propriétés déodorantes" },
    risks: { en: "Very rare sensitisation. Generally safe.", fr: "Sensibilisation très rare. Généralement sûr." },
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
      fr: "Un agent chélateur qui se lie aux ions métalliques dans l'eau, empêchant la déstabilisation de la formule. Améliore l'efficacité des conservateurs. Très courant, généralement sûr.",
    },
    benefits: { en: "Stabilises formulas, boosts preservative efficacy", fr: "Stabilise les formules, booste l'efficacité des conservateurs" },
    risks: { en: "Environmental concern (not readily biodegradable). Safe on skin.", fr: "Préoccupation environnementale (non facilement biodégradable). Sûr sur la peau." },
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
      fr: "Une huile naturelle populaire riche en acide laurique (antibactérien). Hautement comédogène (4/5) pour le visage. Correct pour le corps, mais cause fréquente de boutons sur le visage.",
    },
    benefits: { en: "Antibacterial (lauric acid), deeply moisturising, natural", fr: "Antibactérien (acide laurique), hydratation profonde, naturel" },
    risks: { en: "Highly comedogenic (4/5). Major breakout risk on face. Avoid if acne-prone.", fr: "Hautement comédogène (4/5). Risque majeur de boutons sur le visage. Éviter si peau acnéique." },
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
      fr: "Techniquement une cire liquide, pas une huile. Imite étroitement le sébum humain, ce qui en fait l'une des huiles végétales les plus compatibles avec la peau. Équilibre la production de sébum.",
    },
    benefits: { en: "Mimics sebum, balances oil production, non-irritating, versatile", fr: "Imite le sébum, équilibre la production d'huile, non irritant, polyvalent" },
    risks: { en: "Low comedogenic risk (2/5). Generally very well tolerated.", fr: "Faible risque comédogène (2/5). Généralement très bien toléré." },
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
    name: { en: "Rosehip Seed Oil", fr: "Huile de rose musquée" },
    category: "emollient",
    score: "A",
    color: "green",
    comedogenic: 1,
    description: {
      en: "A dry, lightweight facial oil rich in omega-3, omega-6, and vitamin A (retinoids). One of the few plant oils with clinical evidence for improving scars, hyperpigmentation, and skin elasticity.",
      fr: "Une huile faciale sèche et légère riche en oméga-3, oméga-6 et vitamine A (rétinoïdes). L'une des rares huiles végétales avec des preuves cliniques pour améliorer cicatrices, hyperpigmentation et élasticité.",
    },
    benefits: { en: "Natural retinoids, fades scars, improves elasticity, lightweight", fr: "Rétinoïdes naturels, atténue les cicatrices, améliore l'élasticité, légère" },
    risks: { en: "Very low comedogenic risk (1/5). Can oxidise if not stored properly.", fr: "Très faible risque comédogène (1/5). Peut s'oxyder si mal conservée." },
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
      fr: "Huile d'argan marocaine, riche en vitamine E, acide oléique et acide linoléique. Non comédogène malgré son caractère huileux. Nourrit sans obstruer les pores. Excellente aussi pour les cheveux.",
    },
    benefits: { en: "Rich in vitamin E, non-comedogenic oil, nourishing, versatile", fr: "Riche en vitamine E, huile non comédogène, nourrissante, polyvalente" },
    risks: { en: "Very rare tree nut allergy. Otherwise extremely safe.", fr: "Très rare allergie aux fruits à coque. Sinon extrêmement sûre." },
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
    name: { en: "Tea Tree Oil", fr: "Huile d'arbre à thé" },
    category: "botanical",
    score: "B",
    color: "yellow",
    comedogenic: 1,
    description: {
      en: "An essential oil with proven antibacterial and anti-inflammatory properties. Clinical evidence supports 5% tea tree oil as effective against mild-moderate acne, comparable to benzoyl peroxide but slower.",
      fr: "Une huile essentielle aux propriétés antibactériennes et anti-inflammatoires prouvées. Les preuves cliniques soutiennent l'huile d'arbre à thé à 5% contre l'acné légère à modérée, comparable au peroxyde de benzoyle mais plus lent.",
    },
    benefits: { en: "Antibacterial, anti-acne (clinical evidence), anti-inflammatory", fr: "Antibactérien, anti-acné (preuves cliniques), anti-inflammatoire" },
    risks: { en: "Potent essential oil - can irritate at high concentrations. Always use diluted. Contact sensitiser for some.", fr: "Huile essentielle puissante - peut irriter à forte concentration. Toujours utiliser diluée. Sensibilisant de contact pour certains." },
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
    name: { en: "Green Tea Extract", fr: "Extrait de thé vert" },
    category: "antioxidant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "Rich in EGCG (epigallocatechin gallate), one of the most potent natural antioxidants. Anti-inflammatory, photoprotective, and sebum-reducing properties. Complements vitamin C and E.",
      fr: "Riche en EGCG (épigallocatéchine gallate), l'un des antioxydants naturels les plus puissants. Propriétés anti-inflammatoires, photoprotectrices et sébo-régulatrices. Complémentaire à la vitamine C et E.",
    },
    benefits: { en: "Powerful antioxidant (EGCG), anti-inflammatory, photoprotective, oil-reducing", fr: "Antioxydant puissant (EGCG), anti-inflammatoire, photoprotecteur, sébo-régulateur" },
    risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." },
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
      fr: "Sécrétion filtrée d'escargots Cryptomphalus aspersa, ingrédient star de la K-beauty. Contient glycoprotéines, acide hyaluronique, acide glycolique et peptides antimicrobiens. Profondément hydratant et cicatrisant.",
    },
    benefits: { en: "Deep hydration, wound healing, contains natural HA + glycolic acid", fr: "Hydratation profonde, cicatrisation, contient HA naturel + acide glycolique" },
    risks: { en: "Not vegan. Limited standardisation (composition varies). Clinical evidence growing but less robust than established actives.", fr: "Non vegan. Standardisation limitée (composition variable). Preuves cliniques en croissance mais moins solides que les actifs établis." },
    concerns: ["dryness", "anti-aging"],
    goodFor: ["dry", "normal", "combination", "sensitive"],
    badFor: [],
    euRestricted: false,
    aliases: ["snail mucin", "snail extract"],
  },
  {
    id: "ferulic-acid",
    inciName: "Ferulic Acid",
    name: { en: "Ferulic Acid", fr: "Acide férulique" },
    category: "antioxidant",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "A plant-derived antioxidant that doubles the photoprotective power of vitamins C and E when combined. The third ingredient in the famous C+E+Ferulic combo (SkinCeuticals patent). Stabilises vitamin C.",
      fr: "Un antioxydant d'origine végétale qui double le pouvoir photoprotecteur des vitamines C et E en combinaison. Le troisième ingrédient du célèbre combo C+E+Férulique (brevet SkinCeuticals). Stabilise la vitamine C.",
    },
    benefits: { en: "Doubles vitamin C+E photoprotection, stabilises vitamin C, antioxidant", fr: "Double la photoprotection vitamine C+E, stabilise la vitamine C, antioxydant" },
    risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." },
    concerns: ["anti-aging"],
    goodFor: ["dry", "oily", "combination", "sensitive", "normal"],
    badFor: [],
    euRestricted: false,
    casNumber: "1135-24-6",
  },
  {
    id: "madecassoside",
    inciName: "Madecassoside",
    name: { en: "Madecassoside", fr: "Madécassoside" },
    category: "soothing",
    score: "A",
    color: "green",
    comedogenic: 0,
    description: {
      en: "The most active compound from centella asiatica. Potent anti-inflammatory and wound-healing molecule. The key ingredient in La Roche-Posay Cicaplast. Stimulates collagen synthesis.",
      fr: "Le composé le plus actif de la centella asiatica. Molécule anti-inflammatoire et cicatrisante puissante. L'ingrédient clé du Cicaplast La Roche-Posay. Stimule la synthèse de collagène.",
    },
    benefits: { en: "Powerful wound healing, anti-inflammatory, collagen stimulation, soothes", fr: "Cicatrisation puissante, anti-inflammatoire, stimulation du collagène, apaise" },
    risks: { en: "None. Extremely safe.", fr: "Aucun. Extrêmement sûr." },
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
      fr: "Un inhibiteur de la tyrosinase dérivé de champignons, utilisé pour éclaircir la peau et attenues les taches. Efficace mais peut être irritant et instable. Souvent combiné à d'autres éclaircissants.",
    },
    benefits: { en: "Brightens, fades dark spots, inhibits melanin production", fr: "Éclaircit, atténue les taches, inhibe la production de mélanine" },
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
      fr: "Sel de zinc de l'acide pyrrolidone carboxylique. Contrôle la production de sébum, possède des propriétés antimicrobiennes et soutient la cicatrisation. Ingrédient clé des formulations anti-acné.",
    },
    benefits: { en: "Controls sebum, antimicrobial, wound healing, anti-inflammatory", fr: "Contrôle le sébum, antimicrobien, cicatrisant, anti-inflammatoire" },
    risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." },
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
    name: { en: "Propylene Glycol", fr: "Propylène glycol" },
    category: "humectant",
    score: "C",
    color: "yellow",
    comedogenic: 0,
    description: {
      en: "A synthetic humectant and penetration enhancer. Effective but can irritate sensitive skin. Being replaced by propanediol (plant-derived alternative) in many modern formulations.",
      fr: "Un humectant synthétique et amplificateur de pénétration. Efficace mais peut irriter les peaux sensibles. Remplacé par le propanediol (alternative végétale) dans de nombreuses formulations modernes.",
    },
    benefits: { en: "Humectant, penetration enhancer, preservative booster", fr: "Humectant, amplificateur de pénétration, amplificateur de conservation" },
    risks: { en: "Can irritate sensitive skin. Mild allergen for some (rare). Being phased out in favour of propanediol.", fr: "Peut irriter les peaux sensibles. Allergène léger pour certains (rare). Progressivement remplacé par le propanediol." },
    concerns: [],
    goodFor: ["normal", "oily", "combination"],
    badFor: ["sensitive"],
    euRestricted: false,
    casNumber: "57-55-6",
  },
  {
    id: "mineral-oil",
    inciName: "Paraffinum Liquidum",
    name: { en: "Mineral Oil", fr: "Huile minérale" },
    category: "emollient",
    score: "C",
    color: "yellow",
    comedogenic: 2,
    description: {
      en: "A petroleum-derived occlusive emollient. Very effective at preventing moisture loss. Cosmetic-grade mineral oil is highly purified and safe, but perception has shifted against it.",
      fr: "Un émollient occlusif dérivé du pétrole. Très efficace pour prévenir la perte en eau. L'huile minérale cosmétique est hautement purifiée et sûre, mais la perception a évolué contre.",
    },
    benefits: { en: "Highly effective occlusive, prevents TEWL, inexpensive, inert", fr: "Occlusif très efficace, prévient la perte en eau, peu coûteux, inerte" },
    risks: { en: "Can clog pores for some (2/5). Environmental/perception concern. Does not provide nutrients.", fr: "Peut obstruer les pores chez certains (2/5). Préoccupation environnementale/perception. N'apporte aucun nutriment." },
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
  { id: "cetyl-alcohol", inciName: "Cetyl Alcohol", name: { en: "Cetyl Alcohol", fr: "Alcool cétylique" }, category: "emollient", score: "B", color: "green", comedogenic: 2, description: { en: "A fatty alcohol that acts as an emollient and thickener. Not a drying alcohol. Gives products a smooth, creamy texture.", fr: "Un alcool gras qui agit comme émollient et épaississant. Pas un alcool desséchant. Donne une texture lisse et crémeuse." }, benefits: { en: "Emollient, thickener, smooth texture", fr: "Émollient, épaississant, texture lisse" }, risks: { en: "Mildly comedogenic (2/5). Can worsen fungal acne.", fr: "Légèrement comédogène (2/5). Peut aggraver l'acné fongique." }, concerns: [], goodFor: ["dry", "normal"], badFor: [], euRestricted: false, casNumber: "36653-82-4" },
  { id: "stearic-acid", inciName: "Stearic Acid", name: { en: "Stearic Acid", fr: "Acide stéarique" }, category: "emollient", score: "B", color: "green", comedogenic: 2, description: { en: "A saturated fatty acid used as an emulsifier, thickener, and cleansing agent. Found naturally in cocoa butter and shea butter.", fr: "Un acide gras saturé utilisé comme émulsifiant, épaississant et agent nettoyant. Présent naturellement dans le beurre de cacao et le karité." }, benefits: { en: "Emulsifier, thickener, cleansing", fr: "Émulsifiant, épaississant, nettoyant" }, risks: { en: "Mildly comedogenic (2/5).", fr: "Légèrement comédogène (2/5)." }, concerns: [], goodFor: ["dry", "normal"], badFor: [], euRestricted: false, casNumber: "57-11-4" },
  { id: "polysorbate-20", inciName: "Polysorbate 20", name: { en: "Polysorbate 20", fr: "Polysorbate 20" }, category: "emulsifier", score: "B", color: "green", comedogenic: 0, description: { en: "A mild non-ionic surfactant and emulsifier derived from sorbitol and lauric acid. Helps oil and water mix in formulations.", fr: "Un tensioactif et émulsifiant doux non ionique dérivé du sorbitol et de l'acide laurique. Aide à mélanger huile et eau." }, benefits: { en: "Gentle emulsifier, solubiliser", fr: "Émulsifiant doux, solubilisant" }, risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "9005-64-5" },
  { id: "sodium-hyaluronate", inciName: "Sodium Hyaluronate", name: { en: "Sodium Hyaluronate", fr: "Hyaluronate de sodium" }, category: "humectant", score: "A", color: "green", comedogenic: 0, description: { en: "The sodium salt form of hyaluronic acid. Smaller molecular weight allows deeper penetration into the skin. Same hydrating benefits as HA.", fr: "La forme sel de sodium de l'acide hyaluronique. Poids moléculaire plus petit permettant une pénétration plus profonde. Mêmes bénéfices hydratants." }, benefits: { en: "Deep hydration, plumps skin, smaller molecule penetrates better", fr: "Hydratation profonde, repulpe la peau, molécule plus petite pénètre mieux" }, risks: { en: "Same as hyaluronic acid. Seal with moisturiser.", fr: "Mêmes que l'acide hyaluronique. Sceller avec un hydratant." }, concerns: ["dryness", "anti-aging"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "9067-32-7", aliases: ["ha", "sodium hyaluronate crosspolymer"] },
  { id: "cholesterol", inciName: "Cholesterol", name: { en: "Cholesterol", fr: "Cholestérol" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "A lipid naturally found in the skin barrier. Works with ceramides and fatty acids to repair and maintain the barrier. Essential for healthy skin.", fr: "Un lipide naturellement présent dans la barrière cutanée. Fonctionne avec les céramides et acides gras pour réparer la barrière. Essentiel pour une peau saine." }, benefits: { en: "Barrier repair, works with ceramides, skin-identical lipid", fr: "Réparation barrière, synergie avec céramides, lipide identique à la peau" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "57-88-5" },
  { id: "phytosphingosine", inciName: "Phytosphingosine", name: { en: "Phytosphingosine", fr: "Phytosphingosine" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "A ceramide precursor naturally found in the skin. Anti-inflammatory and antimicrobial. Part of the CeraVe ceramide complex.", fr: "Un précurseur de céramides naturellement présent dans la peau. Anti-inflammatoire et antimicrobien. Fait partie du complexe céramides CeraVe." }, benefits: { en: "Ceramide precursor, anti-inflammatory, antimicrobial, barrier repair", fr: "Précurseur de céramides, anti-inflammatoire, antimicrobien, réparation barrière" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["sensitivity", "dryness"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "554-62-1" },
  { id: "cera-alba", inciName: "Cera Alba", name: { en: "Beeswax", fr: "Cire d'abeille" }, category: "emollient", score: "B", color: "green", comedogenic: 2, description: { en: "Natural wax produced by honey bees. Creates a protective, occlusive barrier on skin. Used in balms and rich creams.", fr: "Cire naturelle produite par les abeilles. Crée une barrière protectrice et occlusive. Utilisée dans les baumes et crèmes riches." }, benefits: { en: "Protective barrier, natural occlusive, texture builder", fr: "Barrière protectrice, occlusif naturel, constructeur de texture" }, risks: { en: "Comedogenic (2/5). Not vegan. Rare contact allergy.", fr: "Comédogène (2/5). Non vegan. Rare allergie de contact." }, concerns: ["dryness"], goodFor: ["dry"], badFor: ["oily"], euRestricted: false, casNumber: "8012-89-3", aliases: ["beeswax"] },
  { id: "titanium-dioxide", inciName: "Titanium Dioxide", name: { en: "Titanium Dioxide", fr: "Dioxyde de titane" }, category: "sunscreen", score: "A", color: "green", comedogenic: 0, description: { en: "Mineral UV filter that primarily blocks UVB rays. Physical sunscreen that sits on skin surface. Often combined with zinc oxide for broad-spectrum protection.", fr: "Filtre UV minéral qui bloque principalement les UVB. Protection solaire physique qui reste en surface. Souvent combiné à l'oxyde de zinc pour une protection large spectre." }, benefits: { en: "Physical UV protection, non-irritating, photostable", fr: "Protection UV physique, non irritant, photostable" }, risks: { en: "White cast on dark skin. Nano form raises inhalation concerns in sprays.", fr: "Trace blanche sur peaux foncées. La forme nano pose des questions en spray." }, concerns: ["sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "13463-67-7" },
  { id: "adenosine", inciName: "Adenosine", name: { en: "Adenosine", fr: "Adénosine" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "A naturally occurring nucleoside with proven anti-wrinkle properties. Stimulates collagen production and relaxes wrinkles. Very popular in K-beauty.", fr: "Un nucléoside naturel aux propriétés anti-rides prouvées. Stimule la production de collagène et détend les rides. Très populaire en K-beauty." }, benefits: { en: "Anti-wrinkle, collagen stimulation, wound healing, anti-inflammatory", fr: "Anti-rides, stimulation collagène, cicatrisation, anti-inflammatoire" }, risks: { en: "None. Very well tolerated.", fr: "Aucun. Très bien toléré." }, concerns: ["anti-aging"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "58-61-7" },
  { id: "ascorbyl-glucoside", inciName: "Ascorbyl Glucoside", name: { en: "Ascorbyl Glucoside", fr: "Ascorbyl glucoside" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "A stable vitamin C derivative that converts to ascorbic acid in the skin. Less potent than L-ascorbic acid but much more stable and less irritating.", fr: "Un dérivé stable de la vitamine C qui se convertit en acide ascorbique dans la peau. Moins puissant que l'acide L-ascorbique mais beaucoup plus stable et moins irritant." }, benefits: { en: "Stable vitamin C, brightening, antioxidant, less irritating", fr: "Vitamine C stable, éclat, antioxydant, moins irritant" }, risks: { en: "Less potent than pure vitamin C. Results take longer.", fr: "Moins puissant que la vitamine C pure. Résultats plus lents." }, concerns: ["anti-aging", "hyperpigmentation"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "129499-78-1" },
  { id: "bisabolol", inciName: "Bisabolol", name: { en: "Bisabolol (Alpha-Bisabolol)", fr: "Bisabolol (Alpha-Bisabolol)" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "A terpenoid derived from chamomile. Potent anti-inflammatory and skin-soothing agent. Also enhances penetration of other active ingredients.", fr: "Un terpénoïde dérivé de la camomille. Puissant agent anti-inflammatoire et apaisant. Améliore aussi la pénétration d'autres actifs." }, benefits: { en: "Anti-inflammatory, soothing, enhances penetration, antioxidant", fr: "Anti-inflammatoire, apaisant, améliore la pénétration, antioxydant" }, risks: { en: "None. Very well tolerated, even on sensitive skin.", fr: "Aucun. Très bien toléré, même sur peau sensible." }, concerns: ["sensitivity", "rosacea"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "515-69-5", aliases: ["alpha-bisabolol", "levomenol"] },
  { id: "sucralfate", inciName: "Sucralfate", name: { en: "Sucralfate", fr: "Sucralfate" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "Originally a stomach ulcer medication, repurposed for skin repair. Creates a protective film that promotes wound healing. Key ingredient in Avene Cicalfate.", fr: "À l'origine un médicament anti-ulcère gastrique, reconverti pour la réparation cutanée. Crée un film protecteur favorisant la cicatrisation. Ingrédient clé du Cicalfate Avène." }, benefits: { en: "Wound healing, protective film, anti-inflammatory", fr: "Cicatrisation, film protecteur, anti-inflammatoire" }, risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." }, concerns: ["sensitivity"], goodFor: ["sensitive", "dry", "normal"], badFor: [], euRestricted: false, casNumber: "54182-58-0" },
  { id: "glyceryl-stearate", inciName: "Glyceryl Stearate", name: { en: "Glyceryl Stearate", fr: "Stéarate de glycéryle" }, category: "emulsifier", score: "B", color: "green", comedogenic: 1, description: { en: "One of the most common emulsifiers in skincare. Helps oil and water phases stay mixed. Also acts as a mild emollient.", fr: "L'un des émulsifiants les plus courants en skincare. Aide les phases huile et eau à rester mélangées. Agit aussi comme émollient doux." }, benefits: { en: "Emulsifier, mild emollient, stabiliser", fr: "Émulsifiant, émollient doux, stabilisant" }, risks: { en: "Very low comedogenic risk (1/5). Safe for most.", fr: "Très faible risque comédogène (1/5). Sûr pour la plupart." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "31566-31-1" },
  { id: "isopropyl-myristate", inciName: "Isopropyl Myristate", name: { en: "Isopropyl Myristate", fr: "Myristate d'isopropyle" }, category: "emollient", score: "D", color: "orange", comedogenic: 5, description: { en: "An emollient and penetration enhancer with the highest comedogenic rating (5/5). Makes products feel smooth and non-greasy but is a major pore-clogging risk.", fr: "Un émollient et amplificateur de pénétration avec la note comédogène la plus élevée (5/5). Rend les produits lisses et non gras mais risque majeur d'obstruction des pores." }, benefits: { en: "Smooth texture, fast absorption, penetration enhancer", fr: "Texture lisse, absorption rapide, amplificateur de pénétration" }, risks: { en: "Highest comedogenic rating (5/5). Major breakout risk. Avoid if acne-prone.", fr: "Note comédogène maximale (5/5). Risque majeur de boutons. Éviter si peau acnéique." }, concerns: [], goodFor: [], badFor: ["oily", "combination"], euRestricted: false, casNumber: "110-27-0" },
  { id: "pentylene-glycol", inciName: "Pentylene Glycol", name: { en: "Pentylene Glycol", fr: "Pentylène glycol" }, category: "humectant", score: "A", color: "green", comedogenic: 0, description: { en: "A plant-derived humectant with antimicrobial properties. Also acts as a preservative booster, allowing lower concentrations of traditional preservatives.", fr: "Un humectant d'origine végétale aux propriétés antimicrobiennes. Agit aussi comme amplificateur de conservation, permettant de réduire les conservateurs traditionnels." }, benefits: { en: "Humectant, antimicrobial, preservative booster, plant-derived", fr: "Humectant, antimicrobien, amplificateur de conservation, d'origine végétale" }, risks: { en: "None. Very well tolerated.", fr: "Aucun. Très bien toléré." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "5343-92-0" },
  { id: "nylon-12", inciName: "Nylon-12", name: { en: "Nylon-12", fr: "Nylon-12" }, category: "thickener", score: "C", color: "yellow", comedogenic: 0, description: { en: "A synthetic polymer used for mattifying and oil-absorbing properties. Creates a soft-focus, blurred effect on skin. Environmental concern as a microplastic.", fr: "Un polymère synthétique utilisé pour ses propriétés matifiantes et absorbantes. Crée un effet flou et soft-focus sur la peau. Préoccupation environnementale comme microplastique." }, benefits: { en: "Mattifying, oil-absorbing, soft-focus effect", fr: "Matifiant, absorbant le sébum, effet soft-focus" }, risks: { en: "Microplastic (environmental concern). Not biodegradable.", fr: "Microplastique (préoccupation environnementale). Non biodégradable." }, concerns: ["oiliness"], goodFor: ["oily"], badFor: [], euRestricted: false, casNumber: "25038-74-8" },
  { id: "colloidal-oatmeal", inciName: "Avena Sativa Kernel Flour", name: { en: "Colloidal Oatmeal", fr: "Avoine colloïdale" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "Finely ground oats with FDA-approved skin protectant status. Clinically proven to relieve itching, inflammation, and dryness. A cornerstone of eczema treatment.", fr: "Flocons d'avoine finement moulus avec statut de protecteur cutané approuvé par la FDA. Cliniquement prouvé pour soulager démangeaisons, inflammation et sécheresse. Pilier du traitement de l'eczéma." }, benefits: { en: "FDA-approved skin protectant, relieves itching, anti-inflammatory, moisturising", fr: "Protecteur cutané approuvé FDA, soulage les démangeaisons, anti-inflammatoire, hydratant" }, risks: { en: "Rare oat allergy. Otherwise extremely safe.", fr: "Rare allergie à l'avoine. Sinon extrêmement sûr." }, concerns: ["sensitivity", "dryness"], goodFor: ["dry", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "131470-90-5", aliases: ["avena sativa", "oat extract"] },
  { id: "cocamidopropyl-betaine", inciName: "Cocamidopropyl Betaine", name: { en: "Cocamidopropyl Betaine", fr: "Cocamidopropyl bétaïne" }, category: "surfactant", score: "B", color: "green", comedogenic: 0, description: { en: "A mild amphoteric surfactant derived from coconut oil. Much gentler than SLS. Commonly used in 'gentle' and 'sensitive skin' cleansers.", fr: "Un tensioactif amphotère doux dérivé de l'huile de coco. Beaucoup plus doux que le SLS. Couramment utilisé dans les nettoyants 'doux' et 'peaux sensibles'." }, benefits: { en: "Gentle cleansing, mild foam, coconut-derived", fr: "Nettoyage doux, mousse légère, dérivé de coco" }, risks: { en: "Rare contact allergy (ACDS Allergen of the Year 2004). Generally very safe.", fr: "Rare allergie de contact (allergène de l'année ACDS 2004). Généralement très sûr." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "61789-40-0" },
  { id: "sodium-lauroyl-sarcosinate", inciName: "Sodium Lauroyl Sarcosinate", name: { en: "Sodium Lauroyl Sarcosinate", fr: "Lauroyl sarcosinate de sodium" }, category: "surfactant", score: "A", color: "green", comedogenic: 0, description: { en: "One of the gentlest surfactants available. Amino acid-derived, does not strip the skin barrier. Used in CeraVe and other dermatologist-recommended cleansers.", fr: "L'un des tensioactifs les plus doux disponibles. Dérivé d'acide aminé, n'altère pas la barrière cutanée. Utilisé dans CeraVe et autres nettoyants recommandés par les dermatologues." }, benefits: { en: "Ultra-gentle cleansing, amino acid-derived, preserves barrier", fr: "Nettoyage ultra-doux, dérivé d'acide aminé, préserve la barrière" }, risks: { en: "None. One of the safest surfactants.", fr: "Aucun. L'un des tensioactifs les plus sûrs." }, concerns: ["sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "137-16-6" },
  { id: "gluconolactone", inciName: "Gluconolactone", name: { en: "Gluconolactone (PHA)", fr: "Gluconolactone (PHA)" }, category: "exfoliant", score: "A", color: "green", comedogenic: 0, description: { en: "A polyhydroxy acid (PHA) that exfoliates more gently than AHAs. Larger molecule size means slower penetration and less irritation. Also a humectant and antioxidant.", fr: "Un acide polyhydroxylé (PHA) qui exfolie plus doucement que les AHA. Plus grosse molécule = pénétration plus lente et moins d'irritation. Aussi humectant et antioxydant." }, benefits: { en: "Gentle exfoliation (no sun sensitivity), humectant, antioxidant", fr: "Exfoliation douce (pas de photosensibilité), humectant, antioxydant" }, risks: { en: "Very gentle. May tingle at high concentrations.", fr: "Très doux. Peut picoter à forte concentration." }, concerns: ["acne", "anti-aging", "pores"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "90-80-2", aliases: ["pha", "polyhydroxy acid"] },
  { id: "mandelic-acid", inciName: "Mandelic Acid", name: { en: "Mandelic Acid", fr: "Acide mandélique" }, category: "exfoliant", score: "A", color: "green", comedogenic: 0, description: { en: "An AHA derived from bitter almonds with a larger molecular size than glycolic acid. Gentler exfoliation, also has antibacterial and melanin-inhibiting properties. Great for dark skin tones.", fr: "Un AHA dérivé des amandes amères avec une taille moléculaire plus grande que l'acide glycolique. Exfoliation plus douce, propriétés antibactériennes et anti-mélanine. Excellent pour les peaux foncées." }, benefits: { en: "Gentle AHA, antibacterial, safe for dark skin, fades hyperpigmentation", fr: "AHA doux, antibactérien, sûr pour peaux foncées, atténue l'hyperpigmentation" }, risks: { en: "Increases sun sensitivity (less than glycolic). SPF recommended.", fr: "Augmente la photosensibilité (moins que le glycolique). SPF recommandé." }, concerns: ["acne", "hyperpigmentation"], goodFor: ["oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "90-64-2" },
  { id: "benzoyl-peroxide", inciName: "Benzoyl Peroxide", name: { en: "Benzoyl Peroxide", fr: "Peroxyde de benzoyle" }, category: "active", score: "B", color: "yellow", comedogenic: 0, description: { en: "The most effective OTC anti-acne ingredient. Kills acne-causing bacteria (C. acnes) on contact. Available at 2.5%, 5%, and 10%. Evidence shows 2.5% is as effective as 10% with less irritation.", fr: "L'ingrédient anti-acné OTC le plus efficace. Tue les bactéries responsables de l'acné (C. acnes) au contact. Disponible à 2,5%, 5% et 10%. Les preuves montrent que 2,5% est aussi efficace que 10% avec moins d'irritation." }, benefits: { en: "Kills acne bacteria, reduces inflammation, prevents resistance", fr: "Tue les bactéries acnéiques, réduit l'inflammation, prévient la résistance" }, risks: { en: "Drying, can bleach fabrics and hair. Start at 2.5%. Contact sensitizer for some.", fr: "Desséchant, peut décolorer tissus et cheveux. Commencer à 2,5%. Sensibilisant de contact pour certains." }, concerns: ["acne"], goodFor: ["oily", "combination"], badFor: ["dry", "sensitive"], euRestricted: true, casNumber: "94-36-0", aliases: ["bpo"] },
  { id: "petrolatum", inciName: "Petrolatum", name: { en: "Petrolatum (Vaseline)", fr: "Vaseline (Petrolatum)" }, category: "emollient", score: "B", color: "green", comedogenic: 0, description: { en: "The most effective occlusive available, reducing transepidermal water loss by 99%. Cosmetic-grade petrolatum is highly refined and non-comedogenic despite myths.", fr: "L'occlusif le plus efficace disponible, réduisant la perte en eau transépidermique de 99%. La vaseline cosmétique est hautement raffinée et non comédogène malgré les mythes." }, benefits: { en: "Most effective occlusive (99% TEWL reduction), safe, non-comedogenic", fr: "Occlusif le plus efficace (99% réduction TEWL), sûr, non comédogène" }, risks: { en: "Perception issue. Some prefer plant-based alternatives. Can feel heavy.", fr: "Problème de perception. Certains préfèrent les alternatives végétales. Peut paraître lourd." }, concerns: ["dryness"], goodFor: ["dry", "sensitive"], badFor: [], euRestricted: false, casNumber: "8009-03-8", aliases: ["vaseline", "petroleum jelly"] },
  // ===========================
  // BATCH 4: More ingredients (surfactants, preservatives, actives, oils)
  // ===========================
  { id: "adapalene", inciName: "Adapalene", name: { en: "Adapalene", fr: "Adapalène" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "A third-generation retinoid available OTC (Differin). More stable and less irritating than retinol while being more effective for acne. First-line treatment for comedonal acne.", fr: "Un rétinoïde de 3e génération disponible sans ordonnance (Differin). Plus stable et moins irritant que le rétinol tout en étant plus efficace contre l'acné. Traitement de première intention pour l'acné comédonnale." }, benefits: { en: "Gold standard for acne (comedonal), less irritating than retinol, photostable", fr: "Référence pour l'acné comédonnale, moins irritant que le rétinol, photostable" }, risks: { en: "Drying, peeling in first weeks. Not for use during pregnancy.", fr: "Desséchant, desquamation les premières semaines. Pas pendant la grossesse." }, concerns: ["acne"], goodFor: ["oily", "combination", "normal"], badFor: ["dry", "sensitive"], euRestricted: true, casNumber: "106685-40-9" },
  { id: "tretinoin", inciName: "Tretinoin", name: { en: "Tretinoin", fr: "Trétinoïne" }, category: "active", score: "A", color: "green", comedogenic: 0, description: { en: "Prescription-strength retinoid (Retin-A). The most potent and most studied anti-aging and anti-acne ingredient. Directly activates retinoic acid receptors without conversion.", fr: "Rétinoïde sur ordonnance (Retin-A). L'ingrédient anti-âge et anti-acné le plus puissant et le plus étudié. Active directement les récepteurs de l'acide rétinoïque sans conversion." }, benefits: { en: "Most potent retinoid, decades of clinical evidence, anti-aging + anti-acne", fr: "Rétinoïde le plus puissant, décennies de preuves cliniques, anti-âge + anti-acné" }, risks: { en: "Prescription only. Significant irritation, peeling, sun sensitivity. Not for pregnancy.", fr: "Sur ordonnance uniquement. Irritation significative, desquamation, photosensibilité. Pas pendant la grossesse." }, concerns: ["anti-aging", "acne", "hyperpigmentation"], goodFor: ["normal", "oily"], badFor: ["sensitive", "dry"], euRestricted: true, casNumber: "302-79-4", aliases: ["retin-a", "retinoic acid"] },
  { id: "hydroquinone", inciName: "Hydroquinone", name: { en: "Hydroquinone", fr: "Hydroquinone" }, category: "active", score: "E", color: "red", comedogenic: 0, description: { en: "The most effective depigmenting agent known, but banned in EU cosmetics due to cytotoxicity and safety concerns. Only available by prescription in most countries.", fr: "L'agent dépigmentant le plus efficace connu, mais interdit en cosmétique UE en raison de sa cytotoxicité. Disponible uniquement sur ordonnance dans la plupart des pays." }, benefits: { en: "Most effective skin lightener (prescription)", fr: "Éclaircissant cutané le plus efficace (ordonnance)" }, risks: { en: "EU-banned in cosmetics. Cytotoxic. Can cause ochronosis (paradoxical darkening) with prolonged use.", fr: "Interdit en cosmétique UE. Cytotoxique. Peut causer l'ochronose (assombrissement paradoxal) avec usage prolongé." }, concerns: ["hyperpigmentation"], goodFor: [], badFor: ["dry", "oily", "combination", "sensitive", "normal"], euRestricted: true, casNumber: "123-31-9" },
  { id: "sodium-laureth-sulfate", inciName: "Sodium Laureth Sulfate", name: { en: "Sodium Laureth Sulfate (SLES)", fr: "Laureth sulfate de sodium (SLES)" }, category: "surfactant", score: "C", color: "yellow", comedogenic: 0, description: { en: "A milder cousin of SLS (ethoxylated version). Still a relatively harsh surfactant but less irritating than SLS. Very common in cleansers and shampoos.", fr: "Un cousin plus doux du SLS (version ethoxilee). Toujours un tensioactif relativement agressif mais moins irritant que le SLS. Très courant dans nettoyants et shampoings." }, benefits: { en: "Effective cleansing, good foam, less harsh than SLS", fr: "Nettoyage efficace, bonne mousse, moins agressif que le SLS" }, risks: { en: "Can still irritate sensitive skin. Milder than SLS but not as gentle as glucosides.", fr: "Peut encore irriter les peaux sensibles. Plus doux que le SLS mais pas aussi doux que les glucosides." }, concerns: [], goodFor: ["oily", "normal"], badFor: ["sensitive", "dry"], euRestricted: false, casNumber: "9004-82-4", aliases: ["sles"] },
  { id: "polyethylene", inciName: "Polyethylene", name: { en: "Polyethylene", fr: "Polyéthylène" }, category: "thickener", score: "D", color: "orange", comedogenic: 0, description: { en: "A synthetic plastic polymer. Used as a binder, film-former, or in scrubs as microbeads (now banned in many countries). Major environmental concern as a microplastic.", fr: "Un polymère plastique synthétique. Utilisé comme liant, filmogène ou en microbilles dans les gommages (désormais interdits dans de nombreux pays). Préoccupation environnementale majeure comme microplastique." }, benefits: { en: "Texture agent, film-former, binder", fr: "Agent de texture, filmogène, liant" }, risks: { en: "Microplastic (environmental pollution). Microbeads banned in EU, US, UK. Non-biodegradable.", fr: "Microplastique (pollution). Microbilles interdites en UE, US, UK. Non biodégradable." }, concerns: [], goodFor: [], badFor: [], euRestricted: true, casNumber: "9002-88-4", aliases: ["microplastic", "microbeads"] },
  { id: "avobenzone", inciName: "Avobenzone", name: { en: "Avobenzone", fr: "Avobenzone" }, category: "sunscreen", score: "B", color: "yellow", comedogenic: 0, description: { en: "A chemical UVA filter widely used in US sunscreens. Provides broad-spectrum protection but is photo-unstable (degrades in sunlight) and needs stabilisers like octocrylene.", fr: "Un filtre UVA chimique largement utilisé dans les crèmes solaires US. Protection large spectre mais photo-instable (se dégrade au soleil) et nécessite des stabilisants comme l'octocrylène." }, benefits: { en: "Broad UVA protection, lightweight, cosmetically elegant", fr: "Protection UVA large spectre, léger, cosmétiquement élégant" }, risks: { en: "Photo-unstable (needs stabilisers). Potential endocrine disruptor (debated). Can stain clothes.", fr: "Photo-instable (nécessite stabilisants). Potentiel perturbateur endocrinien (débattu). Peut tacher les vêtements." }, concerns: [], goodFor: ["normal", "oily", "combination"], badFor: ["sensitive"], euRestricted: false, casNumber: "70356-09-1", aliases: ["butyl methoxydibenzoylmethane", "parsol 1789"] },
  { id: "homosalate", inciName: "Homosalate", name: { en: "Homosalate", fr: "Homosalate" }, category: "sunscreen", score: "C", color: "yellow", comedogenic: 0, description: { en: "A chemical UVB filter commonly used in US sunscreens. SCCS has recommended restricting to max 1.4% due to endocrine disruption concerns (EU considering restriction).", fr: "Un filtre UVB chimique courant dans les crèmes solaires US. Le SCCS recommande de restreindre à max 1,4% en raison de préoccupations de perturbation endocrinienne (restriction UE en cours)." }, benefits: { en: "UVB protection, lightweight, good solvent for other filters", fr: "Protection UVB, léger, bon solvant pour d'autres filtres" }, risks: { en: "SCCS recommends max 1.4% (endocrine disruptor concern). EU restriction pending.", fr: "Le SCCS recommande max 1,4% (préoccupation perturbateur endocrinien). Restriction UE en attente." }, concerns: [], goodFor: ["normal", "oily"], badFor: ["sensitive"], euRestricted: true, casNumber: "118-56-9" },
  { id: "octocrylene", inciName: "Octocrylene", name: { en: "Octocrylene", fr: "Octocrylène" }, category: "sunscreen", score: "C", color: "yellow", comedogenic: 0, description: { en: "A chemical UV filter that stabilises avobenzone. Generates benzophenone (a suspected endocrine disruptor) upon degradation. Common in US and EU sunscreens.", fr: "Un filtre UV chimique qui stabilise l'avobenzone. Génère de la benzophénone (perturbateur endocrinien suspecté) en se dégradant. Courant dans les crèmes solaires US et UE." }, benefits: { en: "UVB protection, stabilises avobenzone, photostable", fr: "Protection UVB, stabilise l'avobenzone, photostable" }, risks: { en: "Generates benzophenone upon aging. Suspected endocrine disruptor. Coral reef concern.", fr: "Génère de la benzophénone en vieillissant. Perturbateur endocrinien suspecté. Préoccupation récifs coralliens." }, concerns: [], goodFor: ["normal", "oily"], badFor: ["sensitive"], euRestricted: false, casNumber: "6197-30-4" },
  { id: "ceramide-ap", inciName: "Ceramide AP", name: { en: "Ceramide AP", fr: "Céramide AP" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "One of three essential ceramides in the skin barrier (with NP and EOP). Helps maintain the lipid matrix between skin cells. Part of the CeraVe triple ceramide complex.", fr: "L'un des trois céramides essentiels de la barrière cutanée (avec NP et EOP). Maintient la matrice lipidique entre les cellules. Fait partie du triple complexe céramides CeraVe." }, benefits: { en: "Barrier repair, moisture retention, works with NP and EOP", fr: "Réparation barrière, rétention d'eau, fonctionne avec NP et EOP" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "100403-19-8" },
  { id: "ceramide-eop", inciName: "Ceramide EOP", name: { en: "Ceramide EOP", fr: "Céramide EOP" }, category: "hydrator", score: "A", color: "green", comedogenic: 0, description: { en: "The third essential ceramide in the skin barrier trio. Works synergistically with ceramides NP and AP. Critical for maintaining the waterproof barrier function.", fr: "Le troisième céramide essentiel du trio de la barrière cutanée. Fonctionne en synergie avec les céramides NP et AP. Critique pour maintenir la fonction barrière imperméabilisante." }, benefits: { en: "Barrier repair, waterproof barrier, synergy with NP/AP", fr: "Réparation barrière, barrière imperméabilisante, synergie avec NP/AP" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false },
  { id: "beta-glucan", inciName: "Beta-Glucan", name: { en: "Beta-Glucan", fr: "Bêta-glucane" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "A polysaccharide with potent wound-healing and immune-boosting properties. Deeply hydrating, soothing, and anti-aging. Some studies show efficacy comparable to hyaluronic acid for hydration.", fr: "Un polysaccharide aux propriétés cicatrisantes et immuno-stimulantes puissantes. Profondément hydratant, apaisant et anti-âge. Certaines études montrent une efficacité comparable à l'acide hyaluronique pour l'hydratation." }, benefits: { en: "Wound healing, hydrating (comparable to HA), anti-inflammatory, immune support", fr: "Cicatrisant, hydratant (comparable à l'HA), anti-inflammatoire, soutien immunitaire" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness", "sensitivity", "anti-aging"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "9041-22-9" },
  { id: "propolis-extract", inciName: "Propolis Extract", name: { en: "Propolis Extract", fr: "Extrait de propolis" }, category: "botanical", score: "A", color: "green", comedogenic: 0, description: { en: "A resinous substance collected by bees with powerful antimicrobial, anti-inflammatory, and antioxidant properties. A K-beauty staple ingredient for acne-prone and sensitive skin.", fr: "Substance résineuse collectée par les abeilles aux propriétés antimicrobiennes, anti-inflammatoires et antioxydantes puissantes. Ingrédient star de la K-beauty pour peaux acnéiques et sensibles." }, benefits: { en: "Antimicrobial, anti-inflammatory, antioxidant, wound healing", fr: "Antimicrobien, anti-inflammatoire, antioxydant, cicatrisant" }, risks: { en: "Allergic reaction possible if allergic to bees/bee products.", fr: "Réaction allergique possible si allergie aux abeilles/produits de la ruche." }, concerns: ["acne", "sensitivity"], goodFor: ["oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, aliases: ["bee propolis"] },
  { id: "heartleaf-extract", inciName: "Houttuynia Cordata Extract", name: { en: "Heartleaf Extract", fr: "Extrait de Houttuynia Cordata" }, category: "botanical", score: "A", color: "green", comedogenic: 0, description: { en: "The trending K-beauty ingredient (Anua, Skin1004). Powerful anti-inflammatory, antibacterial, and antioxidant. Calms redness, reduces acne inflammation, and soothes sensitised skin.", fr: "L'ingrédient tendance de la K-beauty (Anua, Skin1004). Puissant anti-inflammatoire, antibactérien et antioxydant. Calme les rougeurs, réduit l'inflammation acnéique et apaise les peaux sensibilisées." }, benefits: { en: "Anti-inflammatory, antibacterial, antioxidant, calms redness", fr: "Anti-inflammatoire, antibactérien, antioxydant, calme les rougeurs" }, risks: { en: "Generally very well tolerated. Very rare sensitisation.", fr: "Généralement très bien toléré. Sensibilisation très rare." }, concerns: ["sensitivity", "acne", "rosacea"], goodFor: ["oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "84012-20-8", aliases: ["houttuynia cordata", "dokudami"] },
  { id: "trehalose", inciName: "Trehalose", name: { en: "Trehalose", fr: "Tréhalose" }, category: "humectant", score: "A", color: "green", comedogenic: 0, description: { en: "A natural sugar with exceptional water-binding properties. Found in organisms that survive extreme dehydration. Protects cell membranes and proteins from drying damage.", fr: "Un sucre naturel aux propriétés de rétention d'eau exceptionnelles. Trouvé dans les organismes qui survivent à la déshydratation extrême. Protège les membranes cellulaires." }, benefits: { en: "Exceptional water retention, cell protection, lightweight hydration", fr: "Rétention d'eau exceptionnelle, protection cellulaire, hydratation légère" }, risks: { en: "None.", fr: "Aucun." }, concerns: ["dryness"], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "99-20-7" },
  { id: "saccharomyces-ferment-filtrate", inciName: "Saccharomyces Ferment Filtrate", name: { en: "Saccharomyces Ferment Filtrate (Pitera)", fr: "Filtrat de fermentation de Saccharomyces (Pitera)" }, category: "active", score: "B", color: "green", comedogenic: 0, description: { en: "Yeast ferment filtrate made famous by SK-II's Facial Treatment Essence. Contains amino acids, minerals, organic acids. Brightens, hydrates, and improves skin texture over time.", fr: "Filtrat de ferment de levure rendu célèbre par l'Essence SK-II. Contient acides aminés, minéraux, acides organiques. Illumine, hydrate et améliore la texture au fil du temps." }, benefits: { en: "Brightening, hydrating, improves texture, rich in nutrients", fr: "Éclat, hydratation, améliore la texture, riche en nutriments" }, risks: { en: "Can irritate fungal acne-prone skin (yeast-derived). Otherwise safe.", fr: "Peut irriter les peaux sujettes à l'acné fongique (dérivé de levure). Sinon sûr." }, concerns: ["anti-aging", "dryness"], goodFor: ["dry", "normal", "combination"], badFor: [], euRestricted: false, aliases: ["pitera", "galactomyces ferment filtrate", "yeast ferment"] },
  // ===========================
  // BATCH 5: UV filters, more actives, trending ingredients
  // ===========================
  { id: "ethylhexyl-triazone", inciName: "Ethylhexyl Triazone", name: { en: "Ethylhexyl Triazone (Uvinul T150)", fr: "Ethylhexyl Triazone (Uvinul T150)" }, category: "sunscreen", score: "A", color: "green", comedogenic: 0, description: { en: "A highly photostable UVB filter used primarily in European sunscreens. Very efficient at low concentrations. Does not degrade in sunlight like older filters.", fr: "Un filtre UVB hautement photostable utilisé principalement dans les crèmes solaires européennes. Très efficace à faible concentration. Ne se dégrade pas au soleil." }, benefits: { en: "Photostable UVB protection, efficient at low %, modern filter", fr: "Protection UVB photostable, efficace à faible %, filtre moderne" }, risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "88122-99-0" },
  { id: "bis-ethylhexyloxyphenol-methoxyphenyl-triazine", inciName: "Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine", name: { en: "Tinosorb S", fr: "Tinosorb S" }, category: "sunscreen", score: "A", color: "green", comedogenic: 0, description: { en: "A broad-spectrum UV filter (UVA + UVB) developed by BASF. One of the most photostable modern filters. Stabilises other UV filters in the formula. EU-approved, not yet FDA-approved.", fr: "Un filtre UV large spectre (UVA + UVB) développé par BASF. L'un des filtres modernes les plus photostables. Stabilise les autres filtres UV. Approuvé UE, pas encore approuvé FDA." }, benefits: { en: "Broad-spectrum UVA+UVB, photostable, stabilises other filters", fr: "Large spectre UVA+UVB, photostable, stabilise les autres filtres" }, risks: { en: "None. One of the safest modern UV filters.", fr: "Aucun. L'un des filtres UV modernes les plus sûrs." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "187393-00-6", aliases: ["tinosorb s"] },
  { id: "diethylamino-hydroxybenzoyl-hexyl-benzoate", inciName: "Diethylamino Hydroxybenzoyl Hexyl Benzoate", name: { en: "Mexoryl 400 (DHHB)", fr: "Mexoryl 400 (DHHB)" }, category: "sunscreen", score: "A", color: "green", comedogenic: 0, description: { en: "The newest generation UVA filter by L'Oreal. Protects against ultra-long UVA rays (UVA1) that penetrate deep into skin. Used in La Roche-Posay Anthelios UVMune 400.", fr: "Le filtre UVA de dernière génération de L'Oréal. Protège contre les UVA ultra-longs (UVA1) qui pénètrent profondément. Utilisé dans La Roche-Posay Anthelios UVMune 400." }, benefits: { en: "Ultra-long UVA1 protection, newest generation, patented by L'Oreal", fr: "Protection UVA1 ultra-longs, dernière génération, breveté par L'Oréal" }, risks: { en: "None known. Very new (limited long-term data, but no concerns raised).", fr: "Aucun connu. Très récent (données long terme limitées, mais aucune préoccupation)." }, concerns: [], goodFor: ["dry", "oily", "combination", "sensitive", "normal"], badFor: [], euRestricted: false, casNumber: "302776-68-7", aliases: ["mexoryl 400", "dhhb", "uvmune 400"] },
  { id: "octinoxate", inciName: "Ethylhexyl Methoxycinnamate", name: { en: "Octinoxate", fr: "Octinoxate" }, category: "sunscreen", score: "D", color: "orange", comedogenic: 0, description: { en: "A chemical UVB filter with endocrine disruption concerns. Banned in Hawaii and Palau for coral reef damage. Being phased out in favour of newer, safer filters.", fr: "Un filtre UVB chimique avec des préoccupations de perturbation endocrinienne. Interdit à Hawaii et Palau pour les dommages aux récifs. Progressivement remplacé par des filtres plus sûrs." }, benefits: { en: "UVB protection, lightweight, cosmetically elegant", fr: "Protection UVB, léger, cosmétiquement élégant" }, risks: { en: "Endocrine disruptor (estrogenic). Coral reef damage. Photo-unstable. Banned in Hawaii/Palau.", fr: "Perturbateur endocrinien (estrogénique). Dommages aux récifs. Photo-instable. Interdit à Hawaii/Palau." }, concerns: [], goodFor: [], badFor: ["sensitive"], euRestricted: true, casNumber: "5466-77-3", aliases: ["ethylhexyl methoxycinnamate", "omi", "parsol mcx"] },
  { id: "galactomyces-ferment-filtrate", inciName: "Galactomyces Ferment Filtrate", name: { en: "Galactomyces Ferment Filtrate", fr: "Filtrat de fermentation de Galactomyces" }, category: "active", score: "B", color: "green", comedogenic: 0, description: { en: "A yeast ferment filtrate similar to SK-II's Pitera. Rich in amino acids, vitamins, and organic acids. Brightens, hydrates, and improves skin texture. Popular in Missha First Treatment Essence.", fr: "Un filtrat de ferment de levure similaire au Pitera de SK-II. Riche en acides aminés, vitamines et acides organiques. Illumine, hydrate et améliore la texture. Populaire dans Missha First Treatment." }, benefits: { en: "Brightening, hydrating, rich in nutrients, improves texture", fr: "Éclat, hydratation, riche en nutriments, améliore la texture" }, risks: { en: "May worsen fungal acne (yeast-derived). Otherwise safe.", fr: "Peut aggraver l'acné fongique (dérivé de levure). Sinon sûr." }, concerns: ["anti-aging", "dryness"], goodFor: ["dry", "normal", "combination"], badFor: [], euRestricted: false },
  { id: "calamine", inciName: "Calamine", name: { en: "Calamine", fr: "Calamine" }, category: "soothing", score: "A", color: "green", comedogenic: 0, description: { en: "A classic anti-itch and soothing mineral (zinc oxide + iron oxide). Used in Mario Badescu Drying Lotion and calamine lotions. Dries out pimples and reduces redness.", fr: "Un minéral classique anti-démangeaisons et apaisant (oxyde de zinc + oxyde de fer). Utilisé dans le Drying Lotion de Mario Badescu. Assèche les boutons et réduit les rougeurs." }, benefits: { en: "Anti-itch, soothing, dries pimples, reduces redness", fr: "Anti-démangeaisons, apaisant, assèche les boutons, réduit les rougeurs" }, risks: { en: "Can be drying. For spot treatment, not full-face.", fr: "Peut dessécher. Pour traitement localisé, pas plein visage." }, concerns: ["acne"], goodFor: ["oily", "combination"], badFor: ["dry"], euRestricted: false, casNumber: "8011-96-9" },
  { id: "sulfur", inciName: "Sulfur", name: { en: "Sulfur", fr: "Soufre" }, category: "active", score: "B", color: "yellow", comedogenic: 0, description: { en: "An ancient anti-acne ingredient with antibacterial, antifungal, and keratolytic properties. Still used in Mario Badescu Drying Lotion and De La Cruz Sulfur Ointment. Less irritating than benzoyl peroxide.", fr: "Un ingrédient anti-acné ancestral aux propriétés antibactériennes, antifongiques et kératolytiques. Encore utilisé dans le Drying Lotion Mario Badescu. Moins irritant que le peroxyde de benzoyle." }, benefits: { en: "Antibacterial, antifungal, keratolytic, less irritating than BP", fr: "Antibactérien, antifongique, kératolytique, moins irritant que le PB" }, risks: { en: "Drying. Strong smell. Can bleach fabrics.", fr: "Desséchant. Odeur forte. Peut décolorer les tissus." }, concerns: ["acne"], goodFor: ["oily", "combination"], badFor: ["dry", "sensitive"], euRestricted: false, casNumber: "7704-34-9" },
  { id: "walnut-shell-powder", inciName: "Juglans Regia Shell Powder", name: { en: "Walnut Shell Powder", fr: "Poudre de coque de noix" }, category: "exfoliant", score: "E", color: "red", comedogenic: 0, description: { en: "A physical exfoliant with jagged, irregular particles that create micro-tears in skin. The controversial ingredient in St. Ives Apricot Scrub. Dermatologists unanimously recommend against it.", fr: "Un exfoliant physique aux particules irrégulières et coupantes qui créent des micro-déchirures. L'ingrédient controversé du gommage St. Ives. Les dermatologues le déconseillent unanimement." }, benefits: { en: "Physical exfoliation (but chemical exfoliants are safer)", fr: "Exfoliation physique (mais les exfoliants chimiques sont plus sûrs)" }, risks: { en: "Causes micro-tears in skin. Irregular sharp particles damage skin barrier. Class action lawsuit against St. Ives. Use AHAs/BHAs instead.", fr: "Cause des micro-déchirures. Particules irrégulières et coupantes endommagent la barrière. Procès contre St. Ives. Utiliser des AHA/BHA à la place." }, concerns: [], goodFor: [], badFor: ["dry", "oily", "combination", "sensitive", "normal"], euRestricted: false, casNumber: "12000-95-8", aliases: ["juglans regia", "walnut shell"] },
  { id: "algae-extract", inciName: "Algae Extract", name: { en: "Algae Extract (Seaweed)", fr: "Extrait d'algue" }, category: "hydrator", score: "B", color: "green", comedogenic: 4, description: { en: "A broad category of marine extracts used in many luxury products (La Mer uses a specific algae ferment). Rich in minerals, amino acids, and antioxidants. Highly comedogenic (4/5).", fr: "Large catégorie d'extraits marins utilisés dans de nombreux produits de luxe (La Mer utilise un ferment d'algue spécifique). Riche en minéraux, acides aminés et antioxydants. Hautement comédogène (4/5)." }, benefits: { en: "Rich in minerals, antioxidant, hydrating, anti-inflammatory", fr: "Riche en minéraux, antioxydant, hydratant, anti-inflammatoire" }, risks: { en: "Highly comedogenic (4/5). Can trigger breakouts on acne-prone skin.", fr: "Hautement comédogène (4/5). Peut déclencher des éruptions sur peau acnéique." }, concerns: ["anti-aging", "dryness"], goodFor: ["dry", "normal"], badFor: ["oily", "combination"], euRestricted: false, aliases: ["seaweed", "kelp", "marine extract"] },
  { id: "ginseng-extract", inciName: "Panax Ginseng Root Extract", name: { en: "Ginseng Extract", fr: "Extrait de ginseng" }, category: "botanical", score: "A", color: "green", comedogenic: 0, description: { en: "Traditional Asian medicinal root with proven anti-aging, antioxidant, and skin-brightening properties. The star ingredient in Sulwhasoo's luxury line. Contains ginsenosides.", fr: "Racine médicinale asiatique traditionnelle aux propriétés anti-âge, antioxydantes et éclaircissantes prouvées. L'ingrédient star de la gamme luxe Sulwhasoo. Contient des ginsénosides." }, benefits: { en: "Anti-aging, antioxidant, brightening, energising, collagen stimulation", fr: "Anti-âge, antioxydant, éclaircissant, énergisant, stimulation du collagène" }, risks: { en: "None at cosmetic concentrations.", fr: "Aucun aux concentrations cosmétiques." }, concerns: ["anti-aging"], goodFor: ["dry", "normal", "combination"], badFor: [], euRestricted: false, casNumber: "50647-08-0", aliases: ["panax ginseng", "korean ginseng", "red ginseng"] },
  { id: "caviar-extract", inciName: "Caviar Extract", name: { en: "Caviar Extract", fr: "Extrait de caviar" }, category: "active", score: "B", color: "green", comedogenic: 0, description: { en: "Luxury ingredient rich in omega-3, phospholipids, amino acids, and minerals. Used in La Prairie's Skin Caviar line. Nourishing but very expensive with limited clinical evidence vs cheaper actives.", fr: "Ingrédient de luxe riche en oméga-3, phospholipides, acides aminés et minéraux. Utilisé dans la gamme Skin Caviar de La Prairie. Nourrissant mais très cher avec des preuves cliniques limitées." }, benefits: { en: "Rich in omega-3, phospholipids, amino acids, nourishing", fr: "Riche en oméga-3, phospholipides, acides aminés, nourrissant" }, risks: { en: "None. But very expensive with limited evidence that it works better than simpler ingredients.", fr: "Aucun. Mais très cher avec des preuves limitées qu'il fonctionne mieux que des ingrédients plus simples." }, concerns: ["anti-aging", "dryness"], goodFor: ["dry", "normal"], badFor: [], euRestricted: false },
  { id: "gold", inciName: "Gold", name: { en: "Colloidal Gold", fr: "Or colloïdal" }, category: "active", score: "C", color: "yellow", comedogenic: 0, description: { en: "Used in luxury products (Tatcha, La Prairie) for anti-inflammatory and antioxidant properties. Very limited clinical evidence for topical gold in skincare. Mostly a marketing ingredient.", fr: "Utilisé dans les produits de luxe (Tatcha, La Prairie) pour ses propriétés anti-inflammatoires et antioxydantes. Preuves cliniques très limitées pour l'or topique. Principalement un ingrédient marketing." }, benefits: { en: "Anti-inflammatory (limited evidence), antioxidant, luxury positioning", fr: "Anti-inflammatoire (preuves limitées), antioxydant, positionnement luxe" }, risks: { en: "No risks but very limited evidence it does anything meaningful topically.", fr: "Aucun risque mais preuves très limitées d'un effet significatif en topique." }, concerns: [], goodFor: ["normal"], badFor: [], euRestricted: false, casNumber: "7440-57-5" },
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
