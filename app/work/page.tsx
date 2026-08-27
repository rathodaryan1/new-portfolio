import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Projects } from "@/components/projects/Projects";
import { OptenarySection } from "@/components/optenary/OptenarySection";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Work & Selected Projects | Aryan Rathod",
  description:
    "Explore production web applications, high-concurrency e-commerce platforms, SaaS systems, and bespoke software built by Aryan Rathod.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Work & Selected Projects | Aryan Rathod",
    description:
      "Explore production web applications, high-concurrency e-commerce platforms, SaaS systems, and bespoke software built by Aryan Rathod.",
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Work & Selected Projects by Aryan Rathod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Selected Projects | Aryan Rathod",
    description:
      "Explore production web applications, high-concurrency e-commerce platforms, SaaS systems, and bespoke software built by Aryan Rathod.",
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <Projects />
        <OptenarySection />
      </main>
      <Footer />
    </div>
  );
}
