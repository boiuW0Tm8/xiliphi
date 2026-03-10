"use client";

import { useEffect } from "react";
import AlmanacSearch from "./AlmanacSearch";
import { ingredients } from "@/lib/ingredients";
import AlmanacBookAnimation from "@/components/Almanacbookanimation";

export default function AlmanacClient() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("almanacScroll");

    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
      sessionStorage.removeItem("almanacScroll");
    }
  }, []);

  return (
    <main className="bg-white min-h-screen px-6 py-24 text-neutral-700 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
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