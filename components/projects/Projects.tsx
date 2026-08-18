"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ArrowRight, Github } from "lucide-react";

export function Projects() {
  const mehtaProject = projects.find((p) => p.slug === "mehta-dairy") || projects[0];
  const optenaryProject = projects.find((p) => p.slug === "optenary") || projects[1];
  const otherProjects = projects.filter(
    (p) => p.slug !== "mehta-dairy" && p.slug !== "optenary"
  );

  return (
    <section id="work" className="py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Selected Work
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A selection of products, platforms and digital experiences I&apos;ve built.
          </p>
        </div>

        {/* 1. FEATURED PROJECT #1: MEHTA DAIRY (Large Editorial Showcase Card) */}
        <div className="mb-8 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden shadow-xs group transition-all hover:border-neutral-400 dark:hover:border-neutral-600">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Info Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    01 — CLIENT PROJECT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                    E-COMMERCE
                  </span>
                </div>

                <Link href={`/projects/${mehtaProject.slug}`}>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-3 tracking-tight hover:opacity-80 transition-opacity">
                    {mehtaProject.title}
                  </h3>
                </Link>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  Production-ready e-commerce platform with online ordering, customer accounts, payment integration, delivery management, order tracking, WhatsApp ordering, admin management, analytics and PWA support.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                  {mehtaProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/projects/${mehtaProject.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-xs"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {mehtaProject.liveUrl && (
                  <a
                    href={mehtaProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-2xs"
                  >
                    <span>Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Large Screenshot Preview */}
            <div className="lg:col-span-6 relative bg-neutral-900 overflow-hidden border-t lg:border-t-0 lg:border-l border-neutral-200/60 dark:border-neutral-800/60 aspect-[16/10] lg:aspect-auto">
              <img
                src={mehtaProject.image}
                alt="Mehta Dairy custom e-commerce website developed by Aryan Rathod"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
              />
            </div>
          </div>
        </div>

        {/* 2. FEATURED PROJECT #2: OPTENARY */}
        <div className="mb-8 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-8 shadow-xs group transition-all hover:border-neutral-400 dark:hover:border-neutral-600">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-2">
                02 — COMPANY / PRODUCT
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-1">
                {optenaryProject.title}
              </h3>

              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                Technology &amp; Digital Product Agency
              </p>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                The official platform presenting software engineering services, project case studies, client platforms, and custom business solutions.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {optenaryProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visit Action Button */}
            <div className="shrink-0">
              <a
                href={optenaryProject.liveUrl || "https://optenary.tech/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm"
              >
                <span>Visit Optenary</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. OTHER PROJECTS (#3 to #6) in a 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {otherProjects.map((project, idx) => {
            const projectNumber = String(idx + 3).padStart(2, "0");
            return (
              <div
                key={project.slug}
                className="rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden flex flex-col justify-between group transition-all hover:border-neutral-400 dark:hover:border-neutral-600 shadow-2xs"
              >
                <div>
                  {/* Top Image Preview */}
                  <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800/60">
                    <img
                      src={project.image}
                      alt={`${project.title} custom platform developed by Aryan Rathod`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                        {projectNumber} — {project.category.split("•")[0]?.trim() || "WEB"}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-2 hover:opacity-80 transition-opacity">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-0 grid grid-cols-2 gap-2.5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl || "https://github.com/rathodaryan1"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <a
            href="https://github.com/rathodaryan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-xs"
          >
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
