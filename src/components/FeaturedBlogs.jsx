// React Router for navigation
import { Link } from "react-router-dom";
// Data import for blogs
import { blogs } from "../data/blogs";

/**
 * FeaturedBlogs Component
 * Displays a list of the first 3 blog posts as a featured section.
 */
const FeaturedBlogs = () => {
  // If no blogs are available, render nothing
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return null;
  }

  // Get the first 3 blogs to be featured
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section id="blogs" className="mt-16 max-w-7xl mx-auto px-4 md:px-0">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-normal">Technical Blogs</h2>
        <Link
          to="/blogs"
          className="text-sm text-gray-700 hover:text-black hover:underline transition"
        >
          View all
        </Link>
      </div>

      {/* Blog List */}
      <div className="border-b border-gray-200">
        {featuredBlogs.map((blog, index) => (
          <Link
            key={blog.id ?? index}
            to={blog.id ? `/blog/${blog.id}` : "#"}
            className="block"
          >
            <article
              className={`flex items-center gap-6 py-8 ${
                index !== 0 ? "border-t border-gray-200" : ""
              }`}
            >
              {/* Left Content */}
              <div className="flex-1">
                {/* Publication / Author */}
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">{blog.publication}</span>
                  {blog.author && (
                    <>
                      <span className="mx-1">by</span>
                      <span className="font-medium">{blog.author}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold leading-snug mb-2 hover:underline">
                  {blog.title || "Blog title"}
                </h3>

                {/* TLDR / Excerpt */}
                <p className="text-gray-700 mb-4 line-clamp-2">
                  <span className="font-medium">TL;DR:</span>{" "}
                  {blog.tldr || "Short summary of what this blog is about."}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{blog.date || "Date"}</span>
                  {/* <span>👏 {blog.claps ?? 0}</span>
                  <span>💬 {blog.comments ?? 0}</span> */}
                </div>
              </div>

              {/* Right Image */}
              <div className="w-1/4 sm:w-[160px] md:w-[180px] h-[100px] sm:h-[120px] flex-shrink-0 flex bg-black rounded-xl">
                <img
                  src={blog.coverImage || ""}
                  alt={blog.title || "Blog cover"}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;