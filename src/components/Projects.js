import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import websiteImg1 from "../assets/ecommerce-website.png";
import websiteImg2 from "../assets/LILO.png";
import websiteImg3 from "../assets/project.jpg";
import websiteImg4 from "../assets/company project.png";
import websiteImg5 from "../assets/grocery.png";
import websiteImg6 from "../assets/Weather_app.png";
import websiteImg7 from "../assets/flowtask.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock background scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  const projects = [
    {
      image: websiteImg1,
      title: "E-commerce Website",
      description:
        "Developed a scalable E-commerce site using React JS and MongoDB, incorporating dynamic routing and real-time product interaction.",
      demo: "https://ecommerce-website-dfd55.web.app/",
      github: "https://github.com/ramtechnow/ecommerce-website",
      technologies: ["React JS", "MongoDB", "Tailwind CSS", "Vite"],
      challenges:
        "Designing highly responsive layout grids and dynamic database routing.",
      solution:
        "Used Tailwind layout rules and MongoDB indexing for efficient rendering.",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "User Authentication",
        "Vite Responsive Design",
        "Firebase Hosting",
      ],
    },
    {
      image: websiteImg7,
      title: "FlowTask",
      description:
        "Developed FlowTask, a collaborative task management web application designed to optimize workflow tracking, task prioritization, and productivity.",
      demo: "https://flowtask-1bcf9.web.app/",
      github: "https://github.com/ramtechnow/flowtask",
      technologies: ["React JS", "Firebase", "Tailwind CSS", "Vite"],
      challenges:
        "Managing real-time listener state sync across multiple client sessions without excessive document reads.",
      solution:
        "Implemented optimized snapshot listeners in React hooks combined with localized caching rules.",
      features: [
        "Real-time Task Sync",
        "Kanban Board Layout",
        "User Authentication",
        "Dynamic Priority Tagging",
        "Responsive Mobile Views",
      ],
    },
    {
      image: websiteImg2,
      title: "LILO Tracker",
      description:
        "Python Tkinter desktop application for login/logout attendance tracking.",
      demo: "https://github.com/ramtechnow/LILO-Tracker",
      github: "https://github.com/ramtechnow/LILO-Tracker",
      technologies: ["Python", "Tkinter", "SQLite", "SMTP"],
      challenges:
        "System tray reliability and email automation.",
      solution:
        "Implemented threading and SQLite storage.",
      features: [
        "System Tray Integration",
        "Automated Email Reports",
        "Data Export",
        "Cross-platform",
      ],
    },
    {
      image: websiteImg3,
      title: "Image Search App",
      description:
        "Developed a responsive React JS application that retrieves images via the Unsplash API with lazy loading and interactive elements.",
      demo: "https://image-search-using-unsplash-api.vercel.app/",
      github: "https://github.com/ramtechnow/image-search-app",
      technologies: ["React JS", "Unsplash API", "Bootstrap"],
      challenges: "Handling Unsplash API rate limiting and ensuring smooth transition animations.",
      solution:
        "Implemented lazy loading of images and debounced search requests.",
      features: [
        "Unsplash Search",
        "React Hooks State",
        "Lazy Loading Analytics",
        "Bootstrap UI Components",
      ],
    },
    {
      image: websiteImg4,
      title: "Company Website",
      description:
        "Corporate website using HTML, CSS, JavaScript and GSAP animations.",
      demo: "https://ramtechnow.github.io/SINX-TECHNOLOGIES/",
      github: "https://github.com/ramtechnow/SINX-TECHNOLOGIES",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      challenges:
        "Cross-browser styling and performance friendly animations.",
      solution:
        "Used Flexbox, Grid, and optimized animation timelines.",
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Contact Form",
        "SEO Optimized",
      ],
    },
    {
      image: websiteImg5,
      title: "Grocery Store UI",
      description:
        "Bootstrap grocery store interface with cart and checkout flow.",
      demo: "https://ramtechnow.github.io/Grocery_boostrap_webpage/",
      github: "https://github.com/ramtechnow/Grocery_boostrap_webpage",
      technologies: ["Bootstrap 5", "JavaScript", "jQuery"],
      challenges:
        "Product categorization and accessibility compliance.",
      solution:
        "Used Bootstrap grid and ARIA accessibility standards.",
      features: [
        "Product Categories",
        "Shopping Cart",
        "Checkout Flow",
        "Accessibility Ready",
      ],
    },
    {
      image: websiteImg6,
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard using Weather API and Chart.js.",
      demo: "https://fir-sample-84c93.web.app/",
      github: "https://github.com/ramtechnow/weather-app",
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      challenges:
        "Handling API failures and creating intuitive charts.",
      solution:
        "Implemented caching and geolocation fallback.",
      features: [
        "Current Weather",
        "5-Day Forecast",
        "Location Detection",
        "Weather Alerts",
      ],
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 85, damping: 14 } }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] font-black">
              Projects
            </span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base font-medium">
            A showcase of my recent web development, API integrations, and desktop automation solutions.
          </p>
        </div>

        {/* Project Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#131b2e] shadow-md hover:shadow-glow rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 group"
            >
              <div>
                {/* Visual Cover */}
                <div 
                  className="cursor-pointer overflow-hidden relative"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-[#7c3aed] px-3.5 py-1.5 rounded-full shadow-md">
                      Read Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2 text-gray-905 dark:text-white cursor-pointer hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 font-medium">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer details */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-50 dark:bg-purple-950/20 text-[#7c3aed] dark:text-[#a78bfa] text-xs px-2.5 py-0.5 rounded-md font-bold border border-purple-100/50 dark:border-purple-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-bold text-gray-400 self-center">+{project.technologies.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/40 rounded-xl font-bold transition-all duration-300 text-xs md:text-sm"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-xl font-bold hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Details Dialog Overlay */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/70 z-[999] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />

              <motion.div
                className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
              >
                <div
                  className="bg-white dark:bg-[#131b2e] max-w-2xl w-full rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto relative border border-slate-200 dark:border-slate-800/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 p-2.5 rounded-full shadow-md transition-colors z-10"
                    aria-label="Close details"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} banner`}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-black mb-3 text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-50 dark:bg-purple-950/20 text-[#7c3aed] dark:text-[#a78bfa] text-xs px-3 py-1 rounded-full font-bold border border-purple-150/50 dark:border-purple-900/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mb-6 text-gray-650 dark:text-gray-300 leading-relaxed font-medium text-sm md:text-base">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">Key Features:</h3>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-350 text-sm space-y-1.5 font-medium">
                          {selectedProject.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Challenges Faced:</h3>
                        <p className="text-gray-600 dark:text-gray-350 text-sm leading-relaxed font-medium">
                          {selectedProject.challenges}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Solution Implemented:</h3>
                        <p className="text-gray-600 dark:text-gray-350 text-sm leading-relaxed font-medium">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-gray-100 dark:border-slate-800">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                      >
                        Live Demo
                      </a>

                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/40 rounded-xl font-bold transition-all duration-300 text-sm"
                      >
                        GitHub Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}