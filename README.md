# Buddhika Fernando's Portfolio

A fully responsive, modern portfolio built with **React 18**, **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Optimized for all screen sizes from mobile to desktop.

## Features

✨ **Fully Responsive Design**
- Mobile-first approach with Tailwind CSS breakpoints
- Optimized layouts for mobile (320px), tablet (640px), and desktop (1024px+)
- Touch-friendly interface with proper spacing

🎨 **Modern Animations**
- Smooth scroll animations with Framer Motion
- Hero title entrance effects with glitch text
- Typewriter subtitle animation
- Particle canvas background effect
- Hover effects on cards and buttons
- Floating badge animations

🚀 **Performance Optimized**
- Server-side rendering with Next.js
- Code splitting and lazy loading
- Reduced particle count on mobile devices
- Optimized image loading
- CSS-based animations for smooth 60fps performance

🎯 **Interactive Features**
- Custom cursor (desktop only, respects mobile input)
- Smooth scroll navigation
- Mobile hamburger menu
- Intersection Observer for scroll-triggered animations
- Active navigation indicator
- Header scroll effect

📱 **Mobile Optimizations**
- Adaptive typography using clamp()
- 48px+ touch targets for buttons
- Responsive grid layouts
- Mobile navigation menu
- Reduced animations on smaller screens
- Optimized performance for slower connections

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Font**: Google Fonts (Inter)
- **Icons**: SVG inline
- **Deployment**: Optimized for Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── MobileMenu.tsx      # Mobile navigation menu
│   ├── CustomCursor.tsx    # Custom cursor (desktop)
│   ├── Hero.tsx            # Hero section with particle canvas
│   ├── ParticleCanvas.tsx  # Particle animation component
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills & tech stack
│   ├── Projects.tsx        # Featured projects
│   └── Contact.tsx         # Contact section & footer
├── lib/
│   ├── skills.ts           # Skills data
│   ├── projects.ts         # Projects data
│   └── animations.ts       # Framer Motion variants
└── public/
    └── assets/             # Images and resume
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Responsive Design Breakpoints

The portfolio is optimized for:

- **Mobile**: 320px - 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: 1024px+ (xl)

All components use Tailwind's responsive prefixes for proper scaling across devices.

## Animations

### Desktop-Only Features
- Custom cursor with ring effect
- Particle canvas background
- Floating badges in hero section

### All Devices
- Scroll-triggered animations
- Fade-in and slide effects
- Typewriter subtitle animation
- Hover effects on cards

### Mobile Optimizations
- Reduced particle count for better performance
- Simplified animations on lower-end devices
- Touch-friendly interactions

## Color Scheme

- **Background**: #000000 (black)
- **Text**: #FFFFFF (white)
- **Accent**: #db2777 (pink)
- **Gray variants**: #6b7280, #9ca3af, #1f2937

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images are optimized with proper alt text
- CSS-in-JS is minimized using Tailwind utility classes
- Animations use transform and opacity for GPU acceleration
- Lazy loading for off-screen components
- Reduced particle count on mobile devices

## Customization

### Colors
Edit the color tokens in:
- `tailwind.config.ts` - Theme colors
- `src/app/globals.css` - Custom CSS variables

### Fonts
Modify in `src/app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

### Content
Update data in:
- `src/lib/skills.ts` - Technology skills
- `src/lib/projects.ts` - Project information
- Component files - Text content

## License

This portfolio is built by Buddhika Fernando. Feel free to use it as inspiration for your own portfolio!

## Contact

- GitHub: [Alokafernando](https://github.com/Alokafernando)
- LinkedIn: [Buddhika Fernando](https://www.linkedin.com/in/buddhika-fernando-73606131a/)
- Email: buddhikafernando19@gmail.com
- Telegram: [@Alokafernando](https://t.me/Alokafernando)

---

Built with ❤️ using React, Next.js, and Tailwind CSS
