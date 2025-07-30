import websiteImg1 from "../assets/ecommerce-website.png";
import websiteImg2 from "../assets/LILO.png";
import websiteImg3 from "../assets/project.jpg";
import websiteImg4 from "../assets/company project.png";
import websiteImg5 from "../assets/grocery.png";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "Company website. Built with React Bootstrap 5.",
        link: "https://ecommerce-website-dfd55.web.app/",
      },
      {
        image: websiteImg2,
        description:
          "Login and logout tracker. Built with Python Tkinter and email integration.",
        link: "https://github.com/ramtechnow/LILO-Tracker",
      },
      {
        image: websiteImg3,
        description: "Image Search App using Unsplash API.",
        link: "https://github.com/ramtechnow/image_search-using-unsplash-api",
      },
      {
        image: websiteImg4,
        description: "Client Company website",
        link: "https://ramtechnow.github.io/SINX-TECHNOLOGIES/",
      },
      {
        image: websiteImg5,
        description: "Grocery_boostrap_webpage",
        link: "https://ramtechnow.github.io/Grocery_boostrap_webpage/",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col py-20 px-5 justify-center text-black overflow-hidden bg-primary"
    >
      {/* Bubble Background - unchanged */}
      <div className="bubble-bg absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Section Header with animation */}
      <div className="w-full flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-[#d9376e] mb-5 w-[150px] font-bold animate-fadeIn">
          Projects
        </h1>
        <p className="color-[#2a2a2a] text-xl animate-fadeIn delay-100">
          These are some of my best projects. I have built these with React,
          MERN, and vanilla CSS. Check them out.
        </p>
      </div>

      {/* Project Cards with enhanced animations */}
      <div className="w-full px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                className="h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                alt="Project screenshot"
              />
              <div className="project-desc bg-black bg-opacity-80 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-4">
                <p className="text-center px-5 py-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.description}
                </p>
                <a
                  className="btn bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}