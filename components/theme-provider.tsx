"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get system preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    // Set the theme directly based on system preference
    document.documentElement.setAttribute("data-theme", systemTheme);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      }
      enableSystem={false}
      disableTransitionOnChange
      storageKey="vikiflow-theme"
    >
      {children}
    </NextThemeProvider>
  );
}
