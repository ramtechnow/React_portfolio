import React from "react";
import { motion } from "framer-motion";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container bg-primary text-gray-800">
      {/* Animated Header */}
      <motion.header 
        className="blog-header relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-gradient absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            From Automation to Innovation: My Journey as a Production Analyst
          </motion.h1>
          <div className="header-meta flex justify-center space-x-6 text-white/80 text-sm md:text-base">
            <span className="author">By Shriram</span>
            <span className="date">August 18, 2025</span>
            <span className="read-time">5 min read</span>
          </div>
        </div>
      </motion.header>

      <main className="blog-content bg-white py-12">
        <div className="content-wrapper max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <motion.p 
            className="intro text-lg md:text-xl leading-relaxed mb-12 p-6 bg-gray-50 rounded-lg border-l-4 border-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            As a dedicated Production Analyst with hands-on experience in
            building web applications and automating tasks using Python, I've
            had the privilege of working on exciting projects that showcase my
            skills in React, Firebase, Tailwind CSS, Selenium, and Jira.
          </motion.p>

          {/* My Story Section */}
          <motion.section 
            className="blog-section mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="section-header flex items-center mb-6">
              <div className="section-icon text-3xl mr-4">📖</div>
              <h2 className="text-2xl md:text-3xl font-bold">My Story</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Tata Consultancy Services, I worked on the US Citi Bank (NAM
              Smart Automation) project, where I developed and maintained
              automated test scripts using Selenium WebDriver with Python.
            </p>
            <div className="highlight-box bg-accent/10 p-6 rounded-lg border-l-4 border-accent italic">
              <p className="text-gray-700">
                "Collaboration and communication are as vital as technical
                skills in delivering successful projects."
              </p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            className="blog-section mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="section-header flex items-center mb-6">
              <div className="section-icon text-3xl mr-4">🚀</div>
              <h2 className="text-2xl md:text-3xl font-bold">Skills that Drive Innovation</h2>
            </div>
            <ul className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💻", title: "Programming", desc: "HTML, CSS, Python, Java (Basics), JavaScript" },
                { icon: "🛠️", title: "Frameworks", desc: "React JS, Tkinter, Tailwind CSS, Vite" },
                { icon: "☁️", title: "Cloud Tools", desc: "AWS S3, AWS EC2, AWS Lambda" },
                { icon: "🤖", title: "Automation", desc: "Selenium, Jira" },
                { icon: "🤝", title: "Soft Skills", desc: "Communication, Stakeholder Management, Agile" }
              ].map((skill, index) => (
                <motion.li 
                  key={index}
                  className="skill-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="skill-icon text-3xl mb-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Projects Section */}
          <motion.section 
            className="blog-section mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="section-header flex items-center mb-6">
              <div className="section-icon text-3xl mr-4">✨</div>
              <h2 className="text-2xl md:text-3xl font-bold">Projects that Showcase My Skills</h2>
            </div>
            <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
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
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  className="project-card relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.badge}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.desc}</p>
                    <div className="tech-tags flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="cta-section bg-gradient-to-r from-secondary to-accent rounded-xl p-8 md:p-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="cta-content max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect!</h2>
              <p className="mb-8 text-white/90">
                If you're interested in learning more about my projects or
                exploring potential collaborations, feel free to reach out to
                me.
              </p>
              <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="mailto:ramtechnow@gmail.com"
                  className="email-button bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Me
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shriram-m-g-387a59241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Blog;