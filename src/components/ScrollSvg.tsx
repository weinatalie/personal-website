"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollSvg({
  path,
  viewBox,
  color,
  className,
  strokeWidth,
  range = [0, 1],
}: {
  path: string;
  viewBox: string;
  color: string;
  className: string;
  strokeWidth?: number;
  range?: [number, number];
}) {
  const { scrollYProgress } = useScroll();

  const pathLength = useSpring(
    useTransform(scrollYProgress, range, [0, 1]),
    {
      stiffness: 80,
      damping: 30,
    }
  );

  const pathOpacity = useTransform(
    pathLength,
    [0, 0.01],
    [0, 1]
  );

  return (
    <div className={className}>
      <svg viewBox={viewBox} className="w-full h-auto" aria-hidden="true">
        <motion.path
          d={path}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength,
            opacity: pathOpacity,
          }}
        />
      </svg>
    </div>
  );
}
