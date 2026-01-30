import React from "react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";


const Projects = () => {
  return (
    <main className="min-h-screen">

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-16 border-b border-gray-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 pb-10">
          {projects.map((project, index) => (
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

    </main>
  );
};

export default Projects;