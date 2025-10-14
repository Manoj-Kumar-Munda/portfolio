import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { PostFrontmatter } from "@/types/post";

export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");

  return {
    // frontmatter: data as PostFrontmatter,
    // mdxSource,
    rawContent: raw,
  };
}

// Small helper: list available posts (by filename without extension)
export async function listPostSlugs() {
  const dir = path.join(process.cwd(), "content");
  const files = await fs.readdir(dir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
