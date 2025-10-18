import Heading from "@/components/heading";
import Blogs from "./_components/blogs";
import Subheading from "@/components/subheading";
import Separator from "@/components/separator";

const AllBlogs = () => {
  return (
    <div>
      <Heading>All Blogs</Heading>
      <Subheading as="p">
        A collection of all blog posts written by me.
      </Subheading>
      <Separator />
      <div className="space-y-4 py-2 px-2">
        <Blogs />
      </div>
      <Separator />
    </div>
  );
};

export default AllBlogs;
