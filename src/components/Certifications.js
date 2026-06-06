import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Complete Python Developer Course",
      issuer: "Udemy",
      description: "Comprehensive training in Python development, covering object-oriented programming, data structures, functional concepts, and automation script building.",
      verifyUrl: "https://www.udemy.com/",
      date: "2023",
    },
    {
      title: "Full-stack Web Development (React & MongoDB)",
      issuer: "Code99 IT Academy",
      description: "Vigorous professional training program on full-stack web applications development using React JS, Node.js, Express, MongoDB, and Tailwind CSS.",
      verifyUrl: "https://github.com/ramtechnow",
      date: "2024",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#7c3aed] dark:text-[#a78bfa] pb-2 border-b-4 border-[#7c3aed] w-fit mx-auto uppercase"
          >
            Certifications
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Verified credentials and skills validations from credible assessment authorities.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#131b2e] shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col justify-between border border-gray-100 dark:border-slate-800/80 transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Icon & Date */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl text-blue-500 dark:text-blue-400 border border-blue-100/30 dark:border-blue-900/30">
                    <FaCertificate size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{cert.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-905 dark:text-white mb-2 group-hover:text-[#7c3aed] dark:group-hover:text-[#a78bfa] transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-gray-450 dark:text-gray-400 mb-3">{cert.issuer}</p>
                <p className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed line-clamp-3 mb-6">
                  {cert.description}
                </p>
              </div>

              {/* View/Verification Link */}
              <div className="border-t border-gray-100 dark:border-gray-700/60 pt-4 flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Credential Verified</span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-[#7c3aed] dark:text-[#a78bfa] hover:underline"
                >
                  View <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
