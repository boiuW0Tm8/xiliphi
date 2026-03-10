import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiliphi.com"),
  title: "About | Xiliphi",
  description: "Xiliphi is a skincare brand built around clean, minimal formulations made with natural ingredients — each chosen for a clear purpose.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Xiliphi",
    description: "Xiliphi is a skincare brand built around clean, minimal formulations made with natural ingredients.",
    url: "https://xiliphi.com/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About | Xiliphi",
    description: "Xiliphi is a skincare brand built around clean, minimal formulations made with natural ingredients.",
  },
};

export default function Page() {
  return <AboutClient />;
}