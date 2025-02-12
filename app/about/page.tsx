import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TeamSection } from "./components/team-section";
import { DesignComparison } from "@/components/home/design-comparison";
import { ProcessTimeline } from "@/app/services/components/process-timeline";

export const metadata: Metadata = {
  title: "About Us - vikiflow Web Design Agency",
  description:
    "Learn about vikiflow's journey, our passionate team, and our commitment to creating exceptional digital experiences. Discover why clients trust us for their web design needs.",
  alternates: {
    canonical: "https://www.vikiflow.com/about",
  },
  openGraph: {
    title: "About Us - vikiflow Web Design Agency",
    description:
      "Learn about vikiflow's journey, our passionate team, and our commitment to creating exceptional digital experiences. Discover why clients trust us for their web design needs.",
    url: "https://www.vikiflow.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="About Us"
        description="Learn about vikiflow's journey, our passionate team, and our commitment to creating exceptional digital experiences. Discover why clients trust us for their web design needs."
        isHomePage={false}
      />

      {/* Mission Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-8">
                At Vikiflow, we believe in transforming ideas into exceptional
                digital experiences. Our mission is to help businesses thrive in
                the digital age through innovative design and cutting-edge
                technology.
              </p>
              <p className="text-muted-foreground">
                Our innovative team brings fresh perspectives and cutting-edge
                expertise in digital experiences. Our commitment to innovation
                and client success drives everything we do.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Design Comparison Section */}
      <section>
        <DesignComparison />
      </section>

      {/* Process Timeline Section */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <ProcessTimeline />
        </div>
      </section>
    </div>
  );
}
