import { SocialPlatform } from "@/constants";
import { type TSkill } from "@/constants/skills";
import { StaticImageData } from "next/image";

export interface PostFrontmatter {
  title: string;
  slug: string;
  date?: string;
  description: string;
  tags?: string[];
  image: string;
}

export interface IProjects {
  title: string;
  description: string;
  src: string;
  technologies?: (TSkill | string)[];
  link?: string;
  github?: string;
}

export interface Experience {
  company: {
    name: string;
    socials: {
      platform: SocialPlatform;
      url: string;
    }[];
    logo: StaticImageData;
  };
  technologies: TSkill[];
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}
