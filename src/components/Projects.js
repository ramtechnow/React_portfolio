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
        "A fully responsive e-commerce platform built with React and Bootstrap.",
      demo: "https://ecommerce-website-dfd55.web.app/",
      github: "https://github.com/ramtechnow/ecommerce-website",
      technologies: ["React", "Bootstrap", "Firebase", "Context API"],
      challenges:
        "Implementing complex cart logic and responsive product grids.",
      solution:
        "Used Context API and lazy image loading for performance.",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "User Authentication",
        "Responsive Design",
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
        "Unsplash API based responsive image search application.",
      demo: "https://image-search-using-unsplash-api.vercel.app/",
      github: "https://github.com/ramtechnow/image-search-app",
      technologies: ["React", "Unsplash API", "Axios", "Tailwind"],
      challenges: "API rate limiting and infinite scroll optimization.",
      solution:
        "Debounced search with lazy loading and virtual scrolling.",
      features: [
        "Infinite Scroll",
        "Search Filters",
        "High-res Downloads",
        "Responsive Gallery",
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
    <section className="py-20 px-6">
      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                {project.description}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/70 z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />

              <motion.div
                className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div
                  className="bg-white dark:bg-gray-800 max-w-4xl w-full rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded"
                  >
                    ✕
                  </button>

                  <img
                    src={selectedProject.image}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      {selectedProject.title}
                    </h2>

                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {selectedProject.description}
                    </p>

                    <h3 className="font-semibold mb-2">Features:</h3>
                    <ul className="list-disc pl-6 mb-4">
                      {selectedProject.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    <h3 className="font-semibold mb-2">Challenges:</h3>
                    <p className="mb-4">
                      {selectedProject.challenges}
                    </p>

                    <h3 className="font-semibold mb-2">Solution:</h3>
                    <p className="mb-6">
                      {selectedProject.solution}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                      >
                        Live Demo
                      </a>

                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="border px-5 py-2 rounded-lg"
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