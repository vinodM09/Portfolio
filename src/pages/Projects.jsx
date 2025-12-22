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
      <section className="max-w-5xl mx-auto px-6 pt-20">
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
        <p className="mt-4 text-center md:text-start text-gray-600 max-w-3xl">
        A showcase of my best work, featuring full stack web applications and IoT-powered real-time monitoring systems. Each project reflects hands-on experience, creativity, and a focus on impactful solutions.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-6 mt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-200 pb-10">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className="group block relative"
            >
              {/* Individual project card */}
            <article className="rounded-xl overflow-hidden transition-all duration-300 border relative bg-gray-100">
              {/* Project Image */}
              <div className="rounded-t-xl overflow-hidden relative">
                <img
                  src={project.imageUrl || ""}
                  alt={project.altText || "Image not available"}
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                {/* Overlay effect on hover */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center rounded-t-lg transition-all duration-500">
                  <span className="text-white font-semibold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Project Details
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 pt-4 text-start bg-gray-100">
                {/* Project Tag */}
                <button
                  className="text-xs border px-3 py-1 rounded-full mb-2"
                  style={{ opacity: "0.6" }}
                >
                  {project.tag || "Tag"}
                </button>

                {/* Project Title */}
                <div className="flex">
                  <h3 className="max-w-11/12 text-xl font-semibold mb-1 group-hover:underline line-clamp-2 min-h-[3.5rem]">
                    {project.title || "Project Title"}
                  </h3>
                  <span className="ml-auto text-gray-400 group-hover:text-gray-600 transition">
                    &#8599;
                  </span>
                </div>

                {/* Project Category */}
                <p className="text-sm text-gray-500 font-normal">
                  {project.category || "Category"}
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