# Portfolio Website - Technical Overview

## Career Context

**Position**: Programmer Analyst III @ Texas Tech | 2 years Salesforce experience  
**Career Path**: SF Admin (2026) → Business Systems Analyst → Product Manager  
**Target**: Dallas SF Admin roles ($90K-$105K) | Cert by April 2026  
**Positioning**: "Business-minded problem solver who speaks the language of code"

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (Hot Module Replacement)
- **Styling**: Tailwind CSS v3.4.17
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Deployment**: GitHub (Vercel/Netlify ready)

**Why Component-Based**: Reusability, maintainability, scalability, separation of concerns

### Project Structure

```
bryan-quant-portfolio/
│
├── src/
│   ├── App.tsx                    # Main application component (routing, theme state)
│   ├── main.tsx                   # Entry point (connects React to HTML)
│   ├── index.css                  # Global styles + Tailwind directives
│   │
│   ├── components/                # UI Components
│   │   ├── Hero.tsx               # Name, title, tagline section
│   │   ├── About.tsx              # Background, notable projects
│   │   ├── Goals.tsx              # Target roles, location, career vision
│   │   ├── Skills.tsx             # Technical skills (languages, frameworks)
│   │   ├── Footer.tsx             # Contact links, theme toggle
│   │   │
│   │   ├── layout/                # Layout components
│   │   │   └── Navigation.tsx    # Sticky navigation bar
│   │   │
│   │   └── ui/                    # Reusable UI elements
│   │       └── Card.tsx           # Glassmorphic card container
│   │
│   └── content/                   # Content data (separate from UI)
│       └── portfolio.ts           # About, goals, skills text content
│
├── public/                        # Static assets
│
├── DECISIONS.md                   # Architecture decisions log
├── LEARNING.md                    # Learning concepts & reference
├── SETUP-LOG.md                   # Step-by-step build record
└── package.json                   # Dependencies & scripts
```

---

## Key Components

### App.tsx

- **Purpose**: Main controller, routing, theme state management
- **Features**: Dark/Light mode with localStorage, React Router, wraps pages with Navigation/Footer
- **State**: `useState(() => localStorage.getItem("theme") === "dark")`

### Navigation.tsx

- **Purpose**: Sticky navigation bar
- **Features**: Active link highlighting, theme-aware styling, backdrop blur

### Card.tsx

- **Purpose**: Reusable glassmorphic container
- **Features**: `backdrop-blur-sm`, hover effects, theme support, accepts `children` prop
- **Why**: DRY principle - define once, reuse everywhere

### portfolio.ts

- **Purpose**: Content separation pattern
- **Why**: Update text without touching React code, type-safe data structure

### Footer.tsx

- **Purpose**: Contact links + theme toggle
- **Props**: `isDarkMode` (current state), `toggleTheme` (function from App.tsx)

---

## React Concepts

**Props**: Data passed from parent to child (`<Card isDarkMode={isDarkMode}>`)  
**State**: Component memory that triggers re-renders (`useState`)  
**Interfaces**: TypeScript type definitions for data shape  
**React Router**: SPA navigation without page reloads (`<Router>`, `<Routes>`, `<Route>`, `<Link>`)

---

## Tailwind CSS Patterns

**Utility-First**: Combine pre-built classes in HTML  
**Responsive**: `text-5xl md:text-6xl` (mobile size, then desktop size)  
**Gradients**: `bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950`  
**Glassmorphism**: `backdrop-blur-sm bg-white/10`

---

## Commands

```bash
npm run dev    # Start dev server (localhost:5173)
npm run build  # Production build (dist/ folder)
```

## Documentation Files

**DECISIONS.md**: Architecture decisions  
**LEARNING.md**: Concept reference guide  
**SETUP-LOG.md**: Step-by-step build record

---

## Quick Reference

**Commands**: `npm run dev` | `npm run build` | `git add . && git commit -m "msg" && git push`  
**Local**: http://localhost:5173/  
**GitHub**: https://github.com/bquant90/bryan-quant-portfolio.git  
**Contact**: bquant90@gmail.com | linkedin.com/in/bryan-quant

**Update Regularly**: `portfolio.ts` (content), `LEARNING.md` (concepts), `DECISIONS.md` (arch choices)

---

**Current Status**:

- ✅ React/TS/Tailwind setup, component architecture, theme toggle, home page, navigation/routing
