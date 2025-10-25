import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/ramtechnow",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/shriram-m-g-387a59241/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:ramtechnow@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      className="bg-primary text-white py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* --- Social Links --- */}
        <nav aria-label="Social Links">
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300"
                whileHover={{ y: -3 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </nav>

        {/* --- Copyright --- */}
        <motion.p
          className="text-sm md:text-base text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} <strong>Ram Tech Now</strong>. All rights reserved.
        </motion.p>

        {/* --- Optional Footer Links --- */}
        <section aria-label="Footer Links">
          <motion.div
            className="flex justify-center space-x-4 text-xs md:text-sm text-gray-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              className="hover:text-accent transition-colors"
              onClick={() => console.log("Privacy Policy clicked")}
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              className="hover:text-accent transition-colors"
              onClick={() => console.log("Terms of Service clicked")}
            >
              Terms of Service
            </button>
          </motion.div>
        </section>
      </div>
    </motion.footer>
  );
}
