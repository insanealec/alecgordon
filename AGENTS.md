# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is a Vue 3 + TypeScript personal website for Alec Gordon, built with Vite. The project uses:
- **Frontend**: Vue 3 with Composition API and `<script setup>`
- **State Management**: Pinia stores
- **Styling**: Tailwind CSS with DaisyUI components
- **Testing**: Vitest with Vue Test Utils
- **Build Tool**: Vite
- **Type Checking**: TypeScript with vue-tsc

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
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run specific test file
npm run test src/tests/CategoryCard.test.ts

# Run tests with coverage
npm run test -- --coverage
```

## Code Style Guidelines

### File Structure
- **Components**: `src/components/` - organized by feature (betterlist/, food/, map/, etc.)
- **Stores**: `src/stores/` - Pinia stores using Composition API
- **Libraries**: `src/lib/` - utility classes and functions
- **Tests**: `src/tests/` - test files alongside source
- **Assets**: `src/assets/` - styles, images, SVGs

### TypeScript Conventions
- Use strict TypeScript with proper type definitions
- Import types with `type` keyword when possible: `import type { Category } from '@/stores/list'`
- Use interfaces for object shapes, classes for data models
- Union types with `|` for optional fields: `string|undefined`
- Default values in class properties: `public version: string = 'v1'`

### Vue Component Style
- Always use `<script setup lang="ts">` syntax
- Use Composition API with `ref`, `computed`, etc.
- Define props with TypeScript interfaces:
```typescript
const props = defineProps<{
  category: Category;
}>();
```
- Use `@vueuse/core` utilities for common patterns (useToggle, useFocus, etc.)
- Keep template logic minimal, move complex logic to script

### Import Organization
1. Vue imports first
2. Third-party libraries (vue-router, pinia, @vueuse/core)
3. Local imports (@/ stores, components, lib)
4. Relative imports last

Example:
```typescript
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { useListStore } from '@/stores/list';
import { Form } from '@/lib/form/Form';
```

### Naming Conventions
- **Files**: PascalCase for components (CategoryCard.vue), camelCase for utilities
- **Components**: PascalCase (CategoryCard, FormAdmin)
- **Stores**: camelCase with `use` prefix (useFormStore, useNostrStore)
- **Classes**: PascalCase (Form, Question)
- **Methods/Variables**: camelCase (addCategory, toggleEdit)
- **Constants**: UPPER_SNAKE_CASE (INITIAL_RELAYS, DEFAULT_CATEGORY)

### State Management (Pinia)
- Use Composition API style stores
- Return refs, computed properties, and methods explicitly
- Use `useLocalStorage` from @vueuse/core for persistence
- Organize returns with comments for clarity:
```typescript
return {
  // refs
  relays,
  authors,
  events,
  // computed
  users,
  notes,
  // methods
  addAuthor,
};
```

### Styling Guidelines
- Use Tailwind CSS classes extensively
- Leverage DaisyUI components (btn, card, modal, etc.)
- Dark mode support with `darkMode: 'class'` in Tailwind config
- Responsive design with sm:, md:, lg: prefixes
- Component-scoped styles when necessary

### Error Handling
- Use TypeScript to catch errors at compile time
- Handle async operations properly in stores
- Use try-catch blocks for external API calls
- Validate props and provide default values

### Testing Guidelines
- Use Vitest with Vue Test Utils
- Test components with `mount()` from @vue/test-utils
- Set up Pinia stores in tests with `createPinia()`
- Use `describe()` blocks for organization
- Test user interactions and store integration
- Snapshot testing for component output

### Linting Rules
- ESLint with Vue 3 essential rules
- TypeScript integration
- Auto-fix on save recommended
- Unused variables allowed if prefixed with `_`
- Vue-specific rules enforced

## Path Aliases
- `@/` maps to `src/` directory
- Use for all internal imports: `import Form from '@/lib/form/Form'`

## Development Notes
- Uses hash-based routing (`createWebHashHistory()`)
- SCSS available for additional styling
- Chart.js integrated for data visualization
- Nostr Tools for social features
- Mapbox GL for mapping functionality

## Before Committing
Always run these commands:
```bash
npm run type-check
npm run lint
npm run test
```

Ensure all tests pass and there are no TypeScript or ESLint errors before committing changes.