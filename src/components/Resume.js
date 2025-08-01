import ResumeImg1 from "../assets/resume.svg";

export default function Resume() {
  const config = {
    link: "https://oto.lv.tab.digital/s/rA7AzkeaNK4rZ63",
  };
  
  return (
    <section 
      id="resume" 
      className="relative flex flex-col md:flex-row bg-primary px-5 py-12 md:py-24 overflow-hidden"
    >
      {/* Bubble Animation Background - Enhanced */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const duration = Math.random() * 15 + 10;
          const delay = Math.random() * 5;
          const positionX = Math.random() * 100;
          const positionY = Math.random() * 100;
          
          return (
            <span 
              key={i}
              className="absolute rounded-full bg-secondary opacity-10 animate-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${positionX}%`,
                top: `${positionY}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative z-10 py-8 md:py-0">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
          <img 
            className="relative w-[280px] md:w-[350px] transition-transform duration-300 group-hover:scale-105" 
            src={ResumeImg1} 
            alt="Resume illustration" 
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 flex justify-center relative z-10">
        <div className="flex flex-col justify-center text-black max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Resume</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 z-0"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-800">
            My professional experience and skills are detailed in my resume. Feel free to download it for your reference.
          </p>
          
          <div className="relative group">
            <a 
              className="inline-block px-8 py-3 font-medium rounded-lg bg-black from-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              target="_blank" 
              rel="noopener noreferrer"
              href={config.link}
            >
              <span className="relative z-10 flex items-center">
                Download Resume
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}