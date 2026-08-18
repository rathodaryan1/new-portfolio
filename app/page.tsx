import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { StatementBanner } from "@/components/hero/StatementBanner";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { OptenarySection } from "@/components/optenary/OptenarySection";
import { Journey } from "@/components/journey/Journey";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/data/site";

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  mainEntity: {
    "@id": `${siteConfig.url}/#person`,
  },
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
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
      <StatementBanner />
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
