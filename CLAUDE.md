# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChessMeet is a French chess meetup application that connects chess players for in-person games. This repository contains the landing page built with React, TypeScript, and Vite, with an Express backend.

## Commands

```bash
# Development
npm run dev          # Start development server (Express + Vite)

# Build & Production
npm run build        # Build both client and server
npm run start        # Run production build

# Type Checking
npm run check        # Run TypeScript compiler

# Database
npm run db:push      # Push database schema changes with Drizzle
```

## Architecture

The codebase follows a monorepo structure with shared code between client and server:

- **client/**: React SPA with TypeScript
  - Uses Wouter for routing (lightweight React router)
  - UI components built with Shadcn/ui and Radix UI primitives
  - Styled with Tailwind CSS and Framer Motion for animations
  - State management with React Query (TanStack Query)

- **server/**: Express.js backend
  - Entry point at `server/index.ts`
  - API routes defined in `server/routes.ts`
  - Database integration with PostgreSQL and Drizzle ORM
  - Authentication with Passport.js

- **shared/**: Common code and database schemas
  - Database schema defined in `shared/schema.ts`

## Key Technical Details

1. **Path Aliases**: TypeScript is configured with path aliases:
   - `@/` maps to `client/src/`
   - `@shared/` maps to `shared/`

2. **Component Structure**:
   - Reusable UI components in `client/src/components/ui/` (Shadcn/ui)
   - Page-specific components in `client/src/components/`
   - Route components in `client/src/pages/`

3. **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

4. **Styling**: Tailwind CSS with custom theme extensions for animations and colors

5. **Routing**: Uses Wouter instead of React Router for lightweight client-side routing

## Development Notes

- The application is fully in French (internationalization for the French market)
- Mobile-first design with emphasis on app download CTAs
- No test runner or linting setup currently configured
- Uses Vite for fast development builds with HMR
