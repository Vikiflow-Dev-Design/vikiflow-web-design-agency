import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "./components/contact-form";
import { MotionDiv } from "./components/motion-elements";
import { ContactInfo } from "./components/contact-info";

export const metadata: Metadata = {
  title: "Contact Us - vikiflow Web Design Agency",
  description:
    "Get in touch with vikiflow for your web design and development needs. Let's discuss how we can transform your digital presence and create an exceptional website for your business.",
  alternates: {
    canonical: "https://www.vikiflow.com/contact",
  },
  openGraph: {
    title: "Contact Us - vikiflow Web Design Agency",
    description:
      "Get in touch with vikiflow for your web design and development needs. Let's discuss how we can transform your digital presence and create an exceptional website for your business.",
    url: "https://www.vikiflow.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen relative pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02] bg-center" />
      <div className="relative">
        <PageHeader
          title="Let's Create Something Amazing Together"
          description="Get in touch with vikiflow for your web design and development needs. Let's discuss how we can transform your digital presence and create an exceptional website for your business."
          className="pb-8"
          isHomePage={false}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Get in Touch Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you have a question about our services, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <ContactInfo />
          </MotionDiv>

          {/* Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-medium mb-4">Let's work together</h2>
            </div>

            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
