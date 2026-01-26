import Link from "next/link";
import { products } from "@/lib/products";
import { ingredients } from "@/lib/ingredients";
import { notFound } from "next/navigation";

/**
 * Required for static generation
 */
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* Product name */}
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-10">
        {product.name}
      </h1>

      {/* Ingredients */}
      <section>
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-4">
          Ingredients
        </h2>

        <p className="text-lg text-neutral-800 leading-relaxed">
          {product.ingredients.map((ingredientSlug, index) => {
            const ingredient = ingredients.find(
              (i) => i.slug === ingredientSlug
            );

            if (!ingredient) return null;

            return (
              <span key={ingredient.slug}>
                <Link
                  href={`/almanac/${ingredient.slug}`}
                  className="hover:underline"
                >
                  {ingredient.inci}
                </Link>
                {index < product.ingredients.length - 1 && ", "}
              </span>
            );
          })}
        </p>
      </section>
    </main>
  );
}
