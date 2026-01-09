"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface HoverTextProps {
  text: string;
  className?: string;
  colorOne: string;
  colorTwo: string;
  onRangeChange?: (inRange: boolean) => void;
}

export default function HoverText({
  text,
  className,
  colorOne,
  colorTwo,
  onRangeChange,
}: HoverTextProps) {
  const [index, setIndex] = useState<number | null>(null);
  const characters = Array.from(text);
  const totalChars = characters.length;

  return (
    <div
      className={`flex select-none ${className}`}
      onMouseLeave={() => {
        setIndex(null);
        onRangeChange?.(false);
      }}
    >
      {characters.map((char, i) => {
        const distance = index !== null ? Math.abs(i - index) : null;
        const percentage = (i / (totalChars - 1)) * 100;
        const charColor = `color-mix(in srgb, ${colorOne}, ${colorTwo} ${percentage}%)`;

        let y = 0;
        if (distance === 0) y = -10;
        else if (distance === 1) y = -7.2;
        else if (distance === 2) y = -3.6;
        else if (distance === 3) y = -1.2;
        else if (distance === 4) y = -0.4;

        return (
          <span
            key={i}
            onMouseEnter={() => {
              setIndex(i);
              onRangeChange?.(i < 6);
            }}
            style={{
              position: "relative",
              display: "inline-block",
              padding: "0 0.5px",
              color: charColor, 
            }}
            className={i < 6 ? "in-range" : "out-of-range"}
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
