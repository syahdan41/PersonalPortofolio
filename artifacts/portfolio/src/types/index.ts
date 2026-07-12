import { ReactNode } from "react";

export interface ExperienceData {
  id: string;
  company: string;
  location: string;
  role: string;
  duration: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  role: string;
  year?: string;
  description: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificationData {
  id: string;
  year: string;
  issuer: string;
  title: string;
  image?: string;
}

export interface EducationData {
  id: string;
  university: string;
  degree: string;
  duration: string;
  location?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
