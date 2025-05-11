import React, { useRef, useEffect } from 'react';
import { Code, Terminal, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }
            if (contentRef.current) {
              setTimeout(() => {
                if (contentRef.current) {
                  contentRef.current.style.opacity = '1';
                  contentRef.current.style.transform = 'translateY(0)';
                }
              }, 200);
            }
            if (imageRef.current) {
              setTimeout(() => {
                if (imageRef.current) {
                  imageRef.current.style.opacity = '1';
                  imageRef.current.style.transform = 'translateY(0)';
                }
              }, 100);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">About Me</span>
          </h2>
        </div>

        <div
          ref={contentRef}
          className="max-w-4xl mx-auto opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div 
              ref={imageRef}
              className="w-48 h-48 mx-auto mb-8 opacity-0 transform translate-y-8 transition-all duration-700"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Shubham Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I am a passionate Senior Frontend Engineer with over 5 years of experience in building modern web applications. 
                My expertise lies in React, TypeScript, and NextJS, with a strong focus on creating performant and user-friendly interfaces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-600 dark:text-gray-400">Writing maintainable and scalable code is my priority</p>
                </div>

                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Terminal className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                  <p className="text-gray-600 dark:text-gray-400">Love tackling complex technical challenges</p>
                </div>

                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Team Player</h3>
                  <p className="text-gray-600 dark:text-gray-400">Excellent collaboration and communication skills</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Develop responsive and accessible web applications using modern JavaScript frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Implement complex UI components and optimize application performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Collaborate with cross-functional teams to deliver high-quality software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Mentor junior developers and contribute to technical decision-making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;