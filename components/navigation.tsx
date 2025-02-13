"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: 'Team', path: '/team' },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  // { name: 'Testimonials', path: '/testimonials' },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full z-50 px-2 sm:px-4 lg:px-8 top-2 sm:top-4 flex flex-col items-center">
      <motion.nav
        className={cn(
          "w-full max-w-7xl rounded-full transition-all duration-300 border border-border/40",
          "px-3 sm:px-6",
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg dark:bg-gray-900/90 dark:shadow-2xl dark:shadow-primary/5"
            : "bg-background/80 backdrop-blur-md dark:bg-gray-900/50 dark:shadow-xl dark:shadow-primary/5"
        )}
      >
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link
            href="/"
            className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="/favicon.svg"
                alt="Vikiflow Logo"
                className="w-8 h-8 dark:invert group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-primary transition-all duration-300">
                Vikiflow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  pathname === item.path
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-muted-foreground hover:bg-primary/5 dark:hover:bg-primary/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "ml-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/10",
                "hover:scale-105 active:scale-95"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Tablet Navigation - Simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  pathname === item.path
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-muted-foreground hover:bg-primary/5 dark:hover:bg-primary/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/5 dark:hover:bg-primary/10"
              onClick={toggleMenu}
              aria-label="More menu items"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full hover:bg-primary/5 dark:hover:bg-primary/10",
                "hover:scale-105 active:scale-95"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full hover:bg-primary/5 dark:hover:bg-primary/10",
                "hover:scale-105 active:scale-95"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={cn(
                "rounded-full hover:bg-primary/5 dark:hover:bg-primary/10",
                "hover:scale-105 active:scale-95"
              )}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "w-full max-w-7xl mt-2 rounded-2xl overflow-hidden md:hidden",
              "border border-border/40",
              "bg-background/95 backdrop-blur-lg shadow-lg dark:bg-gray-900/90",
              "dark:shadow-2xl dark:shadow-primary/5"
            )}
          >
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                    "hover:scale-105 active:scale-95",
                    pathname === item.path
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-muted-foreground hover:bg-primary/5 dark:hover:bg-primary/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tablet Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "hidden md:block lg:hidden",
              "w-full max-w-7xl mt-2 rounded-2xl overflow-hidden",
              "border border-border/40",
              "bg-background/95 backdrop-blur-lg shadow-lg dark:bg-gray-900/90",
              "dark:shadow-2xl dark:shadow-primary/5"
            )}
          >
            <div className="px-2 py-3 space-y-1">
              {navItems.slice(5).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                    "hover:scale-105 active:scale-95",
                    pathname === item.path
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-muted-foreground hover:bg-primary/5 dark:hover:bg-primary/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
