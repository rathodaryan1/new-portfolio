"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Code, Cpu, Building2, Sparkles } from "lucide-react";

export function OptenarySection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-hover-line p-8 sm:p-10 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex flex-col justify-between"
      >
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 mb-6 shadow-xs">
            <img
              src="/optenary-logo.png"
              alt="Optenary Logo"
              className="w-4 h-4 rounded object-cover shrink-0"
            />
            <span>FOUNDED &amp; LEAD BY ARYAN RATHOD</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Building Optenary
          </h2>

          <p className="text-base font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
            Where technology evolves.
          </p>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mb-8">
            Optenary is the digital product and technology company I founded to take ambitious ideas from concept to production. We specialize in custom web applications, high-throughput e-commerce platforms, AI automation, and bespoke software solutions for businesses.
          </p>

          {/* Capability Pills matching Skills & Projects tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2 shadow-xs">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Web Applications</span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2 shadow-xs">
              <Code className="w-4 h-4 text-amber-500" />
              <span>Custom E-Commerce</span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2 shadow-xs">
              <Cpu className="w-4 h-4 text-purple-500" />
              <span>AI &amp; Automation</span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2 shadow-xs">
              <Building2 className="w-4 h-4 text-emerald-500" />
              <span>Business Systems</span>
            </div>
          </div>
        </div>

        {/* Clean Action Button */}
        <div>
          <a
            href="https://optenary.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
          >
            <span>Visit Optenary Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
