// SkinScore i18n - bilingual EN/FR translation system

type Locale = "en" | "fr";

type TranslationEntry = { en: string; fr: string };

export function getLocale(url: URL): Locale {
  return url.pathname.startsWith("/fr") ? "fr" : "en";
}

export function t(entry: TranslationEntry, locale: Locale): string {
  return entry[locale] || entry.en;
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return `/fr${path === "/" ? "/" : path}`;
}

// All UI translations
export const tr = {
  // Navigation
  nav: {
    home: { en: "Home", fr: "Accueil" },
    rankings: { en: "Rankings", fr: "Classement" },
    compare: { en: "Compare", fr: "Comparer" },
    ingredients: { en: "Ingrédients", fr: "Ingrédients" },
    methodology: { en: "Methodology", fr: "Méthodologie" },
    blog: { en: "Blog", fr: "Blog" },
    getScore: { en: "Get your score", fr: "Obtiens ton score" },
  },

  // Hero
  hero: {
    title: { en: "Know what's in your skincare", fr: "Tes produits de peau, décryptés" },
    subtitle: {
      en: "SkinScore rates every skincare product from A to E. Decode ingredients, compare products, build your perfect routine.",
      fr: "SkinScore analyse chaque produit de soin de A à E. Décode les ingrédients, compare les formules, construis ta routine sur mesure.",
    },
    searchPlaceholder: { en: "Search a product or ingredient...", fr: "Cherche un produit ou un ingredient..." },
    cta: { en: "Score my product", fr: "Analyser mon produit" },
  },

  // Social proof
  stats: {
    products: { en: "Products rated", fr: "Produits notes" },
    ingredients: { en: "Ingrédients decoded", fr: "Ingrédients decodes" },
    brands: { en: "Brands analysed", fr: "Marques analysees" },
  },

  // Problem
  problem: {
    title: { en: "What's really in your skincare?", fr: "Qu'y a-t-il vraiment dans ta skincare ?" },
    text: {
      en: "67% of skincare products contain at least one concerning ingredient. Fragrance, endocrine disruptors, harsh surfactants... hiding behind scientific names most people can't read.",
      fr: "67% des produits skincare contiennent au moins un ingredient preoccupant. Parfum, perturbateurs endocriniens, tensioactifs agressifs... caches derriere des noms scientifiques illisibles.",
    },
  },

  // Features
  features: {
    title: { en: "Skincare, decoded", fr: "La skincare, decodee" },
  },

  // How it works
  howItWorks: {
    title: { en: "How it works", fr: "Comment ca marche" },
    step1: { en: "Search or paste your INCI list", fr: "Cherche ou colle ta liste INCI" },
    step1desc: { en: "Type a product name, paste an ingredient list, or scan a barcode.", fr: "Tape un nom de produit, colle une liste d'ingredients ou scanne un code-barres." },
    step2: { en: "Get your A-to-E score", fr: "Obtiens ton score de A a E" },
    step2desc: { en: "Instant breakdown: efficacy, safety, comedogenicity, transparency, skin-type fit.", fr: "Analyse instantanee : efficacité, sécurité, comédogénicité, transparence, compatibilité peau." },
    step3: { en: "Build your routine", fr: "Construis ta routine" },
    step3desc: { en: "Personalised AM/PM routine based on your skin type, concerns, and budget.", fr: "Routine AM/PM personnalisée selon ton type de peau, tes préoccupations et ton budget." },
  },

  // Concerns
  concerns: {
    title: { en: "Find products for your concern", fr: "Trouve des produits pour ta préoccupation" },
  },

  // Ingredients
  ingredientsSection: {
    title: { en: "Popular ingredients, decoded", fr: "Ingrédients populaires, decodes" },
    viewAll: { en: "View all ingredients", fr: "Voir tous les ingredients" },
  },

  // CTA
  cta: {
    title: { en: "Your skin deserves better than marketing claims", fr: "Ta peau merite mieux que des promesses marketing" },
    subtitle: {
      en: "Join thousands who check before they buy. Free, independent, science-backed.",
      fr: "Rejoins ceux qui vérifient avant d'acheter. Gratuit, indépendant, base sur la science.",
    },
    button: { en: "Score my skincare", fr: "Analyser mes produits" },
  },

  // FAQ
  faq: {
    title: { en: "Frequently asked questions", fr: "Questions fréquentes" },
    q1: { en: "How does SkinScore rate skincare products?", fr: "Comment SkinScore note les produits skincare ?" },
    a1: {
      en: "SkinScore analyses every ingredient in a product's INCI list across five dimensions: efficacy (proven actives like retinol, niacinamide, vitamin C), safety (allergens, irritants, EU-restricted substances), comedogenicity (pore-clogging risk), transparency (full ingredient disclosure, certifications), and skin-type fit. Each dimension is scored and combined into a final A-to-E grade.",
      fr: "SkinScore analyse chaque ingredient de la liste INCI d'un produit selon cinq dimensions : efficacité (actifs prouves comme le retinol, niacinamide, vitamine C), sécurité (allergenes, irritants, substances réglementées UE), comédogénicité (risque d'obstruction des pores), transparence (divulgation complete, certifications) et compatibilité avec le type de peau. Chaque dimension est notee puis combinee en une note finale de A a E.",
    },
    q2: { en: "Is SkinScore independent?", fr: "SkinScore est-il indépendant ?" },
    a2: {
      en: "Yes. SkinScore does not accept payment from brands to influence ratings. Our scoring methodology is fully transparent and based on EU CosIng data, SCCS safety opinions, and peer-reviewed dermatological research.",
      fr: "Oui. SkinScore n'accepte aucun paiement des marques pour influencer les notes. Notre methodologie est entierement transparente, basee sur les données EU CosIng, les avis SCCS et la recherche dermatologique.",
    },
    q3: { en: "What is an INCI list?", fr: "Qu'est-ce qu'une liste INCI ?" },
    a3: {
      en: "INCI (International Nomenclature of Cosmetic Ingredients) is the standardised naming system for cosmetic ingredients used worldwide. Every skincare product sold in the EU must display its full INCI list. SkinScore decodes these scientific names into plain language.",
      fr: "INCI (International Nomenclature of Cosmetic Ingredients) est le systeme de nomenclature standardise des ingredients cosmétiques. Tout produit skincare vendu en UE doit afficher sa liste INCI. SkinScore decode ces noms scientifiques en langage clair.",
    },
    q4: { en: "Can SkinScore recommend a routine?", fr: "SkinScore peut-il recommander une routine ?" },
    a4: {
      en: "Yes. Take our 2-minute skin quiz to get a personalised AM/PM routine recommendation based on your skin type, concerns, and budget. Every product recommended is backed by its SkinScore rating.",
      fr: "Oui. Fais notre quiz peau de 2 minutes pour obtenir une routine AM/PM personnalisée selon ton type de peau, tes préoccupations et ton budget. Chaque produit recommande est soutenu par sa note SkinScore.",
    },
  },

  // Blog
  blog: {
    title: { en: "The Lab", fr: "Le Labo" },
    subtitle: { en: "Science-backed skincare insights", fr: "Décryptages skincare basés sur la science" },
    readMore: { en: "Read more", fr: "Lire la suite" },
  },

  // Product page
  product: {
    overallScore: { en: "Overall score", fr: "Score global" },
    subScores: { en: "Score breakdown", fr: "Detail des scores" },
    efficacy: { en: "Efficacy", fr: "Efficacité" },
    safety: { en: "Safety", fr: "Sécurité" },
    comedogenicity: { en: "Comedogenicity", fr: "Comédogénicité" },
    transparency: { en: "Transparency", fr: "Transparence" },
    skinTypeFit: { en: "Skin-type fit", fr: "Compatibilité peau" },
    ingredients: { en: "Full ingredient list", fr: "Liste complete des ingredients" },
    strengths: { en: "Strengths", fr: "Points forts" },
    weaknesses: { en: "Weaknesses", fr: "Points faibles" },
    alternatives: { en: "Better alternatives", fr: "Meilleures alternatives" },
  },

  // Ingredient page
  ingredient: {
    benefits: { en: "Benefits", fr: "Bienfaits" },
    risks: { en: "Risks & concerns", fr: "Risques et precautions" },
    goodFor: { en: "Best for", fr: "Idéal pour" },
    badFor: { en: "Avoid if", fr: "Éviter si" },
    foundIn: { en: "Found in", fr: "Présent dans" },
  },

  // Footer
  footer: {
    about: { en: "About", fr: "À propos" },
    methodology: { en: "Methodology", fr: "Méthodologie" },
    privacy: { en: "Privacy policy", fr: "Politique de confidentialité" },
    terms: { en: "Terms of service", fr: "Conditions d'utilisation" },
    cookie: { en: "Cookie policy", fr: "Politique des cookies" },
    tagline: {
      en: "Independent skincare ratings based on science, not marketing.",
      fr: "Notes skincare independantes basees sur la science, pas le marketing.",
    },
  },

  // Cookie banner
  cookie: {
    text: {
      en: "We use minimal analytics to improve the site. No personal data is sold or shared with advertisers.",
      fr: "Nous utilisons des analytics minimales pour améliorer le site. Aucune donnée personnelle n'est vendue ou partagee avec des annonceurs.",
    },
    accept: { en: "Accept", fr: "Accepter" },
    decline: { en: "Decline", fr: "Refuser" },
  },

  // Common
  common: {
    home: { en: "Home", fr: "Accueil" },
    viewAll: { en: "View all", fr: "Voir tout" },
    learnMore: { en: "Learn more", fr: "En savoir plus" },
    share: { en: "Share", fr: "Partager" },
  },
};
