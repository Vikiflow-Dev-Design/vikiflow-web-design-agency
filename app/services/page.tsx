import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServicesList } from "@/app/services/components/services-list";
import { PricingSection } from "@/app/services/components/pricing-section";
import { FaqSection } from "@/app/services/components/faq-section";
import { ProcessTimeline } from "@/app/services/components/process-timeline";

export const metadata: Metadata = {
  title: "Our Services - vikiflow Web Design Solutions",
  description:
    "Explore our comprehensive web design and development services. From responsive websites to e-commerce solutions, we deliver cutting-edge digital experiences tailored to your needs.",
  alternates: {
    canonical: "https://www.vikiflow.com/services",
  },
  openGraph: {
    title: "Our Services - vikiflow Web Design Solutions",
    description:
      "Explore our comprehensive web design and development services. From responsive websites to e-commerce solutions, we deliver cutting-edge digital experiences tailored to your needs.",
    url: "https://www.vikiflow.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-x-hidden min-h-screen pt-16">
      <PageHeader
        title="Our Services"
        description="Explore our comprehensive web design and development services. From responsive websites to e-commerce solutions, we deliver cutting-edge digital experiences tailored to your needs."
        isHomePage={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServicesList />
        <ProcessTimeline />
      </div>

      <div className="relative">
        <PricingSection />
      </div>
      <FaqSection />
    </div>
  );
}
