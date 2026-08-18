"use client";

import { journeyTimeline } from "@/data/journey";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-20 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
            Journey &amp; Experience
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            My development milestones, academic background, and founding journey.
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 space-y-10">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.title + item.year}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 transition-transform" />

              {/* Date Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 mb-2 border border-neutral-200/60 dark:border-neutral-700/60">
                <Calendar className="w-3 h-3 text-blue-500" />
                <span>{item.year}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
