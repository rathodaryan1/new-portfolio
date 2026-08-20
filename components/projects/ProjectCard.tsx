"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import {
  ExternalLink,
  Github,
  Smartphone,
  Moon,
  Zap,
  Bot,
  ShoppingCart,
  Flame,
  Film,
  Database,
  PieChart,
  Palette,
  CreditCard,
  Volume2,
  Ticket,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  moon: Moon,
  zap: Zap,
  bot: Bot,
  "shopping-cart": ShoppingCart,
  flame: Flame,
  film: Film,
  database: Database,
  "pie-chart": PieChart,
  palette: Palette,
  "credit-card": CreditCard,
  volume: Volume2,
  ticket: Ticket,
  "file-text": FileText,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card-loop-border group rounded-3xl flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Subtle Browser Window Frame (16:10 Standardized Container) */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 rounded-t-[1.4rem] border-b border-neutral-200/60 dark:border-neutral-800/60 flex flex-col">
          {/* Minimal Neutral Top Bar with 3 Subtle Window Controls Only */}
          <div className="h-5 px-3 bg-neutral-100/95 dark:bg-neutral-900/95 border-b border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-1.5 z-10 shrink-0 select-none">
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Screenshot Preview with Next.js Image */}
          <div className="relative flex-1 w-full h-full overflow-hidden bg-neutral-950">
            <Image
              src={project.image}
              alt={project.altText || `${project.title} custom platform developed by Aryan Rathod`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
              priority={project.slug === "mehta-dairy"}
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          {/* Title */}
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2.5 tracking-tight hover:opacity-80 transition-opacity">
              {project.title}
            </h3>
          </Link>

          {/* 2–3 Most Important Feature Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.featureBadges?.slice(0, 3).map((badge, idx) => {
              const IconComponent = iconMap[badge.icon] || Zap;
              return (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg sm:rounded-xl text-[11px] font-medium bg-[#EFEFEA] dark:bg-[#262624] text-neutral-800 dark:text-neutral-200 border border-neutral-300/70 dark:border-neutral-700/70 shadow-2xs flex items-center gap-1.5"
                >
                  <IconComponent className="w-3 h-3 text-neutral-500 dark:text-neutral-400 shrink-0" />
                  <span>{badge.label}</span>
                </span>
              );
            })}
          </div>

          {/* Short 2-3 Line Description */}
          <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Two Action Buttons side by side aligned at bottom */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 grid grid-cols-2 gap-2">
        <a
          href={project.githubUrl || `/projects/${project.slug}`}
          target={project.githubUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="py-2 px-2.5 rounded-xl text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <a
          href={project.liveUrl || `/projects/${project.slug}`}
          target={project.liveUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="py-2 px-2.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
}
