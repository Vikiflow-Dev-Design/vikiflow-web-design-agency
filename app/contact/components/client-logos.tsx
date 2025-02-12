"use client";

import { motion } from "framer-motion";

export function ClientLogos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Our Webflow Clients</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We're very fortunate to have worked with global brands between our
          team members all within a varied industry type.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center opacity-75">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="w-32 h-12 bg-muted/20 rounded-lg" />
        ))}
      </div>
    </motion.div>
  );
}
