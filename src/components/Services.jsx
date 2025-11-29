import React from "react";

const servicesData = [
  {
    title: "About me",
    description:
      "I’m a full-stack developer with a strong focus on backend architecture, problem-solving, and writing optimized, high-performance code. I specialize in building secure, scalable systems with efficient logic, smooth API integration, and seamless data handling. I also have experience leading development teams, guiding projects from planning to deployment while ensuring quality and speed. My goal is always to deliver fast, reliable, and well-structured solutions.",
  },
  {
    title: "Frontend Development",
    description:
      "I specialize in creating responsive and user-friendly front-end applications, focusing on clean, maintainable code and seamless user experiences. Whether it’s web apps or interactive interfaces, I ensure smooth performance, intuitive design, and perfect integration with backend systems.",
  },
  {
    title: "Backend Development",
    description:
      "I specialize in building robust and scalable backend systems, focusing on creating secure, high-performance server-side architectures. Whether it’s APIs, databases, or authentication, I ensure seamless functionality, efficient data handling, and smooth integration with front-end applications.",
  },
];

const ServicesOffered = () => {
  return (
    <section id="services" className="md:mt-24 max-w-7xl mx-auto px-4 sm:px-0">
      
      {/* Section Title */}
      <h2 className="text-3xl font-normal mb-12 text-start">Services I offer</h2>

      {/* Services List */}
      <div className="space-y-6 text-start">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="py-8 border-b border-gray-200" // Padding and the bottom divider line
          >
            {/* The content is laid out in a two-column grid (1/3 for title, 2/3 for description) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Service Title (Left Column) */}
              <h3 className="text-xl font-normal text-black pr-4">
                {service.title}
              </h3>

              {/* Service Description (Right Column) */}
              <p className="text-base text-gray-700 font-light md:col-span-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;