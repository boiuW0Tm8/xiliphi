import { bodyButterFAQ, turmericSetFAQ, lipCareFAQ, bundleFAQ } from "@/lib/faq";

export type Product = {
  slug: string;
  shopifyVariantId?: string;
  shopifyProductId?: string;
  name: string;
  price: number;
  originalPrice?: number;
  size?: string;
  images: string[];
  chart?: string,
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
  faq?: {
    question: string;
    answer: string;
  }[];

  heroIngredients?: {
    slug: string;
    title?: string;
    description: string;
  }[];
};


export const products: Product[] = [
  {
    slug: "turmeric-skincare-set",
    shopifyVariantId: "gid://shopify/ProductVariant/42977821261887",
    name: "Turmeric Skincare Set",
    faq: turmericSetFAQ,
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
    chart: "charts/turmeric-set.png",
    category: "skin-care",
    benefits: [
      "Complete 4-step turmeric-powered skincare routine",
      "Gentle cleanser with inulin helps cleanse and condition the skin",
      "Fermented toner and serum help soothe and refresh the complexion",
      "Barrier-supporting cream locks in hydration and strengthens moisture retention",
    ],
    description:
      "A complete turmeric-powered skincare ritual designed to support the skin’s moisture barrier and overall balance. This curated four-step system pairs a gentle cleanser, fermented toning essence and serum, and a barrier-supporting cream to help cleanse, refresh, and deeply hydrate the skin. Powered by turmeric and botanical extracts, the routine works synergistically to promote a healthy-looking complexion while helping maintain the skin’s natural balance.",
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
    heroIngredients: [
      {
        slug: "curcuma-longa-root-extract",
        title: "Turmeric Extract",
        description:
          "A powerful antioxidant traditionally used in skincare to help brighten the appearance of skin and support a healthy-looking complexion."
      },
      {
        slug: "inulin",
        title: "Inulin (Prebiotic)",
        description:
          "A plant-derived ingredient known for its skin-conditioning properties that helps support the skin’s natural balance."
      },
      {
        slug: "lactobacillus-ferment-lysate",
        title: "Lactobacillus Ferment Lysate (Postbiotic)",
        description:
          "A fermented ingredient that helps support the skin’s natural balance while improving the appearance of calm, healthy skin."
      },
      {
        slug: "aloe-barbadensis-leaf-extract",
        title: "Aloe Vera",
        description:
          "A natural gel that helps soothe and hydrate the skin while supporting the skin’s moisture barrier for a soft, refreshed complexion."
      }
    ]
  },

  // =========================
  // BODY BUTTERS
  // =========================

  {
    slug: "original-body-butter",
    shopifyVariantId: "gid://shopify/ProductVariant/42977726529599",
    name: "Original Body Butter",
    faq: bodyButterFAQ,
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
    chart: "charts/original-bb.png",
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
    heroIngredients: [
      {
        slug: "butyrospermum-parkii-butter",
        title: "Shea Butter",
        description:
          "Rich in essential fatty acids, shea butter deeply nourishes the skin while helping support the skin’s natural moisture barrier for long-lasting softness."
      },
      {
        slug: "glycerin",
        title: "Glycerin",
        description:
          "A powerful humectant that attracts moisture to the skin, helping keep it hydrated, smooth, and supple throughout the day."
      },
      {
        slug: "tocopherol",
        title: "Vitamin E (Tocopherol)",
        description:
          "An antioxidant that helps protect the skin from environmental stress while supporting healthy-looking, conditioned skin."
      }
    ]
  },

  {
    slug: "mango-body-butter",
    shopifyVariantId: "gid://shopify/ProductVariant/42977732984895",
    shopifyProductId: "gid://shopify/Product/8102124748863",
    name: "Mango Body Butter",
    faq: bodyButterFAQ,
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
    chart: "charts/mango-bb.png",
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
    heroIngredients: [
      {
        slug: "butyrospermum-parkii-butter",
        title: "Shea Butter",
        description:
          "Rich in essential fatty acids, shea butter deeply nourishes the skin while helping support the skin’s natural moisture barrier for long-lasting softness."
      },
      {
        slug: "glycerin",
        title: "Glycerin",
        description:
          "A powerful humectant that attracts moisture to the skin, helping keep it hydrated, smooth, and supple throughout the day."
      },
      {
        slug: "tocopherol",
        title: "Vitamin E (Tocopherol)",
        description:
          "An antioxidant that helps protect the skin from environmental stress while supporting healthy-looking, conditioned skin."
      }
    ]
  },

  {
    slug: "peach-body-butter",
    shopifyVariantId: "gid://shopify/ProductVariant/42977727447103",
    name: "Peach Body Butter",
    faq: bodyButterFAQ,
    price: 15,
    originalPrice: 20,
    size: "100 g / 3.53 oz",
    images: [
      "/peach/main.png",
      "/peach/spread.jpg",
      "/peach/ingredients.jpg"
    ],
    chart: "charts/peach-bb.png",
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
    heroIngredients: [
      {
        slug: "butyrospermum-parkii-butter",
        title: "Shea Butter",
        description:
          "Rich in essential fatty acids, shea butter deeply nourishes the skin while helping support the skin’s natural moisture barrier for long-lasting softness."
      },
      {
        slug: "glycerin",
        title: "Glycerin",
        description:
          "A powerful humectant that attracts moisture to the skin, helping keep it hydrated, smooth, and supple throughout the day."
      },
      {
        slug: "tocopherol",
        title: "Vitamin E (Tocopherol)",
        description:
          "An antioxidant that helps protect the skin from environmental stress while supporting healthy-looking, conditioned skin."
      }
    ]
  },

  {
    slug: "citrus-body-butter",
    shopifyVariantId: "gid://shopify/ProductVariant/42977738162239",
    name: "Citrus Body Butter",
    faq: bodyButterFAQ,
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
    chart: "charts/citrus-bb.png",
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
    heroIngredients: [
      {
        slug: "butyrospermum-parkii-butter",
        title: "Shea Butter",
        description:
          "Rich in essential fatty acids, shea butter deeply nourishes the skin while helping support the skin’s natural moisture barrier for long-lasting softness."
      },
      {
        slug: "glycerin",
        title: "Glycerin",
        description:
          "A powerful humectant that attracts moisture to the skin, helping keep it hydrated, smooth, and supple throughout the day."
      },
      {
        slug: "tocopherol",
        title: "Vitamin E (Tocopherol)",
        description:
          "An antioxidant that helps protect the skin from environmental stress while supporting healthy-looking, conditioned skin."
      }
    ]
  },
  {
    slug: "body-butter-sample",
    shopifyVariantId: "gid://shopify/ProductVariant/42986251386943",
    name: "Body Butter Sample",
    faq: bodyButterFAQ,
    price: 5,
    size: "10 g / 0.35 oz",
    images: [
      "/sample/sample2.png",
    ],
    category: "body-butter",
    benefits: [
      "Try before you commit",
      "Same formula as full size",
      "Choose your scent",
      "Perfect introduction to Xiliphi",
    ],
    description:
      "A small trial size of our body butter, perfect for experiencing the texture, scent, and nourishment before committing to a full jar.",
    howToUse:
      "Massage into clean, dry or damp skin. Apply generously to areas prone to dryness. Best used after showering to lock in moisture.",
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    ingredients: [],
    theme: {
      gradient: "from-[#e9faf7] via-[#79d6c3] to-[#16a085]",
      accent: "text-teal-900",
      button: "bg-[#16a085] hover:bg-[#12876f]",
    },
  },

  // =========================
  //  STRAWBERRY LINE
  // =========================
  {
    slug: "strawberry-lip-care",
    shopifyVariantId: "gid://shopify/ProductVariant/42977754218559",
    name: "Strawberry Lip Mask/Scrub 2-in-1",
    faq: lipCareFAQ,
    price: 10,
    originalPrice: 15,
    size: "Lip Mask + Lip Scrub",
    images: [
      "/strawberry/main.jpg",
      "/strawberry/spread.jpg",
      "/strawberry/ingredients.jpg"
    ],
    chart: "charts/strawberry-lip.png",
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
        section: "Strawberry Lip Mask",
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
        section: "Strawberry Lip Scrub",
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
    heroIngredients: [
      {
        slug: "squalane",
        title: "Squalane",
        description:
          "A lightweight emollient that helps deeply moisturize and soften lips while supporting the skin’s natural barrier."
      },
      {
        slug: "mel",
        title: "Honey",
        description:
          "A natural humectant that attracts and retains moisture, helping keep lips smooth, nourished, and hydrated."
      }
    ]
  },
  // =========================
  //  BUNDLES LINE
  // =========================
  {
    slug: "butter-lover-bundle",
    shopifyVariantId: "gid://shopify/ProductVariant/42977824145471",
    name: "Butter Lover Bundle",
    faq: bundleFAQ,
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
    theme: {
      gradient: "from-[#e9faf7] via-[#79d6c3] to-[#16a085]",
      accent: "text-teal-900",
      button: "bg-[#16a085] hover:bg-[#12876f]",
    },
  },

  {
    slug: "el-classico-bundle",
    shopifyVariantId: "gid://shopify/ProductVariant/42977824178239",
    name: "El Classico",
    faq: bundleFAQ,
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
    theme: {
      gradient: "from-[#e9faf7] via-[#79d6c3] to-[#16a085]",
      accent: "text-teal-900",
      button: "bg-[#16a085] hover:bg-[#12876f]",
    },
  },
  {
    slug: "tootie-frootie-bundle",
    shopifyVariantId: "gid://shopify/ProductVariant/42977825718335",
    name: "Tootie Frootie",
    faq: bundleFAQ,
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
    theme: {
      gradient: "from-[#e9faf7] via-[#79d6c3] to-[#16a085]",
      accent: "text-teal-900",
      button: "bg-[#16a085] hover:bg-[#12876f]",
    },
  },
  {
    slug: "ultimate-set",
    shopifyVariantId: "gid://shopify/ProductVariant/42977826013247",
    name: "The Ultimate Set",
    faq: bundleFAQ,
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
    theme: {
      gradient: "from-[#e9faf7] via-[#79d6c3] to-[#16a085]",
      accent: "text-teal-900",
      button: "bg-[#16a085] hover:bg-[#12876f]",
    },
  },
  {
    slug: "mystery-bundle",
    shopifyVariantId: "gid://shopify/ProductVariant/42977826078783",
    name: "Mystery Bundle",
    faq: bundleFAQ,
    price: 25,
    originalPrice: 40,
    images: [
      "/bundles/mysterybox.png"
    ],
    category: "bundle",
    description: "A surprise curated selection at a special price. Look out for additional goodies!",
    benefits: [
      "Best savings",
      "Hand-selected",
      "Guaranteed value",
      "Surprises included!"
    ],
    ingredients: [],
    warning: "For external use only. Avoid contact with eyes. If contact with eyes occurs, rinse thoroughly with water. Discontinue use if irritation or rash occur. Keep out of reach of children. Do not swallow. Test on a patch of skin first.",
    warningFrench: "Pour usage externe seulement. Éviter le contact avec les yeux. En cas de contact avec les yeux, rincer abondamment à l'eau. Cesser l'utilisation en cas d'irritation ou d'éruption cutanée. Garder hors de la portée des enfants. Ne pas avaler. Faites d'abord un essai sur une petite zone de peau.",
    theme: {
      gradient: "from-[#e9faf7] via-[#79d6c3] to-[#16a085]",
      accent: "text-teal-900",
      button: "bg-[#16a085] hover:bg-[#12876f]",
    },
  }
];