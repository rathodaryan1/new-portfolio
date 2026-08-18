"use client";

import { journeyTimeline } from "@/data/journey";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            My Journey
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A chronological timeline of my engineering education, milestones, and venture building.
          </p>
        </div>

        {/* Clean Vertical Editorial Timeline */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 sm:ml-4 space-y-8">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.title + item.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Bullet Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white group-hover:scale-125 transition-transform" />

              {/* Date Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F4F4F1] dark:bg-[#1E1E1D] text-neutral-800 dark:text-neutral-200 mb-2 border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs">
                <Calendar className="w-3 h-3 text-neutral-500" />
                <span>{item.year}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-0.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
