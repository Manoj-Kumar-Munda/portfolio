import { type Experience, type IProjects } from "@/types";
import FutyLogo from "@/app/assets/futy.jpeg";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export enum SocialPlatform {
  LINKEDIN = "linkedin",
  GITHUB = "github",
  TWITTER = "twitter",
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
}

export const SocialPlatformIcons = (
  platform: SocialPlatform,
  className: string,
) => {
  switch (platform) {
    case SocialPlatform.LINKEDIN:
      return <IconBrandLinkedin className={className} />;

    case SocialPlatform.GITHUB:
      return <IconBrandLinkedin className={className} />;

    case SocialPlatform.TWITTER:
      return <IconBrandTwitter className={className} />;

    case SocialPlatform.FACEBOOK:
      return <IconBrandFacebook className={className} />;

    case SocialPlatform.INSTAGRAM:
      return <IconBrandInstagram className={className} />;

    default:
      return null;
  }
};

export const projectList: IProjects[] = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    src: "/project-1.png",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    src: "/project-2.png",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    src: "/project-3.png",
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    src: "/project-4.png",
  },
];

export const ExperienceList: Experience[] = [
  {
    company: {
      name: "Futy",
      socials: [
        {
          platform: SocialPlatform.LINKEDIN,
          url: "https://www.linkedin.com/company/futyyyuk/about/",
        },
      ],
      logo: FutyLogo,
    },
    role: "Software Engineer-Frontend",
    location: "UK (Remote)",
    duration: "July 2024 - July 2025",
    technologies: [
      "React",
      "Typescript",
      "Tailwind",
      "Next",
      "React-Native",
      "Motion",
      "ShadCN",
      "Tanstack-Query"
    ],

    responsibilities: [
      "Collaborated with cross-functional teams including designers and backend developers to implement user-friendly features and ensure seamless integration with APIs.",
      "Engineered a scalable Telegram mini-game platform supporting fantasy and quiz game modes, leveraging React, TypeScript, React Query and Tailwind CSS with ShadCN UI for consistent design system.",
      "Implemented modular CMS panels for diverse game types using Formik and Yup, driving efficient admin workflows for real-time quiz management, match configuration, and dynamic content editing.",
      "Built an interactive analytics dashboard with Recharts and TanStack Table, enabling data-driven insights through visualization of user engagement KPIs.",
      "Improved FUTY’s landing page by implementing responsiveness and integrating Framer Motion animations to enhance user experience.",
      "Contributed to UI development of the FUTY mobile app using React Native, with a focus on component reusability, performance optimization, and consistent cross-platform interface design",
    ],
  },
];
