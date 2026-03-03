export type Product = {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  size?: string;
  images: string[];
  category?: string;
  benefits?: string[];
  description?: string;
  howToUse?: string;
  warning?: string;
  warningFrench?: string;
  ingredients?:
  | string[]
  | {
    section: string;
    items: string[];
  }[];
  theme?: {
    gradient: string;
    accent: string;
    button: string;
  };
};

export const products: Product[] = [
  {
    slug: "turmeric-skincare-set",
    name: "Turmeric Skincare Set",
    price: 50,
    originalPrice: 65,
    size: "Cleanser • Toner • Serum • Cream",
    images: [
      "/turmeric/main.jpg",
      "/turmeric/spread.jpg",
      "/turmeric/ingredients.jpg",
      "/turmeric/ai1.jpg",
      "/turmeric/ai2.png"
    ],
    category: "skin-care",
    benefits: [
      "Complete 4-step routine",
      "Hydrates and restores radiance",
      "Leaves skin feeling refreshed",
      "Powered by turmeric and botanical extracts",
    ],
    description:
      "A complete turmeric-powered skincare ritual designed to gently cleanse, tone, hydrate, and protect. This curated set combines cleanser, toner, serum, and cream for layered skin care suitable for all skin types.",
    howToUse:
      "Start with warm water. Gently massage the gel cleanser onto the skin and rinse. Apply toner using fingertips or a cotton pad. Massage and press the serum into the face and neck, then seal in hydration with the cream. Use consistently as part of your daily routine.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [
      {
        section: "Turmeric Cleanser",
        items: [
          "water-aqua",
          "glycerin",
          "cocos-nucifera-oil",
          "elais-guineensis-oil",
          "curcuma-longa-root-extract",
          "olea-europaea-fruit-oil",
          "centella-asiatica-extract",
          "aloe-barbadensis-leaf-extract",
          "lauryl-hydroxysultaine",
          "glutamic-acid",
          "citric-acid",
          "butyrospermum-parkii-butter",
          "curcumin",
          "amino-acids",
          "inulin",
          "saccharomyces-ferment",
        ],
      },
      {
        section: "Turmeric Toner",
        items: [
          "water-aqua",
          "glycerin",
          "curcuma-longa-root-extract",
          "centella-asiatica-extract",
          "aloe-barbadensis-leaf-extract",
          "sodium-citrate",
          "lactobacillus-ferment-lysate",
          "curcumin",
          "zinc-pca",
          "ascorbic-acid",
        ],
      },
      {
        section: "Turmeric Serum",
        items: [
          "water-aqua",
          "saccharomyces-ferment",
          "curcuma-longa-root-extract",
          "niacinamide",
          "centella-asiatica-extract",
          "camellia-sinensis-leaf-extract",
          "bambusa-vulgaris-extract",
          "curcumin",
          "xanthan-gum",
          "sodium-hyaluronate",
          "allantoin",
          "lavandula-angustifolia-extract",
          "arginine",
          "nonapeptide",
        ],
      },
      {
        section: "Turmeric Cream",
        items: [
          "water-aqua",
          "curcuma-longa-root-extract",
          "olea-europaea-fruit-oil",
          "aloe-barbadensis-leaf-extract",
          "hydrolyzed-sodium-hyaluronate",
          "dipotassium-glycyrrhizate",
          "sodium-lactate",
          "tocopherol",
          "hydrolyzed-collagen",
          "centella-asiatica-extract",
          "azelaic-acid",
          "curcumin",
          "salvia-miltiorrhiza-root-extract",
          "panthenol",
          "citrus-aurantium-dulcis-peel-oil",
          "allantoin",
          "alpha-arbutin",
        ],
      },
    ],

    theme: {
      gradient: "from-[#fff8dc] via-[#ffe066] to-[#f6c90e]",
      accent: "text-yellow-900",
      button: "bg-[#e0a800] hover:bg-[#c48f00]",
    },
  },

  // =========================
  // BODY BUTTERS
  // =========================

  {
    slug: "original-body-butter",
    name: "Original Body Butter",
    price: 15,
    originalPrice: 20,
    size: "100 g / 3.53 oz",
    images: [
      "/original/main.jpg",
      "/original/spread.jpg",
      "/original/ingredients.jpg",
      "/original/ai1.png",
      "/original/ai2.jpg"
    ],
    category: "body-butter",
    benefits: [
      "Deeply nourishes dry skin",
      "Rich in unrefined shea butter",
      "Thick, butter-like consistency",
      "Melts instantly into skin",
    ],
    description:
      "Our Original Body Butter is a luxurious, deeply hydrating formula crafted with unrefined shea butter, vitamins, and nourishing natural oils. It melts into the skin, restoring softness and glow without leaving a greasy finish. Unlike other body butters, ours is noticeably thicker, making application smooth and satisfying.",
    howToUse:
      "Massage into clean, dry or damp skin. Apply generously to areas prone to dryness. Best used after showering to lock in moisture.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [
      "water-aqua",
      "glycerin",
      "olea-europaea-fruit-oil",
      "theobroma-cacao-seed-butter",
      "cocos-nucifera-oil",
      "aloe-barbadensis-leaf-extract",
      "butyrospermum-parkii-extract",
      "simmondsia-chinensis-seed-oil",
      "prunus-amygdalus-dulcis-oil",
      "argania-spinosa-kernel-oil",
      "butyrospermum-parkii-butter",
      "tocopherol",
      "hyaluronic-acid",
      "cera-alba-beeswax",
      "amethyst-powder",
    ],
    theme: {
      gradient: "from-[#f5e6d3] via-[#e8cfae] to-[#d4b896]",
      accent: "text-amber-900",
      button: "bg-[#5c3b1e] hover:bg-[#4a2f17]",
    },
  },

  {
    slug: "mango-body-butter",
    name: "Mango Body Butter",
    price: 15,
    originalPrice: 20,
    size: "100 g / 3.53 oz",
    images: [
      "/mango/main.jpg",
      "/mango/spread.jpg",
      "/mango/ingredients.jpg",
      "/mango/ai1.png",
      "/mango/ai2.png"
    ],
    category: "body-butter",
    benefits: [
      "Deeply nourishes dry skin",
      "Rich in unrefined shea butter",
      "Thick, butter-like consistency",
      "Melts instantly into skin",
    ],
    description:
      "Our Mango Body Butter is a luxurious, deeply hydrating formula crafted with unrefined shea butter, vitamins, and nourishing natural oils. It melts into the skin, restoring softness and glow without leaving a greasy finish. Unlike other body butters, ours is noticeably thicker, making application smooth and satisfying.",
    howToUse:
      "Massage into clean, dry or damp skin. Apply generously to areas prone to dryness. Best used after showering to lock in moisture.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [
      "water-aqua",
      "glycerin",
      "olea-europaea-fruit-oil",
      "theobroma-cacao-seed-butter",
      "cocos-nucifera-oil",
      "mangifera-indica-fruit-extract",
      "aloe-barbadensis-leaf-extract",
      "butyrospermum-parkii-butter",
      "simmondsia-chinensis-seed-oil",
      "prunus-amygdalus-dulcis-oil",
      "argania-spinosa-kernel-oil",
      "tocopherol",
      "hyaluronic-acid",
      "cera-alba-beeswax",
      "amethyst-powder",
    ],
    theme: {
      gradient: "from-[#fff1c9] via-[#ffd76a] to-[#ffb703]",
      accent: "text-orange-900",
      button: "bg-[#c57b00] hover:bg-[#a86400]",
    },
  },

  {
    slug: "peach-body-butter",
    name: "Peach Body Butter",
    price: 15,
    originalPrice: 20,
    size: "100 g / 3.53 oz",
    images: [
      "/peach/main.png",
      "/peach/spread.jpg",
      "/peach/ingredients.jpg"
    ],
    category: "body-butter",
    benefits: [
      "Deeply nourishes dry skin",
      "Rich in unrefined shea butter",
      "Thick, butter-like consistency",
      "Melts instantly into skin",
    ],
    description:
      "Our Peach Body Butter is a luxurious, deeply hydrating formula crafted with unrefined shea butter, vitamins, and nourishing natural oils. It melts into the skin, restoring softness and glow without leaving a greasy finish. Unlike other body butters, ours is noticeably thicker, making application smooth and satisfying.",
    howToUse:
      "Massage into clean, dry or damp skin. Apply generously to areas prone to dryness. Best used after showering to lock in moisture.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [
      "water-aqua",
      "glycerin",
      "olea-europaea-fruit-oil",
      "theobroma-cacao-seed-butter",
      "cocos-nucifera-oil",
      "prunus-persica-fruit-extract",
      "aloe-barbadensis-leaf-extract",
      "butyrospermum-parkii-butter",
      "simmondsia-chinensis-seed-oil",
      "prunus-amygdalus-dulcis-oil",
      "argania-spinosa-kernel-oil",
      "tocopherol",
      "hyaluronic-acid",
      "cera-alba-beeswax",
      "amethyst-powder",
    ],
    theme: {
      gradient: "from-[#ffe5d4] via-[#ffb5a7] to-[#f28482]",
      accent: "text-rose-900",
      button: "bg-[#c05621] hover:bg-[#9c4221]",
    },
  },

  {
    slug: "citrus-body-butter",
    name: "Citrus Body Butter",
    price: 15,
    originalPrice: 20,
    size: "100 g / 3.53 oz",
    images: [
      "/citrus/main.jpg",
      "/citrus/spread.jpg",
      "/citrus/ingredients.jpg",
      "/citrus/ai1.png",
      "/citrus/ai2.png"
    ],
    category: "body-butter",
    benefits: [
      "Deeply nourishes dry skin",
      "Rich in unrefined shea butter",
      "Thick, butter-like consistency",
      "Melts instantly into skin",
    ],
    description:
      "Our Citrus Body Butter is a luxurious, deeply hydrating formula crafted with unrefined shea butter, vitamins, and nourishing natural oils. It melts into the skin, restoring softness and glow without leaving a greasy finish. Unlike other body butters, ours is noticeably thicker, making application smooth and satisfying.",
    howToUse:
      "Massage into clean, dry or damp skin. Apply generously to areas prone to dryness. Best used after showering to lock in moisture.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [
      "water-aqua",
      "glycerin",
      "olea-europaea-fruit-oil",
      "persea-gratissima-oil",
      "cocos-nucifera-oil",
      "citrus-aurantium-dulcis-peel-oil",
      "aloe-barbadensis-leaf-extract",
      "butyrospermum-parkii-butter",
      "centella-asiatica-extract",
      "prunus-amygdalus-dulcis-oil",
      "argania-spinosa-kernel-oil",
      "citric-acid",
      "tocopherol",
      "hyaluronic-acid",
      "ascorbic-acid",
      "cera-alba-beeswax",
    ],
    theme: {
      gradient: "from-[#fff4d6] via-[#ffd166] to-[#f77f00]",
      accent: "text-orange-900",
      button: "bg-[#e76f00] hover:bg-[#c05600]",
    },
  },

  // =========================
  //  STRAWBERRY LINE
  // =========================
  {
    slug: "strawberry-lip-care",
    name: "Strawberry Lip Mask/Scrub 2-in-1",
    price: 10,
    originalPrice: 15,
    size: "Lip Mask + Lip Scrub",
    images: [
      "/strawberry/main.jpg",
      "/strawberry/spread.jpg",
      "/strawberry/ingredients.jpg"
    ],
    category: "lip-care",
    benefits: [
      "2-in-1 lip combo",
      "Gently exfoliates and smooths lips",
      "Deeply hydrates and softens",
      "Leaves lips glossy and nourished"
    ],
    description:
      "A two-step strawberry lip ritual featuring a gentle exfoliating scrub and a deeply nourishing lip mask. Designed to smooth, hydrate, and restore softness for visibly plumper, healthier-looking lips.",
    howToUse:
      "Massage a small amount of lip scrub onto damp lips and rinse or wipe off. Follow with lip mask and leave on overnight or as needed.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [
      {
        section: "Lip Mask",
        items: [
          "olea-europaea-fruit-oil",
          "cera-alba-beeswax",
          "mel",
          "butyrospermum-parkii-butter",
          "tocopherol",
          "helianthus-annuus-seed-oil",
          "simmondsia-chinensis-seed-oil",
          "parfum",
        ],
      },
      {
        section: "Lip Scrub",
        items: [
          "water-aqua",
          "sucrose",
          "fragaria-ananassa-fruit-extract",
          "squalane",
          "sodium-hyaluronate",
          "glycerin",
          "ricinus-communis-seed-oil",
        ],
      },
    ],

    theme: {
      gradient: "from-[#ffe5ec] via-[#ff8fab] to-[#c9184a]",
      accent: "text-rose-900",
      button: "bg-[#d6336c] hover:bg-[#b0255a]",
    },
  },
  // =========================
  //  BUNDLES LINE
  // =========================
  {
    slug: "butter-lover-bundle",
    name: "Butter Lover Bundle",
    price: 50,
    originalPrice: 75,
    images: [
      "/bundles/butterlover.png",
    ],
    category: "bundle",
    description: "For our body butter lovers! Choose any four body butters and save.",
    benefits: [
      "For body butter enthusiasts",
      "Pick any 4 scents",
      "Save compared to buying individually",
      "Perfect for gifting"
    ],
    ingredients: [],
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
  },
  {
    slug: "el-classico-bundle",
    name: "El Classico",
    price: 70,
    originalPrice: 90,
    images: [
      "/bundles/elclassico.png"
    ],
    category: "bundle",
    description: "The classic bundle! A turmeric skincare set, a lip care set, and one choice of body butter.",
    benefits: [
      "One of each product type",
      "Choose your body butter scent",
      "Full face and body ritual",
      "Excellent value"
    ],
    ingredients: [],
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
  },
  {
    slug: "tootie-frootie-bundle",
    name: "Tootie Frootie",
    price: 20,
    originalPrice: 30,
    images: [
      "/bundles/tootiefrootie.png"
    ],
    category: "bundle",
    description: "One body butter and one lip care product.",
    benefits: [
      "Choose your body butter scent",
      "The perfect body and lip combo",
      "For everyday hydration",
      "Bright and refreshing pair"
    ],
    ingredients: [],
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
  },
  {
    slug: "ultimate-set",
    name: "Ultimate Set",
    price: 100,
    originalPrice: 150,
    images: [
      "/bundles/ultimate.png"
    ],
    category: "bundle",
    description: "All for one. One for all. The complete Xiliphi collection.",
    benefits: [
      "All products included",
      "Maximum savings",
      "Perfect for gifting",
      "The full ritual"
    ],
    ingredients: [],
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
  },
  {
    slug: "mystery-bundle",
    name: "Mystery Bundle",
    price: 25,
    originalPrice: 40,
    images: [
      "/bundles/mystery.png"
    ],
    category: "bundle",
    description: "A surprise curated selection at a special price. Look out for additional goodies!",
    benefits: [
      "Best savings",
      "Hand-selected",
      "Guaranteed value",
      "Surprises included!"
    ],
    ingredients:[],
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
  }
];