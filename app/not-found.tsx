import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Aryan Rathod",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] dark:bg-[#0F0F0E] text-[#171717] dark:text-[#F5F5F5] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md mx-auto p-8 sm:p-10 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/80 dark:border-neutral-800/80 shadow-lg">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 mb-4">
          Error 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          The page you requested could not be found or has been moved. Explore Aryan Rathod&apos;s portfolio from the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
