export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
}

export const journeyTimeline: JourneyItem[] = [
  {
    year: "2024 — 2027",
    title: "Diploma in Computer Engineering",
    subtitle: "R.C. Technical Institute, Ahmedabad",
    description: "Pursuing core computer engineering education with focus on software engineering, data structures, database management systems, computer networks, and modern web application development."
  },
  {
    year: "2025",
    title: "Practical Software & Product Engineering",
    subtitle: "Full-Stack Development & Architecture",
    description: "Expanded practical development work across modern frontend frameworks (React, Next.js), backend systems (Node.js, Supabase), relational databases, and REST APIs."
  },
  {
    year: "2026",
    title: "Founded Optenary",
    subtitle: "Technology & Digital Product Agency",
    description: "Established Optenary to design and build custom websites, e-commerce platforms, web applications, and AI automation systems for businesses looking for modern technical solutions."
  },
  {
    year: "2026",
    title: "Client Platforms & Production Deployments",
    subtitle: "Mehta Dairy, Shree Enterprise & SaaS Systems",
    description: "Built and deployed major digital platforms including the full custom e-commerce engine for Mehta Dairy, industrial corporate portals, and custom SaaS platforms."
  }
];
