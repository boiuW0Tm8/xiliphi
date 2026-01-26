import { ingredients } from "@/lib/ingredients";
import { notFound } from "next/navigation";

export default function IngredientPage({
  params,
}: {
  params: { slug: string };
}) {
  const ingredient = ingredients.find(
    (i) => i.slug === params.slug
  );

  if (!ingredient) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* INCI name (hero) */}
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

      {/* Placeholder content */}
      <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
        Detailed ingredient information coming soon.
      </p>
    </main>
  );
}
