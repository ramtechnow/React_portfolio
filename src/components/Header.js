import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="bg-primary shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center px-5 py-4">
        <a className="font-bold text-black text-xl" href="#home">Shriram MG</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white font-medium">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden text-white">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggleMenu && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-primary shadow-md z-40">
          <ul onClick={() => setToggleMenu(false)} className="flex flex-col text-white text-base font-medium px-5 py-4 space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}