import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/ramtechnow", label: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/shriram-m-g-387a59241/", label: "LinkedIn" },
    { icon: <FaEnvelope className="w-5 h-5" />, url: "mailto:ramtechnow@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer
      className="bg-white dark:bg-[#0b1222] border-t border-slate-100 dark:border-slate-800/80 text-gray-750 dark:text-gray-300 py-10 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <nav aria-label="Social Links">
          <motion.div 
            className="flex justify-center space-x-6" 
            initial={{ y: 15, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.15 }} 
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a 
                key={link.label} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-800/40 dark:hover:bg-slate-800/80 text-gray-650 dark:text-gray-350 hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors duration-300 border border-gray-150 dark:border-slate-800 shadow-sm"
                whileHover={{ y: -3 }} 
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </nav>
        
        <motion.p 
          className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-bold" 
          initial={{ y: 15, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] font-black">Shriram M G</span>. All rights reserved.
        </motion.p>
        
        <section aria-label="Footer Links">
          <motion.div 
            className="flex justify-center space-x-4 text-xs md:text-sm text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider" 
            initial={{ y: 15, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.45 }} 
            viewport={{ once: true }}
          >
            <button className="hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors" onClick={() => console.log("Privacy Policy clicked")}>Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors" onClick={() => console.log("Terms of Service clicked")}>Terms of Service</button>
          </motion.div>
        </section>
      </div>
    </motion.footer>
  );
}
