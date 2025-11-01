import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${
  isDarkMode 
    ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-gray-100' 
    : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
}`}>
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
    </div>
  );
}

export default App;
