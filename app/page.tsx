import dynamic from "next/dynamic";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { TestimonialsHighlight } from "@/components/home/testimonials-highlight";
import { StatsSection } from "@/components/home/stats-section";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { TeamSection } from "@/components/home/team-section";
import { getHomePageData } from "@/lib/api";
import { projects } from "@/lib/portfolio-data";
import { Metadata } from "next";

// Dynamically import components that are below the fold
const DesignComparisonDynamic = dynamic(
  () =>
    import("@/components/home/design-comparison").then(
      (mod) => mod.DesignComparison
    ),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const TechStackDynamic = dynamic(
  () => import("@/components/home/tech-stack").then((mod) => mod.TechStack),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const BlogSectionDynamic = dynamic(
  () => import("@/components/home/blog-section").then((mod) => mod.BlogSection),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const CTABannerDynamic = dynamic(
  () => import("@/components/home/cta-banner").then((mod) => mod.CTABanner),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  }
);

export const metadata: Metadata = {
  title: "vikiflow - Modern Web Design & Development Agency",
  description:
    "Transform your online presence with vikiflow's expert web design and development services. We create stunning, responsive, and high-performance websites that drive business growth and deliver exceptional user experiences.",
  alternates: {
    canonical: "https://www.vikiflow.com",
  },
  openGraph: {
    title: "vikiflow - Modern Web Design & Development Agency",
    description:
      "Transform your online presence with vikiflow's expert web design and development services. We create stunning, responsive, and high-performance websites that drive business growth and deliver exceptional user experiences.",
    url: "https://www.vikiflow.com",
  },
};

export default async function Home() {
  const { services, stats, aboutStats, processSteps, testimonials } =
    await getHomePageData();

  // Get the first 3 projects for the featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="">
      <HeroSection />
      <AboutSection stats={aboutStats} />
      <ServicesSection services={services} />
      <PortfolioSection projects={featuredProjects} />

      <ProcessSection steps={processSteps} />
      <TeamSection />

      <DesignComparisonDynamic />

      <TechStackDynamic />

      <TestimonialsHighlight testimonials={testimonials} />
      <BlogSectionDynamic />
      <StatsSection stats={stats} />

      <CTABannerDynamic
        title="Ready to Transform Your Digital Presence?"
        description="Let's create something amazing together. Reach out and start your project today."
        href="/contact"
      />
    </div>
  );
}
