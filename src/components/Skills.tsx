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
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills & Capabilities
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            A rich toolkit containing full-stack technologies alongside practical commercial operations expertise.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-200/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl max-w-fit self-center">
          {(["all", "frontend", "backend", "business"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all ${
                activeTab === tab
                  ? "bg-white dark:bg-zinc-850 text-zinc-900 dark:text-zinc-50 shadow-sm border border-zinc-200/30"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
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
            className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:shadow-md hover:border-violet-500/20 dark:hover:border-violet-400/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </span>
              <span className={`w-2.5 h-2.5 rounded-full ${
                skill.category === "frontend"
                  ? "bg-violet-500"
                  : skill.category === "backend"
                    ? "bg-fuchsia-500"
                    : "bg-pink-500"
              }`} />
            </div>
            <div className="flex justify-between items-center text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              <span>{skill.category}</span>
              <span className="text-zinc-500 dark:text-zinc-400">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
