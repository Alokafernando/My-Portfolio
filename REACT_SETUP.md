# React + Vite Responsive Portfolio Setup

Your portfolio has been successfully converted from Next.js to a **pure React with Vite** application. This is a modern, lightweight setup that provides excellent performance and developer experience.

## Project Structure

```
src/
├── components/              # React components
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with particles
│   ├── About.tsx           # About section with photo
│   ├── Skills.tsx          # Skills/tech stack grid
│   ├── Projects.tsx        # Featured projects
│   ├── Contact.tsx         # Contact & footer section
│   ├── CustomCursor.tsx    # Custom cursor animation
│   └── ParticleCanvas.tsx  # Particle animation canvas
├── App.tsx                 # Main app component
├── main.tsx                # React entry point
├── index.css               # Global styles + Tailwind
├── vite-env.d.ts          # Vite type definitions
public/
├── assets/                 # Images, logo, resume
│   ├── favicon.png
│   ├── logo.png
│   ├── hero-section.png
│   ├── about.png
│   ├── project-Finance-Tracker.png
│   └── resume/
index.html                  # HTML entry point
vite.config.ts             # Vite configuration
tailwind.config.js         # Tailwind CSS config
package.json               # Dependencies & scripts
```

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: React Icons
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:3000` with Hot Module Replacement (HMR) enabled.

## Features

### Fully Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Responsive typography using `clamp()` for fluid scaling
- Touch-friendly navigation (48px+ tap targets)
- Hamburger menu on mobile, sidebar navigation on desktop
- Adaptive particle canvas (fewer particles on mobile)

### Smooth Animations
- Framer Motion for GPU-accelerated animations
- Scroll-triggered animations with `whileInView`
- Smooth navigation with scroll behavior
- Particle system with interactive movement
- Floating tech badges with animation

### Interactive Components
- Custom cursor with ring effect (desktop only)
- Particle canvas background
- Typewriter subtitle effect
- Glitch text animation
- Floating elements and scale transforms

### Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast text with proper color ratios

## Key Components

### Header.tsx
- Fixed navigation with scroll detection
- Active section highlighting
- Mobile hamburger menu with smooth animations
- Responsive layout

### Hero.tsx
- Full-screen hero section
- Particle canvas background
- Floating tech badges
- Social links (desktop sidebar + mobile row)
- Typewriter effect subtitle
- Glitch animation on heading

### About.tsx
- Profile photo with hover effects
- Contact information section
- Resume download button
- Animated ping rings around photo
- Responsive grid layout

### Skills.tsx
- Tech stack organized by category
- Hover animations on skill cards
- Responsive 1-4 column grid
- Icons and categorized items

### Projects.tsx
- Project showcase cards
- Image hover zoom effect
- GitHub code links
- Live demo buttons
- Responsive grid (1-3 columns)

### Contact.tsx
- Contact options with arrows
- Social media links grid
- Email and LinkedIn call-to-actions
- Footer with credits
- Smooth hover animations

### CustomCursor.tsx
- Desktop-only custom cursor
- Animated ring that follows mouse
- Spring physics for smooth tracking
- Automatically hidden on touch devices

### ParticleCanvas.tsx
- Canvas-based particle animation
- Particle-to-particle connection lines
- Responsive particle count
- Bounce physics off boundaries
- Smooth animation loop

## Customization Guide

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: "#00d4ff",      // Cyan accent
  secondary: "#ff006e",    // Pink accent
  // ... more colors
}
```

### Content
Update component content directly in component files or create data files in `src/lib/`:
- Modify skill categories in `Skills.tsx`
- Update projects in `Projects.tsx`
- Change social links in `Hero.tsx` and `Contact.tsx`

### Animations
Adjust Framer Motion animations by modifying:
- `initial` and `animate` props for entrance animations
- `transition` duration and easing
- `whileHover` and `whileTap` for interactions

### Responsive Breakpoints
Tailwind breakpoints used (from `tailwind.config.js`):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Performance Optimizations

- Images optimized and lazy loaded
- Code splitting automatic with Vite
- CSS purging with Tailwind
- Particle count reduced on mobile devices
- Custom cursor disabled on touch devices
- Smooth scroll behavior with CSS
- Minimal dependencies (React + Framer Motion + Icons)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel
```bash
# Push to GitHub and connect to Vercel
# Vercel auto-detects Vite and deploys
```

### Other Platforms
```bash
# Build produces dist/ folder
npm run build

# Deploy dist/ to your hosting
```

## Development Tips

1. **Hot Module Replacement**: Changes auto-reload in browser
2. **Fast Refresh**: React state preserved during edits
3. **CSS Hot Updates**: Styles update without page reload
4. **Console Debugging**: Use browser DevTools for debugging

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets Not Loading
- Ensure images are in `public/assets/` folder
- Use `/assets/image.png` path (with leading slash)
- Check browser console for 404 errors

## File Size Optimization

- **Build Size**: ~500KB JavaScript (gzipped)
- **Dependencies**: 4 main packages
- **CSS**: Tree-shaken Tailwind (~50KB gzipped)
- **Images**: Optimize with ImageOptim or TinyPNG

## Next Steps

1. Update personal information in components
2. Add your actual project images
3. Customize colors and typography
4. Deploy to Vercel or preferred platform
5. Set up custom domain

## Support & Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Built with React, Vite, and Tailwind CSS for maximum performance and developer experience.
