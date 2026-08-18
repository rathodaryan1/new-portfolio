"use client";

import { personal } from "@/data/personal";
import { socialLinks, resumeUrl } from "@/data/social";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 flex flex-col justify-center items-center text-center max-w-4xl mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full"
      >
        {/* Circular Avatar Photo */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl bg-neutral-100 dark:bg-neutral-900">
            <img
              src={personal.avatarUrl}
              alt="Aryan Rathod — Full Stack Developer & Founder of Optenary"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Eyebrow Label */}
        <span className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
          FULL STACK DEVELOPER • FOUNDER
        </span>

        {/* Large Dominant Heading Name */}
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3 leading-[1.08]">
          ARYAN RATHOD
        </h1>

        {/* Subtitle Role */}
        <p className="text-lg sm:text-2xl font-bold text-neutral-700 dark:text-neutral-300 mb-4">
          Full Stack Developer &amp; Founder
        </p>

        {/* Founder Pill Badge with Optenary Logo */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F4F4F1] dark:bg-[#1E1E1D] text-neutral-800 dark:text-neutral-200 border border-neutral-300/60 dark:border-neutral-700/60 mb-6 shadow-xs max-w-full">
          <div className="w-4 h-4 rounded-md overflow-hidden shrink-0 flex items-center justify-center">
            <img
              src="/optenary-logo.png"
              alt="Optenary Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="truncate">{personal.founderBadge}</span>
        </div>

        {/* Description Narrative */}
        <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Computer Engineering student and developer focused on building modern web applications, AI-powered solutions, e-commerce platforms, and digital products.
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-xs"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Official SVG Social Links Row */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:scale-105 flex items-center justify-center shadow-xs"
            >
              {social.name === "LinkedIn" && <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0A66C2]" />}
              {social.name === "GitHub" && <Github className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-900 dark:text-white" />}
              {social.name === "Instagram" && <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E4405F]" />}
              {social.name === "X (Twitter)" && <Twitter className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-900 dark:text-white" />}
              {social.name === "Email" && <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EA4335]" />}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
