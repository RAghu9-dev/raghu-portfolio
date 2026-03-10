import React, { useState } from "react";

const Experience = () => {
    const [expandedProjects, setExpandedProjects] = useState([]);

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
                    name: "Human Resource Management System (HRMS)",
                    description: "A centralized workforce management platform designed to automate employee lifecycle operations, integrated with biometric and IoT devices for real-time data.",
                    isRichContent: true,
                    role: "End-to-End Product Developer",
                    overview: "The HRMS serves as a digital backbone for HR and facility operations. It integrates with biometric and IoT devices to provide real-time, accurate workforce data, replacing manual processes with automated, auditable workflows.",
                    problem: [
                        "Manual attendance handling & delayed approvals",
                        "Lack of real-time workforce visibility",
                        "Complex shift planning & inconsistent data"
                    ],
                    modules: [
                        { title: "Employee Management", details: "Profiles, Department mapping, Secure onboarding" },
                        { title: "Attendance & Time Tracking", details: "Real-time check-in/out, Late/early calculations" },
                        { title: "Leave & Approvals", details: "Multi-level workflows, Audit trails, Status tracking" },
                        { title: "Shift & Roster", details: "Conflict detection, Future scheduling, Manager visibility" }
                    ],
                    architecture: [
                        "Biometric / IoT Devices",
                        "MQTT",
                        "Backend APIs (Spring Boot)",
                        "Database (PostgreSQL)",
                        "React + TypeScript Frontend",
                        "Dashboards / Reports"
                    ],
                    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "MQTT", "Recharts"],
                    challenges: [
                        { title: "Real-time synchronization", desc: "Handled live attendance updates while keeping UI responsive." },
                        { title: "Complex business rules", desc: "Implemented late policies, approvals, shift logic." },
                        { title: "Scalability", desc: "Designed components capable of supporting growing workforce data." }
                    ],
                    impact: [
                        "Reduced manual HR effort",
                        "Improved attendance accuracy",
                        "Enabled faster approvals",
                        "Created a reliable audit mechanism"
                    ]
                },
                {
                    name: "Building Management System (BMS)",
                    description: "Industrial monitoring and control platform to visualize and manage building-level systems such as access control, sensors, and environmental parameters.",
                    isRichContent: true,
                    role: "Frontend & IoT Integration Engineer",
                    overview: "A comprehensive platform for monitoring and controlling building utilities (HVAC, Lighting, Access Control) in real-time. It unifies disparate systems into a single SCADA-like interface for facility managers.",
                    problem: [
                        "Fragmented control systems for different utilities",
                        "No centralized real-time visibility",
                        "Delayed response to critical alarms"
                    ],
                    modules: [
                        { title: "Dashboard & Visualization", details: "Real-time SCADA views, Floor plans" },
                        { title: "Alarm Management", details: "Critical alerts, Priority levels, Acknowledgment" },
                        { title: "Device Management", details: "IoT sensor config, Gateway status" },
                        { title: "Reports", details: "Energy consumption trends, Device performance" }
                    ],
                    architecture: [
                        "IoT Sensors / PLCs",
                        "MQTT Broker",
                        "Spring Boot Backend",
                        "PostgreSQL",
                        "React Client"
                    ],
                    tech: ["React", "TypeScript", "Spring Boot", "MQTT", "SCADA UI/HMI", "Recharts"],
                    challenges: [
                        { title: "High Frequency Data", desc: "Visualizing rapid changes from hundreds of sensors without UI lag." },
                        { title: "Protocol Diversity", desc: "Normalizing data from different device protocols." },
                        { title: "Real-time State", desc: "Managing complex state for device connectivity status." }
                    ],
                    impact: [
                        "Centralized control reduced manual checks by 40%",
                        "Faster response time to critical alarms",
                        "Data-driven insights for energy optimization"
                    ]
                },
                {
                    name: "Clean Room Monitoring System (CMS)",
                    description: "System for environments requiring strict compliance and controlled conditions, continuously monitoring critical parameters with real-time visualization.",
                    isRichContent: true,
                    role: "Full Stack Developer",
                    overview: "A specialized environmental monitoring system for pharmaceutical clean rooms. It tracks temperature, humidity, and pressure differentials to ensure compliance with strict industry standards.",
                    problem: [
                        "Manual logging is error-prone & inefficient",
                        "Strict compliance requires unalterable data",
                        "Immediate notification needed for excursions"
                    ],
                    modules: [
                        { title: "Live Monitoring", details: "Gauge & Chart views for Temp, RH, Pressure" },
                        { title: "Audit Trails", details: "Immutable logs of user actions & events" },
                        { title: "Alerts & Notifications", details: "SMS/Email alerts for threshold breaches" },
                        { title: "Compliance Reporting", details: "Auto-generated PDF reports for audits" }
                    ],
                    architecture: [
                        "Precision Sensors",
                        "Modbus/TCP",
                        "Backend Services",
                        "Supabase",
                        "React Frontend"
                    ],
                    tech: ["React", "TypeScript", "Spring Boot", "Supabase", "SCADA UI/HMI"],
                    challenges: [
                        { title: "Data Integrity", desc: "Ensuring no data gaps or alterations for compliance." },
                        { title: "Real-time Alerts", desc: "Zero-latency alerting for critical deviations." },
                        { title: "Audit Logging", desc: "Tracking every user interaction for regulatory standards." }
                    ],
                    impact: [
                        "Ensured 100% compliance with regulatory standards",
                        "Eliminated paper-based recording errors",
                        "Proactive maintenance through trend analysis"
                    ]
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
                                                className="bg-zinc-800/50 rounded-lg p-5 border border-zinc-700 hover:border-purple-500/30 transition-all duration-300"
                                            >
                                                <div className="flex items-center justify-between mb-3">
                                                    <h5 className="text-xl font-bold text-blue-400">{project.name}</h5>
                                                    <button
                                                        onClick={() => {
                                                            const id = `${expIndex}-${projIndex}`;
                                                            setExpandedProjects(prev =>
                                                                prev.includes(id)
                                                                    ? prev.filter(p => p !== id)
                                                                    : [...prev, id]
                                                            );
                                                        }}
                                                        className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                                                    >
                                                        {expandedProjects.includes(`${expIndex}-${projIndex}`) ? "Show Less ▲" : "View Case Study ▼"}
                                                    </button>
                                                </div>

                                                <p className="text-gray-300 mb-4">{project.description}</p>

                                                {/* Tech Stack Pills (Always Visible) */}
                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    {project.tech.slice(0, 5).map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/30"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.tech.length > 5 && (
                                                        <span className="px-2 py-1 text-xs text-gray-500">+{project.tech.length - 5} more</span>
                                                    )}
                                                </div>

                                                {/* Expanded Content */}
                                                {expandedProjects.includes(`${expIndex}-${projIndex}`) && (
                                                    <div className="mt-6 pt-4 border-t border-zinc-700/50 animate-fade-in space-y-6">

                                                        {/* Render based on content type */}
                                                        {project.isRichContent ? (
                                                            <>
                                                                {/* Architecture (New) */}
                                                                {project.architecture && (
                                                                    <div className="bg-white/5 p-4 rounded-lg border border-white/10 overflow-x-auto">
                                                                        <h6 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider text-center">System Architecture</h6>
                                                                        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 gap-2 min-w-max md:min-w-0">
                                                                            {project.architecture.map((step, stepIdx) => (
                                                                                <React.Fragment key={stepIdx}>
                                                                                    <div className="bg-zinc-800 px-3 py-2 rounded border border-zinc-600 text-center w-full md:w-auto shadow-sm">
                                                                                        {step}
                                                                                    </div>
                                                                                    {stepIdx < project.architecture.length - 1 && (
                                                                                        <div className="text-gray-500 font-bold px-1">
                                                                                            <span className="hidden md:inline">→</span>
                                                                                            <span className="md:hidden">↓</span>
                                                                                        </div>
                                                                                    )}
                                                                                </React.Fragment>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Overview & Role */}
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                    <div className="md:col-span-2">
                                                                        <h6 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Overview</h6>
                                                                        <p className="text-sm text-gray-300 leading-relaxed">{project.overview}</p>
                                                                    </div>
                                                                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                                                        <h6 className="text-sm font-semibold text-purple-400 mb-1 uppercase tracking-wider">My Role</h6>
                                                                        <p className="text-sm text-white font-medium">{project.role}</p>
                                                                    </div>
                                                                </div>

                                                                {/* Problem & Modules */}
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                    <div>
                                                                        <h6 className="text-sm font-semibold text-red-400 mb-2 uppercase tracking-wider">Problem Statement</h6>
                                                                        <ul className="space-y-2">
                                                                            {project.problem.map((prob, idx) => (
                                                                                <li key={idx} className="flex items-start text-sm text-gray-400">
                                                                                    <span className="text-red-500/70 mr-2 mt-0.5">✕</span>
                                                                                    {prob}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div>
                                                                        <h6 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wider">Core Modules</h6>
                                                                        <ul className="space-y-2">
                                                                            {project.modules.map((mod, idx) => (
                                                                                <li key={idx} className="text-sm text-gray-300">
                                                                                    <span className="text-green-400 font-medium">{mod.title}:</span> <span className="text-gray-400">{mod.details}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* Challenges & Impact */}
                                                                <div>
                                                                    <h6 className="text-sm font-semibold text-yellow-500 mb-3 uppercase tracking-wider">Technical Challenges</h6>
                                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                                        {project.challenges.map((chal, idx) => (
                                                                            <div key={idx} className="bg-yellow-500/5 p-3 rounded border border-yellow-500/20">
                                                                                <p className="text-xs font-bold text-yellow-500 mb-1">{chal.title}</p>
                                                                                <p className="text-xs text-gray-400">{chal.desc}</p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                {/* Impact */}
                                                                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                                                                    <h6 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Project Impact</h6>
                                                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                                                        {project.impact.map((imp, idx) => (
                                                                            <span key={idx} className="flex items-center text-sm text-gray-300">
                                                                                <span className="text-blue-500 mr-2">✓</span>
                                                                                {imp}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            /* Fallback / Standard Layout */
                                                            <>
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
                                                            </>
                                                        )}

                                                        {/* Full Tech Stack */}
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-500 mb-2 uppercase">Full Tech Stack</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.tech.map((tech, idx) => (
                                                                    <span
                                                                        key={idx}
                                                                        className="px-2 py-1 text-xs bg-zinc-700/50 text-gray-300 rounded border border-zinc-600"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
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
