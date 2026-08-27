import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Journey } from "@/components/journey/Journey";
import { Education } from "@/components/education/Education";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience & Journey | Aryan Rathod",
  description:
    "Explore the development milestones, academic background at R.C. Technical Institute, and founding journey of Optenary by Aryan Rathod.",
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
  openGraph: {
    title: "Experience & Journey | Aryan Rathod",
    description:
      "Explore the development milestones, academic background at R.C. Technical Institute, and founding journey of Optenary by Aryan Rathod.",
    url: `${siteConfig.url}/experience`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Experience & Journey — Aryan Rathod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience & Journey | Aryan Rathod",
    description:
      "Explore the development milestones, academic background at R.C. Technical Institute, and founding journey of Optenary by Aryan Rathod.",
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <Journey />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
