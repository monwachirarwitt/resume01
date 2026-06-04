import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Feel free to reach out for collaborations, opportunities, or just a quick chat. I am always open to discussing new projects!
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-emerald-500 rounded-3xl rotate-1 opacity-20 blur-xl group-hover:rotate-2 transition-all duration-500" />
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/50 dark:border-emerald-800/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Currently Available
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-12 text-center">
            Monwachirarwit Rattanawisithchote
          </h3>

          <div className="grid sm:grid-cols-3 gap-6 w-full">
            
            {/* Email */}
            <a href="mailto:monwachirarwit.rattana@gmail.com" className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all group/item">
              <div className="w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 break-all group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">monwachirarwit.rattana<br className="hidden sm:block md:hidden"/>@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:065-450-9698" className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] transition-all group/item">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors">065-450-9698</p>
              </div>
            </a>

            {/* Github */}
            <a href="https://github.com/monwachirarwitt" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all group/item">
              <div className="w-14 h-14 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Github</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover/item:text-sky-600 dark:group-hover/item:text-sky-400 transition-colors">/monwachirarwitt</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
