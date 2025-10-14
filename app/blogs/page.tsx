import Blogs from "./_components/blogs";

const AllBlogs =() => {

  return (
    <div>
      <h1 className="text-primary text-2xl leading-1 font-bold tracking-tight md:text-4xl">
        All Blogs
      </h1>
      <p className="text-sm text-neutral-500">
        A collection of all blog posts written by me.
      </p>

      <div className="space-y-4 py-2">
        <Blogs />
      </div>
    </div>
  );
};

export default AllBlogs;
