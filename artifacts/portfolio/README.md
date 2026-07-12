# Syahdan Triantoro Portfolio

A premium, single-page personal portfolio application built with React, Vite, and Tailwind CSS.

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

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

- **Framework**: Vite + React 18
- **Styling**: Tailwind CSS with CSS Custom Properties for theming
- **Components**: `shadcn/ui` based functional components
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
