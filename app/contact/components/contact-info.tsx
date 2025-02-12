"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { MotionA } from "./motion-elements";

interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  content: string;
  link: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    content: "vikiflowdesign@gmail.com",
    link: "mailto:vikiflowdesign@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    content: "+234 912 736 2006",
    link: "tel:+2349127362006",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Address",
    content: "Lugbe, Abuja(F.C.T), Nigeria",
    link: "https://maps.google.com",
  },
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contactInfo.map((item, index) => (
        <MotionA
          key={item.title}
          href={item.link}
          target={item.title === "Address" ? "_blank" : undefined}
          rel={item.title === "Address" ? "noopener noreferrer" : undefined}
          className={cn(
            "group p-6 rounded-xl border bg-card text-card-foreground shadow-sm",
            "hover:shadow-md hover:scale-105 transition-all duration-200"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="space-y-4">
            <div className="bg-primary/10 p-3 rounded-lg w-fit">
              <div className="text-primary">{item.icon}</div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          </div>
        </MotionA>
      ))}
    </div>
  );
}
