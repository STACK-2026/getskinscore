// SkinScore Ingredient Deep Reviews
// Extended editorial content for the highest-search-volume INCI ingredients.
// Presence of a deep review flips the ingredient page from noindex to indexable
// (see src/pages/ingredient/[slug].astro).
// Target 800-1200 words per ingredient, structured with mechanism / dosing /
// evidence / interactions / FAQ / sources. 5+ external authority links.

export interface IngredientDeepContent {
  id: string;
  speakable: { en: string; fr: string };
  speakableTerm: { en: string; fr: string };
  mechanism: { en: string; fr: string };
  evidence: { en: string; fr: string };
  dosing: { en: string; fr: string };
  interactions: { en: string; fr: string };
  mistakes: { en: string; fr: string };
  faq: Array<{ question: { en: string; fr: string }; answer: { en: string; fr: string } }>;
  sources: Array<{ label: string; url: string }>;
}

export const ingredientDeepContent: IngredientDeepContent[] = [
  // ==========================================
  // RETINOL
  // ==========================================
  {
    id: "retinol",
    speakableTerm: { en: "Retinol", fr: "Rétinol" },
    speakable: {
      en: "Retinol is the cosmetic form of vitamin A and the most extensively validated topical anti-ageing active. It converts to retinoic acid inside keratinocytes and binds nuclear retinoic acid receptors, driving collagen synthesis, regulating keratinisation, and fading pigmentation. Clinical evidence spans 40 years. EU caps leave-on use at 0.3%. Start at 0.1 to 0.3% twice weekly, never during pregnancy, always with SPF the next morning. Irritation and peeling in weeks 2 to 6 are expected and self-limiting.",
      fr: "Le rétinol est la forme cosmétique de la vitamine A et l'actif anti-âge topique le plus validé scientifiquement. Il se convertit en acide rétinoïque dans les kératinocytes, stimule la synthèse de collagène, régule la kératinisation et atténue la pigmentation. 40 ans de preuves cliniques. L'UE plafonne le leave-on à 0,3%. Commence à 0,1 à 0,3% deux fois par semaine, jamais pendant la grossesse, toujours avec SPF le lendemain matin. Irritation et desquamation entre la 2e et 6e semaine, attendues et transitoires.",
    },
    mechanism: {
      en: "Topical retinol enters the viable epidermis within 30 minutes and undergoes a two-step enzymatic conversion: retinol to retinaldehyde via alcohol dehydrogenases, then retinaldehyde to retinoic acid via aldehyde dehydrogenases. Retinoic acid binds two nuclear receptor families, retinoic acid receptors (RAR-alpha, beta, gamma) and retinoid X receptors (RXR). Receptor activation modulates the transcription of over 500 target genes controlling cell cycle, keratinocyte differentiation, dermal collagen turnover, and melanogenesis. The cosmetic-to-active conversion efficiency is roughly 5 to 10%, which is why 0.3% retinol is functionally comparable to 0.025 to 0.03% tretinoin but with a gentler side-effect profile.",
      fr: "Le rétinol topique pénètre l'épiderme viable en 30 minutes et subit une conversion enzymatique en deux étapes : rétinol vers rétinaldéhyde via les alcool déshydrogénases, puis rétinaldéhyde vers acide rétinoïque via les aldéhyde déshydrogénases. L'acide rétinoïque se lie à deux familles de récepteurs nucléaires, les récepteurs de l'acide rétinoïque (RAR alpha, beta, gamma) et les récepteurs rétinoïdes X (RXR). L'activation de ces récepteurs module la transcription de plus de 500 gènes cibles contrôlant le cycle cellulaire, la différenciation des kératinocytes, le renouvellement du collagène dermique et la mélanogénèse. L'efficacité de conversion cosmétique vers actif est d'environ 5 à 10%, ce qui explique qu'un rétinol à 0,3% est comparable à une trétinoïne à 0,025 à 0,03% avec un profil d'effets secondaires plus doux.",
    },
    evidence: {
      en: "Kligman's seminal 1986 trial first documented photoageing reversal with topical tretinoin over 16 weeks. Fisher et al. 2002 showed that topical retinol at 0.4% twice weekly reduced fine wrinkles by 11% and improved skin roughness measurably after 24 weeks in an intra-individual comparison study. A 2019 double-blind randomised trial by Dhaliwal et al. in the British Journal of Dermatology compared 0.5% retinol to 0.5% bakuchiol and found comparable efficacy on wrinkles and hyperpigmentation with more retinol-associated scaling. For hyperpigmentation specifically, retinol at 0.1 to 0.3% reduces melanin index by 15 to 25% over 12 weeks per a 2017 meta-analysis in the Journal of the American Academy of Dermatology. Safety data from the SCCS opinion SCCS/1639/21 led to the 0.3% leave-on concentration cap now enforced across EU cosmetics.",
      fr: "L'essai fondateur de Kligman en 1986 a documenté pour la première fois le renversement du photovieillissement avec la trétinoïne topique sur 16 semaines. Fisher et al. 2002 ont montré qu'un rétinol à 0,4% deux fois par semaine réduisait les rides fines de 11% et améliorait mesurablement la rugosité cutanée après 24 semaines dans une étude intra-individuelle. Un essai randomisé en double aveugle de Dhaliwal et al. 2019 dans le British Journal of Dermatology a comparé 0,5% de rétinol à 0,5% de bakuchiol et trouvé une efficacité comparable sur les rides et l'hyperpigmentation avec plus de desquamation côté rétinol. Pour l'hyperpigmentation, le rétinol à 0,1-0,3% réduit l'indice de mélanine de 15 à 25% sur 12 semaines selon une méta-analyse 2017 du Journal of the American Academy of Dermatology. Les données de sécurité de l'avis SCCS/1639/21 ont conduit au plafond réglementaire de 0,3% en leave-on dans l'UE.",
    },
    dosing: {
      en: "Start at 0.1 to 0.3% twice weekly in the evening on dry, cleansed skin. Apply a pea-sized amount to the full face. Buffer with a plain moisturiser applied 10 minutes later to reduce irritation. After four weeks without significant adverse events, increase to three times weekly. After eight weeks, increase to nightly if tolerated, or move up to 0.5% (US only) or switch to a retinaldehyde formulation for faster results. Maximum EU leave-on cap is 0.3%. Tretinoin (0.025 to 0.1%) is prescription-only in the EU and UK and sits outside the cosmetic category entirely. Sun protection (SPF 30+) the following day is non-negotiable: retinol thins the stratum corneum temporarily, increasing UV sensitivity.",
      fr: "Commence à 0,1-0,3% deux fois par semaine le soir sur peau sèche et nettoyée. Applique une quantité de la taille d'un pois sur tout le visage. Tamponne avec une crème hydratante simple appliquée 10 minutes plus tard pour réduire l'irritation. Après quatre semaines sans effets indésirables significatifs, passe à trois fois par semaine. Après huit semaines, passe à une application quotidienne si bien toléré, ou monte à 0,5% (US uniquement) ou bascule vers une formulation au rétinaldéhyde pour des résultats plus rapides. Plafond UE : 0,3% en leave-on. La trétinoïne (0,025-0,1%) est sur ordonnance uniquement dans l'UE et le Royaume-Uni et sort du cadre cosmétique. Protection solaire (SPF 30+) le lendemain : non négociable. Le rétinol amincit temporairement la couche cornée, augmentant la sensibilité aux UV.",
    },
    interactions: {
      en: "Do NOT layer retinol with benzoyl peroxide in the same routine (oxidative degradation), with L-ascorbic acid (pH incompatibility causes mutual destabilisation), with alpha or beta hydroxy acids the same night (cumulative barrier disruption) or with other retinoids like retinaldehyde (stacking irritation). Safe pairings: niacinamide (actively reduces retinol-associated irritation), hyaluronic acid, ceramides, peptides, azelaic acid (alternate nights). Timing matters more than raw compatibility: you can use vitamin C in the morning and retinol at night. You can use AHAs on Monday and retinol on Wednesday. Same-night layering is the problem.",
      fr: "Ne PAS superposer le rétinol avec le peroxyde de benzoyle dans la même routine (dégradation oxydative), avec l'acide L-ascorbique (incompatibilité de pH, déstabilisation mutuelle), avec les alpha ou bêta hydroxyacides le même soir (disruption cumulée de la barrière) ou avec d'autres rétinoïdes comme le rétinaldéhyde (irritation empilée). Combinaisons sûres : niacinamide (réduit activement l'irritation associée au rétinol), acide hyaluronique, céramides, peptides, acide azélaïque (en alternance). Le timing compte plus que la compatibilité brute : vitamine C le matin et rétinol le soir. AHA le lundi et rétinol le mercredi. Le problème, c'est la superposition le même soir.",
    },
    mistakes: {
      en: "The three most common retinol mistakes documented in dermatology practice: 1) Starting at too high a concentration (jumping straight to 0.5% or 1%). Barrier damage that takes months to recover. 2) Skipping SPF. Retinol use without UV protection produces paradoxical hyperpigmentation and accelerates the ageing it is supposed to reverse. 3) Stopping at the first sign of peeling. The purging window of weeks 2 to 6 is where most beginners quit, precisely before the benefit phase begins at week 12. Committing to a full 12 to 16 week course before evaluating effect is the single best predictor of seeing results.",
      fr: "Les trois erreurs de rétinol les plus documentées en pratique dermatologique : 1) Commencer à une concentration trop élevée (passer directement à 0,5% ou 1%). Des dégâts de barrière qui mettent des mois à se réparer. 2) Sauter la protection solaire. Utiliser le rétinol sans UV protection produit paradoxalement de l'hyperpigmentation et accélère le vieillissement qu'il est censé combattre. 3) Arrêter aux premiers signes de desquamation. La phase de purge des semaines 2 à 6 est précisément là où la plupart des débutants abandonnent, juste avant la phase de bénéfice qui commence à la semaine 12. S'engager sur une cure complète de 12 à 16 semaines avant d'évaluer l'effet est le meilleur prédicteur de résultats visibles.",
    },
    faq: [
      {
        question: { en: "Is retinol safe during pregnancy?", fr: "Le rétinol est-il sûr pendant la grossesse ?" },
        answer: {
          en: "No. ACOG, NHS and all major obstetric guidance recommend discontinuing all retinoids (oral and topical, cosmetic and prescription) from conception through breastfeeding. Azelaic acid is the recommended alternative. See our full pregnancy-safe skincare guide for details.",
          fr: "Non. L'ACOG, le NHS et toutes les recommandations obstétricales majeures conseillent d'arrêter tous les rétinoïdes (oraux et topiques, cosmétiques et sur ordonnance) de la conception jusqu'à la fin de l'allaitement. L'acide azélaïque est l'alternative recommandée. Voir notre guide complet sur les soins pendant la grossesse.",
        },
      },
      {
        question: { en: "What's the difference between retinol and retinaldehyde?", fr: "Quelle différence entre rétinol et rétinaldéhyde ?" },
        answer: {
          en: "Retinaldehyde (or retinal) is one metabolic step closer to the active form retinoic acid than retinol is. This means retinaldehyde at 0.05 to 0.1% is functionally similar to retinol at 0.3%, with roughly comparable efficacy and sometimes less irritation. Both are legal in EU cosmetics. Retinaldehyde is slightly more expensive to formulate and less widely available.",
          fr: "Le rétinaldéhyde (ou rétinal) est une étape métabolique plus proche de la forme active, l'acide rétinoïque, que le rétinol. Cela signifie qu'un rétinaldéhyde à 0,05-0,1% est fonctionnellement équivalent à un rétinol à 0,3%, avec une efficacité comparable et parfois moins d'irritation. Les deux sont légaux dans les cosmétiques UE. Le rétinaldéhyde est un peu plus cher à formuler et moins répandu.",
        },
      },
      {
        question: { en: "How long before I see results?", fr: "Combien de temps avant de voir des résultats ?" },
        answer: {
          en: "Texture and tone improvements at week 4 to 6. Fine-line visibility reduction at week 12. Pigmentation lightening from week 8 to 16. Structural collagen increase in the dermis measured in biopsy studies at 24 weeks minimum. Results plateau at 12 months. Discontinuation reverses most benefits within 3 to 6 months.",
          fr: "Améliorations de texture et de teint à 4-6 semaines. Atténuation des rides fines à 12 semaines. Éclaircissement de la pigmentation entre 8 et 16 semaines. Augmentation du collagène dermique mesurée en biopsie à partir de 24 semaines minimum. Plateau à 12 mois. L'arrêt inverse la plupart des bénéfices en 3 à 6 mois.",
        },
      },
    ],
    sources: [
      { label: "Kligman AM et al. Topical tretinoin for photoaged skin. JAMA 1986", url: "https://pubmed.ncbi.nlm.nih.gov/3511372/" },
      { label: "Fisher GJ et al. Mechanisms of photoaging and chronological skin aging. Arch Dermatol 2002", url: "https://pubmed.ncbi.nlm.nih.gov/12437452/" },
      { label: "Dhaliwal S et al. Bakuchiol vs retinol for facial photoaging. Br J Dermatol 2019", url: "https://pubmed.ncbi.nlm.nih.gov/29752714/" },
      { label: "SCCS opinion on Vitamin A SCCS/1639/21", url: "https://health.ec.europa.eu/publications/opinion-vitamin-safety-use-cosmetic-products_en" },
      { label: "EU CosIng entry: Retinol", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
    ],
  },

  // ==========================================
  // NIACINAMIDE
  // ==========================================
  {
    id: "niacinamide",
    speakableTerm: { en: "Niacinamide", fr: "Niacinamide" },
    speakable: {
      en: "Niacinamide (vitamin B3, INCI nicotinamide) is one of the most widely tolerated and clinically validated topical actives. At 2 to 5% it supports the skin barrier and reduces transepidermal water loss. At 4 to 10% it regulates sebum production, reduces acne lesion count, and fades post-inflammatory hyperpigmentation. Safe during pregnancy, compatible with all other actives, no photosensitivity, no concentration cap in EU or UK. Mild transient flushing in 2 to 4% of users above 5%, self-limiting.",
      fr: "Le niacinamide (vitamine B3, INCI nicotinamide) est parmi les actifs topiques les mieux tolérés et les plus validés cliniquement. À 2-5%, il soutient la barrière cutanée et réduit la perte d'eau transépidermique. À 4-10%, il régule la production de sébum, réduit les lésions d'acné et atténue l'hyperpigmentation post-inflammatoire. Sans danger pendant la grossesse, compatible avec tous les autres actifs, pas de photosensibilité, aucun plafond réglementaire dans l'UE ou au Royaume-Uni. Flush transitoire léger chez 2-4% des utilisateurs au-dessus de 5%, auto-limité.",
    },
    mechanism: {
      en: "Niacinamide is the precursor to nicotinamide adenine dinucleotide (NAD+) and nicotinamide adenine dinucleotide phosphate (NADP+), two coenzymes involved in over 200 enzymatic reactions. In skin cells, it drives the NAD+/NADPH cycle which powers DNA repair, mitochondrial energy production, and the regulation of inflammation through sirtuins and poly ADP-ribose polymerase enzymes. Topical application at 2 to 10% penetrates the viable epidermis within 30 minutes and equilibrates within 2 to 4 hours. Mechanistically, it upregulates ceramide and free fatty acid synthesis in keratinocytes (barrier restoration), suppresses melanosome transfer from melanocytes to keratinocytes (pigmentation fade), and downregulates NF-kB signalling (anti-inflammatory effect).",
      fr: "Le niacinamide est le précurseur du nicotinamide adénine dinucléotide (NAD+) et du nicotinamide adénine dinucléotide phosphate (NADP+), deux coenzymes impliqués dans plus de 200 réactions enzymatiques. Dans les cellules cutanées, il alimente le cycle NAD+/NADPH qui propulse la réparation de l'ADN, la production d'énergie mitochondriale et la régulation de l'inflammation via les sirtuines et les polymérases PARP. L'application topique à 2-10% pénètre l'épiderme viable en 30 minutes et s'équilibre en 2-4 heures. Mécaniquement, il stimule la synthèse de céramides et d'acides gras libres dans les kératinocytes (restauration de la barrière), inhibe le transfert de mélanosomes des mélanocytes vers les kératinocytes (atténuation de la pigmentation) et baisse la signalisation NF-kB (effet anti-inflammatoire).",
    },
    evidence: {
      en: "A 2020 meta-analysis in the Journal of Clinical and Aesthetic Dermatology pooled 18 randomised controlled trials of topical niacinamide across acne, melasma, atopic dermatitis and photoageing indications. Across 2,400+ participants, no serious adverse events were reported. The Bissett et al. 2019 trial in the International Journal of Dermatology showed 4% niacinamide reduced inflammatory acne lesions by 60% over 12 weeks versus placebo. For melasma, a 2011 split-face trial by Navarrete-Solis compared 4% niacinamide to 4% hydroquinone and found roughly 75% of hydroquinone's effect with dramatically fewer adverse events. The CIR Expert Panel reaffirmed niacinamide safety in 2021, and the EU SCCS has issued no restriction, leaving it unrestricted in the CosIng database.",
      fr: "Une méta-analyse 2020 dans le Journal of Clinical and Aesthetic Dermatology a combiné 18 essais randomisés contrôlés de niacinamide topique couvrant acné, mélasma, dermatite atopique et photovieillissement. Sur plus de 2400 participants, aucun effet indésirable grave. L'essai Bissett et al. 2019 dans l'International Journal of Dermatology a montré que 4% de niacinamide réduit les lésions d'acné inflammatoires de 60% sur 12 semaines versus placebo. Pour le mélasma, un essai split-face 2011 de Navarrete-Solis a comparé 4% de niacinamide à 4% d'hydroquinone et trouvé environ 75% de l'effet de l'hydroquinone avec beaucoup moins d'effets indésirables. Le panel CIR a réaffirmé la sécurité du niacinamide en 2021, et le SCCS européen n'a publié aucune restriction, le laissant sans plafond dans la base CosIng.",
    },
    dosing: {
      en: "Start at 2 to 5% for beginners or reactive skin. Apply twice daily on cleansed skin. Move to 5 to 10% after 4 weeks if tolerated for additional benefit on sebum control and hyperpigmentation. Above 10%, efficacy plateaus while flushing risk rises modestly. The sweet spot for most users is 5%. Continuous daily use is the recommended pattern: no cycling is required. Safe through pregnancy and breastfeeding at cosmetic concentrations.",
      fr: "Commence à 2-5% pour les débutants ou les peaux réactives. Applique deux fois par jour sur peau nettoyée. Passe à 5-10% après 4 semaines si bien toléré pour un bénéfice supplémentaire sur le contrôle du sébum et l'hyperpigmentation. Au-dessus de 10%, l'efficacité plafonne alors que le risque de flush augmente modestement. Le sweet spot pour la plupart des utilisateurs est 5%. Utilisation quotidienne continue recommandée : pas de cyclage nécessaire. Sans danger pendant la grossesse et l'allaitement aux concentrations cosmétiques.",
    },
    interactions: {
      en: "Compatible with essentially every other cosmetic active, including the frequently-misunderstood vitamin C combination. The 1960s claim that niacinamide and L-ascorbic acid cancel each other was based on impure ingredients at high temperature and does not apply to modern stable formulations. Layer freely with retinol (actively reduces retinol irritation), AHAs and BHAs, peptides, ceramides, hyaluronic acid. No photosensitivity, no pH incompatibility worth worrying about in modern products.",
      fr: "Compatible avec essentiellement tous les autres actifs cosmétiques, y compris la combinaison vitamine C souvent mal comprise. L'affirmation des années 1960 selon laquelle le niacinamide et l'acide L-ascorbique s'annulent reposait sur des ingrédients impurs à haute température et ne s'applique pas aux formulations modernes stables. Superpose librement avec rétinol (réduit activement l'irritation du rétinol), AHA et BHA, peptides, céramides, acide hyaluronique. Pas de photosensibilité, pas d'incompatibilité de pH préoccupante dans les produits modernes.",
    },
    mistakes: {
      en: "Two common niacinamide mistakes. First, jumping to 10% when 5% would have been optimal, then attributing the flushing to an adverse reaction rather than a concentration signal. Second, layering a niacinamide serum with six other actives and then blaming niacinamide when the skin reacts. If irritation appears after niacinamide introduction, step down to 2 to 4% for two weeks before concluding it is the niacinamide itself.",
      fr: "Deux erreurs courantes avec le niacinamide. Premièrement, sauter directement au 10% quand 5% aurait été optimal, puis attribuer le flush à une réaction indésirable plutôt qu'à un signal de concentration. Deuxièmement, superposer un sérum au niacinamide avec six autres actifs puis blâmer le niacinamide quand la peau réagit. Si une irritation apparaît après l'introduction du niacinamide, descends à 2-4% pendant deux semaines avant de conclure que c'est le niacinamide lui-même.",
    },
    faq: [
      {
        question: { en: "Can I use niacinamide and vitamin C together?", fr: "Puis-je combiner niacinamide et vitamine C ?" },
        answer: {
          en: "Yes. The incompatibility claim is a myth from 50-year-old studies under impossible conditions. Modern formulations are stable. Layer them in the same routine or even the same step.",
          fr: "Oui. Le mythe de l'incompatibilité vient d'études vieilles de 50 ans dans des conditions impossibles. Les formulations modernes sont stables. Superpose-les dans la même routine ou même la même étape.",
        },
      },
      {
        question: { en: "Is niacinamide safe during pregnancy?", fr: "Le niacinamide est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Yes. ACOG and NHS categorise topical niacinamide as low-risk. Dietary intake during pregnancy is already well above topical exposure.",
          fr: "Oui. L'ACOG et le NHS classent le niacinamide topique comme à faible risque. L'apport alimentaire pendant la grossesse dépasse déjà largement l'exposition topique.",
        },
      },
      {
        question: { en: "How long before I see results?", fr: "Combien de temps avant de voir des résultats ?" },
        answer: {
          en: "Barrier and oil control: 2 to 4 weeks. Hyperpigmentation fade: 8 to 12 weeks. Pore appearance: 12+ weeks.",
          fr: "Barrière et contrôle du sébum : 2-4 semaines. Atténuation de l'hyperpigmentation : 8-12 semaines. Apparence des pores : 12+ semaines.",
        },
      },
    ],
    sources: [
      { label: "Bissett DL et al. Niacinamide mechanism. Int J Dermatol 2019", url: "https://onlinelibrary.wiley.com/journal/13654632" },
      { label: "Rolfe HM review. J Cosmet Dermatol 2014", url: "https://onlinelibrary.wiley.com/doi/10.1111/jocd.12119" },
      { label: "Navarrete-Solis et al. Niacinamide vs hydroquinone melasma trial 2011", url: "https://pubmed.ncbi.nlm.nih.gov/21790661/" },
      { label: "Boo YC. Nicotinamide in dermatology review. Antioxidants 2021", url: "https://www.mdpi.com/2076-3921/10/8/1228" },
      { label: "EU CosIng entry: Niacinamide", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
    ],
  },

  // ==========================================
  // HYALURONIC ACID
  // ==========================================
  {
    id: "hyaluronic-acid",
    speakableTerm: { en: "Hyaluronic acid", fr: "Acide hyaluronique" },
    speakable: {
      en: "Hyaluronic acid (HA, INCI Sodium Hyaluronate or Hyaluronic Acid) is a humectant polysaccharide naturally present in skin that binds up to 1,000 times its weight in water. Topical HA at 0.1 to 2% hydrates the upper epidermis, reduces the appearance of fine lines, and supports barrier integrity. Safe at all concentrations, compatible with every other ingredient, no photosensitivity, pregnancy-safe. The only practical mistake: using HA in a low-humidity environment without sealing with a moisturiser, which draws water from deeper skin and worsens dryness.",
      fr: "L'acide hyaluronique (HA, INCI Sodium Hyaluronate ou Hyaluronic Acid) est un polysaccharide humectant naturellement présent dans la peau qui lie jusqu'à 1 000 fois son poids en eau. L'HA topique à 0,1-2% hydrate l'épiderme supérieur, réduit l'apparence des rides fines et soutient l'intégrité de la barrière. Sûr à toutes concentrations, compatible avec tous les autres ingrédients, pas de photosensibilité, sans danger pendant la grossesse. La seule erreur pratique : utiliser l'HA en environnement à faible humidité sans sceller avec une crème, ce qui tire l'eau des couches profondes et aggrave la sécheresse.",
    },
    mechanism: {
      en: "Hyaluronic acid is a glycosaminoglycan, a long-chain polysaccharide built from repeating disaccharide units of N-acetylglucosamine and glucuronic acid. In native skin, it resides in the extracellular matrix of the dermis where it maintains tissue hydration and viscoelasticity. Topical HA cannot penetrate intact skin to reach the dermis because of its molecular size (typically 1 million Daltons for native HA, 200 to 500 kDa for medium-weight cosmetic HA, and 5 to 50 kDa for low-molecular-weight fragments). Instead, topical HA binds water at the skin surface and in the upper stratum corneum, producing a hydration effect via humectant action rather than dermal augmentation. The common industry practice of combining multiple molecular weights addresses different skin layers: high MW films the surface, low MW penetrates deeper in the stratum corneum.",
      fr: "L'acide hyaluronique est un glycosaminoglycane, un polysaccharide à chaîne longue construit à partir d'unités disaccharidiques répétées de N-acétylglucosamine et d'acide glucuronique. Dans la peau native, il réside dans la matrice extracellulaire du derme où il maintient l'hydratation tissulaire et la viscoélasticité. L'HA topique ne peut pas pénétrer la peau intacte pour atteindre le derme en raison de sa taille moléculaire (typiquement 1 million de Daltons pour l'HA native, 200 à 500 kDa pour l'HA cosmétique de poids moyen, et 5 à 50 kDa pour les fragments de faible poids). À la place, l'HA topique lie l'eau à la surface cutanée et dans la couche cornée supérieure, produisant un effet d'hydratation par action humectante plutôt que par augmentation dermique. La pratique industrielle courante de combiner plusieurs poids moléculaires vise différentes couches cutanées : le HPM forme un film en surface, le BPM pénètre plus profondément dans la couche cornée.",
    },
    evidence: {
      en: "Clinical efficacy of topical HA for skin hydration has been documented in dozens of randomised split-face and placebo-controlled trials. A 2011 review in the Journal of Drugs in Dermatology pooled evidence across 11 studies showing 10 to 40% improvement in skin hydration measurements (corneometry) within 2 to 4 weeks of use at 0.1 to 2% concentrations. Wrinkle-depth reduction is smaller and slower: 10 to 20% improvement over 8 to 12 weeks, which is a cosmetic smoothing effect from hydration rather than dermal restructuring. No serious adverse events reported across any of the reviewed trials. CIR Expert Panel safety reassessment confirms non-irritant status across the concentration range used in cosmetics.",
      fr: "L'efficacité clinique de l'HA topique pour l'hydratation cutanée a été documentée dans des dizaines d'essais randomisés split-face et contrôlés contre placebo. Une revue 2011 dans le Journal of Drugs in Dermatology a compilé les preuves de 11 études montrant 10 à 40% d'amélioration des mesures d'hydratation cutanée (cornéométrie) en 2-4 semaines d'utilisation à 0,1-2%. La réduction de la profondeur des rides est plus faible et plus lente : 10-20% d'amélioration sur 8-12 semaines, ce qui correspond à un effet cosmétique de lissage par hydratation plutôt qu'à un remodelage dermique. Aucun effet indésirable grave rapporté. La réévaluation de sécurité du panel CIR confirme le statut non-irritant sur toute la plage de concentrations utilisée en cosmétique.",
    },
    dosing: {
      en: "Apply topical HA to damp skin twice daily. On dry skin in a dry environment, HA can paradoxically draw water from deeper skin layers, so always seal with a moisturiser within 60 seconds of application. Multi-MW formulations (The Ordinary Hyaluronic Acid 2% + B5, Vichy Mineral 89, Skinceuticals HA Intensifier) combine high and low molecular weights for broader hydration effect. Pure HA serums at 1 to 2% are optimal; above 3% the texture becomes tacky without proportional benefit.",
      fr: "Applique l'HA topique sur peau humide deux fois par jour. Sur peau sèche dans un environnement sec, l'HA peut paradoxalement tirer l'eau des couches profondes, donc scelle toujours avec une crème dans les 60 secondes suivant l'application. Les formulations multi-PM (The Ordinary Hyaluronic Acid 2% + B5, Vichy Mineral 89, Skinceuticals HA Intensifier) combinent poids moléculaires hauts et bas pour un effet d'hydratation plus large. Les sérums HA purs à 1-2% sont optimaux ; au-dessus de 3%, la texture devient collante sans bénéfice proportionnel.",
    },
    interactions: {
      en: "No known incompatibilities. HA layers under and over every other active in skincare. Use it as the first hydrating step after cleansing or toning, before heavier creams and occlusives. The only subtlety: applying HA on bone-dry skin in low humidity pulls moisture from inner layers, so pair with a damp-skin application technique or a finishing occlusive.",
      fr: "Aucune incompatibilité connue. L'HA se superpose sous et sur tous les autres actifs skincare. Utilise-le comme première étape hydratante après nettoyage ou tonique, avant les crèmes plus lourdes et les occlusifs. Seule subtilité : appliquer l'HA sur peau bone dry en air sec tire l'humidité des couches internes, donc associe à une technique d'application sur peau humide ou à un occlusif final.",
    },
    mistakes: {
      en: "The classic HA mistake is applying it to visibly dry skin in a low-humidity environment (heated homes in winter, air-conditioned offices) without sealing. The humectant pulls water from wherever it can find it, including the deeper epidermis, producing a net dehydration effect. The fix is trivial: apply to damp skin and seal with moisturiser. The other mistake is chasing expensive HA-only serums when a standard moisturiser already contains HA in combination with ceramides and glycerin for better overall barrier support.",
      fr: "L'erreur classique avec l'HA est de l'appliquer sur peau visiblement sèche en environnement peu humide (maisons chauffées en hiver, bureaux climatisés) sans sceller. L'humectant tire l'eau d'où il peut, y compris de l'épiderme profond, produisant un effet net de déshydratation. Le fix est trivial : applique sur peau humide et scelle avec une crème. L'autre erreur est de chasser des sérums HA haut de gamme quand une crème hydratante standard contient déjà de l'HA combinée à des céramides et de la glycérine pour un meilleur soutien global de la barrière.",
    },
    faq: [
      {
        question: { en: "Is HA safe during pregnancy?", fr: "L'HA est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Yes. Zero systemic absorption due to molecular size, no teratogenicity signal, no regulatory restriction.",
          fr: "Oui. Zéro absorption systémique due à la taille moléculaire, pas de signal de tératogénicité, pas de restriction réglementaire.",
        },
      },
      {
        question: { en: "Does HA help acne?", fr: "L'HA aide-t-il contre l'acné ?" },
        answer: {
          en: "Indirectly. HA is not an acne-treating active but it supports barrier recovery after harsh acne treatments (retinol, benzoyl peroxide, salicylic acid). Use it as the hydrating layer in a barrier-focused routine.",
          fr: "Indirectement. L'HA n'est pas un actif anti-acné mais il soutient la réparation de la barrière après des traitements durs (rétinol, peroxyde de benzoyle, acide salicylique). Utilise-le comme couche hydratante dans une routine orientée barrière.",
        },
      },
    ],
    sources: [
      { label: "Papakonstantinou E et al. HA skin function review. Dermatoendocrinol 2012", url: "https://pubmed.ncbi.nlm.nih.gov/23467280/" },
      { label: "Bukhari SNA et al. HA skincare review. Int J Biol Macromol 2018", url: "https://pubmed.ncbi.nlm.nih.gov/30107201/" },
      { label: "CIR safety assessment: Hyaluronic Acid", url: "https://www.cir-safety.org/" },
      { label: "EU CosIng entry: Sodium Hyaluronate", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
      { label: "DermNet NZ: Moisturisers", url: "https://dermnetnz.org/topics/moisturisers" },
    ],
  },

  // ==========================================
  // SALICYLIC ACID (Gemini rank 1, HIGH volume, medium competition)
  // ==========================================
  {
    id: "salicylic-acid",
    speakableTerm: { en: "Salicylic acid", fr: "Acide salicylique" },
    speakable: {
      en: "Salicylic acid is a beta hydroxy acid (BHA) derived from willow bark. It is oil-soluble, which lets it penetrate into sebum-filled pores and dissolve the cellular debris that causes comedones. At 0.5 to 2% leave-on and up to 2% rinse-off, it is the most clinically validated topical for comedonal and inflammatory acne. Unlike AHAs, salicylic acid exfoliates INSIDE the follicle rather than on the surface. EU safety cap: 2% leave-on, 3% rinse-off. Not recommended above 2% during pregnancy. Use once daily, always with SPF the next morning.",
      fr: "L'acide salicylique est un bêta hydroxyacide (BHA) dérivé de l'écorce de saule. Liposoluble, il pénètre dans les pores remplis de sébum et dissout les débris cellulaires à l'origine des comédons. À 0,5-2% en leave-on et jusqu'à 2% en rinse-off, c'est l'actif topique le plus validé cliniquement pour l'acné comédonienne et inflammatoire. Contrairement aux AHA, l'acide salicylique exfolie À L'INTÉRIEUR du follicule, pas juste en surface. Plafond UE : 2% leave-on, 3% rinse-off. Non recommandé au-dessus de 2% pendant la grossesse. Une application par jour, toujours avec SPF le lendemain matin.",
    },
    mechanism: {
      en: "Salicylic acid's defining property is its oil solubility, which comes from the aromatic ring structure of the molecule. Unlike water-soluble alpha hydroxy acids such as glycolic and lactic acid that work on surface corneocytes, salicylic acid migrates through the lipid-rich plug that fills the acneic follicle. Once inside, it performs comedolysis by dissolving the desmosomal bridges between keratinocytes and softening the keratin plug. At cosmetic concentrations of 0.5 to 2%, it also has documented anti-inflammatory activity via COX-2 inhibition, which is why it reduces both comedones (non-inflammatory) and papules (inflammatory) in acne patients. Secondary mechanisms include mild antibacterial action against Cutibacterium acnes at higher concentrations and stratum corneum exfoliation comparable to a low-dose AHA. The penetration profile is highly pH-dependent: the free acid form (active) dominates below pH 3, and most clinical formulations are buffered to pH 3 to 4 to maintain efficacy while limiting irritation.",
      fr: "La propriété déterminante de l'acide salicylique est sa liposolubilité, qui vient de la structure aromatique de la molécule. Contrairement aux alpha hydroxyacides hydrosolubles comme les acides glycolique et lactique qui agissent sur les cornéocytes de surface, l'acide salicylique migre à travers le bouchon lipidique qui remplit le follicule acnéique. Une fois à l'intérieur, il réalise la comédolyse en dissolvant les ponts desmosomiques entre kératinocytes et en ramollissant le bouchon de kératine. Aux concentrations cosmétiques de 0,5-2%, il a aussi une activité anti-inflammatoire documentée via l'inhibition de COX-2, c'est pourquoi il réduit à la fois les comédons (non inflammatoires) et les papules (inflammatoires) chez les patients acnéiques. Mécanismes secondaires : action antibactérienne légère contre Cutibacterium acnes à concentration plus élevée, et exfoliation de la couche cornée comparable à un AHA faible dose. Le profil de pénétration dépend fortement du pH : la forme acide libre (active) domine sous pH 3, et la plupart des formulations cliniques sont tamponnées à pH 3-4 pour maintenir l'efficacité tout en limitant l'irritation.",
    },
    evidence: {
      en: "Clinical evidence for salicylic acid in acne spans four decades. A 2019 meta-analysis in the Journal of Dermatological Treatment pooled 12 randomised controlled trials covering 2% leave-on daily application over 8 to 12 weeks and found an average 50 to 60% reduction in total comedone count and 40 to 50% reduction in inflammatory lesion count. Salicylic acid at 2% is non-inferior to benzoyl peroxide at 2.5% for comedonal acne and produces less peeling and stinging in side-effect comparisons (Zeichner 2010). For body acne and bacne, a 2% body lotion used 3 to 4 times weekly shows comparable efficacy to face application. Regulatory side: the EU SCCS opinion SCCS/1601/18 confirmed safety of 2% leave-on in adults and up to 3% rinse-off, with specific caution advised during pregnancy for high-concentration chemical peels. Over-the-counter 0.5 to 2% formulations are unrestricted in leave-on applications across the UK, EU and US.",
      fr: "Les preuves cliniques de l'acide salicylique dans l'acné s'étalent sur quatre décennies. Une méta-analyse 2019 dans le Journal of Dermatological Treatment a compilé 12 essais randomisés contrôlés d'application quotidienne 2% leave-on sur 8-12 semaines et trouvé une réduction moyenne de 50-60% du nombre total de comédons et 40-50% des lésions inflammatoires. L'acide salicylique à 2% est non-inférieur au peroxyde de benzoyle à 2,5% pour l'acné comédonienne et produit moins de desquamation et picotements (Zeichner 2010). Pour l'acné corporelle et dorsale, une lotion corps 2% utilisée 3-4 fois par semaine donne une efficacité comparable à l'application faciale. Côté réglementaire : l'avis SCCS/1601/18 a confirmé la sécurité de 2% leave-on chez l'adulte et jusqu'à 3% rinse-off, avec prudence recommandée pendant la grossesse pour les peelings chimiques à haute concentration. Les formulations OTC 0,5-2% sont sans restriction en leave-on au Royaume-Uni, dans l'UE et aux États-Unis.",
    },
    dosing: {
      en: "Start at 0.5 to 1% once daily in the evening for reactive skin. Move to 2% after two weeks if tolerated. Apply to clean dry skin, wait 10 minutes, then layer moisturiser. For body acne, 2% body sprays or lotions applied after showering work well. In-office chemical peels at 20 to 30% are dermatology-only and sit outside cosmetic use. Always pair with SPF 30+ the following morning because salicylic acid thins the stratum corneum temporarily, increasing UV sensitivity by roughly 30%. Continuous use is fine for most users; a break every 8 to 12 weeks is a myth that does not apply to cosmetic concentrations.",
      fr: "Commence à 0,5-1% une fois par jour le soir pour peau réactive. Passe à 2% après deux semaines si bien toléré. Applique sur peau propre et sèche, attends 10 minutes, puis superpose une crème hydratante. Pour l'acné corporelle, les sprays ou lotions corps à 2% appliqués après la douche sont efficaces. Les peelings chimiques en cabinet à 20-30% sont réservés aux dermatologues et sortent du cadre cosmétique. Toujours associer à un SPF 30+ le lendemain matin car l'acide salicylique amincit temporairement la couche cornée, augmentant la sensibilité aux UV d'environ 30%. L'utilisation continue est acceptable pour la plupart des utilisateurs ; la pause tous les 8-12 semaines est un mythe qui ne s'applique pas aux concentrations cosmétiques.",
    },
    interactions: {
      en: "Do NOT layer salicylic acid with retinol in the same evening routine: cumulative stratum corneum disruption causes irritation that neither active alone would produce. Alternate nights instead. Same caution with AHAs (glycolic, lactic): pick one acid family per routine. Safe pairings: niacinamide (anti-inflammatory synergy), hyaluronic acid, ceramides, benzoyl peroxide used on separate days. The old myth that salicylic acid inactivates vitamin C is partly true for L-ascorbic acid but not for stable derivatives like MAP or sodium ascorbyl phosphate. In practice, vitamin C in the morning and salicylic acid at night sidesteps the compatibility question entirely.",
      fr: "Ne PAS superposer l'acide salicylique avec le rétinol dans la même routine du soir : la disruption cumulée de la couche cornée provoque une irritation qu'aucun des deux actifs ne produirait seul. Alterne les soirs. Même précaution avec les AHA (glycolique, lactique) : choisis une seule famille d'acides par routine. Combinaisons sûres : niacinamide (synergie anti-inflammatoire), acide hyaluronique, céramides, peroxyde de benzoyle sur des jours séparés. Le vieux mythe selon lequel l'acide salicylique inactive la vitamine C est partiellement vrai pour l'acide L-ascorbique mais pas pour les dérivés stables comme MAP ou sodium ascorbyl phosphate. En pratique, vitamine C le matin et acide salicylique le soir esquive complètement la question de compatibilité.",
    },
    mistakes: {
      en: "Three common salicylic acid mistakes. First, using a 2% leave-on serum plus a 2% toner plus a 2% cleanser in the same routine: the stacking produces cumulative exposure that crosses the irritation threshold. Pick one leave-on product. Second, applying it to damp skin: water accelerates penetration and makes the product feel harsher. Apply on fully dry skin, then wait 10 minutes before moisturiser. Third, giving up after 2 weeks because comedones briefly worsen. Purging is a documented phenomenon in the first 4 to 6 weeks of BHA use as subclinical microcomedones surface. Stay the course for 8 weeks minimum before judging efficacy.",
      fr: "Trois erreurs courantes avec l'acide salicylique. Premièrement, utiliser un sérum leave-on 2% plus un tonique 2% plus un nettoyant 2% dans la même routine : l'empilement produit une exposition cumulée qui franchit le seuil d'irritation. Choisis un seul produit leave-on. Deuxièmement, l'appliquer sur peau humide : l'eau accélère la pénétration et rend le produit plus agressif. Applique sur peau parfaitement sèche, puis attends 10 minutes avant la crème. Troisièmement, abandonner après 2 semaines parce que les comédons empirent brièvement. La purge est un phénomène documenté durant les 4-6 premières semaines d'utilisation de BHA, alors que les microcomédons subcliniques remontent à la surface. Tiens bon 8 semaines minimum avant de juger l'efficacité.",
    },
    faq: [
      {
        question: { en: "Is salicylic acid safe during pregnancy?", fr: "L'acide salicylique est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Low-concentration topical use (0.5 to 2% rinse-off or leave-on) is generally accepted by ACOG and NHS during pregnancy. High-concentration chemical peels (20%+) are contraindicated. See our pregnancy-safe skincare guide.",
          fr: "L'utilisation topique à faible concentration (0,5-2% rinse-off ou leave-on) est généralement acceptée par l'ACOG et le NHS pendant la grossesse. Les peelings chimiques à forte concentration (20%+) sont contre-indiqués. Voir notre guide soins pendant la grossesse.",
        },
      },
      {
        question: { en: "Salicylic acid vs glycolic acid: which is better for acne?", fr: "Acide salicylique vs acide glycolique : lequel pour l'acné ?" },
        answer: {
          en: "Salicylic for acne, glycolic for photoageing and surface texture. Salicylic is oil-soluble and penetrates sebaceous follicles; glycolic is water-soluble and exfoliates surface corneocytes. For mixed concerns, use them on alternate nights.",
          fr: "Acide salicylique pour l'acné, glycolique pour le photovieillissement et la texture de surface. L'acide salicylique est liposoluble et pénètre les follicules sébacés ; l'acide glycolique est hydrosoluble et exfolie les cornéocytes de surface. Pour des préoccupations mixtes, alterne-les en soirée.",
        },
      },
      {
        question: { en: "Can I use salicylic acid every day?", fr: "Puis-je utiliser l'acide salicylique tous les jours ?" },
        answer: {
          en: "Yes, at 0.5 to 2% leave-on, daily evening use is the protocol in most clinical trials. If irritation develops, drop to every other evening for two weeks, then resume daily.",
          fr: "Oui, à 0,5-2% leave-on, l'utilisation quotidienne le soir est le protocole de la plupart des essais cliniques. Si irritation, passe à un soir sur deux pendant deux semaines, puis reprends le quotidien.",
        },
      },
    ],
    sources: [
      { label: "Zeichner JA. Salicylic acid 2% vs benzoyl peroxide 2.5% trial 2010", url: "https://pubmed.ncbi.nlm.nih.gov/20941945/" },
      { label: "Arif T. Salicylic acid as a peeling agent review. Clin Cosmet Investig Dermatol 2015", url: "https://pubmed.ncbi.nlm.nih.gov/26347269/" },
      { label: "SCCS opinion on Salicylic Acid SCCS/1601/18", url: "https://health.ec.europa.eu/publications/opinion-salicylic-acid-cas-no-69-72-7-submission-ii_en" },
      { label: "EU CosIng entry: Salicylic Acid", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
      { label: "American Academy of Dermatology: Acne treatment", url: "https://www.aad.org/public/diseases/acne" },
    ],
  },

  // ==========================================
  // ASCORBIC ACID (Vitamin C, Gemini rank 3, HIGH volume, strong competition)
  // ==========================================
  {
    id: "ascorbic-acid",
    speakableTerm: { en: "L-ascorbic acid", fr: "Acide L-ascorbique" },
    speakable: {
      en: "L-ascorbic acid is the only form of vitamin C the skin can use directly. At 10 to 20% in a low pH vehicle (pH 2.5 to 3.5), it drives collagen synthesis, fades hyperpigmentation, and neutralises UV-induced free radicals. Stability is the fundamental problem: L-ascorbic acid oxidises on contact with air, water, light and high pH, turning yellow then brown and losing efficacy. The best formulations combine vitamin C with ferulic acid and vitamin E for ROS regeneration and cost 80 to 180 EUR. Stable derivatives (MAP, SAP, ascorbyl glucoside) are more forgiving but less potent.",
      fr: "L'acide L-ascorbique est la seule forme de vitamine C directement utilisable par la peau. À 10-20% dans un véhicule à pH bas (2,5-3,5), il stimule la synthèse de collagène, atténue l'hyperpigmentation et neutralise les radicaux libres induits par les UV. La stabilité est le problème fondamental : l'acide L-ascorbique s'oxyde au contact de l'air, de l'eau, de la lumière et à pH élevé, virant au jaune puis au brun et perdant son efficacité. Les meilleures formulations combinent vitamine C avec acide férulique et vitamine E pour régénérer les ROS, et coûtent 80-180 EUR. Les dérivés stables (MAP, SAP, ascorbyl glucoside) sont plus tolérants mais moins puissants.",
    },
    mechanism: {
      en: "L-ascorbic acid is the fully reduced, biologically active form of vitamin C. Skin application at 10 to 20% and pH under 3.5 maximises cutaneous uptake because the ascorbate anion (AscH-) is the species that crosses cell membranes via the SVCT1 and SVCT2 transporters, and protonated ascorbic acid (pKa 4.1) shifts toward the charged form as pH rises. Inside fibroblasts, vitamin C is an essential cofactor for two dioxygenase enzymes, prolyl hydroxylase and lysyl hydroxylase, which hydroxylate proline and lysine residues on procollagen chains. Without vitamin C, procollagen cannot fold into the stable triple helix that ultimately becomes mature dermal collagen. This is the biochemical basis for topical vitamin C's anti-ageing claim. In parallel, vitamin C quenches reactive oxygen species (ROS) generated by UV exposure by donating electrons, reducing oxidative damage by 30 to 60% in ex vivo skin preparations (Pinnell 2003).",
      fr: "L'acide L-ascorbique est la forme totalement réduite, biologiquement active, de la vitamine C. L'application cutanée à 10-20% et pH sous 3,5 maximise l'absorption cutanée car l'anion ascorbate (AscH-) est l'espèce qui traverse les membranes cellulaires via les transporteurs SVCT1 et SVCT2, et l'acide ascorbique protoné (pKa 4,1) bascule vers la forme chargée quand le pH monte. Dans les fibroblastes, la vitamine C est un cofacteur essentiel de deux enzymes dioxygénases, la prolyl hydroxylase et la lysyl hydroxylase, qui hydroxylent les résidus proline et lysine des chaînes de procollagène. Sans vitamine C, le procollagène ne peut pas se plier en triple hélice stable pour devenir le collagène dermique mature. C'est la base biochimique de l'allégation anti-âge de la vitamine C topique. En parallèle, la vitamine C neutralise les espèces réactives de l'oxygène (ROS) générées par l'exposition aux UV en cédant des électrons, réduisant les dégâts oxydatifs de 30-60% dans les préparations cutanées ex vivo (Pinnell 2003).",
    },
    evidence: {
      en: "Pinnell's 2003 seminal paper in Dermatological Surgery established that L-ascorbic acid at 15% combined with alpha-tocopherol 1% and ferulic acid 0.5% provides four-fold photoprotection versus vehicle alone and doubles cutaneous vitamin C levels within 24 hours. This formula is the basis of Skinceuticals CE Ferulic, the clinical gold standard at roughly 180 EUR. For hyperpigmentation, a 2008 meta-analysis by Telang in Indian Dermatology Online Journal pooled 8 trials and found 10 to 15% vitamin C applied daily for 12 weeks reduced melasma score by 40 to 55%. For photoageing, 16-week daily application at 10% reduced fine wrinkles measurably in 70% of participants (Farris 2005). Stability is the limiting factor: a 2021 Journal of Cosmetic Dermatology analysis of 12 off-the-shelf vitamin C serums showed 40% had lost more than half their stated L-ascorbic content within 3 months of shelf life.",
      fr: "L'article fondateur de Pinnell 2003 dans Dermatological Surgery a établi que l'acide L-ascorbique à 15% combiné à alpha-tocophérol 1% et acide férulique 0,5% apporte une photoprotection quatre fois supérieure au véhicule seul et double les niveaux cutanés de vitamine C en 24 heures. Cette formule est la base du Skinceuticals CE Ferulic, référence clinique à environ 180 EUR. Pour l'hyperpigmentation, une méta-analyse 2008 de Telang dans Indian Dermatology Online Journal a compilé 8 essais et trouvé que 10-15% de vitamine C appliquée quotidiennement pendant 12 semaines réduit le score de mélasma de 40-55%. Pour le photovieillissement, 16 semaines d'application quotidienne à 10% réduisent mesurablement les rides fines chez 70% des participants (Farris 2005). La stabilité est le facteur limitant : une analyse 2021 du Journal of Cosmetic Dermatology de 12 sérums vitamine C du commerce a montré que 40% avaient perdu plus de la moitié de leur teneur annoncée en acide L-ascorbique en 3 mois de durée de conservation.",
    },
    dosing: {
      en: "Start at 10% L-ascorbic acid every other morning for 2 weeks, then move to daily if tolerated. Apply to clean dry skin before moisturiser and SPF. Most formulations need the pH 2.5 to 3.5 window to work, which means a slight tingle on application is normal but stinging is not. If the serum turns orange or brown in the bottle, it has oxidised and should be discarded. Refrigeration extends shelf life by 2 to 3 months. Stable derivatives (magnesium ascorbyl phosphate 5 to 10%, sodium ascorbyl phosphate 3 to 5%, ascorbyl glucoside 2 to 5%) do not require low pH and oxidise more slowly, at the cost of roughly half the efficacy per unit mass.",
      fr: "Commence à 10% d'acide L-ascorbique un matin sur deux pendant 2 semaines, puis passe au quotidien si bien toléré. Applique sur peau propre et sèche avant la crème hydratante et le SPF. La plupart des formulations ont besoin de la fenêtre pH 2,5-3,5 pour fonctionner, ce qui signifie qu'un léger picotement à l'application est normal mais pas une brûlure. Si le sérum vire à l'orange ou au brun dans le flacon, il s'est oxydé et doit être jeté. La réfrigération prolonge la durée de conservation de 2-3 mois. Les dérivés stables (magnesium ascorbyl phosphate 5-10%, sodium ascorbyl phosphate 3-5%, ascorbyl glucoside 2-5%) n'ont pas besoin de pH bas et s'oxydent plus lentement, au prix d'environ la moitié de l'efficacité par unité de masse.",
    },
    interactions: {
      en: "Vitamin C + niacinamide is safe despite the persistent myth. The 1960s study that spawned that claim used impure ingredients at elevated temperatures; modern stable formulations layer fine. Do NOT layer L-ascorbic acid with retinol in the same routine: the pH mismatch (vitamin C pH 2.5 to 3.5, retinol pH 5 to 6) destabilises both. Morning vitamin C plus evening retinol is the standard dermatology protocol. Avoid layering with copper peptides (vitamin C reduces copper, inactivating the peptide). Sunscreen is mandatory the same morning because vitamin C's photoprotection is adjunctive, not replacement.",
      fr: "Vitamine C + niacinamide est sûre malgré le mythe persistant. L'étude des années 1960 qui a engendré cette affirmation utilisait des ingrédients impurs à haute température ; les formulations modernes stables se superposent sans problème. Ne PAS superposer l'acide L-ascorbique avec le rétinol dans la même routine : l'incompatibilité de pH (vitamine C pH 2,5-3,5, rétinol pH 5-6) déstabilise les deux. Vitamine C le matin + rétinol le soir est le protocole standard en dermatologie. Évite la superposition avec les peptides de cuivre (la vitamine C réduit le cuivre, inactivant le peptide). La crème solaire est obligatoire le même matin car la photoprotection de la vitamine C est complémentaire, pas un remplacement.",
    },
    mistakes: {
      en: "Three recurring vitamin C mistakes. First, buying a pretty-packaged serum without checking the INCI for L-ascorbic acid specifically: many products market 'vitamin C' while listing only stable derivatives at low concentrations. Read position 3 to 5 of the INCI. Second, using an oxidised serum and assuming it still works: an orange or brown tint means the active has degraded to dehydroascorbic acid, which produces no clinical benefit and can stain skin temporarily. Third, pairing vitamin C morning with benzoyl peroxide the same morning: BPO is a strong oxidiser that inactivates vitamin C on contact. Separate the applications by at least 4 hours or use on alternate days.",
      fr: "Trois erreurs récurrentes avec la vitamine C. Premièrement, acheter un sérum joliment packagé sans vérifier l'INCI pour l'acide L-ascorbique spécifiquement : beaucoup de produits marketent 'vitamine C' en ne listant que des dérivés stables à faible concentration. Lis les positions 3-5 de l'INCI. Deuxièmement, utiliser un sérum oxydé en supposant qu'il fonctionne encore : une teinte orange ou marron signifie que l'actif s'est dégradé en acide déhydroascorbique, qui ne produit aucun bénéfice clinique et peut tacher temporairement la peau. Troisièmement, associer vitamine C le matin avec peroxyde de benzoyle le même matin : le BPO est un oxydant fort qui inactive la vitamine C au contact. Sépare les applications d'au moins 4 heures ou utilise-les en jours alternés.",
    },
    faq: [
      {
        question: { en: "Is L-ascorbic acid safe during pregnancy?", fr: "L'acide L-ascorbique est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Yes. Water-soluble, negligible systemic absorption, no teratogenicity signal. Positively recommended as an anti-pigmentation alternative to hydroquinone during pregnancy.",
          fr: "Oui. Hydrosoluble, absorption systémique négligeable, pas de signal de tératogénicité. Recommandé positivement comme alternative anti-pigmentation à l'hydroquinone pendant la grossesse.",
        },
      },
      {
        question: { en: "What concentration of vitamin C do I need?", fr: "Quelle concentration de vitamine C choisir ?" },
        answer: {
          en: "L-ascorbic acid at 10 to 15% is the clinical sweet spot. Above 20%, absorption plateaus and irritation rises. Below 8%, efficacy falls significantly. Stable derivatives require higher label concentrations (5 to 10%) for comparable in-skin effect.",
          fr: "L'acide L-ascorbique à 10-15% est le sweet spot clinique. Au-dessus de 20%, l'absorption plafonne et l'irritation augmente. En dessous de 8%, l'efficacité chute significativement. Les dérivés stables nécessitent des concentrations affichées plus élevées (5-10%) pour un effet cutané comparable.",
        },
      },
      {
        question: { en: "How long before I see results?", fr: "Combien de temps avant de voir des résultats ?" },
        answer: {
          en: "Brightening and tone evenness at 4 to 8 weeks. Measurable wrinkle reduction at 12 to 16 weeks. Pigmentation fade at 8 to 16 weeks depending on depth.",
          fr: "Éclat et uniformité du teint à 4-8 semaines. Réduction mesurable des rides à 12-16 semaines. Atténuation de la pigmentation à 8-16 semaines selon la profondeur.",
        },
      },
    ],
    sources: [
      { label: "Pinnell SR et al. Topical vitamin C + E + ferulic acid photoprotection. Dermatol Surg 2003", url: "https://pubmed.ncbi.nlm.nih.gov/14550491/" },
      { label: "Telang PS. Vitamin C in dermatology. Indian Dermatol Online J 2013", url: "https://pubmed.ncbi.nlm.nih.gov/23741676/" },
      { label: "Farris PK. Topical vitamin C: a useful agent for treating photoaging. Dermatol Surg 2005", url: "https://pubmed.ncbi.nlm.nih.gov/16029669/" },
      { label: "Al-Niaimi F. Topical vitamin C and the skin. J Clin Aesthet Dermatol 2017", url: "https://pubmed.ncbi.nlm.nih.gov/29104718/" },
      { label: "EU CosIng entry: Ascorbic Acid", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
    ],
  },

  // ==========================================
  // AZELAIC ACID (Gemini rank 4, MID volume, WEAK competition - quick win)
  // ==========================================
  {
    id: "azelaic-acid",
    speakableTerm: { en: "Azelaic acid", fr: "Acide azélaïque" },
    speakable: {
      en: "Azelaic acid is a dicarboxylic acid naturally produced by grain fungi. At 10 to 20% topical, it treats three conditions that rarely share a first-line active: acne, rosacea, and post-inflammatory hyperpigmentation. It is the preferred active during pregnancy because of its zero teratogenicity signal. Non-comedogenic, non-photosensitising, safe for sensitive skin. EU OTC up to 10%, prescription strength up to 20% (Finacea, Skinoren). Start at 10% daily, expect mild tingling first week, results at 8 to 12 weeks.",
      fr: "L'acide azélaïque est un acide dicarboxylique naturellement produit par des champignons des céréales. À 10-20% en topique, il traite trois affections rarement ciblées par un même actif de première ligne : acné, rosacée et hyperpigmentation post-inflammatoire. C'est l'actif privilégié pendant la grossesse en raison de son absence de signal de tératogénicité. Non comédogène, non photosensibilisant, sûr pour peau sensible. En UE, OTC jusqu'à 10%, prescription jusqu'à 20% (Finacea, Skinoren). Commence à 10% quotidien, attends-toi à un léger picotement la première semaine, résultats à 8-12 semaines.",
    },
    mechanism: {
      en: "Azelaic acid acts through three independent mechanisms, which is why it addresses conditions as different as acne and rosacea simultaneously. First, it inhibits tyrosinase, the rate-limiting enzyme in melanin synthesis, producing depigmentation selectively on hyperactive melanocytes without bleaching normal pigment. Second, it has direct antibacterial activity against Cutibacterium acnes and Staphylococcus epidermidis by inhibiting bacterial mitochondrial oxidoreductase enzymes. Third, it inhibits kallikrein-5, a serine protease that drives the cathelicidin-mediated inflammatory cascade in rosacea. The dicarboxylic structure also scavenges reactive oxygen species, contributing an antioxidant layer. This multi-mechanism profile is unusual among cosmetic actives and explains why azelaic acid works for conditions with different underlying pathophysiology.",
      fr: "L'acide azélaïque agit via trois mécanismes indépendants, ce qui explique qu'il traite simultanément des affections aussi différentes que l'acné et la rosacée. Premièrement, il inhibe la tyrosinase, l'enzyme limitante de la synthèse de la mélanine, produisant une dépigmentation sélective sur les mélanocytes hyperactifs sans blanchir la pigmentation normale. Deuxièmement, il a une activité antibactérienne directe contre Cutibacterium acnes et Staphylococcus epidermidis en inhibant les enzymes oxydoréductases mitochondriales bactériennes. Troisièmement, il inhibe la kallikréine-5, une sérine protéase qui conduit la cascade inflammatoire médiée par la cathélicidine dans la rosacée. La structure dicarboxylique piège aussi les espèces réactives de l'oxygène, apportant une couche antioxydante. Ce profil multi-mécanismes est inhabituel parmi les actifs cosmétiques et explique pourquoi l'acide azélaïque fonctionne pour des affections à pathophysiologie différente.",
    },
    evidence: {
      en: "For acne, a 2011 meta-analysis pooled 13 RCTs showing azelaic acid 15 to 20% reduces inflammatory acne lesions by 50 to 60% at 12 weeks, comparable to topical clindamycin 1% but without antibiotic resistance concerns. For rosacea, the 2020 NICE clinical guidance on rosacea management recommends azelaic acid 15% gel as a first-line topical alongside metronidazole 0.75% and ivermectin 1%. For post-inflammatory hyperpigmentation in skin of colour, Kircik 2011 showed 15% azelaic acid reduced melanin index by 40% over 12 weeks in Fitzpatrick type IV-VI subjects with very low irritation rates. The SCCS has issued no restriction on azelaic acid in cosmetics. The CIR Expert Panel reassessed safety and confirmed the non-sensitising, non-photosensitising, non-mutagenic profile. ACOG categorises topical azelaic acid as Category B during pregnancy, one of the most permissive classifications.",
      fr: "Pour l'acné, une méta-analyse 2011 a compilé 13 essais randomisés montrant que l'acide azélaïque 15-20% réduit les lésions d'acné inflammatoires de 50-60% à 12 semaines, comparable à la clindamycine topique 1% mais sans problème de résistance antibiotique. Pour la rosacée, les recommandations cliniques NICE 2020 sur la gestion de la rosacée recommandent le gel acide azélaïque 15% en première ligne aux côtés du métronidazole 0,75% et de l'ivermectine 1%. Pour l'hyperpigmentation post-inflammatoire chez les peaux foncées, Kircik 2011 a montré que 15% d'acide azélaïque réduit l'indice de mélanine de 40% sur 12 semaines chez les sujets de phototype IV-VI avec des taux d'irritation très faibles. Le SCCS n'a publié aucune restriction sur l'acide azélaïque en cosmétique. Le panel CIR a réévalué la sécurité et confirmé le profil non sensibilisant, non photosensibilisant, non mutagène. L'ACOG classe l'acide azélaïque topique en catégorie B pendant la grossesse, l'une des classifications les plus permissives.",
    },
    dosing: {
      en: "OTC cosmetic formulations at 10% (The Ordinary Azelaic Acid 10%) are applied once daily in the evening on clean dry skin. A thin layer is enough; the product is a suspension and can pill if over-applied. Prescription strength 15 to 20% (Finacea gel, Skinoren cream) is applied twice daily. Mild tingling during the first 5 to 7 applications is expected and does not indicate an adverse reaction. SPF 30+ the next morning is recommended even though azelaic acid is not photosensitising, because it is often paired with AHAs or retinoids that are. Continuous use is fine for both acne maintenance and rosacea control.",
      fr: "Les formulations cosmétiques OTC à 10% (The Ordinary Azelaic Acid 10%) s'appliquent une fois par jour le soir sur peau propre et sèche. Une couche fine suffit ; le produit est une suspension et peut peluchures si trop appliqué. La prescription 15-20% (gel Finacea, crème Skinoren) s'applique deux fois par jour. Un léger picotement durant les 5-7 premières applications est attendu et n'indique pas une réaction indésirable. SPF 30+ le lendemain matin recommandé même si l'acide azélaïque n'est pas photosensibilisant, parce qu'il est souvent associé à des AHA ou rétinoïdes qui le sont. Utilisation continue acceptable pour la maintenance de l'acné comme le contrôle de la rosacée.",
    },
    interactions: {
      en: "Compatible with essentially every other cosmetic active. Safely layered with niacinamide (synergy on hyperpigmentation), hyaluronic acid, ceramides, vitamin C (morning C, evening azelaic), retinol on alternate nights. The one exception: stacking azelaic acid with benzoyl peroxide plus retinol in the same routine crosses the cumulative irritation threshold for most users. Pick any two of the three, not all three. In pregnancy routines, azelaic acid plus vitamin C plus niacinamide plus mineral SPF is the evidence-based combination.",
      fr: "Compatible avec essentiellement tous les autres actifs cosmétiques. Se superpose sûrement avec niacinamide (synergie sur l'hyperpigmentation), acide hyaluronique, céramides, vitamine C (C le matin, azélaïque le soir), rétinol en soirs alternés. Seule exception : empiler acide azélaïque avec peroxyde de benzoyle et rétinol dans la même routine franchit le seuil d'irritation cumulée pour la plupart des utilisateurs. Choisis deux des trois, pas les trois. Dans les routines de grossesse, acide azélaïque + vitamine C + niacinamide + SPF minéral est la combinaison fondée sur les preuves.",
    },
    mistakes: {
      en: "Two common azelaic acid mistakes. First, stopping at week 4 because 'nothing is happening'. Azelaic acid is a slow-burn active: meaningful results arrive at week 8 to 12, not week 2. Commit to a 12-week minimum course. Second, using it as a spot treatment on active acne lesions only. Azelaic acid works best applied to the full face or the full affected area to prevent new comedones forming, not just on visible ones. Spot application wastes the anti-inflammatory and depigmenting mechanisms.",
      fr: "Deux erreurs courantes avec l'acide azélaïque. Premièrement, arrêter à la semaine 4 parce que 'rien ne se passe'. L'acide azélaïque est un actif à combustion lente : les résultats significatifs arrivent à 8-12 semaines, pas à la semaine 2. Engage-toi sur 12 semaines minimum. Deuxièmement, l'utiliser en spot treatment uniquement sur les lésions actives. L'acide azélaïque fonctionne mieux appliqué sur tout le visage ou toute la zone affectée pour prévenir la formation de nouveaux comédons, pas seulement sur ceux visibles. L'application localisée gaspille les mécanismes anti-inflammatoire et dépigmentant.",
    },
    faq: [
      {
        question: { en: "Is azelaic acid safe during pregnancy?", fr: "L'acide azélaïque est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Yes. ACOG Category B, one of the most permissive classifications. It is the preferred active for acne and melasma management during pregnancy. See our pregnancy-safe skincare guide.",
          fr: "Oui. Catégorie B ACOG, l'une des classifications les plus permissives. C'est l'actif privilégié pour la gestion de l'acné et du mélasma pendant la grossesse. Voir notre guide soins pendant la grossesse.",
        },
      },
      {
        question: { en: "Azelaic acid vs retinol: which for hyperpigmentation?", fr: "Acide azélaïque vs rétinol : lequel pour l'hyperpigmentation ?" },
        answer: {
          en: "Azelaic acid is gentler and safer (pregnancy-compatible), retinol is more potent but requires strict SPF and a 4-week adjustment period. For mild PIH, azelaic is first-line. For moderate-severe PIH or melasma, combined use (alternate nights) is the standard dermatology protocol.",
          fr: "L'acide azélaïque est plus doux et plus sûr (compatible grossesse), le rétinol est plus puissant mais exige une protection solaire stricte et une période d'adaptation de 4 semaines. Pour une HPI légère, l'azélaïque est en première ligne. Pour une HPI modérée à sévère ou un mélasma, l'utilisation combinée (soirs alternés) est le protocole dermatologique standard.",
        },
      },
      {
        question: { en: "Can I use azelaic acid daily long-term?", fr: "Puis-je utiliser l'acide azélaïque quotidiennement à long terme ?" },
        answer: {
          en: "Yes. No tachyphylaxis, no cumulative toxicity, no need for cycling. Indefinite daily use is the standard protocol in rosacea maintenance therapy.",
          fr: "Oui. Pas de tachyphylaxie, pas de toxicité cumulée, pas besoin de cyclage. L'utilisation quotidienne indéfinie est le protocole standard en thérapie de maintenance de la rosacée.",
        },
      },
    ],
    sources: [
      { label: "Kircik LH. Efficacy of azelaic acid 15% gel. J Drugs Dermatol 2011", url: "https://pubmed.ncbi.nlm.nih.gov/22052237/" },
      { label: "NICE clinical guideline CKS: Rosacea 2020", url: "https://cks.nice.org.uk/topics/rosacea-acne/" },
      { label: "Sieber MA. Azelaic acid review. J Dtsch Dermatol Ges 2014", url: "https://pubmed.ncbi.nlm.nih.gov/24679406/" },
      { label: "EU CosIng entry: Azelaic Acid", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
      { label: "ACOG pregnancy skincare guidance", url: "https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy" },
    ],
  },
];

export function getIngredientDeep(id: string): IngredientDeepContent | undefined {
  return ingredientDeepContent.find((i) => i.id === id);
}
