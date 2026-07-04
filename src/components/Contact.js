import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const contactInfo = {
    email: "ramtechnow@gmail.com",
    address: "Salem, Tamil Nadu, India."
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-52 h-52 rounded-full bg-purple-200/20 dark:bg-purple-900/5 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-blue-200/20 dark:bg-blue-900/5 blur-3xl -z-10" aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative bg-transparent min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <BackgroundElements />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] font-black">
              Touch
            </span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base font-medium">
            Let's connect! Send me a message or find my email information below.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Info details card */}
          <motion.div 
            className="bg-white/90 dark:bg-[#131b2e]/90 backdrop-blur-md p-8 rounded-3xl shadow-md border border-slate-200/60 dark:border-slate-800/80 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-black mb-6 text-gray-900 dark:text-white border-b pb-3 border-gray-100 dark:border-slate-800">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100/60 dark:bg-purple-950/20 p-3.5 rounded-xl text-[#7c3aed] dark:text-[#a78bfa] border border-purple-100 dark:border-purple-900/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-905 dark:text-white">Email Address</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#7c3aed] dark:text-[#a78bfa] hover:underline text-sm md:text-base mt-1 block font-bold">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100/60 dark:bg-purple-950/20 p-3.5 rounded-xl text-[#7c3aed] dark:text-[#a78bfa] border border-purple-100 dark:border-purple-900/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-905 dark:text-white">Office Address</h4>
                    <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base mt-1 leading-relaxed font-bold">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider">
              * Usually responds within 24 hours.
            </div>
          </motion.div>

          {/* Contact form card */}
          <motion.div 
            className="bg-white/90 dark:bg-[#131b2e]/90 backdrop-blur-md p-8 rounded-3xl shadow-md border border-slate-200/60 dark:border-slate-800/80"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1527] p-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] text-gray-805 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1527] p-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] text-gray-850 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1527] p-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] text-gray-850 dark:text-white transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm tracking-wide uppercase"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;