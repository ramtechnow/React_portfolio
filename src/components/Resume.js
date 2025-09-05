import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import ResumeImg1 from "../assets/resume.svg";

export default function Resume() {
  const config = {
    link: "https://oto.lv.tab.digital/s/dB9gBTWdyiPmXMp",
  };

  // Refs for animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (window.location.hash === '#resume') {
      const element = document.getElementById('resume');
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

  // Background decorative elements (matching Hero)
  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-pink-200/30 dark:bg-pink-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden"
    >
      <BackgroundElements />
      
      <div className="container mx-auto max-w-6xl flex md:flex-row flex-col items-center justify-between relative z-10 gap-10 lg:gap-16">
        {/* Image Section */}
        <motion.div 
          className="md:w-2/5 w-full flex justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <motion.img 
              className="w-full max-w-xs md:max-w-md z-10 relative drop-shadow-xl" 
              src={ResumeImg1} 
              alt="Resume illustration"
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

        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="relative inline-block">
              <span className="relative z-10">My</span>
            </span>{' '}
            <span className="text-[#d9376e]">Resume</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            My professional experience and skills are detailed in my resume. Feel free to download it for your reference.
          </motion.p>
          
          {/* Download Button */}
          <motion.div 
            className="relative group"
            variants={itemVariants}
          >
            <motion.a
              href={config.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#d9376e] to-[#c12a5f] text-white rounded-lg font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}