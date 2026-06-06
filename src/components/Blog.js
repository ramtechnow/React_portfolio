import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import "./Blog.css";

export default function Blog() {
  const skills = [
    { icon: "💻", title: "Programming", desc: "HTML, CSS, Python, Java (Basics), JavaScript" },
    { icon: "🛠️", title: "Frameworks", desc: "React JS, Tkinter, Tailwind CSS, Vite" },
    { icon: "☁️", title: "Cloud Tools", desc: "AWS S3, AWS EC2, AWS Lambda" },
    { icon: "🤖", title: "Automation", desc: "Selenium, Jira" },
    { icon: "🤝", title: "Soft Skills", desc: "Communication, Stakeholder Management, Agile" }
  ];

  const projects = [
    {
      badge: "E-commerce",
      title: "E-commerce Website",
      desc: "A scalable e-commerce site built using React JS, MongoDB, Tailwind CSS, and Vite",
      tags: ["React", "MongoDB", "Tailwind"]
    },
    {
      badge: "API Integration",
      title: "Image Search with Unsplash API",
      desc: "A responsive React JS application that retrieves images via the Unsplash API",
      tags: ["React", "API", "Responsive"]
    }
  ];

  // Responsive collapsible state
  const [collapsedSections, setCollapsedSections] = useState({
    story: false,
    skills: false,
    projects: false
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        setCollapsedSections({
          story: isMobile,
          skills: isMobile,
          projects: isMobile
        });
      };
      // Initial execution
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSection = (id) => {
    setCollapsedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // scroll-based motion values for the scroll-to-top button
  const { scrollY } = useScroll();

  const blogSections = [
    {
      id: "story",
      icon: "📖",
      title: "My Story",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
            At Tata Consultancy Services, I worked on the US Citi Bank (NAM Smart Automation) project, developing and maintaining automated test scripts using Selenium WebDriver with Python.
          </p>
          <div className="highlight-box bg-blue-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg border-l-4 border-[#7c3aed] italic">
            <p className="text-gray-700 dark:text-gray-300">
              "Collaboration and communication are as vital as technical skills in delivering successful projects."
            </p>
          </div>
        </>
      )
    },
    {
      id: "skills",
      icon: "🚀",
      title: "Skills that Drive Innovation",
      content: (
        <ul className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.li
              key={i}
              className="skill-card bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="skill-icon text-2xl md:text-3xl mb-2 md:mb-3">{skill.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{skill.desc}</p>
            </motion.li>
          ))}
        </ul>
      )
    },
    {
      id: "projects",
      icon: "✨",
      title: "Projects that Showcase My Skills",
      content: (
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#7c3aed] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                {project.badge}
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-3 md:mb-4">{project.desc}</p>
                <div className="tech-tags flex flex-wrap gap-1 md:gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-50 dark:bg-indigo-950/45 text-indigo-700 dark:text-indigo-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-indigo-100/30 dark:border-indigo-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="blog-container bg-gradient-to-br from-indigo-50/20 to-blue-50/20 dark:from-gray-900/40 dark:to-gray-800/40 text-gray-800 dark:text-gray-100">
      {/* 🔹 Animated Header */}
      <motion.header
        className="blog-header relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-gradient absolute inset-0 opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-24 text-center">
          <motion.h1
            className="text-2xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From Automation to Innovation: My Journey as a Production Analyst
          </motion.h1>

          <div className="header-meta flex flex-col md:flex-row justify-center md:space-x-6 space-y-2 md:space-y-0 text-white/80 text-sm md:text-base">
            <span>By Shriram</span>
            <span>August 18, 2025</span>
            <span>5 min read</span>
          </div>
        </div>
      </motion.header>

      {/* 🔹 Blog Content */}
      <main className="blog-content bg-white dark:bg-gray-900 py-8 md:py-12">
        <div className="content-wrapper max-w-4xl mx-auto px-4 md:px-6">
          {/* 🧩 Introduction */}
          <motion.p
            className="intro text-base md:text-xl leading-relaxed mb-8 md:mb-12 p-4 md:p-6 bg-blue-50 dark:bg-gray-800/60 rounded-lg border-l-4 border-[#7c3aed] text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            As a dedicated Production Analyst with hands-on experience in building web applications and automating tasks using Python, I've had the privilege of working on exciting projects that showcase my skills in React, Firebase, Tailwind CSS, Selenium, and Jira.
          </motion.p>

          {/* 🧭 Collapsible Blog Sections */}
          <div className="space-y-6">
            {blogSections.map((section) => {
              const isCollapsed = collapsedSections[section.id];
              return (
                <motion.section
                  key={section.id}
                  className="blog-section bg-gray-50 dark:bg-gray-800/30 p-4 md:p-6 rounded-xl border border-gray-150 dark:border-gray-750 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                    aria-expanded={!isCollapsed}
                  >
                    <div className="flex items-center">
                      <div className="section-icon text-2xl md:text-3xl mr-3 md:mr-4">{section.icon}</div>
                      <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#7c3aed] transition-colors">
                        {section.title}
                      </h2>
                    </div>

                    <div className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${!isCollapsed ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {!isCollapsed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {section.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.section>
              );
            })}
          </div>

          {/* Scroll-to-top */}
          <motion.button
            className="fixed bottom-6 right-6 bg-[#7c3aed] text-white p-3 rounded-full shadow-lg z-40 hover:bg-[#6d28d9] transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ opacity: useTransform(scrollY, [300, 500], [0, 1]), scale: useTransform(scrollY, [500, 500], [0.8, 1]) }}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </main>
    </div>
  );
}
