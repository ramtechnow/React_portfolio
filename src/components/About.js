import { motion } from 'framer-motion'
import AboutImg from '../assets/about.svg'

export default function About() {
  const config = {
    line1: 'Hi, Im Shriram, a passionate Full Stack Developer with expertise in building modern, responsive, and high-performance web applications. I specialize in React.js, Tailwind CSS, and Bootstrap, crafting seamless user experiences with clean, efficient code',
    line2: 'On the frontend, I excel in React Redux Toolkit, JavaScript (ES6+), Sass, and CSS3, ensuring pixel-perfect designs with smooth interactivity. My backend skills include Node.js, Express, and MongoDB, enabling me to develop full-fledged web applications from concept to deployment.',
    line3: 'I also thrive in automation development, having built a Python-based bot using Tkinter and Outlook integration to streamline email workflows and track employee attendance. My solutions focus on efficiency, scalability, and user-centric design.',
  }

  return (
    <section className="flex flex-col md:flex-row bg-primary px-5 py-10" id="about">
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
        <div className="flex flex-col justify-center text-black max-w-xl">
          <motion.h1
            className="text-4xl border-b-4 border-[#d9376e] mb-5 w-fit font-bold"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.p className="pb-5 text-xl text-justify" whileHover={{ scale: 1.02 }}>{config.line1}</motion.p>
          <motion.p className="pb-5 text-xl text-justify" whileHover={{ scale: 1.02 }}>{config.line2}</motion.p>
          <motion.p className="pb-5 text-xl text-justify" whileHover={{ scale: 1.02 }}>{config.line3}</motion.p>
        </div>
      </motion.div>

    </section>
  )
}