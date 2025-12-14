import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import Header from "../components/Header";

const Projects = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Header Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-0 pt-20 pb-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-semibold mb-4 md:mb-0">
            My Featured Projects
          </h1>
          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-black hover:underline transition"
          >
            ← Back to Home
          </Link>
        </div>
        <p className="mt-4 text-gray-600 max-w-3xl">
        A showcase of my best work, featuring full stack web applications and IoT-powered real-time monitoring systems. Each project reflects hands-on experience, creativity, and a focus on impactful solutions.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-0 mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-200 pb-10">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className="group block relative"
            >
              <article className="bg-white rounded-xl overflow-hidden transition-all duration-300 border relative">
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={project.imageUrl || ''}
                    alt={project.altText || 'Image not available'}
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center rounded-lg transition-all duration-500">
                    <span className="text-white font-semibold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Project Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-0 text-center">
                  <button
                    className="text-xs border px-3 py-1 rounded-full mb-2"
                    style={{ opacity: "0.6" }}
                  >
                    {project.tag || 'Tag'}
                  </button>

                  <h3 className="text-xl font-semibold mb-1 group-hover:underline">
                    {project.title || 'Project Title'}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                    {project.category || 'Category'}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <Footer/>
      </section>

    </main>
  );
};

export default Projects;