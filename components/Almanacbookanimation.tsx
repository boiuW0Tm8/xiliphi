"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

let hasPlayedThisSession = false;

export default function AlmanacBookAnimation({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<"closed" | "opening" | "open" | "fading" | "done">("closed");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (hasPlayedThisSession) {
      setPhase("done");
      return;
    }

    const t1 = setTimeout(() => setPhase("opening"), 500);
    const t2 = setTimeout(() => setPhase("open"), 2500);
    const t3 = setTimeout(() => setPhase("fading"), 2800);
    const t4 = setTimeout(() => {
      setPhase("done");
      hasPlayedThisSession = true;
      onComplete?.();
    }, 3300);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  if (!mounted || phase === "done") return null;

  const isOpening = phase !== "closed";
  const PAGE_WIDTH = 300;
  const PAGE_HEIGHT = 420;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#f5f0e8",
        opacity: phase === "fading" ? 0 : 1,
        transition: phase === "fading" ? "opacity 0.5s ease-out" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        padding: "20px",
      }}
    >
      <div style={{
        transform: isMobile ? "scale(0.6)" : "scale(1)",
        transformOrigin: "center center",
      }}>
        <div
          style={{
            width: isOpening ? `${PAGE_WIDTH * 2}px` : `${PAGE_WIDTH}px`,
            height: `${PAGE_HEIGHT}px`,
            position: "relative",
            perspective: "1500px",
            transition: "width 2s cubic-bezier(0.4, 0, 0.2, 1), transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isOpening ? "translateX(0)" : `translateX(${PAGE_WIDTH / 2}px)`,
          }}
        >
          {/* LEFT PAGE */}
          <div
            style={{
              position: "absolute",
              left: 0,
              width: `${PAGE_WIDTH}px`,
              height: "100%",
              background: "#faf7f0",
              borderRadius: "4px 0 0 4px",
              borderRight: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "inset -10px 0 20px rgba(0,0,0,0.05)",
              opacity: isOpening ? 1 : 0,
              transition: "opacity 0s 0.8s",
            }}
          />

          {/* RIGHT PAGE */}
          <div
            style={{
              position: "absolute",
              right: 0,
              width: `${PAGE_WIDTH}px`,
              height: "100%",
              background: "#faf7f0",
              borderRadius: "0 4px 4px 0",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ height: "4px", width: "40%", background: "#e0ddd5", marginBottom: "10px" }} />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ height: "6px", width: i === 5 ? "60%" : "100%", background: "#eeebe3" }} />
            ))}
          </div>

          {/* COVER ASSEMBLY */}
          <div
            style={{
              position: "absolute",
              right: 0,
              width: `${PAGE_WIDTH}px`,
              height: "100%",
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              transition: "transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: isOpening ? "rotateY(-180deg)" : "rotateY(0deg)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #7ececa 0%, #4aa8a8 100%)",
                borderRadius: isOpening ? "4px 0 0 4px" : "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ fontSize: "18px", fontStyle: "italic" }}>The</span>
              <span style={{ fontSize: "32px", fontWeight: "bold" }}>ALMANAC</span>
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "#faf7f0",
                borderRadius: "4px 0 0 4px",
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05), transparent 20%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}