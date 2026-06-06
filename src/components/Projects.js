import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import websiteImg1 from "../assets/ecommerce-website.png";
import websiteImg2 from "../assets/LILO.png";
import websiteImg3 from "../assets/project.jpg";
import websiteImg4 from "../assets/company project.png";
import websiteImg5 from "../assets/grocery.png";
import websiteImg6 from "../assets/Weather_app.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock background scroll
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

  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#7c3aed] dark:text-[#a78bfa] pb-2 border-b-4 border-[#7c3aed] w-fit mx-auto"
          >
            My Projects
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            A showcase of my recent web development, API integrations, and desktop automation solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-[#131b2e] shadow-md hover:shadow-xl rounded-xl overflow-hidden flex flex-col justify-between border border-gray-100 dark:border-slate-800/80 transition-all duration-300"
            >
              <div>
                {/* Clicking image triggers details modal */}
                <div 
                  className="cursor-pointer overflow-hidden relative group"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Read Details
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 
                    className="text-xl font-bold mb-2 text-gray-900 dark:text-white cursor-pointer hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-650 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-0.5 rounded font-medium border border-indigo-100/50 dark:border-indigo-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Demo / Code Action Buttons */}
                <div className="flex gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white rounded-lg font-medium hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                  className="bg-white dark:bg-[#131b2e] max-w-2xl w-full rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto relative border border-gray-100 dark:border-slate-800/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Styled Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-750 dark:text-gray-200 p-2 rounded-full shadow-lg transition-colors z-10"
                    aria-label="Close modal"
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

                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>

                    {/* Modal Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 rounded-full font-medium border border-indigo-100/50 dark:border-indigo-900/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Key Features:</h3>
                        <ul className="list-disc pl-5 text-gray-650 dark:text-gray-300 text-sm space-y-1">
                          {selectedProject.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Challenges:</h3>
                        <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
                          {selectedProject.challenges}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Solution:</h3>
                        <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Responsive Modal Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300 text-sm"
                      >
                        Live Demo
                      </a>

                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-350 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        GitHub
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