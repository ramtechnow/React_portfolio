import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import HeroImg from '../assets/profile_photo.png';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

const roles = ["Full-stack Developer", "React Developer", "Software Engineer"];

export default function Hero({ scrollTo }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const config = {
    description: (
      <>
        Specializing in building modern, premium web applications using <span className="text-[#7c3aed] dark:text-[#a78bfa] font-semibold">React & Tailwind CSS</span> and designing robust, scalable backend systems.
        <br /><br />
        Passionate about crafting pixel-perfect, responsive user interfaces, writing clean, optimized code, and developing end-to-end solutions that elevate digital experiences.
      </>
    ),
    social: {
      github: 'https://github.com/ramtechnow',
      linkedin: 'https://www.linkedin.com/in/shriram-m-g-387a59241/',
      email: 'mailto:ramtechnow@gmail.com',
      whatsapp: 'https://wa.me/919080339752/',
    }
  };

  const sectionRef = useRef(null);

  const handleScroll = (id) => {
    if (scrollTo) {
      scrollTo(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 } 
    }
  };
  const itemVariants = { 
    hidden: { y: 30, opacity: 0 }, 
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } 
  };
  const imageVariants = { 
    hidden: { scale: 0.9, opacity: 0, rotate: -3 }, 
    visible: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } 
  };

  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-indigo-300/20 dark:bg-indigo-900/10 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }} aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-300/20 dark:bg-blue-900/10 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s' }} aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative bg-transparent flex items-center justify-center px-6 py-12 md:py-24 overflow-hidden min-h-[calc(100vh-80px)]"
    >
      <BackgroundElements />

      <div className="container mx-auto max-w-6xl flex md:flex-row flex-col items-center justify-between relative z-10 gap-12 lg:gap-16">
        <motion.div
          className="md:w-1/2 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Top greeting badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/60 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/40 text-xs font-semibold text-[#7c3aed] dark:text-[#a78bfa] mb-6"
          >
            <span>✨</span> Available for Full Stack Roles
          </motion.div>

          <motion.h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight" variants={itemVariants}>
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 dark:from-red-400 dark:via-purple-400 dark:to-indigo-400 animate-gradient-text">
              Shriram M G
            </span>
          </motion.h1>

          <motion.p className="text-[#7c3aed] dark:text-[#a78bfa] text-xl md:text-2xl mt-4 font-bold min-h-[40px] tracking-wide" variants={itemVariants}>
            {currentText}
            <span className="animate-pulse border-r-2 border-[#7c3aed] dark:border-[#a78bfa] ml-1">&nbsp;</span>
          </motion.p>

          <motion.div className="text-gray-650 dark:text-gray-400 text-base md:text-lg mt-4 max-w-lg leading-relaxed font-medium" variants={itemVariants}>
            {config.description}
          </motion.div>

          {/* Social Icons with Glow Effects */}
          <motion.div className="flex py-6 gap-4" variants={itemVariants}>
            {Object.entries(config.social).map(([key, link]) => {
              const Icon = key === 'github' ? AiOutlineGithub : key === 'linkedin' ? AiOutlineLinkedin : key === 'email' ? AiOutlineMail : AiOutlineWhatsApp;
              return (
                <motion.a 
                  key={key} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:text-[#7c3aed] dark:hover:text-[#a78bfa] flex items-center justify-center shadow-sm border border-gray-200 dark:border-slate-700/60 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-wrap gap-4 w-full sm:w-auto" variants={itemVariants}>
            <motion.a
              href="https://oto.lv.tab.digital/s/dB9gBTWdyiPmXMp/download/ramtechnow@gmail.com.pdf"
              download
              target="_blank"
              className="px-6 py-3.5 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 flex-1 sm:flex-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>⬇</span> Download Resume
            </motion.a>
            <motion.button
              onClick={() => handleScroll('contact')}
              className="px-6 py-3.5 border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-350 hover:border-[#7c3aed] dark:hover:border-[#a78bfa] rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-800/40 shadow-sm flex-1 sm:flex-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>✉</span> Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero image with animated glow container */}
        <motion.div className="md:w-2/5 w-full flex justify-center mt-8 md:mt-0" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500 shadow-2xl animate-neon-glow">
            <motion.img
              src={HeroImg}
              alt="Shriram M G Profile Photo"
              className="w-full max-w-[260px] sm:max-w-xs md:max-w-sm z-10 relative rounded-[21px] bg-white dark:bg-[#0b1222] object-cover transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer" 
        onClick={() => handleScroll('experience')}
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-gray-500 dark:text-gray-400 mb-2 text-xs font-semibold tracking-wider uppercase">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-[#7c3aed] dark:border-[#a78bfa] rounded-full flex justify-center">
          <motion.div className="w-1.5 h-3 bg-[#7c3aed] dark:bg-[#a78bfa] rounded-full mt-2 animate-scroll-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
