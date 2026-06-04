import React from "react";

export default function Journey() {
  return (
    <section id="journey" className="py-16">
      <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Professional Journey
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          The pathway that shaped my unique problem-solving capabilities, combining analytical business experience and coding expertise.
        </p>
      </div>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:mx-auto pl-8 md:pl-16 space-y-12 max-w-3xl">
        
        {/* Journey Card - Coding Bootcamp */}
        <div className="relative group">
          {/* Timeline marker */}
          <div className="absolute -left-[41px] md:-left-[73px] top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-cyan-600 dark:border-cyan-400 group-hover:scale-125 transition-transform duration-300 z-10" />
          <div className="absolute -left-[45px] md:-left-[77px] top-0 w-8 h-8 rounded-full bg-cyan-600/10 dark:bg-cyan-400/10 blur-sm group-hover:scale-150 transition-transform duration-300" />
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm group-hover:shadow-md group-hover:border-cyan-500/30 dark:group-hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold">
                  Education & Training
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mt-2">
                  Full-Stack Web Development Camp
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Coding Bootcamp
                </p>
              </div>
              <div className="text-sm font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-3 py-1 rounded-lg border border-cyan-100/50 dark:border-cyan-900/30 self-start sm:self-center">
                Jan 2026 - May 2026
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Intensive 5-month full-time program, learning from zero background to build web applications.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Competencies Obtained:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/30">React & Next.js</span>
                <span className="px-2 py-1 text-xs bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/30">Node.js / Express</span>
                <span className="px-2 py-1 text-xs bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/30">SQL & NoSQL</span>
                <span className="px-2 py-1 text-xs bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/30">RESTful Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Card - Logistics Intern */}
        <div className="relative group">
          {/* Timeline marker */}
          <div className="absolute -left-[41px] md:-left-[73px] top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-sky-600 dark:border-sky-400 group-hover:scale-125 transition-transform duration-300 z-10" />
          <div className="absolute -left-[45px] md:-left-[77px] top-0 w-8 h-8 rounded-full bg-sky-600/10 dark:bg-sky-400/10 blur-sm group-hover:scale-150 transition-transform duration-300" />
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm group-hover:shadow-md group-hover:border-sky-500/30 dark:group-hover:border-sky-400/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs font-semibold">
                  Professional Experience
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mt-2">
                  Logistics & Sales Intern
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Import-Export Company
                </p>
              </div>
              <div className="text-sm font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-lg border border-sky-100/50 dark:border-sky-900/30 self-start sm:self-center">
                Aug 2025 - Jan 2026
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Checked import-export shipping documents, did data entry, and used Excel and PowerPoint to make presentation slides for logistics data. Helped the sales team by talking with clients to get their needs and making price quotations for freight services.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Relevant Core Activities:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  Import-Export Documents Check
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  Client Needs Gathering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  Excel Data Entry & Formatting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  Sales Price Quotation Creation
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
