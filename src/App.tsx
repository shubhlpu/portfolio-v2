import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Code, Moon, Sun, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './index.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className={`font-inter min-h-screen transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-lg backdrop-blur-md bg-white/10 dark:bg-gray-800/10 text-gray-700 dark:text-gray-200 shadow-lg transition-all hover:scale-105 hover:bg-white/20 dark:hover:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 md:hidden rounded-lg backdrop-blur-md bg-white/10 dark:bg-gray-800/10 text-gray-700 dark:text-gray-200 shadow-lg transition-all hover:scale-105 hover:bg-white/20 dark:hover:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 pointer-events-none"></div>
        
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        
        <footer className="relative z-10 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200/10 dark:border-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <Code size={20} className="mr-2 text-teal-500" />
              <span className="font-semibold text-xl">Senior Frontend Engineer</span>
            </div>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;