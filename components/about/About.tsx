"use client";

import { personal } from "@/data/personal";
import { resumeUrl } from "@/data/social";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 py-12 sm:py-16 px-4 max-w-4xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header matching Mobile Screenshot */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            About
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Pursuing Diploma in Computer Engineering, building web applications, and studying software patterns.
          </p>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 sm:mb-10">
          <p>
            I am <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Aryan Rathod</strong>, a <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Diploma Computer Engineering</strong> student and <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Full Stack Developer</strong> based in Ahmedabad, Gujarat, India. I specialize in engineering clean, fast, and responsive web applications using Next.js, React, TypeScript, Tailwind CSS, Supabase, and PostgreSQL.
          </p>
          <p>
            Alongside modern web development and algorithms, I am the Founder &amp; CEO of <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Optenary</strong>, where I take ambitious ideas from concept to production by building custom software products, e-commerce engines, and AI automation workflows.
          </p>
        </div>

        {/* 4 Metadata Grid matching Mobile Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-12 mb-8 sm:mb-10">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              LOCATION
            </span>
            <p className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200">
              Ahmedabad, Gujarat
            </p>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              DEGREE
            </span>
            <p className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200">
              Diploma Computer Engineering
            </p>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              FOCUS AREA
            </span>
            <p className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200">
              Full Stack Development &amp; Custom Platforms
            </p>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              ROLE
            </span>
            <p className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200">
              Founder &amp; CEO — Optenary
            </p>
          </div>
        </div>

        {/* Statistics Card matching Mobile Screenshot */}
        <div className="card-hover-line p-5 sm:p-8 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/70 dark:border-neutral-800/70 mb-8 shadow-xs">
          <div className="grid grid-cols-3 text-center divide-x divide-neutral-300/50 dark:divide-neutral-700/50">
            <div className="px-1">
              <div className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-1">
                5+
              </div>
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                REAL PRODUCTS
              </span>
            </div>

            <div className="px-1">
              <div className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-1">
                100%
              </div>
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                CUSTOM ENGINE
              </span>
            </div>

            <div className="px-1">
              <div className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-1">
                2026
              </div>
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                OPTENARY
              </span>
            </div>
          </div>
        </div>

        {/* View Resume Button matching Mobile Screenshot */}
        <div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all border border-neutral-300/60 dark:border-neutral-700/60"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
