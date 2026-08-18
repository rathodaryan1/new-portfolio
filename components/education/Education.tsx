"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface EducationItem {
  id: string;
  period: string;
  shortTitle: string;
  fullTitle: string;
  organization: string;
  description: string;
  tags: { text: string; accentClass: string }[];
}

const educationTimeline: EducationItem[] = [
  {
    id: "diploma",
    period: "2024 — Present",
    shortTitle: "Diploma CSE",
    fullTitle: "Diploma in Computer Engineering",
    organization: "R.C. Technical Institute, Ahmedabad",
    description: "Pursuing diploma computer engineering curriculum covering data structures, relational database management systems, computer networks, and modern web application development.",
    tags: [
      { text: "Data Structures & Algorithms", accentClass: "border-l-2 border-blue-500 text-neutral-800 dark:text-neutral-200" },
      { text: "DBMS & SQL Architecture", accentClass: "border-l-2 border-red-500 text-neutral-800 dark:text-neutral-200" },
      { text: "Computer Networks", accentClass: "border-l-2 border-amber-500 text-neutral-800 dark:text-neutral-200" },
      { text: "Web Engineering", accentClass: "border-l-2 border-emerald-500 text-neutral-800 dark:text-neutral-200" },
    ]
  },
  {
    id: "optenary",
    period: "2026",
    shortTitle: "Founder — Optenary",
    fullTitle: "Founder & CEO — Optenary",
    organization: "Optenary Technology Agency",
    description: "Founded Optenary to design and build custom websites, e-commerce platforms, bespoke software, and AI automation for growing businesses.",
    tags: [
      { text: "Product Leadership", accentClass: "border-l-2 border-blue-500 text-neutral-800 dark:text-neutral-200" },
      { text: "Custom Engineering", accentClass: "border-l-2 border-red-500 text-neutral-800 dark:text-neutral-200" },
      { text: "E-Commerce Systems", accentClass: "border-l-2 border-amber-500 text-neutral-800 dark:text-neutral-200" },
      { text: "AI Automation", accentClass: "border-l-2 border-emerald-500 text-neutral-800 dark:text-neutral-200" },
    ]
  },
  {
    id: "mehta",
    period: "2026",
    shortTitle: "Mehta Dairy Platform",
    fullTitle: "Mehta Dairy Custom E-Commerce Engine",
    organization: "Mehta Dairy & Sweet Mart",
    description: "Engineered a production-ready custom e-commerce system with Razorpay integration, MSG91 OTP login, AiSensy WhatsApp order dispatch, and dynamic delivery radius validation.",
    tags: [
      { text: "Next.js & Supabase", accentClass: "border-l-2 border-blue-500 text-neutral-800 dark:text-neutral-200" },
      { text: "Razorpay Payments", accentClass: "border-l-2 border-emerald-500 text-neutral-800 dark:text-neutral-200" },
      { text: "WhatsApp Dispatch", accentClass: "border-l-2 border-amber-500 text-neutral-800 dark:text-neutral-200" },
      { text: "PWA & SEO", accentClass: "border-l-2 border-purple-500 text-neutral-800 dark:text-neutral-200" },
    ]
  },
  {
    id: "fullstack",
    period: "2025",
    shortTitle: "Full-Stack Web Dev",
    fullTitle: "Full-Stack Software Development",
    organization: "Practical Engineering Projects",
    description: "Expanded practical development work across modern frontend frameworks (React, Next.js), Node.js API development, database design, and cloud deployments.",
    tags: [
      { text: "TypeScript & React", accentClass: "border-l-2 border-blue-500 text-neutral-800 dark:text-neutral-200" },
      { text: "Node.js & Express", accentClass: "border-l-2 border-emerald-500 text-neutral-800 dark:text-neutral-200" },
      { text: "PostgreSQL & MongoDB", accentClass: "border-l-2 border-amber-500 text-neutral-800 dark:text-neutral-200" },
    ]
  }
];

export function Education() {
  const [selectedId, setSelectedId] = useState("diploma");
  const activeItem = educationTimeline.find((i) => i.id === selectedId) || educationTimeline[0];

  return (
    <section id="education" className="py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Education
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            My academic progress and learning timeline.
          </p>
        </div>

        {/* Layout: Horizontal swipeable tabs on mobile, Left sidebar on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Timeline Tabs: Horizontal scrollable on mobile, Vertical stack on desktop */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-2 md:pb-0 no-scrollbar">
            {educationTimeline.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`shrink-0 min-w-[140px] md:min-w-0 md:w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 ${
                    isSelected
                      ? "bg-[#F4F4F1] dark:bg-[#1E1E1D] border-b-2 md:border-b-0 md:border-l-4 border-neutral-900 dark:border-white shadow-xs font-bold"
                      : "hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5 whitespace-nowrap">
                    {item.period}
                  </span>
                  <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap md:whitespace-normal">
                    {item.shortTitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right/Bottom Detail Card matching Reference Screenshot */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs min-h-[280px] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 block mb-2">
                {activeItem.period}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-1">
                {activeItem.fullTitle}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 sm:mb-5">
                {activeItem.organization}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 sm:mb-8">
                {activeItem.description}
              </p>
            </div>

            {/* Colored Parenthesis Pills */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                CORE OBJECTIVES &amp; IMPACT
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeItem.tags.map((tag) => (
                  <span
                    key={tag.text}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 ${tag.accentClass}`}
                  >
                    ( {tag.text} )
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
