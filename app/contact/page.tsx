import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Aryan Rathod | Full Stack Developer & Founder",
  description:
    "Get in touch with Aryan Rathod for software engineering projects, web applications, custom platforms, technical consultation, or business inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Aryan Rathod | Full Stack Developer & Founder",
    description:
      "Get in touch with Aryan Rathod for software engineering projects, web applications, custom platforms, technical consultation, or business inquiries.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Aryan Rathod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aryan Rathod | Full Stack Developer & Founder",
    description:
      "Get in touch with Aryan Rathod for software engineering projects, web applications, custom platforms, technical consultation, or business inquiries.",
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-custom text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
