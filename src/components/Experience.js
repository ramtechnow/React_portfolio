import { motion } from "framer-motion";

export default function Experience() {
  const timelineData = [
    {
      title: "Technical Support Associate (Incident Management)",
      subtitle: "Tech Mahindra — Chennai",
      period: "Sep 2025 - Present",
      description: "First point of contact for UK-based Openreach employees. Managed ServiceNow ticketing for application crashes, login failures, VPN disconnections, and configurations with a 98% first-contact resolution rate and 100% SLA compliance. Created knowledge base articles that reduced repeat tickets by 15%.",
      tag: "Incident Management",
      tagColor: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900/30",
      icon: "💼",
    },
    {
      title: "Production Analyst",
      subtitle: "Tata Consultancy Services (TCS) — Chennai, Tamil Nadu",
      period: "April 2023 - July 2025",
      description: "Developed and maintained automated test scripts for the US Citi Bank (NAM Smart Automation) project utilizing Selenium WebDriver with Python. Achieved a 30% reduction in testing cycle time and managed defect tracking using Jira.",
      tag: "Test Automation",
      tagColor: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900/30",
      icon: "💼",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const cardVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#7c3aed] dark:text-[#a78bfa] pb-2 border-b-4 border-[#7c3aed] w-fit mx-auto"
          >
            Professional Experience
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            My corporate journey and key technical contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col justify-center items-center">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-600 transform -translate-x-1/2 rounded-full hidden md:block" />

          {/* Vertical Line for Mobile */}
          <div className="absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform -translate-x-1/2 rounded-full md:hidden" />

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
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-10 md:pl-0 md:pr-10 order-2 md:order-1">
                    {isEven && (
                      <motion.div
                        variants={cardVariants}
                        className="w-full max-w-md bg-white dark:bg-[#131b2e] p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800/80 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                              {item.tag}
                            </span>
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{item.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#a78bfa] transition-colors mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{item.subtitle}</p>
                          <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                        {/* Connecting Dot pointer */}
                        <div className="absolute top-[28px] -right-3 w-6 h-6 bg-white dark:bg-[#131b2e] border-t border-r border-slate-200 dark:border-slate-800/80 transform rotate-45 hidden md:block" />
                      </motion.div>
                    )}
                  </div>

                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-1/2 flex items-center justify-center z-10 order-1 md:order-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 shadow-md flex items-center justify-center text-white border-4 border-white dark:border-slate-900"
                    >
                      <span className="text-xs">{item.icon}</span>
                    </motion.div>
                  </div>

                  {/* Right Side Spacer or Card */}
                  <div className="w-full md:w-1/2 flex justify-start pl-10 md:pl-10 order-2 md:order-3">
                    {!isEven && (
                      <motion.div
                        variants={cardVariants}
                        className="w-full max-w-md bg-white dark:bg-[#131b2e] p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800/80 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                              {item.tag}
                            </span>
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{item.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#a78bfa] transition-colors mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{item.subtitle}</p>
                          <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                        {/* Connecting Dot pointer */}
                        <div className="absolute top-[28px] -left-3 w-6 h-6 bg-white dark:bg-[#131b2e] border-b border-l border-slate-200 dark:border-slate-800/80 transform rotate-45 hidden md:block" />
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
