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
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl mb-2">
        {ingredient.name}
      </h1>

      <p className="text-neutral-600 mb-8">
        INCI: {ingredient.name}
      </p>

      <p className="text-lg text-neutral-800">
        Ingredient information coming soon.
      </p>
    </main>
  );
}
