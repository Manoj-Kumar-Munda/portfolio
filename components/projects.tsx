"use client";

import { motion } from "motion/react";
import Subheading from "./subheading";
import { IProjects } from "@/types";
import { projectList } from "@/constants";
import useClickOutside from "@/hooks/useClickOutside";
import { useState } from "react";
import { Image } from "@imagekit/next";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const Projects = ({ projects = projectList }: { projects?: IProjects[] }) => {
  const [activeProject, setActiveProject] = useState<IProjects | null>(null);

  const handleClickOutside = () => {
    setActiveProject(null);
  };
  const handleProjectClick = (project: IProjects) => {
    setActiveProject(project);
  };

  return (
    <>
      <Subheading as="p">I love building things.</Subheading>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <Project
            key={idx}
            project={project}
            idx={idx}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </>
  );
};

const Project = ({
  project,
  idx,
  onClick,
}: {
  project: IProjects;
  idx: number;
  onClick: (project: IProjects) => void;
}) => {
  return (
    <motion.div
      onClick={() => onClick(project)}
      initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: idx * 0.08,
      }}
      key={idx}
      className="group cursor-pointer rounded-lg"
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-100">
        <Image
          urlEndpoint="https://ik.imagekit.io/oviqvqhir"
          src={project.src}
          alt={project.title}
          width={400}
          height={144}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </div>
      <motion.h2 className="text-primary mt-2 pl-1 text-sm font-semibold tracking-tight">
        {project.title}
      </motion.h2>
      <motion.p className="text-secondary pl-1 text-xs">
        {project.description}
      </motion.p>

      <div className="flex items-center gap-1">
        <Link
          href={project.link ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          title="Live link"
          className="rounded bg-white p-2 transition-colors duration-300 hover:bg-neutral-100"
        >
          <LinkIcon className="size-3" />
        </Link>
        <Link
          href={project.github ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="rounded bg-white p-2 transition-colors duration-300 hover:bg-neutral-100"
        >
          <IconBrandGithub className="size-3" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
