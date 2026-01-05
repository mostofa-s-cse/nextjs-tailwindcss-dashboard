# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.1 application using the App Router architecture, TypeScript, React 19, and Tailwind CSS 4. The project uses pnpm as the package manager.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server at http://localhost:3000
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Package Management
- Use `pnpm` for all package operations (install, add, remove)
- The project uses a pnpm workspace configuration with sharp and unrs-resolver as ignored built dependencies

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- Entry point: `app/page.tsx` - Home page component
- Root layout: `app/layout.tsx` - Defines HTML structure, metadata, and font configuration
- Global styles: `app/globals.css` - Tailwind imports and CSS variables for theming

### TypeScript Configuration
- Path alias: `@/*` maps to the root directory
- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (automatic React imports)

### Styling
- Tailwind CSS 4 with PostCSS integration
- Uses inline theme configuration in globals.css
- Geist Sans and Geist Mono fonts loaded via next/font/google
- CSS variables for theming with dark mode support

### ESLint
- Uses Next.js recommended config with TypeScript support
- Ignores: .next/, out/, build/, next-env.d.ts

## Code Patterns

### Component Structure
- Default exports for page and layout components
- Functional components with TypeScript types
- Server components by default (no "use client" directive needed unless using hooks/interactivity)

### Fonts
- Fonts are configured in layout.tsx using next/font/google
- Applied via CSS variable classes (e.g., `--font-geist-sans`, `--font-geist-mono`)

### Styling Conventions
- Utility-first approach with Tailwind
- Dark mode using class-based strategy (dark: prefix)
- Responsive design with mobile-first breakpoints (sm:, md:, etc.)

## File Organization

When creating new files:
- Pages/routes: Add to `app/` directory following App Router conventions
- API routes: Create in `app/api/` directory
- Components: Consider creating a `components/` directory at root
- Utilities: Consider creating a `lib/` or `utils/` directory at root
- Use TypeScript (.ts/.tsx) for all new files

## Important Notes

- This is a fresh Next.js project with minimal customization
- No testing framework is configured yet
- No API routes or database integration present
- Uses the latest React 19 and Next.js 16 features
