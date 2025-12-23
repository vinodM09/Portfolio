// React Router for navigation
import { Link } from "react-router-dom";

// Data and component imports
import { blogs } from "../data/blogs";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Blogs Component
 * Displays a list of blog posts.
 */
const Blogs = () => {
  // If no blogs are available or the blogs data is not an array, render nothing.
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return null;
  }

  // Main structure of the Blogs page
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header component */}
      <Header />

      {/* Main content area for blog listings */}
      <main className="max-w-5xl mx-auto px-6 pb-16 border-b border-gray-200">
        {/* Section displaying the list of blog posts */}
        <section className="pb-10">
          {blogs.map((blog, index) => (
            // Link to the individual blog post detail page
            <Link
              key={blog.id ?? index}
              to={blog.id ? `/blog/${blog.id}` : "#"}
              className="block"
            >
              {/* Individual blog post article */}
              <article
                className={`flex items-center gap-6 py-8 ${index !== 0 ? "border-t border-gray-200" : ""
                  }`}
              >
                {/* Left content area of the blog card (text details) */}
                <div className="flex-1">
                  {/* Publication and Author details */}
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">{blog.publication}</span>
                    {blog.author && (
                      <>
                        <span className="mx-1">by</span>
                        <span className="font-medium">{blog.author}</span>
                      </>
                    )}
                  </div>

                  {/* Blog Title */}
                  <h2 className="text-2xl font-semibold leading-snug mb-2">
                    {blog.title}
                  </h2>

                  {/* TLDR or Excerpt of the blog post */}
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    <span className="font-medium">TL;DR:</span>{" "}
                    {blog.tldr}
                  </p>

                  {/* Blog Post Date */}
                  <div className="text-sm text-gray-500">
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Right content area of the blog card (cover image) */}
                <div className="w-1/4 sm:w-[160px] md:w-[180px] h-[100px] sm:h-[120px] flex-shrink-0">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-md bg-black"
                  />
                </div>
              </article>
            </Link>
          ))}
        </section>

      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Blogs;