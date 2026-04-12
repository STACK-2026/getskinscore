// SkinScore Star Product Content
// Deep editorial reviews for the most searched products.
// These are the products people Google the most - every word here ranks.

export interface StarProductContent {
  id: string;
  editorialReview: { en: string; fr: string };
  howToUse: { en: string; fr: string };
  whoIsItFor: { en: string; fr: string };
  whatToExpect: { en: string; fr: string };
  commonMistakes: { en: string; fr: string };
  faq: Array<{
    question: { en: string; fr: string };
    answer: { en: string; fr: string };
  }>;
  vsCompetitors: Array<{
    competitorId: string;
    competitorName: string;
    verdict: { en: string; fr: string };
  }>;
}

export const starProductContent: StarProductContent[] = [
  // ===========================
  // CERAVE MOISTURIZING CREAM
  // ===========================
  {
    id: "cerave-moisturizing-cream",
    editorialReview: {
      en: "CeraVe Moisturizing Cream is arguably the most recommended moisturizer in dermatology. Developed with dermatologists, it contains three essential ceramides (NP, AP, EOP) that make up 50% of your skin's natural barrier, plus hyaluronic acid for hydration and niacinamide for barrier support. The MVE (MultiVesicular Emulsion) technology releases these ingredients gradually over 24 hours rather than dumping them all at once. At around 15 EUR for 340g, the value is unmatched in the ceramide moisturizer category. It's the moisturizer dermatologists recommend when they don't want to recommend a specific brand - because it simply works for almost everyone.",
      fr: "CeraVe Moisturizing Cream est probablement l'hydratant le plus recommande en dermatologie. Developpe avec des dermatologues, il contient trois ceramides essentiels (NP, AP, EOP) qui composent 50% de la barriere naturelle de ta peau, plus de l'acide hyaluronique et du niacinamide. La technologie MVE (MultiVesicular Emulsion) libere ces ingredients progressivement sur 24 heures. A environ 15 EUR les 340g, le rapport qualite-prix est imbattable dans la categorie des hydratants aux ceramides. C'est l'hydratant que les dermatologues recommandent quand ils ne veulent pas recommander une marque specifique - parce qu'il fonctionne tout simplement pour presque tout le monde.",
    },
    howToUse: {
      en: "Apply to slightly damp skin (within 3 minutes of washing) to lock in moisture. Use a pea-sized amount for the face, more for the body. Can be used morning and night. In winter or for very dry skin, layer over a hyaluronic acid serum for extra hydration. The tub format is more hygienic with a spatula - avoid dipping fingers directly to prevent bacterial contamination.",
      fr: "Applique sur peau legerement humide (dans les 3 minutes apres le nettoyage) pour retenir l'hydratation. Utilise une quantite de la taille d'un pois pour le visage, plus pour le corps. Utilisable matin et soir. En hiver ou pour peau tres seche, superpose par-dessus un serum a l'acide hyaluronique. Le format pot est plus hygienique avec une spatule - evite de plonger les doigts directement pour prevenir la contamination bacterienne.",
    },
    whoIsItFor: {
      en: "Best for: dry to normal skin, eczema-prone skin, sensitive skin, post-procedure recovery, anyone wanting a simple effective moisturizer. Less ideal for: very oily skin (may feel heavy), those who dislike thick textures, people who need anti-aging actives (it moisturizes but doesn't treat wrinkles).",
      fr: "Ideal pour : peau seche a normale, peau a tendance eczema, peau sensible, recuperation post-acte, toute personne cherchant un hydratant simple et efficace. Moins adapte pour : peau tres grasse (peut paraitre lourd), ceux qui n'aiment pas les textures epaisses, ceux qui ont besoin d'actifs anti-age (il hydrate mais ne traite pas les rides).",
    },
    whatToExpect: {
      en: "Week 1-2: immediate hydration relief, skin feels softer. Week 3-4: skin barrier starts strengthening, less sensitivity and tightness. Month 2+: consistent hydration, reduced flaking, calmer skin. Don't expect: wrinkle reduction, brightening, acne treatment. This is a barrier repair moisturizer, not a treatment product.",
      fr: "Semaine 1-2 : soulagement hydratant immediat, peau plus douce. Semaine 3-4 : la barriere cutanee commence a se renforcer, moins de sensibilite et de tiraillement. Mois 2+ : hydratation constante, moins de desquamation, peau plus calme. N'attends pas : reduction des rides, eclat, traitement de l'acne. C'est un hydratant reparateur de barriere, pas un produit de traitement.",
    },
    commonMistakes: {
      en: "1. Applying to dry skin - always apply to damp skin for best absorption. 2. Using too much on oily skin - a tiny amount is enough. 3. Expecting anti-aging results - it moisturizes but doesn't treat wrinkles. 4. Storing with lid open - the tub format can dry out. 5. Not using SPF on top in the morning - CeraVe has no UV protection.",
      fr: "1. Appliquer sur peau seche - toujours appliquer sur peau humide pour une meilleure absorption. 2. En utiliser trop sur peau grasse - une toute petite quantite suffit. 3. Attendre des resultats anti-age - il hydrate mais ne traite pas les rides. 4. Stocker couvercle ouvert - le format pot peut secher. 5. Ne pas mettre de SPF par-dessus le matin - CeraVe n'a aucune protection UV.",
    },
    faq: [
      {
        question: { en: "Is CeraVe Moisturizing Cream good for acne-prone skin?", fr: "CeraVe Moisturizing Cream convient-il aux peaux acneiques ?" },
        answer: { en: "It's non-comedogenic and fragrance-free, so it won't cause acne. However, the thick texture may feel too heavy for very oily, acne-prone skin. If you break out from rich creams, try CeraVe PM Lotion instead - same ceramides in a lighter formula.", fr: "Il est non comedogene et sans parfum, donc il ne causera pas d'acne. Cependant, la texture epaisse peut paraitre trop lourde pour les peaux tres grasses et acneiques. Si tu fais des eruptions avec les cremes riches, essaie plutot CeraVe PM Lotion - memes ceramides dans une formule plus legere." },
      },
      {
        question: { en: "CeraVe tub vs tube - is there a difference?", fr: "CeraVe pot vs tube - y a-t-il une difference ?" },
        answer: { en: "The formula is identical. The tub (340g/454g) is better value but less hygienic (use a spatula). The tube (177ml) is more portable and sanitary. For face use, many dermatologists recommend the tube. For body, the tub makes sense economically.", fr: "La formule est identique. Le pot (340g/454g) est plus economique mais moins hygienique (utilise une spatule). Le tube (177ml) est plus portable et sanitaire. Pour le visage, beaucoup de dermatologues recommandent le tube. Pour le corps, le pot a plus de sens economiquement." },
      },
      {
        question: { en: "Can I use CeraVe Moisturizing Cream with retinol?", fr: "Puis-je utiliser CeraVe Moisturizing Cream avec du retinol ?" },
        answer: { en: "Yes, and it's one of the best moisturizers to pair with retinol. The ceramides help buffer irritation from retinoids. Apply retinol first on dry skin, wait 5-10 minutes, then apply CeraVe on top. The 'retinol sandwich' method (CeraVe, retinol, CeraVe) works too for beginners.", fr: "Oui, et c'est l'un des meilleurs hydratants a associer au retinol. Les ceramides aident a tamponner l'irritation des retinoides. Applique le retinol d'abord sur peau seche, attends 5-10 minutes, puis applique CeraVe par-dessus. La methode 'sandwich retinol' (CeraVe, retinol, CeraVe) fonctionne aussi pour les debutants." },
      },
    ],
    vsCompetitors: [
      {
        competitorId: "la-roche-posay-cicaplast-baume-b5",
        competitorName: "La Roche-Posay Cicaplast Baume B5+",
        verdict: {
          en: "CeraVe is better for daily moisturizing (ceramides, larger format, better value). Cicaplast is better for acute repair (post-procedure, burns, intense irritation). Think of CeraVe as your daily driver and Cicaplast as your emergency repair kit.",
          fr: "CeraVe est meilleur pour l'hydratation quotidienne (ceramides, plus grand format, meilleur rapport qualite-prix). Cicaplast est meilleur pour la reparation aigue (post-acte, brulures, irritation intense). Pense a CeraVe comme ton hydratant quotidien et Cicaplast comme ton kit de reparation d'urgence.",
        },
      },
      {
        competitorId: "neutrogena-hydro-boost-water-gel",
        competitorName: "Neutrogena Hydro Boost Water Gel",
        verdict: {
          en: "Neutrogena is lighter and better for oily skin, but contains fragrance (CeraVe doesn't). CeraVe has ceramides for barrier repair (Neutrogena doesn't). For dry/sensitive skin, CeraVe wins. For oily skin wanting lightweight hydration, Neutrogena wins - but check the fragrance-free version.",
          fr: "Neutrogena est plus leger et meilleur pour peau grasse, mais contient du parfum (pas CeraVe). CeraVe a des ceramides pour la barriere (pas Neutrogena). Pour peau seche/sensible, CeraVe gagne. Pour peau grasse voulant une hydratation legere, Neutrogena gagne - mais verifie la version sans parfum.",
        },
      },
    ],
  },

  // ===========================
  // THE ORDINARY NIACINAMIDE 10% + ZINC 1%
  // ===========================
  {
    id: "the-ordinary-niacinamide-10-zinc-1",
    editorialReview: {
      en: "This is the product that made The Ordinary a global phenomenon. At 6 EUR for 30ml, it delivers 10% niacinamide (vitamin B3) and 1% zinc PCA - a combination that targets pores, oil control, and blemishes simultaneously. It's the most-purchased serum on the planet for a reason: it works, it's cheap, and it's compatible with almost everything else in your routine. The formula is deliberately minimal (11 ingredients) with no fragrance, no unnecessary fillers. What you see is what you get. The only catch: 10% niacinamide is higher than what most studies use (2-5%), and some people experience temporary flushing at this concentration. If that happens, try using it every other day or buffering with moisturizer.",
      fr: "C'est le produit qui a fait de The Ordinary un phenomene mondial. A 6 EUR les 30ml, il delivre 10% de niacinamide (vitamine B3) et 1% de zinc PCA - une combinaison qui cible pores, controle du sebum et imperfections simultanement. C'est le serum le plus achete au monde pour une bonne raison : il fonctionne, il est pas cher, et il est compatible avec presque tout. La formule est deliberement minimale (11 ingredients) sans parfum, sans fillers inutiles. Ce que tu vois est ce que tu obtiens. Le seul bemol : 10% de niacinamide est plus eleve que ce que la plupart des etudes utilisent (2-5%), et certaines personnes ressentent des rougeurs passageres a cette concentration.",
    },
    howToUse: {
      en: "Apply 2-3 drops to clean, slightly damp skin before moisturizer. Can be used AM and PM. In the AM, follow with SPF. Compatible with most actives including vitamin C (the old myth that they cancel each other out is debunked). If you experience flushing, try: 1) reducing to every other day, 2) mixing with moisturizer, 3) switching to a 5% niacinamide product. Avoid layering with too many water-based serums at once (pilling risk).",
      fr: "Applique 2-3 gouttes sur peau propre et legerement humide avant l'hydratant. Utilisable matin et soir. Le matin, enchaine avec un SPF. Compatible avec la plupart des actifs y compris la vitamine C (le vieux mythe qu'ils s'annulent est dementi). Si tu ressens des rougeurs, essaie : 1) reduire a un jour sur deux, 2) melanger avec ton hydratant, 3) passer a un produit a 5% de niacinamide. Evite de superposer trop de serums aqueux en meme temps (risque de boulochage).",
    },
    whoIsItFor: {
      en: "Best for: oily/combination skin, acne-prone skin, enlarged pores, post-acne marks, uneven skin tone. Works for all skin types but shines brightest on oily skin. Less ideal for: very dry skin (not hydrating enough alone), extremely sensitive skin that reacts to 10% concentration.",
      fr: "Ideal pour : peau grasse/mixte, peau acneique, pores dilates, marques post-acne, teint irregulier. Fonctionne pour tous les types de peau mais brille surtout sur peau grasse. Moins adapte pour : peau tres seche (pas assez hydratant seul), peau extremement sensible qui reagit a la concentration de 10%.",
    },
    whatToExpect: {
      en: "Week 1-2: reduced oiliness, skin feels mattified. Week 3-4: pores start appearing smaller, fewer new blemishes. Month 2-3: visible reduction in post-acne marks, more even skin tone. Month 3+: consistent oil control, clearer complexion. Full results on hyperpigmentation take 8-12 weeks.",
      fr: "Semaine 1-2 : reduction de la brillance, peau matifiee. Semaine 3-4 : les pores commencent a paraitre plus petits, moins de nouvelles imperfections. Mois 2-3 : reduction visible des marques post-acne, teint plus uniforme. Mois 3+ : controle du sebum constant, teint plus clair. Resultats complets sur l'hyperpigmentation en 8-12 semaines.",
    },
    commonMistakes: {
      en: "1. Using too much - 2-3 drops is enough, more won't work better and increases pilling risk. 2. Expecting instant pore shrinkage - niacinamide works over weeks, not days. 3. Layering over 3+ serums - causes pilling and reduces absorption. 4. Panicking about flushing - temporary redness at 10% is normal, not an allergy. 5. Skipping moisturizer - niacinamide doesn't replace your moisturizer.",
      fr: "1. En utiliser trop - 2-3 gouttes suffisent, plus ne fonctionnera pas mieux et augmente le risque de boulochage. 2. Attendre un retrecissement instantane des pores - le niacinamide agit en semaines, pas en jours. 3. Superposer 3+ serums - cause du boulochage et reduit l'absorption. 4. Paniquer a cause des rougeurs - la rougeur temporaire a 10% est normale, pas une allergie. 5. Sauter l'hydratant - le niacinamide ne remplace pas ton hydratant.",
    },
    faq: [
      {
        question: { en: "Can I use The Ordinary Niacinamide with vitamin C?", fr: "Puis-je utiliser le Niacinamide The Ordinary avec la vitamine C ?" },
        answer: { en: "Yes. The idea that niacinamide and vitamin C cancel each other out is a myth from a 1960s study under extreme conditions impossible in skincare. Modern formulations are stable. You can use both in the same routine, even in the same step. Many products contain both.", fr: "Oui. L'idee que le niacinamide et la vitamine C s'annulent est un mythe issu d'une etude des annees 1960 dans des conditions extremes impossibles en skincare. Les formulations modernes sont stables. Tu peux utiliser les deux dans la meme routine, meme dans la meme etape." },
      },
      {
        question: { en: "Is 10% niacinamide too much?", fr: "10% de niacinamide, c'est trop ?" },
        answer: { en: "Most clinical studies showing benefits use 2-5%. Going to 10% doesn't double the results but can increase flushing risk. It still works and is safe, but if you're sensitive, a 5% product (like CeraVe PM Lotion which contains niacinamide at ~4%) may give similar results with less irritation risk.", fr: "La plupart des etudes cliniques montrant des benefices utilisent 2-5%. Passer a 10% ne double pas les resultats mais peut augmenter le risque de rougeurs. Ca fonctionne et c'est sur, mais si tu es sensible, un produit a 5% (comme CeraVe PM Lotion qui contient du niacinamide a ~4%) peut donner des resultats similaires avec moins de risque d'irritation." },
      },
    ],
    vsCompetitors: [
      {
        competitorId: "svr-sebiaclear-serum",
        competitorName: "SVR Sebiaclear Serum",
        verdict: {
          en: "SVR combines niacinamide (4%) with 14% gluconolactone (PHA) and salicylic acid - a more complete anti-acne formula. But it costs 3x more. The Ordinary is pure niacinamide at maximum strength. For oil control only, TO wins on value. For full anti-acne treatment, SVR is more complete.",
          fr: "SVR combine niacinamide (4%) avec 14% gluconolactone (PHA) et acide salicylique - une formule anti-acne plus complete. Mais il coute 3x plus cher. The Ordinary est du niacinamide pur a concentration maximale. Pour le controle du sebum seul, TO gagne en rapport qualite-prix. Pour un traitement anti-acne complet, SVR est plus complet.",
        },
      },
      {
        competitorId: "the-inkey-list-niacinamide",
        competitorName: "The INKEY List Niacinamide",
        verdict: {
          en: "Very similar products at similar price points. The INKEY List uses 10% niacinamide + 1% hyaluronic acid (vs The Ordinary's zinc PCA). Choose TO if your main concern is oil/pores. Choose INKEY List if you want more hydration alongside the niacinamide.",
          fr: "Des produits tres similaires a des prix comparables. The INKEY List utilise 10% niacinamide + 1% acide hyaluronique (vs le zinc PCA de The Ordinary). Choisis TO si ta preoccupation principale est le sebum/les pores. Choisis INKEY List si tu veux plus d'hydratation en plus du niacinamide.",
        },
      },
    ],
  },

  // ===========================
  // LA MER - CREME DE LA MER
  // ===========================
  {
    id: "la-mer-creme-de-la-mer",
    editorialReview: {
      en: "Let's address the elephant in the room: Creme de la Mer scores a C (67/100) despite costing 350 EUR for 60ml. Why? Because SkinScore rates ingredients, not marketing stories. The formula is built around mineral oil, petrolatum, and algae extract - effective occlusives, but available in 5 EUR products. It contains fragrance (an allergen), lime extract (a photosensitizer), and eucalyptus oil (an irritant). The famous 'Miracle Broth' is essentially a fermented algae extract with no published clinical trials proving it outperforms cheaper alternatives. Is it a bad product? No. Is it worth 350 EUR based on ingredients alone? The science says no. A 15 EUR CeraVe with ceramides + niacinamide + hyaluronic acid delivers more proven actives. But skincare is also about experience, ritual, and how a product makes you feel - and La Mer excels at that.",
      fr: "Abordons le sujet qui fache : Creme de la Mer obtient un C (67/100) malgre un prix de 350 EUR les 60ml. Pourquoi ? Parce que SkinScore note les ingredients, pas les histoires marketing. La formule est construite autour d'huile minerale, de vaseline et d'extrait d'algue - des occlusifs efficaces, mais disponibles dans des produits a 5 EUR. Elle contient du parfum (un allergene), de l'extrait de citron vert (un photosensibilisant) et de l'huile d'eucalyptus (un irritant). Le fameux 'Miracle Broth' est essentiellement un extrait d'algue fermente sans essais cliniques publies prouvant qu'il surpasse des alternatives moins cheres. Est-ce un mauvais produit ? Non. Vaut-il 350 EUR sur la base des ingredients seuls ? La science dit non. Un CeraVe a 15 EUR avec ceramides + niacinamide + acide hyaluronique delivre plus d'actifs prouves. Mais la skincare c'est aussi l'experience, le rituel, et comment un produit te fait sentir - et La Mer excelle dans ce domaine.",
    },
    howToUse: {
      en: "La Mer recommends warming the cream between fingertips before pressing (not rubbing) into skin. Apply to face, neck, and decolletage after cleansing and toning. A small amount goes a long way due to the dense texture. Use morning and night. The warming technique supposedly activates the Miracle Broth, though there's no scientific evidence this makes a difference.",
      fr: "La Mer recommande de rechauffer la creme entre les doigts avant de presser (pas frotter) sur la peau. Appliquer sur visage, cou et decollete apres nettoyage et tonique. Une petite quantite suffit vu la texture dense. Utiliser matin et soir. La technique de rechauffement activerait supposement le Miracle Broth, bien qu'il n'y ait aucune preuve scientifique que cela fasse une difference.",
    },
    whoIsItFor: {
      en: "Honestly? It's for people who can afford the luxury experience and enjoy the ritual. From a pure ingredient standpoint, dry-to-normal skin types will benefit most from the occlusive formula. NOT recommended for oily or acne-prone skin (contains comedogenic algae extract rated 4/5). Not recommended for sensitive skin (contains fragrance and essential oils).",
      fr: "Honnetement ? C'est pour les personnes qui peuvent se permettre l'experience luxe et apprecient le rituel. Du point de vue purement ingredients, les peaux seches a normales beneficieront le plus de la formule occlusive. PAS recommande pour peau grasse ou acneique (contient un extrait d'algue comedogene note 4/5). Pas recommande pour peau sensible (contient parfum et huiles essentielles).",
    },
    whatToExpect: {
      en: "Immediate: skin feels deeply moisturized and protected (occlusive effect). Long-term: consistent hydration, softer skin. Don't expect: miracles. The clinical evidence for the Miracle Broth specifically outperforming other moisturizers does not exist in peer-reviewed literature. The real question isn't 'does it work?' (it does moisturize) but 'does it work 20x better than a 15 EUR moisturizer?' (no evidence says yes).",
      fr: "Immediat : la peau est profondement hydratee et protegee (effet occlusif). Long terme : hydratation constante, peau plus douce. N'attends pas : de miracles. Les preuves cliniques que le Miracle Broth surpasse specifiquement d'autres hydratants n'existent pas dans la litterature scientifique. La vraie question n'est pas 'est-ce que ca marche ?' (ca hydrate) mais 'est-ce que ca marche 20x mieux qu'un hydratant a 15 EUR ?' (aucune preuve ne dit oui).",
    },
    commonMistakes: {
      en: "1. Assuming expensive = better ingredients - La Mer uses mineral oil and petrolatum, same as Nivea Creme. 2. Using it on acne-prone skin - the algae extract is highly comedogenic (4/5). 3. Believing the Miracle Broth hype without checking for published clinical trials (there are none comparing it to cheaper alternatives). 4. Forgetting SPF - La Mer has zero UV protection.",
      fr: "1. Supposer que cher = meilleurs ingredients - La Mer utilise huile minerale et vaseline, comme Nivea Creme. 2. L'utiliser sur peau acneique - l'extrait d'algue est hautement comedogene (4/5). 3. Croire le battage du Miracle Broth sans chercher les essais cliniques publies (il n'y en a aucun comparant a des alternatives moins cheres). 4. Oublier le SPF - La Mer n'a aucune protection UV.",
    },
    faq: [
      {
        question: { en: "Is La Mer really worth 350 EUR?", fr: "La Mer vaut-il vraiment 350 EUR ?" },
        answer: { en: "Based on ingredients alone, no. CeraVe Moisturizing Cream (15 EUR) contains more proven actives (ceramides, niacinamide, hyaluronic acid) without the fragrance and essential oils. But skincare is subjective - if the texture, packaging, and ritual bring you joy, that has value too. Just know you're paying for the experience, not superior ingredients.", fr: "Sur la base des ingredients seuls, non. CeraVe Moisturizing Cream (15 EUR) contient plus d'actifs prouves (ceramides, niacinamide, acide hyaluronique) sans le parfum et les huiles essentielles. Mais la skincare est subjective - si la texture, le packaging et le rituel te font plaisir, ca a de la valeur aussi. Sache juste que tu paies pour l'experience, pas pour des ingredients superieurs." },
      },
      {
        question: { en: "Is Nivea Creme really the same as La Mer?", fr: "Nivea Creme est-il vraiment le meme que La Mer ?" },
        answer: { en: "Not identical, but closer than the price difference suggests. Both use mineral oil/petrolatum as the primary moisturizing agents. La Mer adds the fermented algae extract (Miracle Broth) and a more complex formulation. But in blind tests, dermatologists have noted that the moisturizing efficacy is comparable. The main differences are texture, scent, and the psychological experience of using a luxury product.", fr: "Pas identiques, mais plus proches que la difference de prix ne le suggere. Les deux utilisent huile minerale/vaseline comme agents hydratants principaux. La Mer ajoute l'extrait d'algue fermente (Miracle Broth) et une formulation plus complexe. Mais dans des tests a l'aveugle, les dermatologues ont note que l'efficacite hydratante est comparable." },
      },
    ],
    vsCompetitors: [
      {
        competitorId: "cerave-moisturizing-cream",
        competitorName: "CeraVe Moisturizing Cream",
        verdict: {
          en: "CeraVe scores A (88/100), La Mer scores C (67/100). CeraVe has ceramides, niacinamide, and hyaluronic acid with no fragrance. La Mer has mineral oil, petrolatum, fragrance, and algae extract. CeraVe costs 15 EUR for 340g. La Mer costs 350 EUR for 60ml. The science is clear: CeraVe delivers more proven actives at 1/130th of the price.",
          fr: "CeraVe obtient A (88/100), La Mer obtient C (67/100). CeraVe a des ceramides, niacinamide et acide hyaluronique sans parfum. La Mer a huile minerale, vaseline, parfum et extrait d'algue. CeraVe coute 15 EUR les 340g. La Mer coute 350 EUR les 60ml. La science est claire : CeraVe delivre plus d'actifs prouves a 1/130e du prix.",
        },
      },
      {
        competitorId: "augustinus-bader-the-rich-cream",
        competitorName: "Augustinus Bader The Rich Cream",
        verdict: {
          en: "Augustinus Bader scores A (87/100), La Mer scores C (67/100). AB uses TFC8 technology (amino acids, vitamins, synthesized molecules for cell renewal) backed by Prof. Bader's wound-healing research. No fragrance, no essential oils. More expensive than La Mer but with a cleaner formula and actual published research behind the technology.",
          fr: "Augustinus Bader obtient A (87/100), La Mer obtient C (67/100). AB utilise la technologie TFC8 (acides amines, vitamines, molecules synthetisees pour le renouvellement cellulaire) soutenue par les recherches du Prof. Bader sur la cicatrisation. Sans parfum, sans huiles essentielles. Plus cher que La Mer mais avec une formule plus propre et une vraie recherche publiee derriere la technologie.",
        },
      },
    ],
  },

  // ===========================
  // RHODE - PEPTIDE GLAZING FLUID
  // ===========================
  {
    id: "rhode-peptide-glazing-fluid",
    editorialReview: {
      en: "Rhode's Peptide Glazing Fluid is the rare celebrity skincare product that actually delivers. Hailey Bieber's brand launched with this as its hero product, and the formula justifies the hype: niacinamide for barrier support, three peptides (hexapeptide-8, tripeptide-1, tetrapeptide-7) for anti-aging, hyaluronic acid for hydration, and marula oil for nourishment. No fragrance, no unnecessary fillers. The 'glazed donut skin' effect it creates is a combination of lightweight hydration and a subtle dewy finish that photographs beautifully. At 29 EUR for 50ml, it's positioned between drugstore and luxury - and the formula deserves it. This is celebrity skincare done right.",
      fr: "Le Peptide Glazing Fluid de Rhode est le rare produit skincare de celebrite qui tient vraiment ses promesses. La marque de Hailey Bieber a lance avec ce produit hero, et la formule justifie le battage : niacinamide pour la barriere, trois peptides (hexapeptide-8, tripeptide-1, tetrapeptide-7) pour l'anti-age, acide hyaluronique pour l'hydratation, et huile de marula pour la nutrition. Sans parfum, sans fillers inutiles. L'effet 'glazed donut skin' qu'il cree est une combinaison d'hydratation legere et d'un fini subtil glowy qui rend magnifiquement en photo. A 29 EUR les 50ml, il se positionne entre pharmacie et luxe - et la formule le merite. C'est la skincare de celebrite bien faite.",
    },
    howToUse: {
      en: "Apply 2-3 pumps to clean skin as the last step of your serum routine, before moisturizer. Can also be used as a primer under makeup for the glazed effect. Layer over actives (retinol, vitamin C) as a hydrating seal. For the viral 'glazed donut' look: cleanse, apply on damp skin, press in, then add Rhode Lip Treatment on lips.",
      fr: "Applique 2-3 pressions sur peau propre comme derniere etape de ta routine serums, avant l'hydratant. Peut aussi s'utiliser comme base sous le maquillage pour l'effet glaze. Superpose par-dessus les actifs (retinol, vitamine C) comme scellant hydratant. Pour le look 'glazed donut' viral : nettoie, applique sur peau humide, presse, puis ajoute le Rhode Lip Treatment sur les levres.",
    },
    whoIsItFor: {
      en: "Best for: all skin types wanting hydration + glow, dehydrated skin, anyone who wants the 'glass skin' or 'glazed donut' effect. Works especially well on combination skin. Less ideal for: very oily skin that doesn't want any dewiness, those who prefer a completely matte finish.",
      fr: "Ideal pour : tous les types de peau cherchant hydratation + eclat, peau deshydratee, toute personne voulant l'effet 'glass skin' ou 'glazed donut'. Fonctionne particulierement bien sur peau mixte. Moins adapte pour : peau tres grasse ne voulant aucune dewiness, ceux qui preferent un fini completement mat.",
    },
    whatToExpect: {
      en: "Immediate: dewy, hydrated glow (the glazed donut effect). Week 2-4: improved hydration levels, smoother texture from peptides. Month 2+: subtle anti-aging benefits from the peptide complex. This is more of a hydration/glow product than a treatment product - don't expect it to clear acne or erase wrinkles.",
      fr: "Immediat : eclat hydrate et dewy (l'effet glazed donut). Semaine 2-4 : amelioration du niveau d'hydratation, texture plus lisse grace aux peptides. Mois 2+ : benefices anti-age subtils du complexe peptidique. C'est plus un produit hydratation/eclat qu'un produit de traitement - n'attends pas qu'il elimine l'acne ou efface les rides.",
    },
    commonMistakes: {
      en: "1. Applying too many layers - 2-3 pumps is enough, more gets sticky. 2. Using as a moisturizer replacement - it's a serum, you still need moisturizer on top (especially in dry climates). 3. Expecting it to treat skin concerns - it hydrates and glows, it doesn't treat acne or wrinkles. 4. Comparing to The Ordinary serums - different category, different purpose.",
      fr: "1. Appliquer trop de couches - 2-3 pressions suffisent, plus ca colle. 2. L'utiliser comme remplacement d'hydratant - c'est un serum, tu as toujours besoin d'un hydratant par-dessus (surtout en climat sec). 3. S'attendre a traiter des problemes de peau - il hydrate et fait briller, il ne traite pas l'acne ni les rides. 4. Comparer a The Ordinary - categorie differente, objectif different.",
    },
    faq: [
      {
        question: { en: "Is Rhode Peptide Glazing Fluid worth the hype?", fr: "Le Rhode Peptide Glazing Fluid vaut-il le battage ?" },
        answer: { en: "Yes, surprisingly. Unlike most celebrity skincare, the formula is genuinely good: peptides, niacinamide, hyaluronic acid, no fragrance. It scores A (86/100) on SkinScore. At 29 EUR it's not the cheapest option, but the formula quality justifies the price. It's not just a name on a bottle.", fr: "Oui, etonnamment. Contrairement a la plupart des skincares de celebrites, la formule est vraiment bonne : peptides, niacinamide, acide hyaluronique, sans parfum. Il obtient A (86/100) sur SkinScore. A 29 EUR ce n'est pas l'option la moins chere, mais la qualite de la formule justifie le prix. Ce n'est pas juste un nom sur un flacon." },
      },
    ],
    vsCompetitors: [
      {
        competitorId: "the-ordinary-hyaluronic-acid-2-b5",
        competitorName: "The Ordinary Hyaluronic Acid 2% + B5",
        verdict: {
          en: "The Ordinary is 7 EUR vs Rhode's 29 EUR. TO gives you hyaluronic acid + panthenol. Rhode gives you HA + niacinamide + 3 peptides + marula oil. If you just want hydration, TO is better value. If you want hydration + glow + anti-aging peptides in one product, Rhode is worth the premium.",
          fr: "The Ordinary est 7 EUR vs 29 EUR pour Rhode. TO te donne acide hyaluronique + panthenol. Rhode te donne HA + niacinamide + 3 peptides + huile de marula. Si tu veux juste l'hydratation, TO est un meilleur rapport qualite-prix. Si tu veux hydratation + eclat + peptides anti-age en un produit, Rhode vaut le premium.",
        },
      },
    ],
  },
];

export function getStarContent(productId: string): StarProductContent | undefined {
  return starProductContent.find((s) => s.id === productId);
}
