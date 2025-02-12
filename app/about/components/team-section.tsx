"use client";

import { useInView } from "react-intersection-observer";
import { TeamMember } from "./team-member";
import { MotionDiv, fadeInUp } from "./motion-elements";
import { teamMembers } from "@/config/team";

export function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our dynamic team combines innovative thinking with technical
            expertise to deliver cutting-edge digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <MotionDiv
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <TeamMember
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                slug={member.slug}
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
