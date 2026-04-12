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
      fr: "Analyste senior en ingredients",
    },
    bio: {
      en: "Cosmetic science researcher with a background in pharmaceutical chemistry. Specialises in INCI decoding, ingredient safety assessment, and EU regulatory compliance. Reviews every product score for accuracy before publication.",
      fr: "Chercheuse en science cosmetique avec un parcours en chimie pharmaceutique. Specialisee dans le decodage INCI, l'evaluation de securite des ingredients et la conformite reglementaire UE. Revise chaque score produit avant publication.",
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
      fr: "Ancien formulateur cosmetique devenu analyste independant. 8 ans dans l'industrie beaute lui ont appris une chose : la plupart des produits sont 90% marketing et 10% formule. Maintenant il lit les listes INCI pour que tu n'aies pas a le faire.",
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
      fr: "Parcours en recherche clinique dermatologique avec un focus sur l'efficacite des ingredients et la fonction barriere cutanee. Traduit les etudes revues par les pairs en conseils skincare actionnables. Croit aux preuves, pas aux tendances.",
    },
    expertise: ["dermatology", "clinical research", "skin barrier", "actives"],
  },
  {
    id: "lina-park",
    name: "Lina Park",
    role: {
      en: "K-beauty & J-beauty Specialist",
      fr: "Specialiste K-beauty et J-beauty",
    },
    bio: {
      en: "Born in Seoul, based in Paris. Covers Asian skincare innovations, ingredient trends, and the science behind K-beauty and J-beauty routines. Firm believer that the best skincare innovations come from Asia.",
      fr: "Nee a Seoul, basee a Paris. Couvre les innovations skincare asiatiques, les tendances ingredients et la science derriere les routines K-beauty et J-beauty. Convaincue que les meilleures innovations skincare viennent d'Asie.",
    },
    expertise: ["K-beauty", "J-beauty", "Asian skincare", "innovation"],
  },
];

export function getAuthor(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
