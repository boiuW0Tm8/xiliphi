import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductClient from "./ProductClient";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} | Xiliphi`;
  const description = product.description ?? `Shop ${product.name} by Xiliphi.`;
  const image = product.images?.[0];

  return {
    metadataBase: new URL("https://xiliphi.com"),
    title,
    description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://xiliphi.com/products/${slug}`,
      images: image ? [{ url: `https://xiliphi.com${image}` }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [`https://xiliphi.com${image}`] : [],
    },
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductSchema({
            title: product.name,
            description: product.description ?? `Shop ${product.name} by Xiliphi.`,
            handle: product.slug,
            priceRange: {
              minVariantPrice: {
                amount: product.price.toString(),
                currencyCode: "CAD",
              },
            },
            images: {
              edges: product.images.map((img) => ({
                node: { url: `https://xiliphi.com${img}` },
              })),
            },
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Home", url: "https://xiliphi.com" },
            { name: "Products", url: "https://xiliphi.com/products" },
            { name: product.name, url: `https://xiliphi.com/products/${slug}` },
          ])),
        }}
      />
      <ProductClient product={product} from={from ?? null} />
    </>
  );
}