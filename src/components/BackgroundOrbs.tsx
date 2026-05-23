"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Accent Orb */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[15%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-shreeji-primary/10 blur-[80px] md:blur-[140px]"
      />

      {/* Secondary Accent Orb */}
      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-shreeji-accent/8 blur-[80px] md:blur-[130px]"
      />

      {/* Subtle Gold Accent Orb */}
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[25%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-shreeji-gold/5 blur-[90px] md:blur-[120px]"
      />
    </div>
  );
}
