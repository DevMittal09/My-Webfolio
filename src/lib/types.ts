export interface Project {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  github?: string;
  bullets: string[];
  tech: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "leetcode";
}

export interface ArchStep {
  label: string;
  sublabel?: string;
  color?: string;
}

export interface RbacRole {
  role: string;
  permissions: string[];
  color: string;
}

export interface PositionOfResponsibility {
  title: string;
  period: string;
  description: string;
  bullets: string[];
}
