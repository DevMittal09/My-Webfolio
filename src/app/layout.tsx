import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    "Portfolio",
  ],
  authors: [{ name: "Dev Mittal" }],
  openGraph: {
    title: "Dev Mittal — Backend & Full-Stack Engineer",
    description:
      "Engineering reliable systems with real-world impact. IIT Palakkad | Next.js · TypeScript · FastAPI · Docker · Kubernetes",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dev Mittal — Backend & Full-Stack Engineer",
    description:
      "Engineering reliable systems with real-world impact. IIT Palakkad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-[var(--font-inter)] antialiased">{children}</body>
    </html>
  );
}
