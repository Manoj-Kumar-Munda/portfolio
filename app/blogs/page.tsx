import { listPosts } from "@/lib/posts";
import { Link } from "next-view-transitions";

const AllBlogs = async () => {
  const posts = await listPosts();

  return (
    <div>
      <h1 className="text-primary text-2xl leading-1 font-bold tracking-tight md:text-4xl">
        All Blogs
      </h1>
      <p className="text-sm text-neutral-500">
        A collection of all blog posts written by me.
      </p>
      <div className="space-y-4 py-2">
        {posts.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            className="prose-img:m-0 prose-h2:m-0 flex cursor-pointer items-start justify-between gap-2 rounded p-2 no-underline hover:bg-neutral-100 md:p-4"
            key={post.title}
          >
            <div className="flex flex-col justify-start gap-1">
              <h2 className="text-base md:text-lg">{post.title}</h2>
              <p className="line-clamp-3 text-xs text-neutral-500 md:text-sm">
                {post.description}
              </p>
            </div>

            {/* image */}
            <div className="shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="h-20 w-32 rounded object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
