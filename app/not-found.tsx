"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-9xl font-bold tracking-tighter text-primary">
              404
            </h1>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Page Not Found
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
          >
            Oops! The page you're looking for seems to have wandered off into
            the digital void. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button
              asChild
              variant="default"
              className="flex items-center gap-2"
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-sm text-gray-500 dark:text-gray-400"
          >
            <p>
              Need assistance?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
