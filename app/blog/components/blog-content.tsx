"use client";

import { useState } from "react";
import { BlogGrid } from "./blog-grid";
import { BlogSearch } from "./blog-search";
import { BlogCategories } from "./blog-categories";
import { MotionDiv } from "./motion-elements";
import { blogPosts } from "@/lib/blog-data";

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-8">
          <BlogSearch value={searchQuery} onChange={setSearchQuery} />
          <BlogCategories
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </div>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-3"
      >
        <BlogGrid posts={filteredPosts} />
      </MotionDiv>
    </div>
  );
}
