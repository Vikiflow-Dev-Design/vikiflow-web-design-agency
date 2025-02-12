"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { format } from "date-fns";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  readTime: number;
}

export function BlogPostHeader({ title, date, readTime }: BlogPostHeaderProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
      <Link href="/blog">
        <Button variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {title}
      </h1>
      <div className="flex items-center gap-6 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={date}>{format(new Date(date), "MMMM d, yyyy")}</time>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
