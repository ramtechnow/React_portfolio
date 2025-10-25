import { motion, useScroll, useTransform } from "framer-motion";
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

  // scroll-based motion values for the scroll-to-top button
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const scale = useTransform(scrollY, [300, 500], [0.8, 1]);

  return (
    <div className="blog-container bg-primary text-gray-800 overflow-x-hidden">
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
      <main className="blog-content bg-white py-8 md:py-12">
        <div className="content-wrapper max-w-4xl mx-auto px-4 md:px-6">
          {/* 🧩 Introduction */}
          <motion.p
            className="intro text-base md:text-xl leading-relaxed mb-8 md:mb-12 p-4 md:p-6 bg-blue-200 rounded-lg border-l-4 border-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            As a dedicated Production Analyst with hands-on experience in building web applications and automating tasks using Python, I've had the privilege of working on exciting projects that showcase my skills in React, Firebase, Tailwind CSS, Selenium, and Jira.
          </motion.p>

          {/* 🧭 Blog Sections */}
          {[
            {
              icon: "📖",
              title: "My Story",
              content: (
                <>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    At Tata Consultancy Services, I worked on the US Citi Bank (NAM Smart Automation) project, developing and maintaining automated test scripts using Selenium WebDriver with Python.
                  </p>
                  <div className="highlight-box bg-accent/10 p-4 md:p-6 rounded-lg border-l-4 border-accent italic">
                    <p className="text-gray-700">
                      "Collaboration and communication are as vital as technical skills in delivering successful projects."
                    </p>
                  </div>
                </>
              )
            },
            {
              icon: "🚀",
              title: "Skills that Drive Innovation",
              content: (
                <ul className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="skill-card bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="skill-icon text-2xl md:text-3xl mb-2 md:mb-3">{skill.icon}</div>
                      <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{skill.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{skill.desc}</p>
                    </motion.li>
                  ))}
                </ul>
              )
            },
            {
              icon: "✨",
              title: "Projects that Showcase My Skills",
              content: (
                <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      className="project-card relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                    >
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-accent text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium">
                        {project.badge}
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{project.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{project.desc}</p>
                        <div className="tech-tags flex flex-wrap gap-1 md:gap-2">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm"
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
          ].map((section, idx) => (
            <motion.section
              key={idx}
              className="blog-section mb-8 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="section-header flex items-center mb-4 md:mb-6">
                <div className="section-icon text-2xl md:text-3xl mr-3 md:mr-4">{section.icon}</div>
                <h2 className="text-xl md:text-3xl font-bold">{section.title}</h2>
              </div>
              {section.content}
            </motion.section>
          ))}

          {/* 🎯 Call to Action */}
          <motion.section
            className="cta-section bg-gradient-to-r from-secondary to-accent rounded-xl p-6 md:p-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="cta-content max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Let's Connect!</h2>
              <p className="mb-6 md:mb-8 text-white/90 text-sm md:text-base">
                If you're interested in learning more about my projects or exploring potential collaborations, feel free to reach out to me.
              </p>
              <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <motion.a
                  href="mailto:ramtechnow@gmail.com"
                  className="email-button bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Me
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shriram-m-g-387a59241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button bg-gray-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>  
              </div>
              <div>
{/* Scroll-to-top */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-40 hover:bg-blue-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ opacity: useTransform(scrollY, [300, 500], [0, 1]), scale: useTransform(scrollY, [500, 500], [0.8, 1]) }}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7m-7-7v18" />
        </svg>
      </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
