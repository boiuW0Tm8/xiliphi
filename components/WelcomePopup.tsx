"use client";

import { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-6">
      <div className="bg-white rounded-3xl max-w-md w-full px-10 py-12 text-center shadow-xl relative animate-fade-in-up">

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-5 text-neutral-400 hover:text-neutral-700 transition-colors text-xl cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Grand Opening</p>
        <h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-4">
          Welcome to Xiliphi
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-8">
          As thanks for joining us during our grand opening, we're offering <strong>30% off sitewide</strong>, as well as <strong>free shipping on orders over $15 within Canada!</strong>
        </p>

        <button
          onClick={() => setVisible(false)}
          className="inline-block px-10 py-3 rounded-full bg-neutral-900 text-white text-sm tracking-wide uppercase hover:bg-neutral-700 transition-colors cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}