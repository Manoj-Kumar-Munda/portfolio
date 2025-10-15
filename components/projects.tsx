"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Subheading from "./subheading";

const projectList = [
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

const Projects = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <Subheading as="p">
        I love building projects that solve real-world problems and help people.
      </Subheading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projectList.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: idx * 0.1,
            }}
            key={idx}
            className="rounded-lg"
          >
            <Image
              src={project.src}
              alt={project.title}
              width={500}
              height={300}
              className="h-56 w-full rounded-xl object-cover"
            />
            <h2 className="mt-2 pl-1 text-lg font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="max-w-xs pl-1 text-xs text-gray-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
