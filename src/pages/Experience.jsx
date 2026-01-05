import React, { useState } from "react";

const Experience = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const experiences = [
        {
            title: "Software Engineer – SE-1",
            company: "Terracos Technologies Pvt Ltd",
            location: "Hyderabad",
            period: "Oct 2025 – Present",
            type: "Full-time",
            responsibilities: [
                "Owned end-to-end feature development including UI design, database design, development, and sprint delivery",
                "Designed SCADA UI/HMI dashboards, alarms, and trends for real-time monitoring",
                "Implemented PLC logic using Ladder Logic and Function Block Diagrams",
                "Developed modular backend services and API integrations using Spring Boot and Supabase",
                "Integrated IoT devices using MQTT and REST APIs",
                "Performed manual and automation testing using AI tools to improve delivery speed"
            ],
            projects: [
                {
                    name: "Attendance Management System (AMS)",
                    description: "Enterprise-grade solution to manage employee attendance, working hours, and workforce reporting in a centralized and automated manner.",
                    contribution: "End-to-end development including dashboard design, backend API integration, database design, and reporting features within Agile sprints.",
                    features: [
                        "Real-time attendance tracking and status visualization",
                        "Employee-wise and department-wise attendance reports",
                        "Automated calculations for present, absent, and working hours",
                        "Role-based access for admins and users"
                    ],
                    tech: ["React", "TypeScript", "Spring Boot", "Supabase", "REST APIs"]
                },
                {
                    name: "Building Management System (BMS)",
                    description: "Industrial monitoring and control platform to visualize and manage building-level systems such as access control, sensors, and environmental parameters.",
                    contribution: "Design and development of SCADA UI/HMI screens, real-time dashboards, and backend integrations. Integrated IoT devices using MQTT and REST APIs.",
                    features: [
                        "SCADA-based real-time monitoring dashboards",
                        "IoT device integration via MQTT",
                        "Alarm and alert visualization for abnormal conditions",
                        "Historical data views and trend analysis"
                    ],
                    tech: ["React", "TypeScript", "Spring Boot", "MQTT", "SCADA UI/HMI"]
                },
                {
                    name: "Clean Room Monitoring System (CMS)",
                    description: "System for environments requiring strict compliance and controlled conditions, continuously monitoring critical parameters with real-time visualization.",
                    contribution: "Developed data visualization dashboards, alert mechanisms, and SCADA UI components. Integrated sensor data with backend services for real-time and historical monitoring.",
                    features: [
                        "Real-time monitoring of clean room parameters",
                        "Visual dashboards for sensor data and trends",
                        "Alert generation for threshold violations",
                        "Historical data tracking for compliance"
                    ],
                    tech: ["React", "TypeScript", "Spring Boot", "Supabase", "SCADA UI/HMI"]
                }
            ],
            color: "blue"
        },
        {
            title: "Software Engineer Intern",
            company: "Terracos Technologies Pvt Ltd",
            location: "Hyderabad",
            period: "Jul 2025 – Sep 2025",
            type: "Internship",
            responsibilities: [
                "Developed React + TypeScript dashboards for Building Management Systems (BMS)",
                "Built AMS UI and database using Supabase and SQL",
                "Integrated IoT services using REST APIs"
            ],
            color: "purple"
        }
    ];

    const achievements = [
        {
            title: "TCS NQT (Advanced Section)",
            description: "Scored 77.10% in IT Track",
            icon: "🏆"
        },
        {
            title: "Codequezt #18 National Coding Challenge",
            description: "Ranked #98 out of 18,455 (Top 0.5%)",
            icon: "🥇"
        }
    ];

    const certifications = [
        "Full Stack Development with Cloud Computing – EY-GDS (AICTE, Skill India)",
        "Data Structures & Algorithms in Java – Geeks For Geeks",
        "Java Fundamentals – Oracle Academy",
        "Cloud Computing – IBM via Coursera",
        "CCNA: Introduction to Networks – CISCO"
    ];

    return (
        <section id="experience" className="bg-black text-white px-6 md:px-8 py-16 md:py-20 w-full">
            <div className="max-w-6xl mx-auto">
                {/* Professional Experience */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Professional <span className="text-gradient">Experience</span>
                </h2>

                <div className="space-y-8 mb-20">
                    {experiences.map((exp, expIndex) => (
                        <div
                            key={expIndex}
                            className="glass-effect rounded-xl p-6 md:p-8 border border-zinc-700 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div className="flex-1 mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {exp.title}
                                    </h3>
                                    <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                                    <p className="text-gray-400">{exp.location}</p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-blue-400 font-semibold mb-1">{exp.period}</p>
                                    <span
                                        className={`inline-block px-3 py-1 text-sm rounded-full ${exp.type === "Full-time"
                                                ? "bg-green-500/10 text-green-400 border border-green-500/30"
                                                : "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                                            }`}
                                    >
                                        {exp.type}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-2 mb-6">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <span className="text-blue-400 mr-3 mt-1">▹</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Professional Projects */}
                            {exp.projects && (
                                <div className="mt-6 pt-6 border-t border-zinc-700">
                                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Key Projects</h4>
                                    <div className="space-y-4">
                                        {exp.projects.map((project, projIndex) => (
                                            <div
                                                key={projIndex}
                                                className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700 hover:border-purple-500/30 transition-all duration-300"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <h5 className="text-lg font-bold text-blue-400">{project.name}</h5>
                                                    <button
                                                        onClick={() =>
                                                            setExpandedProject(
                                                                expandedProject === `${expIndex}-${projIndex}`
                                                                    ? null
                                                                    : `${expIndex}-${projIndex}`
                                                            )
                                                        }
                                                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                                    >
                                                        {expandedProject === `${expIndex}-${projIndex}` ? "Show Less ▲" : "Show More ▼"}
                                                    </button>
                                                </div>

                                                <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                                                {expandedProject === `${expIndex}-${projIndex}` && (
                                                    <div className="mt-4 space-y-3 animate-fade-in">
                                                        <div>
                                                            <p className="text-sm font-semibold text-cyan-400 mb-1">My Contribution:</p>
                                                            <p className="text-sm text-gray-300">{project.contribution}</p>
                                                        </div>

                                                        <div>
                                                            <p className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</p>
                                                            <ul className="space-y-1">
                                                                {project.features.map((feature, idx) => (
                                                                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                                                                        <span className="text-cyan-400 mr-2">•</span>
                                                                        <span>{feature}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2 pt-2">
                                                            {project.tech.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/30"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    <span className="text-gradient">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{achievement.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{achievement.title}</h3>
                                    <p className="text-gray-300">{achievement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    <span className="text-gradient">Certifications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-lg p-4 border border-zinc-700 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300"
                        >
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="text-gray-300">{cert}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
