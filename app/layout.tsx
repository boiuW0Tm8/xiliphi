"use client";

import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const xiliphiFont = localFont({
  src: "./fonts/TT Norms Pro Regular.otf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${xiliphiFont.className}`}>

        {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 relative flex items-center h-16">

            {/* CENTER: Logo */}
            <Link
              href="/"
              className="absolute z-0 left-1/2 -translate-x-1/2 flex items-center opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out"
            >
              <Image
                src="/logo2.png"
                alt="Xiliphi logo"
                width={120}
                height={32}
                priority
              />
            </Link>

            {/* RIGHT: Desktop nav links */}
            <div className="hidden md:flex ml-auto gap-8 text-sm tracking-wide text-neutral-700">
              {["About", "Products", "The Almanac", "Contact"].map((label) => (
                <Link
                  key={label}
                  href={
                    label === "Where to buy"
                      ? "/wheretobuy"
                      : label === "The Almanac"
                        ? "/almanac"
                        : `/${label.toLowerCase()}`
                  }
                  className="relative hover:text-black transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-px
                  after:w-0 after:bg-black after:transition-all after:duration-300
                  hover:after:w-full"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* RIGHT (Mobile): Hamburger */}
            <button
              className="md:hidden ml-auto relative w-6 h-6"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`
                  absolute left-0 top-1/2 w-6 h-px bg-black
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "rotate-45" : "-translate-y-2"}
                `}
              />

              <span
                className={`
                  absolute left-0 top-1/2 w-6 h-px bg-black
                  transition-opacity duration-200 ease-in-out
                  ${menuOpen ? "opacity-0" : "opacity-100"}
                `}
              />

              <span
                className={`
                  absolute left-0 top-1/2 w-6 h-px bg-black
                  transition-all duration-500 ease-in-out
                  ${menuOpen ? "-rotate-45" : "translate-y-2"}
                `}
              />
            </button>
          </div>
        </nav>

        {/* ================= MOBILE DROPDOWN ================= */}
        <div
          className={`
            md:hidden fixed top-16 left-0 w-full z-40
            overflow-hidden bg-white
            border-b border-neutral-200
            transition-[max-height] duration-500 ease-in-out
            ${menuOpen ? "max-h-96" : "max-h-0"}
          `}
        >
          <div className="px-6 py-6 flex flex-col gap-4 text-sm tracking-wide text-black">
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-neutral-700 transition-colors">
              About
            </Link>
            <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-neutral-700 transition-colors">
              Products
            </Link>
            <Link href="/almanac" onClick={() => setMenuOpen(false)} className="hover:text-neutral-700 transition-colors">
              The Almanac
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-neutral-700 transition-colors">
              Contact
            </Link>
            <Link href="/wheretobuy" onClick={() => setMenuOpen(false)} className="hover:text-neutral-700 transition-colors">
              Where to buy
            </Link>
          </div>
        </div>

        {/* ================= PAGE CONTENT ================= */}
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-black text-white mt-24">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

            {/* LEFT */}
            <div className="text-sm tracking-wide space-y-2">
              <p className="font-medium">© {new Date().getFullYear()} Xiliphi</p>
              <p className="text-neutral-400">Based in Toronto, Canada</p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col md:flex-row gap-6 text-sm tracking-wide">
              <Link href="/contact" className="hover:text-neutral-400 transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="hover:text-neutral-400 transition-colors">
                FAQ
              </Link>
              <Link href="/shipping" className="hover:text-neutral-400 transition-colors">
                Shipping & Returns
              </Link>
              <Link href="/privacy" className="hover:text-neutral-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-neutral-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}