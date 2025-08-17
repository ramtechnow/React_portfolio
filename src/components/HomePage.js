import { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const HomePage = () => {
  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="home-layout">
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="about" className="min-h-screen">
        <About />
      </section>
      
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>
      
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;