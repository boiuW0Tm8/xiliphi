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
/* PAGE COMPONENT               */
/* ============================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-32 text-neutral-700">
      
      {/* HEADER - Fades in from top on load */}
      <section className="max-w-6xl mx-auto text-center mb-24 overflow-hidden">
        <motion.h1 
          variants={headerFade}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-medium text-neutral-900 tracking-tight"
        >
          Welcome to Xiliphi
        </motion.h1>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-7xl mx-auto space-y-40 text-xl md:text-2xl font-medium leading-relaxed">

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <AnimatedBlock variant={fadeLeft} className="max-w-xl">
            <p>
              Xiliphi is a skincare brand built around the idea that effective
              skincare doesn’t need to be complicated. We focus on clean,
              minimal formulations made with natural, vegan ingredients — each
              chosen for a clear purpose, not marketing noise.
            </p>
          </AnimatedBlock>

          <AnimatedBlock variant={fadeRight} className="relative w-full h-[420px]">
            <Image
              src="/about/ingredients.png"
              alt="Clean minimal skincare composition"
              fill
              className="object-cover rounded-2xl"
            />
          </AnimatedBlock>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <AnimatedBlock
            variant={fadeLeft}
            className="relative w-full h-[420px] order-2 md:order-1"
          >
            <Image
              src="/about/buddha.png"
              alt="Strength through cleansing symbolism"
              fill
              className="object-cover rounded-2xl"
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
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
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
              src="/about/phi.png"
              alt="Golden ratio inspired composition"
              fill
              className="object-cover rounded-2xl"
            />
          </AnimatedBlock>
        </div>

        {/* SECTION 4 */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <AnimatedBlock
            variant={fadeLeft}
            className="relative w-full h-[420px] order-2 md:order-1"
          >
            <Image
              src="/about/balance.png"
              alt="Balanced sustainable packaging"
              fill
              className="object-cover rounded-2xl"
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
        </div>

        {/* SECTION 5 */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <AnimatedBlock variant={fadeLeft} className="max-w-xl">
            <p>
              Our goal is not to chase trends, but to create skincare that feels
              intentional, honest, and reliable — products you can understand,
              trust, and use every day.
            </p>
          </AnimatedBlock>

          <AnimatedBlock variant={fadeRight} className="relative w-full h-[420px]">
            <Image
              src="/about/leafs.png"
              alt="Daily skincare ritual"
              fill
              className="object-cover rounded-2xl"
            />
          </AnimatedBlock>
        </div>

      </section>
    </main>
  );
}