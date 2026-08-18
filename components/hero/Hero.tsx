"use client";

import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 flex flex-col justify-center items-center text-center max-w-3xl mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full"
      >
        {/* Circular Avatar Photo */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl bg-neutral-100 dark:bg-neutral-900">
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Headline Name */}
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2 sm:mb-3">
          {personal.name}
        </h1>

        {/* Subtitle Role */}
        <p className="text-base sm:text-xl font-medium text-neutral-600 dark:text-neutral-400 mb-5 sm:mb-6">
          {personal.title}
        </p>

        {/* Founder Pill Badge with Optenary Logo Emblem instead of 4 dots */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F4F4F1] dark:bg-[#1E1E1D] text-neutral-800 dark:text-neutral-200 border border-neutral-300/50 dark:border-neutral-700/50 mb-6 sm:mb-8 shadow-xs max-w-full">
          {/* Optenary Logo Icon */}
          <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center shrink-0 shadow-2xs">
            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="truncate">{personal.founderBadge}</span>
        </div>

        {/* Bio */}
        <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-6 sm:mb-8">
          Computer Engineering student from Gujarat, India. Passionate about full-stack web development, custom software architecture, algorithms, and clean digital interfaces.
        </p>

        {/* Crisp Official SVG Social Links Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:scale-110 flex items-center justify-center shadow-xs"
            >
              {social.name === "LinkedIn" && <Linkedin className="w-5 h-5 text-[#0A66C2]" />}
              {social.name === "GitHub" && <Github className="w-5 h-5 text-neutral-900 dark:text-white" />}
              {social.name === "Instagram" && <Instagram className="w-5 h-5 text-[#E4405F]" />}
              {social.name === "X (Twitter)" && <Twitter className="w-5 h-5 text-neutral-900 dark:text-white" />}
              {social.name === "Email" && <Mail className="w-5 h-5 text-[#EA4335]" />}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
