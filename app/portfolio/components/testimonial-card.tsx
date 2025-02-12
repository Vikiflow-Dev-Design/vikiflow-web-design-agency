"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useTheme } from "next-themes";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar = "/images/default-avatar.png",
}: TestimonialCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={`${
        isDark
          ? "bg-background/5 backdrop-blur-sm border-primary/20"
          : "bg-white border-gray-200"
      } p-8 md:p-12 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
        <div
          className={`w-full h-full rounded-full ${
            isDark ? "bg-primary/10" : "bg-primary/5"
          }`}
        />
      </div>

      <Quote
        className={`w-12 h-12 mb-8 ${
          isDark ? "text-primary" : "text-primary/80"
        }`}
      />

      <blockquote
        className={`text-xl md:text-2xl font-medium mb-8 relative ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        "{quote}"
      </blockquote>

      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4">
          <div className="absolute inset-0 rounded-full bg-primary/20" />
          <img
            src={avatar}
            alt={author}
            className="w-full h-full rounded-full object-cover border-2 border-primary"
          />
        </div>
        <div>
          <div
            className={`font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {author}
          </div>
          <div className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {role} at {company}
          </div>
        </div>
      </div>
    </Card>
  );
}
