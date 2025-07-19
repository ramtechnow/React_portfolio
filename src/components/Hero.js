import HeroImg from '../assets/profile.svg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import './Hero.css';

export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack Developer and Designer",
    social: {
      whatsapp: 'https://wa.me/919080339752/',
      github: 'https://github.com/ramtechnow',
      linkedin: 'https://www.linkedin.com/in/shriram-m-g-387a59241/',
    },
  };

  return (
    <section className="relative flex md:flex-row flex-col px-5 py-32 bg-primary justify-center overflow-hidden">


      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col z-10">
        <h1 className="text-white text-4xl font-hero-font leading-snug">
          Hi,<br />
          I'm <span className="text-black">M G</span> Shriram
        </h1>
        <p className="text-2xl mt-4">{config.subtitle}</p>

        {/* Social Icons */}
        <div className="flex py-10">
          <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" className="pr-5 hover:text-white">
            <AiOutlineWhatsApp size={40} />
          </a>
          <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <img className="md:w-1/3 z-10" src={HeroImg} alt="Profile illustration" />
    </section>
  );
}