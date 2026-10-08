// src/types/home.ts
export type SocialIcon = 'github' | 'linkedin';

export interface SocialLink {
  url: string;
  label: string;
  icon: SocialIcon;
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