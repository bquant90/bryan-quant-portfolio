# Portfolio Setup Log

**Purpose**: Step-by-step record of how this project was built.

## Project Initialization

### Step 1: Create Vite React TypeScript Project

**Command:**

```bash
npm create vite@latest . -- --template react-ts
```

**What it does:**

- Creates a new React + TypeScript project in the current folder using Vite
- Installs all necessary dependencies (React, TypeScript, Vite, etc.)
- Sets up the basic project structure

**Files Created:**

1. `package.json` - Lists all dependencies
2. `tsconfig.json` - TypeScript configuration
3. `vite.config.ts` - Build tool settings
4. `index.html` - Entry point (the main HTML file)
5. `src/` folder:
   - `App.tsx` - Main component (main page)
   - `main.tsx` - App initialization (connects React to the HTML)
   - `index.css` - Global styles

---

## Tailwind CSS Setup

### Step 2: Install Tailwind CSS v3

**Commands:**

```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer
```

**What it does:**

- Installs Tailwind CSS (version 3.4.17)
- Installs PostCSS (CSS processor)
- Installs Autoprefixer (adds vendor prefixes to CSS)

### Step 3: Configure Tailwind CSS

**Files Created/Modified:**

1. **`tailwind.config.js`** - Tailwind configuration

   ```javascript
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

2. **`postcss.config.js`** - PostCSS configuration

   ```javascript
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

3. **`src/index.css`** - Added Tailwind directives
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   body {
     margin: 0;
     font-family: system-ui, -apple-system, sans-serif;
   }
   ```

**What these do:**

- `tailwind.config.js`: Tells Tailwind which files to scan for CSS classes
- `postcss.config.js`: Tells configures PostCSS to process Tailwind CSS
- `@tailwind`: Directives inject Tailwind's styles into your CSS

---

## Portfolio Content

### Step 4: Build Portfolio Website

**File Modified:** `src/App.tsx`

**Sections Created:**

1. **Hero Section** - Name, title, and tagline
2. **Who I Am** - Background and notable projects
3. **What I'm Looking For** - Target roles, vision, location
4. **Technical Skills** - Languages and frameworks
5. **Let's Connect** - Contact buttons (LinkedIn, GitHub, Email)
6. **Footer** - Professional footer with tech stack

**Tailwind CSS Classes Used:**

- Layout: `min-h-screen`, `container`, `mx-auto`, `px-6`, `py-20`
- Colors: `bg-gradient-to-br`, `from-gray-900`, `via-blue-900`, `text-white`
- Typography: `text-5xl`, `font-bold`, `text-center`
- Effects: `backdrop-blur-sm`, `rounded-lg`, `shadow-xl`, `hover:scale-105`
- Responsive: `md:text-6xl`, `md:grid-cols-2`

---

## Running the Project

### Start Development Server

**Command:**

```bash
npm run dev
```

**What it does:**

- Starts Vite development server at `http://localhost:5173/`

**View Portfolio:**

Open browser to `http://localhost:5173/`

### Build for Production

**Command:**

```bash
npm run build
```

**What it does:**

- Creates optimized production build in `dist/` folder

---
