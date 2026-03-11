"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ingredients } from "@/lib/ingredients";
import { useCart } from "@/context/CartContext";
import { reviews } from "@/lib/reviews";
import { products } from "@/lib/products";
import Image from "next/image";

const butterOptions = [
  { label: "Original", slug: "original-body-butter" },
  { label: "Peach", slug: "peach-body-butter" },
  { label: "Mango", slug: "mango-body-butter" },
  { label: "Citrus", slug: "citrus-body-butter" },
];

const ingredientMap = new Map(ingredients.map((i) => [i.slug, i]));

const SINGLE_BUTTER_SLUGS = ["el-classico-bundle", "tootie-frootie-bundle", "body-butter-sample"];

export default function ProductClient({ product }: any) {
  const { addToCart, isLoading } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const backHref = from === "/" ? "/" : "/products";
  const backLabel = from === "/" ? "← Back to Home" : "← Back to Products";

  const SESSION_KEY = `product-state-${product.slug}`;

  const [activeImage, setActiveImage] = useState(product.images?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [butterSelections, setButterSelections] = useState<string[]>(["", "", "", ""]);
  const [selectedButter, setSelectedButter] = useState("");
  const [added, setAdded] = useState(false);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [openIngredientSections, setOpenIngredientSections] = useState<Set<string>>(new Set());

  // Restore saved state on mount (when returning from almanac)
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (!saved) return;
      const state = JSON.parse(saved);
      if (state.ingredientsOpen !== undefined) setIngredientsOpen(state.ingredientsOpen);
      if (state.openIngredientSections) setOpenIngredientSections(new Set(state.openIngredientSections));
      if (state.scrollY !== undefined) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: state.scrollY, behavior: "instant" });
          });
        });
      }
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.judge.me/assets/widget.js";
    script.setAttribute("data-shop", "xiliphi.myshopify.com");
    script.async = true;
    script.onload = () => {
      if ((window as any).jdgm) {
        (window as any).jdgm.init();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Save state to sessionStorage before navigating to almanac
  const saveStateAndNavigate = useCallback(
    (href: string) => {
      try {
        sessionStorage.setItem(
          SESSION_KEY,
          JSON.stringify({
            scrollY: window.scrollY,
            ingredientsOpen,
            openIngredientSections: Array.from(openIngredientSections),
          })
        );
      } catch {
        // ignore
      }
      router.push(href);
    },
    [SESSION_KEY, ingredientsOpen, openIngredientSections, router]
  );

  function toggleIngredientSection(label: string) {
    setOpenIngredientSections((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  function renderIngredientList(slugs: string[]) {
    const known = slugs.filter((s) => ingredientMap.has(s));
    return known.map((slug, index) => {
      const ingredient = ingredientMap.get(slug)!;
      return (
        <span key={slug}>
          <button
            onClick={() => saveStateAndNavigate(`/almanac/${slug}?from=/products/${product.slug}`)}
            className="hover:underline cursor-pointer"
          >
            {ingredient.inci}
          </button>
          {index < known.length - 1 && ", "}
        </span>
      );
    });
  }

  let productReviews: any[] = [];

  if (product.category === "body-butter" || product.category === "body-butter-sample") {
    productReviews = reviews["body-butter"];
  } else if (product.category === "skin-care") {
    productReviews = reviews["turmeric-set"];
  } else if (product.category === "lip-care") {
    productReviews = reviews["lip-care"];
  } else if (product.category === "bundle") {
    productReviews = reviews["bundles"];
  }

  const isButterLoverValid =
    product.slug !== "butter-lover-bundle" ||
    butterSelections.every((s) => s !== "");

  const isSingleButterValid =
    !SINGLE_BUTTER_SLUGS.includes(product.slug) ||
    selectedButter !== "";

  const isBundleValid = isButterLoverValid && isSingleButterValid;

  const hasVariantId = !!product.shopifyVariantId;

  async function handleAddToCart() {
    if (!hasVariantId || !isBundleValid) return;

    const attributes = [];

    if (product.slug === "butter-lover-bundle") {
      butterSelections.forEach((s, i) => {
        attributes.push({ key: `Butter ${i + 1}`, value: s });
      });
    } else if (SINGLE_BUTTER_SLUGS.includes(product.slug)) {
      const butterLabel = butterOptions.find(b => b.slug === selectedButter)?.label ?? selectedButter;
      attributes.push({ key: "Butter Selection", value: butterLabel });
    }

    await addToCart(product.shopifyVariantId, quantity, attributes);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const buttonLabel = () => {
    if (!hasVariantId) return "Coming Soon";
    if (isLoading) return "Adding...";
    if (added) return "Added ✓";
    return "Add to Cart";
  };

  const buttonDisabled = !hasVariantId || !isBundleValid || isLoading;

  // ── Bundle / sample ingredient helpers ────────────────────────────────────

  type IngredientGroup = {
    label: string;
    sections: { section: string; items: string[] }[];
  };

  function getBundleIngredientGroups(): IngredientGroup[] {
    function getProductSections(slug: string): { section: string; items: string[] }[] {
      const p = products.find((x) => x.slug === slug);
      if (!p || !p.ingredients || p.ingredients.length === 0) return [];
      if (typeof p.ingredients[0] === "string") {
        return [{ section: p.name, items: p.ingredients as string[] }];
      }
      return p.ingredients as { section: string; items: string[] }[];
    }

    function productName(slug: string) {
      return products.find((x) => x.slug === slug)?.name ?? slug;
    }

    function dedupeButters(slugs: string[]): IngredientGroup[] {
      const seen = new Map<string, IngredientGroup>();
      slugs.forEach((slug) => {
        if (!slug || seen.has(slug)) return;
        seen.set(slug, {
          label: productName(slug),
          sections: getProductSections(slug),
        });
      });
      return Array.from(seen.values());
    }

    if (product.slug === "body-butter-sample") {
      if (!selectedButter) return [];
      return [{
        label: productName(selectedButter),
        sections: getProductSections(selectedButter),
      }];
    }

    if (product.slug === "el-classico-bundle") {
      const groups: IngredientGroup[] = [
        { label: "Turmeric Skincare Set", sections: getProductSections("turmeric-skincare-set") },
        { label: "Strawberry Lip Care", sections: getProductSections("strawberry-lip-care") },
      ];
      if (selectedButter) {
        groups.push({ label: productName(selectedButter), sections: getProductSections(selectedButter) });
      }
      return groups;
    }

    if (product.slug === "tootie-frootie-bundle") {
      const groups: IngredientGroup[] = [
        { label: "Strawberry Lip Care", sections: getProductSections("strawberry-lip-care") },
      ];
      if (selectedButter) {
        groups.push({ label: productName(selectedButter), sections: getProductSections(selectedButter) });
      }
      return groups;
    }

    if (product.slug === "butter-lover-bundle") {
      return dedupeButters(butterSelections);
    }

    if (product.slug === "ultimate-set") {
      return [
        { label: "Turmeric Skincare Set", sections: getProductSections("turmeric-skincare-set") },
        { label: "Strawberry Lip Care", sections: getProductSections("strawberry-lip-care") },
        { label: "Original Body Butter", sections: getProductSections("original-body-butter") },
        { label: "Mango Body Butter", sections: getProductSections("mango-body-butter") },
        { label: "Peach Body Butter", sections: getProductSections("peach-body-butter") },
        { label: "Citrus Body Butter", sections: getProductSections("citrus-body-butter") },
      ];
    }

    return [];
  }

  const bundleIngredientGroups =
    product.category === "bundle" || product.slug === "body-butter-sample"
      ? getBundleIngredientGroups()
      : null;

  // ──────────────────────────────────────────────────────────────────────────

  return (
    <main className="animate-fade-in-up">
      <section className={`w-full bg-gradient-to-br ${product.theme?.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: IMAGE AREA */}
          <div className="flex flex-col items-center">
            {activeImage && (
              <Image
                src={activeImage}
                alt={product.name}
                width={500}
                height={500}
                priority
                className="w-full max-w-lg object-contain drop-shadow-2xl transition-all duration-500"
              />
            )}

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {product.images?.map((img: string) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img
                    ? "border-amber-900"
                    : "border-transparent hover:scale-105"
                    }`}
                >
                  <div className="relative w-full h-full">
                    <Image src={img} alt="thumbnail" fill className="object-cover" sizes="80px" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: PURCHASE CARD */}
          <div className="bg-[#faf8f4] rounded-2xl shadow-xl p-10 text-black">

            <Link
              href={backHref}
              scroll={false}
              className="text-sm hover:opacity-70 transition mb-6 inline-block"
            >
              {backLabel}
            </Link>

            <h1 className="text-3xl font-medium mb-4">{product.name}</h1>

            {product.shopifyProductId && (
              <div
                className="jdgm-widget jdgm-preview-badge mb-4"
                data-id={product.shopifyProductId}
              />
            )}

            {/* PRICE */}
            <div className="mb-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-neutral-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {product.size && <p className="text-sm mt-1">{product.size}</p>}
            </div>

            {/* BENEFITS */}
            {product.benefits && (
              <ul className="space-y-2 mb-6">
                {product.benefits.map((benefit: string) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <span>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Butter Lover (choose 4) */}
            {product.slug === "butter-lover-bundle" && (
              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium">Choose your 4 body butters:</p>
                {butterSelections.map((selection, index) => (
                  <select
                    key={index}
                    value={selection}
                    onChange={(e) => {
                      const updated = [...butterSelections];
                      updated[index] = e.target.value;
                      setButterSelections(updated);
                    }}
                    className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  >
                    <option value="">Select scent</option>
                    {butterOptions.map((butter) => (
                      <option key={butter.slug} value={butter.slug}>
                        {butter.label}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
            )}

            {/* El Classico + Tootie Frootie + Sample */}
            {SINGLE_BUTTER_SLUGS.includes(product.slug) && (
              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium">Choose your scent:</p>
                <select
                  value={selectedButter}
                  onChange={(e) => setSelectedButter(e.target.value)}
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                >
                  <option value="">Select scent</option>
                  {butterOptions.map((butter) => (
                    <option key={butter.slug} value={butter.slug}>
                      {butter.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Mystery */}
            {product.slug === "mystery-bundle" && (
              <p className="mt-6 text-sm text-neutral-500">Items are selected at random.</p>
            )}

            {/* QUANTITY SELECTOR */}
            {hasVariantId && (
              <div className="flex items-center gap-4 mt-8">
                <p className="text-sm font-medium">Quantity</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-black transition-colors cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-sm w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-black transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* ADD TO CART BUTTON */}
            <button
              disabled={buttonDisabled}
              onClick={handleAddToCart}
              className={`w-full py-4 mt-8 rounded-full text-white font-medium transition cursor-pointer ${buttonDisabled
                ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                : added
                  ? "bg-green-700"
                  : product.theme?.button || "bg-black hover:bg-neutral-800"
                }`}
            >
              {buttonLabel()}
            </button>

            <p className="text-xs text-center mt-4">Free shipping on orders over $15!</p>

            <div className="border-t border-neutral-200 my-8" />

            {/* DESCRIPTION */}
            {product.description && (
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">Description</h2>
                <p className="text-sm leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* INGREDIENTS */}
            <div className="mb-8">
              <button
                onClick={() => setIngredientsOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-left"
              >
                <h2 className="text-lg font-medium">Ingredients</h2>
                <span
                  className={`text-lg transition-transform duration-300 ${ingredientsOpen ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${ingredientsOpen ? "max-h-[3000px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
              >
                {bundleIngredientGroups !== null ? (
                  product.slug === "mystery-bundle" ? (
                    <p className="text-sm text-neutral-500">
                      Items are hand-selected as a surprise — ingredients vary.
                    </p>
                  ) : bundleIngredientGroups.length === 0 ? (
                    <p className="text-sm text-neutral-500">
                      Select your scent above to see ingredients.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {bundleIngredientGroups.map((group) => {
                        const isOpen = openIngredientSections.has(group.label);
                        const showAccordion = bundleIngredientGroups.length > 1 || product.slug === "butter-lover-bundle";
                        return showAccordion ? (
                          <div
                            key={group.label}
                            className="border border-neutral-200 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleIngredientSection(group.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-neutral-50 transition"
                            >
                              <span className="text-xs font-semibold uppercase tracking-widest text-black">{group.label}</span>
                              <span
                                className={`text-base transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                  }`}
                              >
                                +
                              </span>
                            </button>
                            {isOpen && <div className="border-t border-neutral-200" />}
                            <div
                              className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                              <div className="px-4 pb-4 space-y-6">
                                {group.sections.map((sec) => (
                                  <div key={sec.section}>
                                    {group.sections.length > 1 && (
                                      <p className="text-sm font-semibold text-black mb-3">
                                        {sec.section}
                                      </p>
                                    )}
                                    <p className="text-sm leading-relaxed">
                                      {renderIngredientList(sec.items)}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Sample: single scent selected — render flat, no accordion */
                          <div key={group.label}>
                            {group.sections.map((sec) => (
                              <p key={sec.section} className="text-sm leading-relaxed">
                                {renderIngredientList(sec.items)}
                              </p>
                            ))}
                          </div>
                        );
                      })}

                      {/* Hints */}
                      {["el-classico-bundle", "tootie-frootie-bundle"].includes(product.slug) && !selectedButter && (
                        <p className="text-sm text-neutral-400 italic px-1">
                          Choose a body butter above to see its ingredients.
                        </p>
                      )}
                      {product.slug === "butter-lover-bundle" && butterSelections.every((s) => !s) && (
                        <p className="text-sm text-neutral-400 italic px-1">
                          Choose a body butter above to see its ingredients.
                        </p>
                      )}
                      {product.slug === "butter-lover-bundle" && butterSelections.some((s) => !s) && butterSelections.some((s) => !!s) && (
                        <p className="text-sm text-neutral-400 italic px-1">
                          Select remaining butters above to see all ingredients.
                        </p>
                      )}
                    </div>
                  )
                ) : Array.isArray(product.ingredients) &&
                  product.ingredients.length > 0 &&
                  typeof product.ingredients[0] === "string" ? (
                  <p className="text-sm leading-relaxed">
                    {renderIngredientList(product.ingredients as string[])}
                  </p>
                ) : Array.isArray(product.ingredients) &&
                  product.ingredients.length > 0 &&
                  typeof product.ingredients[0] === "object" ? (
                  <div className="space-y-2">
                    {(product.ingredients as { section: string; items: string[] }[]).map(
                      (group) => {
                        const isOpen = openIngredientSections.has(group.section);
                        return (
                          <div
                            key={group.section}
                            className="border border-neutral-200 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleIngredientSection(group.section)}
                              className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-neutral-50 transition"
                            >
                              <span className="text-sm font-semibold">{group.section}</span>
                              <span
                                className={`text-base transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                  }`}
                              >
                                +
                              </span>
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                              <p className="px-4 pb-4 text-sm leading-relaxed">
                                {renderIngredientList(group.items)}
                              </p>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : null}
              </div>
            </div>

            {/* HOW TO USE */}
            {product.howToUse && (
              <div>
                <h2 className="text-lg font-medium mb-3">How to Use</h2>
                <p className="text-sm leading-relaxed">{product.howToUse}</p>
              </div>
            )}

            {/* WARNING */}
            {product.warning && (
              <div className="mt-8">
                <h2 className="text-lg font-medium mb-3">CAUTION</h2>
                <p className="text-sm leading-relaxed">{product.warning}</p>
              </div>
            )}

            {product.warningFrench && (
              <div className="mt-8">
                <h2 className="text-lg font-medium mb-3">ATTENTION</h2>
                <p className="text-sm leading-relaxed">{product.warningFrench}</p>
              </div>
            )}
          </div>
        </div>

        {/* INGREDIENT CHART */}
        {product.chart && (
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={`/${product.chart}`}
                alt={`${product.name} ingredient chart`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        )}
      </section>

      {/* HERO INGREDIENTS */}
      {product.heroIngredients && product.heroIngredients.length > 0 && (
        <section className="bg-white py-32">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-medium mb-20 text-center">Hero Ingredients</h2>

            <div className="space-y-32">
              {product.heroIngredients.map((hero: any, index: number) => {
                const ingredient = ingredientMap.get(hero.slug);
                if (!ingredient) return null;
                const isReversed = index % 2 === 1;

                return (
                  <div key={hero.slug} className={`grid md:grid-cols-2 gap-16 items-center`}>
                    <div className={`${isReversed ? "md:order-2" : ""}`}>
                      <h3 className="text-2xl font-medium mb-6">
                        {hero.title || ingredient.common || ingredient.inci}
                      </h3>
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {hero.description}
                      </p>
                      <button
                        onClick={() => saveStateAndNavigate(`/almanac/${hero.slug}?from=/products/${product.slug}`)}
                        className="inline-block mt-6 text-base underline hover:opacity-70 transition-opacity duration-300 cursor-pointer"
                      >
                        Learn more →
                      </button>
                    </div>

                    <div
                      className={`${isReversed ? "md:order-1 flex justify-start" : "flex justify-end"
                        }`}
                    >
                      {ingredient.image && (
                        <div className="relative w-full max-w-md aspect-square">
                          <Image
                            src={ingredient.image}
                            alt={ingredient.common || ingredient.inci}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 448px"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="bg-[#faf8f4] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-10 text-center">
            Don't take our word for it...
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {productReviews.map((review, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-xl p-10 shadow-sm flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="text-xl mb-4 text-teal-600">
                    {"★★★★★".slice(0, review.rating)}
                  </div>
                  <p className="text-base text-neutral-700 leading-relaxed">{review.text}</p>
                </div>
                <p className="text-sm text-neutral-500 mt-6">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {product.faq && product.faq.length > 0 && (
            <>
              <h2 className="text-3xl font-medium mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-10">
                {product.faq.map((item: any, index: number) => (
                  <div key={index}>
                    <p className="text-lg font-medium mb-2">{item.question}</p>
                    <p className="text-neutral-700 text-base leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}