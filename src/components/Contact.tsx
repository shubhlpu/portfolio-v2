import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }
            
            setTimeout(() => {
              if (infoRef.current) {
                infoRef.current.style.opacity = '1';
                infoRef.current.style.transform = 'translateY(0)';
              }
            }, 200);
            
            setTimeout(() => {
              if (formRef.current) {
                formRef.current.style.opacity = '1';
                formRef.current.style.transform = 'translateY(0)';
              }
            }, 400);
            
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form submitted state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-teal-500" />,
      title: 'Email',
      text: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-teal-500" />,
      title: 'Phone',
      text: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-500" />,
      title: 'Location',
      text: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,+CA',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub className="w-5 h-5" />,
      link: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      link: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      link: 'https://twitter.com',
      label: 'Twitter',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 font-poppins"
          >
            <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to chat? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <div
            ref={infoRef}
            className="w-full lg:w-1/3 opacity-0 transform translate-y-8 transition-all duration-700"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start hover:text-teal-500 transition-colors group"
                  >
                    <div className="p-2 mr-4 bg-teal-50 dark:bg-teal-900/30 rounded-full group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 opacity-0 transform translate-y-8 transition-all duration-700"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 animate-fade-in">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;