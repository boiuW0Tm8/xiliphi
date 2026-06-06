"use client";

import { useEffect } from "react";
import AlmanacSearch from "./AlmanacSearch";
import { ingredients } from "@/lib/ingredients";
import AlmanacBookAnimation from "@/components/Almanacbookanimation";
import Image from "next/image";

export default function AlmanacClient() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("almanacScroll");

    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
      sessionStorage.removeItem("almanacScroll");
    }
  }, []);

  return (
    <main className="relative min-h-screen px-6 md:px-12 lg:px-20 py-16 text-neutral-700 animate-fade-in-up bg-gradient-to-b from-[#d0f7e9] to-[#fee4ca]">

      {/* DECORATIVE INGREDIENT COLLAGE — desktop only, static pixel positions */}
      <div aria-hidden="true" className="hidden lg:block pointer-events-none absolute top-0 left-0 right-0 z-0 overflow-hidden" style={{ height: '7679px' }}>
        {/* LEFT GUTTER */}
        <img src="/almanac/decor/centella.png" alt="" style={{ position: 'absolute', top: '50px', left: '1%', width: '420px', transform: 'rotate(-8deg)' }} />
        <img src="/almanac/decor/honey.png" alt="" style={{ position: 'absolute', top: '1050px', left: '-8%', width: '500px', transform: 'rotate(12deg)' }} />
        <img src="/almanac/decor/glycerin.png" alt="" style={{ position: 'absolute', top: '2050px', left: '0%', width: '430px', transform: 'rotate(65deg)' }} />
        <img src="/almanac/decor/turmeric.png" alt="" style={{ position: 'absolute', top: '3050px', left: '-13%', width: '700px', transform: 'rotate(-10deg)' }} />
        <img src="/almanac/decor/vitamine.png" alt="" style={{ position: 'absolute', top: '4050px', left: '-2%', width: '430px', transform: 'rotate(160deg)' }} />

        {/* RIGHT GUTTER */}
        <img src="/almanac/decor/inulin.png" alt="" style={{ position: 'absolute', top: '350px', right: '-10%', width: '650px', transform: 'rotate(55deg)' }} />
        <img src="/almanac/decor/shea.png" alt="" style={{ position: 'absolute', top: '1350px', right: '10%', width: '430px', transform: 'rotate(60deg)' }} />
        <img src="/almanac/decor/camellia.png" alt="" style={{ position: 'absolute', top: '2350px', right: '0%', width: '500px', transform: 'rotate(75deg)' }} />
        <img src="/almanac/decor/jojoba.png" alt="" style={{ position: 'absolute', top: '3350px', right: '3%', width: '400px', transform: 'rotate(45deg)' }} />
        <img src="/almanac/decor/aloe.png" alt="" style={{ position: 'absolute', top: '4700px', right: '-15%', width: '850px', transform: 'rotate(-7deg)' }} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-2xl px-8 md:px-12 py-12 md:py-16 my-8 shadow-sm">
        <AlmanacBookAnimation />
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-medium mb-6 text-neutral-900">
            The Almanac
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl">
            The Almanac is a reference guide to every ingredient used in
            Xiliphi products. Here you can explore what each ingredient is,
            where it comes from, and why it is included in our formulations.
          </p>
        </header>

        <div className="border-t border-neutral-200 mb-12" />

        <AlmanacSearch ingredients={ingredients} />

      </div>
    </main>
  );
}