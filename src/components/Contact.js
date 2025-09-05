import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Contact = () => {
  const contactInfo = {
    email: "ramtechnow@gmail.com",
    phone: "+91 9080339752",
    address: "37, No1 Pudhu Street Ponnammapet, Salem, Tamil Nadu, India."
  };

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

  // Background decorative elements (matching Hero and Resume)
  const BackgroundElements = () => (
    <>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-pink-200/30 dark:bg-pink-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl -z-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl -z-10" aria-hidden="true"></div>
    </>
  );

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden"
    >
      <BackgroundElements />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Map Section */}
          <motion.div 
            className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt -z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.8430837392875!2d78.1705795748707!3d11.660427988547257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1753902601075!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[400px] rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              aria-label="Google Maps location"
            />
          </motion.div>

          {/* Contact Info Section */}
          <motion.div 
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl h-full"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Contact <span className="text-[#d9376e]">Me</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
              variants={itemVariants}
            >
              Let's discuss how I can help with your project. Reach out through any of these channels:
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  content: (
                    <a href={`mailto:${contactInfo.email}`} className="text-[#d9376e] hover:underline transition-colors duration-200">
                      {contactInfo.email}
                    </a>
                  )
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  content: (
                    <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-[#d9376e] hover:underline transition-colors duration-200">
                      {contactInfo.phone}
                    </a>
                  )
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Address",
                  content: <p className="text-gray-600 dark:text-gray-300">{contactInfo.address}</p>
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-[#d9376e] bg-opacity-10 p-3 rounded-full text-[#d9376e]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                    <div className="mt-1">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;