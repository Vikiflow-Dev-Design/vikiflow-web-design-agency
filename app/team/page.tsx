import { PageHeader } from "@/components/page-header";
import { TeamCard } from "@/app/team/components/team-card";
import { teamMembers } from "@/config/team";

export default function TeamPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Our Team"
        description="Meet the talented individuals who make our agency exceptional."
        isHomePage={false}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate
              about creating exceptional digital experiences. If you think you'd
              be a great fit for our team, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@vikiflow.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
