"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ============================= */
/* ANIMATION VARIANTS           */
/* ============================= */

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40, // Reduced distance to emphasize the opacity fade
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // Opacity gets its own slower timing for a "ghostly" reveal
      opacity: { duration: 0.5, ease: "linear" },
      // Movement stays on the smooth cubic-bezier
      x: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.5, ease: "linear" },
      x: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    },
  },
};

// Header fade-in with a very soft opacity transition
const headerFade = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
      y: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      delay: 0.3
    }
  }
};

/* ============================= */
/* SECTION BACKGROUND COLORS    */
/* ============================= */

const sectionColors = {
  header: "#ffffff",      // clean white for the title band
  founder: "#fdf0e3",     // soft beige
  ingredients: "#fee4ca", // soft orange
  statue: "#eef0f1",      // soft grey
  phi: "#d0f7e9",         // soft greenish teal
  rocks: "#efebe7",       // soft brown/grey
  plant: "#eaf2e9",       // soft green
};

/* ============================= */
/* REUSABLE ANIMATED BLOCK      */
/* ============================= */

function AnimatedBlock({
  children,
  variant,
  className,
}: {
  children: React.ReactNode;
  variant: any;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsAbove(rect.top < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView || isAbove ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================= */
/* REUSABLE COLORED SECTION BAND */
/* ============================= */

function SectionBand({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full" style={{ backgroundColor: color }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-center text-xl md:text-2xl font-medium leading-relaxed text-neutral-700">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================= */
/* PAGE COMPONENT               */
/* ============================= */

export default function AboutClient() {
  return (
    <main className="min-h-screen">

      {/* HEADER - Fades in from top on load */}
      {/* HEADER — narrative, tinted, with bobbing scroll cue */}
      <div className="w-full" style={{ backgroundColor: "#fbf7f0" }}>
        <section className="max-w-6xl mx-auto text-center px-6 pt-32 pb-12 overflow-hidden">
          <motion.h1
            variants={headerFade}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-medium text-neutral-900 tracking-tight"
          >
            Welcome to Xiliphi
          </motion.h1>
          <motion.p
            variants={headerFade}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-neutral-500 mt-6 font-normal"
          >
            A story of clean, intentional skincare
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center"
          >
            <motion.span
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl text-neutral-400 leading-none"
            >
              ↓
            </motion.span>
            <span className="text-xs text-neutral-400 mt-2 tracking-widest uppercase">
              scroll to explore
            </span>
          </motion.div>
        </section>
      </div>

      {/* ORIGIN STORY — soft beige */}
      <SectionBand color={sectionColors.founder}>
        <AnimatedBlock
          variant={fadeLeft}
          className="relative w-full h-[420px] order-2 md:order-1"
        >
          <Image
            src="/about/origin.png"
            alt="The origin of Xiliphi"
            fill
            className="object-cover rounded-2xl"
          />
        </AnimatedBlock>

        <AnimatedBlock
          variant={fadeRight}
          className="order-1 md:order-2 max-w-xl ml-auto"
        >
          <p>
            Xiliphi started when our founder, Ying, immigrated to Canada from China. The skincare products here
            didn't agree with her. Fragrances, fillers, and ingredients she
            couldn't pronounce left her skin irritated and reactive. So she
            stopped buying and started making.
          </p>
        </AnimatedBlock>
      </SectionBand>

      {/* SECTION 1 — soft orange */}
      <SectionBand color={sectionColors.ingredients}>
        <AnimatedBlock variant={fadeLeft} className="max-w-xl">
          <p>
            Xiliphi is a skincare brand built around the idea that effective
            skincare doesn’t need to be complicated. We focus on clean,
            minimal formulations made with natural, vegan ingredients — each
            chosen for a clear purpose, not marketing noise.
          </p>
        </AnimatedBlock>

        <AnimatedBlock variant={fadeRight} className="relative w-full h-[560px]">
          <Image
            src="/about/ingredient.png"
            alt="Clean minimal skincare composition"
            width={800}
            height={600}
            className="w-full h-full object-contain rounded-2xl"
          />
        </AnimatedBlock>
      </SectionBand>

      {/* SECTION 2 — soft grey */}
      <SectionBand color={sectionColors.statue}>
        <AnimatedBlock
          variant={fadeLeft}
          className="relative w-full h-[420px] order-2 md:order-1"
        >
          <Image
            src="/about/buddha.png"
            alt="Strength through cleansing symbolism"
            fill
            className="object-contain rounded-2xl"
          />
        </AnimatedBlock>

        <AnimatedBlock
          variant={fadeRight}
          className="order-1 md:order-2 max-w-xl ml-auto"
        >
          <p>
            The name <strong>Xiliphi</strong> reflects this philosophy.
            <strong> Xi (洗)</strong> means <em>to cleanse</em>, while
            <strong> Li (力)</strong> represents <em>strength</em>. Together,
            they represent the idea of strength through cleanliness — skincare
            that supports the skin’s natural function rather than overwhelming it.
          </p>
        </AnimatedBlock>
      </SectionBand>

      {/* SECTION 3 — soft greenish teal */}
      <SectionBand color={sectionColors.phi}>
        <AnimatedBlock variant={fadeLeft} className="max-w-xl">
          <p>
            <strong>Phi (φ)</strong> refers to the golden ratio, a principle found
            throughout nature and often associated with balance and efficiency.
            At Xiliphi, it symbolizes our approach to formulation: using the
            right balance of ingredients, at the right concentrations, to achieve
            results without excess.
          </p>
        </AnimatedBlock>

        <AnimatedBlock variant={fadeRight} className="relative w-full h-[420px]">
          <Image
            src="/about/phi2.png"
            alt="Golden ratio inspired composition"
            fill
            className="object-contain rounded-2xl"
          />
        </AnimatedBlock>
      </SectionBand>

      {/* SECTION 4 — soft brown/grey */}
      <SectionBand color={sectionColors.rocks}>
        <AnimatedBlock
          variant={fadeLeft}
          className="relative w-full h-[420px] order-2 md:order-1"
        >
          <Image
            src="/about/balance.png"
            alt="Balanced sustainable packaging"
            fill
            className="object-contain rounded-2xl"
          />
        </AnimatedBlock>

        <AnimatedBlock
          variant={fadeRight}
          className="order-1 md:order-2 max-w-xl ml-auto"
        >
          <p>
            Every Xiliphi product is designed with balance in mind — between
            effectiveness and simplicity, quality and accessibility, performance
            and sustainability. We carefully consider ingredient sourcing,
            formulation efficiency, and packaging choices to minimize waste
            while keeping products effective and reasonably priced.
          </p>
        </AnimatedBlock>
      </SectionBand>

      {/* SECTION 5 — soft green */}
      <SectionBand color={sectionColors.plant}>
        <AnimatedBlock variant={fadeLeft} className="max-w-xl">
          <p>
            Our goal is not to chase trends, but to create skincare that feels
            intentional, honest, and reliable — products you can understand,
            trust, and use every day.
          </p>
        </AnimatedBlock>

        <AnimatedBlock variant={fadeRight} className="relative w-full h-[560px]">
          <Image
            src="/about/plant.png"
            alt="Daily skincare ritual"
            fill
            className="object-contain rounded-2xl"
          />
        </AnimatedBlock>
      </SectionBand>

    </main>
  );
}