import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header({ isDark, toggleTheme }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeoutRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#home', underlineColor: 'bg-gradient-to-r from-violet-500 to-indigo-500' },
    { name: 'Experience', href: '#experience', underlineColor: 'bg-gradient-to-r from-violet-500 to-indigo-500' },
    { name: 'Education', href: '#education', underlineColor: 'bg-gradient-to-r from-violet-500 to-indigo-500' },
    { name: 'Skills', href: '#skills', underlineColor: 'bg-gradient-to-r from-violet-500 to-indigo-500' },
    { name: 'Projects', href: '#projects', underlineColor: 'bg-gradient-to-r from-violet-500 to-indigo-500' },
    { name: 'Certifications', href: '#certifications', underlineColor: 'bg-gradient-to-r from-violet-500 to-indigo-500' },
  ];

  // Scroll detection for header glassmorphism transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section using IntersectionObserver
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

  // Single NavLink component for desktop and mobile
  const NavLinkComponent = ({ item, isMobile = false }) => {
    const isActive = activeSection === item.href.substring(1);
    const isExternal = item.href.startsWith('/');

    const baseClasses = `transition-all duration-300 relative font-medium text-sm tracking-wide ${
      isMobile
        ? 'block py-3.5 px-5 rounded-xl w-full text-left font-semibold'
        : 'py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-slate-800/40'
    } ${
      isMobile
        ? isActive
          ? 'text-[#7c3aed] dark:text-[#a78bfa] bg-purple-50/80 dark:bg-purple-950/20 border-l-4 border-[#7c3aed] dark:border-[#a78bfa]'
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/30'
        : isActive
        ? 'text-[#7c3aed] dark:text-[#a78bfa] font-semibold'
        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    }`;

    const underlineClasses = `absolute bottom-0 left-3 right-3 h-[3px] rounded-full ${item.underlineColor} transform origin-left transition-transform duration-300 ${
      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`;

    if (isExternal) {
      return (
        <Link
          to={item.href}
          onClick={() => setToggleMenu(false)}
          className="group relative block"
        >
          <span className={baseClasses}>{item.name}</span>
          {!isMobile && <span className={underlineClasses} />}
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => handleHomeNavigation(item.href)}
          className="group relative block w-full md:w-auto text-left"
        >
          <span className={baseClasses}>{item.name}</span>
          {!isMobile && <span className={underlineClasses} />}
        </button>
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#0b1222]/80 backdrop-blur-md border-b border-gray-150 dark:border-slate-850/40 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center flex-shrink-0"
            >
              <Link
                to="/"
                className="font-bold text-gray-900 dark:text-white text-xl sm:text-2xl tracking-tight transition-colors duration-200 relative group"
                onClick={() => {
                  setToggleMenu(false);
                  setActiveSection('home');
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] dark:from-[#a78bfa] dark:to-[#60a5fa] font-black">
                  Shriram.dev
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <nav aria-label="Main navigation">
                <motion.ul
                  className="flex items-center gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <NavLinkComponent item={item} />
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-250 dark:bg-slate-800/60 dark:hover:bg-slate-850/80 text-lg transition-colors border border-gray-200 dark:border-slate-700/50"
                aria-label="Toggle Theme"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? '🌙' : '☀️'}
              </motion.button>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex md:hidden items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-150 dark:bg-slate-800/60 text-base transition-colors border border-gray-200 dark:border-slate-700/50"
                aria-label="Toggle Theme"
              >
                {isDark ? '🌙' : '☀️'}
              </motion.button>

              <motion.button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="text-gray-900 dark:text-white p-2 rounded-lg bg-gray-150 dark:bg-slate-800/60 border border-gray-200/60 dark:border-slate-700/50"
                whileTap={{ scale: 0.95 }}
                aria-label={toggleMenu ? 'Close menu' : 'Open menu'}
              >
                {toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 px-6 py-8 bg-white/95 dark:bg-[#0b1222]/95 backdrop-blur-md shadow-xl border-b border-gray-150 dark:border-slate-800/80"
          >
            <motion.ul
              className="flex flex-col gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <NavLinkComponent item={item} isMobile />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
