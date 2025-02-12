"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show the back button on the home page
  if (pathname === "/") return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-24 left-4 z-50 md:left-8"
    >
      <Button
        variant="outline"
        className="group h-10 px-4 rounded-full shadow-lg backdrop-blur-sm bg-background/50 hover:bg-background/80 border-none"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium">Previous Page</span>
      </Button>
    </motion.div>
  );
}
