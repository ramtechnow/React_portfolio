import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeoutRef = useRef(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section based on scroll position
  useEffect(() => {
    // Only detect sections if we're on the home page
    if (location.pathname !== '/') return;
    
    const sections = document.querySelectorAll('section[id]');
    
    const handleScrollActive = () => {
      const scrollY = window.pageYOffset;
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [location.pathname]);

  // Close menu when clicking outside, pressing escape, or on navigation
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setToggleMenu(false);
    };

    if (toggleMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      
      // Clear any pending timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [toggleMenu]);

  const navItems = [
    { name: 'Home', href: '#home', underlineColor: 'bg-blue-500' },
    { name: 'About', href: '#about', underlineColor: 'bg-green-500' },
    { name: 'Projects', href: '#projects', underlineColor: 'bg-purple-500' },
    { name: 'Contact', href: '#contact', underlineColor: 'bg-red-500' },
    { name: 'Blog', href: '/blog', underlineColor: 'bg-indigo-500' },
  ];

  const headerBackground = scrolled 
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm';

  const mobileMenuBackground = 'bg-white dark:bg-gray-900';

  // Helper function to handle navigation to home page sections
  const handleHomeNavigation = (href) => {
    setToggleMenu(false);
    const targetId = href.substring(1);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { 
        state: { scrollTo: targetId },
        replace: true 
      });
    } else {
      // If we're already on home page, just scroll to section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'home') {
        // Special case for home - scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Handle scroll after navigation to home
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);
      
      if (element) {
        // Small delay to ensure DOM is ready
        scrollTimeoutRef.current = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent re-scrolling
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      } else if (targetId === 'home') {
        // Special case for home - scroll to top
        scrollTimeoutRef.current = setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      }
    }
  }, [location, navigate]);

  // Helper function to determine if link should use Link or anchor
  const NavLink = ({ item }) => {
    const isBlogPage = location.pathname === '/blog';
    const isActive = activeSection === item.href.substring(1);
    const isExternalLink = item.href.startsWith('/');

    if (isExternalLink) {
      // Use Link for external routes like blog
      return (
        <Link 
          to={item.href} 
          className={`font-medium transition-colors duration-200 relative py-2 px-1 group ${
            location.pathname === item.href
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
          }`}
          onClick={() => setToggleMenu(false)}
          aria-current={location.pathname === item.href ? 'page' : undefined}
        >
          {item.name}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 ${item.underlineColor} transition-all duration-300 ${
            location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} />
        </Link>
      );
    } else {
      // For home page anchor links
      return (
        <button
          onClick={() => handleHomeNavigation(item.href)}
          className={`font-medium transition-colors duration-200 relative py-2 px-1 group ${
            !isBlogPage && isActive 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
          }`}
          aria-current={!isBlogPage && isActive ? 'page' : undefined}
        >
          {item.name}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 ${item.underlineColor} transition-all duration-300 ${
            !isBlogPage && isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} />
        </button>
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Mobile NavLink component (separate to handle navigation correctly)
  const MobileNavLink = ({ item }) => {
    const isBlogPage = location.pathname === '/blog';
    const isActive = activeSection === item.href.substring(1);
    const isExternalLink = item.href.startsWith('/');

    if (isExternalLink) {
      return (
        <Link
          to={item.href}
          onClick={() => setToggleMenu(false)}
          className={`block py-3 px-4 font-medium rounded-md transition-all duration-200 relative group ${
            location.pathname === item.href
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
              : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          aria-current={location.pathname === item.href ? 'page' : undefined}
        >
          {item.name}
          <span className={`absolute bottom-0 left-4 right-4 h-0.5 ${item.underlineColor} transform origin-left transition-transform duration-300 ${
            location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} />
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => handleHomeNavigation(item.href)}
          className={`block py-3 px-4 font-medium rounded-md transition-all duration-200 relative group w-full text-left ${
            !isBlogPage && isActive
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
              : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          aria-current={!isBlogPage && isActive ? 'page' : undefined}
        >
          {item.name}
          <span className={`absolute bottom-0 left-4 right-4 h-0.5 ${item.underlineColor} transform origin-left transition-transform duration-300 ${
            !isBlogPage && isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} />
        </button>
      );
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBackground}`}>
        <div className="container m-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-between items-center py-4 md:py-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link 
                to="/" 
                className="font-bold text-gray-900 dark:text-white text-2xl hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 group"
                onClick={() => {
                  setToggleMenu(false);
                  setActiveSection('home');
                  // Scroll to top when clicking the logo
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                aria-label="Home"
              >
                Shriram MG
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <motion.ul 
                className="flex gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    variants={itemVariants}
                    custom={index}
                  >
                    <NavLink item={item} />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <motion.button 
              onClick={() => setToggleMenu(!toggleMenu)}
              className="md:hidden text-gray-900 dark:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={toggleMenu ? "Close menu" : "Open menu"}
              aria-expanded={toggleMenu}
              variants={itemVariants}
            >
              {toggleMenu ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </motion.button>
          </motion.div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                ref={mobileMenuRef}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className={`md:hidden fixed top-full left-0 w-full ${mobileMenuBackground} shadow-lg z-40 border-t border-gray-200 dark:border-gray-700`}
                style={{ height: 'calc(100vh - 100%)' }}
                aria-label="Mobile menu"
              >
                <motion.ul 
                  className="flex flex-col px-4 py-6 space-y-4 h-full overflow-y-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      variants={itemVariants}
                      custom={index}
                      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
                    >
                      <MobileNavLink item={item} />
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Add a spacer to prevent content from being hidden behind the fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}