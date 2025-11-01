import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/layout/Navigation';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Goals from './components/Goals';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${
        isDarkMode 
        ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
        {/* Navigation - Shows on all pages */}
        <Navigation isDarkMode={isDarkMode} />

        <div className="flex-grow">
          <Routes>
            {/* Home route */}
            <Route path="/" element={
              <>
                <Hero isDarkMode={isDarkMode} />
                <About isDarkMode={isDarkMode} />
                <Goals isDarkMode={isDarkMode} />
                <Skills isDarkMode={isDarkMode} />
              </>
            } />

            {/* Projects route */}
            <Route path="/projects" element={
              <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Projects Page</h1>
                <p>Coming Soon</p>
              </div>
            } />
          </Routes>
        </div>
        
        <Footer isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      </div>
    </Router>
  );
}

export default App;
