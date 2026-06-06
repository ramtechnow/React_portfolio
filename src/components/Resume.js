import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ResumeImg1 from "../assets/resume.svg";

export default function Resume() {
  const config = {
    link: "https://oto.lv.tab.digital/s/dB9gBTWdyiPmXMp/download/ramtechnow@gmail.com.pdf",
  };

  const [expandedItems, setExpandedItems] = useState({
    exp1: false,
    edu1: false
  });

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const timelineData = {
    experience: [
      {
        id: "exp1",
        role: "Production Analyst & Automation Developer",
        company: "Tata Consultancy Services",
        period: "Aug 2021 - Present",
        description: "Developed and maintained automated test scripts using Selenium WebDriver with Python for the US Citi Bank (NAM Smart Automation) project. Collaborated across teams to optimize delivery cycles.",
        bullets: [
          "Developed robust automation test suites with Python and Selenium WebDriver.",
          "Created custom desktop bots utilizing Tkinter, SQLite, and SMTP to automate attendance tracking and email reporting.",
          "Partnered with project stakeholders to identify process bottlenecks and automate manual workflows.",
          "Managed issue tracking, documentation, and reporting in Agile environments."
        ]
      }
    ],
    education: [
      {
        id: "edu1",
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Anna University",
        period: "2017 - 2021",
        description: "Graduated with a strong foundation in computer engineering, algorithm design, software architecture, and database management.",
        bullets: [
          "Core coursework: Data Structures, Web Technology, DBMS, Software Engineering.",
          "Developed web-based projects using JavaScript, Bootstrap, and database backends.",
          "Active participant in technical symposiums and open-source contributions."
        ]
      }
    ]
  };

  const sectionRef = useRef(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

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
      className="relative bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      <BackgroundElements />

      <div className="container mx-auto max-w-6xl relative z-10 space-y-16">
        {/* Intro Section */}
        <div className="flex md:flex-row flex-col items-center justify-between gap-10 lg:gap-16">
          {/* Image Section */}
          <motion.div
            className="md:w-2/5 w-full flex justify-center group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <motion.img
                className="w-full max-w-xs md:max-w-sm z-10 relative drop-shadow-xl"
                src={ResumeImg1}
                alt="Resume illustration"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />

              {/* Floating circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-pink-500/20 dark:bg-pink-500/30"
                aria-hidden="true"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blue-500/20 dark:bg-blue-500/30"
                aria-hidden="true"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="md:w-1/2 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block"
              variants={itemVariants}
            >
              My <span className="text-[#7c3aed]">Resume</span>
            </motion.h1>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              My professional experience and skills are detailed in my resume. Feel free to download it for your reference.
            </motion.p>

            <motion.div
              className="relative group"
              variants={itemVariants}
            >
              <motion.a
                href={config.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume PDF"
                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white rounded-lg font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2500/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Details */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 w-full pt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Experience Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="text-[#7c3aed] text-xl">💼</span> Experience
            </h2>
            {timelineData.experience.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-150 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.role}</h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.company}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#7c3aed]/10 text-[#7c3aed]">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">{item.description}</p>

                {/* Collapsible details toggle */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="mt-4 flex items-center gap-1 text-xs font-bold text-[#7c3aed] hover:underline"
                  aria-expanded={expandedItems[item.id]}
                >
                  {expandedItems[item.id] ? "Hide Details" : "View Details"}
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-200 ${expandedItems[item.id] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedItems[item.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pt-3 border-t border-gray-150 dark:border-gray-750"
                    >
                      <ul className="list-disc pl-5 text-xs text-gray-600 dark:text-gray-300 space-y-2">
                        {item.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="text-[#7c3aed] text-xl">🎓</span> Education
            </h2>
            {timelineData.education.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-150 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.degree}</h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.institution}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#7c3aed]/10 text-[#7c3aed]">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">{item.description}</p>

                {/* Collapsible details toggle */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="mt-4 flex items-center gap-1 text-xs font-bold text-[#7c3aed] hover:underline"
                  aria-expanded={expandedItems[item.id]}
                >
                  {expandedItems[item.id] ? "Hide Details" : "View Details"}
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-200 ${expandedItems[item.id] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedItems[item.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pt-3 border-t border-gray-150 dark:border-gray-750"
                    >
                      <ul className="list-disc pl-5 text-xs text-gray-600 dark:text-gray-300 space-y-2">
                        {item.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
