import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Skills } from "@/components/skills/Skills";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Technical Skills & Focus | Aryan Rathod",
  description:
    "Explore the technical stack, programming languages, modern frameworks (Next.js, React, TypeScript), databases, and cloud developer tools used by Aryan Rathod.",
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
  openGraph: {
    title: "Technical Skills & Focus | Aryan Rathod",
    description:
      "Explore the technical stack, programming languages, modern frameworks (Next.js, React, TypeScript), databases, and cloud developer tools used by Aryan Rathod.",
    url: `${siteConfig.url}/skills`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technical Skills & Focus — Aryan Rathod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills & Focus | Aryan Rathod",
    description:
      "Explore the technical stack, programming languages, modern frameworks (Next.js, React, TypeScript), databases, and cloud developer tools used by Aryan Rathod.",
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
  },
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
