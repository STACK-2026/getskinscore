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

// ===========================
  // LA ROCHE-POSAY CICAPLAST BAUME B5+
  // ===========================
  {
    id: "la-roche-posay-cicaplast-baume-b5",
    editorialReview: {
      en: "If CeraVe is the daily driver, Cicaplast is the emergency room. This repair balm is what dermatologists reach for after laser treatments, chemical peels, and skin emergencies. The formula is deceptively simple but incredibly effective: 5% panthenol (pro-vitamin B5) for wound healing, 5% shea butter for deep nourishment, madecassoside (the most active compound from centella asiatica) for anti-inflammatory power, plus zinc, copper, and manganese minerals. It's not glamorous. The texture is thick, almost paste-like. It leaves a white cast. But when your skin barrier is destroyed - from retinol overuse, a bad reaction, a sunburn, or a cosmetic procedure - nothing else comes close. Every French pharmacist keeps this behind the counter. Every dermatologist has a tube in their desk drawer. At 14 EUR for 40ml, it's one of the best investments in skincare.",
      fr: "Si CeraVe est le vehicule quotidien, Cicaplast est les urgences. Ce baume reparateur est ce que les dermatologues sortent apres les traitements laser, les peelings chimiques et les urgences cutanees. La formule est d'une simplicite trompeuse mais d'une efficacite redoutable : 5% panthenol (provitamine B5) pour la cicatrisation, 5% beurre de karite pour la nutrition profonde, madecassoside (le compose le plus actif de la centella asiatica) pour le pouvoir anti-inflammatoire, plus des mineraux zinc, cuivre et manganese. Ce n'est pas glamour. La texture est epaisse, presque pateuse. Ca laisse un film blanc. Mais quand ta barriere cutanee est detruite - par un exces de retinol, une mauvaise reaction, un coup de soleil, ou un acte cosmetique - rien d'autre ne s'en approche. Chaque pharmacien francais le garde derriere le comptoir. Chaque dermatologue en a un tube dans son tiroir. A 14 EUR les 40ml, c'est l'un des meilleurs investissements en skincare.",
    },
    howToUse: {
      en: "Apply a thin layer to damaged or irritated skin as the last step of your routine. Not for everyday full-face use (too occlusive for oily skin). Best uses: 1) Over retinol the first weeks (buffer irritation), 2) After chemical peels, 3) On dry patches in winter, 4) On chapped lips, 5) On minor cuts and burns, 6) Post-laser or post-procedure. A pea-sized amount covers the entire face. Can be mixed with moisturiser to thin the texture.",
      fr: "Applique une fine couche sur la peau abimee ou irritee comme derniere etape de ta routine. Pas pour un usage quotidien plein visage (trop occlusif pour peau grasse). Meilleurs usages : 1) Par-dessus le retinol les premieres semaines (tamponner l'irritation), 2) Apres un peeling chimique, 3) Sur les zones seches en hiver, 4) Sur les levres gercees, 5) Sur les coupures et brulures mineures, 6) Post-laser ou post-acte. Une quantite de la taille d'un pois couvre tout le visage. Peut etre melange a ton hydratant pour alleger la texture.",
    },
    whoIsItFor: { en: "Best for: damaged skin barriers, post-procedure recovery, eczema flares, winter dryness, retinol users. Great as a spot treatment for anyone. Less ideal for: daily full-face use on oily/acne-prone skin (too occlusive).", fr: "Ideal pour : barrieres cutanees abimees, recuperation post-acte, poussees d'eczema, secheresse hivernale, utilisateurs de retinol. Excellent en traitement localise pour tout le monde. Moins adapte pour : usage quotidien plein visage sur peau grasse/acneique (trop occlusif)." },
    whatToExpect: { en: "Immediate: calming, protective film on irritated skin. 24-48h: visible reduction in redness and irritation. 3-7 days: damaged skin barrier starts recovering. This is a repair product, not a prevention product. Use it when things go wrong, not as your daily moisturiser.", fr: "Immediat : film calmant et protecteur sur peau irritee. 24-48h : reduction visible des rougeurs et de l'irritation. 3-7 jours : la barriere cutanee abimee commence a se reparer. C'est un produit de reparation, pas de prevention. Utilise-le quand ca va mal, pas comme hydratant quotidien." },
    commonMistakes: { en: "1. Using as daily moisturiser on oily skin - too thick, too occlusive. 2. Expecting it to treat acne - it repairs, it doesn't treat. 3. Applying too much - a thin layer is enough, more just sits on top. 4. Rubbing it in aggressively - pat gently on damaged skin. 5. Throwing it away because of the white cast - that's normal, it fades.", fr: "1. L'utiliser comme hydratant quotidien sur peau grasse - trop epais, trop occlusif. 2. S'attendre a ce qu'il traite l'acne - il repare, il ne traite pas. 3. En appliquer trop - une fine couche suffit, le surplus reste en surface. 4. Le frotter agressivement - tapoter doucement sur peau abimee. 5. Le jeter a cause du film blanc - c'est normal, ca s'estompe." },
    faq: [
      { question: { en: "Can I use Cicaplast every day?", fr: "Puis-je utiliser Cicaplast tous les jours ?" }, answer: { en: "On dry/sensitive skin, yes. On oily/acne-prone skin, only as a spot treatment. The dimethicone + petrolatum base is too occlusive for daily full-face use on oily skin types.", fr: "Sur peau seche/sensible, oui. Sur peau grasse/acneique, uniquement en traitement localise. La base dimethicone + vaseline est trop occlusive pour un usage quotidien plein visage sur peau grasse." } },
      { question: { en: "Cicaplast B5 vs B5+, what's the difference?", fr: "Cicaplast B5 vs B5+, quelle difference ?" }, answer: { en: "B5+ is the 2023 reformulation with added microbiome-protecting technology (Tribioma). The core formula (panthenol, shea, madecassoside) is the same. If you loved B5, you'll love B5+. It's not a radical change.", fr: "B5+ est la reformulation 2023 avec une technologie de protection du microbiome ajoutee (Tribioma). La formule de base (panthenol, karite, madecassoside) est la meme. Si tu aimais B5, tu aimeras B5+. Ce n'est pas un changement radical." } },
    ],
    vsCompetitors: [
      { competitorId: "avene-cicalfate-plus-restorative-cream", competitorName: "Avene Cicalfate+", verdict: { en: "Both are French pharmacy repair balms. Cicaplast uses panthenol + madecassoside. Cicalfate uses sucralfate (stomach ulcer medication repurposed for skin). Cicaplast is slightly better for barrier repair (ceramide-free but madecassoside is more studied). Cicalfate is slightly better for open wounds (sucralfate creates a stronger protective film). In practice: either one works, pick based on texture preference.", fr: "Les deux sont des baumes reparateurs de pharmacie francaise. Cicaplast utilise panthenol + madecassoside. Cicalfate utilise du sucralfate (medicament anti-ulcere reconverti pour la peau). Cicaplast est legerement meilleur pour la reparation de la barriere. Cicalfate est legerement meilleur pour les plaies ouvertes. En pratique : les deux fonctionnent, choisis selon ta preference de texture." } },
    ],
  },

  // ===========================
  // PAULA'S CHOICE 2% BHA LIQUID EXFOLIANT
  // ===========================
  {
    id: "paulas-choice-2-bha-liquid-exfoliant",
    editorialReview: {
      en: "This is the product that single-handedly made chemical exfoliation mainstream. Before Paula's Choice BHA, most people thought exfoliation meant scrubbing your face with walnut shells (looking at you, St. Ives). The formula is elegant in its simplicity: 2% salicylic acid at the optimal pH (3.2-3.8) in a lightweight liquid base with green tea extract. That's it. No fragrance, no dyes, no unnecessary ingredients. The liquid format is genius because it allows even application across the entire face with a cotton pad - no risk of over-concentrating in one area like with a cream. Salicylic acid is oil-soluble, meaning it penetrates INTO the pore (unlike AHAs that work on the surface). For blackheads, enlarged pores, and mild acne, this is the gold standard. Period.",
      fr: "C'est le produit qui a a lui seul democratise l'exfoliation chimique. Avant le BHA Paula's Choice, la plupart des gens pensaient qu'exfolier signifiait frotter son visage avec des coquilles de noix (on te regarde, St. Ives). La formule est elegante dans sa simplicite : 2% d'acide salicylique au pH optimal (3,2-3,8) dans une base liquide legere avec de l'extrait de the vert. C'est tout. Pas de parfum, pas de colorant, pas d'ingredients inutiles. Le format liquide est genial car il permet une application uniforme sur tout le visage avec un coton - aucun risque de surconcentrer a un endroit. L'acide salicylique est liposoluble, ce qui signifie qu'il penetre DANS le pore (contrairement aux AHA qui agissent en surface). Pour les points noirs, les pores dilates et l'acne legere, c'est la reference. Point.",
    },
    howToUse: {
      en: "After cleansing, soak a cotton pad and sweep across the entire face, avoiding the eye area. Start 3x/week, build up to daily use if tolerated. Don't rinse off - it's a leave-on exfoliant. Wait 2-3 minutes before applying the next product. Use in the PM. ALWAYS use SPF the morning after (BHA increases sun sensitivity). Can be used on the body too (bacne, KP on arms).",
      fr: "Apres le nettoyage, imbibe un coton et passe sur tout le visage en evitant le contour des yeux. Commence 3x/semaine, augmente jusqu'a un usage quotidien si tolere. Ne rince pas - c'est un exfoliant sans rincage. Attends 2-3 minutes avant d'appliquer le produit suivant. Utilise le soir. TOUJOURS mettre du SPF le lendemain matin (le BHA augmente la sensibilite au soleil). Peut aussi s'utiliser sur le corps (acne du dos, keratose pilaire sur les bras).",
    },
    whoIsItFor: { en: "Best for: oily/combination skin, blackheads, enlarged pores, mild-moderate acne, keratosis pilaris, rough texture. Works for all skin types at the right frequency. Less ideal for: very dry/sensitive skin (start with PHA instead), active dermatitis or broken skin.", fr: "Ideal pour : peau grasse/mixte, points noirs, pores dilates, acne legere a moderee, keratose pilaire, texture rugueuse. Fonctionne pour tous les types de peau a la bonne frequence. Moins adapte pour : peau tres seche/sensible (commencer par un PHA), dermatite active ou peau lesee." },
    whatToExpect: { en: "Week 1: possible purging (existing clogs coming to the surface faster - this is NORMAL, not a breakout). Week 2-3: pores start looking smaller, fewer blackheads. Month 1-2: smoother texture, fewer blemishes, less oil. Month 3+: consistent clear skin when used regularly. If purging lasts more than 6 weeks, stop - you may be sensitive to BHA.", fr: "Semaine 1 : possible purge (les obstructions existantes remontent plus vite a la surface - c'est NORMAL, pas une eruption). Semaine 2-3 : les pores commencent a paraitre plus petits, moins de points noirs. Mois 1-2 : texture plus lisse, moins d'imperfections, moins de sebum. Mois 3+ : peau nette constante avec usage regulier. Si la purge dure plus de 6 semaines, arrete - tu es peut-etre sensible au BHA." },
    commonMistakes: { en: "1. Panicking during the purge phase - it's normal and temporary. 2. Using it with other acids on the same night (AHA + BHA = too much). 3. Skipping SPF the morning after. 4. Over-exfoliating (daily from day 1 = irritation). 5. Applying to wet skin (dilutes the acid, less effective).", fr: "1. Paniquer pendant la phase de purge - c'est normal et temporaire. 2. L'utiliser avec d'autres acides le meme soir (AHA + BHA = trop). 3. Oublier le SPF le lendemain matin. 4. Sur-exfolier (quotidien des le jour 1 = irritation). 5. Appliquer sur peau mouillee (dilue l'acide, moins efficace)." },
    faq: [
      { question: { en: "What is purging and how do I know if it's happening?", fr: "C'est quoi la purge et comment savoir si c'est ca ?" }, answer: { en: "Purging = existing microcomedones (invisible clogs) coming to the surface faster because the BHA is speeding up cell turnover. It looks like small whiteheads/blackheads in areas where you normally break out. It lasts 2-6 weeks. If you're getting irritation, redness, or pimples in NEW areas, that's a reaction, not a purge - stop using the product.", fr: "La purge = les microcomedons existants (obstructions invisibles) qui remontent plus vite a la surface parce que le BHA accelere le renouvellement cellulaire. Ca ressemble a de petits points blancs/noirs dans les zones ou tu as habituellement des eruptions. Ca dure 2-6 semaines. Si tu as de l'irritation, des rougeurs ou des boutons dans des zones NOUVELLES, c'est une reaction, pas une purge - arrete le produit." } },
    ],
    vsCompetitors: [
      { competitorId: "the-ordinary-aha-30-bha-2-peeling", competitorName: "The Ordinary AHA 30% + BHA 2% Peeling", verdict: { en: "Completely different products. Paula's Choice is a daily-use, leave-on liquid at 2% BHA. The Ordinary is a weekly 10-minute treatment with 30% AHA + 2% BHA. PC is for maintenance. TO is for intensive treatment. Most dermatologists recommend PC for beginners and TO for experienced users only.", fr: "Produits completement differents. Paula's Choice est un liquide quotidien sans rincage a 2% BHA. The Ordinary est un traitement hebdomadaire de 10 minutes avec 30% AHA + 2% BHA. PC est pour l'entretien. TO est pour le traitement intensif. La plupart des dermatologues recommandent PC pour les debutants et TO pour les utilisateurs experimentes uniquement." } },
    ],
  },

  // ===========================
  // SKINCEUTICALS C E FERULIC
  // ===========================
  {
    id: "skinceuticals-ce-ferulic",
    editorialReview: {
      en: "Let's talk about the most controversial price tag in skincare: 160 EUR for 30ml of vitamin C serum. Is SkinCeuticals C E Ferulic worth it? The formula is objectively excellent: 15% L-ascorbic acid at the optimal pH, 1% vitamin E, and 0.5% ferulic acid. This specific combination was patented by Duke University researchers who proved it provides 8x more photoprotection than vitamin C alone. That patent is why SkinCeuticals can charge what they charge - nobody else can replicate the exact formula legally. But here's what they don't tell you in the marketing: the active ingredients (L-ascorbic acid, tocopherol, ferulic acid) are cheap raw materials. What you're paying for is the R&D, the clinical trials, and the brand. Several brands (Geek & Gorgeous, Timeless, Maelove) have created very similar formulations at 1/10th the price. They can't call it C+E+Ferulic due to the patent, but the ingredients are nearly identical. Is the original worth 10x the price? For most people, probably not. But if you want the exact clinically-studied formula with the published papers behind it, C E Ferulic is the one.",
      fr: "Parlons du prix le plus controverse en skincare : 160 EUR pour 30ml de serum vitamine C. Le SkinCeuticals C E Ferulic vaut-il le coup ? La formule est objectivement excellente : 15% d'acide L-ascorbique au pH optimal, 1% vitamine E et 0,5% acide ferulique. Cette combinaison specifique a ete brevetee par des chercheurs de Duke University qui ont prouve qu'elle offre 8x plus de photoprotection que la vitamine C seule. Ce brevet est la raison pour laquelle SkinCeuticals peut facturer ce prix - personne d'autre ne peut reproduire la formule exacte legalement. Mais voici ce qu'ils ne disent pas dans le marketing : les ingredients actifs (acide L-ascorbique, tocopherol, acide ferulique) sont des matieres premieres bon marche. Ce que tu paies, c'est la R&D, les essais cliniques et la marque. Plusieurs marques (Geek & Gorgeous, Timeless, Maelove) ont cree des formulations tres similaires a 1/10e du prix. Elles ne peuvent pas l'appeler C+E+Ferulique a cause du brevet, mais les ingredients sont quasi identiques. L'original vaut-il 10x le prix ? Pour la plupart des gens, probablement pas. Mais si tu veux la formule exacte etudiee cliniquement avec les publications derriere, C E Ferulic est le choix.",
    },
    howToUse: { en: "Apply 4-5 drops to clean, dry skin in the AM before moisturiser and SPF. Let it absorb for 1-2 minutes before layering. The serum should be clear to light amber. If it turns dark orange/brown, it's oxidised and no longer effective - throw it away. Store in a cool, dark place. Use within 3 months of opening. Do NOT mix with niacinamide at the same time (wait 10 min between).", fr: "Applique 4-5 gouttes sur peau propre et seche le matin avant hydratant et SPF. Laisse absorber 1-2 minutes avant de superposer. Le serum doit etre clair a ambre clair. S'il devient orange fonce/marron, il est oxyde et n'est plus efficace - jette-le. Conserve dans un endroit frais et sombre. Utilise dans les 3 mois apres ouverture." },
    whoIsItFor: { en: "Best for: anti-aging, sun damage prevention, hyperpigmentation, dull skin. Normal to oily skin types. NOT for: sensitive skin (15% ascorbic acid at low pH stings), rosacea-prone skin, anyone on a budget (dupes exist at 1/10th the price).", fr: "Ideal pour : anti-age, prevention des dommages solaires, hyperpigmentation, teint terne. Peaux normales a grasses. PAS pour : peaux sensibles (15% d'acide ascorbique a pH bas pique), peaux sujettes a la rosacee, les petits budgets (des dupes existent a 1/10e du prix)." },
    whatToExpect: { en: "Week 1-2: brighter complexion, skin feels smoother. Month 1-2: fading of dark spots begins. Month 3+: measurable improvement in skin texture, firmness, and sun damage. Long-term: the antioxidant protection prevents future damage (you won't SEE this benefit, but it's the most important one).", fr: "Semaine 1-2 : teint plus lumineux, peau plus lisse. Mois 1-2 : debut de l'attenuation des taches. Mois 3+ : amelioration mesurable de la texture, fermete et dommages solaires. Long terme : la protection antioxydante previent les dommages futurs (tu ne VERRAS pas ce benefice, mais c'est le plus important)." },
    commonMistakes: { en: "1. Applying to damp skin (dilutes pH, less effective). 2. Not checking for oxidation (dark serum = dead serum). 3. Skipping SPF after (vitamin C enhances photoprotection but doesn't replace SPF). 4. Storing in the bathroom (heat + humidity destroys vitamin C). 5. Paying 160 EUR without considering dupes like Geek & Gorgeous Liquid Gold at 15 EUR.", fr: "1. Appliquer sur peau humide (dilue le pH, moins efficace). 2. Ne pas verifier l'oxydation (serum fonce = serum mort). 3. Oublier le SPF apres (la vitamine C ameliore la photoprotection mais ne remplace pas le SPF). 4. Stocker dans la salle de bain (chaleur + humidite detruisent la vitamine C). 5. Payer 160 EUR sans considerer les dupes comme Geek & Gorgeous Liquid Gold a 15 EUR." },
    faq: [
      { question: { en: "Are there cheaper alternatives to C E Ferulic?", fr: "Y a-t-il des alternatives moins cheres au C E Ferulic ?" }, answer: { en: "Yes. Geek & Gorgeous C-Glow (15 EUR), Timeless Vitamin C+E+Ferulic (28 EUR), and By Wishtrend Pure Vitamin C 21.5% (18 EUR) all use similar active ingredients. They can't replicate the exact patented formula, but clinical-grade L-ascorbic acid is L-ascorbic acid regardless of brand. The main advantage of SkinCeuticals is the specific published research behind THEIR formula.", fr: "Oui. Geek & Gorgeous C-Glow (15 EUR), Timeless Vitamin C+E+Ferulic (28 EUR) et By Wishtrend Pure Vitamin C 21.5% (18 EUR) utilisent tous des actifs similaires. Ils ne peuvent pas reproduire la formule brevetee exacte, mais l'acide L-ascorbique de grade clinique est de l'acide L-ascorbique quelle que soit la marque. L'avantage principal de SkinCeuticals est la recherche publiee specifique derriere LEUR formule." } },
    ],
    vsCompetitors: [
      { competitorId: "geek-gorgeous-liquid-gold-c-glow", competitorName: "Geek & Gorgeous C-Glow", verdict: { en: "G&G scores A (86), SkinCeuticals scores A (93). Both use L-ascorbic acid + vitamin E. G&G costs 15 EUR vs 160 EUR. The 4-point score difference doesn't justify a 10x price difference. For most people, G&G is the smart choice. SkinCeuticals is for people who want the exact clinically-published formula.", fr: "G&G obtient A (86), SkinCeuticals obtient A (93). Les deux utilisent acide L-ascorbique + vitamine E. G&G coute 15 EUR vs 160 EUR. La difference de 4 points ne justifie pas un prix 10x plus eleve. Pour la plupart des gens, G&G est le choix intelligent. SkinCeuticals est pour ceux qui veulent la formule exacte publiee cliniquement." } },
    ],
  },

  // ===========================
  // THE ORDINARY AHA 30% + BHA 2% PEELING SOLUTION
  // ===========================
  {
    id: "the-ordinary-aha-30-bha-2-peeling",
    editorialReview: {
      en: "The blood-red peeling solution that broke TikTok. This is NOT a beginner product, and the viral videos of people using it for the first time without patch-testing are genuinely concerning. 30% AHA (glycolic, lactic, tartaric, citric acids) + 2% BHA (salicylic acid) is a professional-strength chemical peel you can buy for 8 EUR. Used correctly (10 minutes max, once per week), it delivers results comparable to a 50-100 EUR in-office peel. Used incorrectly, it will give you a chemical burn. The red color comes from Tasmanian pepperberry, which actually has anti-inflammatory properties to offset some of the irritation. Clever formulation. But respect the product: this is acid on your face.",
      fr: "La solution de peeling rouge sang qui a casse TikTok. Ce n'est PAS un produit pour debutants, et les videos virales de gens qui l'utilisent pour la premiere fois sans test patch sont vraiment inquietantes. 30% AHA (acides glycolique, lactique, tartrique, citrique) + 2% BHA (acide salicylique), c'est un peeling chimique de force professionnelle que tu peux acheter pour 8 EUR. Utilise correctement (10 minutes max, une fois par semaine), il donne des resultats comparables a un peeling en cabinet a 50-100 EUR. Utilise incorrectement, il te donnera une brulure chimique. La couleur rouge vient du poivre de Tasmanie, qui a en fait des proprietes anti-inflammatoires pour compenser une partie de l'irritation. Formulation intelligente. Mais respecte le produit : c'est de l'acide sur ton visage.",
    },
    howToUse: { en: "On clean, DRY skin (never wet - water dilutes pH and causes uneven penetration). Apply an even layer avoiding eye area, lips, and any broken skin. Set a timer for MAX 10 minutes. Rinse thoroughly with lukewarm water. Follow with a gentle moisturiser (CeraVe, Cicaplast). Use ONCE per week ONLY. Do NOT use on the same day as retinol, vitamin C, or any other acid. SPF is MANDATORY for the next 7 days.", fr: "Sur peau propre et SECHE (jamais mouillee - l'eau dilue le pH et cause une penetration inegale). Applique une couche uniforme en evitant le contour des yeux, les levres et toute peau lesee. Mets un minuteur pour MAX 10 minutes. Rince abondamment a l'eau tiede. Enchaine avec un hydratant doux (CeraVe, Cicaplast). Utilise UNE FOIS par semaine UNIQUEMENT. NE PAS utiliser le meme jour que le retinol, la vitamine C ou tout autre acide. SPF OBLIGATOIRE les 7 jours suivants." },
    whoIsItFor: { en: "ONLY for: experienced acid users, people who have already used AHAs at lower concentrations, those with resilient non-sensitive skin. NEVER for: beginners, sensitive skin, rosacea, broken/sunburned skin, anyone not using SPF daily.", fr: "UNIQUEMENT pour : utilisateurs d'acides experimentes, personnes ayant deja utilise des AHA a plus faible concentration, peaux resistantes non sensibles. JAMAIS pour : debutants, peaux sensibles, rosacee, peau lesee/brulee par le soleil, toute personne n'utilisant pas de SPF quotidien." },
    whatToExpect: { en: "During: tingling that intensifies (remove immediately if it burns). After: redness for 1-4 hours (normal). Next morning: smoother, brighter skin. Over weeks: reduced acne scars, more even skin tone, improved texture. Warning: if you see white patches during use, that's a chemical burn - rinse IMMEDIATELY.", fr: "Pendant : picotements qui s'intensifient (retirer immediatement si ca brule). Apres : rougeur pendant 1-4 heures (normal). Lendemain matin : peau plus lisse, plus lumineuse. Au fil des semaines : cicatrices d'acne reduites, teint plus uniforme, texture amelioree. Attention : si tu vois des plaques blanches pendant l'utilisation, c'est une brulure chimique - rince IMMEDIATEMENT." },
    commonMistakes: { en: "1. Using more than once per week. 2. Leaving on longer than 10 minutes. 3. Applying to wet skin. 4. Using with retinol the same week. 5. Not patch-testing first. 6. Skipping SPF after. 7. Buying it because you saw it on TikTok without understanding acids.", fr: "1. Utiliser plus d'une fois par semaine. 2. Laisser plus de 10 minutes. 3. Appliquer sur peau mouillee. 4. Utiliser avec du retinol la meme semaine. 5. Ne pas faire de test patch d'abord. 6. Oublier le SPF apres. 7. L'acheter parce que tu l'as vu sur TikTok sans comprendre les acides." },
    faq: [
      { question: { en: "Is the blood-red color normal?", fr: "La couleur rouge sang est-elle normale ?" }, answer: { en: "Yes. It's from Tasmanian pepperberry extract, which is anti-inflammatory. The color has no effect on efficacy. It does stain fabric though, so be careful with white towels.", fr: "Oui. C'est de l'extrait de poivre de Tasmanie, qui est anti-inflammatoire. La couleur n'a aucun effet sur l'efficacite. Par contre ca tache les tissus, donc attention aux serviettes blanches." } },
    ],
    vsCompetitors: [
      { competitorId: "paulas-choice-2-bha-liquid-exfoliant", competitorName: "Paula's Choice 2% BHA", verdict: { en: "Completely different intensity levels. Paula's Choice 2% BHA is for daily/weekly maintenance. The Ordinary Peeling is a once-weekly intensive treatment. Use PC BHA for ongoing pore care. Use TO Peeling for monthly deep resurfacing. They complement each other rather than compete.", fr: "Niveaux d'intensite completement differents. Paula's Choice 2% BHA est pour l'entretien quotidien/hebdomadaire. Le Peeling The Ordinary est un traitement intensif hebdomadaire. Utilise PC BHA pour l'entretien continu des pores. Utilise le Peeling TO pour un resurfacage profond mensuel. Ils se complementent plutot qu'ils ne sont en competition." } },
    ],
  },

  // ===========================
  // HADA LABO GOKUJYUN PREMIUM
  // ===========================
  {
    id: "hada-labo-gokujyun-premium-hyaluronic-acid-lotion",
    editorialReview: {
      en: "The Japanese hydration legend. Hada Labo Gokujyun Premium contains 7 types of hyaluronic acid at different molecular weights, from high (surface hydration) to ultra-low (deep penetration). For 14 EUR and 170ml, it delivers more hyaluronic acid per euro than any other product on the market. In Japan, a bottle sells every 2 seconds. The 'lotion' name confuses Westerners - it's not a lotion, it's a watery toner/essence. The texture is viscous, almost gel-like, and slightly sticky. You apply it to damp skin and pat (not rub) until absorbed. Japanese women layer 3-7 skins (applications) of this for the 'mochi skin' effect. It's the foundation of the 7-skin method that transformed K-beauty and J-beauty routines worldwide.",
      fr: "La legende japonaise de l'hydratation. Le Hada Labo Gokujyun Premium contient 7 types d'acide hyaluronique a differents poids moleculaires, du haut (hydratation surface) a l'ultra-bas (penetration profonde). Pour 14 EUR et 170ml, il delivre plus d'acide hyaluronique par euro que n'importe quel autre produit du marche. Au Japon, un flacon se vend toutes les 2 secondes. Le nom 'lotion' deroute les Occidentaux - ce n'est pas une lotion, c'est un tonique/essence aqueux. La texture est visqueuse, presque gel, et legerement collante. Tu l'appliques sur peau humide et tu tapotes (pas frotter) jusqu'a absorption. Les Japonaises superposent 3 a 7 couches de ce produit pour l'effet 'peau mochi'. C'est la base de la methode 7-skin qui a transforme les routines K-beauty et J-beauty dans le monde.",
    },
    howToUse: { en: "On clean, DAMP skin (this is crucial - HA needs water to work). Pour a coin-sized amount into palms, press onto face. Pat 30 times until absorbed. For maximum hydration, layer 2-3 applications ('7-skin method'). ALWAYS seal with a moisturiser or oil on top - HA pulls water but doesn't lock it in. In very dry climates, skip it or use only with a heavy occlusive on top (otherwise HA can pull moisture FROM your skin).", fr: "Sur peau propre et HUMIDE (c'est crucial - le HA a besoin d'eau pour fonctionner). Verse une quantite de la taille d'une piece dans tes paumes, presse sur le visage. Tapote 30 fois jusqu'a absorption. Pour une hydratation maximale, superpose 2-3 applications ('methode 7-skin'). TOUJOURS sceller avec un hydratant ou une huile par-dessus - le HA attire l'eau mais ne la retient pas. En climat tres sec, passe-le ou utilise uniquement avec un occlusif lourd par-dessus (sinon le HA peut puiser l'eau DE ta peau)." },
    whoIsItFor: { en: "Best for: ALL skin types. Literally everyone can use this. It's the most universal product in skincare. Especially great for: dehydrated skin (oily but tight), dry climates (with occlusive), layering addicts, anyone wanting plumper skin.", fr: "Ideal pour : TOUS les types de peau. Vraiment tout le monde peut l'utiliser. C'est le produit le plus universel en skincare. Specialement bien pour : peau deshydratee (grasse mais qui tire), climats secs (avec occlusif), accros au layering, toute personne voulant une peau plus repulpee." },
    whatToExpect: { en: "Immediate: plumper, bouncier skin (the HA plumps cells with water). 1-2 weeks: smoother texture, fine lines less visible when hydrated. Long-term: consistently hydrated skin that holds moisture better. This is hydration, not treatment. Don't expect it to treat acne, wrinkles, or hyperpigmentation.", fr: "Immediat : peau plus repulpee et rebondie (le HA gonfle les cellules avec l'eau). 1-2 semaines : texture plus lisse, ridules moins visibles quand la peau est hydratee. Long terme : peau constamment hydratee qui retient mieux l'eau. C'est de l'hydratation, pas du traitement. N'attends pas qu'il traite l'acne, les rides ou l'hyperpigmentation." },
    commonMistakes: { en: "1. Applying to DRY skin (HA on dry skin in dry air can dehydrate you MORE). 2. Not sealing with moisturiser (HA pulls water but doesn't lock it). 3. Using too much (a coin-sized amount per layer is enough). 4. Rubbing instead of patting (breaks the viscous texture). 5. Expecting it to be a moisturiser (it's a hydrating toner, you still need cream).", fr: "1. Appliquer sur peau SECHE (le HA sur peau seche en air sec peut deshydrater PLUS). 2. Ne pas sceller avec un hydratant (le HA attire l'eau mais ne la retient pas). 3. En utiliser trop (une quantite de la taille d'une piece par couche suffit). 4. Frotter au lieu de tapoter (casse la texture visqueuse). 5. S'attendre a ce que ce soit un hydratant (c'est un tonique hydratant, tu as toujours besoin d'une creme)." },
    faq: [
      { question: { en: "Premium vs Regular Gokujyun - which one?", fr: "Gokujyun Premium vs Regular - lequel ?" }, answer: { en: "Premium has 7 types of HA (vs 3 in regular), is thicker/more viscous, and includes urea for extra hydration. Regular is lighter and better for humid climates. Premium is the better product for most people, and both cost roughly the same.", fr: "Le Premium a 7 types de HA (vs 3 dans le regular), est plus epais/visqueux, et inclut de l'uree pour une hydratation supplementaire. Le Regular est plus leger et meilleur pour les climats humides. Le Premium est le meilleur produit pour la plupart des gens, et les deux coutent a peu pres pareil." } },
    ],
    vsCompetitors: [
      { competitorId: "the-ordinary-hyaluronic-acid-2-b5", competitorName: "The Ordinary HA 2% + B5", verdict: { en: "Both are excellent HA products. Hada Labo has 7 types of HA in a larger bottle (170ml vs 30ml) for roughly double the price. TO adds panthenol (B5). Per-ml value: Hada Labo wins massively. For HA purists who want maximum hydration, Hada Labo Premium is the gold standard. TO is more convenient in a Western routine (dropper vs pour).", fr: "Les deux sont d'excellents produits HA. Hada Labo a 7 types de HA dans un plus grand flacon (170ml vs 30ml) pour environ le double du prix. TO ajoute du panthenol (B5). Rapport qualite-prix au ml : Hada Labo gagne massivement. Pour les puristes du HA voulant l'hydratation maximale, Hada Labo Premium est la reference. TO est plus pratique dans une routine occidentale (pipette vs versement)." } },
    ],
  },
];

export function getStarContent(productId: string): StarProductContent | undefined {
  return starProductContent.find((s) => s.id === productId);
}
