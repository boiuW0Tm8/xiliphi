"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CartProvider, useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import WelcomePopup from "@/components/WelcomePopup";
import Fuse from "fuse.js";

// ─── Cart icon with badge ─────────────────────────────────────────────────────

function CartButton() {
  const { cart, openCart } = useCart();
  const count = cart?.totalQuantity ?? 0;

  return (
    <button
      onClick={openCart}
      className="relative hover:opacity-60 transition-opacity duration-300 cursor-pointer"
      aria-label="Open cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}

const allProducts = [
  { name: "Original Body Butter", href: "/products/original-body-butter", image: "/original/main.jpg" },
  { name: "Mango Body Butter", href: "/products/mango-body-butter", image: "/mango/main.jpg" },
  { name: "Peach Body Butter", href: "/products/peach-body-butter", image: "/peach/main.png" },
  { name: "Citrus", href: "/products/citrus-body-butter", image: "/citrus/main.jpg" },
  { name: "Turmeric Skincare Set", href: "/products/turmeric-skincare-set", image: "/turmeric/main.jpg" },
  { name: "Strawberry Lip Mask/Scrub 2-in-1", href: "/products/strawberry-lip-care", image: "/strawberry/main.jpg" },
  { name: "Butter Lover Bundle", href: "/products/butter-lover-bundle", image: "/bundles/butterlover.png" },
  { name: "El Classico", href: "/products/el-classico-bundle", image: "/bundles/elclassico.png" },
  { name: "Tootie Frootie", href: "/products/tootie-frootie-bundle", image: "/bundles/tootiefrootie.png" },
  { name: "The Ultimate Set", href: "/products/ultimate-set", image: "/bundles/ultimate.png" },
  { name: "Mystery Bundle", href: "/products/mystery-bundle", image: "/bundles/mystery.png" },
];

// ─── Desktop search bar ───────────────────────────────────────────────────────

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ name: string; href: string; image: string }[]>([]);
  const [open, setOpen] = useState(false);

  const fuse = new Fuse(allProducts, { keys: ["name"], threshold: 0.4 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setResults(fuse.search(val).map((r) => r.item));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  };

  return (
    <div className="relative hidden md:flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 w-4 h-4 text-neutral-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder="Search Products..."
        className="w-52 focus:w-72 transition-all duration-300 border-b border-neutral-300 focus:border-neutral-700 outline-none text-sm py-1 pl-7 pr-2 bg-transparent placeholder-neutral-400"
      />
      {open && results.length > 0 && (
        <div className="absolute top-8 left-0 bg-white border border-neutral-200 rounded-xl shadow-md w-56 z-50 overflow-hidden">
          {results.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => { setQuery(""); setOpen(false); }}
              className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                <Image src={r.image} alt={r.name} fill className="object-cover" />
              </div>
              <span>{r.name}</span>
            </Link>
          ))}
        </div>
      )}
      {open && results.length === 0 && (
        <div className="absolute top-8 left-0 bg-white border border-neutral-200 rounded-xl shadow-md w-56 z-50 px-4 py-3 text-sm text-neutral-400">
          No results found
        </div>
      )}
    </div>
  );
}

// ─── Mobile search icon + expanding bar ──────────────────────────────────────

function MobileSearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ name: string; href: string; image: string }[]>([]);
  const [open, setOpen] = useState(false);

  const fuse = new Fuse(allProducts, { keys: ["name"], threshold: 0.4 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setResults(fuse.search(val).map((r) => r.item));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  };

  const handleClose = () => {
    setSearchOpen(false);
    setQuery("");
    setResults([]);
    setOpen(false);
  };

  return (
    <>
      {/* Search icon — always mounted, fades out when open */}
      <button
        onClick={() => setSearchOpen(true)}
        className={`md:hidden hover:opacity-60 transition-all duration-300 ${searchOpen ? "opacity-0 pointer-events-none w-0" : "opacity-100 w-5"}`}
        aria-label="Open search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg>
      </button>

      {/* Full-width search overlay — slides in over navbar */}
      <div
        className={`md:hidden absolute inset-0 z-50 bg-white flex items-center px-4 gap-3 transition-all duration-300 ease-in-out ${
          searchOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none -translate-x-4"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-400 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg>
        <input
          ref={(el) => { if (searchOpen && el) el.focus(); }}
          type="text"
          value={query}
          onChange={handleChange}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search Products..."
          className="flex-1 outline-none text-sm py-1 bg-transparent placeholder-neutral-400 border-b border-neutral-300 focus:border-neutral-700 transition-all duration-300"
        />
        <button onClick={handleClose} className="text-neutral-400 hover:text-neutral-700 transition-colors text-lg leading-none">
          ✕
        </button>

        {/* Results dropdown */}
        {open && results.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-md z-50 overflow-hidden">
            {results.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                onClick={handleClose}
                className="flex items-center gap-3 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                  <Image src={r.image} alt={r.name} fill className="object-cover" />
                </div>
                <span>{r.name}</span>
              </Link>
            ))}
          </div>
        )}
        {open && results.length === 0 && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-md z-50 px-6 py-3 text-sm text-neutral-400">
            No results found
          </div>
        )}
      </div>
    </>
  );
}

// ─── Inner layout (needs CartProvider above it) ───────────────────────────────

function LayoutInner({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 relative flex items-center h-20">

          {/* LEFT: Desktop Search + Mobile Search icon */}
          <SearchBar />
          <MobileSearchBar />

          {/* CENTER: Logo */}
          <Link
            href="/"
            className="absolute z-0 left-1/2 -translate-x-[48%] flex items-center opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out"
          >
            <Image src="/logo2.png" alt="Xiliphi logo" width={120} height={32} priority />
          </Link>

          {/* RIGHT: Desktop nav links + account + cart */}
          <div className="hidden md:flex ml-auto items-center gap-8 text-sm tracking-wide text-neutral-700">
            <div className="flex gap-8">
              {["About", "Products", "The Almanac", "Contact"].map((label) => (
                <Link
                  key={label}
                  href={label === "The Almanac" ? "/almanac" : `/${label.toLowerCase()}`}
                  className="relative hover:text-black transition-colors duration-300
                    after:absolute after:left-0 after:-bottom-1 after:h-px
                    after:w-0 after:bg-black after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {label}
                </Link>
              ))}
            </div>

            <Link href="/account" className="hover:opacity-60 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
              </svg>
            </Link>

            <CartButton />
          </div>

          {/* RIGHT (Mobile): Cart + Hamburger */}
          <div className="md:hidden ml-auto flex items-center gap-4">
            <CartButton />
            <button
              className="relative w-6 h-6"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`absolute left-0 top-1/2 w-6 h-px bg-black transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute left-0 top-1/2 w-6 h-px bg-black transition-opacity duration-200 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-1/2 w-6 h-px bg-black transition-all duration-500 ease-in-out ${menuOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DROPDOWN ================= */}
      <div className={`md:hidden fixed top-20 left-0 w-full z-40 overflow-hidden bg-white border-b border-neutral-200 transition-[max-height] duration-500 ease-in-out ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-4 text-sm tracking-wide text-black">
          {[
            { label: "About", href: "/about" },
            { label: "Products", href: "/products" },
            { label: "The Almanac", href: "/almanac" },
            { label: "Contact", href: "/contact" },
            { label: "Account", href: "/account" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-neutral-700 transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= CART DRAWER ================= */}
      <CartDrawer />

      {/* ================= PAGE CONTENT ================= */}
      <WelcomePopup />
      <div className="pt-20">{children}</div>
    </>
  );
}

export default function NavbarClient({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutInner>{children}</LayoutInner>
    </CartProvider>
  );
}