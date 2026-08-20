import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  const pageUrl = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: `${project.title} — Case Study | Aryan Rathod`,
    description: project.description,
    keywords: [
      project.title,
      `${project.title} case study`,
      `Aryan Rathod ${project.title}`,
      "Aryan Rathod projects",
      "Aryan Rathod developer",
      ...project.technologies,
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Aryan Rathod`,
      description: project.description,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} — Engineered by Aryan Rathod`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Aryan Rathod`,
      description: project.description,
      creator: "@_rathodaryan_",
      images: [project.image],
    },
  };
}

function getProjectSchema(project: (typeof projects)[0], pageUrl: string) {
  const isSaaS = project.slug === "urban-nest";
  const isEcommerce = project.slug === "mehta-dairy" || project.slug === "vishal-masala";

  return {
    "@context": "https://schema.org",
    "@type": isSaaS ? "SoftwareApplication" : "WebApplication",
    name: project.title,
    applicationCategory: isSaaS
      ? "BusinessApplication"
      : isEcommerce
      ? "ShoppingApplication"
      : "BusinessApplication",
    operatingSystem: "Web",
    description: project.description,
    url: pageUrl,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: `${siteConfig.url}${project.image}`,
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;
  const pageUrl = `${siteConfig.url}/projects/${project.slug}`;
  const jsonLd = getProjectSchema(project, pageUrl);

  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Case Study Hero Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 mb-3">
            {project.category}
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-neutral-600 dark:text-neutral-300 mb-6">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Large Screenshot Preview with Subtle Browser Window Frame */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl mb-16 bg-neutral-900 flex flex-col">
          {/* Top Browser Bar */}
          <div className="h-6 px-4 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200/70 dark:border-neutral-800/70 flex items-center gap-1.5 z-10 shrink-0 select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>

          <div className="relative flex-1 w-full h-full overflow-hidden bg-neutral-950">
            <Image
              src={project.image}
              alt={project.altText || `${project.title} — Developed by Aryan Rathod`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Overview & Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <span>Project Overview</span>
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span>The Challenge</span>
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-lg mb-16">
          <h2 className="text-2xl font-extrabold mb-4 text-emerald-400">
            Our Solution &amp; Engineering Approach
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6">
            Key Capabilities &amp; Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {caseStudy.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-start gap-3 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-blue-500" />
            <span>Technology Stack</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {caseStudy.techStackDetailed.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  {tech.category}
                </span>
                <p className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200 dark:border-neutral-800 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-3">
            Have a project in mind?
          </h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-6">
            Let&apos;s connect and build a high-performance solution for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
          >
            <span>Start a Conversation</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
