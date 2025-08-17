import { motion } from 'framer-motion';
import ResumeImg1 from "../assets/resume.svg";
import { useEffect } from 'react';

export default function Resume() {
  const config = {
    link: "https://oto.lv.tab.digital/s/dB9gBTWdyiPmXMp",
  };

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

  return (
    <section 
      id="resume" 
      className="relative bg-primary min-h-[calc(100vh-80px)] flex items-center justify-center px-5 py-12"
    >
      {/* Bubble Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.span 
            key={i}
            className="absolute rounded-full bg-secondary opacity-10"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -100],
              opacity: [0.1, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Centered Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl">
        {/* Image Section (Centered) */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <img 
              className="relative w-[280px] md:w-[350px] transition-transform duration-300 group-hover:scale-105" 
              src={ResumeImg1} 
              alt="Resume illustration" 
            />
          </motion.div>
        </motion.div>

        {/* Text Section (Centered) */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center text-black max-w-md bg-primary p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Resume</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 z-0"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-800">
              My professional experience and skills are detailed in my resume. Feel free to download it for your reference.
            </p>
            
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.03 }}
            >
              <a 
                className="inline-block px-8 py-3 font-medium rounded-lg bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                target="_blank" 
                rel="noopener noreferrer"
                href={config.link}
              >
                <span className="relative z-10 flex items-center">
                  Download Resume
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}