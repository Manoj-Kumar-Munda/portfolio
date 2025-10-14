import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPostBySlug, listPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log({ slug });

  try {
    const { rawContent } = await getPostBySlug(slug);

    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: `${rawContent}`,
      options: { parseFrontmatter: true },
    });

    return (
      <article>
        {frontmatter?.title && (
          <h1 className="mb-4 text-3xl font-bold">
            {String(frontmatter.title)}
          </h1>
        )}

        {content}
      </article>
    );
  } catch (err) {
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = await listPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
