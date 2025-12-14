// React and Router imports
import { useParams } from "react-router-dom";

// Data and component imports
import { blogs } from "../data/blogs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShareBar from "../components/ShareBar";

/**
 * BlogDetail Component
 * Displays the detailed view of a single blog post.
 */
const BlogDetail = () => {
  // Extracting the blog ID from the URL parameters
  const { id } = useParams();
  // Finding the blog post by ID from the imported blogs data
  // Finding the blog post by ID from the imported blogs data
  const blog = blogs.find((b) => b.id === id);

  // If blog is not found, display a message
  if (!blog) {
    return (
      <div className="max-w-5xl mx-auto px-6 mt-20 text-center text-gray-500">
        Blog not found
      </div>
    );
  }

  // Main layout of the blog detail page
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header component */}
      <Header />

      {/* Main content area for the blog */}
      <main className="max-w-5xl mx-auto md:px-6 pb-16">
        <article className="mt-16 px-4 md:px-0">
          {/* Publication and Author information */}
          <div className="text-sm text-gray-600 mb-4">
            <span className="font-medium">{blog.publication}</span>
            {blog.author && (
              <>
                <span className="mx-1">by</span>
                <span className="font-medium">{blog.author}</span>
              </>
            )}
          </div>

          {/* Blog Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {blog.title}
          </h1>

          {/* TLDR (Too Long; Didn't Read) summary */}
          {blog.tldr && (
            <p className="text-lg text-gray-700 mb-6 max-w-3xl">
              <span className="font-semibold">TL;DR:</span> {blog.tldr}
            </p>
          )}

          {/* Date and Read Time meta information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-10">
            <span>{blog.date}</span>|
            <span>{blog.readTime}</span>
          </div>

          {/* Social media share bar */}
          <ShareBar title={blog.title} />

          {/* Cover Image and its description */}
          {blog.coverImage && (
            <>
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="rounded-lg mb-4 bg-gray-700 m-w-3xl"
              />

              {blog.imageDescription && (
                <p className="text-sm italic text-center text-gray-500 mb-8 max-w-3xl mx-auto">
                  {blog.imageDescription}
                </p>
              )}
            </>
          )}

          {/* Section for rendering the main blog content */}
          <section className="md:max-w-3xl mx-auto md:px-0 py-12 font-serif">
            <div className="md:px-0">
              {/* Mapping through blog content blocks to render them dynamically */}
              {blog.content.map((block, index) => {
                // Render heading block
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-normal text-start mt-12 mb-6 text-gray-900"
                    >
                      {block.text}
                    </h2>
                  );
                }

                // Render paragraph block, potentially with an image
                if (block.type === "paragraph") {
                  return (
                    <div key={index} className="mb-6">
                      {block.image && (
                        <figure className="mb-4">
                          <img
                            src={block.image}
                            alt={block.caption || ""}
                            className="w-full rounded-lg"
                            loading="lazy"
                          />
                          {block.caption && (
                            <figcaption className="mt-2 text-sm text-gray-500 text-center">
                              {block.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}

                      <p className="text-gray-700 text-lg leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  );
                }

                // Render code block
                if (block.type === "code") {
                  return (
                    <pre
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8 overflow-x-auto text-sm"
                    >
                      <code className="text-gray-800">{block.code}</code>
                    </pre>
                  );
                }

                return null;
              })}
            </div>
          </section>
        </article>

        {/* Footer component */}
        <Footer />
      </main>
    </div>
  );
};

export default BlogDetail;