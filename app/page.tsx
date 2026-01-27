export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 animate-fade-in-up">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
        {/* Brand Name */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 animate-fade-in-up">
          Xiliphi
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:120ms]">
          Thoughtfully crafted skincare made with natural, organic, and vegan ingredients.
        </p>

        {/* CTA */}
        <div className="flex justify-center animate-fade-in-up [animation-delay:240ms]">
          <button className="px-10 py-4 rounded-full bg-black text-white text-sm tracking-wide uppercase hover:bg-neutral-800 transition">
            Coming Soon :)
          </button>
        </div>

        {/* Subtle divider */}
        <div className="mt-20 flex justify-center animate-fade-in-up [animation-delay:360ms]">
          <div className="h-px w-24 bg-neutral-300" />
        </div>

        {/* Brand values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-neutral-600 animate-fade-in-up [animation-delay:480ms]">
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
