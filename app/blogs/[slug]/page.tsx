import React from "react";
import { getPostBySlug, listPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  try {
    const { frontmatter } = await getPostBySlug(slug);

    if (frontmatter?.title) {
      return {
        title: String(frontmatter.title) + " by Manoj",
        description: frontmatter.description || "A blog post by Manoj",
      };
    }
  } catch (err: any) {
    console.error(err);
    return { title: "Post Not Found" };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { content, frontmatter } = await getPostBySlug(slug);

    return (
      <article className="prose prose-img:mx-auto not-prose-h1:text-sm w-full max-w-none">
        {frontmatter?.title && (
          <h1 className="mb-4 text-3xl font-bold">
            {String(frontmatter.title)}
          </h1>
        )}

        {content}
      </article>
    );
  } catch (err) {
    console.error(err)
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = await listPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
