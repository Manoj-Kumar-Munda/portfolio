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
        transition: {
            delay: idx * 0.08,
            damping: 10
        }
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "var(--shadow-lg)",
        transition: {
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
      }}
      className="border-secondary relative z-10 flex items-center gap-2 rounded-md border border-dashed bg-white px-2 py-1.5"
    >
      {IconMap[skill]}
      <span className="text-primary text-[10px] font-bold">{skill}</span>
    </motion.div>
  );
};

export default SkillButton;
