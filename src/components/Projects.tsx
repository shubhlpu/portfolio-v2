import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronDown, Code, Globe, Rocket } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Vehicle Inspection Journey Revamp',
    description: 'Developed an inspection journey to introduce new features like Google Maps, current location pointer and simplified/enhanced user journeys.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    duration: 'Aug 2023 - Sep 2023',
    company: 'Acko',
    highlights: [
      'Tracking of Inspection steps:- This feature gives users real-time insights into the current inspection status.',
      'Fetching current location:- If permission is granted, users can access their current location. Otherwise, they will be prompted to grant permission to benefit from this feature fully.',
      'Better UI/UX to select inspection slots.',
      'Added Segment events for the analysis.',
      'Revamped the inspection flow, integrating new elements like maps, current location pointers, and enhancing user journeys for a more visually appealing experience.',
      'This greatly assists those who go for inspection approvals because they have latitude and longitude, which they can use to find the location without any issues.',
      'There won\'t be any issues for customers in scheduling inspections, and we have clearly provided information for each step.'
    ],
    technologies: ['Next.js', 'Team Leadership', 'Google Maps API', 'Tableau', 'Amplitude Analytics'],
    category: 'Frontend Development',
    demoLink: '#',
    codeLink: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Bike Insurance Rearchitecture',
    description: 'Complete overhaul of bike insurance purchase flows for enhanced user experience',
    image: 'https://images.pexels.com/photos/2317408/pexels-photo-2317408.jpeg',
    duration: 'Apr 2023 - Jul 2023',
    company: 'Acko',
    highlights: [
      'Divided implementation into fresh, new, and renewal bike journeys',
      'Achieved consistency between car and bike flows',
      'Enhanced user experience by leveraging MO\'s better response time',
      'Led a team of 5 members while managing frontend migration independently',
      'This initiative resulted in achieving consistency between the car and bike flows.',
      'The fresh bike business has seen a remarkable surge, with sales soaring by 23% compared to the previous financial year.',
      'Similarly, new car sales have also experienced a notable uptick, rising by 11%. And, ~2% uplift in bike renewal GWP due to add-on adoption increase (NOPs with add-on: 33% > 55%) post scale-up of new buying experience launch.'
    ],
    technologies: ['Next.js', 'Front-end Development', 'Team Leadership', 'Redux toolkit', 'Project Management'],
    category: 'Frontend Development',
    demoLink: '#',
    codeLink: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Configurable, Component-based UI Architecture',
    description: 'A highly flexible architecture allowing UI modifications without deployment/engineering intervention',
    image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg',
    duration: 'Jan 2023 - Mar 2023',
    company: 'Acko',
    highlights: [
      'Developed a component-driven framework configurable via JSON',
      'Enabled UI changes like showing/hiding, reordering, and style updates without touching frontend code',
      'Revamped fresh car journey using modern frameworks',
      'Achieved significant growth in entry and sales with faster page speeds'
    ],
    technologies: ['React', 'TypeScript', 'JSON Schema', 'Component Architecture'],
    category: 'Architecture',
    demoLink: '#',
    codeLink: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Acko Shield (All Insurance in a single app)',
    description: 'Unified application consolidating all insurance products under a single subscription model',
    image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg',
    duration: 'Nov 2022',
    company: 'Acko',
    highlights: [
      'Developed a unified application for all insurance products',
      'Created fully functional and interactive UI within 24 hours',
      'Implemented subscription-based model for insurance products',
      'Comprehensive Coverage: One product covers Car, Bike, and Health Insurance',
      'Significant Cost Savings: Enjoy substantial savings',
      'Consolidated Coverage: Pooled coverage across all insured assets',
      'Simplified Renewals: Streamlined process with one product and one renewal'
    ],
    technologies: ['React Native', 'Redux', 'API Integration', 'UI/UX Design'],
    category: 'Mobile Development',
    demoLink: '#',
    codeLink: '#',
    featured: true,
  }
];

const ProjectCard: React.FC<{
  project: typeof projects[0];
  index: number;
}> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardRef.current) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0)';
              }
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl opacity-0"
      style={{ transform: 'translateY(40px)', transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden group h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex space-x-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
              aria-label="View Demo"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
              aria-label="View Code"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          {project.featured && (
            <span className="text-xs font-semibold bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{project.duration}</span>
          <span className="mx-2">•</span>
          <span>{project.company}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>

          {isExpanded && (
            <div className="mt-4 space-y-2 animate-fade-in">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', 'Frontend Development', 'Architecture', 'Mobile Development'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }
            if (filterRef.current) {
              setTimeout(() => {
                if (filterRef.current) {
                  filterRef.current.style.opacity = '1';
                  filterRef.current.style.transform = 'translateY(0)';
                }
              }, 300);
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            A showcase of my recent work, demonstrating my expertise in building modern web applications and solving complex technical challenges.
          </p>
          
          <div 
            ref={filterRef}
            className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 transform translate-y-8 transition-all duration-700"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;