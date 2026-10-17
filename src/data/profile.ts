import type { Job, SocialLink, Stat, Strength } from '@/types/home';

// No email on the site so scrapers can't harvest it; LinkedIn is the contact channel
export const LINKEDIN_URL = 'https://linkedin.com/in/alexanderdevongordon';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    url: 'https://github.com/insanealec/',
    label: 'GitHub',
    icon: 'github',
  },
  {
    url: LINKEDIN_URL,
    label: 'LinkedIn',
    icon: 'linkedin',
  },
];

// TODO: swap the last stat for a real performance win, e.g. "30s → 3s"
export const STATS: Stat[] = [
  { value: '11+', label: 'years shipping production web apps' },
  { value: '10+', label: 'internal APIs designed and maintained' },
  { value: '4', label: 'companies across e-commerce, SaaS, and health tech' },
];

export const STRENGTHS: Strength[] = [
  {
    title: 'API design',
    summary: 'Production REST APIs in Laravel and C#',
    iconPaths: ['M8 9l-3 3 3 3', 'M16 9l3 3-3 3', 'M13.5 6l-3 12'],
  },
  {
    title: 'Vue at scale',
    summary: 'Large apps that stay clear and maintainable',
    iconPaths: ['M12 3l9 5-9 5-9-5 9-5z', 'M3 13l9 5 9-5'],
  },
  {
    title: 'Performance',
    summary: 'Data-heavy pages that don\'t time out',
    iconPaths: ['M13 3L4 14h7l-1 7 9-11h-7l1-7z'],
  },
  {
    title: 'Automation',
    summary: 'Replacing manual, repetitive workflows',
    iconPaths: ['M4 4v5h5', 'M20 20v-5h-5', 'M5.1 15a7.5 7.5 0 0 0 13.4 1.5', 'M18.9 9A7.5 7.5 0 0 0 5.5 7.5'],
  },
  {
    title: 'Legacy cleanup',
    summary: 'Improving structure without risky rewrites',
    iconPaths: ['M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z'],
  },
  {
    title: 'Cross-team work',
    summary: 'Turning product needs into working software',
    iconPaths: ['M12 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0z', 'M3 20a6 6 0 0 1 12 0', 'M16 5a3 3 0 0 1 0 6', 'M21 20a6 6 0 0 0-4-5.6'],
  },
];

export const JOBS: Job[] = [
  {
    // TODO: confirm title and start date, and add 2-3 highlights
    company: 'Medbridge',
    title: 'Senior Software Engineer',
    start: '2026',
    highlights: [],
    tech: [],
  },
  {
    company: 'Roof Maxx',
    title: 'Senior Full-Stack Software Engineer',
    start: '2024',
    end: '2026',
    highlights: [
      'Built QuickBooks integrations for invoice sync and dealer billing, with local staging before submission',
      'Stopped timeouts on report and index pages by removing N+1 queries and caching report data by week',
      'Replaced synchronous mail with queued, event-driven notifications and user-configurable preferences',
    ],
    tech: ['Laravel', 'Vue', 'MySQL'],
    details: [
      'Worked on a B2B SaaS platform used by dealers and internal corporate teams, building high-impact features within a large Laravel monolith with an emphasis on reliability, performance, and reducing manual operational work.',
      'Owned development of a multi-channel notifications system, internal and SaaS invoicing workflows, and cost reporting features.',
    ],
  },
  {
    company: 'Ibotta',
    title: 'Senior Full-Stack Software Engineer',
    start: '2021',
    end: '2023',
    highlights: [
      'Led homepage recommendation modules and navigation refactors in a large consumer-facing Vue app',
      'Ran legacy and new implementations side by side behind LaunchDarkly A/B tests',
      'Improved accessibility across core user flows and integrated GraphQL services',
    ],
    tech: ['Vue', 'TypeScript', 'GraphQL', 'Nuxt'],
    details: [
      'Scoped initiatives from initial proposals, researching existing APIs and frontend structures to find opportunities for reuse versus new development, then presented them to the team before breaking work into tickets.',
      'Supporting A/B tests often meant untangling tightly coupled components to move toward a more modular design.',
      'The main web stack was a Vue 2 SPA with a GraphQL backend. We also began migrating to Nuxt for SSR to improve initial load performance.',
    ],
  },
  {
    company: 'The McAlear Group',
    title: 'Software Developer II',
    start: '2015',
    end: '2021',
    highlights: [
      'Designed and maintained 10+ internal APIs for ordering, inventory, fulfillment, and payments',
      'Architected a centralized LTL freight API aggregating multiple carriers for sales and e-commerce',
      'Led custom Laravel e-commerce platforms and mentored junior developers',
    ],
    tech: ['Laravel', 'Vue', 'SQL Server', 'C#', 'Java'],
    details: [
      'Built a multi-facility fulfillment API combining inventory availability and shipping optimization to choose distribution strategies.',
      'Supported a large collection of repositories used across sales, manufacturing, and operations, including legacy PHP systems for plant operations.',
    ],
  },
];
