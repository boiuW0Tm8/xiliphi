"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const [open, setOpen] = useState(true);

  // Explicit ordering for the Turmeric set
  const turmericOrder = [
    "turmeric-cleanser",
    "turmeric-toner",
    "turmeric-serum",
    "turmeric-cream",
  ];

  const turmericProducts = turmericOrder
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  const otherProducts = products.filter(
    (p) => !turmericOrder.includes(p.slug)
  );

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-24 text-neutral-900">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10">Products</h1>

        {/* Turmeric Skincare Set */}
        <div className="mb-12">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between w-full text-left"
          >
            <h2 className="text-lg font-medium">
              Turmeric Skincare Set
            </h2>
            <span className="text-neutral-500">
              {open ? "−" : "+"}
            </span>
          </button>

          {open && (
            <ul className="mt-4 space-y-3 pl-2">
              {turmericProducts.map((product) => (
                <li key={product!.slug}>
                  <Link
                    href={`/products/${product!.slug}`}
                    className="text-neutral-800 hover:underline"
                  >
                    {product!.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Other products (e.g. body butters) */}
        {otherProducts.length > 0 && (
          <div>
            <h2 className="text-lg font-medium mb-4">
              Other Products
            </h2>
            <ul className="space-y-3 pl-2">
              {otherProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-neutral-800 hover:underline"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
