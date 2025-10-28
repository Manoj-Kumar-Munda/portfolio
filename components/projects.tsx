"use client";

import { AnimatePresence, motion } from "motion/react";
import Subheading from "./subheading";
import { IProjects } from "@/types";
import { projectList } from "@/constants";
import useClickOutside from "@/hooks/useClickOutside";
import { useState } from "react";
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

  const modalRef = useClickOutside(handleClickOutside, !!activeProject);
  return (
    <>
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            // layoutId={`container-${activeProject.title}`}
            ref={modalRef}
            className="fixed inset-4 z-50 m-auto flex max-h-[70vh] flex-col gap-2 overflow-x-hidden overflow-y-auto rounded-lg bg-white p-3 sm:inset-0 sm:gap-4 sm:p-4 lg:max-w-2xl h-fit"
          >
            <motion.img
              src={activeProject.src}
              alt={activeProject.title}
              className="aspect-video max-h-[45vh] w-full shrink-0 overflow-hidden rounded-xl border border-neutral-300 object-cover"
            />

            <div className="flex w-full items-start justify-between px-2">
              <div className="flex flex-col">
                <h3 className="text-primary text-sm font-bold">
                  {activeProject.title}
                </h3>
                <p className="text-secondary text-xs">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex items-center sm:gap-2">
                <Link
                  href={activeProject.link ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live link"
                  className="rounded bg-white p-2 transition-colors duration-300 hover:bg-neutral-100"
                >
                  <LinkIcon className="size-3" />
                </Link>
                <Link
                  href={activeProject.github ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                  className="rounded bg-white p-2 transition-colors duration-300 hover:bg-neutral-100"
                >
                  <IconBrandGithub className="size-3" />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 pl-1">
              {activeProject.technologies?.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="rounded-md bg-neutral-100">
              {/* details */}

              <ul className="text-primary space-y-2 py-2 pl-5 sm:pl-6">
                {activeProject.details?.map((detail, idx) => (
                  <li
                    key={idx}
                    className="list-outside list-disc text-xs text-neutral-600"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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
      <motion.img
        src={project.src}
        alt={project.title}
        width={500}
        height={280}
        className="h-48 w-full rounded-xl border border-neutral-100 object-cover transition-all duration-300"
      />
      <motion.h2 className="text-primary mt-2 pl-1 text-sm font-semibold tracking-tight">
        {project.title}
      </motion.h2>
      <motion.p className="text-secondary pl-1 text-xs">
        {project.description}
      </motion.p>

      <button className="text-primary mt-2 ml-1 flex cursor-pointer justify-end rounded bg-neutral-100 px-1.5 py-1 text-xs hover:bg-neutral-200">
        View Details
      </button>
    </motion.div>
  );
};

export default Projects;
