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
  title: "Dev Mittal — Backend & Full-Stack Engineer",
  description:
    "Portfolio of Dev Mittal — IIT Palakkad. Backend-focused engineer building production-grade systems: cloud-native platforms, secure campus infrastructure, and scalable APIs.",
  keywords: [
    "Dev Mittal",
    "IIT Palakkad",
    "Backend Engineer",
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
    title: "Dev Mittal — Backend & Full-Stack Engineer",
    description:
      "Engineering reliable systems with real-world impact. IIT Palakkad | Next.js · TypeScript · FastAPI · Docker · Kubernetes",
    url: "/",
    siteName: "Dev Mittal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mittal — Backend & Full-Stack Engineer",
    description:
      "Engineering reliable systems with real-world impact. IIT Palakkad.",
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
  jobTitle: "Backend & Full-Stack Engineer",
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
