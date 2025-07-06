import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
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
    </div>
  );
}

export default App;