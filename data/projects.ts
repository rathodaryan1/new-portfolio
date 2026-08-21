export interface CaseStudyDetail {
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  businessImpact?: string[];
  techStackDetailed: { name: string; category: string }[];
}

export interface FeatureBadge {
  icon: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  altText: string;
  accentColor: string;
  technologies: string[];
  featureBadges: FeatureBadge[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy: CaseStudyDetail;
}

export const projects: Project[] = [
  {
    slug: "mehta-dairy",
    title: "Mehta Dairy",
    subtitle: "Custom E-Commerce Platform for a Heritage Food Brand",
    category: "B2C • CUSTOM E-COMMERCE • FOOD & RETAIL",
    description: "A custom digital commerce platform engineered for Mehta Dairy & Sweet Mart, featuring mobile OTP auth, Razorpay online payments, dynamic delivery zone validation, and automated WhatsApp order notifications.",
    image: "/projects/mehta-dairy.png",
    altText: "Mehta Dairy custom e-commerce website",
    accentColor: "rgba(217, 119, 6, 0.15)",
    liveUrl: "https://www.mehtadairy.com/",
    githubUrl: "https://github.com/rathodaryan1",
    featured: true,
    featureBadges: [
      { icon: "shopping-cart", label: "Custom E-Commerce" },
      { icon: "credit-card", label: "Razorpay Payments" },
      { icon: "zap", label: "Order Management" }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Razorpay",
      "MSG91",
      "AiSensy",
      "PWA"
    ],
    caseStudy: {
      overview: "Mehta Dairy & Sweet Mart is an established regional brand specializing in authentic Indian sweets, fresh dairy, and festive hampers. To serve digital-native consumers and automate order fulfillment, Optenary engineered a custom, high-concurrency digital commerce platform tailored specifically to perishable goods logistics.",
      challenge: "The primary challenge was modernizing a traditional retail business without disrupting daily store operations. The client needed automated delivery radius validation, instant phone OTP login for quick ordering, automated WhatsApp order updates, seamless online payments via Razorpay alongside Cash on Delivery, and a responsive back-office dashboard to manage order assembly and delivery dispatch.",
      solution: "We designed and built a bespoke Next.js and Supabase platform featuring dynamic pincode delivery zone validation, single-tap Razorpay payment integration, SMS & WhatsApp notifications via MSG91 and AiSensy, and a lightweight PWA storefront that loads in under 1 second.",
      keyFeatures: [
        "Interactive Product Catalogue & Smart Search",
        "Instant Mobile Phone OTP Authentication (MSG91)",
        "Razorpay Payment Gateway & Cash on Delivery Option",
        "Automated WhatsApp Order Confirmation & Updates (AiSensy)",
        "Dynamic Delivery Zone & Radius Validation",
        "Customer Dashboard with Real-Time Order Tracking",
        "Full Administrative Back-Office (Product CRUD, Inventory, Orders)",
        "Progressive Web App (PWA) with Offline Capability & Fast Caching",
        "Automated Backup, Data Export & Analytics Integration"
      ],
      businessImpact: [
        "Digital Ordering Channel Launched with zero downtime",
        "End-to-end Automated WhatsApp notification lifecycle",
        "Seamless digital payment reconciliation via Razorpay"
      ],
      techStackDetailed: [
        { name: "Next.js", category: "Full-Stack Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "Supabase", category: "Backend & Authentication" },
        { name: "PostgreSQL", category: "Relational Database" },
        { name: "Razorpay", category: "Payment Processing" },
        { name: "MSG91", category: "SMS & OTP Gateway" },
        { name: "AiSensy", category: "WhatsApp Automation API" },
        { name: "PWA", category: "Mobile Web Standard" }
      ]
    }
  },
  {
    slug: "optenary",
    title: "Optenary",
    subtitle: "Official Technology & Digital Product Agency Platform",
    category: "AGENCY • DIGITAL PRODUCTS • SOFTWARE",
    description: "The official web platform and client showcase for Optenary, built with Next.js App Router, responsive design systems, server-rendered case studies, and structured technical quotation workflows.",
    image: "/projects/optenary.png",
    altText: "Optenary technology agency website",
    accentColor: "rgba(0, 201, 141, 0.15)",
    liveUrl: "https://optenary.tech/",
    githubUrl: "https://github.com/rathodaryan1",
    featured: true,
    featureBadges: [
      { icon: "bot", label: "AI Powered" },
      { icon: "zap", label: "Real-Time Features" },
      { icon: "palette", label: "Automation" }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    caseStudy: {
      overview: "Optenary is a digital product agency designing and engineering custom websites, e-commerce platforms, custom software, and AI automation for businesses.",
      challenge: "Creating a high-trust agency platform that effectively showcases real engineering work, case studies, technical architecture capabilities, and project enquiry channels.",
      solution: "Engineered a high-performance Next.js web application built with server components, fluid animations, dynamic case studies, and responsive design systems.",
      keyFeatures: [
        "Interactive Agency Case Study Showcase",
        "Services & Technical Architecture Overview",
        "Responsive Client Enquiry & Quotation Workflow",
        "Ultra-Fast Page Load Times with Next.js App Router",
        "Dark & Light Mode UI Architecture"
      ],
      techStackDetailed: [
        { name: "Next.js", category: "Full-Stack Framework" },
        { name: "TypeScript", category: "Type Safety" },
        { name: "Tailwind CSS", category: "Design System" },
        { name: "Framer Motion", category: "Motion Physics" }
      ]
    }
  },
  {
    slug: "urban-nest",
    title: "Urban Nest",
    subtitle: "Enterprise Co-Living & Housing SaaS Platform",
    category: "B2B2C • SAAS & MOBILE APP",
    description: "An enterprise co-living management system featuring bed occupancy matrices, automated tenant rent billing, digital lease management, and maintenance dispatch coordination.",
    image: "/projects/urban-nest.png",
    altText: "Urban Nest property management dashboard",
    accentColor: "rgba(37, 99, 235, 0.15)",
    liveUrl: "https://urbannest1.vercel.app/",
    githubUrl: "https://github.com/rathodaryan1",
    featured: false,
    featureBadges: [
      { icon: "pie-chart", label: "Analytics Dashboard" },
      { icon: "database", label: "Data Management" },
      { icon: "smartphone", label: "Property Management" }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    caseStudy: {
      overview: "Urban Nest is a unified SaaS ecosystem built to simplify residential operations for co-living operators, multi-family housing managers, and student housing networks across multiple locations.",
      challenge: "Co-living operators struggle with fragmented workflows: manual rent collection, paper lease agreements, uncoordinated maintenance requests, and inefficient bed occupancy tracking across facilities.",
      solution: "Optenary developed an all-in-one SaaS platform featuring an intuitive property manager dashboard alongside a responsive tenant portal for automated billing, digital agreement signing, and maintenance ticketing.",
      keyFeatures: [
        "Interactive Bed & Room Occupancy Matrix",
        "Automated Digital Rent Invoicing & Payment Gateway Integration",
        "Tenant Onboarding & Document Verification Workflow",
        "Real-Time Maintenance Ticketing & Vendor Dispatch",
        "Multi-Property Financial Analytics & Yield Reporting"
      ],
      techStackDetailed: [
        { name: "Next.js", category: "Frontend & API Routes" },
        { name: "TypeScript", category: "Type Safety" },
        { name: "Supabase", category: "Database & Auth" },
        { name: "PostgreSQL", category: "Storage" },
        { name: "Tailwind CSS", category: "Styling" }
      ]
    }
  },
  {
    slug: "shree-enterprise",
    title: "Shree Enterprise",
    subtitle: "Industrial Fire Protection B2B Portal",
    category: "B2B • CORPORATE PLATFORM",
    description: "A corporate industrial platform for safety equipment and suppression systems, featuring structured compliance product cataloging and interactive Request for Quote (RFQ) workflows.",
    image: "/projects/shree-enterprise.png",
    altText: "Shree Enterprise fire safety website",
    accentColor: "rgba(220, 38, 38, 0.15)",
    liveUrl: "https://shreeenterprisebhavnagar.com/",
    githubUrl: "https://github.com/rathodaryan1",
    featured: false,
    featureBadges: [
      { icon: "flame", label: "Fire Safety Portal" },
      { icon: "file-text", label: "Technical RFQ" },
      { icon: "database", label: "Product/Datasheet Hub" }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    caseStudy: {
      overview: "Shree Enterprise supplies heavy industrial fire safety equipment, suppression systems, and compliance safety services to industrial clients across Gujarat.",
      challenge: "The client required a high-trust digital presence that clearly communicates safety standards, equipment specifications, regulatory compliance, and enables fast technical quote requests.",
      solution: "Optenary designed and developed a modern corporate portal with clean industrial aesthetics, structured product cataloging, downloadable safety datasheets, and direct RFQ (Request for Quote) forms.",
      keyFeatures: [
        "Comprehensive Industrial Equipment Catalog",
        "Compliance & Safety Datasheet Resource Hub",
        "Interactive Request for Quote (RFQ) Workflow",
        "Fully Responsive Industrial Mobile Layout",
        "High-Performance Technical SEO Implementation"
      ],
      techStackDetailed: [
        { name: "Next.js", category: "Web Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "Tailwind CSS", category: "Design System" },
        { name: "Vercel", category: "Global Edge Hosting" }
      ]
    }
  },
  {
    slug: "vishal-masala",
    title: "Vishal Masala",
    subtitle: "Headless E-Commerce Spices Engine",
    category: "B2C & B2B • HEADLESS COMMERCE",
    description: "A custom headless e-commerce system built for regional spice distribution, engineered with sub-second product indexing, multi-weight variant pricing, and streamlined checkout.",
    image: "/projects/vishal-masala.png",
    altText: "Vishal Masala e-commerce website",
    accentColor: "rgba(234, 88, 12, 0.15)",
    liveUrl: "https://vishalmasala.vercel.app/",
    githubUrl: "https://github.com/rathodaryan1",
    featured: false,
    featureBadges: [
      { icon: "shopping-cart", label: "Headless Commerce" },
      { icon: "zap", label: "Product Search" },
      { icon: "smartphone", label: "Responsive Commerce" }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs"
    ],
    caseStudy: {
      overview: "Vishal Masala is a premier regional spice manufacturer and distributor expanding into direct-to-consumer and wholesale digital channels.",
      challenge: "Standard e-commerce templates failed to accommodate multi-weight tier pricing, custom bulk shipping calculations based on geographic zones, and instant search across complex product variants.",
      solution: "We engineered a decoupled headless architecture with sub-100ms response times, custom inventory pricing engines for dynamic weight variants, and streamlined checkout workflows.",
      keyFeatures: [
        "Sub-Second Faceted Product Search & Filtering",
        "Dynamic Multi-Weight Variant Pricing Engine",
        "Wholesale Bulk Order Portal with Custom Invoicing",
        "Automated Shipping Rate Calculation by Pincode & Weight",
        "Optimized Mobile Checkout Flow"
      ],
      techStackDetailed: [
        { name: "Next.js", category: "Storefront" },
        { name: "TypeScript", category: "Architecture" },
        { name: "Node.js", category: "Custom Engine API" },
        { name: "PostgreSQL", category: "Catalog Database" }
      ]
    }
  },
  {
    slug: "laalo",
    title: "Laalo",
    subtitle: "Immersive Theatrical Campaign Experience",
    category: "MEDIA & ENTERTAINMENT • IMMERSIVE WEB DESIGN",
    description: "An experiential cinematic landing destination for theatrical film promotion, combining motion design, audio-video integration, and direct box office ticket booking channels.",
    image: "/projects/laalo.png",
    altText: "Laalo theatrical campaign website",
    accentColor: "rgba(147, 51, 234, 0.15)",
    liveUrl: "https://laalo-movie.vercel.app/",
    githubUrl: "https://github.com/rathodaryan1",
    featured: false,
    featureBadges: [
      { icon: "film", label: "Cinematic Motion" },
      { icon: "volume", label: "Audio & Video" },
      { icon: "ticket", label: "Ticket Booking" }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    caseStudy: {
      overview: "Laalo is a critically acclaimed theatrical cinema production requiring an experiential digital landing destination to drive box office engagement and ticket conversions.",
      challenge: "Standard promotional pages lack dynamic visual impact, failing to capture the cinematic atmosphere, character narratives, and musical score of the film.",
      solution: "Optenary developed an immersive multimedia web experience with rich interactive storytelling, dynamic video backdrops, seamless ticket booking integrations, and motion design.",
      keyFeatures: [
        "Immersive Cinematic Video & Audio Showcase",
        "Direct Box Office & Ticket Platform Integration",
        "Interactive Cast & Character Storyboard",
        "Fluid Framer Motion Animation Architecture",
        "High-Performance Edge Deployment"
      ],
      techStackDetailed: [
        { name: "Next.js", category: "Interactive Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "Tailwind CSS", category: "Design System" },
        { name: "Framer Motion", category: "Interactive Motion" }
      ]
    }
  }
];
