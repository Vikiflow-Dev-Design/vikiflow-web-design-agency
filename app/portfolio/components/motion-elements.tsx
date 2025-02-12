"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const MotionDiv = motion.div;

export function LoaderAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
