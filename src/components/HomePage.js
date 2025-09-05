import { useEffect, useRef, useState } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.98]);
  
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  
  // State to track active section
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Get positions of all sections
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'projects', ref: projectsRef },
        { id: 'resume', ref: resumeRef },
        { id: 'contact', ref: contactRef }
      ];
      
      // Find which section is currently in view
      let currentSection = 'home';
      
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      // Update active section and URL hash
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        
        // Only update URL if it's different from current hash
        const currentHash = window.location.hash.substring(1);
        if (currentHash !== currentSection) {
          window.history.replaceState(null, '', `#${currentSection}`);
        }
      }
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeSection]);

  // Handle hash-based navigation on initial load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ['home', 'about', 'projects', 'resume', 'contact'].includes(hash)) {
        const element = document.getElementById(hash);
        if (element) {
          // Calculate header height for offset
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Initial check after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(handleHashNavigation, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main 
      className="home-layout relative"
      style={{ opacity, scale }}
    >
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ 
          scaleX: useTransform(
            scrollY, 
            [0, document.body.scrollHeight - window.innerHeight], 
            [0, 1]
          ) 
        }}
      />
      
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {['home', 'about', 'projects', 'resume', 'contact'].map((section) => {
          const isActive = activeSection === section;
          
          return (
            <a
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
              }`}
              aria-label={`Jump to ${section} section`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section);
                if (element) {
                  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                  const elementPosition = element.offsetTop - headerHeight;
                  
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          );
        })}
      </div>

      <section 
        id="home" 
        className="min-h-screen relative"
        ref={homeRef}
      >
        <Hero />
      </section>
      
      <motion.section 
        id="about" 
        className="min-h-screen py-20"
        ref={aboutRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>
      
      <motion.section 
        id="projects" 
        className="min-h-screen py-20"
        ref={projectsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>
      
      <motion.section 
        id="resume" 
        className="min-h-screen py-20"
        ref={resumeRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        variants={sectionVariants}
      >
        <Resume />
      </motion.section>
      
      <motion.section 
        id="contact" 
        className="min-h-screen py-20"
        ref={contactRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-40 hover:bg-blue-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: useTransform(scrollY, [300, 500], [0, 1]), 
          scale: useTransform(scrollY, [300, 500], [0.5, 1]) 
        }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </motion.main>
  );
};

export default HomePage;