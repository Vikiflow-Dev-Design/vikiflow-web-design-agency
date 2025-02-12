"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BlogPost } from "@/lib/blog-data";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="relative min-h-screen pb-16">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 py-8 border-b"
        >
          <Avatar className="h-14 w-14 border-2 border-background shadow-md">
            <AvatarImage
              src={post.author.avatar}
              alt={post.author.name}
              className="object-cover"
            />
            <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-lg">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">
              {post.author.role || "Author"}
            </div>
          </div>
          <Button variant="outline" size="sm" className="ml-auto">
            <Share2 className="h-4 w-4 mr-2" />
            Share Article
          </Button>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-[750px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-primary prose-code:font-normal
            prose-pre:bg-muted prose-pre:text-muted-foreground
            prose-ol:text-muted-foreground prose-ul:text-muted-foreground
            prose-li:marker:text-primary prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </article>
  );
}
