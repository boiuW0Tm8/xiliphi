"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const bodyButters = products.filter(
    (product) => product.category === "body-butter"
  );

  const skinCare = products.filter(
    (product) => product.category === "skin-care"
  );

  const lipCare = products.filter(
    (product) => product.category === "lip-care"
  );

  const bundles = products.filter(
    (product) => product.category === "bundle"
  );

  return (
    <main className="min-h-screen bg-white text-black max-w-6xl mx-auto px-6 py-24 animate-fade-in-up">

      {/* Page Title */}
      <h1 className="text-4xl font-medium text-center mb-24">
        Products
      </h1>

      {/* BODY BUTTERS */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-medium">
            Body Butter
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-md">
            Deep, lasting moisture crafted for dry and textured skin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {bodyButters.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block text-center"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-2 space-y-1">
                <p className="text-sm font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-xs text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SKIN CARE */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-medium">
            Skin Care
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-md">
            Targeted treatments powered by botanical ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skinCare.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block text-center"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-2 space-y-1">
                <p className="text-sm font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-xs text-neutral-400 line-through">
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
      <section>
        <div className="mb-12">
          <h2 className="text-2xl font-medium">
            Lip Care
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-md">
            Gentle exfoliation and nourishment for plump, healthy lips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {lipCare.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block text-center"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-2 space-y-1">
                <p className="text-sm font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-xs text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-32 mb-32">
        <h2 className="text-2xl font-medium mb-12">
          Bundles
          <p className="text-sm text-neutral-500 mt-2">
            Curated sets designed to save on and simplify your ritual. May come with additional goodies!
          </p>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {bundles.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block text-center"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-2 space-y-1">
                <p className="text-sm font-medium group-hover:underline">
                  {product.name}
                </p>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm font-semibold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  {product.originalPrice && (
                    <span className="text-xs text-neutral-400 line-through">
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