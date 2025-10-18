import { listPosts } from "@/lib/posts";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Blogs = async ({ className }: { className?: string }) => {
  const posts = await listPosts();
  return (
    <div className={className}>
      {posts.map((post) => (
        <Link
          href={`/blogs/${post.slug}`}
          className="prose-img:m-0 prose-h2:m-0 flex cursor-pointer items-start justify-between gap-2 rounded-md p-2 no-underline hover:bg-neutral-50"
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
      ))}
    </div>
  );
};

export default Blogs;
