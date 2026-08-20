"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 sm:scroll-mt-28 py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header matching reference screenshot */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Selected Projects
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A list of projects showing my development progress.
          </p>
        </div>

        {/* 3-Column Responsive Projects Grid displaying all 6 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* View All Projects Pill Button linking to GitHub profile rathodaryan1 */}
        <div className="flex justify-center">
          <a
            href="https://github.com/rathodaryan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-xs"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
