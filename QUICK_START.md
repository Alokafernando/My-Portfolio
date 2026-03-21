# Quick Start Guide

Get your React + Vite portfolio running in under 5 minutes.

## Prerequisites

- Node.js 16.0 or higher
- npm 7.0 or higher
- Git (for version control)

Check your versions:
```bash
node --version  # Should be v16+
npm --version   # Should be 7+
```

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```
This installs all required packages:
- React 18
- Vite 5
- Framer Motion
- Tailwind CSS
- React Icons

### Step 2: Start Development Server
```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Press q to quit
```

Open http://localhost:3000 in your browser. You should see your portfolio loading!

### Step 3: Make Changes
Edit any file in `src/components/` and see changes instantly:
- Edit `src/components/Hero.tsx` → Changes appear immediately
- Edit `src/index.css` → Styles update in real-time
- No page refresh needed thanks to Hot Module Replacement (HMR)

## Available Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production (creates dist/ folder)
npm run build

# Preview production build locally
npm run preview

# Type check TypeScript (if needed)
npm run type-check
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   └── ParticleCanvas.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── public/
│   └── assets/
│       ├── logo.png
│       ├── hero-section.png
│       ├── about.png
│       └── project-*.png
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Key Features (Already Implemented)

✅ **Fully Responsive** - Works on mobile, tablet, desktop
✅ **Fast Animations** - GPU-accelerated with Framer Motion
✅ **Custom Cursor** - Interactive ring effect on desktop
✅ **Particles Background** - Animated particle system
✅ **Smooth Scrolling** - Scroll-triggered animations
✅ **Dark Theme** - Modern dark design
✅ **Optimized** - ~300KB gzipped bundle size

## Customization (5-Minute Changes)

### Change Your Name
Open `src/components/Hero.tsx` and find:
```tsx
I am Aloka
```
Replace `Aloka` with your name and save.

### Update Social Links
Open `src/components/Hero.tsx` and modify:
```tsx
const socialLinks = [
  { href: 'https://github.com/YOUR_USERNAME', ... },
  { href: 'https://linkedin.com/in/YOUR_PROFILE', ... },
  // etc
]
```

### Change Colors
Open `tailwind.config.js` and modify:
```js
colors: {
  primary: "#00d4ff",    // Change cyan color
  secondary: "#ff006e",  // Change pink color
}
```

### Update About Section
Open `src/components/About.tsx` and update the text.

### Add Your Projects
Open `src/components/Projects.tsx` and update the projects array:
```tsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: '/assets/your-image.png',
    github: 'https://github.com/...',
    live: 'https://...'
  },
  // Add more projects
]
```

### Update Skills
Open `src/components/Skills.tsx` and modify the skills array.

## Building for Production

When you're ready to deploy:

```bash
# Create optimized production build
npm run build

# This creates a dist/ folder with everything needed
```

The `dist/` folder contains:
- Minified JavaScript
- Optimized CSS
- Static assets
- Ready to deploy to any static host

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Visit https://vercel.com
3. Connect your repository
4. Vercel automatically deploys on every push

### GitHub Pages
```bash
npm run build
# Then push dist/ folder to gh-pages branch
```

### Netlify
1. Visit https://netlify.com
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish folder: `dist`
5. Deploy!

### Any Static Host
```bash
npm run build
# Upload dist/ folder to your hosting
```

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Blank Page in Browser
1. Check browser console (F12)
2. Check for 404 errors
3. Ensure `public/assets/` folder exists
4. Restart dev server: `Ctrl+C` then `npm run dev`

### Images Not Loading
- Ensure images are in `public/assets/` folder
- Use paths like `/assets/image.png` (with leading slash)
- Check browser console for 404 errors

### Animations Not Working
1. Check browser console for errors
2. Ensure Framer Motion is installed: `npm list framer-motion`
3. Try clearing cache: `Ctrl+Shift+Delete` in browser

### HMR Not Working
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Restart dev server
3. Check firewall settings

## Performance Tips

- Images: Keep under 500KB each
- Use jpg for photos, png for logos
- Test on actual mobile devices
- Use DevTools to check loading times

## File Size Targets

Good bundle sizes:
- JavaScript: < 400KB gzipped
- CSS: < 50KB gzipped
- Total: < 500KB gzipped

Your current setup is already optimized!

## Next Steps

1. ✅ Install: `npm install`
2. ✅ Run: `npm run dev`
3. ✅ Customize: Edit components
4. ✅ Test: Check in browser
5. ✅ Build: `npm run build`
6. ✅ Deploy: Push to GitHub & Vercel

## Useful Links

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)

## Quick Tips

### Enable CSS Debugging
Add to `tailwind.config.js`:
```js
module.exports = {
  // ... existing config
  safelist: [
    // Add classes you want to always include
  ]
}
```

### Check Bundle Size
```bash
npm run build
# Check console output for file sizes
```

### Run Type Checking
```bash
npm run type-check
```

---

**Ready to start?** Run `npm install && npm run dev` 🚀

Questions? Check the console (F12) for error messages and refer to the documentation links above.
