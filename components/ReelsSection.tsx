"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type Reel = {
  id: string;
  src: string;
  poster: string;
  creator: string;
  caption?: string;
};

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
  {
    id: "reel-reetika1",
    src: "/reels/reetika-ugc.mp4",
    poster: "/reels/reetika.PNG",
    creator: "@zaike_ki_reet",
    caption: "Body Butter And Lip Care",
  },
  {
    id: "reel-reetika2",
    src: "/reels/reetika-ugc2.mp4",
    poster: "/reels/reetika2.png",
    creator: "@zaike_ki_reet",
    caption: "Turmeric Skincare Set",
  },
  {
    id: "reel-gifty",
    src: "/reels/ugc-gifty.mp4",
    poster: "/reels/gifty.PNG",
    creator: "@giftysaraeldho",
    caption: "Ultimate Set Showcase",
  },
];

export default function ReelsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const snapId = useRef<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [rowHeight, setRowHeight] = useState<number | null>(null);

  // Percentage heights only resolve reliably when an ancestor has an explicit
  // (non-auto) height. Our row's height comes purely from its content (the
  // aspect-ratio cards), so instead of a CSS % height on the arrow buttons,
  // measure the actual rendered height and apply it as a concrete px value.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setRowHeight(entry.contentRect.height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function easeOutQuint(t: number) {
    return 1 - Math.pow(1 - t, 5);
  }

  // Smoothly animates scrollLeft to a target over `duration` ms with easing,
  // instead of relying on the browser's native (fairly abrupt) smooth scroll.
  const animateScrollTo = useCallback((target: number, duration = 450) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (snapId.current !== null) cancelAnimationFrame(snapId.current);

    const start = el.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    if (Math.abs(distance) < 0.5) return;

    function step(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutQuint(t);
      const currentEl = scrollerRef.current;
      if (!currentEl) return;
      currentEl.scrollLeft = start + distance * eased;

      if (t < 1) {
        snapId.current = requestAnimationFrame(step);
      } else {
        snapId.current = null;
      }
    }

    snapId.current = requestAnimationFrame(step);
  }, []);

  const updateArrowState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrowState();
    el.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);
    return () => {
      el.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, [updateArrowState]);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;

    // Find the card whose left edge is closest to the current scroll position,
    // then move one card over from there — keeps clicks landing cleanly on
    // the next/previous card even if the scroll position is mid-card.
    let currentIndex = 0;
    let closestDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - el.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        currentIndex = i;
      }
    });

    const targetIndex = Math.min(
      Math.max(currentIndex + direction, 0),
      children.length - 1
    );

    // Clamp to the true maximum scroll position so the last couple of clicks
    // land flush at the very end (a peek of the prior card + full cards to
    // the edge), instead of leaving a trailing gap after the last card.
    const maxScroll = el.scrollWidth - el.clientWidth;
    const rawTarget = children[targetIndex].offsetLeft;
    const target = direction === 1 ? Math.min(rawTarget, maxScroll) : Math.max(rawTarget, 0);

    animateScrollTo(target);
  }

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

        <div className="relative overflow-visible md:px-14 lg:px-16">
          {/* Left arrow — sits in the reserved gutter, outside the cards (desktop only) */}
          <button
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous reel"
            style={{ height: rowHeight ? rowHeight * 0.6 : undefined }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center text-neutral-700 hover:text-amber-700 hover:scale-110 transition duration-300 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
          >
            <svg style={{ overflow: "visible" }} className="w-9 lg:w-11 h-full" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="-6 0 36 100" preserveAspectRatio="none">
              <path d="M20 5l-14 45 14 45" />
              <path d="M11 5l-14 45 14 45" />
            </svg>
          </button>

          {/* Right arrow — sits in the reserved gutter, outside the cards (desktop only) */}
          <button
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next reel"
            style={{ height: rowHeight ? rowHeight * 0.6 : undefined }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center text-neutral-700 hover:text-amber-700 hover:scale-110 transition duration-300 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
          >
            <svg style={{ overflow: "visible" }} className="w-9 lg:w-11 h-full" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="-6 0 36 100" preserveAspectRatio="none">
              <path d="M4 5l14 45-14 45" />
              <path d="M13 5l14 45-14 45" />
            </svg>
          </button>

          {/* Horizontal scroll-snap carousel.
              Mobile: swipe natively, ~1 card visible + a peek of the next.
              Desktop: use the arrow buttons above (now outside the gutter); ~3 cards + a peek. */}
          <div
            ref={scrollerRef}
            className="flex gap-3 md:gap-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REELS.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel }: { reel: Reel }) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      // Mobile: 1 card + a peek (85vw of viewport).
      // Desktop (md+): width is a % of the *container* (not viewport), so the
      // peek stays a consistent, visible fraction of a card at any screen size.
      // 29% means ~3.45 cards fit → a solid ~45% peek of the next card.
      className="relative aspect-[9/16] flex-shrink-0 w-[85vw] md:w-[29%] rounded-2xl overflow-hidden bg-neutral-200 snap-start shadow-sm hover:shadow-lg transition-shadow"
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
              draggable={false}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 85vw, 29vw"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-neutral-900 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 text-left text-white">
            <p className="text-[10px] md:text-sm font-medium truncate">
              {reel.creator}
            </p>
            {reel.caption && (
              <p className="text-[9px] md:text-xs text-white/80 mt-0.5 line-clamp-1">
                {reel.caption}
              </p>
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