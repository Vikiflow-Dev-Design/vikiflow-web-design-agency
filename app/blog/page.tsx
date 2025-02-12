import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { BlogContent } from "./components/blog-content";

export const metadata: Metadata = {
  title: "Blog - vikiflow Web Design Agency",
  description:
    "Explore our latest insights, tutorials, and updates about web design, development, and digital trends.",
  alternates: {
    canonical: "https://www.vikiflow.com/blog",
  },
  openGraph: {
    title: "Blog - vikiflow Web Design Agency",
    description:
      "Explore our latest insights, tutorials, and updates about web design, development, and digital trends.",
    url: "https://www.vikiflow.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        title="Our Blog"
        description="Explore our latest insights, tutorials, and updates about web design, development, and digital trends."
        isHomePage={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlogContent />
      </div>
    </div>
  );
}
