"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [turmericOpen, setTurmericOpen] = useState(false);
  const [buttersOpen, setButtersOpen] = useState(false);

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 bg-white text-black">
      <h1 className="text-4xl font-medium mb-12">Products</h1>

      {/* Turmeric Skincare Set */}
      <div className="border-b border-neutral-200 pb-6 mb-6">
        <button
          onClick={() => setTurmericOpen(!turmericOpen)}
          className="flex items-center gap-3 text-xl font-medium hover:opacity-70 transition"
        >
          <span
            className={`inline-block transform transition-transform duration-300 ${
              turmericOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            ▶
          </span>
          Turmeric Skincare Set
        </button>

        <div
          className={`mt-4 ml-8 space-y-3 overflow-hidden transition-all duration-300 ${
            turmericOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link href="/products/turmeric-cleanser" className="block hover:underline">
            Turmeric Gel Cleanser
          </Link>
          <Link href="/products/turmeric-toner" className="block hover:underline">
            Turmeric Toner
          </Link>
          <Link href="/products/turmeric-serum" className="block hover:underline">
            Turmeric Serum
          </Link>
          <Link href="/products/turmeric-cream" className="block hover:underline">
            Turmeric Cream
          </Link>
        </div>
      </div>

      {/* Body Butters */}
      <div className="border-b border-neutral-200 pb-6 mb-6">
        <button
          onClick={() => setButtersOpen(!buttersOpen)}
          className="flex items-center gap-3 text-xl font-medium hover:opacity-70 transition"
        >
          <span
            className={`inline-block transform transition-transform duration-300 ${
              buttersOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            ▶
          </span>
          Body Butters
        </button>

        <div
          className={`mt-4 ml-8 space-y-3 overflow-hidden transition-all duration-300 ${
            buttersOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link href="/products/original-body-butter" className="block hover:underline">
            Original Body Butter
          </Link>
          <Link href="/products/peach-body-butter" className="block hover:underline">
            Peach Body Butter
          </Link>
          <Link href="/products/mango-body-butter" className="block hover:underline">
            Mango Body Butter
          </Link>
          <Link href="/products/citrus-body-butter" className="block hover:underline">
            Citrus Body Butter
          </Link>
        </div>
      </div>
    </main>
  );
}
