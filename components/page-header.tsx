"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  isHomePage?: boolean;
  className?: string;
}

export function PageHeader({
  title,
  description,
  isHomePage = false,
}: PageHeaderProps) {
  return (
    <section
      className={`${
        isHomePage ? "py-16" : "py-32"
      } bg-gradient-to-br from-background via-background to-primary/5`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
