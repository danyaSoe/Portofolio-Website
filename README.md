# Terminal Portfolio - Next.js App Router Migration

A refactored terminal-themed portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates a complete migration from static HTML pages to a modern, scalable React-based application.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with global styles
│   ├── page.tsx                # Home page (landing)
│   ├── globals.css             # Global styles and animations
│   │
│   ├── about/
│   │   └── page.tsx            # About page
│   │
│   ├── projects/
│   │   └── page.tsx            # Projects showcase
│   │
│   ├── history/
│   │   └── page.tsx            # Experience timeline
│   │
│   └── contact/
│       └── page.tsx            # Contact form and methods
│
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   ├── TypeWriter.tsx          # Animated typewriter effect
│   ├── BootMessage.tsx         # Boot animation component
│   └── Common.tsx              # Reusable UI components
│
├── lib/
│   └── (utilities and helpers)
│
└── public/
    └── (static assets)
```

## Key Features

### 🎨 Design System
- **Terminal Aesthetic**: Retro CRT monitor styling with scanlines and glow effects
- **Color Scheme**: Dark mode with neon green accents (#34e507)
- **Typography**: Custom font families (IBM Plex Mono, Inter, JetBrains Mono)
- **Responsive**: Mobile-first design with Tailwind CSS

### ⚙️ Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: CSS keyframes and React hooks
- **Images**: Optimized with Next.js Image component

### 📱 Pages

#### Home (`/`)
- Hero section with animated typewriter effect
- About section with skills matrix
- Featured projects grid
- Experience timeline
- Contact section

#### About (`/about`)
- Professional profile with image
- Philosophy and focus areas
- Detailed skills matrix with progress bars
- Interests and hobbies

#### Projects (`/projects`)
- Project archive with modal details
- Featured projects with larger layout
- Interactive project cards
- Technology tags and descriptions
- Bento-grid layout

#### History (`/history`)
- Experience timeline with detailed entries
- Statistics section
- Career progression visualization

#### Contact (`/contact`)
- Contact form with validation
- Contact method cards (LinkedIn, GitHub, Email, Instagram)
- Additional information sections
- Form status feedback

### 🧩 Reusable Components

#### Navbar
- Responsive navigation with mobile menu
- Fixed positioning with backdrop blur
- Links to all main pages
- Icons for terminal and settings

#### Footer
- Copyright information
- Social links
- Version information

#### Common Components
- `SkillBar`: Progress bar for skills
- `ProjectCard`: Reusable project card component
- `ContactCard`: Contact method card

#### Utilities
- `TypeWriter`: Animated text reveal effect
- `BootMessage`: System boot message animation

## Migration from HTML

### Changes Made

1. **HTML to TSX**
   - Converted all `.html` files to TypeScript React components
   - Replaced `<div class="...">` with `<div className="...">`
   - Updated event handlers from `onclick` to `onClick`

2. **CSS to Tailwind**
   - Extracted inline Tailwind config to `tailwind.config.ts`
   - Moved custom styles to `globals.css`
   - Removed duplicate Tailwind configurations

3. **Links and Navigation**
   - Changed `<a href="...">` to Next.js `<Link href="...">`
   - Updated relative links to use Next.js routing

4. **Images**
   - Converted `<img>` tags to Next.js `<Image>` component
   - Added proper width/height attributes
   - Configured remote image optimization

5. **JavaScript Logic**
   - Converted vanilla JS to React hooks (`useState`, `useEffect`)
   - Typewriter animation: Custom hook component
   - Form handling: React controlled components
   - Modal management: State-based component

6. **Layouts**
   - Created root `layout.tsx` for shared layout structure
   - Navbar and Footer as shared components
   - Global CSS and metadata management

### File Mapping

| Original | New Path |
|----------|----------|
| index.html | src/app/page.tsx |
| about.html | src/app/about/page.tsx |
| projects.html | src/app/projects/page.tsx |
| history.html | src/app/history/page.tsx |
| contact.html | src/app/contact/page.tsx |
| header (common) | src/components/Navbar.tsx |
| footer (common) | src/components/Footer.tsx |
| styles (inline) | src/app/globals.css |
| config (inline) | tailwind.config.ts |

## Installation and Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will be available at `http://localhost:3000`

## Configuration

### Tailwind CSS Theme
The theme is configured in `tailwind.config.ts` with:
- Custom color palette (terminal theme)
- Custom spacing (gutter, section gaps)
- Custom font families (headline, body, code)
- Custom border radius (minimal, retro feel)

### Image Optimization
Configured in `next.config.ts` for external images from Google Drive (lh3.googleusercontent.com)

### TypeScript
Configured with strict mode and path aliases (`@/*` maps to `src/*`)

## Development Guidelines

### Component Creation
1. Place components in `src/components/`
2. Use TypeScript interfaces for props
3. Mark interactive components with `'use client'`
4. Reuse common components from `Common.tsx`

### Styling
1. Use Tailwind utility classes
2. Avoid inline styles (except for dynamic values)
3. Reference theme colors from `tailwind.config.ts`
4. Custom animations defined in `globals.css`

### Creating New Pages
1. Create directory in `src/app/route-name/`
2. Create `page.tsx` with default export
3. Optionally add `layout.tsx` for route-specific layout
4. Export metadata from page or layout

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **CSS**: Tailwind's PurgeCSS for production
- **Fonts**: Google Fonts with `@import` in CSS
- **Dynamic Rendering**: Pages are pre-rendered at build time

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Dark mode enabled via `class` strategy
- Mobile responsive (tested down to 320px)

## Future Enhancements

- [ ] Dynamic content from CMS or API
- [ ] Blog or articles section
- [ ] Project detail pages with dynamic routing
- [ ] SEO optimization (structured data)
- [ ] Analytics integration
- [ ] Dark/Light mode toggle
- [ ] Internationalization (i18n)
- [ ] Animation library (Framer Motion)

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- **Netlify**: Supports Next.js out of the box
- **AWS Amplify**: Full serverless deployment
- **Docker**: Create Docker image for containerized deployment

## Troubleshooting

### Images not loading
- Check image URLs in components
- Ensure domains are whitelisted in `next.config.ts`
- Verify image dimensions are set correctly

### Styles not applying
- Clear `.next` directory and rebuild
- Check Tailwind config for custom colors
- Verify CSS file is imported in layout

### Navigation issues
- Ensure all pages have `page.tsx` in their directories
- Check path aliases in `tsconfig.json`
- Verify import statements use correct paths

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is open source. Feel free to use it as a template for your own portfolio.

## Author

<<<<<<< HEAD
Danya Damaris - Terminal Systems
=======
Alex Rivera - Terminal Systems
>>>>>>> fe6de1454afd9b75b0ead08818a97d05e73c3169
© 2024 All Rights Reserved
