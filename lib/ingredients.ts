export interface Ingredient {
  slug: string
  inci: string
  common?: string
  image?: string

  description?: {
    whatItIs: string
    function: string
    properties: string
    interestingFact: string
  }
}

export const ingredients = [
  {
    inci: "Allantoin",
    slug: "allantoin",
    description: {
      whatItIs:
        "Allantoin is a skin-conditioning compound found naturally in plants such as comfrey and also produced synthetically for cosmetic use.",
      function:
        "It functions primarily as a soothing and conditioning agent within formulations.",
      properties:
        "Allantoin is known to support a smoother-looking surface and help calm the appearance of dryness or temporary discomfort.",
      interestingFact:
        "Allantoin was historically extracted from the comfrey plant but is now commonly synthesized for purity and sustainability."
    }
  },

  {
    inci: "Aloe Barbadensis Leaf Extract",
    common: "Aloe Vera",
    slug: "aloe-barbadensis-leaf-extract",
    image: "/ingredients/aloe.png",
    description: {
      whatItIs:
        "Aloe Barbadensis Leaf Extract is derived from the leaves of the aloe vera plant.",
      function:
        "It is used as a skin-conditioning and soothing botanical ingredient in cosmetic formulations.",
      properties:
        "Aloe extract is known for helping support hydration and contributing to a refreshed, calm-looking complexion.",
      interestingFact:
        "Aloe has been used in traditional skincare practices across multiple cultures for thousands of years."
    }
  },

  {
    inci: "Amethyst Powder",
    slug: "amethyst-powder",
    description: {
      whatItIs:
        "Amethyst Powder is a finely milled mineral derived from the quartz family.",
      function:
        "In cosmetics, it is primarily used for aesthetic enhancement and textural refinement.",
      properties:
        "Amethyst powder may contribute to a soft-focus visual effect and a smooth application feel within certain formulations.",
      interestingFact:
        "Amethyst has historically been associated with clarity and balance in various cultural traditions."
    }
  },

  {
    inci: "Amino Acids",
    slug: "amino-acids",
    description: {
      whatItIs:
        "Amino acids are organic compounds that serve as the building blocks of proteins.",
      function:
        "In cosmetic formulations, they function as conditioning agents and support hydration balance.",
      properties:
        "Amino acids are naturally present in the skin and are known to help maintain a healthy-looking barrier and moisture equilibrium.",
      interestingFact:
        "The outermost layer of the skin contains a natural mixture of amino acids known as Natural Moisturizing Factors (NMF)."
    }
  },

  {
    inci: "Aqua",
    common: "Water",
    slug: "water-aqua",
    description: {
      whatItIs:
        "Water, listed as Aqua in INCI terminology, is the primary solvent used in many cosmetic formulations.",
      function:
        "It functions as a carrier and dissolving medium for water-soluble ingredients.",
      properties:
        "Water enables proper dispersion of active and conditioning components within a formulation.",
      interestingFact:
        "In many skincare products, water makes up the majority of the formulation by percentage."
    }
  },

  {
    inci: "Arbutin",
    slug: "arbutin",
    description: {
      whatItIs:
        "Arbutin is a glycosylated derivative of hydroquinone found naturally in certain plants such as bearberry.",
      function:
        "It functions as a skin-conditioning agent and is incorporated into formulations that aim to promote a more uniform-looking complexion.",
      properties:
        "Arbutin is known to help improve the appearance of uneven tone when used in appropriate concentrations within a complete formulation.",
      interestingFact:
        "Arbutin occurs naturally in plants like bearberry and pear leaves, where it acts as part of the plant’s natural defense system."
    }
  },

  {
    inci: "Argania Spinosa Kernel Oil",
    common: "Argan Oil",
    slug: "argania-spinosa-kernel-oil",
    description: {
      whatItIs:
        "Argania Spinosa Kernel Oil is a botanical oil extracted from the kernels of the argan tree native to Morocco.",
      function:
        "It functions primarily as an emollient, helping to soften and smooth the skin.",
      properties:
        "Argan oil is rich in fatty acids and antioxidants, contributing to improved moisture retention and a supple appearance.",
      interestingFact:
        "The argan tree grows almost exclusively in Morocco and is protected as part of a UNESCO biosphere reserve."
    }
  },
  {
    inci: "Arginine",
    slug: "arginine",
    description: {
      whatItIs:
        "Arginine is an amino acid naturally present in the body and used in cosmetic formulations.",
      function:
        "It functions as a conditioning agent and may also be used to help adjust formulation pH.",
      properties:
        "Arginine is known to support overall skin balance and contribute to a smooth, conditioned feel.",
      interestingFact:
        "Arginine plays a role in protein synthesis within the human body and is essential for various metabolic processes."
    }
  },

  {
    inci: "Ascorbic Acid",
    common: "Vitamin C",
    slug: "ascorbic-acid",
    description: {
      whatItIs:
        "Ascorbic Acid is a water-soluble form of vitamin C widely used in cosmetic formulations.",
      function:
        "It functions primarily as an antioxidant within skincare products.",
      properties:
        "Ascorbic acid is known for helping improve the appearance of dullness and supporting a more radiant-looking complexion when stabilized properly in a formulation.",
      interestingFact:
        "Vitamin C is sensitive to light and air, which is why stabilized packaging is often important for maintaining its effectiveness."
    }
  },

  {
    inci: "Aspartic Acid",
    slug: "aspartic-acid",
    description: {
      whatItIs:
        "Aspartic Acid is a naturally occurring amino acid.",
      function:
        "It functions as a conditioning agent and contributes to hydration-support systems in formulations.",
      properties:
        "Aspartic acid is part of the skin’s Natural Moisturizing Factors and helps support moisture balance.",
      interestingFact:
        "Aspartic acid is involved in energy production pathways within cells."
    }
  },

  {
    inci: "Azelaic Acid",
    slug: "azelaic-acid",
    description: {
      whatItIs:
        "Azelaic Acid is a dicarboxylic acid found naturally in grains and produced synthetically for cosmetic use.",
      function:
        "It functions as a skin-conditioning agent and is included in formulations targeting tone refinement.",
      properties:
        "Azelaic acid is known to help improve the appearance of uneven tone and support a clearer-looking complexion when used in appropriate concentrations.",
      interestingFact:
        "Azelaic acid is also naturally produced by yeast that lives on healthy skin."
    }
  },

  {
    inci: "Bambusa Vulgaris Extract",
    slug: "bambusa-vulgaris-extract",
    description: {
      whatItIs:
        "Bambusa Vulgaris Extract is derived from the bamboo plant, a fast-growing botanical species.",
      function:
        "It functions as a skin-conditioning agent and may contribute to formulation stability.",
      properties:
        "Bamboo extract is known to contain silica and antioxidant components that support a smooth-looking skin surface.",
      interestingFact:
        "Bamboo is one of the fastest-growing plants in the world, capable of growing several feet in a single day under optimal conditions."
    }
  },

  {
    inci: "Butyrospermum Parkii Butter",
    common: "Shea Butter",
    slug: "butyrospermum-parkii-butter",
    image: "/ingredients/shea.png",
    description: {
      whatItIs:
        "Butyrospermum Parkii Butter, commonly known as shea butter, is a lipid-rich fat extracted from the nuts of the shea tree.",
      function:
        "It functions primarily as an emollient, helping soften and smooth the skin.",
      properties:
        "Shea butter is rich in fatty acids that support moisture retention and contribute to a supple, conditioned appearance.",
      interestingFact:
        "The shea tree can take up to 15–20 years to begin producing nuts suitable for harvesting."
    }
  },

  {
    inci: "Butyrospermum Parkii Extract",
    common: "Shea Extract",
    slug: "butyrospermum-parkii-extract",
    description: {
      whatItIs:
        "Butyrospermum Parkii Extract is derived from the shea tree and contains concentrated botanical components separate from the butter.",
      function:
        "It functions as a skin-conditioning ingredient within cosmetic formulations.",
      properties:
        "Shea extract is known to contain antioxidant compounds that support overall skin balance.",
      interestingFact:
        "Unlike shea butter, which is lipid-based, shea extract focuses on the plant’s non-fat-soluble components."
    }
  },

  {
    inci: "Camellia Sinensis Leaf Extract",
    slug: "camellia-sinensis-leaf-extract",
    description: {
      whatItIs:
        "Camellia Sinensis Leaf Extract is derived from the leaves of the tea plant.",
      function:
        "It functions as a skin-conditioning and antioxidant ingredient in cosmetic formulations.",
      properties:
        "This extract is known for helping support a refreshed-looking complexion due to its naturally occurring polyphenols.",
      interestingFact:
        "The same plant species is used to produce green, black, and white tea—the difference lies in how the leaves are processed."
    }
  },

  {
    inci: "Centella Asiatica Extract",
    common: "Centella / Cica",
    slug: "centella-asiatica-extract",
    description: {
      whatItIs:
        "Centella Asiatica Extract is derived from a perennial herb traditionally used in Asian botanical practices.",
      function:
        "It functions as a skin-conditioning and soothing botanical ingredient.",
      properties:
        "Centella extract is known to support the appearance of calm, balanced skin when included in well-formulated products.",
      interestingFact:
        "Centella Asiatica is sometimes referred to as 'tiger grass' because folklore suggests tigers rolled in it to soothe their skin."
    }
  },

  {
    inci: "Cera Alba",
    common: "Beeswax",
    slug: "cera-alba-beeswax",
    description: {
      whatItIs:
        "Cera Alba, commonly known as beeswax, is a natural wax produced by honeybees.",
      function:
        "It functions as a thickening and structuring agent in cosmetic formulations.",
      properties:
        "Beeswax helps create a protective barrier on the skin’s surface, supporting moisture retention.",
      interestingFact:
        "Beeswax is secreted by worker bees from specialized abdominal glands to build honeycomb structures."
    }
  },

  {
    inci: "Citric Acid",
    slug: "citric-acid",
    description: {
      whatItIs:
        "Citric Acid is an organic acid naturally found in citrus fruits and widely used in cosmetic formulations.",
      function:
        "It primarily functions as a pH adjuster to help maintain formulation stability.",
      properties:
        "At appropriate levels, citric acid may also contribute to mild surface refinement.",
      interestingFact:
        "Commercial citric acid used in cosmetics is typically produced through fermentation rather than extracted directly from fruit."
    }
  },

  {
    inci: "Citrus Aurantium Dulcis Peel Oil",
    common: "Orange Peel Oil",
    slug: "citrus-aurantium-dulcis-peel-oil",
    description: {
      whatItIs:
        "Citrus Aurantium Dulcis Peel Oil is an essential oil extracted from the peel of sweet oranges.",
      function:
        "It functions primarily as a fragrance component and aromatic botanical oil in cosmetic formulations.",
      properties:
        "Orange peel oil contributes a fresh citrus aroma and may provide antioxidant components.",
      interestingFact:
        "The majority of orange essential oil is obtained as a byproduct of the juice industry."
    }
  },

  {
    inci: "Cocos Nucifera Oil",
    common: "Coconut Oil",
    slug: "cocos-nucifera-oil",
    description: {
      whatItIs:
        "Cocos Nucifera Oil is a plant-derived oil extracted from the meat of coconuts.",
      function:
        "It functions as an emollient, helping soften and smooth the skin.",
      properties:
        "Coconut oil is rich in saturated fatty acids that support moisture retention and contribute to a conditioned appearance.",
      interestingFact:
        "Coconut oil solidifies at cooler temperatures due to its high content of saturated fats."
    }
  },

  {
    inci: "Curcuma Longa Root Extract",
    common: "Turmeric",
    slug: "curcuma-longa-root-extract",
    image: "/ingredients/turmeric.png",
    description: {
      whatItIs:
        "Curcuma Longa Root Extract is derived from the root of the turmeric plant.",
      function:
        "It functions as a skin-conditioning botanical ingredient in cosmetic formulations.",
      properties:
        "Turmeric extract is known for its antioxidant components and its ability to support a more radiant-looking complexion.",
      interestingFact:
        "The bright yellow color of turmeric comes primarily from compounds known as curcuminoids."
    }
  },

  {
    inci: "Curcumin",
    slug: "curcumin",
    description: {
      whatItIs:
        "Curcumin is a naturally occurring polyphenolic compound found in turmeric root.",
      function:
        "It functions primarily as an antioxidant component within cosmetic formulations.",
      properties:
        "Curcumin is known for supporting a brighter-looking complexion due to its antioxidant characteristics when properly stabilized in a formula.",
      interestingFact:
        "Curcumin is responsible for much of turmeric’s vibrant yellow color and has been widely studied for its biological activity."
    }
  },

  {
    inci: "Dipotassium Glycyrrhizate",
    slug: "dipotassium-glycyrrhizate",
    description: {
      whatItIs:
        "Dipotassium Glycyrrhizate is a salt derived from glycyrrhizic acid, which is extracted from licorice root.",
      function:
        "It functions as a skin-conditioning and soothing agent in cosmetic formulations.",
      properties:
        "It is known for helping support a calm, balanced-looking complexion and reducing the appearance of temporary redness.",
      interestingFact:
        "Licorice root has been used in traditional botanical practices for centuries across Asia and Europe."
    }
  },

  {
    inci: "Elais Guineensis Oil",
    common: "Palm Oil",
    slug: "elais-guineensis-oil",
    description: {
      whatItIs:
        "Elaeis Guineensis Oil, commonly known as palm oil, is a vegetable oil derived from the fruit of the oil palm tree.",
      function:
        "It functions as an emollient and structural lipid in cosmetic formulations.",
      properties:
        "Palm oil contributes to moisture retention and supports a smooth, conditioned skin surface.",
      interestingFact:
        "Palm oil is one of the most widely produced vegetable oils globally due to the high yield of oil palm trees."
    }
  },

  {
    inci: "Fragaria Ananassa Fruit Extract",
    common: "Strawberry Extract",
    slug: "fragaria-ananassa-fruit-extract",
    description: {
      whatItIs:
        "Fragaria Ananassa Fruit Extract is derived from the strawberry plant.",
      function:
        "It functions as a skin-conditioning botanical ingredient.",
      properties:
        "Strawberry extract contains naturally occurring antioxidants that help support a refreshed-looking complexion.",
      interestingFact:
        "Strawberries are technically not true berries; botanically, they are classified as aggregate fruits."
    }
  },

  {
    inci: "Glutamic Acid",
    slug: "glutamic-acid",
    description: {
      whatItIs:
        "Glutamic Acid is a naturally occurring amino acid present in the skin.",
      function:
        "It functions as a conditioning agent and may assist in maintaining hydration balance.",
      properties:
        "Glutamic acid is part of the skin’s Natural Moisturizing Factors and supports overall moisture equilibrium.",
      interestingFact:
        "Glutamic acid also serves as an important neurotransmitter within the human nervous system."
    }
  },

  {
    inci: "Glycerin",
    slug: "glycerin",
    image: "/ingredients/glycerin.jpg",
    description: {
      whatItIs:
        "Glycerin is a plant-derived polyol commonly used in cosmetic formulations.",
      function:
        "It functions primarily as a humectant, attracting water to the skin’s outer layers.",
      properties:
        "Glycerin helps support hydration and contributes to a smoother, more supple-looking skin surface.",
      interestingFact:
        "Glycerin is also naturally present in the skin as part of its moisture-regulating system."
    }
  },

  {
    inci: "Helianthus Annuus Seed Oil",
    common: "Sunflower Seed Oil",
    slug: "helianthus-annuus-seed-oil",
    description: {
      whatItIs:
        "Helianthus Annuus Seed Oil is extracted from the seeds of the sunflower plant.",
      function:
        "It functions as an emollient in cosmetic formulations.",
      properties:
        "Sunflower seed oil is rich in linoleic acid, supporting moisture retention and a soft skin feel.",
      interestingFact:
        "Sunflowers naturally orient toward the sun during early stages of growth, a behavior known as heliotropism."
    }
  },

  {
    inci: "Hydrolyzed Collagen",
    slug: "hydrolyzed-collagen",
    description: {
      whatItIs:
        "Hydrolyzed Collagen is collagen protein that has been broken down into smaller peptides.",
      function:
        "It functions as a film-forming and conditioning agent in cosmetic formulations.",
      properties:
        "Hydrolyzed collagen helps support a smoother appearance by forming a lightweight surface film.",
      interestingFact:
        "Topically applied collagen does not replace the skin’s own collagen but primarily acts at the surface level."
    }
  },

  {
    inci: "Hyaluronic Acid",
    slug: "hyaluronic-acid",
    description: {
      whatItIs:
        "Hyaluronic Acid is a naturally occurring polysaccharide found in the skin and connective tissues.",
      function:
        "It functions primarily as a humectant, helping attract and retain water.",
      properties:
        "Hyaluronic acid is known for supporting hydration and contributing to a plump, smooth-looking complexion.",
      interestingFact:
        "Hyaluronic acid can bind many times its weight in water, which contributes to its moisture-supporting role."
    }
  },

  {
    inci: "Hydrolyzed Sodium Hyaluronate",
    slug: "hydrolyzed-sodium-hyaluronate",
    description: {
      whatItIs:
        "Hydrolyzed Sodium Hyaluronate is a lower molecular weight form of hyaluronic acid.",
      function:
        "It functions as a humectant within cosmetic formulations.",
      properties:
        "Due to its smaller molecular size, it is known to support surface hydration while contributing to a smooth skin appearance.",
      interestingFact:
        "Hydrolyzed forms are created by breaking larger molecules into smaller fragments to modify their behavior in formulations."
    }
  },

  {
    inci: "Inulin",
    slug: "inulin",
    image: "/ingredients/inulins.png",
    description: {
      whatItIs:
        "Inulin is a naturally derived polysaccharide typically extracted from plants such as chicory root.",
      function:
        "It functions as a skin-conditioning and prebiotic-support ingredient in cosmetic formulations.",
      properties:
        "Inulin is known to help support the skin’s natural microbiome balance and contribute to a smoother skin feel.",
      interestingFact:
        "Inulin is widely used in food science as a dietary fiber before its cosmetic applications were explored."
    }
  },

  {
    inci: "Lactobacillus Ferment Lysate",
    slug: "lactobacillus-ferment-lysate",
    image: "/ingredients/lactobacillus.png",
    description: {
      whatItIs:
        "Lactobacillus Ferment Lysate is derived from the fermentation of Lactobacillus bacteria.",
      function:
        "It functions as a skin-conditioning and microbiome-support ingredient in cosmetic formulations.",
      properties:
        "Ferment lysates are known to help support a balanced-looking complexion and overall skin barrier appearance.",
      interestingFact:
        "Fermented ingredients have been used in traditional skincare practices long before modern cosmetic science studied their mechanisms."
    }
  },

  {
    inci: "Lauryl Hydroxysultaine",
    slug: "lauryl-hydroxysultaine",
    description: {
      whatItIs:
        "Lauryl Hydroxysultaine is a mild amphoteric surfactant used in cleansing formulations.",
      function:
        "It functions as a foaming and cleansing agent.",
      properties:
        "It helps remove excess oil and impurities while contributing to a gentle lather when balanced properly in a formula.",
      interestingFact:
        "Amphoteric surfactants can carry both positive and negative charges depending on pH, which contributes to their mildness."
    }
  },

  {
    inci: "Lavandula Angustifolia Extract",
    common: "Lavender",
    slug: "lavandula-angustifolia-extract",
    description: {
      whatItIs:
        "Lavandula Angustifolia Extract is derived from the lavender plant.",
      function:
        "It functions as a botanical conditioning ingredient and aromatic component.",
      properties:
        "Lavender extract is known for contributing to a balanced-looking complexion and providing a naturally calming aroma.",
      interestingFact:
        "Lavender has been cultivated in the Mediterranean region for centuries for both aromatic and botanical uses."
    }
  },

  {
    inci: "Mangifera Indica Fruit Extract",
    common: "Mango Extract",
    slug: "mangifera-indica-fruit-extract",
    description: {
      whatItIs:
        "Mangifera Indica Fruit Extract is derived from the mango fruit.",
      function:
        "It functions as a skin-conditioning botanical ingredient.",
      properties:
        "Mango extract contains naturally occurring antioxidants that help support a smooth and refreshed-looking complexion.",
      interestingFact:
        "The mango tree is often referred to as the “king of fruits” in parts of South Asia."
    }
  },

  {
    inci: "Mel",
    common: "Honey",
    slug: "mel",
    image: "/ingredients/honey.png",
    description: {
      whatItIs:
        "Mel, commonly known as honey, is a natural substance produced by bees from floral nectar.",
      function:
        "It functions as a humectant and conditioning agent in cosmetic formulations.",
      properties:
        "Honey helps attract moisture and contributes to a smooth, conditioned skin appearance.",
      interestingFact:
        "Honey’s low water activity is one reason it has been used historically as a natural preservative."
    }
  },

  {
    inci: "Niacinamide",
    common: "Vitamin B3",
    slug: "niacinamide",
    description: {
      whatItIs:
        "Niacinamide is a water-soluble form of vitamin B3 used widely in cosmetic formulations.",
      function:
        "It functions as a skin-conditioning agent that supports barrier appearance and overall formulation balance.",
      properties:
        "Niacinamide is known to help improve the appearance of uneven tone and visible pores when used in appropriate concentrations.",
      interestingFact:
        "Niacinamide is related to NAD+, a molecule essential for cellular energy production."
    }
  },

  {
    inci: "Nonapeptide",
    slug: "nonapeptide",
    description: {
      whatItIs:
        "Nonapeptides are short chains of nine amino acids used in advanced cosmetic formulations.",
      function:
        "They function as skin-conditioning agents designed to support targeted cosmetic benefits.",
      properties:
        "Certain cosmetic nonapeptides are known for helping improve the appearance of uneven tone when incorporated into balanced formulations.",
      interestingFact:
        "Peptides are named based on the number of amino acids they contain; 'nona' indicates nine."
    }
  },

  {
    inci: "Olea Europaea Fruit Oil",
    common: "Olive Oil",
    slug: "olea-europaea-fruit-oil",
    description: {
      whatItIs:
        "Olea Europaea Fruit Oil is derived from the fruit of the olive tree.",
      function:
        "It functions primarily as an emollient in cosmetic formulations.",
      properties:
        "Olive oil is rich in fatty acids that support moisture retention and contribute to a smooth, conditioned skin feel.",
      interestingFact:
        "Olive trees can live for hundreds of years, with some still producing fruit after centuries."
    }
  },

  {
    inci: "Panthenol",
    common: "Pro-Vitamin B5",
    slug: "panthenol",
    description: {
      whatItIs:
        "Panthenol is a derivative of vitamin B5 used widely in cosmetic formulations.",
      function:
        "It functions as a humectant and conditioning agent.",
      properties:
        "Panthenol is known to support hydration and contribute to a smoother, softer-looking complexion.",
      interestingFact:
        "Panthenol converts to pantothenic acid (vitamin B5) once absorbed into the skin."
    }
  },

  {
    inci: "Parfum",
    common: "Fragrance",
    slug: "parfum",
    description: {
      whatItIs:
        "Parfum, or fragrance, refers to a blend of aromatic compounds used to scent cosmetic products.",
      function:
        "It functions as a fragrance component within formulations.",
      properties:
        "Fragrance contributes to the overall sensory experience of a product and may include natural, synthetic, or blended aromatic materials.",
      interestingFact:
        "Under cosmetic regulations, multiple fragrance ingredients can be listed collectively as 'Parfum' to protect proprietary scent compositions."
    }
  },

  {
    inci: "Persea Gratissima Oil",
    common: "Avocado Oil",
    slug: "persea-gratissima-oil",
    description: {
      whatItIs:
        "Persea Gratissima Oil is derived from the flesh of the avocado fruit.",
      function:
        "It functions as an emollient in cosmetic formulations.",
      properties:
        "Avocado oil is rich in fatty acids that support moisture retention and contribute to a conditioned skin feel.",
      interestingFact:
        "Avocados are botanically classified as berries."
    }
  },

  {
    inci: "Prunus Amygdalus Dulcis Oil",
    common: "Sweet Almond Oil",
    slug: "prunus-amygdalus-dulcis-oil",
    description: {
      whatItIs:
        "Prunus Amygdalus Dulcis Oil is a plant-derived oil extracted from sweet almonds.",
      function:
        "It functions primarily as an emollient in cosmetic formulations.",
      properties:
        "Sweet almond oil helps soften and smooth the skin while supporting moisture balance.",
      interestingFact:
        "Sweet almonds differ from bitter almonds, which contain naturally occurring compounds not suitable for direct cosmetic oil extraction."
    }
  },

  {
    inci: "Prunus Persica Fruit Extract",
    common: "Peach Extract",
    slug: "prunus-persica-fruit-extract",
    description: {
      whatItIs:
        "Prunus Persica Fruit Extract is derived from the peach fruit.",
      function:
        "It functions as a botanical conditioning ingredient.",
      properties:
        "Peach extract contains naturally occurring antioxidants that support a refreshed-looking complexion.",
      interestingFact:
        "Peaches belong to the same botanical family as almonds and cherries."
    }
  },

  {
    inci: "Ricinus Communis Seed Oil",
    common: "Castor Oil",
    slug: "ricinus-communis-seed-oil",
    description: {
      whatItIs:
        "Ricinus Communis Seed Oil is extracted from the seeds of the castor plant.",
      function:
        "It functions as an emollient and viscosity-enhancing agent in cosmetic formulations.",
      properties:
        "Castor oil contributes to a smooth, glossy finish and supports moisture retention.",
      interestingFact:
        "Castor oil is unique among plant oils due to its high concentration of ricinoleic acid."
    }
  },

  {
    inci: "Saccharomyces Ferment",
    slug: "saccharomyces-ferment",
    description: {
      whatItIs:
        "Saccharomyces Ferment is derived from the fermentation of Saccharomyces yeast.",
      function:
        "It functions as a skin-conditioning and microbiome-support ingredient.",
      properties:
        "Fermented ingredients are known to help support a balanced-looking complexion and overall skin vitality.",
      interestingFact:
        "Saccharomyces yeast is also used in baking and brewing processes worldwide."
    }
  },

  {
    inci: "Salvia Miltiorrhiza Root Extract",
    slug: "salvia-miltiorrhiza-root-extract",
    description: {
      whatItIs:
        "Salvia Miltiorrhiza Root Extract is derived from the root of the Salvia miltiorrhiza plant.",
      function:
        "It functions as a botanical skin-conditioning ingredient in cosmetic formulations.",
      properties:
        "This extract contains naturally occurring antioxidant compounds that help support a balanced-looking complexion.",
      interestingFact:
        "Salvia miltiorrhiza belongs to the mint family (Lamiaceae), which includes many aromatic botanical species."
    }
  },

  {
    inci: "Simmondsia Chinensis Seed Oil",
    common: "Jojoba Oil",
    slug: "simmondsia-chinensis-seed-oil",
    description: {
      whatItIs:
        "Simmondsia Chinensis Seed Oil is a liquid wax ester derived from the seeds of the jojoba plant.",
      function:
        "It functions as an emollient in cosmetic formulations.",
      properties:
        "Jojoba oil closely resembles the skin’s natural sebum, contributing to a balanced and conditioned feel.",
      interestingFact:
        "Technically, jojoba oil is not a true oil but a wax ester."
    }
  },

  {
    inci: "Sodium Citrate",
    slug: "sodium-citrate",
    description: {
      whatItIs:
        "Sodium Citrate is the sodium salt of citric acid.",
      function:
        "It functions primarily as a buffering agent to help maintain formulation pH.",
      properties:
        "Maintaining proper pH helps support product stability and skin compatibility.",
      interestingFact:
        "Sodium citrate is commonly used in food products as an acidity regulator."
    }
  },

  {
    inci: "Sodium Hyaluronate",
    common: "Hyaluronic Acid (Salt)",
    slug: "sodium-hyaluronate",
    description: {
      whatItIs:
        "Sodium Hyaluronate is the salt form of hyaluronic acid.",
      function:
        "It functions as a humectant within cosmetic formulations.",
      properties:
        "Sodium hyaluronate supports hydration and contributes to a plump, smooth-looking skin surface.",
      interestingFact:
        "The sodium salt form is often used because it is more stable and easier to formulate with than pure hyaluronic acid."
    }
  },

  {
    inci: "Sodium Lactate",
    slug: "sodium-lactate",
    description: {
      whatItIs:
        "Sodium Lactate is the sodium salt of lactic acid and occurs naturally in the skin.",
      function:
        "It functions primarily as a humectant and pH-adjusting ingredient in cosmetic formulations.",
      properties:
        "Sodium lactate helps support hydration and contributes to maintaining moisture balance within the skin’s outer layer.",
      interestingFact:
        "Sodium lactate is a natural component of the skin’s Natural Moisturizing Factors (NMF)."
    }
  },

  {
    inci: "Squalane",
    slug: "squalane",
    image: "/ingredients/squalane.jpg",
    description: {
      whatItIs:
        "Squalane is a hydrogenated derivative of squalene used in cosmetic formulations.",
      function:
        "It functions as an emollient, helping soften and smooth the skin.",
      properties:
        "Squalane supports moisture retention and contributes to a lightweight, non-greasy conditioned feel.",
      interestingFact:
        "Modern cosmetic squalane is typically derived from plant sources such as olives or sugarcane."
    }
  },

  {
    inci: "Sucrose",
    common: "Sugar",
    slug: "sucrose",
    description: {
      whatItIs:
        "Sucrose is a naturally occurring disaccharide composed of glucose and fructose.",
      function:
        "It functions as a humectant or exfoliating component depending on formulation type.",
      properties:
        "Sucrose can help attract moisture and, in physical exfoliation formats, assist in surface smoothing.",
      interestingFact:
        "Sucrose is widely used in both food science and cosmetic chemistry due to its stability and versatility."
    }
  },

  {
    inci: "Theobroma Cacao Seed Butter",
    common: "Cocoa Butter",
    slug: "theobroma-cacao-seed-butter",
    description: {
      whatItIs:
        "Theobroma Cacao Seed Butter, commonly known as cocoa butter, is a natural fat extracted from cacao beans.",
      function:
        "It functions as an emollient and structural lipid in cosmetic formulations.",
      properties:
        "Cocoa butter supports moisture retention and contributes to a rich, conditioned skin feel.",
      interestingFact:
        "Theobroma cacao translates to 'food of the gods' in Greek."
    }
  },

  {
    inci: "Tocopherol",
    common: "Vitamin E",
    slug: "tocopherol",
    image: "/ingredients/tocopherol.jpg",
    description: {
      whatItIs:
        "Tocopherol is a fat-soluble form of vitamin E used in cosmetic formulations.",
      function:
        "It functions primarily as an antioxidant, helping protect formulations from oxidative degradation.",
      properties:
        "Tocopherol supports a conditioned skin appearance and contributes to overall formula stability.",
      interestingFact:
        "Vitamin E was first identified as an essential nutrient in the early 20th century."
    }
  },

  {
    inci: "Xanthan Gum",
    slug: "xanthan-gum",
    description: {
      whatItIs:
        "Xanthan Gum is a polysaccharide produced through fermentation of sugars by Xanthomonas bacteria.",
      function:
        "It functions as a thickening and stabilizing agent in cosmetic formulations.",
      properties:
        "Xanthan gum helps improve texture consistency and prevent ingredient separation.",
      interestingFact:
        "Xanthan gum is also widely used in food products to enhance texture and stability."
    }
  },

  {
    inci: "Zinc PCA",
    slug: "zinc-pca",
    description: {
      whatItIs:
        "Zinc PCA is a compound combining zinc with pyrrolidone carboxylic acid (PCA), a component naturally present in the skin.",
      function:
        "It functions as a skin-conditioning ingredient in cosmetic formulations.",
      properties:
        "Zinc PCA is known to help support a balanced-looking complexion and assist in maintaining skin freshness.",
      interestingFact:
        "PCA is a key component of the skin’s Natural Moisturizing Factors (NMF)."
    }
  },
];