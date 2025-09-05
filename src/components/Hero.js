import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import HeroImg from '../assets/profile.svg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineDownload } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack Developer and Designer",
    description: "Crafting beautiful, functional digital experiences with modern technologies. Passionate about creating solutions that make a difference.",
    social: {
      whatsapp: 'https://wa.me/919080339752/',
      github: 'https://github.com/ramtechnow',
      linkedin: 'https://www.linkedin.com/in/shriram-m-g-387a59241/',
    },
    cta: {
      resume: '/resume.pdf',
      contact: '#contact'
    }
  };

  // Refs for animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Background decorative elements
  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-pink-200/30 dark:bg-pink-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-5 py-20 md:py-32 overflow-hidden min-h-screen"
    >
      <BackgroundElements />
      
      <div className="container mx-auto max-w-6xl flex md:flex-row flex-col items-center justify-between relative z-10 gap-10 lg:gap-16">
        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-gray-900 dark:text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug"
            variants={itemVariants}
          >
            Hi,<br />
            I'm <span className="text-[#d9376e]">M G</span> Shriram
          </motion.h1>
          
          <motion.p 
            className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl mt-4 font-medium"
            variants={itemVariants}
          >
            {config.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mt-4 max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            {config.description}
          </motion.p>
          
          {/* Social Icons */}
          <motion.div 
            className="flex py-6 md:py-10 gap-5"
            variants={itemVariants}
          >
            <motion.a 
              href={config.social.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#d9376e] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineWhatsApp size={32} className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
            <motion.a 
              href={config.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#d9376e] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineGithub size={32} className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
            <motion.a 
              href={config.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#d9376e] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineLinkedin size={32} className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.a
              href={config.cta.resume} 
              download
              className="px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#d9376e] to-[#c12a5f] text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineDownload className="text-lg" />
              Download Resume
            </motion.a>
            <motion.a
              href={config.cta.contact}
              className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-[#d9376e] text-[#d9376e] dark:text-[#e64c83] rounded-lg font-medium text-center transition-all duration-300 hover:bg-[#d9376e] hover:text-white dark:hover:text-white shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="md:w-2/5 w-full flex justify-center mt-12 md:mt-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <motion.img 
              className="w-full max-w-xs md:max-w-md z-10 relative drop-shadow-xl" 
              src={HeroImg} 
              alt="Profile illustration"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            {/* Floating elements around the image */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-pink-500/20 dark:bg-pink-500/30"
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
              className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blue-500/20 dark:bg-blue-500/30"
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
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[#d9376e] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#d9376e] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}