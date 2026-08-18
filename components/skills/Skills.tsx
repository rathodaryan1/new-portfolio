"use client";

import { motion } from "framer-motion";

const skillCardsData = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and user-friendly web interfaces with clean, maintainable code.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Next.js", "Responsive Design"],
  },
  {
    title: "Programming & Problem Solving",
    description: "Writing efficient algorithms and object-oriented programs while continuously improving problem-solving skills.",
    skills: ["Python", "C", "C++", "Java", "OOP", "DSA", "REST APIs"],
  },
  {
    title: "Database & Developer Tools",
    description: "Working with relational databases, cloud backends, version control, and deployment platforms.",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Git & GitHub", "Vercel", "Hostinger"],
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
        {/* Header matching Image 3 */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Skills &amp; Focus
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Technologies and development fields I work with actively.
          </p>
        </div>

        {/* 3 Column Cards Grid matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCardsData.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-hover-line p-6 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* White Pill Tags matching Image 3 */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
