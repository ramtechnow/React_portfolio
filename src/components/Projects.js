import { motion } from 'framer-motion';
import websiteImg1 from "../assets/ecommerce-website.png";
import websiteImg2 from "../assets/LILO.png";
import websiteImg3 from "../assets/project.jpg";
import websiteImg4 from "../assets/company project.png";
import websiteImg5 from "../assets/grocery.png";
import websiteImg6 from "../assets/Weather_app.png";
import { useEffect } from 'react';

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        title: "E-commerce Website",
        description: "Company website built with React Bootstrap 5.",
        link: "https://ecommerce-website-dfd55.web.app/",
        technologies: ["React", "Bootstrap", "Firebase"]
      },
      {
        image: websiteImg2,
        title: "LILO Tracker",
        description: "Login and logout tracker with Python Tkinter and email integration.",
        link: "https://github.com/ramtechnow/LILO-Tracker",
        technologies: ["Python", "Tkinter", "Email API"]
      },
      {
        image: websiteImg3,
        title: "Image Search App",
        description: "Image search application using Unsplash API.",
        link: "https://image-search-using-unsplash-api.vercel.app/",
        technologies: ["React", "Unsplash API", "CSS"]
      },
      {
        image: websiteImg4,
        title: "Company Website",
        description: "Client company website with modern design.",
        link: "https://ramtechnow.github.io/SINX-TECHNOLOGIES/",
        technologies: ["HTML", "CSS", "JavaScript"]
      },
      {
        image: websiteImg5,
        title: "Grocery Store",
        description: "Responsive grocery store webpage built with Bootstrap.",
        link: "https://ramtechnow.github.io/Grocery_boostrap_webpage/",
        technologies: ["Bootstrap", "HTML", "CSS"]
      },
      {
        image: websiteImg6,
        title: "Weather App",
        description: "Weather application using weather API integration.",
        link: "https://fir-sample-84c93.web.app/",
        technologies: ["JavaScript", "Weather API", "CSS"]
      },
    ],
  };

  // Handle hash navigation for the projects section
  useEffect(() => {
    if (window.location.hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        setTimeout(() => {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col py-20 px-5 justify-center text-black bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="w-full flex flex-col items-center px-5 py-10 mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 text-gray-800 dark:text-white relative inline-block"
            variants={itemVariants}
          >
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-y-2"></span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            Here's a collection of my recent work showcasing various technologies and solutions. 
            Each project represents different challenges and learning experiences.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          className="w-full px-5"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for background pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
}