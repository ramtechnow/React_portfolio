import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor";
import HomePage from './components/HomePage';
import Blog from './components/Blog';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'; // Disable browser's automatic scroll restoration
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatedCursor
          innerSize={8}
          outerSize={25}
          color={[0, 0, 0]}
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2}
          clickables={['a', 'button', '.clickable']}
          trailingSpeed={8}
          hasBlendMode={true}
          outerStyle={{
            border: '2px solid black',
          }}
          innerStyle={{
            backgroundColor: 'black',
          }}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;