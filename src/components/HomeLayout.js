import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomeLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    window.history.scrollRestoration = 'manual';

    const handleScrollToSection = () => {
      if (location.hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
            // Only scroll if not already at the element's position
            const rect = element.getBoundingClientRect();
            if (Math.abs(rect.top) > 50) { // 50px buffer
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        }, 100);
      } else {
        // Scroll to top when no hash present (page refresh)
        window.scrollTo(0, 0);
      }
    };

    handleScrollToSection();

    // Cleanup function
    return () => {
      window.removeEventListener('load', handleScrollToSection);
    };
  }, [location]);

  return (
    <main className="home-layout" style={{ background: "#eff0f3" }}>
      {/* Content container with proper spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;