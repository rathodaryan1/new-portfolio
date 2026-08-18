"use client";

import { motion } from "framer-motion";
import { Layout, Database, Wrench, Cpu } from "lucide-react";

const skillCategories = [
  {
    number: "01",
    title: "Frontend",
    icon: Layout,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    number: "02",
    title: "Backend & Database",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },
  {
    number: "03",
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Hostinger",
      "Shopify",
      "WordPress",
      "VS Code",
      "Google Search Console",
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    icon: Cpu,
    skills: [
      "AI Agents",
      "AI Automation",
      "API Integration",
      "WhatsApp Automation",
      "Payment Integration",
      "SEO",
      "Digital Products",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            What I Work With
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A structured breakdown of technologies, frameworks, and developer tools in my stack.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs">
                        <Icon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-neutral-100">
                        {group.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 font-mono">
                      {group.number}
                    </span>
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
