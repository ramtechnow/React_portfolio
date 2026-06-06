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

  // Refs for animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative bg-transparent min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden"
    >
      <BackgroundElements />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#7c3aed] dark:text-[#a78bfa] pb-2 border-b-4 border-[#7c3aed] w-fit mx-auto uppercase"
          >
            Contact
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Info Details Card */}
          <motion.div 
            className="bg-white/70 dark:bg-[#131b2e]/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-150 dark:border-slate-800/80 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-950 dark:text-white border-b pb-3 border-gray-200 dark:border-gray-700">
                Info Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7c3aed] bg-opacity-10 p-3 rounded-full text-[#7c3aed] dark:text-[#a78bfa] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#7c3aed] dark:text-[#a78bfa] hover:underline text-sm md:text-base mt-1 block font-medium">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7c3aed] bg-opacity-10 p-3 rounded-full text-[#7c3aed] dark:text-[#a78bfa] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-650 dark:text-gray-300 text-sm md:text-base mt-1 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional text or small callout */}
            <div className="mt-8 text-xs text-gray-400 dark:text-gray-500 font-medium">
              * Usually responds within 24 hours.
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            className="bg-white/70 dark:bg-[#131b2e]/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-150 dark:border-slate-800/80"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
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
                  className="w-full border-2 border-gray-200 dark:border-gray-750 bg-white dark:bg-[#0d1527] p-3 rounded-lg text-sm focus:outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] text-gray-800 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
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
                  className="w-full border-2 border-gray-200 dark:border-gray-750 bg-white dark:bg-[#0d1527] p-3 rounded-lg text-sm focus:outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] text-gray-800 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
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
                  className="w-full border-2 border-gray-200 dark:border-gray-750 bg-white dark:bg-[#0d1527] p-3 rounded-lg text-sm focus:outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] text-gray-800 dark:text-white transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-3.5 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm"
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