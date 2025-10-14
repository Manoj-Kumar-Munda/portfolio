import { PostFrontmatter } from "@/types/post";
import fs from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");

  const { frontmatter, content } = await compileMDXFile(raw);

  return {
    frontmatter,
    content,
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

export const compileMDXFile = async (rawContent: string) => {
  return await compileMDX<PostFrontmatter>({
    source: `${rawContent}`,
    options: { parseFrontmatter: true },
  });
};

export async function listPosts() {
  const slugs = await listPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostBySlug(slug);

      return frontmatter;
    }),
  );

  return posts;
}
