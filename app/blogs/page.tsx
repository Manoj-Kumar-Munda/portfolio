import Heading from "@/components/heading";
import Blogs from "./_components/blogs";
import Subheading from "@/components/subheading";
import Separator from "@/components/separator";
import { listPosts } from "@/lib/posts";

const AllBlogs = async () => {
  const posts = await listPosts();
  return (
    <div>
      <Heading>All Blogs</Heading>
      <Subheading as="p">
        A collection of all blog posts written by me.
      </Subheading>
      <Separator />
      <div className="space-y-4 px-4 py-4">
        <Blogs posts={posts} />
      </div>
    </div>
  );
};

export default AllBlogs;
