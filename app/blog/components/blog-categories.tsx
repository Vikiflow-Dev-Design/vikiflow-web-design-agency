"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/blog-data";

interface BlogCategoriesProps {
  selected: string;
  onChange: (category: string) => void;
}

export function BlogCategories({ selected, onChange }: BlogCategoriesProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Categories</h3>
      <div className="flex flex-col gap-2">
        <Button
          variant={selected === "all" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => onChange("all")}
        >
          All Posts
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selected === category ? "default" : "ghost"}
            className="justify-start"
            onClick={() => onChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
