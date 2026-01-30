// React import
import React from "react";
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
    <section id="blogs" className="mt-10 max-w-7xl mx-auto px-4 md:px-0">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-3xl font-normal pb-4 md:pb-0">Technical Blogs</h2>
        <Link
          to="/blogs"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline transition pb-4 md:pb-0"
        >
          View all
        </Link>
      </div>

      {/* Blog List */}
      <div>
        {featuredBlogs.map((blog, index) => (
          <React.Fragment key={blog.id ?? index}>
            <Link
              to={blog.id ? `/blog/${blog.id}` : "#"}
              className="block"
            >
              <article className="flex items-center gap-6 py-4 md:py-8">
                {/* Left Content */}
                <div className="flex-1">
                  {/* Publication / Author */}


                  {/* Title */}
                  <h3 className="text-lg md:text-2xl leading-snug mb-2 hover:underline dark:text-white">
                    {blog.title || "Blog title"}
                  </h3>

                  {/* TLDR / Excerpt */}
                  <p className="text-gray-700 hidden md:block dark:text-gray-300 mb-4 line-clamp-2">
                    <span className="font-medium">TL;DR:</span>{" "}
                    {blog.tldr || "Short summary of what this blog is about."}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{blog.date || "Date"}</span>
                  </div>
                </div>

                {/* Right Image */}
                <div className="hidden sm:flex sm:w-[160px] md:w-[180px] h-[100px] sm:h-[120px] flex-shrink-0 bg-black rounded-xl">
                  <img
                    src={blog.coverImage || ""}
                    alt={blog.title || "Blog cover"}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </article>
            </Link>
            {/* Add HR between blogs, but not after the last one */}
            {index < featuredBlogs.length - 1 && (
              <hr className="hidden sm:block border-gray-200 dark:border-neutral-800" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;