import Link from "next/link";
import { ingredients } from "@/lib/ingredients";

type Ingredient = (typeof ingredients)[number];

// Group ingredients by first letter
const groupedIngredients = ingredients.reduce(
  (acc, ingredient) => {
    const letter = ingredient.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(ingredient);
    return acc;
  },
  {} as Record<string, Ingredient[]>
);

// Sort letters alphabetically
const letters = Object.keys(groupedIngredients).sort();

export default function AlmanacPage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-16">
      {/* Header – tighter + left-aligned */}
      <header className="mb-12">
        <h1 className="text-4xl mb-3">The Almanac</h1>
        <p className="text-neutral-700 max-w-3xl">
          Welcome to the Almanac. Here, you can find information on every single
          ingredient used in every Xiliphi product — what it is, why we use it,
          and how it supports the skin.
        </p>
      </header>

      {/* Ingredient list */}
      <section>
        <h2 className="text-lg mb-8">Ingredients</h2>

        <div className="space-y-12">
          {letters.map((letter) => (
            <div key={letter}>
              {/* Alphabet letter */}
              <h3 className="text-2xl font-medium mb-4">
                {letter}
              </h3>

              <ul className="
                grid gap-4
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                items-stretch
              ">
                {groupedIngredients[letter].map((ingredient) => (
                  <li key={ingredient.slug}>
                    <Link
                      href={`/almanac/${ingredient.slug}`}
                      className="
                        block w-full h-full
                        p-5
                        border border-neutral-200 rounded-lg
                        hover:border-black transition-colors
                      "
                    >
                      {ingredient.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
