import Heading from "@/components/heading";
import Blogs from "./_components/blogs";
import Subheading from "@/components/subheading";

const AllBlogs = () => {
  return (
    <div>
      <Heading>All Blogs</Heading>
      <Subheading as="p">
        A collection of all blog posts written by me.
      </Subheading>

      <div className="space-y-4 py-2">
        <Blogs />
      </div>
    </div>
  );
};

export default AllBlogs;
