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
      return { title: String(frontmatter.title) };
    }
  } catch (err) {
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
