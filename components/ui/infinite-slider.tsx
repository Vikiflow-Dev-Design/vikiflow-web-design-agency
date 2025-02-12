"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface InfiniteSliderProps {
  items: {
    name: string;
    icon: string;
  }[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function InfiniteSlider({
  items,
  speed = 30,
  direction = "left",
  className = "",
}: InfiniteSliderProps) {
  // Create a ref for the container
  const containerRef = useRef<HTMLDivElement>(null);

  // Create array of duplicated items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: 50 / speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="flex-shrink-0 group">
            <div className="relative flex flex-col items-center space-y-2 transition-transform duration-300 transform group-hover:scale-110">
              <div className="relative w-16 h-16 p-2 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 shadow-lg relative">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
