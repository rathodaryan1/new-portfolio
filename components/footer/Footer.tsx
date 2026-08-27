import Link from "next/link";
import { socialLinks } from "@/data/social";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
};

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand info */}
        <div>
          <Link href="/" className="font-extrabold text-base text-neutral-900 dark:text-neutral-100">
            Aryan Rathod
          </Link>
          <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">
            Full Stack Developer • Founder • Builder
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = iconMap[s.iconName] || Mail;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} Aryan Rathod. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
