import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optenary.tech"),
  title: "Aryan Rathod — Full Stack Developer & Founder",
  description:
    "Aryan Rathod is a Full Stack Developer, Computer Engineering student, and Founder of Optenary, building modern web applications, e-commerce platforms, custom software, and digital products.",
  keywords: [
    "Aryan Rathod",
    "Optenary",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer Ahmedabad",
    "Next.js Developer",
    "Mehta Dairy",
    "Digital Product Agency"
  ],
  authors: [{ name: "Aryan Rathod" }],
  openGraph: {
    title: "Aryan Rathod — Full Stack Developer & Founder",
    description:
      "Computer Engineering student and developer building modern web applications, custom e-commerce platforms, and software products.",
    url: "https://optenary.tech",
    siteName: "Aryan Rathod Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Rathod — Full Stack Developer & Founder",
    description:
      "Building real digital products and custom web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-custom text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
