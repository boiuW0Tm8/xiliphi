import { ingredients } from "@/lib/ingredients";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

/**
 * Required for static generation
 */
export function generateStaticParams() {
  return ingredients.map((ingredient) => ({
    slug: ingredient.slug,
  }));
}

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const ingredient = ingredients.find(
    (i) => i.slug === slug
  );

  if (!ingredient) notFound();

  // Find all products that include this ingredient
  const usedInProducts = products.filter((product) =>
    product.ingredients.includes(slug)
  );

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* INCI name */}
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
        {ingredient.inci}
      </h1>

      {/* Common name (optional) */}
      {ingredient.common && (
        <p className="text-xl text-neutral-500 mb-8">
          ({ingredient.common})
        </p>
      )}

      {/* Divider */}
      <div className="h-px w-24 bg-neutral-300 mb-10" />

      {/* Placeholder description */}
      <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
        Detailed ingredient information coming soon.
      </p>

      {/* Found in products */}
      {usedInProducts.length > 0 && (
        <section className="mt-14">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-4">
            Found in
          </h2>

          <ul className="space-y-2">
            {usedInProducts.map((product) => (
              <li key={product.slug}>
                <a
                  href={`/products/${product.slug}`}
                  className="text-neutral-800 hover:underline"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
