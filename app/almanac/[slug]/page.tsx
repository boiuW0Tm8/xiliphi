import { ingredients } from "@/lib/ingredients";
import { notFound } from "next/navigation";

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

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
        {ingredient.inci}
      </h1>

      {ingredient.common && (
        <p className="text-xl text-neutral-500 mb-8">
          ({ingredient.common})
        </p>
      )}

      <div className="h-px w-24 bg-neutral-300 mb-10" />

      <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
        Detailed ingredient information coming soon.
      </p>
    </main>
  );
}
