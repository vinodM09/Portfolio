import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechSpecs from "../components/TechSpecs";
import ContactMe from "../components/ContactMe";
import RelatedBlogs from "../components/RelatedBlogs";

const ProjectDetail = () => {
  const { id } = useParams();

  // Find project from dataset
  const project = projects.find((p) => p.id === id);

  // Redirect if project not found
  if (!project) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content with Dashboard width */}
      <main className="max-w-5xl mx-auto md:px-6 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Left: Title */}
            <div className="text-left flex flex-col justify-center max-w-xl">
              <h2 className="text-4xl md:text-5xl mb-4">{project.title || "No Title"}</h2>
              <p>{project.overview || "No overview available."}</p>
            </div>

            {/* Separator line */}
            <div className="hidden md:block w-px bg-gray-400 opacity-30 h-32"></div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 flex flex-col md:items-end md:text-end md:pl-6 space-y-4">
              <p>
                <span className="font-semibold">Client</span>
                <span className="block mb-2 text-gray-600">{project.client || "Not specified"}</span>
                <span className="font-semibold">Year</span>
                <span className="block mb-2 text-gray-600">{project.year || "Not specified"}</span>
                <span className="font-semibold">Scope</span>
                <span className="block mb-2 text-gray-600">{project.scope || "Not specified"}</span>
              </p>
              <div className="flex space-x-2">
                {project.liveLink && project.liveLink !== "" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border px-3 py-1 rounded-full opacity-60"
                  >
                    View Live Project
                  </a>
                )}
                {project.githubRepoLink && project.githubRepoLink !== "" && (
                  <a
                    href={project.githubRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border px-3 py-1 rounded-full opacity-60"
                  >
                    GitHub Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="md:px-0">
            <h2 className="text-3xl font-normal text-start">Gallery</h2>
            {project.gallery && project.gallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-6">
                {project.gallery.map((img, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 mb-10 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 mt-4">No gallery available.</p>
            )}
            {project.gallery && project.gallery.length > 0 && (
              <p className="italic text-sm">
                *These are just glimpses of the project.{" "}
                {project.liveLink && project.liveLink !== "" ? (
                  <>
                    Check out the{" "}
                    <a
                      href={`${project.liveLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 underline hover:text-red-300"
                    >
                      live project
                    </a>{" "}
                    to explore the full version.
                  </>
                ) : (
                  "The live link will be available soon."
                )}
              </p>
            )}
          </div>
        </section>


        {/* Tech Stack Section */}
        <TechSpecs skills={project.techStack || []} />

        {/* Solution Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-0 pt-10">
          <div className="border-b border-gray-200 pb-6 md:px-0">
            <h2 className="text-3xl font-normal text-start mb-4">The Solution</h2>
            <div className="text-gray-700 mb-4">
              {(project.description || "").split("\n\n").map((para, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {para.split("\n").map((line, i) =>
                    line.startsWith("•") ? (
                      <span key={i} className="block ml-6">{line}</span>
                    ) : (
                      <span key={i}>{line}</span>
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Related Blogs Section */}
        <RelatedBlogs projectId={project.id} />

        {/* Footer */}
        <ContactMe />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ProjectDetail;