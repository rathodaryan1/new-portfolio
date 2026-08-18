import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { OptenarySection } from "@/components/optenary/OptenarySection";
import { Journey } from "@/components/journey/Journey";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://optenary.tech/#webpage",
  url: "https://optenary.tech",
  name: "Aryan Rathod | Full Stack Developer & Founder of Optenary",
  description:
    "Aryan Rathod is a Full Stack Developer, Computer Engineering student, and Founder of Optenary, building modern web applications, e-commerce platforms, and digital solutions.",
  mainEntity: {
    "@id": "https://optenary.tech/#person",
  },
  isPartOf: {
    "@id": "https://optenary.tech/#website",
  },
  inLanguage: "en-US",
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OptenarySection />
      <Journey />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
