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
  tagline: "Building products people actually use",
  oneLiner:
    "Founding CTO at Snappito and final-year IIT Palakkad student. I build full-stack products end to end, from a home services startup with 100+ repeat customers to my institute's guest house booking portal.",
  github: "https://github.com/DevMittal09",
  linkedin: "https://www.linkedin.com/in/dev-mittal-892725285/",
  email: "connectwithdevm@gmail.com",
  leetcode: "https://leetcode.com/u/lazy_wolf09/",
  codeforces: "https://codeforces.com/profile/devmittal09",
  url: "https://devmittal.me",
  college: "IIT Palakkad",
  degree: "BTech Civil Engineering, Minor in Data Science",
  cgpa: "8.54",
  resume: "/resume.pdf",
  resumeFileName: "Dev_Mittal_Resume.pdf",
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
  "PostgreSQL",
  "Supabase",
  "FastAPI",
  "Docker",
  "Kubernetes",
  "PyTorch",
  "Okta CIC",
];

export const aboutParagraphs = [
  "I'm a final-year B.Tech student at IIT Palakkad (Civil Engineering, Minor in Data Science) who likes building products end to end: talking to the people who'll use them, turning what they need into features, and shipping something that holds up in production.",
  "I'm a founding member and the CTO of Snappito, a home services startup in Patna. I'm its only technical member, so I own all of the tech (the website and the booking app we're building now) and plan growth with one co-founder. Since launch it has grown to 100+ regular customers.",
  "At IIT Palakkad I'm building the guest house booking portal with the institute's Administration Section as my client. Before that I built the campus gate pass system, and at Accenture I worked on enterprise identity with Okta. I build with AI coding tools like Claude Code, and I back every change with tests before it ships.",
];

export const aboutStats = [
  { label: "CGPA at IIT Palakkad", value: "8.54" },
  { label: "Repeat customers at Snappito", value: "100+" },
  { label: "Inter IIT TechMeet Medals", value: "Gold + Bronze" },
  { label: "LeetCode + Codeforces problems", value: "350+" },
];

export const experiences: Experience[] = [
  {
    company: "Snappito",
    role: "Founding Member & CTO",
    period: "Jan 2026 – Present",
    location: "Remote",
    link: { href: "https://www.snappito.com", label: "Website" },
    tech: ["Next.js", "TypeScript", "Mobile App", "Product", "Growth"],
    bullets: [
      "On-demand home services (deep cleaning, laundry, daily house help) for households in Patna. One of a 3-person founding team, from the idea through incorporation (Apr 2026) and launch.",
      "Own all technology as the only technical member: built the website and currently building the mobile app for booking services.",
      "Plan business development and growth strategy with one co-founder, while the third runs on-ground operations.",
      "Grown to 100+ regular, repeat customers since launch.",
    ],
  },
  {
    company: "IIT Palakkad · Guest House Booking Portal",
    role: "Administrative Intern",
    period: "Aug 2026 – Present",
    location: "Palakkad, Kerala (Hybrid)",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Claude Code",
      "E2E Testing",
    ],
    bullets: [
      "Building the booking and approval portal and public website for the institute's guest houses with one other student, from the Administration Section's requirements to a working product.",
      "Work directly with the Administration Section as the client: take their requirement and correction lists, turn each item into a feature or fix, and bring it back for review.",
      "Moved the institute's existing approval chain into the product: every booking goes through a multi-stage approval workflow where each approver sees only their step. Staff allocate rooms on a visual grid, with PDF invoices and email notifications built in.",
      "Made double bookings impossible at the database layer with a PostgreSQL exclusion constraint, even when requests arrive at the same time.",
      "Build with AI coding tools (Claude Code) and check every change against 338 unit tests and 28 end-to-end tests before it goes in.",
    ],
  },
  {
    company: "Accenture",
    role: "Advanced Application Engineering Intern",
    period: "May 2026 – Jul 2026",
    location: "Gurugram, India",
    link: {
      href: "https://drive.google.com/file/d/1czxZ7iDKJH4SKxLEv5g5XCNA3ngHNOQ_/view?usp=sharing",
      label: "Certificate",
    },
    tech: ["Okta CIC", "IAM", "OAuth", "Python", "LLM Automation"],
    bullets: [
      "Configured and provisioned client tenants on Okta Customer Identity Cloud (CIC) for enterprise identity and access management.",
      "Wrote LLM-based scripts to automate tenant configuration, cutting repetitive manual setup.",
    ],
  },
  {
    company: "IIT Palakkad · Campus Security",
    role: "Administrative Intern",
    period: "Jan 2026 – May 2026",
    location: "Palakkad, Kerala",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Google OAuth",
    ],
    bullets: [
      "Developing a Campus Security & Gate Pass Management System for the IIT Palakkad campus, built to digitize gate security workflows.",
      "Engineered secure RBAC with 6 roles using Supabase Row-Level Security, server-side authentication, and domain-restricted Google OAuth.",
      "Designed real-time QR verification and automated role assignment via PostgreSQL triggers.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Guest House Booking Portal",
    subtitle: "IIT Palakkad · Booking & Approval System",
    description:
      "The booking and approval portal plus public website for IIT Palakkad's guest houses, built with the institute's Administration Section as the client.",
    bullets: [
      "Multi-stage approval workflow mirroring the institute's real approval chain. Each approver sees only their step.",
      "Visual room-allocation grid for staff, with PDF invoices and email notifications built in.",
      "PostgreSQL exclusion constraint makes double bookings impossible, even under concurrent requests.",
      "Every change is checked against 338 unit tests and 28 end-to-end tests before it goes in.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Claude Code"],
    status: "In development · Private repo",
    featured: true,
  },
  {
    title: "Snappito",
    subtitle: "Home Services Startup · Founding CTO",
    description:
      "On-demand deep cleaning, laundry, and daily house help for households in Patna. I own all of the tech as the only technical founder.",
    bullets: [
      "Built the customer-facing website; currently building the mobile app for booking services.",
      "Taken from idea through incorporation (Apr 2026) and launch with a 3-person founding team.",
      "Grown to 100+ regular, repeat customers since launch.",
    ],
    tech: ["Next.js", "TypeScript", "Mobile App", "Product"],
    live: "https://www.snappito.com",
    status: "Live",
    featured: true,
  },
  {
    title: "AutoJudge",
    subtitle: "Online Judge for Programming Labs",
    description:
      "A cloud-native online judge built for two users with different needs: students write, test, and submit Python or C++ in the browser; professors create labs, upload test cases, and track each student's progress.",
    bullets: [
      "Runs every submission in its own short-lived, resource-limited Docker container, so one bad submission can't slow down or break anyone else's.",
      "Concurrent submissions orchestrated as Kubernetes Jobs (Minikube).",
      "Next.js + React frontend (SSR) and FastAPI backend with Supabase (PostgreSQL + Auth).",
      "Automated compilation, execution, and test-case grading, eliminating manual TA evaluation.",
      "Architecture, REST API, and database schema documented in the README.",
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
    github: "https://github.com/DevMittal09/AutoJudge",
    featured: true,
  },
  {
    title: "Financial Sentiment Forecasting",
    subtitle: "AI/ML Research · Entity-Aware Transformers",
    description:
      "Research project with one teammate: does company-level news sentiment help forecast Indian stock returns 1, 2, and 5 days ahead?",
    bullets: [
      "Built a 25K+ entity-level financial news dataset and a DeBERTa-v3 sentiment model with 92.5% accuracy, whose outputs feed the forecasting models.",
      "Tested forecasters on strict chronological splits (train to 2023, validate 2024, test 2025) so results reflect what would have worked in real time.",
      "Benchmarked Ridge, XGBoost, LightGBM, and a PyTorch MLP for forecasting performance.",
    ],
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "DeBERTa-v3",
      "XGBoost",
      "LightGBM",
      "Scikit-Learn",
    ],
    github: "https://github.com/Parvptl/Financial_Sentiment_Forecasting",
    featured: true,
  },
  {
    title: "Campus Security & Gate Pass System",
    subtitle: "Campus Access Control Platform",
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
    status: "In development · Private repo",
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

export const guestHouseFlow: ArchStep[] = [
  { label: "Booking Request", sublabel: "Public site + portal", color: "#3b82f6" },
  {
    label: "Multi-stage Approval",
    sublabel: "Each approver sees their step",
    color: "#8b5cf6",
  },
  {
    label: "Room Allocation",
    sublabel: "Visual grid for staff",
    color: "#10b981",
  },
  {
    label: "Exclusion Constraint",
    sublabel: "No double bookings",
    color: "#f59e0b",
  },
  {
    label: "Invoice + Email",
    sublabel: "PDF + notifications",
    color: "#ef4444",
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
    title: "350+ DSA Problems Solved",
    description:
      "Solved 350+ problems across LeetCode and Codeforces covering trees, graphs, DP, segment trees, and more.",
    icon: "code",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Product Building",
    skills: [
      "React",
      "Next.js",
      "FastAPI",
      "Tailwind CSS",
      "REST APIs",
      "Claude Code",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Supabase", "MySQL"],
  },
  {
    category: "Data & AI/ML",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
      "XGBoost",
      "LLM Automation",
    ],
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
      "Unit & E2E Testing",
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
      "Led IIT Palakkad's contingent across multiple problem statements to 1 Gold, 1 Bronze and several top ranks.",
    bullets: [
      "Set up the process to allocate problem statements across teams, track progress and manage mid-prep submissions. Every submission went in on time.",
      "Represented the institute in board meetings, resolving rule ambiguities and aligning deliverables with evaluation criteria.",
    ],
  },
  {
    title: "Technical Head — Petrichor'26",
    period: "Apr 2025 – Feb 2026",
    description:
      "IIT Palakkad's techno-cultural fest. Led a 30+ member team to plan and run 12+ technical events with 200+ registrations.",
    bullets: [
      "Drafted detailed rulebooks, budgets, and secured approvals from faculty advisors for technical events.",
      "Directed execution workflows including platform readiness, registration, judge coordination, and cross-team collaboration.",
    ],
  },
];
