import React from "react";
import { getPostBySlug, listPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Heading from "@/components/heading";
import Subheading from "@/components/subheading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { frontmatter } = await getPostBySlug(slug);

    if (frontmatter?.title) {
      return {
        title: String(frontmatter.title) + " by Manoj",
        description: frontmatter.description || "A blog post by Manoj",
      };
    }
  } catch (err) {
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
      <article className="prose prose-img:mx-auto not-prose-h1:text-sm prose-headings:m-0 prose-h3:font-normal prose-h3:text-secondary w-full max-w-none">
        {frontmatter?.title && <Heading>{String(frontmatter.title)}</Heading>}
        {frontmatter?.description && (
          <Subheading>{String(frontmatter.description)}</Subheading>
        )}

        <section className="prose-headings:py-2 prose-p:text-secondary prose-code:bg-gray-200 px-4 [&_code::after]:content-none [&_code::before]:content-none [&_pre>code]:bg-inherit">
          {content}
        </section>
      </article>
    );
  } catch (err) {
    console.error(err);
    notFound();
  }
}

export async function generateStaticParams() {
  const slugs = await listPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
