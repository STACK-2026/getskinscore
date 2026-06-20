// SkinScore editorial team - pen names
// Real expertise positioning, fictional identities

export interface Author {
  id: string;
  name: string;
  role: { en: string; fr: string };
  bio: { en: string; fr: string };
  expertise: string[];
  image?: string;
}

export const authors: Author[] = [
  {
    id: "dr-elena-voss",
    name: "Dr. Elena Voss",
    role: {
      en: "Senior Ingredient Analyst",
      fr: "Analyste sénior en ingrédients",
    },
    bio: {
      en: "Cosmetic science researcher with a background in pharmaceutical chemistry. Specialises in INCI decoding, ingredient safety assessment, and EU regulatory compliance. Reviews every product score for accuracy before publication.",
      fr: "Chercheuse en science cosmétique avec un parcours en chimie pharmaceutique. Spécialisée dans le décodage INCI, l'évaluation de sécurité des ingrédients et la conformité réglementaire UE. Révise chaque score produit avant publication.",
    },
    expertise: ["ingredients", "safety", "EU regulation", "INCI decoding"],
  },
  {
    id: "marc-severin",
    name: "Marc Severin",
    role: {
      en: "Formulation Analyst",
      fr: "Analyste en formulation",
    },
    bio: {
      en: "Former cosmetics formulator turned independent analyst. 8 years in the beauty industry taught him one thing: most products are 90% marketing and 10% formula. Now he reads INCI lists so you don't have to.",
      fr: "Ancien formulateur cosmétique devenu analyste indépendant. 8 ans dans l'industrie beauté lui ont appris une chose : la plupart des produits sont 90% marketing et 10% formule. Maintenant il lit les listes INCI pour que tu n'aies pas à le faire.",
    },
    expertise: ["formulation", "product reviews", "luxury vs drugstore", "dupes"],
  },
  {
    id: "dr-sarah-chen",
    name: "Dr. Sarah Chen",
    role: {
      en: "Dermatology Research Lead",
      fr: "Responsable recherche dermatologique",
    },
    bio: {
      en: "Clinical research background in dermatology with a focus on ingredient efficacy and skin barrier function. Translates peer-reviewed studies into actionable skincare advice. Believes in evidence over trends.",
      fr: "Parcours en recherche clinique dermatologique avec un focus sur l'efficacité des ingrédients et la fonction barrière cutanée. Traduit les études revues par les pairs en conseils skincare actionnables. Croit aux preuves, pas aux tendances.",
    },
    expertise: ["dermatology", "clinical research", "skin barrier", "actives"],
  },
  {
    id: "lina-park",
    name: "Lina Park",
    role: {
      en: "K-beauty & J-beauty Specialist",
      fr: "Spécialiste K-beauty et J-beauty",
    },
    bio: {
      en: "Born in Seoul, based in Paris. Covers Asian skincare innovations, ingredient trends, and the science behind K-beauty and J-beauty routines. Firm believer that the best skincare innovations come from Asia.",
      fr: "Née à Séoul, basée à Paris. Couvre les innovations skincare asiatiques, les tendances ingrédients et la science derrière les routines K-beauty et J-beauty. Convaincue que les meilleures innovations skincare viennent d'Asie.",
    },
    expertise: ["K-beauty", "J-beauty", "Asian skincare", "innovation"],
  },
];

export function getAuthor(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
