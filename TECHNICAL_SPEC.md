# Aryan Rathod Portfolio --- Technical Specification

## Stack

-   Next.js
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Lucide React
-   Vercel

## Suggested Structure

``` text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  navbar/
    Navbar.tsx
    MobileNav.tsx
  hero/
    Hero.tsx
  about/
    About.tsx
  skills/
    Skills.tsx
    SkillCard.tsx
  projects/
    Projects.tsx
    ProjectCard.tsx
  journey/
    Journey.tsx
  education/
    Education.tsx
  contact/
    Contact.tsx
  footer/
    Footer.tsx
  ui/
    Button.tsx
    Badge.tsx

data/
  projects.ts
  skills.ts
  journey.ts
  social.ts

public/
  profile/
  projects/
  resume/
  favicon/
```

## Component Rules

Components should be: - Reusable - Typed - Small - Accessible -
Data-driven

Avoid putting large arrays directly inside presentation components.

## Project Data

Use a typed structure:

``` ts
type Project = {
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
```

## Navigation

Use section IDs: - about - skills - work - education - contact

Use IntersectionObserver or an equivalent scroll-state mechanism to
highlight the active section.

## Theme

Use a robust light/dark theme implementation.

Requirements: - Persist preference - Respect system preference
initially - Avoid flash where possible - Animate visual transitions
subtly

## Images

Use `next/image`.

All project screenshots should: - Have descriptive alt text - Be
appropriately sized - Use responsive dimensions - Avoid layout shift

## Contact

Contact form must: - Validate name - Validate email - Validate message -
Show loading state - Show success state - Show failure state

The backend/provider will be selected separately.

Never expose private API keys in client code.

## SEO

Use Next.js metadata APIs.

Include: - title - description - keywords where useful - Open Graph - X
metadata - canonical - robots - sitemap

## Accessibility

-   Semantic sections
-   One H1
-   Logical H2/H3 hierarchy
-   `aria-label` for icon-only controls
-   Keyboard navigation
-   Focus-visible states
-   Alt text
-   Reduced-motion support

## Performance

-   Server components by default
-   Client components only where interaction requires them
-   Optimize images
-   Avoid unnecessary libraries
-   Lazy-load below-the-fold media where appropriate
-   Keep animation lightweight

## Deployment

Recommended: Vercel

Required production checks: - npm/pnpm build - lint - TypeScript check -
broken link check - mobile test - desktop test - dark mode test -
contact form test

## Environment Variables

Only add variables when actually required.

Never commit: - API keys - private tokens - passwords - service-role
keys
