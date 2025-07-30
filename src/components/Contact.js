import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = {
    email: "ramtechnow@gmail.com",
    phone: "+91 9080339752",
    address: "37, No1 Pudhu Street Ponnammapet, Salem, Tamil Nadu, India."
  };

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
    <section id="contact" className="relative bg-primary py-16 md:py-20 overflow-hidden">
      {/* Bubble Background - set behind all content using absolute and negative z-index */}
      <div className="bubble-bg absolute inset-0 -z-50">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>
      <div className="container mx-auto px-5">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Map Section */}
          <motion.div 
            className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl relative"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.8430837392875!2d78.1705795748707!3d11.660427988547257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1753902601075!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full"
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
            className="bg-primary p-8 rounded-xl shadow-2xl relative"
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
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="bg-[#d9376e] bg-opacity-10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-[#d9376e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-blue-600 hover:underline transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="bg-[#d9376e] bg-opacity-10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-[#d9376e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} 
                    className="text-blue-600 hover:underline transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="bg-[#d9376e] bg-opacity-10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-[#d9376e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700">{contactInfo.address}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;