import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Blog from "./Blog";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  // Apply animation only to inner wrapper
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  // Section refs
  const refs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
    blog: useRef(null),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleScrollTo = (id) => {
    const section = refs[id]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="home-layout relative w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated Wrapper (SAFE for modal now) */}
      <motion.div style={{ opacity, scale }}>

        {/* HOME */}
        <section id="home" ref={refs.home} className="min-h-screen relative">
          <Hero scrollTo={handleScrollTo} />
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          ref={refs.about}
          className="min-h-screen py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          ref={refs.projects}
          className="min-h-screen py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.section>

        {/* RESUME */}
        <motion.section
          id="resume"
          ref={refs.resume}
          className="min-h-screen py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Resume />
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          ref={refs.contact}
          className="min-h-screen py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>

        {/* BLOG */}
        <motion.section
          id="blog"
          ref={refs.blog}
          className="min-h-screen py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Blog />
        </motion.section>

      </motion.div>
    </main>
  );
}