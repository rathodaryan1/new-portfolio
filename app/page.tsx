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

export default function Home() {
  return (
    <main className="relative min-h-screen">
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
