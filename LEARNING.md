# What I'm Learning: My Tech Portfolio Website

## React Fundamentals

### Components

- **What**: Reusable UI pieces (like Lightning Web Components in Salesforce)
- **Why**: Modular, maintainable code that's easy to update
- **Example**:
  ```jsx
  function App() {
    return (
      <div className="min-h-screen bg-gradient-to-br">
        <header>Bryan Quant</header>
      </div>
    );
  }
  export default App;
  ```
- **Date learned**: Nov 1, 2025

### JSX (JavaScript XML)

- **What**: HTML-like syntax inside JavaScript
- **Why**: Makes writing UI code more intuitive
- **Example**:
  ```jsx
  <h1 className="text-5xl font-bold">Bryan Quant</h1>
  ```
- **Key Difference**: Use `className` instead of `class` in React
- **Date learned**: Nov 1, 2025

### Props (Coming Next)

- **What**: Data passed to components
- **Why**: Make components flexible and reusable
- **Example**: Will learn when we break portfolio into smaller components
- **Date learned**: [FUTURE]

## TypeScript

### Type Definitions

- **What**: Describes the shape and structure of data
- **Why**: Makes code more predictable and easier to maintain
- **Example**:
  ```typescript
  // Function return type
  function App(): JSX.Element {
    return <div>...</div>;
  }
  ```
- **Date learned**: Nov 1, 2025

### .tsx Files

- **What**: TypeScript files that contain JSX (TypeScript + JSX)
- **Why**: Combines type safety with React components
- **Example**: `App.tsx` is a TypeScript + React component file
- **Date learned**: Nov 1, 2025

## Tailwind CSS

### Utility Classes

- **What**: Pre-built CSS classes for rapid styling
- **Why**: Faster styling, consistent design, no need to write custom CSS
- **Example**:
  ```jsx
  className = "text-blue-500 font-bold text-center";
  ```
- **Date learned**: Nov 1, 2025

### Responsive Design

- **What**: `md:` prefix applies styles only on medium screens and up
- **Why**: Makes websites look good on mobile and desktop
- **Example**:
  ```jsx
  className = "text-5xl md:text-6xl";
  // Mobile: text-5xl, Desktop: text-6xl
  ```
- **Date learned**: Nov 1, 2025

### Hover States

- **What**: `hover:` prefix applies styles when user hovers over element
- **Why**: Creates interactive, professional-looking UI
- **Example**:
  ```jsx
  className = "bg-blue-600 hover:bg-blue-700 hover:scale-105";
  // Normal: blue-600, Hover: darker blue + slightly larger
  ```
- **Date learned**: Nov 1, 2025

### Gradient Backgrounds

- **What**: `bg-gradient-to-br` creates diagonal gradient backgrounds
- **Why**: Modern, professional look without images
- **Example**:
  ```jsx
  className = "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900";
  // Creates dark blue gradient from top-left to bottom-right
  ```
- **Date learned**: Nov 1, 2025

## Vite

### Hot Module Replacement (HMR)

- **What**: Instantly updates the browser when you save a file
- **Why**: Fast development - no manual refresh needed
- **Example**: Save `App.tsx` → browser updates automatically
- **Date learned**: Nov 1, 2025

### Development Server

- **What**: Local server that runs your React app
- **Why**: Test your website before deploying to production
- **Command**: `npm run dev` starts server at `http://localhost:5173/`
- **Date learned**: Nov 1, 2025

## Key Concepts

### Component Structure

- **LWC**: `myComponent.html` + `myComponent.js` + `myComponent.css`
- **React**: Everything in `App.tsx` (HTML-like JSX + JavaScript + inline styles)

### Styling Approach

- **Old way**: Write CSS in separate `.css` files
- **Tailwind way**: Use utility classes directly in JSX
- **Benefit**: Faster development, no naming conflicts, easy to see what styles apply

### Next Learning Goals

1. **Break App into smaller components** - Hero, About, Skills, Contact components
2. **Learn Props** - Pass data between components
3. **Add State** - Make interactive features (forms, toggles, etc.)
4. **Deploy to production** - Host on Vercel
