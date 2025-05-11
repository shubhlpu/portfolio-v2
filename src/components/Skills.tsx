import React, { useEffect, useRef } from 'react';
import { Code as CodeIcon, Server, Globe, Database, Cloud, Link as Line, BarChart3 } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <CodeIcon className="w-8 h-8 text-teal-500" />,
    technologies: [
      { name: 'ReactJS', level: 95 },
      { name: 'NextJS', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Redux', level: 90 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Backend Integration',
    icon: <Server className="w-8 h-8 text-orange-500" />,
    technologies: [
      { name: 'NodeJS', level: 75 },
      { name: 'API Integration', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'Axios', level: 90 },
    ],
  },
  {
    category: 'UI/UX & Styling',
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    technologies: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Styled Components', level: 85 },
      { name: 'CSS Animations', level: 80 },
      { name: 'CSS Flexbox', level: 95 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    category: 'Performance & Deployment',
    icon: <Cloud className="w-8 h-8 text-purple-500" />,
    technologies: [
      { name: 'Performance Optimization', level: 80 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 85 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const SkillBar: React.FC<{ name: string; level: number; index: number }> = ({ name, level, index }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level}%`;
                barRef.current.style.opacity = '1';
              }
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level, index]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ 
            width: '0%', 
            background: 'linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
            '--tw-gradient-from': '#0d9488',
            '--tw-gradient-to': '#f97316'
          }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{
  category: string;
  icon: React.ReactNode;
  technologies: { name: string; level: number }[];
  index: number;
}> = ({ category, icon, technologies, index }) => {
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (categoryRef.current) {
              categoryRef.current.style.opacity = '1';
              categoryRef.current.style.transform = 'translateY(0)';
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={categoryRef}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-500 ease-out opacity-0"
      style={{ transform: 'translateY(40px)', transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
      </div>
      <div>
        {technologies.map((tech, techIndex) => (
          <SkillBar
            key={tech.name}
            name={tech.name}
            level={tech.level}
            index={techIndex}
          />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            With over 5 years of experience in frontend development, I've honed a versatile skill set
            that allows me to create performant, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCategory
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              technologies={skill.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;