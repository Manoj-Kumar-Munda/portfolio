"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Subheading from "./subheading";
import { IProjects } from "@/types";
import { projectList } from "@/constants";

const Projects = ({ projects = projectList }: { projects?: IProjects[] }) => {
  return (
    <>
      <Subheading as="p">I love building things.</Subheading>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: idx * 0.1,
            }}
            key={idx}
            className="group shrink-0 cursor-pointer rounded-lg border border-transparent p-2 transition-all duration-300 hover:border-neutral-300"
          >
            <Image
              src={project.src}
              alt={project.title}
              width={500}
              height={280}
              className="h-40 w-full rounded-xl border border-neutral-300 object-cover transition-all duration-300 group-hover:border-transparent"
            />
            <h2 className="text-primary mt-2 pl-1 text-sm font-semibold tracking-tight">
              {project.title}
            </h2>
            <p className="text-secondary pl-1 text-[10px]">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1 pl-1">
              {project.technologies?.slice(0, 3)?.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600"
                >
                  {tech}
                </span>
              ))}
              {project.technologies && project.technologies.length > 3 && (
                <span className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600">
                  ...
                </span>
              )}
            </div>
            <button className="text-primary mt-2 ml-1 flex cursor-pointer justify-end bg-neutral-200 rounded-md px-1.5 py-1 text-[10px]">
              Show More
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
