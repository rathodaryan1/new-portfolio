"use client";

import { personal } from "@/data/personal";
import { socialLinks, resumeUrl } from "@/data/social";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-28 relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 flex flex-col justify-center items-center text-center max-w-3xl mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full"
      >
        {/* Circular Avatar Photo with Priority Next.js Image */}
        <div className="relative mb-6 sm:mb-8">
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={personal.avatarUrl}
              alt="Aryan Rathod — Full Stack Developer & Founder of Optenary"
              fill
              sizes="(max-width: 640px) 128px, 176px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Headline Name */}
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2 sm:mb-3">
          {personal.name}
        </h1>

        {/* Subtitle Role */}
        <p className="text-base sm:text-xl font-medium text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-5">
          {personal.title}
        </p>

        {/* Founder Pill Badge with Optenary Logo */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F4F4F1] dark:bg-[#1E1E1D] text-neutral-800 dark:text-neutral-200 border border-neutral-300/60 dark:border-neutral-700/60 mb-5 sm:mb-6 shadow-xs max-w-full">
          <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
            <Image
              src="/optenary-logo.png"
              alt="Optenary Logo"
              fill
              sizes="16px"
              className="object-cover"
            />
          </div>
          <span className="truncate">{personal.founderBadge}</span>
        </div>

        {/* Concise Statement: Who I am & What I Build */}
        <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-6 sm:mb-8">
          Computer Engineering student from Gujarat, India. I engineer responsive web applications, custom e-commerce platforms, SaaS systems, and digital solutions with clean architecture and modern user experiences.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-xs"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Crisp Official SVG Social Links Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:scale-105 flex items-center justify-center shadow-xs"
            >
              {social.name === "LinkedIn" && <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A66C2]" />}
              {social.name === "GitHub" && <Github className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 dark:text-white" />}
              {social.name === "Instagram" && <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#E4405F]" />}
              {social.name === "X (Twitter)" && <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 dark:text-white" />}
              {social.name === "Email" && <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA4335]" />}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
