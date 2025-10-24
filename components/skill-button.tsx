"use client";
import { IconMap, TSkill } from "@/constants/skills";
import { motion } from "motion/react";

const SkillButton = ({ skill, idx }: { skill: TSkill; idx: number }) => {
  return (
    <motion.div
      role="button"
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
      {IconMap[skill]}
      <span className="text-xs">{skill}</span>
    </motion.div>
  );
};

export default SkillButton;
