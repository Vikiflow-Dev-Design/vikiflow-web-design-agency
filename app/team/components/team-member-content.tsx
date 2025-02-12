"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { TeamMemberType } from "@/types/team";

interface TeamMemberContentProps {
  member: TeamMemberType;
}

export function TeamMemberContent({ member }: TeamMemberContentProps) {
  return (
    <div className="pt-16">
      <PageHeader title={member.name} description={member.role} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Image and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground">{member.contact}</p>
            </div>
          </motion.div>

          {/* Right Column - Bio and Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Biography</h2>
              <div className="prose prose-slate max-w-none">
                {member.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-2 gap-4">
                {member.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-muted/50 rounded-lg p-4 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground">{member.education}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
