import { StaticImageData } from "next/image";

export interface TeamMemberType {
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  contact: string;
  expertise: string[];
  education: string;
}
