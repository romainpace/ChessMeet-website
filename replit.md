# ChessMeet Landing Page

## Overview

ChessMeet is a modern, mobile-first landing page application for a chess community mobile app. The project serves as a marketing site to showcase the ChessMeet mobile application, allowing visitors to learn about features and download the app from app stores. The application is built with a full-stack architecture using React for the frontend and Express for the backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with a custom ChessMeet brand theme (beige/brown color palette)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for API routes and middleware
- **Development**: TSX for TypeScript execution in development
- **Build**: ESBuild for production bundling

### Design System

The application uses a custom design system based on ChessMeet's brand colors:

- Primary: Light beige (#F5E6D3)
- Secondary: Dark brown (#5D4037)
- Accent: Golden brown (#D4A574)
- The theme maintains accessibility while reflecting the chess community aesthetic

## Key Components

### Page Structure

- **Home Page**: Main landing page with hero section, features, screenshots, and download sections
- **Privacy Policy**: Dedicated page for privacy information
- **Terms of Service**: Legal terms and conditions page
- **Support**: Contact form and support information
- **404 Page**: Custom not found page

### UI Components

- **Header**: Fixed navigation with logo and menu items
- **Hero Section**: Main value proposition with app store download buttons
- **Features Section**: 6-feature grid showcasing app capabilities (interactive map, events, chat, tournaments, venues, community)
- **Screenshots Section**: Carousel of app screenshots with auto-rotation
- **Download Section**: Call-to-action with app store buttons and QR code
- **Footer**: Brand information and legal links

### Responsive Design

- Mobile-first approach with responsive breakpoints
- Hamburger menu for mobile navigation
- Optimized layouts for different screen sizes
- Touch-friendly interactions

## Data Flow

### Static Content

The application primarily serves static content with no complex data fetching requirements. Content is embedded directly in components for optimal performance.

### Form Handling

- Contact form in support page uses React Hook Form for validation
- Toast notifications provide user feedback
- Form submissions are logged (no backend persistence currently implemented)

### Navigation

- Wouter handles client-side routing
- Conditional navigation behavior between home page (hash links) and other pages (router links)
- Browser history management for proper back/forward navigation

## External Dependencies

### UI Libraries

- **Radix UI**: Accessible component primitives
- **Shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Development Tools

- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **TypeScript**: Type safety
- **ESLint**: Code linting (configuration present)

### Backend Dependencies

- **Express**: Web framework
- **Drizzle ORM**: Database toolkit (configured but not actively used)
- **Neon Database**: PostgreSQL database service (configured for future use)

## Deployment Strategy

### Build Process

- **Development**: Vite dev server with hot module replacement
- **Production**: Vite builds static assets, ESBuild bundles server code
- **Asset Optimization**: Automatic code splitting and optimization

### Environment Configuration

- Environment variables for database connections
- Development/production mode detection
- Replit-specific integrations for development environment

### Deployment Targets

- **Static Assets**: Built to `dist/public` directory
- **Server**: Bundled to `dist/index.js` for Node.js execution
- **Database**: PostgreSQL via Neon (configured via DATABASE_URL environment variable)

### Performance Considerations

- CSS variables for theming enable efficient style updates
- Image optimization through external CDN (Unsplash for placeholder images)
- Minimal JavaScript bundle with code splitting
- Font optimization with Google Fonts preconnect

The application is designed to be easily deployable to various platforms while maintaining high performance and accessibility standards. The modular component architecture allows for easy maintenance and feature additions.
