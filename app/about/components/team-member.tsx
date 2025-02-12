"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  slug: string;
}

export function TeamMember({ name, role, image, bio, slug }: TeamMemberProps) {
  const [ref, inView] = useInView({ triggerOnce: true });

  // Get the first paragraph or first three sentences, whichever is shorter
  const shortBio = bio.split("\n\n")[0].split(". ").slice(0, 3).join(". ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="group cursor-pointer"
    >
      <Link href={`/team/${slug}`}>
        <Card className="overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-primary mb-3">{role}</p>
            <p className="text-muted-foreground line-clamp-3">{shortBio}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
