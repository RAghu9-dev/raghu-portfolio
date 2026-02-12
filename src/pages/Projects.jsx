import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "ATM Simulator Bank Management System",
      description: "A comprehensive desktop banking application featuring secure user authentication, transaction management, balance inquiries, and account operations. Built with Java Swing for an intuitive GUI experience.",
      image: "/ATM.png",
      technologies: ["Java", "Swing", "MySQL", "JDBC"],
      github: "https://github.com/tatrasiamar",
      demo: null,
      type: "Academic Project"
    },
    {
      title: "Weather Application",
      description: "Real-time weather dashboard that provides current weather conditions, forecasts, and meteorological data. Features location-based search and responsive design for seamless cross-device experience.",
      image: "/weather_Image.jpg",
      technologies: ["React.js", "Weather API", "CSS3", "JavaScript"],
      github: "https://github.com/tatrasiamar",
      demo: null,
      type: "Personal Project"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills with smooth animations, glassmorphism effects, and mobile-first design. Built with React and Tailwind CSS for optimal performance.",
      image: "/portfolio_Image.png",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      github: "https://github.com/tatrasiamar",
      demo: null,
      type: "Personal Project"
    },
    {
      title: "Library Management System",
      description: "Full-featured library management solution for tracking books, managing member records, handling checkouts/returns, and generating reports. Includes admin dashboard and user-friendly interface.",
      image: "/Library.jpg",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      github: "https://github.com/tatrasiamar",
      demo: null,
      type: "Academic Project"
    }
  ];

  return (
    <section id="projects" className="bg-zinc-900 text-white px-6 md:px-8 py-16 md:py-20 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Personal & Academic <span className="text-gradient">Projects</span>
        </h2>

        <p className="text-center text-purple-400 text-lg mb-8">
          Independent projects built to learn and explore different technologies
        </p>

        <div className="mb-12">
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A collection of <span className="text-blue-400 font-medium">self-initiated projects</span> showcasing
            my learning journey in full-stack development, from desktop applications to modern web solutions.
            Each project demonstrates end-to-end ownership and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect rounded-xl overflow-hidden border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                </div>

                <span className="inline-block px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/30 mb-3">
                  {project.type}
                </span>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-500/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors duration-200 border border-zinc-700 hover:border-blue-500/50"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-700">
          <p className="text-center text-gray-400">
            Each project reflects my commitment to{" "}
            <span className="text-blue-400 font-medium">clean code</span>,
            user experience, and practical problem-solving
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
