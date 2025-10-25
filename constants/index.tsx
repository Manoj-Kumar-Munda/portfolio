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
    details: [
      "Developed a real-time collaborative editor supporting both individual and organizational workspaces, with seamless switching enabled via Clerk",
      "Implemented rich text editing, presence indicators, and shared cursors using TipTap and Liveblocks for a dynamic, interactive experience",
      "Built with Next.js, TypeScript, Tailwind CSS and ShadCN UI components.",
      "Integrated Clerk for robust authentication, session handling, and smooth workspace transitions between personal and organizational modes.",
      "Used Convex DB to handle real-time, reactive data workflows for synchronized document updates across users.",
    ],
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
      "Motion",
    ],
    link: "https://watchway.vercel.app/",
    github: "https://github.com/Manoj-Kumar-Munda/watchway-backend",
    details: [
      "Developed a responsive and intuitive user interface using React and Tailwind CSS and animations using motion.",
      "Implemented user authentication and authorization using JWT, ensuring secure access to user accounts and personalized content.",
      "Integrated Cloudinary for efficient media management, enabling seamless video uploads, storage, and streaming capabilities.",
      "Optimized application performance through effective state management with Redux and data fetching strategies using React Query.",
      "Deployed the backend on VPS and frontend on Vercel and setup domain with SSL for secure and reliable access.",
    ],
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
    github: "https://github.com/Manoj-Kumar-Munda/cravebite",
    details: [
      "Developed a dynamic and responsive food delivery frontend application using React, Vite, React-Router-DOM and Tailwind CSS.",
      "Implemented state management with Redux and Redux-toolkit.",
      "Implemented restaurant search, food item filtering, and a user-friendly cart system to enhance the overall user experience.",
    ],
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
    github: "https://github.com/Manoj-Kumar-Munda/foodtime",
    details: [
      "Designed and developed a visually appealing landing page for a restaurant using React and Tailwind CSS.",
      "Implemented smooth animations and transitions using Framer Motion to enhance user engagement.",
      "Ensured responsiveness across various devices for optimal user experience.",
    ],
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
    role: "SWE-Frontend",
    location: "UK (Remote)",
    duration: "Jul 2024 - Jul 2025",
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
