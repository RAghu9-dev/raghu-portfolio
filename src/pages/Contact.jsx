import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: "Email",
      link: "mailto:singireddyraghuvardhanreddy@gmail.com",
      text: "singireddyraghuvardhanreddy@gmail.com",
      color: "blue"
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      title: "Phone",
      link: "tel:+917601075424",
      text: "+91 7601075424",
      color: "purple"
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/singireddyraghu19433",
      text: "linkedin.com/in/singireddyraghu19433",
      color: "cyan"
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      title: "GitHub",
      link: "https://github.com/RAghu9-dev",
      text: "github.com/RAghu9-dev",
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-400 hover:shadow-blue-500/20 hover:border-blue-500/50",
      purple: "text-purple-400 hover:shadow-purple-500/20 hover:border-purple-500/50",
      cyan: "text-cyan-400 hover:shadow-cyan-500/20 hover:border-cyan-500/50",
      pink: "text-pink-400 hover:shadow-pink-500/20 hover:border-pink-500/50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="relative bg-zinc-900 text-white w-full px-6 md:px-8 py-16 md:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`glass-effect rounded-xl p-6 border border-zinc-700 hover:bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-lg ${getColorClasses(item.color)}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center ${getColorClasses(item.color)}`}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 break-all hover:text-white transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Let's build something amazing together!</p>
          <a
            href="mailto:singireddyraghuvardhanreddy@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;