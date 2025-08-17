import { motion } from 'framer-motion';
import websiteImg1 from "../assets/ecommerce-website.png";
import websiteImg2 from "../assets/LILO.png";
import websiteImg3 from "../assets/project.jpg";
import websiteImg4 from "../assets/company project.png";
import websiteImg5 from "../assets/grocery.png";
import { useEffect } from 'react';

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "Company website. Built with React Bootstrap 5.",
        link: "https://ecommerce-website-dfd55.web.app/",
      },
      {
        image: websiteImg2,
        description:
          "Login and logout tracker. Built with Python Tkinter and email integration.",
        link: "https://github.com/ramtechnow/LILO-Tracker",
      },
      {
        image: websiteImg3,
        description: "Image Search App using Unsplash API.",
        link: "https://image-search-using-unsplash-api.vercel.app/",
      },
      {
        image: websiteImg4,
        description: "Client Company website",
        link: "https://ramtechnow.github.io/SINX-TECHNOLOGIES/",
      },
      {
        image: websiteImg5,
        description: "Grocery_boostrap_webpage",
        link: "https://ramtechnow.github.io/Grocery_boostrap_webpage/",
      },
    ],
  };

  // Handle hash navigation for the projects section
  useEffect(() => {
    if (window.location.hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
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
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col py-20 px-5 justify-center text-black overflow-hidden bg-primary"
    >
      {/* Bubble Background */}
      <div className="bubble-bg absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Section Header with enhanced animation */}
      <motion.div 
        className="w-full flex flex-col px-10 py-5"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1 
          className="text-4xl border-b-4 border-[#d9376e] mb-5 w-[150px] font-bold"
          variants={itemVariants}
        >
          Projects
        </motion.h1>
        <motion.p 
          className="color-[#2a2a2a] text-xl"
          variants={itemVariants}
        >
          These are some of my best projects. I have built these with React,
          MERN, and vanilla CSS. Check them out.
        </motion.p>
      </motion.div>

      {/* Project Cards with enhanced animations */}
      <motion.div 
        className="w-full px-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                className="h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                alt="Project screenshot"
              />
              <div className="project-desc bg-black bg-opacity-80 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-black font-bold p-4">
                <motion.p 
                  className="text-center px-5 py-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                  className="btn bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}