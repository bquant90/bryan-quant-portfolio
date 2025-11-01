# What I'm Learning: My Tech Portfolio Website

# Upload Portfolio to GitHub

1. Initialize Git Repository (git init)
2. Stage all files (git add .)
3. git commit -m "MESSAGE"
4. Connect Local Repo to GitHub

- git remote add origin [https:](https://github.com/bquant90/bryan-quant-portfolio.git)
- git branch -M main
- git push -u origin main

# Future Updates

git add .
git commit -m "MESSAGE"
git push

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

### JSX (JavaScript XML)

- **What**: HTML-like syntax inside JavaScript
- **Why**: Makes writing UI code more intuitive
- **Example**:
  ```jsx
  <h1 className="text-5xl font-bold">Bryan Quant</h1>
  ```
- **Key Difference**: Use `className` instead of `class` in React

### States

- **What**: Data a component needs to remember and can change over time
- **Why**: Tracks dynamic data
- **Example**: const [isDarkMode, setIsDarkMode] = useState(true);

### Props

- **What**: Properties passed from parent to child component
- **Why**: Pass data and functions between components
- **Example**: Will learn when we break portfolio into smaller components

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

### .tsx Files

- **What**: TypeScript files that contain JSX (TypeScript + JSX)
- **Why**: Combines type safety with React components
- **Example**: `App.tsx` is a TypeScript + React component file

## Tailwind CSS

### Utility Classes

- **What**: Pre-built CSS classes for rapid styling
- **Why**: Faster styling, consistent design, no need to write custom CSS
- **Example**:
  ```jsx
  className = "text-blue-500 font-bold text-center";
  ```

### Responsive Design

- **What**: `md:` prefix applies styles only on medium screens and up
- **Why**: Makes websites look good on mobile and desktop
- **Example**:
  ```jsx
  className = "text-5xl md:text-6xl";
  // Mobile: text-5xl, Desktop: text-6xl
  ```

### Hover States

- **What**: `hover:` prefix applies styles when user hovers over element
- **Why**: Creates interactive, professional-looking UI
- **Example**:
  ```jsx
  className = "bg-blue-600 hover:bg-blue-700 hover:scale-105";
  // Normal: blue-600, Hover: darker blue + slightly larger
  ```

### Gradient Backgrounds

- **What**: `bg-gradient-to-br` creates diagonal gradient backgrounds
- **Why**: Modern, professional look without images
- **Example**:
  ```jsx
  className = "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900";
  // Creates dark blue gradient from top-left to bottom-right
  ```

## Vite

### Hot Module Replacement (HMR)

- **What**: Instantly updates the browser when you save a file
- **Why**: Fast development - no manual refresh needed
- **Example**: Save `App.tsx` → browser updates automatically

### Development Server

- **What**: Local server that runs your React app
- **Why**: Test your website before deploying to production
- **Command**: `npm run dev` starts server at `http://localhost:5173/`

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
