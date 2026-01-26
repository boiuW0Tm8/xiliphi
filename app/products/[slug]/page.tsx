import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../lib/products";

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
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* Product Name */}
      <h1 className="text-4xl font-medium mb-10">
        {product.name}
      </h1>

      {/* Ingredients */}
            <section>
        <h2 className="text-xl font-medium mb-4">
          Ingredients
        </h2>

        {/* Mobile: single column list */}
        <ul className="space-y-2 md:hidden">
          {product.ingredients.map((ingredient) => (
            <li key={ingredient}>
              <Link
                href={`/almanac/${ingredient}`}
                className="hover:underline"
              >
                {ingredient
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: paragraph-style list */}
        <p className="hidden md:block leading-relaxed text-neutral-800">
          {product.ingredients.map((ingredient, index) => (
            <span key={ingredient}>
              <Link
                href={`/almanac/${ingredient}`}
                className="hover:underline"
              >
                {ingredient
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
              {index < product.ingredients.length - 1 && ", "}
            </span>
          ))}
        </p>
      </section>
    </main>
  );
}
