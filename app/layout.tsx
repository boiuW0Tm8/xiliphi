"use client";

import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${xiliphiFont.className}`}>
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-1 bg-white border-b border-neutral-200">
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
            <div className="hidden md:flex gap-4 md:gap-8 text-sm tracking-wide text-neutral-700">
              {["About", "Products", "Contact", "Where to buy"].map((label) => (
                <Link
                  key={label}
                  href={
                    label === "Where to buy"
                      ? "/wheretobuy"
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

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`
            md:hidden fixed inset-0 z-40
            transition-opacity duration-300 ease-in-out
            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            className={`
              absolute left-0 right-0
              top-[56px]
              h-[calc(100dvh-56px)]
              bg-white border-b border-neutral-200
              overflow-y-auto
              transform transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-y-0" : "-translate-y-4"}
            `}
          >


            <div className="px-6 py-6 flex flex-col gap-4 text-sm tracking-wide text-black">
              {["About", "Products", "Contact", "Where to buy"].map((label) => (
                <Link
                  key={label}
                  href={
                    label === "Where to buy"
                      ? "/wheretobuy"
                      : `/${label.toLowerCase()}`
                  }
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-neutral-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-[56px]">
          {children}
        </main>

        <SpeedInsights />
      </body>
    </html>
  );
}
