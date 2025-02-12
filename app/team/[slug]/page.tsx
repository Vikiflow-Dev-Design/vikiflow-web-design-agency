import { PageHeader } from "@/components/page-header";
import { TeamMemberContent } from "@/app/team/components/team-member-content";
import { teamMembers } from "@/config/team";

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return (
      <div className="pt-16">
        <PageHeader
          title="Team Member Not Found"
          description="The team member you're looking for doesn't exist."
          isHomePage={false}
        />
      </div>
    );
  }

  return <TeamMemberContent member={member} />;
}
