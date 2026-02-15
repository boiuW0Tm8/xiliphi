import Link from "next/link";
import { ingredients } from "@/lib/ingredients";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

const BODY_BUTTER_ORDER = [
  "original-body-butter",
  "peach-body-butter",
  "mango-body-butter",
  "citrus-body-butter",
];


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
const usedInProducts = products
  .filter((product) => {
    if (!product.ingredients) return false;

    // 🟢 Normal ingredient array
    if (
      Array.isArray(product.ingredients) &&
      typeof product.ingredients[0] === "string"
    ) {
      return (product.ingredients as string[]).includes(slug);
    }

    // 🟡 Sectioned ingredient array
    if (
      Array.isArray(product.ingredients) &&
      typeof product.ingredients[0] === "object"
    ) {
      return (product.ingredients as {
        section: string;
        items: string[];
      }[]).some((section) =>
        section.items.includes(slug)
      );
    }

    return false;
  })
  .sort((a, b) => {
    const aIndex = BODY_BUTTER_ORDER.indexOf(a.slug);
    const bIndex = BODY_BUTTER_ORDER.indexOf(b.slug);

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }

    if (aIndex !== -1) return 1;
    if (bIndex !== -1) return -1;

    return 0;
  });


  return (
     <main className="min-h-screen bg-white max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      {/* Back link */}
      <Link
        href="/almanac"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
      >
        <span className="text-lg leading-none">←</span>
        Back to Almanac
      </Link>

      {/* Common name */}
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4 text-neutral-900">
        {ingredient.common ?? ingredient.inci}
      </h1>

      {/* INCI name */}
      {ingredient.common && ingredient.inci && (
        <p className="text-xl text-neutral-500 mb-8">
          {ingredient.inci}
        </p>
      )}

      {/* Divider */}
      <div className="h-px w-24 bg-neutral-300 mb-10" />

      {/* Placeholder description */}
      <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl">
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
                <Link
                  href={`/products/${product.slug}`}
                  className="text-neutral-800 hover:underline"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
