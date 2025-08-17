import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect for header with throttle
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(lastScrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleMenu]);

  const navItems = [
    { name: 'Home', href: '#home', underlineColor: 'bg-blue-500 dark:bg-blue-400' },
    { name: 'About', href: '#about', underlineColor: 'bg-green-500 dark:bg-green-400' },
    { name: 'Projects', href: '#projects', underlineColor: 'bg-purple-500 dark:bg-purple-400' },
    { name: 'Resume', href: '#resume', underlineColor: 'bg-yellow-500 dark:bg-yellow-400' },
    { name: 'Contact', href: '#contact', underlineColor: 'bg-red-500 dark:bg-red-400' },
    { name: 'Blog', href: '/blog', underlineColor: 'bg-green-500 dark:bg-green-400' },
  ];

  const headerBackground = scrolled 
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
    : 'bg-white dark:bg-gray-900';

  const mobileMenuBackground = 'bg-white/95 dark:bg-gray-900/95';

  // Helper function to determine if link should use Link or anchor
  const NavLink = ({ item }) => {
    if (item.href.startsWith('/')) {
      return (
        <Link 
          to={item.href} 
          className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative py-2 px-1 group custom-hover"
          onClick={() => setToggleMenu(false)}
        >
          {item.name}
          <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${item.underlineColor} transition-all duration-300 group-hover:w-full`} />
        </Link>
      );
    } else {
      return (
        <Link
          to={`/#${item.href.substring(1)}`}
          className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative py-2 px-1 group custom-hover"
          onClick={() => {
            setToggleMenu(false);
            setTimeout(() => {
              const element = document.getElementById(item.href.substring(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 10);
          }}
        >
          {item.name}
          <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${item.underlineColor} transition-all duration-300 group-hover:w-full`} />
        </Link>
      );
    }
  };

  return (
    <>
      {/* React Animated Cursor - Customize as needed */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: 'none' 
        }}
        innerStyle={{
          backgroundColor: 'white' 
        }}
        clickables={[
          'a',
          'button',
          '.clickable',
          {
            target: '.custom-hover',
            outerStyle: {
              border: 'white',
            },
            innerStyle: {
              backgroundColor: 'black' 
            }
          }
        ]}
      />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBackground}`}>
        <div className="container m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-5">
            {/* Logo - Changed to Link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center custom-hover"
            >
              <Link to="/" className="font-bold text-gray-900 dark:text-white text-2xl hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                <span className="relative">
                  Shriram MG
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavLink item={item} />
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <motion.button 
              onClick={() => setToggleMenu(!toggleMenu)}
              className="md:hidden text-gray-900 dark:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 custom-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={toggleMenu ? "Close menu" : "Open menu"}
              aria-expanded={toggleMenu}
            >
              {toggleMenu ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </motion.button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`md:hidden absolute top-full left-0 w-full ${mobileMenuBackground} backdrop-blur-sm shadow-lg z-40 border-t border-gray-200 dark:border-gray-700`}
              >
                <ul className="flex flex-col px-4 py-3 space-y-1">
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.href.startsWith('/') ? (
                        <Link
                          to={item.href}
                          onClick={() => setToggleMenu(false)}
                          className={`block py-3 px-4 text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md transition-colors duration-200 relative group custom-hover`}
                        >
                          {item.name}
                          <span className={`absolute bottom-2 left-4 right-4 h-0.5 ${item.underlineColor} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`} />
                        </Link>
                      ) : (
                        <Link
                          to={`/#${item.href.substring(1)}`}
                          onClick={() => {
                            setToggleMenu(false);
                            setTimeout(() => {
                              const element = document.getElementById(item.href.substring(1));
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 10);
                          }}
                          className={`block py-3 px-4 text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md transition-colors duration-200 relative group custom-hover`}
                        >
                          {item.name}
                          <span className={`absolute bottom-2 left-4 right-4 h-0.5 ${item.underlineColor} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`} />
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}