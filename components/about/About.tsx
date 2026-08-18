"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            About Me
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            I like turning ideas into working products.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Professional Introduction Narrative */}
          <div className="lg:col-span-7 space-y-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              I am <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Aryan Rathod</strong>, a Computer Engineering student and Full Stack Developer based in Ahmedabad, Gujarat, India. I focus on building responsive web applications, custom e-commerce systems, and performant digital products.
            </p>
            <p>
              My approach combines strong engineering fundamentals with modern technologies like Next.js, React, TypeScript, Supabase, and PostgreSQL. I care deeply about writing maintainable code, architecting reliable backends, and delivering seamless user interfaces.
            </p>
            <p>
              Alongside engineering, I founded <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Optenary</strong> to collaborate directly with businesses—turning ambitious product concepts into production-ready web platforms and automated workflows.
            </p>
          </div>

          {/* Right: Compact Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="p-4 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shrink-0 shadow-xs">
                <MapPin className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5">
                  BASED IN
                </span>
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shrink-0 shadow-xs">
                <GraduationCap className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5">
                  EDUCATION
                </span>
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Diploma in Computer Engineering
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shrink-0 shadow-xs">
                <Code2 className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5">
                  FOCUS
                </span>
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Full Stack &amp; Product Engineering
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shrink-0 shadow-xs">
                <Rocket className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5">
                  BUILDING
                </span>
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Optenary
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
