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
        <h2 className="text-xl md:text-3xl font-normal">My featured work</h2>
        <Link
          to="/projects"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline transition"
        >
          View all
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b md:border-b-0 border-gray-200 dark:border-neutral-800 py-10">
        {featuredProjects.map((project, index) => (
          // Link to the individual project detail page
          <Link
            key={project.id ?? index}
            to={project.id ? `/project/${project.id}` : "#"}
            className="group block relative"
          >
            {/* Individual project card */}
            <article className="rounded-xl overflow-hidden transition-all duration-300 relative bg-white dark:bg-neutral-900 border border-transparent dark:border-neutral-800 shadow-sm hover:shadow-md flex flex-col h-full">
              {/* Project Image */}
              <div className="rounded-xl overflow-hidden relative">
                <img
                  src={project.imageUrl || ""}
                  alt={project.altText || "Image not available"}
                  className="w-full h-48 object-cover"
                />

                {/* Project Tag on Banner */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs backdrop-blur-sm px-3 py-1 rounded ${project.imageBrightness === 'dark'
                      ? 'bg-white/90 text-black'
                      : 'bg-black/80 text-white'
                      }`}
                  >
                    {project.tag || "Tag"}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 text-start bg-gray-50 dark:bg-neutral-900 flex flex-col flex-1">
                {/* Project Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:underline line-clamp-2 text-black dark:text-white">
                  {project.title || "Project Title"}
                </h3>

                {/* Project Description/Category */}
                <p className="text-sm text-gray-600 dark:text-gray-400 font-normal mb-3 line-clamp-3">
                  {project.category || "Category"}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center text-gray-900 dark:text-white mt-auto">
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;