"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { blogPosts } from "@/lib/blog-data";

// Get the latest 3 blog posts
const latestPosts = blogPosts.slice(0, 3);

export function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Stay updated with our latest thoughts on design, development, and digital trends
            </p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {latestPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group relative flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="relative block">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-primary/90 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="flex-1 p-6 bg-background/50 backdrop-blur-sm rounded-b-xl border border-primary/10">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author.name}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg group"
            >
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
