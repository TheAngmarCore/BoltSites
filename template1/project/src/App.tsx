import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

// Add custom styles to index.css
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className="font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;