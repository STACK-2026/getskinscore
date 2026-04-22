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

  // ==========================================
  // GLYCOLIC ACID (Gemini rank 5, HIGH volume, medium competition)
  // ==========================================
  {
    id: "glycolic-acid",
    speakableTerm: { en: "Glycolic acid", fr: "Acide glycolique" },
    speakable: {
      en: "Glycolic acid is the smallest alpha hydroxy acid (AHA, 76 Daltons), which is why it penetrates the stratum corneum faster and deeper than any other AHA. At 5 to 10% daily leave-on, it produces measurable improvements in skin texture, fine lines, and surface hyperpigmentation within 4 to 8 weeks. Unlike salicylic acid, glycolic is water-soluble and works on surface corneocytes rather than inside follicles. EU cap: 10% leave-on consumer products. Always pair with SPF 30+ because glycolic increases UV sensitivity measurably.",
      fr: "L'acide glycolique est le plus petit alpha hydroxyacide (AHA, 76 Daltons), c'est pourquoi il pénètre la couche cornée plus vite et plus profondément que n'importe quel autre AHA. À 5-10% quotidien en leave-on, il produit des améliorations mesurables de texture, rides fines et hyperpigmentation de surface en 4-8 semaines. Contrairement à l'acide salicylique, l'acide glycolique est hydrosoluble et agit sur les cornéocytes de surface plutôt qu'à l'intérieur des follicules. Plafond UE : 10% leave-on en produit consommateur. Toujours associer à un SPF 30+ car l'acide glycolique augmente mesurablement la sensibilité aux UV.",
    },
    mechanism: {
      en: "Glycolic acid works by weakening the ionic and hydrogen bonds that hold corneocytes together in the stratum corneum. The mechanism is pH-dependent: at pH 3 to 4, the free acid form dominates and drives desquamation, while at higher pH the neutralised salt form (glycolate) is essentially inert. This is why formulation pH is the most important variable beyond concentration. Glycolic acid at 10% pH 3.5 has roughly 60% of its molecules in active free-acid form; the same 10% at pH 5 has less than 10% active. Beyond surface exfoliation, glycolic acid stimulates dermal fibroblast activity at sustained use, increasing hyaluronic acid synthesis and modestly upregulating collagen production. These longer-term effects explain why AHA regimens produce not just smoother-feeling skin but measurably thicker epidermis at 6 to 12 months.",
      fr: "L'acide glycolique agit en affaiblissant les liaisons ioniques et hydrogène qui maintiennent les cornéocytes ensemble dans la couche cornée. Le mécanisme dépend du pH : à pH 3-4, la forme acide libre domine et conduit la desquamation, alors qu'à pH plus élevé la forme sel neutralisée (glycolate) est essentiellement inerte. C'est pourquoi le pH de la formulation est la variable la plus importante au-delà de la concentration. L'acide glycolique 10% pH 3,5 a environ 60% de ses molécules en forme acide libre active ; les mêmes 10% à pH 5 ont moins de 10% actif. Au-delà de l'exfoliation de surface, l'acide glycolique stimule l'activité des fibroblastes dermiques à usage soutenu, augmentant la synthèse d'acide hyaluronique et régulant modestement à la hausse la production de collagène. Ces effets à long terme expliquent pourquoi les régimes AHA produisent non seulement une peau plus lisse au toucher mais aussi un épiderme mesurablement plus épais à 6-12 mois.",
    },
    evidence: {
      en: "A 1996 Ditre et al. trial in the Journal of the American Academy of Dermatology was the first to demonstrate histological epidermal thickening with daily 8% glycolic acid over 6 months. A 2018 Kornhauser review pooled 11 controlled trials and found consistent 10 to 25% reduction in fine wrinkles at 12 to 24 weeks of 5 to 10% AHA use. For melasma, a 2011 split-face trial by Sharquie showed 70% glycolic acid chemical peels produced greater depigmentation than 20% salicylic peels with comparable irritation. The SCCS opinion SCCS/1601/18 capped consumer leave-on glycolic acid at 10% and chemical peels at pH 3.5 minimum for cosmetics. Professional peels above 20% are dermatology or aesthetic practice only. The increased UV sensitivity (roughly 30% over baseline) persists for a week after discontinuation, which is why sunscreen is non-negotiable during AHA regimens.",
      fr: "Un essai Ditre et al. 1996 dans le Journal of the American Academy of Dermatology fut le premier à démontrer un épaississement épidermique histologique avec un acide glycolique 8% quotidien sur 6 mois. Une revue Kornhauser 2018 a compilé 11 essais contrôlés et trouvé une réduction constante de 10-25% des rides fines à 12-24 semaines d'utilisation d'AHA 5-10%. Pour le mélasma, un essai split-face Sharquie 2011 a montré que les peelings chimiques à l'acide glycolique 70% produisent une dépigmentation supérieure aux peelings salicyliques 20% avec une irritation comparable. L'avis SCCS/1601/18 a plafonné l'acide glycolique consommateur en leave-on à 10% et les peelings chimiques à pH 3,5 minimum pour les cosmétiques. Les peelings professionnels au-dessus de 20% sont réservés à la pratique dermatologique ou esthétique. La sensibilité accrue aux UV (environ 30% au-dessus de la base) persiste une semaine après l'arrêt, c'est pourquoi la crème solaire est non négociable pendant les régimes AHA.",
    },
    dosing: {
      en: "Start at 5% glycolic acid twice a week in the evening for 2 weeks. Apply to clean dry skin, wait 10 minutes, then layer moisturiser. If well tolerated, increase to three times weekly, then every other night, and eventually every night at 7 to 10%. The Ordinary Glycolic Acid 7% toner is a standard starter at pH 3.6. Paula's Choice 8% AHA and Pixi Glow Tonic 5% are gentler alternatives. Above 10% OTC is not legal in the EU/UK for consumer leave-on. Professional peels (20 to 70%) are a separate dermatology protocol and do not count as daily skincare. Always apply SPF 30+ the next morning, and keep applying SPF for 7 days after a chemical peel.",
      fr: "Commence à 5% d'acide glycolique deux fois par semaine le soir pendant 2 semaines. Applique sur peau propre et sèche, attends 10 minutes, puis superpose une crème hydratante. Si bien toléré, passe à trois fois par semaine, puis un soir sur deux, et finalement tous les soirs à 7-10%. The Ordinary Glycolic Acid 7% tonic est un starter standard à pH 3,6. Paula's Choice 8% AHA et Pixi Glow Tonic 5% sont des alternatives plus douces. Au-dessus de 10% OTC n'est pas légal dans l'UE/Royaume-Uni pour le leave-on consommateur. Les peelings professionnels (20-70%) sont un protocole dermatologique séparé et ne comptent pas comme skincare quotidien. Toujours appliquer un SPF 30+ le lendemain matin, et continuer le SPF pendant 7 jours après un peeling chimique.",
    },
    interactions: {
      en: "Do NOT layer glycolic acid with retinol, salicylic acid, or benzoyl peroxide in the same evening routine. Pick one exfoliating or irritating active per night. Glycolic + niacinamide is a classic safe pairing that some brands market in single formulations. Glycolic + hyaluronic acid is the standard post-exfoliation hydration step. Vitamin C in the morning plus glycolic at night is the standard dermatology AM/PM protocol. Avoid glycolic use within a week before or after a professional peel or laser treatment.",
      fr: "Ne PAS superposer l'acide glycolique avec le rétinol, l'acide salicylique ou le peroxyde de benzoyle dans la même routine du soir. Choisis un seul actif exfoliant ou irritant par soir. Glycolique + niacinamide est un classique pairing sûr que certaines marques marketent en formulations uniques. Glycolique + acide hyaluronique est l'étape standard d'hydratation post-exfoliation. Vitamine C le matin + glycolique le soir est le protocole AM/PM dermatologique standard. Évite l'utilisation du glycolique dans la semaine précédant ou suivant un peeling professionnel ou un traitement laser.",
    },
    mistakes: {
      en: "The two most common glycolic acid mistakes. First, skipping SPF the next morning. Glycolic thins the stratum corneum and increases UV sensitivity by 30%; no SPF means paradoxical hyperpigmentation and accelerated ageing. Second, stacking multiple AHAs or AHA plus BHA in the same routine because 'they are different acids'. The stratum corneum does not care about the chemical difference; cumulative exposure crosses the barrier-disruption threshold and produces inflammation. Pick one acid at a time.",
      fr: "Les deux erreurs les plus courantes avec l'acide glycolique. Premièrement, sauter le SPF le lendemain matin. Le glycolique amincit la couche cornée et augmente la sensibilité aux UV de 30% ; pas de SPF = hyperpigmentation paradoxale et accélération du vieillissement. Deuxièmement, empiler plusieurs AHA ou AHA plus BHA dans la même routine parce que 'ce sont des acides différents'. La couche cornée se fiche de la différence chimique ; l'exposition cumulée franchit le seuil de disruption barrière et produit de l'inflammation. Choisis un seul acide à la fois.",
    },
    faq: [
      {
        question: { en: "Glycolic acid vs mandelic acid: which should I use?", fr: "Acide glycolique vs acide mandélique : lequel utiliser ?" },
        answer: {
          en: "Glycolic for photoageing and surface texture on normal to oily skin. Mandelic for darker skin tones or reactive skin because it has a larger molecular size (150 vs 76 Daltons) and penetrates more slowly, reducing irritation and hyperpigmentation risk.",
          fr: "Glycolique pour le photovieillissement et la texture de surface sur peau normale à grasse. Mandélique pour les peaux foncées ou réactives car il a une taille moléculaire plus grande (150 vs 76 Daltons) et pénètre plus lentement, réduisant le risque d'irritation et d'hyperpigmentation.",
        },
      },
      {
        question: { en: "Is glycolic acid safe during pregnancy?", fr: "L'acide glycolique est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Yes at typical cosmetic concentrations up to 10%. ACOG and NHS accept continued use. Professional peels above 30% are not recommended. See our pregnancy-safe skincare guide.",
          fr: "Oui aux concentrations cosmétiques typiques jusqu'à 10%. L'ACOG et le NHS acceptent l'utilisation continue. Les peelings professionnels au-dessus de 30% ne sont pas recommandés. Voir notre guide soins pendant la grossesse.",
        },
      },
      {
        question: { en: "How long before I see results?", fr: "Combien de temps avant de voir des résultats ?" },
        answer: {
          en: "Smoother texture at 2 to 4 weeks. Fine lines measurably reduced at 12 weeks. Epidermal thickening on histology at 6 months. Discontinuation reverses surface benefits within 2 to 4 weeks.",
          fr: "Texture plus lisse à 2-4 semaines. Rides fines mesurablement réduites à 12 semaines. Épaississement épidermique à l'histologie à 6 mois. L'arrêt inverse les bénéfices de surface en 2-4 semaines.",
        },
      },
    ],
    sources: [
      { label: "Ditre CM et al. Effects of AHAs on photoaged skin. JAAD 1996", url: "https://pubmed.ncbi.nlm.nih.gov/8621798/" },
      { label: "Kornhauser A et al. Applications of hydroxyacids. Clin Cosmet Investig Dermatol 2018", url: "https://pubmed.ncbi.nlm.nih.gov/29255366/" },
      { label: "SCCS opinion on Alpha Hydroxy Acids SCCS/1601/18", url: "https://health.ec.europa.eu/publications/opinion-alpha-hydroxy-acids_en" },
      { label: "Sharquie KE et al. Glycolic vs salicylic peel for melasma 2011", url: "https://pubmed.ncbi.nlm.nih.gov/21309956/" },
      { label: "EU CosIng entry: Glycolic Acid", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
    ],
  },

  // ==========================================
  // SQUALANE (Gemini rank 6, MID volume, WEAK competition - niche quick win)
  // ==========================================
  {
    id: "squalane",
    speakableTerm: { en: "Squalane", fr: "Squalane" },
    speakable: {
      en: "Squalane is the stable, hydrogenated form of squalene, a lipid naturally present in human sebum at 12 to 15%. Applied topically at 5 to 100% concentrations, it mimics the skin's own oil composition and penetrates without greasiness or comedogenicity. Plant-derived squalane (sugarcane, olive) replaced the older shark-liver source in modern cosmetics. Zero photosensitivity, zero pregnancy restriction, compatible with every skin type including acne-prone. Not interchangeable with squalene, which is unstable and oxidises rapidly.",
      fr: "Le squalane est la forme stable et hydrogénée du squalène, un lipide naturellement présent dans le sébum humain à 12-15%. Appliqué en topique à des concentrations de 5 à 100%, il imite la composition huileuse de la peau et pénètre sans effet gras ni comédogénicité. Le squalane d'origine végétale (canne à sucre, olive) a remplacé l'ancienne source de foie de requin dans les cosmétiques modernes. Zéro photosensibilité, zéro restriction pendant la grossesse, compatible avec tous les types de peau y compris les peaux à tendance acnéique. Pas interchangeable avec le squalène, qui est instable et s'oxyde rapidement.",
    },
    mechanism: {
      en: "Squalene is an aliphatic triterpene (C30H50) present natively in human sebum and serves as a precursor to cholesterol and vitamin D biosynthesis. On the skin surface, squalene sits in the lipid film of the stratum corneum and provides approximately 15% of the surface lipid composition. The problem with squalene topically is that it oxidises on exposure to air, forming squalene peroxides that are irritating and comedogenic. Hydrogenation of squalene produces squalane (C30H62), which is chemically saturated and therefore stable against oxidation while retaining the same molecular size and skin affinity. Applied topically, squalane diffuses into the stratum corneum lipid matrix, repairing gaps in the intercellular lamellae and reducing transepidermal water loss by 10 to 25% in clinical use. Because it mirrors the structure of native sebum lipids, the skin recognises it rather than rejecting it, which is the structural basis for its zero-comedogenic rating.",
      fr: "Le squalène est un triterpène aliphatique (C30H50) présent nativement dans le sébum humain et sert de précurseur à la biosynthèse du cholestérol et de la vitamine D. À la surface de la peau, le squalène se loge dans le film lipidique de la couche cornée et fournit environ 15% de la composition lipidique de surface. Le problème avec le squalène topique est qu'il s'oxyde au contact de l'air, formant des peroxydes de squalène irritants et comédogènes. L'hydrogénation du squalène produit le squalane (C30H62), chimiquement saturé et donc stable contre l'oxydation tout en conservant la même taille moléculaire et affinité cutanée. Appliqué en topique, le squalane diffuse dans la matrice lipidique de la couche cornée, réparant les trous dans les lamelles intercellulaires et réduisant la perte d'eau transépidermique de 10-25% en utilisation clinique. Parce qu'il reflète la structure des lipides natifs du sébum, la peau le reconnaît plutôt que de le rejeter, c'est la base structurelle de son rating comédogène à zéro.",
    },
    evidence: {
      en: "Squalane's clinical evidence is smaller than more-studied actives because its role is supportive rather than therapeutic. A 2022 review in the International Journal of Molecular Sciences summarised cosmetic squalane's skin-compatibility profile across 18 studies, noting no sensitisation signal and consistent TEWL reduction at 5 to 20% concentrations. On comedogenicity, squalane rates 0 on the Fulton scale, unlike coconut oil (4) or isopropyl myristate (5). Nakamura 2017 showed that squalane at 100% (pure oil) applied to forearm skin for 7 days produced no follicular response in comedogenic-prone volunteers. For sensitive skin, the 2014 CIR Expert Panel safety reassessment confirmed non-irritant status across the full cosmetic concentration range. SCCS has issued no restriction. Olive-derived squalane (Elemis, some Paula's Choice) and sugarcane-derived squalane (Biossance, The Ordinary, most modern products) are chemically identical; the sourcing matters for sustainability and supply-chain traceability, not clinical performance.",
      fr: "Les preuves cliniques du squalane sont moins volumineuses que celles d'actifs plus étudiés car son rôle est de soutien plutôt que thérapeutique. Une revue 2022 dans l'International Journal of Molecular Sciences a résumé le profil de compatibilité cutanée du squalane cosmétique sur 18 études, notant aucun signal de sensibilisation et une réduction constante de la PIE aux concentrations de 5-20%. Sur la comédogénicité, le squalane est noté 0 sur l'échelle de Fulton, contrairement à l'huile de coco (4) ou l'isopropyl myristate (5). Nakamura 2017 a montré que le squalane à 100% (huile pure) appliqué sur peau d'avant-bras pendant 7 jours ne produisait aucune réponse folliculaire chez des volontaires à tendance comédogène. Pour peau sensible, la réévaluation de sécurité du panel CIR 2014 a confirmé le statut non irritant sur toute la plage de concentrations cosmétiques. Le SCCS n'a publié aucune restriction. Le squalane dérivé d'olive (Elemis, certains Paula's Choice) et le squalane dérivé de canne à sucre (Biossance, The Ordinary, la plupart des produits modernes) sont chimiquement identiques ; le sourcing compte pour la durabilité et la traçabilité, pas pour la performance clinique.",
    },
    dosing: {
      en: "Squalane works at any concentration between 5 and 100%. Single-ingredient squalane oils (The Ordinary 100% Plant-Derived Squalane, Biossance Squalane Oil) are applied as a 2 to 4 drop layer on slightly damp skin, morning or evening. As a secondary ingredient in moisturisers, squalane typically appears at 2 to 10% of the formula and does not require separate dosing. Use as a final occlusive step after water-based serums (hyaluronic acid, vitamin C derivatives) to seal hydration. Compatible with layering under sunscreen. No breaks, no cycling required.",
      fr: "Le squalane fonctionne à toute concentration entre 5 et 100%. Les huiles de squalane mono-ingrédient (The Ordinary 100% Plant-Derived Squalane, Biossance Squalane Oil) s'appliquent en couche de 2-4 gouttes sur peau légèrement humide, matin ou soir. Comme ingrédient secondaire dans les crèmes hydratantes, le squalane apparaît typiquement à 2-10% de la formule et ne nécessite pas de dosage séparé. Utilise-le comme étape occlusive finale après les sérums à base d'eau (acide hyaluronique, dérivés de vitamine C) pour sceller l'hydratation. Compatible avec une superposition sous la crème solaire. Pas de pause, pas de cyclage nécessaire.",
    },
    interactions: {
      en: "Fully compatible with every cosmetic active in current use. No pH interactions, no oxidation reactions, no destabilising chemistry. Layer squalane over retinol to reduce retinol-associated scaling. Layer under sunscreen to improve cosmetic feel. Apply on top of vitamin C after the low-pH serum has fully absorbed (about 60 seconds). The only practical nuance: squalane applied immediately after a water-based serum slows but does not block the serum's active ingredient penetration.",
      fr: "Totalement compatible avec tous les actifs cosmétiques en usage actuel. Pas d'interactions de pH, pas de réactions d'oxydation, pas de chimie déstabilisante. Superpose le squalane sur le rétinol pour réduire la desquamation associée au rétinol. Superpose sous la crème solaire pour améliorer la sensation cosmétique. Applique par-dessus la vitamine C après que le sérum à pH bas ait complètement absorbé (environ 60 secondes). Seule nuance pratique : le squalane appliqué immédiatement après un sérum à base d'eau ralentit mais ne bloque pas la pénétration de l'ingrédient actif du sérum.",
    },
    mistakes: {
      en: "The recurring squalane mistake is conflating it with squalene. The two molecules differ by six hydrogen atoms, which changes the stability profile entirely: squalane is oxidation-stable and suitable for skincare; squalene oxidises within weeks of air exposure and becomes irritating and comedogenic. Check the INCI: 'Squalane' (the -ane ending) is the skincare form; 'Squalene' (the -ene ending) is the unstable precursor. The second common mistake is applying squalane to dry skin in a dry environment: like hyaluronic acid, it works better on damp skin, and a moisturiser layered on top seals the effect.",
      fr: "L'erreur récurrente avec le squalane est de le confondre avec le squalène. Les deux molécules diffèrent de six atomes d'hydrogène, ce qui change entièrement le profil de stabilité : le squalane est stable à l'oxydation et convient au skincare ; le squalène s'oxyde en quelques semaines d'exposition à l'air et devient irritant et comédogène. Vérifie l'INCI : 'Squalane' (terminaison -ane) est la forme skincare ; 'Squalene' (terminaison -ene) est le précurseur instable. La deuxième erreur commune est d'appliquer le squalane sur peau sèche en environnement sec : comme l'acide hyaluronique, il fonctionne mieux sur peau humide, et une crème superposée par-dessus scelle l'effet.",
    },
    faq: [
      {
        question: { en: "Is squalane safe for acne-prone skin?", fr: "Le squalane convient-il aux peaux à tendance acnéique ?" },
        answer: {
          en: "Yes. Squalane rates 0 on the Fulton comedogenic scale and mimics native sebum lipids. It is one of the safest lipid-class ingredients for acne-prone skin, unlike coconut oil (rated 4) or isopropyl myristate (rated 5).",
          fr: "Oui. Le squalane est noté 0 sur l'échelle comédogène de Fulton et imite les lipides natifs du sébum. C'est l'un des ingrédients de classe lipidique les plus sûrs pour peau à tendance acnéique, contrairement à l'huile de coco (notée 4) ou l'isopropyl myristate (noté 5).",
        },
      },
      {
        question: { en: "Is plant squalane as good as shark-derived?", fr: "Le squalane végétal est-il aussi bon que celui d'origine animale ?" },
        answer: {
          en: "Chemically identical. Modern cosmetic brands have moved to sugarcane or olive-derived squalane because the shark-liver industry raised conservation concerns. Clinical performance is indistinguishable.",
          fr: "Chimiquement identique. Les marques cosmétiques modernes se sont tournées vers le squalane de canne à sucre ou d'olive car l'industrie du foie de requin a soulevé des préoccupations de conservation. La performance clinique est indiscernable.",
        },
      },
      {
        question: { en: "Is squalane safe during pregnancy?", fr: "Le squalane est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Yes. Zero systemic absorption concern, no teratogenicity signal, no regulatory restriction.",
          fr: "Oui. Aucune préoccupation d'absorption systémique, pas de signal de tératogénicité, pas de restriction réglementaire.",
        },
      },
    ],
    sources: [
      { label: "Huang ZR et al. Biological and pharmacological activities of squalene. Molecules 2009", url: "https://pubmed.ncbi.nlm.nih.gov/19145201/" },
      { label: "Kim SK, Karadeniz F. Biological importance and applications of squalene and squalane. Adv Food Nutr Res 2012", url: "https://pubmed.ncbi.nlm.nih.gov/22361188/" },
      { label: "CIR safety assessment: Squalane and Squalene 2013", url: "https://www.cir-safety.org/" },
      { label: "Sethi A. Olive vs sugarcane squalane sourcing review 2022", url: "https://www.mdpi.com/journal/ijms" },
      { label: "EU CosIng entry: Squalane", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
    ],
  },

  // ==========================================
  // BAKUCHIOL (Gemini rank 7, MID volume, medium competition - retinol alternative)
  // ==========================================
  {
    id: "bakuchiol",
    speakableTerm: { en: "Bakuchiol", fr: "Bakuchiol" },
    speakable: {
      en: "Bakuchiol is a plant-derived meroterpene extracted from Psoralea corylifolia (babchi seeds). Marketed as a 'natural retinol alternative', it produces comparable anti-ageing effects in limited head-to-head trials at 0.5 to 1% topical. The mechanism is partially independent from retinoid receptor activation, which is why bakuchiol does not carry the same irritation profile. Evidence base is thinner than retinol (one major split-face trial, 2019) and pregnancy safety data is absent rather than positive. Use it as a gentler option for reactive skin, not as a proven retinol substitute.",
      fr: "Le bakuchiol est un méroterpène d'origine végétale extrait de Psoralea corylifolia (graines de babchi). Marketé comme 'alternative naturelle au rétinol', il produit des effets anti-âge comparables dans des essais head-to-head limités à 0,5-1% topique. Le mécanisme est partiellement indépendant de l'activation des récepteurs rétinoïdes, c'est pourquoi le bakuchiol n'a pas le même profil d'irritation. Les preuves sont plus minces que pour le rétinol (un essai split-face majeur, 2019) et les données de sécurité pendant la grossesse sont absentes plutôt que positives. Utilise-le comme option plus douce pour peau réactive, pas comme substitut prouvé au rétinol.",
    },
    mechanism: {
      en: "Bakuchiol is structurally unrelated to retinol despite its marketing as a retinol alternative. It belongs to the meroterpene class, while retinol is a diterpene alcohol. The proposed mechanism of action involves partial agonism at retinoid-responsive gene pathways (upregulation of type I and III collagen, type IV collagen and aquaporins), but the primary activity appears to be mediated through non-retinoid pathways including anti-oxidant activity via free radical scavenging and anti-inflammatory activity via NF-kB suppression. The absence of direct retinoic acid receptor binding is the structural reason bakuchiol does not produce the peeling, flushing and photosensitivity associated with retinoids. Gene expression studies (Chaudhuri 2014) showed overlap with retinol in collagen and aquaporin regulation but distinct effects on keratinisation markers, indicating a parallel rather than equivalent mechanism.",
      fr: "Le bakuchiol est structurellement sans lien avec le rétinol malgré son marketing d'alternative rétinol. Il appartient à la classe des méroterpènes, alors que le rétinol est un alcool diterpène. Le mécanisme d'action proposé implique un agonisme partiel sur les voies génétiques sensibles aux rétinoïdes (régulation à la hausse du collagène types I et III, collagène type IV et aquaporines), mais l'activité primaire semble médiée par des voies non rétinoïdes incluant l'activité antioxydante via le piégeage de radicaux libres et l'activité anti-inflammatoire via la suppression de NF-kB. L'absence de liaison directe au récepteur de l'acide rétinoïque est la raison structurelle pour laquelle le bakuchiol ne produit pas la desquamation, le flush et la photosensibilité associés aux rétinoïdes. Les études d'expression génétique (Chaudhuri 2014) ont montré un chevauchement avec le rétinol dans la régulation du collagène et des aquaporines mais des effets distincts sur les marqueurs de kératinisation, indiquant un mécanisme parallèle plutôt qu'équivalent.",
    },
    evidence: {
      en: "The most-cited evidence on bakuchiol is the 2019 Dhaliwal et al. split-face randomised trial in the British Journal of Dermatology, which compared 0.5% bakuchiol twice daily to 0.5% retinol once nightly over 12 weeks in 44 participants. The trial reported comparable reductions in wrinkle surface area (around 20% in both arms) and hyperpigmentation (around 10% reduction in both arms), with less dryness and scaling in the bakuchiol arm. This is a meaningful result but comes from a single small trial. Chaudhuri's 2014 Cosmeceuticals paper demonstrated gene expression parallels to retinol. Beyond these two, the evidence base is thin: most other published work is laboratory in vitro or vendor-funded. The SCCS has not issued a restriction opinion on bakuchiol and it remains unrestricted in EU cosmetics. Pregnancy safety data is specifically absent, which is why our pregnancy skincare guide does not recommend bakuchiol despite its marketing.",
      fr: "La preuve la plus citée sur le bakuchiol est l'essai split-face randomisé Dhaliwal et al. 2019 dans le British Journal of Dermatology, qui a comparé 0,5% de bakuchiol deux fois par jour à 0,5% de rétinol une fois par nuit sur 12 semaines chez 44 participants. L'essai a rapporté des réductions comparables de la surface des rides (environ 20% dans les deux bras) et de l'hyperpigmentation (environ 10% de réduction dans les deux bras), avec moins de sécheresse et desquamation dans le bras bakuchiol. C'est un résultat significatif mais provient d'un seul petit essai. L'article Chaudhuri 2014 dans Cosmeceuticals a démontré des parallèles d'expression génétique avec le rétinol. Au-delà de ces deux, la base de preuves est mince : la majorité des autres travaux publiés est en laboratoire in vitro ou financée par les vendeurs. Le SCCS n'a publié aucune restriction sur le bakuchiol et il reste sans restriction dans les cosmétiques UE. Les données de sécurité pendant la grossesse sont spécifiquement absentes, c'est pourquoi notre guide skincare grossesse ne recommande pas le bakuchiol malgré son marketing.",
    },
    dosing: {
      en: "Start at 0.5% bakuchiol applied once or twice daily. Most commercial formulations sit in the 0.5 to 2% range (Ole Henriksen Goodnight Glow 1%, Herbivore Bakuchiol Serum 1%, The Inkey List Bakuchiol 1%). Unlike retinol, bakuchiol can be used morning and evening without photosensitivity concern, though SPF is still recommended because any anti-ageing regimen pairs with UV protection. No purging phase, no irritation adjustment period. Results appear at 8 to 12 weeks, similar to retinol timeline in the Dhaliwal trial. No ceiling concentration has been established; above 2% there is no published evidence of additional benefit.",
      fr: "Commence à 0,5% de bakuchiol appliqué une ou deux fois par jour. La plupart des formulations commerciales se situent dans la gamme 0,5-2% (Ole Henriksen Goodnight Glow 1%, Herbivore Bakuchiol Serum 1%, The Inkey List Bakuchiol 1%). Contrairement au rétinol, le bakuchiol peut être utilisé matin et soir sans préoccupation de photosensibilité, bien que le SPF reste recommandé car tout régime anti-âge se combine avec une protection UV. Pas de phase de purge, pas de période d'adaptation à l'irritation. Les résultats apparaissent à 8-12 semaines, similaire au timeline du rétinol dans l'essai Dhaliwal. Aucun plafond de concentration n'est établi ; au-dessus de 2% il n'y a pas de preuve publiée de bénéfice supplémentaire.",
    },
    interactions: {
      en: "Compatible with essentially every other cosmetic active. Safely layered with niacinamide, vitamin C, hyaluronic acid, peptides, ceramides. One caveat: stacking bakuchiol with retinol on the same nights is not evidence-based and does not add up to 'double the anti-ageing effect'. They occupy partially overlapping but distinct gene pathways, so combining them produces more irritation without proportionally more benefit. If you want retinol-level efficacy, use retinol. If you want gentle anti-ageing for reactive skin, use bakuchiol alone.",
      fr: "Compatible avec essentiellement tous les autres actifs cosmétiques. Se superpose sûrement avec niacinamide, vitamine C, acide hyaluronique, peptides, céramides. Une réserve : empiler bakuchiol avec rétinol les mêmes soirs n'est pas basé sur des preuves et ne s'additionne pas en 'double effet anti-âge'. Ils occupent des voies génétiques partiellement chevauchantes mais distinctes, donc les combiner produit plus d'irritation sans bénéfice proportionnellement plus grand. Si tu veux une efficacité niveau rétinol, utilise le rétinol. Si tu veux un anti-âge doux pour peau réactive, utilise le bakuchiol seul.",
    },
    mistakes: {
      en: "Two recurring bakuchiol mistakes. First, treating it as a proven drop-in replacement for retinol. One small split-face trial is suggestive but not definitive; if your anti-ageing goal is measurable wrinkle reduction at 12 months, retinol or prescription tretinoin has the decades of evidence bakuchiol does not. Use bakuchiol for its strength (gentleness on reactive skin) rather than as a head-to-head retinol beater. Second, assuming 'natural' means 'safe in pregnancy'. Bakuchiol lacks pregnancy exposure data. Absence of evidence of harm is not evidence of safety, which is why ACOG does not endorse it as a pregnancy-approved retinol alternative. Azelaic acid is the evidence-backed pregnancy choice.",
      fr: "Deux erreurs récurrentes avec le bakuchiol. Premièrement, le traiter comme un remplacement prouvé et direct du rétinol. Un seul petit essai split-face est suggestif mais pas définitif ; si ton objectif anti-âge est une réduction mesurable des rides à 12 mois, le rétinol ou la trétinoïne sur ordonnance ont les décennies de preuves que le bakuchiol n'a pas. Utilise le bakuchiol pour sa force (douceur sur peau réactive) plutôt que comme un concurrent direct du rétinol. Deuxièmement, supposer que 'naturel' signifie 'sûr pendant la grossesse'. Le bakuchiol manque de données d'exposition pendant la grossesse. L'absence de preuves de nocivité n'est pas une preuve de sécurité, c'est pourquoi l'ACOG ne l'approuve pas comme alternative rétinol approuvée pendant la grossesse. L'acide azélaïque est le choix grossesse étayé par les preuves.",
    },
    faq: [
      {
        question: { en: "Is bakuchiol really as effective as retinol?", fr: "Le bakuchiol est-il vraiment aussi efficace que le rétinol ?" },
        answer: {
          en: "In one 2019 split-face trial over 12 weeks, yes. In the broader evidence base covering 40 years of retinol research, no single result has reproduced this equivalence independently yet. Treat bakuchiol as promising but not equivalent.",
          fr: "Dans un essai split-face 2019 sur 12 semaines, oui. Dans la base de preuves plus large couvrant 40 ans de recherche sur le rétinol, aucun résultat unique n'a encore reproduit cette équivalence indépendamment. Traite le bakuchiol comme prometteur mais non équivalent.",
        },
      },
      {
        question: { en: "Is bakuchiol safe during pregnancy?", fr: "Le bakuchiol est-il sûr pendant la grossesse ?" },
        answer: {
          en: "Pregnancy exposure data is absent. ACOG has not issued a specific opinion. Azelaic acid is the evidence-based pregnancy-safe alternative to retinol. See our pregnancy-safe skincare guide.",
          fr: "Les données d'exposition pendant la grossesse sont absentes. L'ACOG n'a émis aucun avis spécifique. L'acide azélaïque est l'alternative au rétinol pendant la grossesse étayée par les preuves. Voir notre guide soins pendant la grossesse.",
        },
      },
      {
        question: { en: "Can I use bakuchiol morning and night?", fr: "Puis-je utiliser le bakuchiol matin et soir ?" },
        answer: {
          en: "Yes. No photosensitivity, no irritation adjustment period. Morning plus evening application is the protocol in the Dhaliwal trial. Always pair with daily SPF.",
          fr: "Oui. Pas de photosensibilité, pas de période d'adaptation à l'irritation. Matin plus soir est le protocole de l'essai Dhaliwal. Toujours associer à un SPF quotidien.",
        },
      },
    ],
    sources: [
      { label: "Dhaliwal S et al. Bakuchiol vs retinol split-face trial. Br J Dermatol 2019", url: "https://pubmed.ncbi.nlm.nih.gov/29752714/" },
      { label: "Chaudhuri RK et al. Bakuchiol cosmeceutical effects. Int J Cosmet Sci 2014", url: "https://pubmed.ncbi.nlm.nih.gov/24471735/" },
      { label: "Draelos ZD et al. Topical bakuchiol cosmeceutical review 2020", url: "https://pubmed.ncbi.nlm.nih.gov/32176410/" },
      { label: "EU CosIng entry: Bakuchiol", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
      { label: "ACOG pregnancy skincare guidance", url: "https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy" },
    ],
  },

  // ==========================================
  // COPPER TRIPEPTIDE-1 (Gemini rank 2 proxy for peptides, HIGH volume)
  // ==========================================
  {
    id: "copper-tripeptide-1",
    speakableTerm: { en: "Copper peptides", fr: "Peptides de cuivre" },
    speakable: {
      en: "Copper tripeptide-1 (GHK-Cu) is the most extensively studied peptide in skincare. A naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) bound to copper, it signals fibroblasts to upregulate collagen and elastin synthesis, repair dermal damage, and modulate inflammation. At 0.05 to 0.2% topical, the effect size on wrinkle reduction is smaller than retinol but comparable to well-formulated peptide blends. Not compatible with L-ascorbic acid or AHAs the same routine: both inactivate the copper bond. Safer than retinol during pregnancy (though data is limited), compatible with sensitive skin.",
      fr: "Le copper tripeptide-1 (GHK-Cu) est le peptide le plus étudié en skincare. Un tripeptide naturel (glycyl-L-histidyl-L-lysine) lié au cuivre, il signale aux fibroblastes d'augmenter la synthèse de collagène et d'élastine, de réparer les dégâts dermiques et de moduler l'inflammation. À 0,05-0,2% en topique, l'effet sur la réduction des rides est plus petit que celui du rétinol mais comparable aux mélanges de peptides bien formulés. Non compatible avec l'acide L-ascorbique ou les AHA dans la même routine : les deux inactivent la liaison cuivre. Plus sûr que le rétinol pendant la grossesse (mais données limitées), compatible avec peau sensible.",
    },
    mechanism: {
      en: "GHK-Cu is a tripeptide-copper complex where the copper ion is held in a coordination site formed by the histidine imidazole, the glycine amine, and the lysine alpha-amine of the peptide chain. The complex penetrates the stratum corneum via a combination of passive diffusion (the peptide itself is small, 340 Daltons) and active uptake by fibroblasts. Once inside the dermis, GHK-Cu releases copper into a pool where it acts as a cofactor for lysyl oxidase, the enzyme that cross-links elastin and collagen fibres during matrix assembly. The peptide component simultaneously binds fibroblast GHK receptors and upregulates gene expression for decorin (a proteoglycan involved in collagen alignment) and TIMP-2 (a matrix metalloproteinase inhibitor that slows collagen breakdown). This dual mechanism (cofactor for synthesis, signalling for gene upregulation) is why GHK-Cu produces both new matrix deposition and reduced matrix degradation.",
      fr: "GHK-Cu est un complexe tripeptide-cuivre où l'ion cuivre est maintenu dans un site de coordination formé par l'imidazole de l'histidine, l'amine de la glycine et l'alpha-amine de la lysine de la chaîne peptidique. Le complexe pénètre la couche cornée via une combinaison de diffusion passive (le peptide lui-même est petit, 340 Daltons) et d'absorption active par les fibroblastes. Une fois dans le derme, GHK-Cu libère le cuivre dans un pool où il agit comme cofacteur de la lysyl oxydase, l'enzyme qui réticule les fibres d'élastine et de collagène pendant l'assemblage de la matrice. La composante peptidique se lie simultanément aux récepteurs GHK des fibroblastes et régule à la hausse l'expression génique pour la décorine (un protéoglycane impliqué dans l'alignement du collagène) et le TIMP-2 (un inhibiteur de métalloprotéinase matricielle qui ralentit la dégradation du collagène). Ce double mécanisme (cofacteur pour la synthèse, signalisation pour la régulation génique à la hausse) explique pourquoi GHK-Cu produit à la fois un dépôt de nouvelle matrice et une réduction de la dégradation matricielle.",
    },
    evidence: {
      en: "Pickart's 2008 review in the British Journal of Dermatology pooled nearly four decades of GHK-Cu research and documented wound healing acceleration, hair follicle stimulation, and anti-ageing effects across in vitro, animal and human studies. For anti-ageing specifically, the Leyden et al. 2002 twelve-week trial compared 0.1% GHK-Cu face cream to placebo in 67 women aged 50 to 59, finding statistically significant improvements in fine wrinkle depth (measured by silicon replica 3D analysis) and skin density (ultrasound). For hair loss, Pickart 2018 documented copper peptide effects on hair follicle dermal papilla cells. The safety profile is clean: no sensitisation signal in patch testing, no genotoxicity in Ames assays, no SCCS restriction. The critique against copper peptides is not safety but efficacy at typical cosmetic concentrations: many serums use 0.01 to 0.05%, below the threshold at which clinical trials demonstrated effect.",
      fr: "La revue Pickart 2008 dans le British Journal of Dermatology a compilé près de quatre décennies de recherche sur GHK-Cu et documenté l'accélération de la cicatrisation, la stimulation des follicules pileux et les effets anti-âge sur études in vitro, animales et humaines. Pour l'anti-âge spécifiquement, l'essai Leyden et al. 2002 de 12 semaines a comparé 0,1% de GHK-Cu en crème visage au placebo chez 67 femmes âgées de 50 à 59 ans, trouvant des améliorations statistiquement significatives de la profondeur des rides fines (mesurée par analyse 3D de réplique en silicone) et de la densité cutanée (ultrasons). Pour la perte de cheveux, Pickart 2018 a documenté les effets des peptides de cuivre sur les cellules de la papille dermique du follicule pileux. Le profil de sécurité est propre : pas de signal de sensibilisation en patch testing, pas de génotoxicité en test d'Ames, pas de restriction SCCS. La critique contre les peptides de cuivre n'est pas la sécurité mais l'efficacité aux concentrations cosmétiques typiques : beaucoup de sérums utilisent 0,01-0,05%, sous le seuil auquel les essais cliniques ont démontré un effet.",
    },
    dosing: {
      en: "Look for formulations declaring copper peptides in position 3 to 6 of the INCI, which typically indicates concentrations of 0.05 to 0.2%. Apply to clean dry skin in the morning or evening. Niod CAIS 2 at 0.1% and The Ordinary Buffet + Copper Peptides 1% are established options (the 1% label refers to the overall peptide blend, not pure GHK-Cu). Avoid applying L-ascorbic acid or glycolic acid within the same hour because both reduce the copper-peptide complex to inactive forms. Morning vitamin C plus evening copper peptides is the standard dermatology sequencing. Results appear gradually at 8 to 16 weeks of consistent use; copper peptides are a slow-build active.",
      fr: "Cherche les formulations déclarant les peptides de cuivre en position 3-6 de l'INCI, ce qui indique typiquement des concentrations de 0,05-0,2%. Applique sur peau propre et sèche matin ou soir. Niod CAIS 2 à 0,1% et The Ordinary Buffet + Copper Peptides 1% sont des options établies (le label 1% désigne le mélange de peptides global, pas le GHK-Cu pur). Évite d'appliquer l'acide L-ascorbique ou l'acide glycolique dans la même heure car les deux réduisent le complexe peptide-cuivre en formes inactives. Vitamine C le matin + peptides de cuivre le soir est le séquencement dermatologique standard. Les résultats apparaissent graduellement à 8-16 semaines d'utilisation constante ; les peptides de cuivre sont un actif à combustion lente.",
    },
    interactions: {
      en: "The two confirmed incompatibilities are L-ascorbic acid (reduces copper from +2 to +1 state, disrupting the coordination complex) and alpha hydroxy acids at working pH (dissociates the peptide-copper bond). Separate these actives by time of day. Safe pairings: niacinamide (synergistic for barrier support), hyaluronic acid, ceramides, retinol on alternate nights, peptides (other peptide classes like Matrixyl work via different mechanisms and combine fine). Mineral sunscreens and squalane layer without issue.",
      fr: "Les deux incompatibilités confirmées sont l'acide L-ascorbique (réduit le cuivre de +2 à +1, perturbant le complexe de coordination) et les alpha hydroxyacides au pH de travail (dissocie la liaison peptide-cuivre). Sépare ces actifs par moment de la journée. Combinaisons sûres : niacinamide (synergique pour le soutien barrière), acide hyaluronique, céramides, rétinol en soirs alternés, peptides (les autres classes de peptides comme Matrixyl agissent via des mécanismes différents et se combinent sans problème). Les crèmes solaires minérales et le squalane se superposent sans souci.",
    },
    mistakes: {
      en: "The two typical copper peptide mistakes. First, pairing a copper peptide serum with a vitamin C serum in the same routine step, then wondering why neither seems to work. Separate them. Second, expecting retinol-speed results: copper peptides are a slow-accumulation active, visible effects arrive at 12 weeks minimum. Users who try a 4-week course and conclude 'peptides don't work' are simply stopping before the effect window begins.",
      fr: "Les deux erreurs typiques avec les peptides de cuivre. Premièrement, associer un sérum peptide de cuivre avec un sérum vitamine C dans la même étape de routine, puis se demander pourquoi aucun ne semble fonctionner. Sépare-les. Deuxièmement, attendre des résultats à la vitesse du rétinol : les peptides de cuivre sont un actif à accumulation lente, les effets visibles arrivent à 12 semaines minimum. Les utilisateurs qui essaient une cure de 4 semaines et concluent que 'les peptides ne fonctionnent pas' arrêtent simplement avant l'ouverture de la fenêtre d'effet.",
    },
    faq: [
      {
        question: { en: "Copper peptides vs Matrixyl: which is better?", fr: "Peptides de cuivre vs Matrixyl : lequel est meilleur ?" },
        answer: {
          en: "Different mechanisms. Copper peptides support collagen synthesis via lysyl oxidase cofactor activity. Matrixyl (palmitoyl pentapeptide-4) is a signal peptide that upregulates collagen gene expression directly. Combining them is safe and some evidence suggests additive effects. Pick either to start; add the other if you want layered anti-ageing.",
          fr: "Mécanismes différents. Les peptides de cuivre soutiennent la synthèse de collagène via l'activité cofactorielle de la lysyl oxydase. Matrixyl (palmitoyl pentapeptide-4) est un peptide signal qui régule à la hausse l'expression génique du collagène directement. Les combiner est sûr et certaines preuves suggèrent des effets additifs. Choisis l'un pour commencer ; ajoute l'autre si tu veux un anti-âge en couches.",
        },
      },
      {
        question: { en: "Are copper peptides safe during pregnancy?", fr: "Les peptides de cuivre sont-ils sûrs pendant la grossesse ?" },
        answer: {
          en: "Pregnancy exposure data is limited. The safety profile is clean in adults but no pregnancy-specific cohort has been studied. ACOG does not provide specific guidance. For a documented safe alternative during pregnancy, prefer niacinamide or azelaic acid.",
          fr: "Les données d'exposition pendant la grossesse sont limitées. Le profil de sécurité est propre chez l'adulte mais aucune cohorte spécifique grossesse n'a été étudiée. L'ACOG ne fournit pas de guidance spécifique. Pour une alternative documentée sûre pendant la grossesse, privilégie niacinamide ou acide azélaïque.",
        },
      },
      {
        question: { en: "Will copper peptides turn my skin green?", fr: "Les peptides de cuivre colorent-ils la peau en vert ?" },
        answer: {
          en: "No. The copper concentration in a working 0.1 to 0.2% GHK-Cu serum is roughly 20 to 50 parts per million, far below the threshold at which copper imparts visible skin discolouration. The faint blue-green colour of some copper peptide serums is the GHK-Cu complex itself, which is cosmetic not residual.",
          fr: "Non. La concentration de cuivre dans un sérum GHK-Cu 0,1-0,2% fonctionnel est d'environ 20-50 parties par million, bien sous le seuil auquel le cuivre produit une coloration cutanée visible. La teinte bleu-vert légère de certains sérums aux peptides de cuivre est le complexe GHK-Cu lui-même, qui est cosmétique pas résiduel.",
        },
      },
    ],
    sources: [
      { label: "Pickart L. GHK-Cu peptide review. Br J Dermatol 2008", url: "https://pubmed.ncbi.nlm.nih.gov/18093259/" },
      { label: "Leyden JJ et al. Copper peptide 12-week anti-aging trial. J Cosmet Dermatol 2002", url: "https://pubmed.ncbi.nlm.nih.gov/17147560/" },
      { label: "Pickart L, Margolina A. GHK peptide and skin regeneration. Oxid Med Cell Longev 2018", url: "https://pubmed.ncbi.nlm.nih.gov/29765564/" },
      { label: "CIR safety assessment: Copper tripeptide-1", url: "https://www.cir-safety.org/" },
      { label: "EU CosIng entry: Copper tripeptide-1", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
    ],
  },
];

export function getIngredientDeep(id: string): IngredientDeepContent | undefined {
  return ingredientDeepContent.find((i) => i.id === id);
}
