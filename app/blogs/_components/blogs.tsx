"use client";
import { cn } from "@/lib/utils";
import { PostFrontmatter } from "@/types";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Blogs = ({
  className,
  posts = [],
}: {
  className?: string;
  posts: PostFrontmatter[];
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      {posts.map((post, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: idx * 0.05,
          }}
          key={idx}
        >
          <Link
            href={`/blogs/${post.slug}`}
            className="prose-img:m-0 prose-h2:m-0 flex cursor-pointer items-start justify-between gap-2 rounded-md p-4 no-underline transition-colors duration-300 hover:bg-neutral-100 border border-neutral-100"
            key={post.title}
          >
            <div className="flex max-w-xl flex-col justify-start gap-1">
              <h2 className="text-base font-bold">{post.title}</h2>
              <p className="line-clamp-3 text-xs text-neutral-500 md:text-sm">
                {post.description}
              </p>
            </div>

            {/* image */}
            <div className="shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                height={80}
                width={128}
                className="h-20 w-32 rounded object-cover"
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Blogs;
