import { motion } from "framer-motion";

export default function Experience() {
  const timelineData = [
    {
      title: "Technical Support Associate (Incident Management)",
      subtitle: "Tech Mahindra — Chennai",
      period: "Sep 2025 - Present",
      description: "First point of contact for UK-based Openreach employees. Managed ServiceNow ticketing for application crashes, login failures, VPN disconnections, and configurations with a 98% first-contact resolution rate and 100% SLA compliance. Created knowledge base articles that reduced repeat tickets by 15%.",
      tag: "Incident Management",
      tagColor: "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100/50 dark:border-emerald-900/30",
      icon: "💼",
    },
    {
      title: "Production Analyst",
      subtitle: "Tata Consultancy Services (TCS) — Chennai, Tamil Nadu",
      period: "April 2023 - July 2025",
      description: "Developed and maintained automated test scripts for the US Citi Bank (NAM Smart Automation) project utilizing Selenium WebDriver with Python. Achieved a 30% reduction in testing cycle time and managed defect tracking using Jira.",
      tag: "Test Automation",
      tagColor: "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border-indigo-100/50 dark:border-indigo-900/30",
      icon: "⚙️",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const cardVariantsLeft = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  const cardVariantsRight = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section id="experience" className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] font-black">
              Experience
            </span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base font-medium">
            My corporate journey and key technical contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col justify-center items-center">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-600 transform -translate-x-1/2 rounded-full hidden md:block" />

          {/* Vertical Line for Mobile */}
          <div className="absolute left-4 top-4 bottom-4 w-[3px] bg-gradient-to-b from-blue-500 to-indigo-500 transform -translate-x-1/2 rounded-full md:hidden" />

          {/* Timeline Cards */}
          <motion.div
            className="w-full space-y-12 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const cardVariants = isEven ? cardVariantsLeft : cardVariantsRight;
              return (
                <div key={index} className="flex flex-col md:flex-row items-stretch w-full relative">
                  
                  {/* Left Side Spacer or Card */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-12 md:pl-0 md:pr-12 order-2 md:order-1">
                    {isEven && (
                      <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="w-full max-w-md bg-white dark:bg-[#131b2e] p-6 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-800/80 hover:shadow-glow transition-all duration-300 relative group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}>
                              {item.tag}
                            </span>
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{item.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#a78bfa] transition-colors mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-[#7c3aed] dark:text-[#a78bfa] mb-4">{item.subtitle}</p>
                          <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed font-medium">{item.description}</p>
                        </div>
                        {/* Connecting pointer */}
                        <div className="absolute top-[28px] -right-2.5 w-5 h-5 bg-white dark:bg-[#131b2e] border-t border-r border-slate-250 dark:border-slate-800/80 transform rotate-45 hidden md:block" />
                      </motion.div>
                    )}
                  </div>

                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-1/2 flex items-center justify-center z-10 order-1 md:order-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 shadow-md flex items-center justify-center text-white border-[3px] border-white dark:border-[#0b1222] animate-pulse-dot"
                    >
                      <span className="text-sm">{item.icon}</span>
                    </motion.div>
                  </div>

                  {/* Right Side Spacer or Card */}
                  <div className="w-full md:w-1/2 flex justify-start pl-12 md:pl-12 order-2 md:order-3">
                    {!isEven && (
                      <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="w-full max-w-md bg-white dark:bg-[#131b2e] p-6 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-800/80 hover:shadow-glow transition-all duration-300 relative group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}>
                              {item.tag}
                            </span>
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{item.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#a78bfa] transition-colors mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-[#7c3aed] dark:text-[#a78bfa] mb-4">{item.subtitle}</p>
                          <p className="text-sm text-gray-650 dark:text-gray-350 leading-relaxed font-medium">{item.description}</p>
                        </div>
                        {/* Connecting pointer */}
                        <div className="absolute top-[28px] -left-2.5 w-5 h-5 bg-white dark:bg-[#131b2e] border-b border-l border-slate-250 dark:border-slate-800/80 transform rotate-45 hidden md:block" />
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
