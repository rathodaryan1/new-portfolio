# Aryan Rathod Portfolio --- Design System

## 1. Design Language

Keywords: - Minimal - Premium - Clean - Editorial - Professional -
Spacious - Modern - Subtle

The design should take inspiration from the supplied reference without
cloning it.

## 2. Color Tokens

### Light

-   Background: #FAFAF9
-   Surface: #FFFFFF
-   Primary text: #171717
-   Secondary text: #5F5F66
-   Muted text: #737373
-   Border: #E5E5E5
-   Strong border: #D4D4D4
-   Accent: #2563EB

### Dark

-   Background: #0D0D0D
-   Surface: #171717
-   Primary text: #F5F5F5
-   Secondary text: #A3A3A3
-   Muted text: #737373
-   Border: #2A2A2A
-   Strong border: #3A3A3A
-   Accent: #60A5FA

Use the accent sparingly.

## 3. Typography

Preferred font: - Geist

Fallback: - Inter - system-ui - sans-serif

Scale: - Hero: clamp(3.5rem, 8vw, 7rem) - H2: clamp(2rem, 4vw, 3.5rem) -
H3: 1.25--1.5rem - Body: 1rem--1.125rem - Small: 0.75--0.875rem

Use heavy weight only for important headings.

## 4. Layout

Maximum content width: - 1200--1280px

Desktop horizontal padding: - 32--48px

Tablet: - 24--32px

Mobile: - 16--20px

Section vertical spacing: - Desktop: 120--160px - Tablet: 90--120px -
Mobile: 72--96px

## 5. Navbar

Width: - max 1000--1100px

Height: - 64--72px

Radius: - 999px

Padding: - 6--10px outer - 12--20px inner

Shadow: - very subtle

Backdrop: - translucent surface + blur

## 6. Cards

Radius: - 16--24px

Border: - 1px solid border token

Padding: - 24--32px

Shadow: - minimal by default

Hover: - translateY(-3px) - slightly stronger shadow - 180--250ms
transition

## 7. Buttons

Primary: - Dark/near-black background - White text

Secondary: - Surface background - Primary text - Border

Radius: - 10--14px

Height: - 42--48px

Hover: - subtle lift - opacity/brightness transition

## 8. Tags

Small pill: - 8--12px horizontal padding - 6--8px vertical padding -
8--12px radius - 0.8--0.9rem text

## 9. Hero Layout

Desktop: - 100--140px top breathing room after navbar - 160--220px
profile image - 64--96px gap before name - 16--24px title gap - 24--32px
description gap

Mobile: - 100--130px profile image - smaller heading - description max
width around 340px

## 10. Project Grid

Desktop: - 3 columns for featured projects

Tablet: - 2 columns

Mobile: - 1 column

Project image ratio: - 16:10 or 16:9

Project cards should have consistent image heights.

## 11. Timeline

Use a clean vertical timeline with: - Year - Event title - Description -
Tags

Avoid overly decorative timeline graphics.

## 12. Forms

Input height: - 48--56px

Textarea: - 140--180px

Radius: - 10--14px

Focus: - visible accent ring

## 13. Animation

Use Framer Motion.

Entrance: - opacity 0 → 1 - translateY 12--24px → 0

Duration: - 350--650ms

Stagger: - 50--120ms

Hover: - 150--250ms

Respect `prefers-reduced-motion`.

Avoid excessive parallax and constant motion.

## 14. Responsive Rules

### Desktop

Large whitespace, 3-column grids, full navigation.

### Tablet

Reduce spacing and typography; 2-column cards.

### Mobile

One-column layout, compact navbar/menu, smaller hero, full-width buttons
where appropriate.

Never allow horizontal scrolling.
