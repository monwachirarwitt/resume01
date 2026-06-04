import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "WEWORKOUT",
      description: "Developed a fitness web app to help users find workout partners and set exercise times, using React, Node.js, and MySQL. Used JWT authentication for secure login and Cloudinary to store user images. Made a responsive dashboard with Tailwind CSS.",
      tags: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS"],
      link: "#",
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h14" />
        </svg>
      )
    },
    {
      title: "WONGNORK",
      description: "Co-developed a restaurant finder web app within a 5-member team using React, Tailwind CSS, Node.js, and MySQL. Integrated Gemini AI API to make a chatbot that recommends restaurants and nearby dining places. Used Mapbox API to show restaurant locations on a map, and added a Split Bill feature to share costs.",
      tags: ["React", "Tailwind CSS", "Node.js", "MySQL", "Gemini AI", "Mapbox API"],
      link: "#",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a19.94 19.94 0 01-5-10V5a2 2 0 012-2h9a2 2 0 012 2v3m-1 7h-3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Here are full-stack projects showcasing application architectural designs, robust API creations, and highly modular code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-cyan-500/20 dark:hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-200/30 dark:border-slate-800/30 mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/40 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
              >
                Explore Codebase
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
