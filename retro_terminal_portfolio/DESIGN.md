---
name: Retro-Terminal Portfolio
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bbccb0'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#86957d'
  outline-variant: '#3c4b36'
  surface-tint: '#34e507'
  primary: '#d4ffc1'
  on-primary: '#063900'
  primary-container: '#4af626'
  on-primary-container: '#136c00'
  inverse-primary: '#136e00'
  secondary: '#ffb86b'
  on-secondary: '#492900'
  secondary-container: '#ed9000'
  on-secondary-container: '#583300'
  tertiary: '#ffefef'
  on-tertiary: '#48272a'
  tertiary-container: '#ffc9cd'
  on-tertiary-container: '#7b5256'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff59'
  primary-fixed-dim: '#34e507'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#0c5300'
  secondary-fixed: '#ffdcbc'
  secondary-fixed-dim: '#ffb86b'
  on-secondary-fixed: '#2c1700'
  on-secondary-fixed-variant: '#683d00'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#eeb9bd'
  on-tertiary-fixed: '#301216'
  on-tertiary-fixed-variant: '#623c40'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  bg-main: '#0B0C0F'
  bg-surface: '#15181E'
  text-muted: '#B8B8B8'
  border-subtle: '#30363D'
  glow-green: rgba(74, 246, 38, 0.25)
typography:
  display-lg:
    fontFamily: IBM Plex Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: IBM Plex Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: IBM Plex Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  max-width: 1200px
  section-gap: 120px
  section-gap-mobile: 64px
  gutter: 24px
  container-padding: 16px
---

# Portfolio Website Design System

## Design Philosophy

Create a portfolio website that combines **old internet nostalgia** with **modern design principles**.

The website should feel handcrafted and personal, like a developer's homepage from the early 2000s, while maintaining a clean and professional appearance suitable for showcasing technical work.

The experience should evoke the feeling of exploring an old computer system rather than browsing a conventional portfolio.

---

# Core Style

* Retro tech aesthetic
* Old internet nostalgia
* CRT monitor inspiration
* Terminal interface elements
* Pixel graphics
* Minimal cyberpunk influence
* Personal and authentic
* Modern readability
* Smooth interactions
* Dark mode by default

---

# Visual Mood

The overall atmosphere should communicate:

* curiosity
* craftsmanship
* technical expertise
* experimentation
* nostalgia
* creativity
* independence

Visitors should immediately feel that this portfolio belongs to a passionate developer rather than a corporate brand.

---

# Color Palette

## Background

```
#0B0C0F
```

## Secondary Background

```
#15181E
```

## Primary Text

```
#F5F5F5
```

## Secondary Text

```
#B8B8B8
```

## Green Accent

```
#4AF626
```

## Orange Accent

```
#FF9F1C
```

## Border

```
#30363D
```

## Hover Glow

```
rgba(74,246,38,0.25)
```

---

# Typography

## Heading Font

* IBM Plex Mono
* JetBrains Mono
* Space Mono

## Body Font

* Inter
* Manrope
* DM Sans

Headings should resemble terminal output while body text remains highly readable.

---

# Layout

Maximum width:

```
1200px
```

Content should always remain centered.

Spacing between sections:

```
120px
```

Cards should use:

* 16px padding
* 6px border radius
* 1px border
* subtle shadow

Layout should be fully responsive.

---

# Navigation

Sticky navigation bar.

Transparent background with blur effect.

Minimal styling.

Simple underline animation on hover.

Navigation links:

* Home
* About
* Projects
* Experience
* Contact

---

# Landing Page

Full viewport hero section.

Contains:

* Large developer name
* Short subtitle
* Blinking cursor animation
* Call-to-action buttons

Background should include:

* pixel grid
* scanlines
* floating ASCII decorations
* subtle grain texture

Boot message example:

```
SYSTEM ONLINE

USER DETECTED

READY.
```

---

# About Section

Split into two columns.

## Left

Personal introduction describing:

* software engineering passion
* problem solving
* technology interests
* continuous learning

## Right

Terminal-inspired skill visualization.

Example:

```
Python

██████████ 90%

Java

████████░░ 80%

React

█████████░ 88%

IoT

███████░░░ 70%
```

Display technology stack as pixel badges.

---

# Projects Section

Responsive card grid.

Each card contains:

* project image
* title
* short description
* technology stack
* GitHub button
* Demo button

Cards resemble vintage desktop windows.

Hover animation:

* slight lift
* green glow
* subtle CRT flicker

Featured project spans two columns.

---

# Experience Section

Vertical timeline.

Inspired by terminal logs.

Each entry contains:

* role
* organization
* date
* description

Timeline nodes glow with terminal green.

Connected using thin vertical lines.

---

# Contact Section

Styled as a retro terminal window.

Display:

* Email
* GitHub
* LinkedIn
* Instagram
* Location

Include a contact form.

Successful submission animation:

```
> Sending packet...

> Connection established...

> Message delivered successfully.
```

---

# Footer

Simple centered footer.

```
© 2026 Your Name

Made with caffeine, curiosity, and too many late nights.
```

---

# Components

## Buttons

Dark background.

Thin border.

Monospace font.

Green hover glow.

Quick transition.

---

## Cards

Window-style header.

Small border radius.

Thin border.

Soft shadow.

Hover elevation.

---

## Skill Badges

Pixel-inspired.

Monospace typography.

Small rounded corners.

Low saturation colors.

---

## Timeline

Thin vertical line.

Circular glowing nodes.

Terminal log appearance.

---

# Animations

Use subtle animations only.

Include:

* typewriter effect
* blinking cursor
* fade on scroll
* hover lift
* smooth scrolling
* floating particles
* scanline movement

Avoid excessive motion.

---

# Background Effects

Very subtle:

* scanlines
* pixel grid
* grain texture
* binary rain (low opacity)
* floating dots
* vintage monitor glow

Effects should enhance immersion without reducing readability.

---

# Mobile Design

Navigation collapses into hamburger menu.

Cards stack vertically.

Timeline becomes one column.

Buttons become full width.

Maintain retro aesthetic across all screen sizes.

---

# Accessibility

* High contrast
* Keyboard navigation support
* Visible focus state
* Screen reader friendly
* Respect prefers-reduced-motion

---

# Design Goal

The final website should feel like discovering a forgotten developer homepage from the early internet era that has been carefully rebuilt with modern frontend technology.

It should be nostalgic without being gimmicky, technical without being intimidating, and personal while remaining professional.
