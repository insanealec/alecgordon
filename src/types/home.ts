// src/types/home.ts
export interface SocialLink {
  url: string;
  label: string;
  icon: string; // SVG path or component name
}

export interface GradientConfig {
  direction?: string;
  colors?: string[];
  opacity?: number;
}

export interface SectionConfig {
  title?: string;
  showGradient?: boolean;
  maxWidth?: string;
}