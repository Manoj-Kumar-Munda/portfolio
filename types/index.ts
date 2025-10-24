import { SocialPlatform } from "@/constants";
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
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}