export type Product = {
  slug: string;
  name: string;
  price?: number;
  size?: string;
  images?: string[];
  benefits?: string[];
  description?: string;
  howToUse?: string;
  ingredients:
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
    price: 49.99,
    size: "Cleanser • Toner • Serum • Cream",
    images: [
      "/turmeric/main.jpg",
      "/turmeric/spread.jpg",
      "/turmeric/ingredients.jpg",
      "/turmeric/ai1.jpg",
      "/turmeric/ai2.png"
    ],
    benefits: [
      "Complete brightening routine",
      "Targets uneven skin tone",
      "Hydrates and restores radiance",
      "Powered by turmeric and botanical extracts",
    ],
    description:
      "A complete turmeric-powered skincare ritual designed to brighten, calm, and restore glow. This curated set combines cleanser, toner, serum, and cream for layered hydration and visible radiance.",
    howToUse:
      "Use cleanser and toner morning and night. Apply serum before moisturizing with turmeric cream. Use consistently for best results.",

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
    price: 12.99,
    size: "100 g / 3.53 oz",
    images: [
      "/original/main.jpg",
      "/original/spread.jpg",
      "/original/ingredients.jpg",
      "/original/ai1.png",
      "/original/ai2.jpg"
    ],
    benefits: [
      "Deeply nourishes dry skin",
      "Rich in unrefined shea butter",
      "Melts instantly into skin",
      "No parabens or synthetic fragrance",
    ],
    description:
      "Our Original Body Butter is a luxurious, deeply hydrating formula crafted with unrefined shea butter, cacao butter, and nourishing botanical oils. It melts into the skin, restoring softness and glow without leaving a greasy finish.",
    howToUse:
      "Massage into clean, dry skin. Apply generously to areas prone to dryness. Best used after showering to lock in moisture.",
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
    price: 12.99,
    size: "100 g / 3.53 oz",
    images: [
      "/mango/main.jpg",
      "/mango/spread.jpg",
      "/mango/ingredients.jpg",
      "/mango/ai1.png",
      "/mango/ai2.png"
    ],
    benefits: [
      "Brightens dull skin",
      "Infused with mango extract",
      "Light tropical scent",
      "Long-lasting hydration",
    ],
    description:
      "A vibrant blend infused with mango extract and nourishing butters. Designed to hydrate and revive dry skin while leaving a subtle tropical warmth.",
    howToUse:
      "Massage onto clean skin. Focus on dry areas such as elbows and knees.",
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
    price: 12.99,
    size: "100 g / 3.53 oz",
    images: [
      "/peach/main.png",
      "/peach/spread.jpg",
      "/peach/ingredients.jpg"
    ],
    benefits: [
      "Softens and smooths skin",
      "Delicate peach extract",
      "Light fruity aroma",
      "Fast-absorbing finish",
    ],
    description:
      "A silky body butter infused with peach extract and rich plant oils. Leaves skin feeling supple, soft, and delicately scented.",
    howToUse:
      "Apply daily after showering for best results.",
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
    price: 13.99,
    size: "100 g / 3.53 oz",
    images: [
      "/citrus/main.jpg",
      "/citrus/spread.jpg",
      "/citrus/ingredients.jpg",
      "/citrus/ai1.png",
      "/citrus/ai2.png"
    ],
    benefits: [
      "Refreshing citrus scent",
      "Vitamin C enriched",
      "Energizes dull skin",
      "Lightweight but deeply moisturizing",
    ],
    description:
      "An energizing blend enriched with citrus oils and vitamin C. Designed to refresh and hydrate while leaving skin radiant.",
    howToUse:
      "Massage onto skin daily, especially in the morning for a refreshing boost.",
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
    price: 9.99,
    size: "Lip Mask + Lip Scrub",
    images: [
      "/strawberry/main.jpg",
      "/strawberry/spread.jpg",
      "/strawberry/ingredients.jpg"
    ],
    benefits: [
      "Gently exfoliates and smooths lips",
      "Deeply hydrates and softens",
      "Infused with strawberry extract",
      "Leaves lips glossy and nourished"
    ],
    description:
      "A two-step strawberry lip ritual featuring a gentle exfoliating scrub and a deeply nourishing lip mask. Designed to smooth, hydrate, and restore softness for visibly plumper, healthier-looking lips.",
    howToUse:
      "Massage a small amount of lip scrub onto damp lips and rinse. Follow with lip mask and leave on overnight or as needed.",

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
];