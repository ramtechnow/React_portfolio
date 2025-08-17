import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Contact = () => {
  const contactInfo = {
    email: "ramtechnow@gmail.com",
    phone: "+91 9080339752",
    address: "37, No1 Pudhu Street Ponnammapet, Salem, Tamil Nadu, India."
  };
    useEffect(() => {
    // Only scroll if this was a navigation (not a refresh)
    if (window.location.hash === '#contact' && performance.navigation.type === 0) {
      const element = document.getElementById('contact');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="contact" 
      className="relative bg-primary min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-16"
    >
      {/* Bubble Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-secondary opacity-10"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -100],
              opacity: [0.1, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-5">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Map Section */}
          <motion.div 
            className="h-full min-h-[350px] rounded-xl overflow-hidden shadow-2xl relative"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.8430837392875!2d78.1705795748707!3d11.660427988547257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1753902601075!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[350px]"
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
            className="bg-primary p-6 md:p-8 rounded-xl shadow-2xl h-full"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 pb-2 border-b-4 border-[#d9376e] w-fit"
              variants={itemVariants}
            >
              Contact Me
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-8 text-lg"
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
                    <svg className="w-6 h-6 text-[#d9376e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  content: (
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline transition-colors duration-200">
                      {contactInfo.email}
                    </a>
                  )
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-[#d9376e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  content: (
                    <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline transition-colors duration-200">
                      {contactInfo.phone}
                    </a>
                  )
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-[#d9376e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Address",
                  content: <p className="text-gray-700">{contactInfo.address}</p>
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-[#d9376e] bg-opacity-10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.content}
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