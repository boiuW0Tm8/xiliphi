"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import ReelsSection from "@/components/ReelsSection";
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

      <main className="bg-[#FBF6EF] text-neutral-900 animate-fade-in-up">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Hero copy */}
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-amber-700 mb-6 font-medium">
                Made by hand · Rooted in care
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.05] text-neutral-900">
                Skincare born from <span className="italic text-amber-700">a mother's</span> hands.
              </h1>

              <p className="text-lg text-neutral-600 max-w-md mx-auto md:mx-0 leading-relaxed mb-10">
                When our founder moved to Canada, the overly-engineered skincare products caused awful reactions. So she made her own. Today, those same formulations are Xiliphi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <button
                  onClick={() => navigateTo("/products")}
                  className="px-10 py-4 rounded-full bg-amber-700 hover:bg-amber-800 text-white text-sm tracking-wide uppercase transition cursor-pointer shadow-sm hover:shadow-md w-full sm:w-auto"
                >
                  Shop the Collection
                </button>

                <button
                  onClick={() => navigateTo("/about")}
                  className="text-sm tracking-wide uppercase text-neutral-700 hover:text-amber-700 underline-offset-4 hover:underline transition cursor-pointer"
                >
                  Read our story →
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div className="order-1 md:order-2 hidden md:flex justify-center items-center w-full">
              <div className="relative w-full max-w-lg md:max-w-xl mx-auto group pb-16">

                <button
                  onClick={() => navigateTo("/products?from=/")}
                  className="block w-full cursor-pointer bg-transparent border-0 p-0"
                  aria-label="Shop Mango Body Butter"
                >
                  {/* Increased height constraints to let the image expand naturally */}
                  <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full rounded-3xl overflow-hidden">
                    <Image
                      src="/home/bogo.png"
                      alt="BOGO Deal"
                      fill
                      className="object-cover rounded-3xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </button>

                {/* Floating accent badge positioned bottom-left */}
                <div className="absolute -bottom-12 left-2 md:-bottom-2 md:left-44 bg-white rounded-full px-5 py-3 shadow-lg border border-amber-100 pointer-events-none z-10">
                  <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">Limited Time!</p>
                  <p className="text-sm font-medium text-neutral-800">BOGO 50% off Body Butters</p>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ================= REELS PLACEHOLDER ================= */}
        <ReelsSection />


        {/* ================= FEATURED PRODUCTS ================= */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
            <div>
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-amber-700 mb-3 font-medium">
                The Collection
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                Small batch. Made to last.
              </h2>
            </div>
            <button
              onClick={() => navigateTo("/products")}
              className="text-sm tracking-wide uppercase text-neutral-700 hover:text-amber-700 underline-offset-4 hover:underline transition cursor-pointer self-start md:self-auto"
            >
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Product 1 */}
            <button onClick={() => navigateTo("/products/turmeric-skincare-set?from=/")} className="group text-left cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-amber-50 mb-5">
                <Image
                  src="/turmeric/turmericai.png"
                  alt="Turmeric Ritual Set"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-medium mb-1 text-neutral-900 group-hover:text-amber-700 transition">
                Turmeric Ritual Set
              </h3>
              <p className="text-neutral-500 text-sm">
                The complete morning ritual
              </p>
            </button>

            {/* Product 2 */}
            <button onClick={() => navigateTo("/products/mango-body-butter?from=/")} className="group text-left cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-orange-50 mb-5">
                <Image
                  src="/mango/mangomain.png"
                  alt="Mango Body Butter"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-medium mb-1 text-neutral-900 group-hover:text-amber-700 transition">
                Mango Body Butter
              </h3>
              <p className="text-neutral-500 text-sm">
                Deep nourishment for dry skin
              </p>
            </button>

            {/* Product 3 */}
            <button onClick={() => navigateTo("/products/strawberry-lip-care?from=/")} className="group text-left cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-rose-50 mb-5">
                <Image
                  src="/strawberry/lipmain1.png"
                  alt="Strawberry Lip Care Duo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-medium mb-1 text-neutral-900 group-hover:text-amber-700 transition">
                Lip Care Duo
              </h3>
              <p className="text-neutral-500 text-sm">
                Smooth, protect, repeat
              </p>
            </button>

          </div>
        </section>


        {/* ================= ORIGIN STORY ================= */}
        <section className="bg-amber-50/40 py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-amber-100">
              {/* Replace this with a photo of your mom, ingredients, or product-in-use */}
              <Image
                src="/about/origin.png"
                alt="The Xiliphi origin story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-amber-700 mb-4 font-medium">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight text-neutral-900">
                It started with one woman trying to soothe her own skin.
              </h2>
              <div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed mb-8">
                <p>
                  After moving to Canada, Ying's skin reacted badly to the cold, dry winters. Nothing on the shelf seemed to agree with her sensitive skin. So she started formulating her own balms and butters at the kitchen counter.
                </p>
                <p>
                  Years later, those recipes became Xiliphi - small batch, naturally formulated, and made with the same care she put into the very first jar.
                </p>
              </div>
              <button
                onClick={() => navigateTo("/about")}
                className="text-sm tracking-wide uppercase text-amber-700 hover:text-amber-800 underline-offset-4 underline transition cursor-pointer"
              >
                Read the full story →
              </button>
            </div>

          </div>
        </section>


        {/* ================= BRAND VALUES ================= */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-amber-700 mb-3 font-medium">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Honest from start to finish.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src="/home/vegan.png"
                  alt="Natural ingredients"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium mb-3 text-neutral-900">
                Organic & Vegan
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                Botanical ingredients selected for their actual benefit, not just the label.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src="/home/bunny.png"
                  alt="Cruelty free"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium mb-3 text-neutral-900">
                Cruelty-Free
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                No animal testing. No exceptions. Ethical skincare should be the floor, not the ceiling.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src="/home/100.png"
                  alt="Satisfaction guarantee"
                  fill
                  className="object-contain scale-[2]"
                />
              </div>
              <h3 className="text-lg font-medium mb-3 text-neutral-900">
                Loved or it's on us
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                If you're not happy with your order, we'll make it right. No hoops.
              </p>
            </div>

          </div>
        </section>


        {/* ================= INGREDIENT PHILOSOPHY ================= */}
        <section className="bg-[#4A5D4F] text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text left */}
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="inline-block text-5xl tracking-[0.2em] uppercase text-amber-400 mb-4 font-black">
                The Almanac
              </span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                Know what you put on your skin.
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
                Every ingredient we use is documented in our Almanac, with clear explanations of what it does, where it comes from, and why we chose it.
              </p>
              <button
                onClick={() => navigateTo("/almanac")}
                className="px-10 py-4 rounded-full bg-white text-neutral-900 text-sm tracking-wide uppercase hover:bg-amber-50 transition cursor-pointer shadow-sm hover:shadow-md"
              >
                Visit The Almanac
              </button>
            </div>

            {/* Image right */}
            <div className="order-1 md:order-2 md:flex md:justify-end">
              <button
                onClick={() => navigateTo("/almanac")}
                aria-label="Visit The Almanac"
                className="relative block w-4/5 max-w-md aspect-[3/4] mx-auto cursor-pointer bg-transparent border-0 p-0 group"              >
                <Image
                  src="/almanac/almanac1.png"
                  alt="The Xiliphi Almanac"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </button>
            </div>

          </div>
        </section>

        {/* ================= CANADIAN ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Flag left */}
            <div className="order-1 relative w-full aspect-[3/2] max-w-md mx-auto md:mx-0">
              <Image
                src="/home/canadian-flag.png"
                alt="Canadian Flag"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text right */}
            <div className="order-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight mb-4">
                Proudly Canadian Owned & Operated.
              </h2>
              <p className="text-base text-neutral-600 max-w-xl mx-auto md:mx-0">
                Xiliphi is based in Canada, built with Canadian values: clean ingredients, honest formulations, and a commitment to doing things right.
              </p>
            </div>

          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="bg-amber-50/40 py-24 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5 leading-tight text-neutral-900">
              Begin your ritual.
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              Skincare made with intention. Shipped fresh from Canada.
            </p>
            <button
              onClick={() => navigateTo("/products")}
              className="px-10 py-4 rounded-full bg-amber-700 hover:bg-amber-800 text-white text-sm tracking-wide uppercase transition cursor-pointer shadow-sm hover:shadow-md"
            >
              Shop Now
            </button>
          </div>
        </section>

      </main>
    </>
  );
}