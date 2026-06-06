import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaPython, 
  FaHtml5, FaCss3Alt, 
  FaJava, FaGithub,
  FaAws, FaFileExcel, FaBrain, FaUsers, FaTerminal
} from 'react-icons/fa';
import { 
  SiMongodb, SiTailwindcss, 
  SiSelenium, SiJira, SiVite, SiMysql
} from 'react-icons/si';

const About = () => {
  const aboutContent = {
    introduction:
      'Hi, I’m Shriram, a dedicated Full-stack Developer with hands-on experience in building premium web applications, designing responsive user interfaces, and automating backend workflows. I specialize in creating robust, end-to-end digital solutions that deliver seamless user experiences.',
    frontendExpertise:
      'I have strong expertise in frontend technologies like React JS, Vite, and Tailwind CSS to build highly responsive, scalable UIs. I couple this with database systems like MongoDB and MySQL to construct full-featured, secure web applications.',
    automationSkills:
      'I leverage Python and modern scripting to automate complex processes and write high-efficiency backend logic. Additionally, I integrate cloud services like AWS (S3, EC2, Lambda) and modern developer tooling (GitHub) to build, deploy, and maintain robust production applications.'
  };

  const skillCategories = [
    {
      title: "Frontend & Languages",
      borderColor: "border-t-4 border-[#ef4444]", // Red/Orange top border
      skills: [
        { name: 'React JS', icon: FaReact, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
        { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
        { name: 'Python', icon: FaPython, color: 'text-blue-600' },
        { name: 'Java (Basics)', icon: FaJava, color: 'text-red-500' }
      ]
    },
    {
      title: "Backend & Databases",
      borderColor: "border-t-4 border-[#10b981]", // Green top border
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
        { name: 'Tkinter', icon: FaTerminal, color: 'text-blue-400' },
        { name: 'Unsplash API', icon: FaTerminal, color: 'text-gray-400' }
      ]
    },
    {
      title: "Cloud & Automation",
      borderColor: "border-t-4 border-[#8b5cf6]", // Purple top border
      skills: [
        { name: 'AWS S3', icon: FaAws, color: 'text-orange-550' },
        { name: 'AWS EC2', icon: FaAws, color: 'text-orange-550' },
        { name: 'AWS Lambda', icon: FaAws, color: 'text-orange-550' },
        { name: 'Selenium', icon: SiSelenium, color: 'text-green-500' },
        { name: 'Jira', icon: SiJira, color: 'text-blue-600' },
        { name: 'Webdriver', icon: SiSelenium, color: 'text-teal-600' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-750 dark:text-gray-200' }
      ]
    },
    {
      title: "Soft Skills & Others",
      borderColor: "border-t-4 border-[#3b82f6]", // Blue top border
      skills: [
        { name: 'Agile Methodologies', icon: FaUsers, color: 'text-indigo-500' },
        { name: 'Collaborative Mindset', icon: FaUsers, color: 'text-emerald-500' },
        { name: 'Strong Communication', icon: FaUsers, color: 'text-pink-500' },
        { name: 'Stakeholder Management', icon: FaUsers, color: 'text-purple-500' },
        { name: 'Excel', icon: FaFileExcel, color: 'text-green-600' },
        { name: 'Gen AI', icon: FaBrain, color: 'text-purple-400' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      id="skills"
      className="relative bg-transparent px-6 py-20 md:py-28 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#7c3aed] dark:text-[#a78bfa] pb-2 border-b-4 border-[#7c3aed] w-fit mx-auto uppercase"
          >
            Technical Skills
          </motion.h2>
          
          {/* Centered description / introduction */}
          <motion.div 
            className="mt-6 max-w-3xl mx-auto space-y-4 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>{aboutContent.introduction}</p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-450">
              Below are the primary tools, frameworks, and programming languages I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-[#131b2e]/95 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800/80 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-2xl text-red-500 dark:text-red-400 pb-4 mb-6 border-b border-purple-500/20 dark:border-purple-900/30">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div 
                      key={i}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-50 dark:bg-[#0f172a]/50 border border-gray-150 dark:border-slate-800 shadow-sm hover:border-[#7c3aed] dark:hover:border-[#a78bfa] transition-all duration-200 cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconComponent className={`${skill.color} text-xl`} />
                      <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
