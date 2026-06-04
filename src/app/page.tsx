"use client";

import React from "react";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">

      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-violet-100/50 via-fuchsia-50/30 to-transparent dark:from-violet-950/20 dark:via-fuchsia-950/10 dark:to-transparent pointer-events-none z-0" />
      <div className="absolute top-[800px] right-0 w-[400px] h-[400px] bg-violet-300/10 dark:bg-violet-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1500px] left-0 w-[400px] h-[400px] bg-fuchsia-300/10 dark:bg-fuchsia-900/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            Mon.Dev
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a href="#about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</a>
            <a href="#journey" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Journey</a>
            <a href="#skills" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">

        <Hero />

        <hr className="border-zinc-200/65 dark:border-zinc-800/60 my-8" />

        <Journey />

        <hr className="border-zinc-200/65 dark:border-zinc-800/60 my-8" />

        <Skills />

        <hr className="border-zinc-200/65 dark:border-zinc-800/60 my-8" />

        <Projects />

      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}
