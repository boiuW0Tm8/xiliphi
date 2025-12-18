export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 text-neutral-900">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
        {/* Brand Name */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Xiliphi
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Thoughtfully crafted skincare made with natural, organic, and vegan ingredients.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="px-10 py-4 rounded-full bg-black text-white text-sm tracking-wide uppercase hover:bg-neutral-800 transition">
            Coming Soon
          </button>
        </div>

        {/* Subtle divider */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-24 bg-neutral-300" />
        </div>

        {/* Brand values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-neutral-600">
          <div>
            <p className="font-medium text-neutral-900 mb-2">Clean Ingredients</p>
            <p>No unnecessary fillers. Just what your skin needs.</p>
          </div>
          <div>
            <p className="font-medium text-neutral-900 mb-2">Vegan & Cruelty-Free</p>
            <p>Formulated with compassion for skin and planet.</p>
          </div>
          <div>
            <p className="font-medium text-neutral-900 mb-2">Minimal & Effective</p>
            <p>Simple routines designed for real results.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
