import { motion } from 'framer-motion'
import AboutImg from '../assets/about.svg'

export default function About() {
  const config = {
    line1: 'Hi, My Name is Shriram. I’m a full stack developer. I build beautiful websites with React.js, Tailwind CSS, and Bootstrap.',
    line2: 'I am proficient in frontend skills like React Redux Toolkit, Tailwind CSS, Sass, CSS3, and many more.',
    line3: 'Developed a Python-based bot using Tkinter and Outlook integration. The bot automates the process of sending emails and tracking login/logout times.',
  }

  return (
    <section className="flex flex-col md:flex-row bg-primary px-5 py-10" id="about">
      {/* Bubble Animation Background */}
      <div className="bubble-bg z-10">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={AboutImg} alt="About" className="w-full h-auto" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center text-white max-w-xl">
          <motion.h1
            className="text-4xl border-b-4 border-white mb-5 w-fit font-bold"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.p className="pb-5" whileHover={{ scale: 1.02 }}>{config.line1}</motion.p>
          <motion.p className="pb-5" whileHover={{ scale: 1.02 }}>{config.line2}</motion.p>
          <motion.p className="pb-5" whileHover={{ scale: 1.02 }}>{config.line3}</motion.p>
        </div>
      </motion.div>
    </section>
  )
}