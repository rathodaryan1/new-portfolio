import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Education } from "@/components/education/Education";
import { Journey } from "@/components/journey/Journey";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Education & Academic Background | Aryan Rathod",
  description:
    "Diploma in Computer Engineering studies at R.C. Technical Institute, Ahmedabad, covering data structures, DBMS, algorithms, and software engineering principles.",
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
  openGraph: {
    title: "Education & Academic Background | Aryan Rathod",
    description:
      "Diploma in Computer Engineering studies at R.C. Technical Institute, Ahmedabad, covering data structures, DBMS, algorithms, and software engineering principles.",
    url: `${siteConfig.url}/education`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Education & Academic Background — Aryan Rathod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education & Academic Background | Aryan Rathod",
    description:
      "Diploma in Computer Engineering studies at R.C. Technical Institute, Ahmedabad, covering data structures, DBMS, algorithms, and software engineering principles.",
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
  },
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <Education />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}
