"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import type { ingredients } from "@/lib/ingredients";

type Ingredient = (typeof ingredients)[number];

export default function AlmanacSearch({
  ingredients,
}: {
  ingredients: Ingredient[];
}) {
  const [query, setQuery] = useState("");

  // Configure Fuse
  const fuse = useMemo(() => {
    return new Fuse(ingredients, {
      keys: [
        { name: "common", weight: 0.6 },   // bump common name weight
        { name: "inci", weight: 0.3 },
        { name: "description.whatItIs", weight: 0.05 },
        { name: "description.function", weight: 0.05 },
      ],
      threshold: 0.2,          // stricter matching
      ignoreLocation: true,
      minMatchCharLength: 1,   // allow single character searches
      distance: 100,
    });
  }, [ingredients]);

  // Filter results
  const filteredIngredients = useMemo(() => {
    if (!query) return ingredients;
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse, ingredients]);

  // Group ingredients alphabetically
  const groupedIngredients = useMemo(() => {
    return filteredIngredients.reduce((acc, ingredient) => {
      const letter = ingredient.inci[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(ingredient);
      return acc;
    }, {} as Record<string, Ingredient[]>);
  }, [filteredIngredients]);

  const letters = useMemo(() => {
    return Object.keys(groupedIngredients).sort();
  }, [groupedIngredients]);

  return (
    <section className="animate-fade-in-up [animation-delay:120ms]">

      {/* Search Input */}
      <div className="mb-12">
        <input
          type="text"
          placeholder="Ingredient search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            border border-neutral-300
            rounded-lg
            px-5 py-4
            text-lg
            focus:outline-none
            focus:border-black
            transition-colors
          "
        />
      </div>

      {/* No Results */}
      {query && letters.length === 0 && (
        <p className="text-neutral-500 text-lg">
          No ingredients found.
        </p>
      )}

      {/* Ingredient List */}
      <div className="space-y-12">
        {letters.map((letter) => (
          <div key={letter}>
            <h3 className="text-2xl font-medium mb-4">
              {letter}
            </h3>

            <ul
              className="
                grid gap-6
                [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]
              "
            >
              {groupedIngredients[letter].map((ingredient) => (
                <li key={ingredient.slug}>
                  <Link
                    href={`/almanac/${ingredient.slug}`}
                    onClick={() =>
                      sessionStorage.setItem("almanacScroll", window.scrollY.toString())
                    }
                    className="
                      block w-full h-full
                      p-5
                      border border-neutral-200
                      rounded-lg
                      hover:border-black
                      transition-colors
                    "
                  >
                    {ingredient.inci}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}