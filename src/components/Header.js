import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef, useCallback } from 'react';
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

  const navItems = [
    { name: 'Home', href: '#home', underlineColor: 'bg-blue-500' },
    { name: 'About', href: '#about', underlineColor: 'bg-green-500' },
    { name: 'Projects', href: '#projects', underlineColor: 'bg-purple-500' },
    { name: 'Resume', href: '#resume', underlineColor: 'bg-pink-500' },
    { name: 'Contact', href: '#contact', underlineColor: 'bg-red-500' },
    { name: 'Blog', href: '/blog', underlineColor: 'bg-indigo-500' },
  ];

  const headerBackground = scrolled
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm';
  const mobileMenuBackground = 'bg-white dark:bg-gray-900';

  // Scroll detection for header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section using IntersectionObserver for better performance
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [location.pathname]);

  // Close menu on outside click or escape
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
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [toggleMenu]);

  // Navigate to home page sections
  const handleHomeNavigation = useCallback(
    (href) => {
      setToggleMenu(false);
      const targetId = href.substring(1);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId }, replace: true });
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else if (targetId === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [location.pathname, navigate]
  );

  // Scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);
      scrollTimeoutRef.current = setTimeout(() => {
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else if (targetId === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

  // Single NavLink component for desktop and mobile
  const NavLinkComponent = ({ item, isMobile = false }) => {
    const isActive = activeSection === item.href.substring(1);
    const isExternal = item.href.startsWith('/');

    const baseClasses = `transition-colors duration-200 relative font-medium ${
      isMobile
        ? 'block py-3 px-4 rounded-md w-full text-left'
        : 'py-2 px-1'
    } ${isMobile
      ? isActive
        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
        : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
      : isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
    }`;

    const underlineClasses = `absolute bottom-0 ${isMobile ? 'left-4 right-4 h-0.5' : 'left-0 w-full h-0.5'} ${item.underlineColor} transform origin-left transition-transform duration-300 ${
      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`;

    if (isExternal) {
      return (
        <Link
          to={item.href}
          onClick={() => setToggleMenu(false)}
          className={baseClasses}
          aria-current={location.pathname === item.href ? 'page' : undefined}
        >
          {item.name}
          <span className={underlineClasses} />
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => handleHomeNavigation(item.href)}
          className={baseClasses}
          aria-current={isActive ? 'page' : undefined}
        >
          {item.name}
          <span className={underlineClasses} />
        </button>
      );
    }
  };

  // Animation variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } } };
  const logoVariants = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };
  const mobileMenuVariants = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }, exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } } };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBackground}`}>
        <div className="container m-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex justify-between items-center py-4 md:py-5" variants={containerVariants} initial="hidden" animate="visible">
            {/* Logo */}
            <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
              <Link
                to="/"
                className="font-bold text-gray-900 dark:text-white text-2xl hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 group"
                onClick={() => {
                  setToggleMenu(false);
                  setActiveSection('home');
                  if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Home"
              >
                Shriram MG
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <motion.ul className="flex gap-6" variants={containerVariants} initial="hidden" animate="visible">
                {navItems.map((item, index) => (
                  <motion.li key={item.name} variants={itemVariants} custom={index}>
                    <NavLinkComponent item={item} />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="md:hidden text-gray-900 dark:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={toggleMenu ? "Close menu" : "Open menu"}
              aria-expanded={toggleMenu}
              variants={itemVariants}
            >
              {toggleMenu ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </motion.button>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                ref={mobileMenuRef}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className={`md:hidden fixed top-full left-0 w-full ${mobileMenuBackground} shadow-lg z-40 border-t border-gray-200 dark:border-gray-700`}
                style={{ height: '100vh' }}
                aria-label="Mobile menu"
              >
                <motion.ul className="flex flex-col px-4 py-6 space-y-4 h-full overflow-y-auto" variants={containerVariants} initial="hidden" animate="visible">
                  {navItems.map((item, index) => (
                    <motion.li key={item.name} variants={itemVariants} custom={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                      <NavLinkComponent item={item} isMobile />
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
