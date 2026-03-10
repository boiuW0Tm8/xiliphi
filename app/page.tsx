import type { Metadata } from "next";
import HomeClient from "@/app/HomeClient";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Xiliphi | Natural Skincare",
  description: "Discover thoughtfully crafted natural skincare — turmeric sets, body butters, and lip care made with minimal, intentional ingredients.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xiliphi | Natural Skincare",
    description: "Discover thoughtfully crafted natural skincare — turmeric sets, body butters, and lip care made with minimal, intentional ingredients.",
    url: "https://xiliphi.com",
    siteName: "Xiliphi",
    type: "website",
    images: [
      {
        url: "https://xiliphi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xiliphi Natural Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xiliphi | Natural Skincare",
    description: "Minimal, intentional skincare crafted with natural ingredients.",
    images: ["https://xiliphi.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
      />
      <HomeClient />
    </>
  );
}