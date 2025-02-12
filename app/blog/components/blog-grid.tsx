"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors">
            <Link
              href={`/blog/${post.slug}`}
              className="relative h-48 overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>

              <p className="text-muted-foreground mb-4 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 border-2 border-background shadow-sm mr-2">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {post.author.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="group" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
