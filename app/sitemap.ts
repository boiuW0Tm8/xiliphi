import { products } from "@/lib/products";
import { ingredients } from "@/lib/ingredients";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/products",
    "/almanac",
    "/about",
    "/faq",
    "/shipping",
    "/returns",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `https://xiliphi.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `https://xiliphi.com/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const ingredientPages = ingredients.map((i) => ({
    url: `https://xiliphi.com/almanac/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...ingredientPages];
}