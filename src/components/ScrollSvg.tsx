"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollSvg({
  path,
  viewBox,
  color,
  className,
  strokeWidth,
  customRange = [0, 1],
}: {
  path: string;
  viewBox: string;
  color: string;
  className: string;
  strokeWidth?: number;
  customRange?: [number, number];
}) {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const range = [0, 1];

  // Detect screen size to switch ranges
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Choose the range based on screen size
  const activeRange = isMobile ? customRange : range;

  const pathLength = useSpring(
    useTransform(scrollYProgress, activeRange, [0, 1]),
    {
      stiffness: 120,
      damping: 30,
      mass: 0.6,
      restDelta: 0.001,
    }
  );

  const pathOpacity = useTransform(
    pathLength,
    [0, 0.05],
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
