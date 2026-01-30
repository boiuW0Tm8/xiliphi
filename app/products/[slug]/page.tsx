import Link from "next/link";
import { notFound } from "next/navigation";
import { ingredients } from "@/lib/ingredients";
import { products } from "@/lib/products";

const ingredientMap = new Map(
  ingredients.map((i) => [i.slug, i])
);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      {/* Back link */}
      <Link
        href="/products?fromProduct=true"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
      >
        <span className="text-lg leading-none">←</span>
        Back to Products
      </Link>

      {/* Product Name */}
      <h1 className="text-4xl font-medium mb-10 text-neutral-900">
        {product.name}
      </h1>

      {/* Ingredients */}
      <section>
        <h2 className="text-xl font-medium mb-4">
          Ingredients
        </h2>

        {/* Mobile */}
        <ul className="space-y-2 md:hidden">
          {product.ingredients.map((slug) => {
            const ingredient = ingredientMap.get(slug);
            if (!ingredient) return null;

            return (
              <li key={slug}>
                <Link href={`/almanac/${slug}`} className="hover:underline">
                  {ingredient.inci}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop */}
        <p className="hidden md:block leading-relaxed text-neutral-800">
          {product.ingredients.map((slug, index) => {
            const ingredient = ingredientMap.get(slug);
            if (!ingredient) return null;

            return (
              <span key={slug}>
                <Link href={`/almanac/${slug}`} className="hover:underline">
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
