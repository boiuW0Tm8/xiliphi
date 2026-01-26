import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products"; // adjust path if needed

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

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

        <ul className="space-y-2">
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
      </section>
    </main>
  );
}
