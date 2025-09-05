import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor";
import HomePage from './components/HomePage';
import Blog from './components/Blog';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a dark mode preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Listen for system dark mode changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header />
        <AnimatedCursor
          innerSize={8}
          outerSize={20}
          color={isDarkMode ? '255, 255, 255' : '0, 0, 0'}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={['a', 'button', '.clickable', 'input', 'textarea', 'select']}
          trailingSpeed={8}
          hasBlendMode={true}
          outerStyle={{
            border: isDarkMode ? '2px solid #fff' : '2px solid #000',
            mixBlendMode: isDarkMode ? 'difference' : 'normal',
          }}
          innerStyle={{
            backgroundColor: isDarkMode ? '#fff' : '#000',
            mixBlendMode: isDarkMode ? 'difference' : 'normal',
          }}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          {/* Add a 404 route for unknown paths */}
          <Route path="*" element={
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>404 - Page Not Found</h1>
                <p style={{ fontSize: '1.125rem' }}>The page you're looking for doesn't exist.</p>
              </div>
            </div>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;