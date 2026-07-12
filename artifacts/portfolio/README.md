# Syahdan Triantoro Portfolio

A premium, single-page personal portfolio application built with React, Vite, and Tailwind CSS.

This is a standard, standalone Vite + React + TypeScript project. It has no dependency on Replit
or any monorepo/workspace tooling and can be run anywhere Node.js is available.

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:5173` by default.

Other scripts:

- `npm run build` — type-checked production build, output to `dist/`
- `npm run preview` — preview the production build locally
- `npm run typecheck` — run TypeScript in `--noEmit` mode

## Managing Content

This application uses a data-driven architecture. All content is localized in the `src/data/` directory.

- `src/data/personal.ts`: Personal details, professional summary, and contact information.
- `src/data/experience.ts`: Work experience timeline.
- `src/data/projects.ts`: Portfolio projects and case studies.
- `src/data/skills.ts`: Skill categories and tags.
- `src/data/certifications.ts`: Certifications and additional modules.
- `src/data/education.ts`: Educational background.
- `src/data/navigation.ts`: Navbar and social links.

## Architecture & Styling

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark/system)
- **Components**: `shadcn/ui`-based functional components (Radix UI primitives)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Routing**: wouter
