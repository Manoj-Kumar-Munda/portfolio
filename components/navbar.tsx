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
import {
  AboutIcon,
  ProjectsIcon,
  BlogsIcon,
  ExternalLinkIcon,
  ResumeIcon,
} from "./nav-icons";

const navItems = [
  {
    title: "About",
    href: "/",
    icon: AboutIcon,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: ProjectsIcon,
  },
  // {
  //   title: "Contact",
  //   href: "/contact",
  // },
  {
    title: "Blogs",
    href: "/blogs",
    icon: BlogsIcon,
  },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/104yZLHboaLE8a7Z3CI11-zKK9NY9ndqo/view?usp=drive_link",
    isExternalLink: true,
    icon: ResumeIcon,
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
    <>
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
        <Link href={"/"} className="shrink-0">
          <Image
            src={profile}
            alt="Profile"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
        </Link>

        <div className="hidden sm:flex sm:items-center">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isExternalLink = item.href.startsWith("http");
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn("relative px-2 py-1", {
                  "text-neutral-400": pathname === item.href,
                })}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="hover-span"
                    className="dark:bg-neutal-800 absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 text-xs">
                  {Icon && <Icon size={14} />}
                  {item.title}
                  {isExternalLink && <ExternalLinkIcon size={12} />}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
      {/* floating dock bottom nav for mobile */}
      <div className="fixed bottom-4 z-50 mx-auto flex w-full justify-center sm:hidden">
        <div className="flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.2)] px-4 py-1 backdrop-blur">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isExternalLink = item.href.startsWith("http");
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn("relative px-2 py-1", {
                  "text-neutral-400": pathname === item.href,
                })}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
              >
                <span className="relative z-10 flex flex-col items-center gap-1 text-xs">
                  {Icon && <Icon size={20} />}
                  <span className="text-[10px] font-medium">{item.title}</span>
                  {/* {isExternalLink && <ExternalLinkIcon size={12} />} */}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
