"use client";

import Link from "next/link";
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
      className="card-hover-line group rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Screenshot */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-200/50 dark:border-neutral-800/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Bold Black Title */}
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-3 tracking-tight">
              {project.title}
            </h3>
          </Link>

          {/* Off-white Light Grey Feature Pills with Lucide SVG Icons matching screenshot */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.featureBadges?.map((badge, idx) => {
              const IconComponent = iconMap[badge.icon] || Zap;
              return (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#EFEFEA] dark:bg-[#252523] text-neutral-800 dark:text-neutral-200 border border-neutral-300/70 dark:border-neutral-700/70 shadow-2xs flex items-center gap-1.5"
                >
                  <IconComponent className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                  <span>{badge.label}</span>
                </span>
              );
            })}
          </div>

          {/* Description */}
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Two Action Buttons side by side */}
      <div className="px-6 pb-6 pt-0 grid grid-cols-2 gap-2.5">
        <a
          href={project.githubUrl || `/projects/${project.slug}`}
          target={project.githubUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <a
          href={project.liveUrl || `/projects/${project.slug}`}
          target={project.liveUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
}
