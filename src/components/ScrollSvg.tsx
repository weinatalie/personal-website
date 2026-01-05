"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function ScrollSvg({
  path,
  viewBox,
  color,
  className,
}: {
  path: string;
  viewBox: string;
  color: string;
  className: string;
}) {
  const strokeWidth = 6;
  const opacity = 1;
  const range: [number, number] = [0, 1];

  const { scrollYProgress } = useScroll();

  const pathLength = useTransform(scrollYProgress, range, [0, 1]);
  const pathOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [range[0], range[0] + 0.01],
    [0, 1]
  );

  return (
    <div className={className} style={{ opacity }}>
      <svg viewBox={viewBox} className="w-full h-auto" aria-hidden="true">
        <motion.path
          d={path}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength, opacity: pathOpacity }}
        />
      </svg>
    </div>
  );
}
