# Responsive Design Documentation

## Overview

This portfolio is built with a **mobile-first approach** using Tailwind CSS. Every component is optimized for all screen sizes from 320px (small phones) to 1920px+ (large desktops).

## Breakpoints

Tailwind CSS breakpoints used throughout:

```
sm:  640px   (tablets landscape, large phones)
md:  768px   (iPad, small tablets)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (ultra-wide screens)
```

## Component-by-Component Responsive Guide

### Header
**Mobile (< 640px)**
- Hamburger menu active
- Logo only, nav hidden
- Spacing: `px-5 py-5`

**Tablet (640px - 1024px)**
- Hamburger menu still active
- Increased padding: `px-8`

**Desktop (> 1024px)**
- Full navigation visible
- Hamburger hidden
- Logo on left, nav in center

### Hero Section
**Mobile**
- Hero title: `text-5xl` (~2rem)
- Subtitle: `text-[10px]` with type-cursor
- Social icons: Row below subtitle (horizontal)
- Floating badges: Hidden
- Particle count: 30 particles

**Tablet**
- Hero title: `text-6xl` (~2.25rem)
- More padding on sides
- Floating badges: Still hidden
- Particle count: 50 particles

**Desktop**
- Hero title: `text-7xl lg:text-8xl` (up to 3rem+)
- Social sidebar: Left side vertical layout
- Floating badges: Right side with animations
- Particle count: 90 particles

### About Section
**Mobile**
- Single column layout
- Photo above text
- Contact info: Stacked vertically
- Button: Full width
- Text size: `text-base`
- Spacing: `px-5`

**Tablet**
- Still single column
- Increased horizontal padding
- Text size: `text-lg`
- Spacing: `px-8`

**Desktop**
- 2-column grid: `lg:grid-cols-[1.2fr_0.8fr]`
- Photo on right side
- Contact info: Horizontal layout with dividers
- Gap: `lg:gap-14`

### Skills Grid
**Mobile**
- 3 columns: `grid-cols-3`
- Small icons: `w-7 h-7`
- Gap: `gap-3`
- Font size: `text-[0.6rem]`

**Tablet**
- 4 columns: `sm:grid-cols-4`
- Medium icons: `w-8 h-8`
- Gap: `gap-4`
- Font size: `text-[0.7rem]`

**Desktop**
- 6 columns: `lg:grid-cols-6`
- Large icons: `w-12 h-12`
- Gap: `gap-5`
- Font size: `text-xs`

### Projects Grid
**Mobile**
- 1 column: `grid-cols-1`
- Full width cards
- Image height: `h-48`
- Padding: `p-5`

**Tablet**
- 2 columns: `md:grid-cols-2`
- Balanced layout
- Image height: `sm:h-52`
- Padding: `sm:p-6`

**Desktop**
- 3 columns: `lg:grid-cols-3`
- Optimized spacing
- Image height: Standard
- Padding: `p-6`

### Contact Section
**Mobile**
- Single column buttons
- Full width: `flex-col`
- Width: `w-full`
- Padding: `px-6 py-3`

**Tablet**
- Still mostly vertical

**Desktop**
- Row layout: `sm:flex-row`
- Wrap with justify-center
- Auto width: `w-auto`
- Padding: `px-8 py-4`

## Responsive Typography

All text uses Tailwind's responsive text sizing:

```tsx
// Fluid sizing with clamp()
text-5xl sm:text-6xl lg:text-7xl xl:text-8xl

// Static responsive sizes
text-xs sm:text-sm md:text-base lg:text-lg

// Font weights
font-bold, font-semibold, font-medium
```

## Spacing Strategy

**Padding (Horizontal)**
- Mobile: `px-5` (20px)
- Tablet: `px-8` (32px)  
- Desktop: `xl:px-20` (80px)

**Gaps**
- Mobile: `gap-3` (12px)
- Tablet: `gap-4` (16px)
- Desktop: `gap-5` (20px)

**Margins**
- Section padding: `py-20 sm:py-28`
- Horizontal margins: Use max-width containers

## Touch Targets

All interactive elements meet 48px minimum:
```tsx
button, a, .interactive {
  min-height: 48px;
  min-width: 48px;
}
```

## Image Responsiveness

### Hero Background
- Width: `w-full max-w-full`
- Height: `h-4/5`
- Object-fit: `object-contain object-top`
- Scaling: Automatic based on container

### About Photo
- Max width: `max-w-[260px] sm:max-w-xs lg:max-w-sm`
- Aspect ratio: `pt-[125%]` (5:4 ratio)
- Border radius: `rounded-2xl`

### Project Images
- Height: `h-48 sm:h-52`
- Full width: `w-full`
- Object-fit: `object-cover`

## Animation Responsiveness

### Desktop
- Full particle canvas (90 particles)
- Custom cursor with ring effect
- Floating badge animations
- Smooth 60fps animations

### Mobile
- Reduced particles (30) for performance
- No custom cursor (uses native pointer)
- Simplified animations
- Optimized for touch

### Gesture Support
- Smooth scroll on all devices
- Touch-friendly nav interactions
- No hover states on touch devices (uses CSS `@media (pointer: fine)`)

## Viewport Meta Tag

```html
<meta name="viewport" 
  content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=true">
```

## SEO & Meta Tags

- Responsive viewport configured
- Theme color: Pink accent (#db2777)
- OpenGraph tags for social sharing
- Mobile-optimized manifest ready

## Testing Breakpoints

### Mobile Testing
- iPhone SE: 375px
- iPhone 12: 390px
- Galaxy S21: 360px

### Tablet Testing
- iPad Mini: 768px
- iPad Air: 820px
- iPad Pro: 1024px+

### Desktop Testing
- Laptop: 1366px
- Desktop: 1920px+
- Ultra-wide: 2560px+

## Performance at Each Breakpoint

**Mobile**
- Reduced particles (30)
- Simplified shadows
- Smaller image files
- Optimized font loading

**Tablet**
- Medium particles (50)
- Standard animations
- Progressive image loading
- Font subsetting

**Desktop**
- Full features (90 particles)
- All animations active
- Large images cached
- Full font loading

## Responsive Color Scheme

Colors remain consistent across all devices:

```
Background:  #000000 (black)
Text:        #ffffff (white)
Accent:      #db2777 (pink)
Gray:        #6b7280 (medium)
Dark:        #1f2937 (dark)
```

## Accessibility

### Screen Reader Optimization
- Semantic HTML (`<section>`, `<header>`, `<main>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels on interactive elements

### Keyboard Navigation
- All buttons/links keyboard accessible
- Focus states visible on all interactive elements
- Scroll behavior smooth and interruptible
- Mobile menu closable with Escape

### Color Contrast
- Text: WCAG AAA compliant (7:1 ratio)
- Borders: Sufficient contrast with background
- Accent: High contrast pink (#db2777 on black)

## Browser Support

| Browser | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Chrome  | ✅     | ✅     | ✅      |
| Firefox | ✅     | ✅     | ✅      |
| Safari  | ✅     | ✅     | ✅      |
| Edge    | ✅     | ✅     | ✅      |

## Known Considerations

1. **iPhone Notch**: Safe area insets handled automatically
2. **iPad Landscape**: Navigation optimized for wide viewports
3. **Dark Mode**: Uses system preferences (auto mode)
4. **Landscape Orientation**: Headers stay usable
5. **Slow Networks**: Images lazy load, particles reduce

## Future Optimizations

- [ ] Dark mode toggle
- [ ] Print stylesheet
- [ ] PWA manifest
- [ ] Adaptive images (WebP)
- [ ] Preload critical resources
- [ ] Service worker for offline

---

**Remember**: Always test on actual devices, not just browser DevTools!
