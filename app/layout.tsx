"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"


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
        <nav className="px-4 sm:px-6 py-1 bg-white border-b border-neutral-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out"
            >
              <Image
                src="/logo.png"
                alt="Xiliphi logo"
                width={120}
                height={32}
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div
              className={`hidden md:flex gap-4 md:gap-8 text-sm tracking-wide text-neutral-700 ${xiliphiFont.className}`}
            >
              {["About", "Products", "Contact", "Where to buy"].map((label) => (
                <Link
                  key={label}
                  href={label === "Where to buy" ? "/contact" : `/${label.toLowerCase()}`}
                  className="relative hover:text-black transition-colors duration-300
                 after:absolute after:left-0 after:-bottom-1 after:h-px
                 after:w-0 after:bg-black after:transition-all after:duration-300
                 hover:after:w-full"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative w-6 h-6"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {/* Top line */}
              <span
                className={`
      absolute left-0 top-1/2 w-6 h-px bg-black
      transition-all duration-300 ease-in-out
      ${menuOpen ? "rotate-45" : "-translate-y-2"}
    `}
              />

              {/* Middle line */}
              <span
                className={`
      absolute left-0 top-1/2 w-6 h-px bg-black
      transition-opacity duration-200 ease-in-out
      ${menuOpen ? "opacity-0" : "opacity-100"}
    `}
              />

              {/* Bottom line */}
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
        {/* Mobile dropdown (animated) */}
        <div
          className={`
    md:hidden overflow-hidden bg-white
    border-b border-neutral-200
    transition-[max-height,opacity] duration-500 ease-in-out
    ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
        >

          <div
            className={`px-6 py-6 flex flex-col gap-4 text-sm tracking-wide text-black ${xiliphiFont.className}`}
          >

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-neutral-700 transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-neutral-700 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-neutral-700 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/wheretobuy"
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-neutral-700 transition-colors"
            >
              Where to buy
            </Link>

          </div>
        </div>



        {children}
      </body>
    </html>
  );
}
