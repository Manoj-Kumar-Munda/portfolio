"use client";
import Image from "next/image";
import Container from "./container";
import profile from "../public/profile-new.png";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "About",
    href: "/about",
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <Container className="h-16">
      <motion.nav
        animate={{
          boxShadow: isScrolled ? "0 4px 2px -2px rgba(0,0,0,0.2)" : "none",
          width: isScrolled ? "60%" : "100%",
          y: isScrolled ? 10 : 0,
          transition: {
            duration: 0.3,
            ease: "linear",
          },
        }}
        className={cn(
          "fixed inset-x-0 top-0 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white px-3 py-2 dark:bg-neutral-900",
        )}
      >
        <Image
          src={profile}
          alt="Profile"
          width={100}
          height={100}
          className="size-10 rounded-full object-cover"
        />

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative px-2 py-1"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="hover-span"
                  className="dark:bg-neutal-800 absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                />
              )}
              <span className="relative z-10 text-sm">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
