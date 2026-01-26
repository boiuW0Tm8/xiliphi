import Link from "next/link";

const ingredients = [
  {
    name: "Shea Butter",
    slug: "shea-butter",
  },
  {
    name: "Turmeric Root Extract",
    slug: "turmeric-root-extract",
  },
  {
    name: "Coconut Oil",
    slug: "coconut-oil",
  },
];

export default function AlmanacPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <header className="mb-16">
        <h1 className="text-4xl mb-4">The Almanac</h1>
        <p className="text-neutral-700 max-w-2xl">
          Welcome to the Almanac. Here, you can find information on every single
          ingredient used in every Xiliphi product — what it is, why we use it,
          and how it supports the skin.
        </p>
      </header>

      <section>
        <h2 className="text-xl mb-6">Ingredients</h2>

        <ul className="grid gap-4 sm:grid-cols-2">
          {ingredients.map((ingredient) => (
            <li key={ingredient.slug}>
              <Link
                href={`/almanac/ingredients/${ingredient.slug}`}
                className="block p-4 border border-neutral-200 rounded-lg
                  hover:border-black transition-colors"
              >
                {ingredient.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
