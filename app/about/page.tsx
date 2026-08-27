import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { About } from "@/components/about/About";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Aryan Rathod | Full Stack Developer & Founder of Optenary",
  description:
    "Learn about Aryan Rathod — Full Stack Developer, Computer Engineering student at R.C. Technical Institute, and Founder of Optenary based in Ahmedabad, Gujarat.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Aryan Rathod | Full Stack Developer & Founder of Optenary",
    description:
      "Learn about Aryan Rathod — Full Stack Developer, Computer Engineering student at R.C. Technical Institute, and Founder of Optenary based in Ahmedabad, Gujarat.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Aryan Rathod — Full Stack Developer & Founder of Optenary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aryan Rathod | Full Stack Developer & Founder of Optenary",
    description:
      "Learn about Aryan Rathod — Full Stack Developer, Computer Engineering student at R.C. Technical Institute, and Founder of Optenary based in Ahmedabad, Gujarat.",
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <About />
      </main>
      <Footer />
    </div>
  );
}
