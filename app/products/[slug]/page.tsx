import { products } from "@/lib/products";
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
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
        {product.name}
      </h1>
    </main>
  );
}
