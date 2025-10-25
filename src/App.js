// /D:/copy/React_portfolio/src/App.js
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your own components here
import Navbar from "./components/Header";
import Home from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog"
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Theme detection (runs once on mount)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Initial set
    setIsDark(mediaQuery.matches);

    // Listener for changes
    const handleThemeChange = (e) => setIsDark(e.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
      // @ts-ignore -- older Safari uses deprecated addListener
      mediaQuery.addListener(handleThemeChange);
    }

    // Cleanup
    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleThemeChange);
      } else if (typeof mediaQuery.removeListener === "function") {
        // @ts-ignore -- older Safari uses deprecated removeListener
        mediaQuery.removeListener(handleThemeChange);
      }
    };
  }, []);

  // Scroll restoration (safe client-side)
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch (err) {
        console.warn("Could not set scrollRestoration:", err);
      }
    }
  }, []);

  // Optional: automatically scroll to top on route change
  // (Uncomment if using Router)
  // useEffect(() => {
  //   const handleRouteChange = () => window.scrollTo(0, 0);
  //   window.addEventListener("popstate", handleRouteChange);
  //   return () => window.removeEventListener("popstate", handleRouteChange);
  // }, []);

  return (
    <div className={`App ${isDark ? "theme-dark" : "theme-light"}`}>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;