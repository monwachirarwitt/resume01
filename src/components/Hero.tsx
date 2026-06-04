import React from "react";

export default function Hero() {
  return (
    <section id="about" className="py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold border border-cyan-200/50 dark:border-cyan-800/30 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
          Available for New Roles
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-slate-50">
          Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-500 dark:from-cyan-300 dark:via-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">Mon Wachirarwit</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
          Full-Stack Developer & Solutions Specialist
        </h2>
        
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
          Motivated Full-Stack Developer with a background in Logistics Management and internship experience. Moved into web development through an intensive, 5-month coding bootcamp, learning from zero experience to building full frontend and backend web applications.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#projects" 
            className="px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] rounded-xl transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:-translate-y-0.5"
          >
            View My Projects
          </a>
          <a 
            href="#journey" 
            className="px-6 py-3 font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all hover:-translate-y-0.5"
          >
            My Journey
          </a>
        </div>
      </div>

      {/* Graphic Banner / Coding representation */}
      <div className="md:col-span-5 flex justify-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-cyan-600 rounded-3xl rotate-6 opacity-40 blur-2xl group-hover:rotate-12 transition-all duration-500" />
          <div className="relative w-full h-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">portfolio.tsx</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center font-mono text-xs sm:text-sm space-y-3 py-6 text-slate-600 dark:text-slate-400">
              <p className="text-cyan-600 dark:text-cyan-400">
                <span className="text-sky-600 dark:text-sky-400">const</span> developer = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-600 dark:text-emerald-400">{"\"Mon Wachirarwit\""}</span>,
              </p>
              <p className="pl-4">
                skills: [<span className="text-emerald-600 dark:text-emerald-400">{"\"React\""}</span>, <span className="text-emerald-600 dark:text-emerald-400">{"\"Node\""}</span>, <span className="text-emerald-600 dark:text-emerald-400">{"\"SQL\""}</span>],
              </p>
              <p className="pl-4">
                passion: <span className="text-emerald-600 dark:text-emerald-400">{"\"Build elegant web solutions\""}</span>
              </p>
              <p className="text-cyan-600 dark:text-cyan-400">{"};"}</p>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] sm:text-xs text-slate-400">
                  {"// Bridging Logistics Systems & Full-Stack Tech"}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Systems Active</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
