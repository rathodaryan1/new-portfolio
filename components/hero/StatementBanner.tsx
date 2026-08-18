"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Cpu, Layout, Sparkles } from "lucide-react";

const capabilities = [
  { label: "WEB APPLICATIONS", icon: Globe },
  { label: "E-COMMERCE", icon: ShoppingCart },
  { label: "AI & AUTOMATION", icon: Cpu },
  { label: "SOFTWARE PRODUCTS", icon: Layout },
  { label: "DIGITAL EXPERIENCES", icon: Sparkles },
];

export function StatementBanner() {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
          I build real products.
        </h2>

        <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          From business websites and e-commerce platforms to dashboards, automation systems, and digital products.
        </p>

        {/* Subtle Horizontal Capability Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <span
                key={cap.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#F4F4F1] dark:bg-[#1E1E1D] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                <span>{cap.label}</span>
              </span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
