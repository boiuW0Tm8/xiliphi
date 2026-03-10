// app/almanac/page.tsx  (SERVER COMPONENT - replaces current file)
import type { Metadata } from "next";
import AlmanacClient from "./AlmanacClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiliphi.com"),
  title: "The Almanac | Xiliphi",
  description: "A reference guide to every ingredient used in Xiliphi products — explore what each ingredient is, where it comes from, and why it's included.",
  alternates: {
    canonical: "/almanac",
  },
  openGraph: {
    title: "The Almanac | Xiliphi",
    description: "A reference guide to every ingredient used in Xiliphi products.",
    url: "https://xiliphi.com/almanac",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Almanac | Xiliphi",
    description: "A reference guide to every ingredient used in Xiliphi products.",
  },
};

export default function AlmanacPage() {
  return <AlmanacClient />;
}