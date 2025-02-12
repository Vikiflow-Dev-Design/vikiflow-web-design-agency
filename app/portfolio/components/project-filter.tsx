"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "corporate", label: "Corporate" },
  { id: "startup", label: "Startup" },
];

interface ProjectFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilter({
  currentFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={currentFilter === category.id ? "default" : "outline"}
            onClick={() => onFilterChange(category.id)}
            className={cn(
              "relative",
              currentFilter === category.id && "text-primary-foreground"
            )}
          >
            {category.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
