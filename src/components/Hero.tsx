import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
      }
    });
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
            Hi, I'm <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Shubham Gupta</span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Senior Frontend Engineer at Acko, specializing in building exceptional web experiences with React, TypeScript, and NextJS.
          </p>
          <div ref={ctaRef} className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/shubhamgupta3010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/shubham-gupta-3370a5141"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:shubhamgupta3010@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-2"
                aria-label="Email"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-teal-500 hover:text-teal-600 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;