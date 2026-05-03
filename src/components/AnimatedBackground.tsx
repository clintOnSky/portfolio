"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="bg-mesh" aria-hidden="true">
      <motion.div
        className="blob blob-1"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="blob blob-2"
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="blob blob-3"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
