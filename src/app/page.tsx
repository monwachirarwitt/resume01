"use client";

import React from "react";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">

      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-100/50 via-cyan-50/30 to-transparent dark:from-cyan-900/20 dark:via-sky-900/10 dark:to-transparent pointer-events-none z-0" />
      <div className="absolute top-[800px] right-0 w-[400px] h-[400px] bg-cyan-300/10 dark:bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1500px] left-0 w-[400px] h-[400px] bg-sky-300/10 dark:bg-sky-900/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            Monwachirarwit
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#journey" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">

        <Hero />

        <hr className="border-slate-200/65 dark:border-slate-800/60 my-8" />

        <Journey />

        <hr className="border-slate-200/65 dark:border-slate-800/60 my-8" />

        <Skills />

        <hr className="border-slate-200/65 dark:border-slate-800/60 my-8" />

        <Projects />

        <hr className="border-slate-200/65 dark:border-slate-800/60 my-8" />

        <Contact />

      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}
