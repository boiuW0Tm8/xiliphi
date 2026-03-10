// app/products/page.tsx  (SERVER COMPONENT - replaces current file)
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiliphi.com"),
  title: "Shop All Products | Xiliphi",
  description: "Browse Xiliphi's full collection of natural body butters, turmeric skincare, and lip care — crafted with botanical ingredients.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Shop All Products | Xiliphi",
    description: "Browse Xiliphi's full collection of natural body butters, turmeric skincare, and lip care.",
    url: "https://xiliphi.com/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Products | Xiliphi",
    description: "Browse Xiliphi's full collection of natural body butters, turmeric skincare, and lip care.",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}