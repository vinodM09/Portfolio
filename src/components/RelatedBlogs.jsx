// React import
import React from "react";
// React Router for navigation
import { Link } from "react-router-dom";
// Data import for blogs
import { blogs } from "../data/blogs";

/**
 * RelatedBlogs Component
 * Displays blogs related to a specific project
 * @param {string} projectId - The project ID to find related blogs for
 */
const RelatedBlogs = ({ projectId }) => {
    // Filter blogs that have this project as their relatedProject
    const relatedBlogs = blogs.filter(
        (blog) => blog.relatedProject?.id === projectId
    );

    // If no related blogs found, don't render anything
    if (relatedBlogs.length === 0) {
        return null;
    }

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-0 pt-10">
            <div className="border-b border-gray-200 pb-10">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-normal">Related Blogs</h2>
                    <Link
                        to="/blogs"
                        className="text-sm text-gray-700 hover:text-black hover:underline transition"
                    >
                        View all
                    </Link>
                </div>

                {/* Blog List */}
                <div>
                    {relatedBlogs.map((blog, index) => (
                        <React.Fragment key={blog.id ?? index}>
                            <Link
                                to={blog.id ? `/blog/${blog.id}` : "#"}
                                className="block"
                            >
                                <article className="flex items-center gap-6 py-8">
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
                            {/* Add HR between blogs, but not after the last one */}
                            {index < relatedBlogs.length - 1 && (
                                <hr className="border-gray-200" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedBlogs;
