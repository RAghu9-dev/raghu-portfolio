import React from "react";

const Projects = () => {
  const professionalEcosystem = {
    title: "Terracos B2B SaaS Ecosystem",
    subtitle: "Enterprise-Grade Industrial Solutions",
    description: "A unified suite of high-performance monitoring and management platforms built for industrial automation and workforce optimization. Features real-time Supabase integrations, IIoT connectivity, and multi-tenant architecture.",
    products: [
      { name: "AMS", full: "Attendance Management", icon: "📊", color: "blue" },
      { name: "BMS", full: "Building Management", icon: "🏢", color: "red" },
      { name: "CMS", full: "Clean Room Monitoring", icon: "🧪", color: "emerald" },
      { name: "HMS", full: "Smart House Management", icon: "🏠", color: "purple" }
    ]
  };

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
    <section id="projects" className="bg-zinc-900 text-white px-6 md:px-8 py-16 md:py-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Professional Ecosystem Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Showcase</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] -ml-32 -mb-32 rounded-full"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold tracking-wider uppercase border border-blue-500/30 mb-6 inline-block">
                  Industrial B2B SaaS
                </span>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  {professionalEcosystem.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {professionalEcosystem.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {professionalEcosystem.products.map((prod, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                      <span className="text-2xl">{prod.icon}</span>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">{prod.name}</p>
                        <p className="text-sm text-white font-medium">{prod.full}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  View Enterprise Case Studies
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl border border-white/10 shadow-inner flex items-center justify-center p-6 text-center transform translate-y-6">
                    <p className="text-sm font-medium text-blue-100">Real-time IoT State Management</p>
                  </div>
                  <div className="h-48 bg-zinc-800/80 rounded-2xl border border-white/5 shadow-inner flex items-center justify-center p-6 text-center">
                    <p className="text-sm font-medium text-gray-400">Multi-tenant Policy Layers</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-zinc-800/80 rounded-2xl border border-white/5 shadow-inner flex items-center justify-center p-6 text-center">
                    <p className="text-sm font-medium text-gray-400">Audit-Ready Reporting</p>
                  </div>
                  <div className="h-48 bg-gradient-to-tr from-purple-600 to-pink-900 rounded-2xl border border-white/10 shadow-inner flex items-center justify-center p-6 text-center transform -translate-y-6">
                    <p className="text-sm font-medium text-purple-100">Integrated SCADA Dashboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal & Academic Section */}
        <div className="pt-8 border-t border-zinc-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Personal & Academic <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-center text-purple-400 text-lg mb-12 font-medium">
            Independent Exploration & Computer Science Foundations
          </p>

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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/30 mb-3">
                    {project.type}
                  </span>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-0.5 text-xs bg-zinc-800 text-gray-300 rounded border border-white/5 transition-all"
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
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-lg transition-colors duration-200 border border-zinc-700"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-sm font-medium">Source</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-center text-gray-500">
            From industrial engineering to side-projects, I aim for{" "}
            <span className="text-blue-400">excellence</span> in every line of code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
