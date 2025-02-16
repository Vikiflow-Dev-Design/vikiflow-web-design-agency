"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/portfolio-data";
import { useTheme } from "next-themes";
import { ImageGallery } from "./image-gallery";
import { TestimonialCard } from "./testimonial-card";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true });
  const [navigationRef, navigationInView] = useInView({ triggerOnce: true });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[hsl(240,10%,3.9%)]" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative min-h-[85vh] flex items-center"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-b from-black/50 via-black/50 to-[hsl(240,10%,3.9%)]"
                : "bg-gradient-to-b from-black/30 via-gray-900/40 to-gray-50"
            }`}
          />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </motion.div>
      </section>

      {/* Project Info Section */}
      <section
        className={`py-24 border-b ${
          isDark ? "border-white/10" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Client URL
              </h3>
              <a
                href={project.clientUrl}
                onClick={(e) => {
                  // Prevent navigation for invalid URLs or example domains
                  if (
                    !project.clientUrl ||
                    project.clientUrl.includes("example.com") ||
                    !project.clientUrl.startsWith("http")
                  ) {
                    e.preventDefault();
                    return;
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
              >
                Visit website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Sector
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {project.sector}
              </p>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Type
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {project.type}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section ref={contentRef} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-24"
          >
            {/* Objective */}
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Objective
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.objective}
              </p>
            </div>

            {/* Process */}
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Process
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.process}
              </p>
            </div>

            {/* Result */}
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Result
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.result}
              </p>
            </div>

            {/* Technologies Section */}
            {project.technologies && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Category-Specific Features */}
            {project.category === "Event Services" && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Services Offered
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Event Planning",
                    "Decoration Services",
                    "Cakes & Pastries",
                    "Catering Services",
                    "Training Programs",
                    "Event Management",
                  ].map((service) => (
                    <li
                      key={service}
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.category === "Agriculture" && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Agricultural Solutions
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Solar Batteries & Inverters",
                    "Greenhouse Technology",
                    "Drip Irrigation Systems",
                    "Animal Feeds",
                    "Farm Services",
                    "Agricultural Consulting",
                  ].map((solution) => (
                    <li
                      key={solution}
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.category === "Construction" && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Construction Services
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Residential Construction",
                    "Commercial Buildings",
                    "Renovation Projects",
                    "Project Management",
                    "Architecture Design",
                    "Construction Consulting",
                  ].map((service) => (
                    <li
                      key={service}
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.category === "Fitness" && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Fitness Center Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "State-of-the-art Equipment",
                    "Personal Training",
                    "Group Classes",
                    "Nutrition Planning",
                    "Fitness Assessment",
                    "Member Programs",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.category === "Services" && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Cleaning Services
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Residential Cleaning",
                    "Commercial Cleaning",
                    "Deep Cleaning",
                    "Move-in/Move-out",
                    "Regular Maintenance",
                    "Specialized Services",
                  ].map((service) => (
                    <li
                      key={service}
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.category === "E-commerce" && (
              <div>
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Jewelry Collections
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Necklaces & Pendants",
                    "Rings & Bands",
                    "Earrings",
                    "Bracelets",
                    "Custom Jewelry",
                    "Limited Editions",
                  ].map((collection) => (
                    <li
                      key={collection}
                      className={`flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {collection}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={galleryRef} className="py-24 bg-black/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageGallery images={project.gallery || [project.image]} />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section
          className={`py-24 ${isDark ? "bg-black/10" : "bg-gray-50/80"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <TestimonialCard
                quote={project.testimonial.quote}
                author={project.testimonial.author}
                role={project.testimonial.role}
                company={project.testimonial.company}
                avatar={project.testimonial.avatar}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section
        ref={navigationRef}
        className={`py-24 border-t ${
          isDark
            ? "border-white/10 bg-gradient-to-b from-transparent to-black/20"
            : "border-gray-200 bg-gradient-to-b from-transparent to-gray-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={navigationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              {project.technologies?.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
