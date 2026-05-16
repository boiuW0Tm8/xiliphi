"use client";

import Link from "next/link";
import Image from "next/image";

type Product = {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
};

export default function ProductCard({
  product,
  priority = false,
  onClick,
}: {
  product: Product;
  priority?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      onClick={onClick}
      className="group block text-center transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square mb-8 max-w-[420px] mx-auto bg-white rounded-2xl shadow-sm group-hover:shadow-md transition p-8">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xl font-medium group-hover:underline">
          {product.name}
        </p>

        <div className="flex items-baseline justify-center gap-3">
          <span className="text-xl font-semibold text-black">
            ${product.price.toFixed(2)}
          </span>

          {product.originalPrice && (
            <span className="text-base text-neutral-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}