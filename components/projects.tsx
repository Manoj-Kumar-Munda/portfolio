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
      <div className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: idx * 0.1,
            }}
            key={idx}
            className="shrink-0 rounded-lg"
          >
            <Image
              src={project.src}
              alt={project.title}
              width={500}
              height={280}
              className="w-full rounded-xl object-cover"
            />
            <h2 className="mt-2 pl-1 text-sm font-semibold tracking-tight text-neutral-600 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="pl-1 text-xs text-gray-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
