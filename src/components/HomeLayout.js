import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook for scroll management
const useScrollToSection = () => {
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  const lastHashRef = useRef('');
  const isManualScrollRef = useRef(false);

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Track user scroll to prevent conflicts
    const handleUserScroll = () => {
      isManualScrollRef.current = true;
    };

    window.addEventListener('scroll', handleUserScroll, { passive: true });

    const handleScrollToSection = () => {
      // Clear any existing timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // If we have a hash and it's different from the last one
      if (location.hash && location.hash !== lastHashRef.current) {
        lastHashRef.current = location.hash;
        const targetId = location.hash.substring(1);
        
        // Reset manual scroll flag after a short delay
        setTimeout(() => {
          isManualScrollRef.current = false;
        }, 1000);
        
        // Small delay to ensure DOM is ready
        scrollTimeoutRef.current = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            // Calculate the position considering the fixed header
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 20; // Additional 20px buffer
            
            // Only scroll if it's not a manual user scroll
            if (!isManualScrollRef.current) {
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }
        }, 150);
      } else if (!location.hash) {
        // Scroll to top when no hash present
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        lastHashRef.current = '';
      }
    };

    // Handle initial load with hash
    if (location.hash) {
      handleScrollToSection();
    }

    // Also handle hash changes
    const handleHashChange = () => {
      if (location.hash !== lastHashRef.current) {
        handleScrollToSection();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup function
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleUserScroll);
    };
  }, [location]);

  return null;
};

const HomeLayout = ({ children }) => {
  useScrollToSection();

  return (
    <main className="home-layout" style={{ background: "#171f2e", minHeight: "100vh" }}>
      {/* Content container with proper spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;