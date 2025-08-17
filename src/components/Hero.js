import HeroImg from '../assets/profile.svg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import './bubbel.css';
import { useEffect } from 'react';

export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack Developer and Designer",
    social: {
      whatsapp: 'https://wa.me/919080339752/',
      github: 'https://github.com/ramtechnow',
      linkedin: 'https://www.linkedin.com/in/shriram-m-g-387a59241/',
    },
  };

  // Generate bubbles with proper size attributes
  const bubbles = Array.from({ length: 12 }).map((_, idx) => {
    const baseSize = 
      idx === 1 ? 50 : 
      idx === 4 ? 60 : 
      idx === 7 ? 55 : 
      idx === 2 ? 40 : 
      idx === 11 ? 48 : 
      idx === 5 ? 25 : 
      idx === 9 ? 38 : 
      idx === 10 ? 33 : 
      idx === 11 ? 28 : 
      35; // default size
    
    return (
      <div 
        key={idx} 
        className="bubble"
        style={{ '--base-size': `${baseSize}px` }}
      />
    );
  });

  // Handle hash navigation for the hero section
  useEffect(() => {
    if (window.location.hash === '#home') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section id="home" className="relative bg-primary flex md:flex-row flex-col px-5 py-32 justify-center overflow-hidden min-h-screen">
      {/* Bubble background */}
      <div className="bubble-bg" aria-hidden="true">
        {bubbles}
      </div>

      {/* Content container with max-width */}
      <div className="w-full max-w-6xl flex md:flex-row flex-col items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-[#0d0d0d] text-5xl md:text-7xl font-hero-font leading-tight md:leading-snug">
            Hi,<br />
            I'm <span className="text-[#d9376e]">M G</span> Shriram
          </h1>
          <p className="text-[#2a2a2a] text-xl md:text-2xl mt-4">{config.subtitle}</p>
          
          {/* Social Icons */}
          <div className="flex py-6 md:py-10">
            <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" 
               className="pr-5 text-black hover:text-[#d9376e] transition-colors duration-300">
              <AiOutlineWhatsApp size={32} className="md:w-10 md:h-10 w-8 h-8" />
            </a>
            <a href={config.social.github} target="_blank" rel="noopener noreferrer" 
               className="pr-5 text-black hover:text-[#d9376e] transition-colors duration-300">
              <AiOutlineGithub size={32} className="md:w-10 md:h-10 w-8 h-8" />
            </a>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" 
               className="text-black hover:text-[#d9376e] transition-colors duration-300">
              <AiOutlineLinkedin size={32} className="md:w-10 md:h-10 w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/3 w-full flex justify-center mt-8 md:mt-0">
          <img 
            className="w-full max-w-xs md:max-w-none" 
            src={HeroImg} 
            alt="Profile illustration" 
          />
        </div>
      </div>
    </section>
  );
}