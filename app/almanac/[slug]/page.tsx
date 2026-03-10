import type { Metadata } from "next";
import Link from "next/link";
import { ingredients } from "@/lib/ingredients";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { getIngredientSchema, getBreadcrumbSchema } from "@/lib/schema"

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = ingredients.find((i) => i.slug === slug);
  if (!ingredient) return {};

  const name = ingredient.common ?? ingredient.inci;
  const title = `${name} | Xiliphi Almanac`;
  const description =
    ingredient.description?.whatItIs ??
    `Learn about ${name} and how it's used in Xiliphi products.`;

  return {
    metadataBase: new URL("https://xiliphi.com"),
    title,
    description,
    alternates: {
      canonical: `/almanac/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://xiliphi.com/almanac/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function IngredientPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;

  const ingredient = ingredients.find((i) => i.slug === slug);
  if (!ingredient) notFound();

  // Resolve back button destination + label
  let backHref = "/almanac";
  let backLabel = "Back to Almanac";

  if (from) {
    // from is expected to be like /products/original-body-butter
    const productSlug = from.replace("/products/", "");
    const sourceProduct = products.find((p) => p.slug === productSlug);
    if (sourceProduct) {
      backHref = from;
      backLabel = `Back to ${sourceProduct.name}`;
    }
  }

  // Find all products that include this ingredient
  const usedInProducts = products
    .filter((product) => {
      if (!product.ingredients) return false;

      if (
        Array.isArray(product.ingredients) &&
        typeof product.ingredients[0] === "string"
      ) {
        return (product.ingredients as string[]).includes(slug);
      }

      if (
        Array.isArray(product.ingredients) &&
        typeof product.ingredients[0] === "object"
      ) {
        return (
          product.ingredients as { section: string; items: string[] }[]
        ).some((section) => section.items.includes(slug));
      }

      return false;
    })
    .sort((a, b) => {
      const aIndex = BODY_BUTTER_ORDER.indexOf(a.slug);
      const bIndex = BODY_BUTTER_ORDER.indexOf(b.slug);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return 1;
      if (bIndex !== -1) return -1;

      return 0;
    });

  return (
    <main className="min-h-screen bg-white max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getIngredientSchema(ingredient)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Home", url: "https://xiliphi.com" },
            { name: "The Almanac", url: "https://xiliphi.com/almanac" },
            { name: ingredient.common ?? ingredient.inci, url: `https://xiliphi.com/almanac/${ingredient.slug}` }
          ]))
        }}
      />
      {/* Back link */}
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
      >
        <span className="text-lg leading-none">←</span>
        {backLabel}
      </Link>

      {/* Common name */}
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4 text-neutral-900">
        {ingredient.common ?? ingredient.inci}
      </h1>

      {/* INCI name */}
      {ingredient.common && ingredient.inci && (
        <p className="text-xl text-neutral-500 mb-8">{ingredient.inci}</p>
      )}

      {/* Divider */}
      <div className="h-px w-24 bg-neutral-300 mb-10" />

      {/* Description */}
      {ingredient.description ? (
        <div className="space-y-12 max-w-3xl">
          <section>
            <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
              What It Is
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {ingredient.description.whatItIs}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
              Functional Role
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {ingredient.description.function}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
              Skin-Relevant Properties
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {ingredient.description.properties}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
              Interesting Fact
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {ingredient.description.interestingFact}
            </p>
          </section>
        </div>
      ) : (
        <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl">
          Detailed ingredient information coming soon.
        </p>
      )}

      {/* Found in products */}
      {usedInProducts.length > 0 && (
        <section className="mt-14">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-4">
            Found in
          </h2>

          <ul className="space-y-2">
            {usedInProducts.map((product) => {
              const hasSections =
                Array.isArray(product.ingredients) &&
                typeof product.ingredients[0] === "object";

              if (hasSections) {
                const matchingSections = (
                  product.ingredients as { section: string; items: string[] }[]
                )
                  .filter((section) => section.items.includes(slug))
                  .map((section) => section.section);

                return matchingSections.map((sectionName) => (
                  <li key={`${product.slug}-${sectionName}`}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-neutral-800 hover:underline"
                    >
                      {sectionName}
                    </Link>
                  </li>
                ));
              }

              return (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-neutral-800 hover:underline"
                  >
                    {product.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}