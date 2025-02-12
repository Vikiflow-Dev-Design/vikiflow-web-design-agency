import { PageHeader } from "@/components/page-header";
import { ProcessContent } from "@/app/services/components/process-content";
import { processSteps } from "@/lib/home-data";

// Generate static params for all process steps
export async function generateStaticParams() {
  return processSteps.map((step) => ({
    slug: step.slug,
  }));
}

interface ProcessPageProps {
  params: {
    slug: string;
  };
}

export default function ProcessPage({ params }: ProcessPageProps) {
  const currentIndex = processSteps.findIndex((s) => s.slug === params.slug);
  const step = processSteps[currentIndex];

  if (!step) {
    return (
      <div className="pt-16">
        <PageHeader
          title="Process Step Not Found"
          description="The process step you're looking for doesn't exist."
          isHomePage={false}
        />
      </div>
    );
  }

  const hasNext = currentIndex < processSteps.length - 1;
  const hasPrevious = currentIndex > 0;
  const nextSlug = hasNext ? processSteps[currentIndex + 1].slug : undefined;
  const previousSlug = hasPrevious
    ? processSteps[currentIndex - 1].slug
    : undefined;

  return (
    <div className="pt-16">
      <PageHeader
        title={step.title}
        description={step.description}
        isHomePage={false}
      />
      <ProcessContent
        step={step}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        nextSlug={nextSlug}
        previousSlug={previousSlug}
      />
    </div>
  );
}
