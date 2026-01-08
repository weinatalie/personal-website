"use client";
import React from "react";
import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
}

export default function WaveText({ text, className }: WaveTextProps) {
  const characters = Array.from(text);
  const speed = 2;
  const amplitude = 3;

  return (
    <div
      className={`wave-container flex select-none items-center ${className}`}
    >
      <style>{`
        @keyframes animate-wave {
          0%, 100% { transform: translateY(${amplitude}px); }
          50% { transform: translateY(-${amplitude}px); }
        }

        .wave-child {
          display: inline-block;
          animation: animate-wave ${speed}s ease-in-out infinite;
        }

        .wave-container:hover .wave-child {
          animation-play-state: paused;
        }
      `}</style>

      {characters.map((char, i) => (
        <span
          key={i}
          style={{
            position: "relative",
            display: "inline-block",
            padding: "0 0.5px",
          }}
        >
          <motion.span
            className="wave-child"
            style={{
              display: "inline-block",
              willChange: "transform",
              whiteSpace: "pre",
              animationDelay: `${-speed + i * 0.1}s`,
              transform: `translateY(${amplitude}px)`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
