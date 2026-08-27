import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Aryan Rathod",
    "Rathod Aryan",
    "Aryan Rathod developer",
    "Aryan Rathod founder",
    "Aryan Rathod Optenary",
    "Aryan Rathod portfolio",
    "Aryan Rathod computer engineering",
    "Aryan Rathod web developer",
    "Aryan Rathod GitHub",
    "Aryan Rathod LinkedIn",
    "Computer Engineering student",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Supabase"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        alt: `${siteConfig.name} — ${siteConfig.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@_rathodaryan_",
    images: ["/og-image.jpg"],
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

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      alternateName: ["Rathod Aryan", "Aryan Rathod Portfolio"],
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: "Rathod Aryan",
      givenName: "Aryan",
      familyName: "Rathod",
      url: `${siteConfig.url}/`,
      image: `${siteConfig.url}/profile/aryan.png`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      worksFor: {
        "@id": "https://optenary.in/#organization",
      },
      founder: {
        "@id": "https://optenary.in/#organization",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: siteConfig.institution,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.state,
          addressCountry: siteConfig.location.countryCode,
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        addressCountry: siteConfig.location.countryCode,
      },
      knowsAbout: [
        "Full Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
        "Software Engineering",
        "E-Commerce Architecture",
        "AI Automation"
      ],
      sameAs: siteConfig.sameAs,
    },
    {
      "@type": "Organization",
      "@id": "https://optenary.in/#organization",
      name: "Optenary",
      url: "https://optenary.in/",
      logo: `${siteConfig.url}/optenary-logo.png`,
      founder: {
        "@id": `${siteConfig.url}/#person`,
      },
      description:
        "Digital product and technology company designing and building custom web applications, high-throughput e-commerce platforms, and bespoke software solutions.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
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
