import { motion } from 'framer-motion';
import AboutImg from '../assets/about.svg';
import { useEffect } from 'react';

const About = () => {
  const aboutContent = {
    introduction: 'Hi, I’m Shriram, a passionate Full Stack Developer with expertise in building modern, responsive, and high-performance web applications. I specialize in React.js, Tailwind CSS, and Bootstrap, crafting seamless user experiences with clean, efficient code.',
    frontendExpertise: 'On the frontend, I excel in React Redux Toolkit, JavaScript (ES6+), Sass, and CSS3, ensuring pixel-perfect designs with smooth interactivity. My backend skills include Node.js, Express, and MongoDB, enabling me to develop full-fledged web applications from concept to deployment.',
    automationSkills: 'I also thrive in automation development, having built a Python-based bot using Tkinter and Outlook integration to streamline email workflows and track employee attendance. My solutions focus on efficiency, scalability, and user-centric design.'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Handle hash navigation for the about section
  useEffect(() => {
    if (window.location.hash === '#about') {
      const element = document.getElementById('about');
      if (element) {
        // Small timeout to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <section 
      className="flex flex-col md:flex-row bg-primary px-5 py-16 md:py-20" 
      id="about"
    >
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <img 
          src={AboutImg} 
          alt="About Shriram - Full Stack Developer" 
          className="w-full max-w-lg h-auto"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 flex justify-center p-4 md:p-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col justify-center text-black max-w-2xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 pb-2 border-b-4 border-[#d9376e] w-fit"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.div className="space-y-6" variants={containerVariants}>
            {Object.values(aboutContent).map((paragraph, index) => (
              <motion.p 
                key={`paragraph-${index}`}
                className="text-lg md:text-xl leading-relaxed"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;