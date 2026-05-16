"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Reel = {
  id: string;
  src: string;        // path to mp4 in /public/reels/
  poster: string;     // path to poster jpg in /public/reels/
  creator: string;    // @handle
  caption?: string;
};

// === EDIT THIS ARRAY WHEN YOU ADD YOUR REELS ===
// Drop your compressed mp4s + poster jpgs into /public/reels/
// then fill in the paths below.
const REELS: Reel[] = [
  {
    id: "reel-cansu",
    src: "/reels/xiliphi-cansu-comp.mp4",
    poster: "/reels/cansu.JPG",
    creator: "@ugc_canada",
    caption: "Ultimate Set Showcase",
  },
  {
    id: "reel-jess",
    src: "/reels/xiliphi-jess-comp.mp4",
    poster: "/reels/jess.JPG",
    creator: "@jessichiarello",
    caption: "Ultimate Set Showcase",
  },
  {
    id: "reel-lauren",
    src: "/reels/xiliphi-lauren-comp.mp4",
    poster: "/reels/lauren.JPG",
    creator: "@laurmckellar",
    caption: "Lip Care 2-in-1",
  },
];

export default function ReelsSection() {
  return (
    <section className="bg-amber-50/40 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-4">
          <div>
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-amber-700 mb-3 font-medium">
              @xiliphi on instagram
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Real routines. Real skin.
            </h2>
          </div>
          <a
            href="https://instagram.com/xiliphi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide uppercase text-neutral-700 hover:text-amber-700 underline-offset-4 hover:underline transition self-start md:self-auto"
          >
            Follow along →
          </a>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 md:mx-0 px-6 md:px-0 pb-4 md:pb-0">
          {REELS.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>

      </div>
    </section>
  );
}


function ReelCard({ reel }: { reel: Reel }) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Only render poster when near viewport
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[9/16] flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-auto rounded-2xl overflow-hidden bg-neutral-200 snap-center shadow-sm hover:shadow-lg transition-shadow"
    >
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Play reel from ${reel.creator}`}
        >
          {visible && (
            <Image
              src={reel.poster}
              alt={reel.caption || `Reel from ${reel.creator}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 70vw, 33vw"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-neutral-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Creator attribution */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white">
            <p className="text-sm font-medium">{reel.creator}</p>
            {reel.caption && (
              <p className="text-xs text-white/80 mt-0.5 line-clamp-1">{reel.caption}</p>
            )}
          </div>
        </button>
      ) : (
        <video
          src={reel.src}
          autoPlay
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}