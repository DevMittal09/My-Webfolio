import type {
  NavLink,
  Project,
  Experience,
  Achievement,
  SkillGroup,
  ContactLink,
  ArchStep,
  RbacRole,
  PositionOfResponsibility,
} from "@/lib/types";

export const siteConfig = {
  name: "Dev Mittal",
  tagline: "Engineering reliable systems with real world impact",
  oneLiner:
    "Backend focused developer building production grade systems, from cloud native platforms and secure campus infrastructure to enterprise identity management.",
  github: "https://github.com/DevMittal09",
  linkedin: "https://www.linkedin.com/in/dev-mittal-892725285/",
  email: "connectwithdevm@gmail.com",
  leetcode: "https://leetcode.com/u/lazy_wolf09/",
  codeforces: "https://codeforces.com/profile/devmittal09",
  url: "https://devmittal.me",
  college: "IIT Palakkad",
  degree: "BTech Civil Engineering",
  cgpa: "8.54",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroStack = [
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Supabase",
  "Okta CIC",
];

export const aboutParagraphs = [
  "I'm a backend focused engineering student at IIT Palakkad with a strong interest in building reliable, secure, and scalable systems. I’m drawn to problems that require structured thinking, clean architecture, and real-world deployment considerations.",
  "My work centers around designing production-grade applications from implementing role based access control and authentication workflows to building containerized execution environments and orchestrated systems that handle concurrency safely and efficiently.",
  "Beyond development, I’ve led technical initiatives at a national level, where I learned that strong systems and strong teams are built on clarity, ownership, and disciplined execution. I aim to apply the same systems thinking to both software and leadership."
];


export const aboutStats = [
  { label: "CGPA at IIT Palakkad", value: "8.54" },
  { label: "LeetCode + Codeforces", value: "400+" },
  { label: "Inter IIT TechMeet Medals", value: "Gold + Bronze" },
  { label: "Production systems deployed", value: "2" },
];

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Advanced Application Engineering Intern",
    period: "May 2026 – Jul 2026",
    tech: ["Okta CIC", "IAM", "OAuth", "Python", "LLM Automation"],
    bullets: [
      "Configured and provisioned client tenants on Okta Customer Identity Cloud (CIC), supporting identity & access management (IAM) for enterprise environments.",
      "Built AI/LLM-driven automation scripts to streamline tenant configuration workflows, reducing manual operational effort.",
    ],
  },
  {
    company: "IIT Palakkad",
    role: "Administrative Intern",
    period: "Jan 2026 – May 2026",
    github: "https://github.com/DevMittal09/GatePassSecuritySystem.git",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Google OAuth",
    ],
    bullets: [
      "Developed and deployed a production-grade Campus Security & Gate Pass Management System serving the entire IIT Palakkad campus.",
      "Engineered secure RBAC with 6 roles using Supabase Row-Level Security, server-side authentication, and domain-restricted Google OAuth.",
      "Designed real-time QR verification and automated role assignment via PostgreSQL triggers, fully digitizing campus security workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AutoJudge",
    subtitle: "Cloud-Native Coding Evaluation Platform",
    description:
      "A scalable platform to automate programming lab assessment from submission to grading with secure, isolated code execution at scale.",
    bullets: [
      "Architected a cloud-native evaluation engine handling concurrent submissions via Kubernetes Jobs on Minikube.",
      "Built a Next.js + React frontend with SSR for real time code submission and result tracking.",
      "FastAPI backend integrated with Supabase (PostgreSQL + Auth) for secure auth and persistent storage.",
      "Dockerized execution environments to safely run untrusted student code with strict isolation.",
      "Automated compilation, execution, and test case grading eliminating manual TA evaluation.",
    ],
    tech: [
      "Next.js",
      "React",
      "FastAPI",
      "Supabase",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Python",
    ],
    github: "https://github.com/DevMittal09/AutoJudge.git",
    featured: true,
  },
  {
    title: "Campus Security & Gate Pass System",
    subtitle: "Production-Grade Access Control Platform",
    description:
      "A full stack campus security portal managing student exit passes, family visits, employee guest passes, and walk in visitor registration with QR based verification.",
    bullets: [
      "Role-based access control with 6 roles using Supabase Row Level Security and server-side auth.",
      "Multi-step approval workflow with automated email notifications via Resend.",
      "Domain-restricted Google OAuth with automatic role assignment using PostgreSQL triggers.",
      "Real-time QR code validation and entry/exit logging for gate security operations.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Google OAuth",
      "Resend",
    ],
    github: "https://github.com/DevMittal09/GatePassSecuritySystem.git",
    featured: true,
  },
  {
    title: "Financial Sentiment Forecasting",
    subtitle: "Entity-Aware Transformers for Market Prediction",
    description:
      "An end-to-end ML pipeline that extracts entity-level sentiment from financial news and forecasts stock returns across 1, 2, and 5-day horizons.",
    bullets: [
      "Curated and preprocessed a 25K+ entity-level financial news dataset for entity-aware sentiment extraction and temporal return forecasting.",
      "Contributed to the end-to-end ML pipeline architecture, integrating the sentiment-extraction stage with downstream forecasting models.",
      "Benchmarked multiple models — Ridge, XGBoost, LightGBM, and a PyTorch MLP — for forecasting performance comparison.",
    ],
    tech: [
      "Python",
      "PyTorch",
      "Transformers",
      "XGBoost",
      "LightGBM",
      "Scikit-Learn",
    ],
    github: "https://github.com/Parvptl/Financial_Sentiment_Forecasting",
    featured: true,
  },
  {
    title: "Food Ordering Website",
    subtitle: "Full-Stack Restaurant Ordering System",
    description:
      "A table-number-based food ordering system with no user auth required simple fast and functional.",
    bullets: [
      "Flask backend with PyMySQL for structured database operations.",
      "Table number based ordering no login friction for customers.",
      "Interactive menu UI in HTML, CSS, JS with order processing and storage.",
    ],
    tech: ["Flask", "PyMySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/DevMittal09/Food-ordering-website",
    featured: false,
  },
];

export const autoJudgeFlow: ArchStep[] = [
  { label: "Next.js Frontend", sublabel: "SSR + React UI", color: "#3b82f6" },
  {
    label: "FastAPI Backend",
    sublabel: "REST API + Auth",
    color: "#8b5cf6",
  },
  {
    label: "Supabase",
    sublabel: "PostgreSQL + Auth",
    color: "#10b981",
  },
  {
    label: "Docker",
    sublabel: "Isolated Execution",
    color: "#f59e0b",
  },
  {
    label: "Kubernetes Jobs",
    sublabel: "Scalable Orchestration",
    color: "#ef4444",
  },
];

export const rbacRoles: RbacRole[] = [
  {
    role: "Student",
    permissions: ["Submit gate pass", "Track pass status", "View history"],
    color: "#3b82f6",
  },
  {
    role: "Warden",
    permissions: [
      "Approve student passes",
      "View hostel requests",
      "Reject with reason",
    ],
    color: "#8b5cf6",
  },
  {
    role: "Security Guard",
    permissions: ["Scan QR codes", "Log entry/exit", "Flag anomalies"],
    color: "#10b981",
  },
  {
    role: "Admin",
    permissions: ["Full access", "User management", "System config"],
    color: "#ef4444",
  },
  {
    role: "Dean/Faculty",
    permissions: [
      "Approve family visits",
      "Override decisions",
      "View reports",
    ],
    color: "#f59e0b",
  },
  {
    role: "Guest/Visitor",
    permissions: ["Walk-in registration", "Temp QR pass", "Limited access"],
    color: "#6b7280",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Inter IIT Tech Meet 14.0 — Contingent Leader",
    description:
      "Led IIT Palakkad's contingent securing 1 Gold, 1 Bronze, and multiple top rankings across all 23 competing IITs.",
    icon: "trophy",
  },
  {
    title: "LeetCode Global Rank 3471",
    description:
      "Achieved Global Rank 3471 in LeetCode Biweekly Contest 150 among 30,000+ participants worldwide.",
    icon: "rank",
  },
  {
    title: "400+ DSA Problems Solved",
    description:
      "Solved 400+ problems across LeetCode and Codeforces covering trees, graphs, DP, segment trees, and more.",
    icon: "code",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C++", "Python", "Java", "TypeScript"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL", "Supabase"],
  },
  {
    category: "Frameworks",
    skills: ["Next.js", "React", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Security & Identity",
    skills: ["Okta CIC", "IAM", "OAuth", "RBAC"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Git"],
  },
  {
    category: "Concepts",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "OOP",
      "DBMS",
      "REST APIs",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/DevMittal09",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dev-mittal-892725285/",
    icon: "linkedin",
  },
  {
    label: "connectwithdevm@gmail.com",
    href: "mailto:connectwithdevm@gmail.com",
    icon: "email",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/lazy_wolf09/",
    icon: "leetcode",
  },
];

export const positionsOfResponsibility: PositionOfResponsibility[] = [
  {
    title: "Contingent Leader — Inter IIT Tech Meet 14.0",
    period: "Sep 2025 – Jan 2026",
    description:
      "Led end to end coordination and technical strategy for IIT Palakkad's participation.",
    bullets: [
      "Designed structured workflows for problem allocation, progress tracking, and mid prep submissions achieving 100% on time compliance.",
      "Represented the institute in board meetings, resolving rule ambiguities and aligning deliverables with evaluation criteria.",
    ],
  },
  {
    title: "Technical Head — Petrichor'26",
    period: "Apr 2025 – Feb 2026",
    description:
      "Led technical planning and execution of flagship fest events with cross-functional coordination.",
    bullets: [
      "Drafted detailed rulebooks, budgets, and secured approvals from faculty advisors for technical events.",
      "Directed execution workflows including platform readiness, registration, judge coordination, and cross-team collaboration.",
    ],
  },
];
