"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Education
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Academic qualifications and formal engineering foundations.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                  CURRENTLY ENROLLED
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-1">
                Diploma in Computer Engineering
              </h3>

              <p className="text-base sm:text-lg font-bold text-neutral-700 dark:text-neutral-300 mb-4">
                R.C. Technical Institute
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>2024 — 2027</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Computer Engineering</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs shrink-0 items-center justify-center">
              <GraduationCap className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
