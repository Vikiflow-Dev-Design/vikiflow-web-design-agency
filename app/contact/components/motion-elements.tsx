"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const MotionDiv = motion.div;
export const MotionA = motion.a;

export const LoaderAnimation = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    }}
    className="mr-2"
  >
    {children}
  </motion.div>
);
