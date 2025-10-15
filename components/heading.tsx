"use client";
import React from "react";
import { motion } from "motion/react";

const Heading = ({
  as: Tag = "h2",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(3px)", y: 8 }}
      whileInView={{ filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        damping:12
      }}
    >
      <Tag className="text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl">
        {children}
      </Tag>
    </motion.div>
  );
};

export default Heading;
