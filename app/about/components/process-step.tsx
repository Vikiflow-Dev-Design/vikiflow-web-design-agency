"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export function ProcessStep({
  number,
  title,
  description,
  image,
}: ProcessStepProps) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
            <span className="text-lg font-bold">{number}</span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
