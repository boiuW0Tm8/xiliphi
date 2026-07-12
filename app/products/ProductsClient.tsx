"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { products } from "@/lib/products";

export default function ProductsPage() {

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("productsScroll");
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
      sessionStorage.removeItem("productsScroll");
    }
  }, []);

  const saveScroll = () => {
    sessionStorage.setItem("productsScroll", window.scrollY.toString());
  };

  const bodyButters = products.filter(
    (product) => product.category === "body-butter"
  );

  const skinCare = products.filter(
    (product) => product.category === "skin-care"
  );

  // Slugs temporarily hidden from the storefront — remove from this array to bring back
  const HIDDEN_LIP_CARE_SLUGS = ["strawberry-lip-care"];

  const lipCare = products.filter(
    (product) => product.category === "lip-care" && !HIDDEN_LIP_CARE_SLUGS.includes(product.slug)
  );

  // Slugs temporarily hidden from the storefront — remove from this array to bring back
  const HIDDEN_BUNDLE_SLUGS = ["el-classico-bundle", "tootie-frootie-bundle", "ultimate-set"];

  const bundles = products.filter(
    (product) => product.category === "bundle" && !HIDDEN_BUNDLE_SLUGS.includes(product.slug)
  );

  return (
    <main className="min-h-screen text-black max-w-[1400px] mx-auto px-8 py-24 animate-fade-in-up">

      {/* Page Title */}
      <h1 className="text-5xl font-medium text-center mb-32">
        Products
      </h1>

      {/* BODY BUTTERS */}
      <section className="mb-40">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium">
            Body Care
          </h2>
          <p className="text-base text-neutral-500 mt-3 max-w-lg mx-auto">
            Deep, lasting moisture crafted for dry and textured skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {bodyButters.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              onClick={saveScroll}
              className="group block text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square mb-8 max-w-[420px] mx-auto">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xl font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-xl font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-base text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.slug !== "body-butter-sample" && (
                  <p className="text-sm font-medium text-amber-700">
                    Buy one, get one 50% off
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SKIN CARE */}
      <section className="mb-40">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium">
            Skin Care
          </h2>
          <p className="text-base text-neutral-500 mt-3 max-w-lg mx-auto">
            Targeted treatments powered by botanical ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {skinCare.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              onClick={saveScroll}
              className="group block text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square mb-8 max-w-[420px] mx-auto">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xl font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-xl font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-base text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LIP CARE */}
      <section className="mb-40">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium">
            Lip Care
          </h2>
          <p className="text-base text-neutral-500 mt-3 max-w-lg mx-auto">
            Gentle exfoliation and nourishment for plump, healthy lips.
          </p>
        </div>

        {lipCare.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {lipCare.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                onClick={saveScroll}
                className="group block text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square mb-8 max-w-[420px] mx-auto">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    priority={i < 2}
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-medium group-hover:underline">
                    {product.name}
                  </p>

                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-xl font-semibold text-black">
                      ${product.price.toFixed(2)}
                    </span>

                    {product.originalPrice && (
                      <span className="text-base text-neutral-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-neutral-500 py-12">
            Coming Soon
          </p>
        )}
      </section>

      {/* BUNDLES */}
      <section className="mb-40">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-center">
            Bundles
          </h2>
          <p className="text-base text-neutral-500 mt-3 max-w-lg mx-auto">
            Curated sets designed to save on and simplify your ritual. May come with additional goodies!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {bundles.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              onClick={saveScroll}
              className="group block text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square mb-8 max-w-[420px] mx-auto">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xl font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-xl font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-base text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}