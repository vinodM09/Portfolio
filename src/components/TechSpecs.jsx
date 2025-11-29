import React from "react";

const TechSpecs = ({ skills }) => {
  // Get the current pathname
  const pathname = window.location.pathname;

  // Determine the section title
  const title =
    pathname === "/" ||
    pathname === "/dashboard" ||
    pathname === "/dashboard#"
      ? "Skills & Tools"
      : "Tools & Technologies";

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 py-16">
      <div className="border-b border-gray-200 pb-10 md:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-normal text-start">{title}</h2>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="text-sm border px-3 py-1 rounded-full"
              style={{ opacity: "0.6" }}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;