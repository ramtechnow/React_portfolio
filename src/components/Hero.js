import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import HeroImg from '../assets/profile_photo.png';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

const roles = ["Full-stack Developer", "React Developer", "Software Engineer"];

export default function Hero({ scrollTo }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
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
    subtitle: "I'm a Full-stack Developer",
    description: (
      <>
        Specializing in building modern, premium web applications using <span className="text-blue-600 dark:text-blue-400 font-semibold">React & Tailwind CSS</span> and designing robust, scalable backend systems.
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

  // Local fallback scroll handler if prop not passed
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
      transition: { delayChildren: 0.3, staggerChildren: 0.2 } 
    }
  };
  const itemVariants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } } };
  const imageVariants = { hidden: { scale: 0.8, opacity: 0, rotate: -5 }, visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative bg-transparent flex items-center justify-center px-5 py-20 md:py-32 overflow-hidden min-h-screen"
    >
      <BackgroundElements />

      <div className="container mx-auto max-w-6xl flex md:flex-row flex-col items-center justify-between relative z-10 gap-10 lg:gap-16">
        <motion.div
          className="md:w-1/2 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug" variants={itemVariants}>
            Hi, I'm <br />
            <span className="text-[#ef4444]">Shriram</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa]">
              M G
            </span>
          </motion.h1>

          <motion.p className="text-[#7c3aed] dark:text-[#a78bfa] text-xl md:text-2xl mt-4 font-semibold min-h-[40px]" variants={itemVariants}>
            {currentText}
            <span className="animate-pulse border-r-2 border-[#7c3aed] dark:border-[#a78bfa] ml-1">&nbsp;</span>
          </motion.p>

          <motion.div className="text-gray-650 dark:text-gray-400 text-lg md:text-xl mt-4 max-w-lg leading-relaxed" variants={itemVariants}>
            {config.description}
          </motion.div>

          <motion.div className="flex py-6 md:py-10 gap-5" variants={itemVariants}>
            {Object.entries(config.social).map(([key, link]) => {
              const Icon = key === 'github' ? AiOutlineGithub : key === 'linkedin' ? AiOutlineLinkedin : key === 'email' ? AiOutlineMail : AiOutlineWhatsApp;
              return (
                <motion.a 
                  key={key} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white text-black hover:text-[#7c3aed] rounded-xl flex items-center justify-center shadow-md border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.a
              href="https://oto.lv.tab.digital/s/dB9gBTWdyiPmXMp/download/ramtechnow@gmail.com.pdf"
              download
              target="_blank"
              className="px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>⬇</span> Download Resume
            </motion.a>
            <motion.button
              onClick={() => handleScroll('contact')}
              className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✉</span> Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="md:w-2/5 w-full flex justify-center mt-12 md:mt-0" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="relative group p-[3px] rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500 shadow-xl animate-neon-glow">
            <motion.img
              src={HeroImg}
              alt="M G Shriram Profile Photo"
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm z-10 relative rounded-[21px] bg-white dark:bg-[#0b1222] object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }}>
        <span className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-[#7c3aed] rounded-full flex justify-center">
          <motion.div className="w-1 h-3 bg-[#7c3aed] rounded-full mt-2" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
