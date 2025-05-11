import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, CircleDot } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Acko',
    roles: [
      {
        title: 'SDE-3 (Frontend)',
        duration: 'Oct 2024 - Present',
        location: 'Bengaluru, Karnataka, India',
        description: [
          'Leading technical initiatives and mentoring team members',
          'Driving architectural decisions for frontend systems',
          'Collaborating with cross-functional teams to deliver complex features'
        ],
        technologies: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'NestJS']
      },
      {
        title: 'SDE-2 (Frontend)',
        duration: 'Jun 2022 - Sep 2024',
        location: 'Bengaluru, Karnataka, India',
        description: [
          'Spearheaded a re-architecture of the bike insurance journey across all journeys (fresh, new, and renewals), leading to ~23% increase in fresh bike policies, ~11% for new policies, and ~2% uplift in renewal GWP',
          'Led organization-level Server-Driven UI project for web, delivering framework and capabilities to cross-functional teams',
          'Transitioned common components from acko-ui-kit to bit.dev for better maintainability',
          'Conducted experiments on quote screen including No Claims Bonus (NCB) inquiries, improving E2Q conversion by 10%',
          'Led ISNP initiative with cross-team DevOps collaboration',
          'Managed end-to-end UTMs and UI fixing basics project',
          'Acted as first point of contact for production issues and release gatekeeper'
        ],
        technologies: ['TypeScript', 'Next.js', 'React.js', 'Redux.js', 'Team Leadership', 'Project Planning']
      }
    ]
  },
  {
    id: 2,
    company: 'Vedantu',
    roles: [
      {
        title: 'Software Engineer 2',
        duration: 'Apr 2021 - May 2022',
        location: 'Bengaluru, Karnataka, India',
        description: [
          'Developed Superkids flagship programs including Superreaders, Supercoders, and integrated pages',
          'Led team of engineers, fostering professional development',
          'Improved web vitals using Lighthouse tool',
          'Integrated Jest testing library for robust unit testing',
          'Expanded Supercoders program internationally',
          'Achieved 5x team growth in FY 2021-2022'
        ],
        technologies: ['AWS', 'Next.js', 'Kubernetes', 'GitLab CI/CD', 'Project Management']
      },
      {
        title: 'Software Engineer',
        duration: 'Sep 2020 - Mar 2021',
        location: 'Bengaluru, Karnataka, India',
        description: [
          'Developed responsive web pages using EJS, React.js, Next.js',
          'Migrated pages from EJS to Next.js for better performance',
          'Implemented comprehensive tracking using clickStream and GA Events',
          'Integrated Google Tag Manager for dynamic content updates'
        ],
        technologies: ['Web Engineering', 'Next.js', 'Redux.js', 'Google Tag Manager']
      }
    ]
  },
  {
    id: 3,
    company: 'Egnify Technologies',
    roles: [
      {
        title: 'Product Developer',
        duration: 'Jul 2020 - Sep 2020',
        location: 'Hyderabad, Telangana, India',
        description: [
          'Designed interactive dashboard for students and educators',
          'Created structured day-wise study plan feature',
          'Developed customizable content modules for curriculum needs'
        ],
        technologies: ['React.js', 'JavaScript', 'REST APIs']
      },
      {
        title: 'Product Developer (Front End) Intern',
        duration: 'Jul 2019 - Jun 2020',
        location: 'Hyderabad Area, India',
        description: [
          'Developed mark analysis tool for 50,000+ users',
          'Created web pages using ReactJS and Redux',
          'Implemented parent-teacher monitoring features',
          'Developed gamified learning features with coin system',
          'Built live classes with Firebase integration',
          'Created CMS for educational content management'
        ],
        technologies: ['React.js', 'Redux', 'Firebase', 'JavaScript']
      }
    ]
  }
];

const TimelineItem: React.FC<{
  company: typeof experiences[0];
  index: number;
}> = ({ company, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && itemRef.current) {
            setTimeout(() => {
              if (itemRef.current) {
                itemRef.current.style.opacity = '1';
                itemRef.current.style.transform = 'translateY(0)';
              }
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="mb-12 opacity-0 transform translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex">
        <div className="flex flex-col items-center mr-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-500 dark:text-teal-400">
            <Briefcase size={20} />
          </div>
          {index !== experiences.length - 1 && (
            <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 my-2"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{company.company}</h3>
            
            {company.roles.map((role, roleIndex) => (
              <div key={roleIndex} className={`${roleIndex !== 0 ? 'mt-6 pt-6 border-t border-gray-200 dark:border-gray-700' : ''}`}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{role.title}</h4>
                  <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 text-sm font-medium rounded-full flex items-center">
                    <Calendar size={14} className="mr-1" /> {role.duration}
                  </span>
                </div>
                
                <div className="text-gray-600 dark:text-gray-400 mb-2">{role.location}</div>
                
                <ul className="mb-4 space-y-2">
                  {role.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Professional Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A timeline of my professional experience, showcasing my growth and achievements as a frontend engineer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} company={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;