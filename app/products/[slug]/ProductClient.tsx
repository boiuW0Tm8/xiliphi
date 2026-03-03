"use client";

import { useState } from "react";
import Link from "next/link";
import { ingredients } from "@/lib/ingredients";

const butterOptions = [
  { label: "Original", slug: "original-body-butter" },
  { label: "Peach", slug: "peach-body-butter" },
  { label: "Mango", slug: "mango-body-butter" },
  { label: "Citrus", slug: "citrus-body-butter" },
];

const ingredientMap = new Map(
  ingredients.map((i) => [i.slug, i])
);

export default function ProductClient({ product }: any) {
  const [activeImage, setActiveImage] = useState(
    product.images?.[0] || ""
  );

  const [butterSelections, setButterSelections] = useState<string[]>([
    "", "", "", ""
  ]);

  const [selectedButter, setSelectedButter] = useState("");

  const isButterLoverValid =
    product.slug !== "butter-lover-bundle" ||
    butterSelections.every((s) => s !== "");

  const isSingleButterValid =
    !["el-classico-bundle", "tootie-frootie-bundle"].includes(product.slug) ||
    selectedButter !== "";

  const isBundleValid = isButterLoverValid && isSingleButterValid;

  return (
    <main className="animate-fade-in-up">
      <section
        className={`w-full bg-gradient-to-br ${product.theme?.gradient} py-20`}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: IMAGE AREA */}
          <div className="flex flex-col items-center">
            {activeImage && (
              <img
                src={activeImage}
                alt={product.name}
                className="w-full max-w-lg object-contain drop-shadow-2xl transition-all duration-500"
              />
            )}

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {product.images?.map((img: string) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? "border-amber-900"
                      : "border-transparent hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: PURCHASE CARD */}
          <div className="bg-[#faf8f4] rounded-2xl shadow-xl p-10 text-black">

            <Link
              href="/products?fromProduct=true"
              className="text-sm hover:opacity-70 transition mb-6 inline-block"
            >
              ← Back to Products
            </Link>

            <h1 className="text-3xl font-medium mb-4">
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="mb-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-semibold">
                  ${product.price.toFixed(2)}
                </span>

                {product.originalPrice && (
                  <span className="text-lg text-neutral-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {product.size && (
                <p className="text-sm mt-1">
                  {product.size}
                </p>
              )}
            </div>

            {/* BENEFITS */}
            {product.benefits && (
              <ul className="space-y-2 mb-6">
                {product.benefits.map((benefit: string) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* ========================= */}
            {/* BUNDLE SELECTION LOGIC   */}
            {/* ========================= */}

            {/* Butter Lover (choose 4) */}
            {product.slug === "butter-lover-bundle" && (
              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium">
                  Choose your 4 body butters:
                </p>

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

            {/* El Classico + Tootie Frootie */}
            {["el-classico-bundle", "tootie-frootie-bundle"].includes(product.slug) && (
              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium">
                  Choose your body butter:
                </p>

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
              <p className="mt-6 text-sm text-neutral-500">
                Scents are selected at random.
              </p>
            )}

            {/* BUTTON */}
            <button
              disabled={!isBundleValid}
              className={`w-full py-4 mt-8 rounded-full text-white font-medium transition ${
                isBundleValid
                  ? product.theme?.button
                  : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
              }`}
            >
              Coming Soon!
            </button>

            <p className="text-xs text-center mt-4">
              Free shipping on orders over $50
            </p>

            <div className="border-t border-neutral-200 my-8" />

            {/* DESCRIPTION */}
            {product.description && (
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">
                  Description
                </h2>
                <p className="text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* INGREDIENTS */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">
                Ingredients
              </h2>

              {Array.isArray(product.ingredients) &&
              typeof product.ingredients[0] === "string" ? (
                <p className="text-sm leading-relaxed">
                  {(product.ingredients as string[]).map((slug, index) => {
                    const ingredient = ingredientMap.get(slug);
                    if (!ingredient) return null;

                    return (
                      <span key={slug}>
                        <Link
                          href={`/almanac/${slug}`}
                          className="hover:underline"
                        >
                          {ingredient.inci}
                        </Link>
                        {index <
                          (product.ingredients as string[]).length - 1 && ", "}
                      </span>
                    );
                  })}
                </p>
              ) : null}
            </div>

            {/* HOW TO USE */}
            {product.howToUse && (
              <div>
                <h2 className="text-lg font-medium mb-3">
                  How to Use
                </h2>
                <p className="text-sm leading-relaxed">
                  {product.howToUse}
                </p>
              </div>
            )}

            {/* WARNING */}
            {product.warning && (
              <div className="mt-8">
                <h2 className="text-lg font-medium mb-3">
                  CAUTION
                </h2>
                <p className="text-sm leading-relaxed">
                  {product.warning}
                </p>
              </div>
            )}

            {/* WARNING FRENCH */}
            {product.warningFrench && (
              <div className="mt-8">
                <h2 className="text-lg font-medium mb-3">
                  ATTENTION
                </h2>
                <p className="text-sm leading-relaxed">
                  {product.warningFrench}
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

      <section className="bg-white py-20" />
    </main>
  );
}