"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  formatValue?: (value: number) => string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  className,
  formatValue = (value) => Math.round(value).toString(),
}: CounterProps) {
  const [count, setCount] = useState(from);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCount(value);
        },
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatValue(count)}
    </span>
  );
}
