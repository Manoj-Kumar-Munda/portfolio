"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Subheading = ({
  as: Tag = "h3",
  children,
  className = "",
}: {
  as?: "p" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(3px)", y: 20 }}
      whileInView={{ filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
      }}
      className="px-4"
    >
      <Tag
        className={cn(
          "text-secondary max-w-lg pt-4 text-sm md:text-sm",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default Subheading;
