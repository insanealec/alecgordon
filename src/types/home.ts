// src/types/home.ts
export type SocialIcon = 'github' | 'linkedin';

export interface SocialLink {
  url: string;
  label: string;
  icon: SocialIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Strength {
  title: string;
  summary: string;
  // Stroke-only SVG paths on a 24x24 grid
  iconPaths: string[];
  // Spans the full row; used for the 7th card so the grid stays even
  wide?: boolean;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  linkLabel: string;
  sourceUrl?: string;
  image: string;
  imageAlt: string;
  tech: string[];
  featured?: boolean;
  status?: string;
}

export interface Job {
  company: string;
  title: string;
  start: string;
  end?: string; // undefined means current role
  highlights: string[];
  tech: string[];
  details?: string[];
}
