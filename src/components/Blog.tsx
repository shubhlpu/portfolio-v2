import React, { useRef, useEffect } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Modern React Patterns for 2023',
    summary: 'Explore the latest React patterns and best practices that can help you write cleaner, more maintainable code in your projects.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'October 15, 2023',
    readTime: '6 min read',
    category: 'React',
  },
  {
    id: 2,
    title: 'Performance Optimization Techniques for Modern Web Apps',
    summary: 'Learn practical techniques to optimize your web application performance, from code splitting to lazy loading and more.',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'September 28, 2023',
    readTime: '8 min read',
    category: 'Performance',
  },
  {
    id: 3,
    title: 'TypeScript Tips and Tricks for Frontend Developers',
    summary: 'Discover useful TypeScript features that can make your development experience more productive and your code more robust.',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'August 10, 2023',
    readTime: '5 min read',
    category: 'TypeScript',
  },
  {
    id: 4,
    title: 'Building Accessible Web Applications',
    summary: 'Why accessibility matters and how to implement it in your web applications to create inclusive experiences for all users.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'July 22, 2023',
    readTime: '7 min read',
    category: 'Accessibility',
  },
];

const BlogCard: React.FC<{
  post: typeof blogPosts[0];
  index: number;
}> = ({ post, index }) => {
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
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 opacity-0"
      style={{ transform: 'translateY(40px)', transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-teal-500/90 text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.summary}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
        >
          Read More <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
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
      id="blog"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Blog & Insights</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sharing my thoughts, experiences, and knowledge about frontend development, best practices, and industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
          >
            View All Posts <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;