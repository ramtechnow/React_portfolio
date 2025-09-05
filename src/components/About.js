import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AboutImg from '../assets/about.svg';

const About = () => {
  const aboutContent = {
    introduction: 'Hi, I’m Shriram, a passionate Full Stack Developer with expertise in building modern, responsive, and high-performance web applications. I specialize in React.js, Tailwind CSS, and Bootstrap, crafting seamless user experiences with clean, efficient code.',
    frontendExpertise: 'On the frontend, I excel in React Redux Toolkit, JavaScript (ES6+), Sass, and CSS3, ensuring pixel-perfect designs with smooth interactivity. My backend skills include Node.js, Express, and MongoDB, enabling me to develop full-fledged web applications from concept to deployment.',
    automationSkills: 'I also thrive in automation development, having built a Python-based bot using Tkinter and Outlook integration to streamline email workflows and track employee attendance. My solutions focus on efficiency, scalability, and user-centric design.'
  };

  // Skills data for visualization
  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-500' },
    { name: 'Python', level: 70, color: 'from-indigo-500 to-indigo-600' },
    { name: 'CSS/Tailwind', level: 95, color: 'from-teal-500 to-teal-600' },
  ];

  // Refs for animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 px-4 md:px-16 lg:px-24 py-20 md:py-28 lg:py-32 min-h-screen flex items-center justify-center overflow-hidden"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-teal-200/20 dark:bg-teal-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Image Section */}
          <motion.div
            className="md:w-2/5 flex items-center justify-center order-2 md:order-1"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img 
                src={AboutImg} 
                alt="About Shriram - Full Stack Developer" 
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto z-10 relative drop-shadow-xl"
              />
              {/* Floating elements around the image */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-blue-500/20 dark:bg-blue-500/30"
                aria-hidden="true"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-purple-500/20 dark:bg-purple-500/30"
                aria-hidden="true"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 -right-8 w-10 h-10 rounded-lg bg-yellow-500/20 dark:bg-yellow-500/30"
                aria-hidden="true"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:w-3/5 order-1 md:order-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="flex flex-col justify-center text-gray-800 dark:text-gray-200">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 pb-3 md:pb-4 border-b-4 md:border-b-8 border-[#d9376e] w-fit bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                variants={itemVariants}
              >
                About Me
              </motion.h2>

              <motion.div className="space-y-4 md:space-y-6 mb-8 md:mb-10" variants={containerVariants}>
                {Object.values(aboutContent).map((paragraph, index) => (
                  <motion.p 
                    key={`paragraph-${index}`}
                    className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              {/* Skills Section */}
              <motion.div 
                className="mt-6 md:mt-8"
                variants={itemVariants}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-gray-800 dark:text-gray-100">My Skills</h3>
                <div className="space-y-3 md:space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-2.5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          variants={skillBarVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#projects"
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#d9376e] to-[#c12a5f] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-[#d9376e] text-[#d9376e] dark:text-[#e64c83] rounded-lg font-medium hover:bg-[#d9376e] hover:text-white dark:hover:text-white transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;