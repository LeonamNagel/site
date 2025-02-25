# Project Documentation

## Overview
This is a modern landing page built with React, TypeScript, and shadcn/ui components. The site features a dark theme with magical interactions and animations, focusing on AI consulting services.

## Tech Stack
- React 18.3.1
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Project Structure

### Core Components

#### App.tsx
The main application component that orchestrates all sections of the landing page.

#### Navbar
- Features a responsive, sticky navigation bar
- Auto-hides on scroll down and shows on scroll up
- Includes mobile menu with slide-out drawer
- Social media links and email copy functionality

#### Sections

1. **HeroSection**
   - Main landing section with animated sparkles
   - Gradient text effects
   - Call-to-action buttons
   - Smooth scroll functionality

2. **ServicesSection**
   - Grid layout of service cards
   - Hover animations and transitions
   - Icon integration with Lucide React

3. **BenefitsSection**
   - Grid of benefit cards
   - Icon-based presentation
   - Hover effects and transitions

4. **PortfolioSection**
   - Timeline-style presentation
   - Card-based layout
   - Emoji integration

5. **AboutSection**
   - Personal introduction
   - Text highlighting
   - Responsive layout

6. **FaqSection**
   - Accordion-style Q&A
   - Smooth animations
   - Accessible interactions

7. **Footer**
   - Multi-column layout
   - Social media links
   - Contact information
   - Copyright notice

### Utility Components

#### Icons
- `TikTokIcon`: Custom SVG icon component
- Integration with Lucide React icons

### Hooks

#### use-scroll
Custom hook for navbar scroll behavior:
- Tracks scroll position
- Manages navbar visibility
- Implements scroll threshold

#### use-toast
Toast notification system:
- Manages toast state
- Handles toast queue
- Provides toast actions

### Styling

#### Theme
- Dark theme with high contrast
- Primary color: #fbc105 (used sparingly for emphasis)
- Custom animations and transitions
- Gradient effects

#### Animations
- Sparkle effects
- Floating animations
- Gradient shimmers
- Hover transitions

### Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-based layouts
   - Touch-friendly interactions

2. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Focus management

3. **Performance**
   - Optimized animations
   - Lazy-loaded components
   - Efficient state management

4. **User Experience**
   - Smooth transitions
   - Interactive feedback
   - Clear navigation

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Deployment
The application is deployed on Netlify with automatic builds and deployments.

## Best Practices

1. **Component Organization**
   - Modular structure
   - Single responsibility principle
   - Clear component hierarchy

2. **State Management**
   - Local state when possible
   - Custom hooks for shared logic
   - Prop drilling minimization

3. **Styling**
   - Tailwind utility classes
   - CSS variables for theming
   - Consistent naming conventions

4. **Performance**
   - Optimized assets
   - Minimal re-renders
   - Code splitting

## Maintenance

### Adding New Sections
1. Create new component in `src/components`
2. Add to `App.tsx`
3. Include necessary styles
4. Update navigation if required

### Updating Content
- Content is maintained in component files
- Update text and images directly in components
- Maintain consistent styling

### Style Modifications
- Update theme variables in `index.css`
- Modify Tailwind config as needed
- Keep animations consistent

// This file will be moved to the 'docs' directory.