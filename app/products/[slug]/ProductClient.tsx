"use client";

import { useState } from "react";
import Link from "next/link";
import { ingredients } from "@/lib/ingredients";

const ingredientMap = new Map(
  ingredients.map((i) => [i.slug, i])
);

export default function ProductClient({ product }: any) {
  const [activeImage, setActiveImage] = useState(
    product.images?.[0] || ""
  );

  return (
    <>
      {/* ===================== */}
      {/* GRADIENT HERO SECTION */}
      {/* ===================== */}
      <section
        className={`w-full bg-gradient-to-br ${product.theme?.gradient} py-20`}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
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
              className="text-sm text-black hover:opacity-70 transition mb-6 inline-block"
            >
              ← Back to Products
            </Link>

            {/* PRODUCT NAME */}
            <h1 className="text-3xl font-medium mb-4 text-black">
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="mb-4 text-black">
              <span className="text-2xl font-semibold text-black">
                ${product.price.toFixed(2)}
              </span>
              {product.size && (
                <p className="text-sm mt-1 text-black">
                  {product.size}
                </p>
              )}
            </div>

            {/* BENEFITS */}
            {product.benefits && (
              <ul className="space-y-2 mb-6 text-black">
                {product.benefits.map((benefit: string) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-black"
                  >
                    <span>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              className={`w-full py-4 rounded-full text-white font-medium transition ${product.theme?.button}`}
            >
              Coming Soon!
            </button>

            <p className="text-xs text-center mt-4 text-black">
              Free shipping on orders over $50
            </p>

            <div className="border-t border-neutral-200 my-8" />

            {/* DESCRIPTION */}
            {product.description && (
              <div className="mb-8 text-black">
                <h2 className="text-lg font-medium mb-3 text-black">
                  Description
                </h2>
                <p className="text-sm leading-relaxed text-black">
                  {product.description}
                </p>
              </div>
            )}

            {/* INGREDIENTS */}
            <div className="mb-8 text-black">
              <h2 className="text-lg font-medium mb-3 text-black">
                Ingredients
              </h2>

              {Array.isArray(product.ingredients) &&
              typeof product.ingredients[0] === "string" ? (
                <>
                  {/* Mobile List */}
                  <ul className="space-y-2 md:hidden text-black">
                    {(product.ingredients as string[]).map((slug) => {
                      const ingredient = ingredientMap.get(slug);
                      if (!ingredient) return null;

                      return (
                        <li key={slug} className="text-black">
                          <Link
                            href={`/almanac/${slug}`}
                            className="hover:underline text-black"
                          >
                            {ingredient.inci}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Desktop Inline */}
                  <p className="hidden md:block text-sm leading-relaxed text-black">
                    {(product.ingredients as string[]).map((slug, index) => {
                      const ingredient = ingredientMap.get(slug);
                      if (!ingredient) return null;

                      return (
                        <span key={slug}>
                          <Link
                            href={`/almanac/${slug}`}
                            className="hover:underline text-black"
                          >
                            {ingredient.inci}
                          </Link>
                          {index <
                            (product.ingredients as string[]).length - 1 && ", "}
                        </span>
                      );
                    })}
                  </p>
                </>
              ) : (
                (product.ingredients as {
                  section: string;
                  items: string[];
                }[]).map((group) => (
                  <div key={group.section} className="mb-6 text-black">
                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 text-black">
                      {group.section}
                    </h3>

                    <p className="text-sm leading-relaxed text-black">
                      {group.items.map((slug, index) => {
                        const ingredient = ingredientMap.get(slug);
                        if (!ingredient) return null;

                        return (
                          <span key={slug}>
                            <Link
                              href={`/almanac/${slug}`}
                              className="hover:underline text-black"
                            >
                              {ingredient.inci}
                            </Link>
                            {index < group.items.length - 1 && ", "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* HOW TO USE */}
            {product.howToUse && (
              <div className="text-black">
                <h2 className="text-lg font-medium mb-3 text-black">
                  How to Use
                </h2>
                <p className="text-sm leading-relaxed text-black">
                  {product.howToUse}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-20" />
    </>
  );
}