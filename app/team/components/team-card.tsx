"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { TeamMember } from "@/config/team";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/team/${member.slug}`} className="block">
        <div className="group relative overflow-hidden rounded-xl bg-background shadow-lg">
          {/* Image Container */}
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {member.bio.split('\n\n')[0]}
            </p>

            {/* Social Links */}
            {member.socialLinks && (
              <div className="flex gap-4">
                {member.socialLinks.twitter && (
                  <Link
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                )}
                {member.socialLinks.linkedin && (
                  <Link
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                )}
                {member.socialLinks.github && (
                  <Link
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
