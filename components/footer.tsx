import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="sticky inset-x-0 bottom-0 flex items-center justify-between border-t border-neutral-200 bg-white p-4 z-10 ">
      <span className="text-secondary text-xs">Built with love by Manoj</span>
      <div className="flex items-center gap-4">
        <Link href={"https://github.com/Manoj-Kumar-Munda"}>
          <IconBrandGithub className="size-4 cursor-pointer text-neutral-400 transition-colors duration-300 hover:text-neutral-600" />
        </Link>
        <Link href={"https://x.com/manojdev99"}>
          <IconBrandX className="size-4 cursor-pointer text-neutral-400 transition-colors duration-300 hover:text-neutral-600" />
        </Link>
        <Link href={"https://www.linkedin.com/in/manojkumarmunda"}>
          <IconBrandLinkedin className="size-4 cursor-pointer text-neutral-400 transition-colors duration-300 hover:text-neutral-600" />
        </Link>
        <Link href={"https://medium.com/@manoj.munda"}>
          <IconBrandMedium className="size-4 cursor-pointer text-neutral-400 transition-colors duration-300 hover:text-neutral-600" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
