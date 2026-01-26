import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-24 text-neutral-900">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">
          Products
        </h1>

        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="text-lg text-neutral-800 hover:underline"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
