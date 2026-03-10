"use client";

import React from "react";

const TEAL = "#2AA7A0";

type VineProps = {
  side: "left" | "right";
  offset: number;
  path: string;
  leaves: number[];
  sway: number;
  fallOffset: number;
};

const Vine = ({ side, offset, path, leaves, sway, fallOffset }: VineProps) => {
  return (
    <div
      className={`hidden xl:block fixed top-0 h-screen w-40 pointer-events-none z-10 overflow-hidden`}
      style={{
        [side]: `${offset}px`,
        transform: side === "right" ? "scaleX(-1)" : "none",
      }}
    >
      <svg viewBox="0 0 140 1400" className="w-full h-full vine-sway">

        <defs>
          <linearGradient id={`leafGrad-${offset}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={TEAL} stopOpacity="0.95"/>
            <stop offset="100%" stopColor={TEAL} stopOpacity="0.65"/>
          </linearGradient>

          <linearGradient id={`stemGrad-${offset}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={TEAL} stopOpacity="0.35"/>
            <stop offset="50%" stopColor={TEAL} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={TEAL} stopOpacity="0.35"/>
          </linearGradient>
        </defs>

        {/* STEM */}
        <path
          d={path}
          fill="none"
          stroke={`url(#stemGrad-${offset})`}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* LEAF CLUSTERS */}
        {leaves.map((y, i) => (
          <g
            key={y}
            transform={`translate(${i % 2 === 0 ? 60 : 80}, ${y})`}
            className="leaf-flutter"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <path
              d="M0 0 C-30 -40 -60 -10 -40 20 C-20 40 -5 20 0 0Z"
              fill={`url(#leafGrad-${offset})`}
            />

            <path
              d="M0 0 C30 -40 60 -10 40 20 C20 40 5 20 0 0Z"
              fill={`url(#leafGrad-${offset})`}
              opacity="0.85"
            />

            {i % 2 === 0 && (
              <path
                d="M10 -25 C20 -40 35 -35 30 -15 C25 -5 15 -10 10 -25Z"
                fill={`url(#leafGrad-${offset})`}
                opacity="0.75"
              />
            )}
          </g>
        ))}

        {/* FALLING LEAVES */}
        {[0,1,2].map((i) => (
          <g
            key={i}
            className="falling-leaf"
            style={{
              animationDelay: `${fallOffset + i * 3}s`,
            }}
          >
            <path
              d="M90 200 C105 170 125 185 120 210 C115 230 95 220 90 200Z"
              fill={TEAL}
              opacity="0.9"
            />
          </g>
        ))}

        <style>{`

        .vine-sway {
          animation: sway-${offset} ${sway}s ease-in-out infinite;
          transform-origin: top center;
        }

        @keyframes sway-${offset} {
          0%,100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(${side === "left" ? "7px" : "-7px"}) rotate(0.7deg); }
        }

        .leaf-flutter {
          animation: leafFlutter 6s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes leafFlutter {
          0%,100% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(2deg) translateY(-2px); }
        }

        .falling-leaf {
          animation: fall 10s linear infinite;
        }

        @keyframes fall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity:0; }
          10% { opacity:0.9; }
          50% { transform: translateY(400px) translateX(20px) rotate(60deg); }
          100% { transform: translateY(900px) translateX(-20px) rotate(140deg); opacity:0; }
        }

        `}</style>

      </svg>
    </div>
  );
};

export default function VineDecoration() {
  return (
    <>
      {/* LEFT SIDE */}
      <Vine
        side="left"
        offset={0}
        sway={10}
        fallOffset={0}
        path="
          M70 0
          C55 150 95 300 65 460
          C40 600 95 760 60 920
          C35 1080 85 1200 70 1400
        "
        leaves={[140, 350, 540, 760, 980, 1180]}
      />

      <Vine
        side="left"
        offset={50}
        sway={13}
        fallOffset={2}
        path="
          M80 0
          C100 200 60 360 90 540
          C110 720 70 900 95 1100
          C120 1280 80 1380 90 1400
        "
        leaves={[220, 420, 620, 840, 1040, 1260]}
      />

      {/* RIGHT SIDE */}
      <Vine
        side="right"
        offset={0}
        sway={12}
        fallOffset={1}
        path="
          M75 0
          C95 160 50 300 85 470
          C105 650 60 820 90 990
          C110 1160 70 1300 80 1400
        "
        leaves={[160, 380, 600, 820, 1040, 1220]}
      />

      <Vine
        side="right"
        offset={50}
        sway={15}
        fallOffset={3}
        path="
          M65 0
          C45 180 85 340 55 520
          C35 700 75 880 50 1080
          C30 1240 70 1360 60 1400
        "
        leaves={[200, 420, 660, 880, 1100, 1300]}
      />
    </>
  );
}