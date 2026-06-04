import React from "react";

export default function Hero() {
  return (
    <section id="about" className="py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold border border-violet-200/50 dark:border-violet-800/30 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
          Available for New Roles
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-zinc-900 dark:text-zinc-50">
          Hi, I&apos;m <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Mon Wachirarwit</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-700 dark:text-zinc-300">
          Full-Stack Developer & Solutions Specialist
        </h2>
        
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
          Motivated Full-Stack Developer with a background in Logistics Management and internship experience. Moved into web development through an intensive, 5-month coding bootcamp, learning from zero experience to building full frontend and backend web applications.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#projects" 
            className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View My Projects
          </a>
          <a 
            href="#journey" 
            className="px-6 py-3 font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all hover:-translate-y-0.5"
          >
            My Journey
          </a>
        </div>
      </div>

      {/* Graphic Banner / Coding representation */}
      <div className="md:col-span-5 flex justify-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-3xl rotate-6 opacity-20 blur-xl group-hover:rotate-12 transition-all duration-500" />
          <div className="relative w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">portfolio.tsx</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center font-mono text-xs sm:text-sm space-y-3 py-6 text-zinc-600 dark:text-zinc-400">
              <p className="text-violet-600 dark:text-violet-400">
                <span className="text-fuchsia-600 dark:text-fuchsia-400">const</span> developer = {"{"}
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
              <p className="text-violet-600 dark:text-violet-400">{"};"}</p>
              
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-[10px] sm:text-xs text-zinc-400">
                  {"// Bridging Logistics Systems & Full-Stack Tech"}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Systems Active</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono">EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
