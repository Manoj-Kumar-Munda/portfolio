"use client";
import React from "react";
import Container from "./container";
import Subheading from "./subheading";
import { motion } from "motion/react";
import { IconMap, skills } from "@/constants/skills";

const Skills = () => {
  return (
    <Container>
      <Subheading>Technologies I work with</Subheading>
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-4">
        {skills?.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ y: 20, filter: "blur(3px)", opacity: 0 }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "var(--shadow-lg)",
              transition: {
                duration: 0.2,
              },
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.08,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
            className="relative z-10 flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2"
          >
            {IconMap[item]}
            <span className="text-xs">{item}</span>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
