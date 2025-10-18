"use client";
import Image from "next/image";
import profile from "../public/profile-new.png";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Container from "./container";

const navItems = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
];
const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.8, 0.5]);
  const blur = useTransform(scrollY, [0, 100], [0, 3]);
  const pathname = usePathname();

  const backgroundOpacity = useMotionTemplate`rgba(255, 255, 255, ${opacity})`;
  const blurStyle = useMotionTemplate`blur(${blur}px)`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
  
      <motion.nav
        style={{
          backdropFilter: blurStyle,
          background: backgroundOpacity,
        }}
        animate={{
          width: isScrolled ? "80%" : "100%",
          y: isScrolled ? 8 : 0,
          border: isScrolled ? "1px solid rgba(200,200,200,0.2)" : "none",
          borderRadius: isScrolled ? "999px" : "0",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "sticky inset-x-2 top-1 z-20 mx-auto flex max-w-4xl items-center justify-between rounded-full px-2 py-1 dark:bg-neutral-900",
        )}
      >
        <Link href={"/"}>
          <Image
            src={profile}
            alt="Profile"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
        </Link>

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn("relative px-2 py-1", {
                "text-neutral-400": pathname === item.href,
              })}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="hover-span"
                  className="dark:bg-neutal-800 absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                />
              )}
              <span className="relative z-10 text-xs">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    
  );
};

export default Navbar;
