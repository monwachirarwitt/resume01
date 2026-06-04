import React, { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "business">("all");

  const skills = [
    { name: "React / Next.js", category: "frontend", level: "Advanced" },
    { name: "TypeScript", category: "frontend", level: "Intermediate" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced" },
    { name: "HTML5 / CSS3", category: "frontend", level: "Advanced" },
    { name: "Node.js / Express", category: "backend", level: "Intermediate" },
    { name: "RESTful APIs", category: "backend", level: "Advanced" },
    { name: "PostgreSQL / SQL", category: "backend", level: "Intermediate" },
    { name: "MongoDB", category: "backend", level: "Intermediate" },
    { name: "Logistics Operations", category: "business", level: "Advanced" },
    { name: "Excel & PowerPoint", category: "business", level: "Expert" },
    { name: "Client Negotiations", category: "business", level: "Advanced" },
    { name: "Git / GitHub", category: "backend", level: "Advanced" },
  ];

  const filteredSkills = activeTab === "all" ? skills : skills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="text-center md:text-left max-w-xl space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Skills & Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A rich toolkit containing full-stack technologies alongside practical commercial operations expertise.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-fit self-center">
          {(["all", "frontend", "backend", "business"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all ${activeTab === tab
                ? "bg-blue-300 dark:bg-slate-850 text-slate-900 dark:text-slate-50 shadow-sm border border-slate-200/30"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-cyan-500/20 dark:hover:border-cyan-400/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {skill.name}
              </span>
              <span className={`w-2.5 h-2.5 rounded-full ${skill.category === "frontend"
                ? "bg-cyan-500"
                : skill.category === "backend"
                  ? "bg-sky-500"
                  : "bg-blue-500"
                }`} />
            </div>
            <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <span>{skill.category}</span>
              <span className="text-slate-500 dark:text-slate-400">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
