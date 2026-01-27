import Link from "next/link";
import { ingredients } from "@/lib/ingredients";

type Ingredient = (typeof ingredients)[number];

// Group ingredients by first letter
const groupedIngredients = ingredients.reduce(
  (acc, ingredient) => {
    const letter = ingredient.inci[0].toUpperCase();
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
    <main className="bg-white-50 min-h-screen px-6 py-20 text-neutral-700 sm:text-neutral-700 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-medium mb-6 text-neutral-900">
            The Almanac
          </h1>

          <p className="text-lg font-medium leading-normal max-w-2xl">
            Welcome to the Almanac. Here, you can find information on every
            ingredient used in Xiliphi products — what it is, why we use it,
            and how it supports the skin.
          </p>
        </header>

        {/* Ingredient list */}
        <section className="animate-fade-in-up [animation-delay:120ms]">
          <h2 className="text-lg font-medium mb-8">
            Ingredients
          </h2>

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
                        className="
                          block w-full h-full
                          p-5
                          border border-neutral-200 rounded-lg
                          hover:border-black transition-colors
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
      </div>
    </main>
  );
}
