"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface HoverTextProps {
  text: string;
  className?: string;
}

export default function HoverText({ text, className }: HoverTextProps) {
  const [index, setIndex] = useState<number | null>(null);
  const characters = Array.from(text);

  return (
    <div
      className={`flex select-none ${className}`}
      onMouseLeave={() => setIndex(null)}
    >
      {characters.map((char, i) => {
        const distance = index !== null ? Math.abs(i - index) : null;

        let y = 0;
        if (distance === 0) y = -10;
        else if (distance === 1) y = -7.2;
        else if (distance === 2) y = -3.6;
        else if (distance === 3) y = -1.2;
        else if (distance === 4) y = -0.4;

        return (
          <span
            key={i}
            onMouseEnter={() => setIndex(i)}
            style={{ 
              position: "relative", 
              display: "inline-block",
              padding: "0 0.5px" 
            }}
            className={i < 6 ? "in-range" : ""}
          >
            <motion.span
              animate={{ y }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 0.8,
              }}
              style={{
                display: "inline-block",
                willChange: "transform",
                whiteSpace: "pre",
                pointerEvents: "none", 
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}