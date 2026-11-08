import React from "react";

const About = () => {
  const skills = {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3"],
    backend: ["Python", "Django Framework", "RESTful APIs"],
    databases: ["MySQL","PostgreSQL","Oracle"],
    tools: ["Git & GitHub", "VS Code", "Postman", "Vercel"],
    cloudAI: ["AWS (Basics)", "GitHub Copilot", "ChatGPT", "Antigravity", "Cursor"],
    Development_Concepts: ["Authentication", "Authorization", "OOPS", "Debugging", "API Integration"],
  };

  return (
    <section id="about" className="bg-zinc-900 text-white px-6 md:px-8 py-16 md:py-20 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="mb-12">
          <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center max-w-4xl mx-auto">
           I am a fresher Python Full Stack Developer with strong knowledge of  <span className="text-blue-400 font-medium">Python, Django, Django REST Framework, Django ORM, AWS (basic), HTML, CSS, JavaScript, React, Tailwind CSS, MySQL, PostgreSQL, Git, and GitHub.</span> 
          </p>
          <p className="leading-relaxed text-lg text-gray-300 text-center max-w-4xl mx-auto">
            I have hands-on experience in building web applications and REST APIs through projects such as a <span className="text-purple-400 font-medium">Django Hotel Booking Application, Student/Employee REST API, Weather app and an IoT-Based Animal Tracking System.</span> I am passionate about backend development, database design, API development, and creating user-friendly web applications.
          </p>
        </div>


        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl font-semibold text-blue-400">Frontend</h4>
              </div>
              <ul className="space-y-2">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                <h4 className="text-xl font-semibold text-purple-400">Backend</h4>
              </div>
              <ul className="space-y-2">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 border border-green-500/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <h4 className="text-xl font-semibold text-green-400">Databases</h4>
              </div>
              <ul className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>


            {/* Tools Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-xl font-semibold text-cyan-400">Tools</h4>
              </div>
              <ul className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cloud & AI Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-rose-500/10 transition-all duration-300 border border-pink-500/20 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h4 className="text-xl font-semibold text-pink-400">Cloud & AI</h4>
              </div>
              <ul className="space-y-2">
                {skills.cloudAI.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Developement concepts */}
               <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-rose-500/10 transition-all duration-300 border border-pink-500/20 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h4 className="text-xl font-semibold text-pink-400"></h4>
              </div>
              <ul className="space-y-2">
                {skills.Development_Concepts.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>      
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;