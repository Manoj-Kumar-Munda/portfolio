import ReactIcon from "@/app/assets/skills/react.svg";
import JavascriptIcon from "@/app/assets/skills/js.svg";
import TypescriptIcon from "@/app/assets/skills/typescript.svg";
import CssIcon from "@/app/assets/skills/css.svg";
import ExpressIcon from "@/app/assets/skills/express.svg";
import GithubIcon from "@/app/assets/skills/github.svg";
import NodeIcon from "@/app/assets/skills/node.svg";
import TailwindIcon from "@/app/assets/skills/tailwind.svg";
import NextIcon from "@/app/assets/skills/nextjs.svg";
import VitestIcon from "@/app/assets/skills/vitest.svg";
import { IconAi } from "@tabler/icons-react";
import MotionIcon from "@/app/assets/skills/motion.svg";
import ShadCNIcon from "@/app/assets/skills/shadcn.svg";
import TanstackQueryIcon from "@/app/assets/skills/tanstack_query.png";
import Image from "next/image";
export type TSkill =
  | "React"
  | "Javascript"
  | "Typescript"
  | "React-Native"
  | "CSS"
  | "Next"
  | "Vitest"
  | "Tailwind"
  | "Node"
  | "Github"
  | "Express"
  | "GenAI"
  | "Motion"
  | "ShadCN"
  | "Tanstack-Query";
export const IconMap: Record<TSkill, any> = {
  React: <ReactIcon />,
  Javascript: <JavascriptIcon />,
  Typescript: <TypescriptIcon />,
  "React-Native": <ReactIcon />,
  CSS: <CssIcon />,
  Next: <NextIcon />,
  Vitest: <VitestIcon />,
  Tailwind: <TailwindIcon />,
  Node: <NodeIcon />,
  Github: <GithubIcon />,
  Express: <ExpressIcon />,
  GenAI: <IconAi className="size-4" />,
  Motion: <MotionIcon />,
  ShadCN: <ShadCNIcon />,
  "Tanstack-Query": (
    <Image src={TanstackQueryIcon} alt="Tanstack Query" className="h-4 w-4" />
  ),
};

export const skills = Object.keys(IconMap) as TSkill[];
