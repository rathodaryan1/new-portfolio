export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building fast, accessible, and dynamic user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    title: "Backend & Database",
    description: "Designing robust APIs, data models, and server infrastructure.",
    skills: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Database Design"
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Modern developer workflow tools and cloud deployment services.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Hostinger",
      "Shopify",
      "WordPress",
      "VS Code",
      "Search Console"
    ]
  },
  {
    title: "AI & Automation",
    description: "Integrating intelligent agents, payments, and workflow engines.",
    skills: [
      "AI Agents",
      "AI Automation",
      "API Integration",
      "WhatsApp Automation",
      "Payment Integration",
      "SEO",
      "Digital Products"
    ]
  }
];
