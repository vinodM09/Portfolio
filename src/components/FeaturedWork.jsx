// React and React Router imports
import React from "react";
import { Link } from "react-router-dom";
// Data import for projects
import { projects } from "../data/projects";

/**
 * FeaturedWork Component
 * Displays a grid of the first 3 projects as a featured section.
 */
const FeaturedWork = () => {
  // If no projects are available, render nothing
  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  // Get the first 3 projects to be featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="mt-16 max-w-7xl mx-auto px-4 sm:px-0">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-normal">My featured work</h2>
        <Link
          to="/projects"
          className="text-sm text-gray-700 hover:text-black hover:underline transition"
        >
          View all
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-200 pb-10">
        {featuredProjects.map((project, index) => (
          // Link to the individual project detail page
          <Link
            key={project.id ?? index}
            to={project.id ? `/project/${project.id}` : "#"}
            className="group block relative"
          >
            {/* Individual project card */}
            <article className="bg-white rounded-xl overflow-hidden transition-all duration-300 border relative">
              {/* Project Image */}
              <div className="rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={project.imageUrl || ""}
                  alt={project.altText || "Image not available"}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* Overlay effect on hover */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center rounded-lg transition-all duration-500">
                  <span className="text-white font-semibold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Project Details
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 pt-0 text-center">
                {/* Project Tag */}
                <button
                  className="text-xs border px-3 py-1 rounded-full mb-2"
                  style={{ opacity: "0.6" }}
                >
                  {project.tag || "Tag"}
                </button>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-1 group-hover:underline line-clamp-2 min-h-[3.5rem]">
                  {project.title || "Project Title"}
                </h3>

                {/* Project Category */}
                <p className="text-sm text-gray-500 font-normal">
                  {project.category || "Category"}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;