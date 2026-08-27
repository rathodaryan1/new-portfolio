"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { resumeUrl } from "@/data/social";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Work", href: "/work" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-6 transition-all duration-300">
      <nav className="w-full max-w-4xl rounded-full nav-loop-border px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg shadow-neutral-950/5">
        {/* Brand Name Logo matching Mobile Screenshot */}
        <Link
          href="#hero"
          className="font-bold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity truncate max-w-[160px] sm:max-w-none"
        >
          Aryan Rathod
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${isActive
                    ? "bg-neutral-200/90 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Controls matching Mobile Screenshot (Theme Toggle + Menu Toggle) */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Resume Button on Desktop */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-200/80 dark:bg-neutral-800/80 hover:bg-neutral-300/80 dark:hover:bg-neutral-700/80 text-neutral-900 dark:text-neutral-100 transition-all border border-neutral-300/50 dark:border-neutral-700/50"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Hamburger Menu Toggle matching Screenshot */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-3 right-3 rounded-3xl glass-pill border border-neutral-200 dark:border-neutral-800 p-4 shadow-2xl flex flex-col space-y-1.5 animate-slide-up">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-2xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 block shadow-xs"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
