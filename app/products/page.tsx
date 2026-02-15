"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-black max-w-6xl mx-auto px-6 py-24 animate-fade-in-up">
      
      {/* Page Title */}
      <h1 className="text-4xl font-medium text-center mb-24">
        Products
      </h1>

      {/* BODY BUTTERS */}
      <section className="mb-32">
        <h2 className="text-2xl font-medium mb-12">
          Body Butters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "Original Body Butter", slug: "original-body-butter", image: "/original/main.jpg" },
            { name: "Peach Body Butter", slug: "peach-body-butter", image: "/peach/main.png" },
            { name: "Mango Body Butter", slug: "mango-body-butter", image: "/mango/main.jpg" },
            { name: "Citrus Body Butter", slug: "citrus-body-butter", image: "/citrus/main.jpg" },
          ].map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block text-center"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="text-sm font-medium group-hover:underline">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SKIN CARE SETS */}
      <section className="mb-32">
        <h2 className="text-2xl font-medium mb-12">
          Skin Care Sets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <Link
            href="/products/turmeric-skincare-set"
            className="group block text-center"
          >
            <div className="relative aspect-square mb-4">
              <Image
                src="/turmeric/main.jpg"
                alt="Turmeric Skincare Set"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-sm font-medium group-hover:underline">
              Turmeric Skincare Set
            </p>
          </Link>
        </div>
      </section>

      {/* LIP CARE */}
      <section>
        <h2 className="text-2xl font-medium mb-12">
          Lip Care
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <Link
            href="/products/strawberry-lip-care"
            className="group block text-center"
          >
            <div className="relative aspect-square mb-4">
              <Image
                src="/strawberry/main.jpg"
                alt="Strawberry Lip mask/scrub 2-in-1"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-sm font-medium group-hover:underline">
              Strawberry Lip Mask/Scrub 2-in-1
            </p>
          </Link>
        </div>
      </section>

    </main>
  );
}