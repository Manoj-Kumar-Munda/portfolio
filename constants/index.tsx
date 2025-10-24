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
    title: "Livedraft",
    description: "A live text editing platform for collaborative writing.",
    src: "/projects/livedraft.png",
    technologies: [
      "React",
      "Next",
      "Typescript",
      "Tailwind",
      "ShadCN",
      "ConvexDB",
      "Liveblocks",
      "Zod",
      "Zustand",
      "Tiptap",
    ],
    link: "https://livedraft.vercel.app/",
    github: "https://github.com/Manoj-Kumar-Munda/livedraft",
  },
  {
    title: "Watchway",
    description: "A platform for watching and sharing videos like youtube.",
    src: "/projects/watchway.png",
    technologies: [
      "React",
      "Next",
      "Javascript",
      "Tailwind",
      "ShadCN",
      "Redux",
      "Redux-toolkit",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "React-Query",
      "Cloudinary",
    ],
    link: "https://watchway.vercel.app/",
    github: "https://github.com/Manoj-Kumar-Munda/watchway-backend",
  },
  {
    title: "Cravebite",
    description: "A frontend food delivery application like Swiggy or Zomato.",
    src: "/projects/cravebite.png",
    technologies: [
      "React",
      "Javascript",
      "CSS",
      "Redux",
      "Redux-toolkit",
      "Tailwind CSS",
      "React-Router-DOM",
      "Motion",
    ],
    link: "https://cravebite.netlify.app/",
    github: "https://github.com/Manoj-Kumar-Munda/cravebite"
  },
  {
    title: "Foodtime",
    description: "A beautiful landing page for a restaurant.",
    src: "/projects/foodtime.png",
    technologies: [
      "React",
      "Javascript",
      "CSS",
      "Redux",
      "Redux-toolkit",
      "Tailwind CSS",
      "React-Router-DOM",
      "Motion",
    ],
    link: "https://fooodtime.netlify.app/",
    github: "https://github.com/Manoj-Kumar-Munda/foodtime"
  },
  {
    title: "PennyPlan",
    description:
      "A frontend personal finance management app to track expenses and budgets.",
    src: "/projects/pennyplan.png",
    technologies: [
      "React",
      "Javascript",
      "CSS",
      "Redux",
      "Redux-toolkit",
      "Tailwind CSS",
      "React-Router-DOM",
    ],
    link: "https://pennyplan.netlify.app/",
    github: "https://github.com/Manoj-Kumar-Munda/PennyPlan"
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
      "Tanstack-Query",
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
