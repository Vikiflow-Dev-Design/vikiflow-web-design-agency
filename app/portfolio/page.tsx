import { Metadata } from "next";
import { PortfolioContent } from "./components/portfolio-content";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Portfolio | Web Design Agency",
  description:
    "Explore our portfolio of successful web design and development projects.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        title="Our Portfolio"
        description="Explore our portfolio of successful web design and development projects."
        isHomePage={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PortfolioContent />
      </div>
    </div>
  );
}
