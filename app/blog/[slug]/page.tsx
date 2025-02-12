import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/app/blog/components/blog-post-content";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
