import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://optenary.tech";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aryan Rathod | Full Stack Developer & Founder of Optenary",
  description:
    "Aryan Rathod is a Computer Engineering student, Full Stack Developer, and Founder of Optenary based in Ahmedabad, Gujarat, building modern web applications, e-commerce platforms, and digital solutions.",
  keywords: [
    "Aryan Rathod",
    "Aryan Rathod developer",
    "Aryan Rathod software developer",
    "Aryan Rathod web developer",
    "Aryan Rathod Ahmedabad",
    "Aryan Rathod Optenary",
    "Aryan Rathod portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Mehta Dairy",
    "Optenary Technology",
    "Software Engineer Gujarat"
  ],
  authors: [{ name: "Aryan Rathod", url: siteUrl }],
  creator: "Aryan Rathod",
  publisher: "Aryan Rathod",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Aryan Rathod | Full Stack Developer & Founder of Optenary",
    description:
      "Aryan Rathod is a Computer Engineering student, Full Stack Developer, and Founder of Optenary based in Ahmedabad, Gujarat, building modern web applications, custom e-commerce platforms, and digital solutions.",
    url: siteUrl,
    siteName: "Aryan Rathod",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/profile/aryan.png",
        width: 800,
        height: 800,
        alt: "Aryan Rathod — Full Stack Developer & Founder of Optenary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Rathod | Full Stack Developer & Founder of Optenary",
    description:
      "Computer Engineering student, Full Stack Developer, and Founder of Optenary building modern web applications and digital solutions.",
    creator: "@_rathodaryan_",
    images: ["/profile/aryan.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Aryan Rathod",
  givenName: "Aryan",
  familyName: "Rathod",
  url: siteUrl,
  image: `${siteUrl}/profile/aryan.png`,
  jobTitle: "Full Stack Developer",
  description:
    "Aryan Rathod is a Computer Engineering student, Full Stack Developer, and Founder of Optenary based in Ahmedabad, Gujarat.",
  worksFor: {
    "@type": "Organization",
    name: "Optenary",
    url: "https://optenary.tech",
    logo: `${siteUrl}/optenary-logo.png`,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "R.C. Technical Institute, Ahmedabad",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Full Stack Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "E-Commerce Architecture",
    "Software Engineering",
    "REST APIs"
  ],
  sameAs: [
    "https://www.linkedin.com/in/rathodaryan/",
    "https://github.com/rathodaryan1",
    "https://www.instagram.com/_rathodaryan_/",
    "https://x.com/_rathodaryan_",
    "https://optenary.tech/"
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Aryan Rathod — Portfolio",
  description: "Official personal portfolio and project showcase of Aryan Rathod.",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-custom text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
