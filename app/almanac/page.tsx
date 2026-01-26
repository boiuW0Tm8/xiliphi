import Link from "next/link";
import { ingredients } from "@/lib/ingredients";

// Group ingredients by first letter
const groupedIngredients = ingredients.reduce((acc, ingredient) => {
  const letter = ingredient.name[0].toUpperCase();

  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(ingredient);

  return acc;
}, {} as Record<string, typeof ingredients>);

// Sort letters alphabetically
const letters = Object.keys(groupedIngredients).sort();

export default function AlmanacPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl mb-4">The Almanac</h1>
        <p className="text-neutral-700 max-w-2xl">
          Welcome to the Almanac. Here, you can find information on every single
          ingredient used in every Xiliphi product — what it is, why we use it,
          and how it supports the skin.
        </p>
      </header>

      {/* Ingredient list */}
      <section>
        <h2 className="text-xl mb-10">Ingredients</h2>

        <div className="space-y-14">
          {letters.map((letter) => (
            <div key={letter}>
              {/* Big alphabet letter */}
              <h3 className="text-3xl font-medium mb-6">
                {letter}
              </h3>

              <ul className="grid gap-4 sm:grid-cols-2">
                {groupedIngredients[letter].map((ingredient) => (
                  <li key={ingredient.slug}>
                    <Link
                      href={`/almanac/${ingredient.slug}`}
                      className="block p-4 border border-neutral-200 rounded-lg
                        hover:border-black transition-colors"
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
