import { services } from "@/lib/services-data";
import { ServiceContent } from "@/app/services/components/service-content";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Helper function to generate consistent slugs
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and") // Replace & with 'and'
    .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric character with a dash
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
}

// This function pre-generates all possible service routes at build time
export async function generateStaticParams() {
  // Generate all possible variations of slugs
  const serviceRoutes = services.flatMap((service) => {
    const slugs = new Set<string>();

    // Add the predefined slug if it exists
    if (service.slug) {
      slugs.add(service.slug);
    }

    // Add the generated slug
    slugs.add(generateSlug(service.title));

    // Add a variation with '&' replaced by 'and'
    if (service.title.includes("&")) {
      slugs.add(
        service.title
          .replace("&", "and")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }

    // Add a variation with '&' replaced by '-and-'
    if (service.title.includes("&")) {
      slugs.add(
        service.title
          .replace("&", "-and-")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }

    // Convert Set to array of slug objects
    return Array.from(slugs).map((slug) => ({ slug }));
  });

  return serviceRoutes;
}

export default function ServicePage({ params }: ServicePageProps) {
  // Find the service using multiple slug variations
  const service = services.find((s) => {
    const possibleSlugs = new Set<string>();

    // Add the predefined slug
    if (s.slug) {
      possibleSlugs.add(s.slug);
    }

    // Add the generated slug
    possibleSlugs.add(generateSlug(s.title));

    // Add variations for titles with '&'
    if (s.title.includes("&")) {
      possibleSlugs.add(generateSlug(s.title.replace("&", "and")));
      possibleSlugs.add(generateSlug(s.title.replace("&", "-and-")));
    }

    return possibleSlugs.has(params.slug);
  });

  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}
