"use client";
import Image from "next/image";
import Container from "./container";
import profile from "../public/profile-new.png";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      href: "/blog",
    },
  ];
  return (
    <Container>
      <nav className="flex items-center justify-between border-b border-gray-300 p-2">
        <Image
          src={profile}
          alt="Profile"
          width={100}
          height={100}
          className="size-12 rounded-full object-cover"
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
      </nav>
    </Container>
  );
};

export default Navbar;
