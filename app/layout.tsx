import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import NavbarClient from "@/components/Navbarclient";
import "./globals.css";
import VineDecoration from "@/components/VineDecoration";
import Link from "next/link";
import Script from 'next/script'

const xiliphiFont = localFont({
  src: "./fonts/TT Norms Pro Regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xiliphi.com"),
  title: "Xiliphi | Natural Skincare",
  description: "Discover Xiliphi's turmeric-powered skincare, body butters, and lip care — crafted with natural ingredients.",
  openGraph: {
    siteName: "Xiliphi",
    url: "https://xiliphi.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${xiliphiFont.className}`}>
        <div className="relative overflow-hidden"> {/* Add overflow-hidden here */}
          <NavbarClient>
            {children}
          </NavbarClient>
        </div>
        <footer className="bg-black text-white mt-24">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm tracking-wide space-y-2">
              <p className="font-medium">© {new Date().getFullYear()} Xiliphi</p>
              <p className="text-neutral-400">Based in Toronto, Canada</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-sm tracking-wide">
              {[
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Shipping", href: "/shipping" },
                { label: "Returns", href: "/returns" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                // replace <a key={href} href={href} ...>
                <Link key={href} href={href} className="hover:text-neutral-400 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
        <SpeedInsights />
        <Script
          src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_API_KEY}`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}