import type { Job, Project, SocialLink, Stat, Strength } from '@/types/home';

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

export const STATS: Stat[] = [
  { value: '11+', label: 'years shipping production web apps' },
  { value: '10+', label: 'internal APIs designed and maintained' },
];

export const STRENGTHS: Strength[] = [
  {
    title: 'API design',
    summary: 'Production REST APIs in Laravel and C#',
    iconPaths: ['M8 9l-3 3 3 3', 'M16 9l3 3-3 3', 'M13.5 6l-3 12'],
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
  {
    title: 'AI product engineering',
    summary: 'Shipping whole products end to end by directing AI coding agents',
    iconPaths: ['M11 3l1.8 4.9L17.7 9.7l-4.9 1.8L11 16.4l-1.8-4.9-4.9-1.8 4.9-1.8z', 'M18 14v6', 'M15 17h6'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'HomeStowage',
    tagline: 'Know what you’ve got. Know where it’s stowed.',
    description: 'A home inventory and shopping-list app I run as a live product. Track items across rooms and storage spots, get flagged when something runs low or is about to expire, and turn what’s running out into grocery lists grouped by store aisle. Households share an inventory with view-only or edit access, there’s a free tier with paid plans through Stripe, and a built-in MCP server lets AI assistants like Claude check stock and add to your lists directly.',
    url: 'https://homestowage.com/',
    linkLabel: 'Visit site',
    image: '/projects/homestowage.webp',
    imageAlt: 'HomeStowage landing page: shared lists and inventory for everyone in the house',
    tech: ['Laravel 12', 'Angular 21', 'Tailwind 4', 'Stripe', 'MCP', 'Pest'],
    featured: true,
  },
  {
    name: 'GambaRun',
    tagline: 'A casino simulator that shows you the house edge.',
    description: 'A roguelike casino with fake credits and 11 games, built to make gambling math visible. Each game’s payout rate is computed live from its real payout table, every result is decided before the animation plays, and simulation tests confirm each game’s long-run returns match its stated odds.',
    url: 'https://gamba.insanealec.workers.dev/',
    linkLabel: 'Play',
    sourceUrl: 'https://github.com/insanealec/gamba',
    image: '/projects/gambarun.webp',
    imageAlt: 'GambaRun game lobby with each game’s return-to-player and house edge',
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'GSAP', 'Vitest'],
  },
  {
    name: 'Chalk & Brimstone',
    tagline: 'Summon spirits and rise through 1893 Chicago’s machine politics.',
    description: 'A narrative strategy game where a political machine of magicians runs City Hall. Piece together each spirit’s true name, runes and incense from scraps of lore, then bind it as a servant, an enchanted tool or a familiar while strikes, elections and the World’s Fair reshape the city. A seeded test page plays whole games automatically to tune difficulty.',
    url: 'https://chalk-and-brimstone.insanealec.workers.dev/',
    linkLabel: 'Play',
    sourceUrl: 'https://github.com/insanealec/chalk-and-brimstone',
    image: '/projects/chalk-and-brimstone.webp',
    imageAlt: 'Chalk & Brimstone opening screen over the summoning chamber',
    tech: ['JavaScript', 'No build step', 'Cloudflare Workers'],
  },
  {
    name: 'Etherwake',
    tagline: 'Surf the solar winds at the edge of a nebula.',
    description: 'A 3D space-fantasy surfing game in the browser. Ride glowing swells on a solar board, land tricks for credits, run courier jobs between floating ports, and explore regions like the Flare Reach and the Rim. The ocean, sky and ports are generated in code on three.js’s WebGPU renderer.',
    url: 'https://etherwake.insanealec.workers.dev/',
    linkLabel: 'Play',
    sourceUrl: 'https://github.com/insanealec/etherwake',
    image: '/projects/etherwake.webp',
    imageAlt: 'Etherwake title screen over a glowing purple sea under an eclipsed star',
    tech: ['three.js', 'WebGPU', 'JavaScript', 'Vite'],
    status: 'In progress',
  },
];

export const JOBS: Job[] = [
  {
    company: 'Medbridge',
    title: 'Software Engineer II',
    start: '2026',
    highlights: [
      'Stopped clinicians missing patient events by adding alerts for unread messages and monitoring changes',
      'Saved billing staff clicks by showing billing readiness and copy-ready details on the patient list',
      'Built the first version of a new org settings app so any team can add settings through its own API',
    ],
    tech: ['Angular', 'TypeScript', 'Laravel', 'PHP', 'Cypress'],
    details: [
      'Medbridge makes digital care software for physical therapy clinics. I work on the team that builds the clinician-facing dashboard, across the Angular front end and the Laravel back end.',
      'I set up and built the first version of the org settings app on my own and set the patterns other teams now follow, including making every state mockable so screens can be built and tested without live data. I also built alert snoozing across the API and UI, take my turn running the weekly release across several repositories, and keep the end-to-end tests passing as screens change.',
    ],
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
