import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Dev Mittal — Full-Stack Engineer & Founding CTO",
  description:
    "Portfolio of Dev Mittal — final-year IIT Palakkad student, Founding CTO of Snappito, and builder of IIT Palakkad's guest house booking portal. Full-stack products with Next.js, TypeScript, PostgreSQL, FastAPI, Docker and Kubernetes.",
  keywords: [
    "Dev Mittal",
    "IIT Palakkad",
    "Backend Engineer",
    "Snappito",
    "Founding CTO",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Okta",
    "IAM",
    "Portfolio",
  ],
  authors: [{ name: "Dev Mittal", url: siteConfig.url }],
  creator: "Dev Mittal",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dev Mittal — Full-Stack Engineer & Founding CTO",
    description:
      "Founding CTO at Snappito · IIT Palakkad | Next.js · TypeScript · PostgreSQL · FastAPI · Docker · Kubernetes",
    url: "/",
    siteName: "Dev Mittal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mittal — Full-Stack Engineer & Founding CTO",
    description:
      "Founding CTO at Snappito · Final-year student at IIT Palakkad.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Founding Member & CTO, Snappito",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Palakkad",
  },
  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
    siteConfig.leetcode,
    siteConfig.codeforces,
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "FastAPI",
    "Python",
    "C++",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Supabase",
    "Okta Customer Identity Cloud",
    "Identity & Access Management",
    "PyTorch",
    "Hugging Face Transformers",
    "System Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-[var(--font-inter)] antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
