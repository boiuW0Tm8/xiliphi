"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Image from "next/image";

const HOME_SCROLL_KEY = "home-scroll-y";

export default function HomeClient() {
  const router = useRouter();
  const restoredRef = useRef(false);

  // Restore scroll position when returning from a product page
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;

    try {
      const saved = sessionStorage.getItem(HOME_SCROLL_KEY);
      if (!saved) return;
      const scrollY = parseInt(saved, 10);
      sessionStorage.removeItem(HOME_SCROLL_KEY);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      });
    } catch {
      // ignore
    }
  }, []);

  function navigateTo(href: string) {
    try {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    } catch {
      // ignore
    }
    router.push(href);
  }

  return (
    <>
      <AnnouncementBar />

      <main className="bg-white text-neutral-900 animate-fade-in-up">

        {/* ================= HERO ================= */}
        <section className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
            Thoughtfully Crafted Skincare
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Minimal formulations. Intentional ingredients.
            Natural, organic, and vegan skincare designed for clarity and balance.
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigateTo("/products")}
              className="px-12 py-4 rounded-full bg-neutral-200 text-neutral-800 text-sm tracking-wide uppercase hover:bg-neutral-300 transition cursor-pointer"
            >
              Shop Collection
            </button>

            <button
              onClick={() => navigateTo("/almanac")}
              className="px-10 py-4 rounded-full bg-white border border-neutral-300 text-sm tracking-wide uppercase hover:bg-neutral-200 transition cursor-pointer"
            >
              Explore Ingredients
            </button>
          </div>
        </section>


        {/* ================= FEATURED PRODUCTS ================= */}
        <section className="max-w-6xl mx-auto px-6 pb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Our Curated Selection
            </h2>
            <p className="text-neutral-500 text-sm uppercase tracking-wider">
              Minimal. Intentional. Essential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* Product 1 */}
            <button onClick={() => navigateTo("/products/turmeric-skincare-set?from=/")} className="group text-left cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 mb-6">
             <Image
                  src="/turmeric/main.jpg"
                  alt="Turmeric Ritual Set"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:opacity-70 transition">
                Turmeric Set
              </h3>
              <p className="text-neutral-500 text-base mb-2 text-center">
                Complete ritual
              </p>
            </button>

            {/* Product 2 */}
            <button onClick={() => navigateTo("/products/mango-body-butter?from=/")} className="group text-left cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 mb-6">
             <Image
                  src="/mango/main.jpg"
                  alt="Body Butter Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:opacity-70 transition">
                Body Butter Collection
              </h3>
              <p className="text-neutral-500 text-base mb-2 text-center">
                Deep nourishment for dry skin
              </p>
            </button>

            {/* Product 3 */}
            <button onClick={() => navigateTo("/products/strawberry-lip-care?from=/")} className="group text-left cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 mb-6">
               <Image
                  src="/strawberry/main.jpg"
                  alt="Lip Care Duo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:opacity-70 transition">
                Lip Care Duo
              </h3>
              <p className="text-neutral-500 text-base mb-2 text-center">
                Smooth + protect
              </p>
            </button>

          </div>
        </section>

        {/* ================= BRAND VALUES ================= */}
        <section className="max-w-6xl mx-auto px-6 pb-28 border-t border-neutral-100 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

            {/* Natural Ingredients */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-8">
                <Image
                  src="/home/vegan.png"
                  alt="Natural ingredients"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Organic & Vegan Ingredients
              </h3>
              <p className="text-neutral-500 text-base max-w-xs">
                Each XILIPHI product includes carefully selected botanical ingredients designed to support healthy, balanced skin.
              </p>
            </div>

            {/* Cruelty Free */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-8">
                <Image
                  src="/home/bunny.png"
                  alt="Cruelty free"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Cruelty-Free
              </h3>
              <p className="text-neutral-500 text-base max-w-xs">
                XILIPHI never tests on animals. We believe ethical skincare should never come at the expense of precious life.
              </p>
            </div>

            {/* Vegan */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-8">
                <Image
                  src="/home/100.png"
                  alt="Vegan skincare"
                  fill
                  className="object-contain scale-200"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">
                100% Customer Satisfaction
              </h3>
              <p className="text-neutral-500 text-base max-w-xs">
                Here at XILIPHI, your satisfaction matters. If you're not happy, we'll make it right - guaranteed.
              </p>
            </div>

          </div>
        </section>

        {/* ================= INGREDIENT PHILOSOPHY ================= */}
        <section className="bg-white py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-medium mb-8">
              Know What You Put On Your Skin
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              Transparency is at the core of Xiliphi.
              Every ingredient we use is documented in our Almanac —
              with clear explanations, purpose, and origin.
            </p>

            <button
              onClick={() => navigateTo("/almanac")}
              className="px-12 py-4 rounded-full bg-neutral-200 text-neutral-800 text-sm tracking-wide uppercase hover:bg-neutral-300 transition cursor-pointer"
            >
              Visit The Almanac
            </button>
          </div>
        </section>

        {/* CANADIAN SECTION */}
        <section className="max-w-7xl mx-auto mt-30 mb-20 flex flex-col items-center text-center space-y-6">
          <div className="relative w-40 h-28">
            <Image
              src="/home/canadian-flag.png"
              alt="Canadian Flag"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-2xl md:text-3xl font-medium text-neutral-800 tracking-tight">
            Proudly Canadian Owned & Operated
          </p>
          <p className="text-lg text-neutral-500 max-w-2xl">
            Xiliphi is based in Canada, built with Canadian values — clean ingredients, honest formulations, and a commitment to doing things right.
          </p>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h2 className="text-4xl font-medium mb-6">
            Begin Your Ritual
          </h2>

          <p className="text-neutral-600 mb-10">
            Minimal skincare designed with intention and balance.
          </p>

          <button
            onClick={() => navigateTo("/products")}
            className="px-12 py-4 rounded-full bg-neutral-200 text-neutral-800 text-sm tracking-wide uppercase hover:bg-neutral-300 transition cursor-pointer"
          >
            Shop Now
          </button>
        </section>

      </main>
    </>
  );
}