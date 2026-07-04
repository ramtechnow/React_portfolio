import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Complete Python Developer Course",
      issuer: "Udemy",
      description: "Comprehensive training in Python development, covering object-oriented programming, data structures, functional concepts, and automation script building.",
      verifyUrl: "https://www.udemy.com/certificate/UC-274ccbdf-8aea-4c64-bee0-fff204dfa59b/",
      date: "2025",
    },
    {
      title: "Full-stack Web Development (React & MongoDB)",
      issuer: "Code99 IT Academy",
      description: "Vigorous professional training program on full-stack web applications development using React JS, Node.js, Express, MongoDB, and Tailwind CSS.",
      verifyUrl: "https://drive.google.com/file/d/148nb3uA_vmFVlksUzaVXBzf9OiGjSzNt/view",
      date: "2025",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] font-black">
              Certifications
            </span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base font-medium">
            Verified credentials and skills validations from credible assessment authorities.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#131b2e] shadow-md hover:shadow-glow rounded-2xl p-6 flex flex-col justify-between border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 relative group"
            >
              <div>
                {/* Icon header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-xl text-[#7c3aed] dark:text-[#a78bfa] border border-purple-100/50 dark:border-purple-900/30">
                    <FaCertificate size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-550">{cert.date}</span>
                </div>

                {/* Info details */}
                <h3 className="text-lg font-bold text-gray-905 dark:text-white mb-1.5 group-hover:text-[#7c3aed] dark:group-hover:text-[#a78bfa] transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-[#7c3aed] dark:text-[#a78bfa] mb-3">{cert.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium line-clamp-3 mb-6">
                  {cert.description}
                </p>
              </div>

              {/* View verify button */}
              <div className="border-t border-gray-100 dark:border-slate-800 pt-4 flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">Credential Active</span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-black text-[#7c3aed] dark:text-[#a78bfa] hover:underline"
                >
                  Verify <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
