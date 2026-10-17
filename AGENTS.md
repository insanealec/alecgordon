# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is a Vue 3 + TypeScript single-page portfolio for Alec Gordon, built with Vite and deployed to GitHub Pages at alecgordon.com. The project uses:
- **Frontend**: Vue 3 with Composition API and `<script setup>`
- **Routing**: Vue Router with hash history (GitHub Pages has no SPA fallback)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite`
- **Testing**: Vitest with Vue Test Utils (jsdom)
- **Build Tool**: Vite
- **Type Checking**: TypeScript with vue-tsc
- **Node**: 24+

## Development Commands

### Core Commands
```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production (includes type checking)
npm run build

# Build only (without type checking)
npm run build-only

# Preview production build
npm run preview

# Type checking only
npm run type-check

# Run linting with auto-fix
npm run lint

# Run tests
npm run test
```

### Testing Commands
```bash
# Run all tests once
npx vitest run

# Run tests in watch mode
npm run test

# Run specific test file
npx vitest run src/tests/WorkExperience.test.ts

# Run tests with coverage
npm run test -- --coverage
```

## Code Style Guidelines

### File Structure
- **Components**: `src/components/` - one component per homepage section (HeroSection, WorkExperience, etc.)
- **Shared components**: `src/components/shared/` - small reusable pieces (RevealOnScroll, SectionHeading)
- **Content**: `src/data/profile.ts` - all homepage copy (jobs, strengths, stats, links)
- **Types**: `src/types/` - shared TypeScript types
- **Tests**: `src/tests/`
- **Styles**: `src/assets/main.css` - Tailwind entry point and base styles

### Content
- Homepage copy lives in `src/data/profile.ts`, not in component templates
- Don't put an email address or phone number on the site; LinkedIn is the contact channel

### TypeScript Conventions
- Use strict TypeScript with proper type definitions
- Import types with `type` keyword when possible: `import type { Job } from '@/types/home'`
- Use interfaces for object shapes
- Optional fields with `?`: `end?: string`

### Vue Component Style
- Always use `<script setup lang="ts">` syntax
- Use Composition API with `ref`, `computed`, etc.
- Define props with TypeScript generics:
```typescript
const props = defineProps<{
  links: SocialLink[];
  iconOnly?: boolean;
}>();
```
- Use `@vueuse/core` utilities for common patterns (useIntersectionObserver, usePreferredReducedMotion, etc.)
- Keep template logic minimal, move complex logic to script

### Import Organization
1. Vue imports first
2. Third-party libraries (vue-router, @vueuse/core)
3. Local imports (@/ data, types, components)
4. Relative imports last

Example:
```typescript
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { JOBS } from '@/data/profile';
import SocialLinks from './SocialLinks.vue';
```

### Naming Conventions
- **Files**: PascalCase for components (WorkExperience.vue), camelCase for utilities
- **Components**: PascalCase (HeroSection, ContactFooter)
- **Methods/Variables**: camelCase (scrollToSection, currentJob)
- **Constants**: UPPER_SNAKE_CASE (JOBS, SOCIAL_LINKS, LINKEDIN_URL)

### Styling Guidelines
- Use Tailwind CSS utility classes; the site is dark (slate-950 background, indigo accent)
- Base styles go inside `@layer base` in `main.css` so utilities can override them
- Responsive design with sm:, md:, lg: prefixes
- Respect reduced motion (`motion-reduce:` variants, `usePreferredReducedMotion`)

### Error Handling
- Use TypeScript to catch errors at compile time
- Use try-catch blocks for external API calls
- Validate props and provide default values

### Testing Guidelines
- Use Vitest with Vue Test Utils
- Test components with `mount()` from @vue/test-utils
- Use `describe()` blocks for organization
- Prefer asserting on rendered output and behavior over snapshots

### Linting Rules
- ESLint 10 flat config (`eslint.config.mjs`) with Vue essential and TypeScript recommended rules
- Unused variables allowed if prefixed with `_`

## Path Aliases
- `@/` maps to `src/` directory
- Use for all internal imports: `import { JOBS } from '@/data/profile'`

## Development Notes
- Uses hash-based routing (`createWebHashHistory()`); unknown routes redirect home
- Section links in the header scroll in code, since the URL hash belongs to the router
- Deploys automatically on push to main via `.github/workflows/deploy-pages.yml`

## Before Committing
Always run these commands:
```bash
npm run type-check
npm run lint
npx vitest run
```

Ensure all tests pass and there are no TypeScript or ESLint errors before committing changes.
