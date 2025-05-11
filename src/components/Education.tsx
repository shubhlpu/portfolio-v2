import React, { useRef, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && titleRef.current) {
            titleRef.current.style.opacity = '1';
            titleRef.current.style.transform = 'translateY(0)';
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

  const education = [
    {
      degree: "B.Tech. (CSE)",
      institution: "Lovely Professional University",
      duration: "2016 - 2020",
      location: "Punjab, India",
      achievements: [
        "CGPA: 9.0/10",
        "Active member of the Computer Science Society",
        "Participated in multiple hackathons and coding competitions"
      ]
    },
    {
      degree: "Senior Secondary",
      institution: "RS Convent Sainik School - CBSE",
      duration: "2015 - 2016",
      location: "Varanasi, India",
      achievements: [
        "Percentage: 83.6%",
        "Participated in various academic competitions",
        "Active member of the school's programming club"
      ]
    }
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 transform transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 mr-4">
                  <GraduationCap className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{edu.duration}</span>
                <span className="mx-2">•</span>
                <span>{edu.location}</span>
              </div>
              
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;