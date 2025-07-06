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
        link: "https://github.com/ramtechnow/Grocery_boostrap_webpage",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col py-20 px-5 justify-center bg-primary text-white overflow-hidden"
    >
      {/* Bubble Background */}
      <div className="bubble-bg absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Section Header */}
      <div className="w-full flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-Secondary mb-5 w-[150px] font-bold">
          Projects
        </h1>
        <p>
          These are some of my best projects. I have built these with React,
          MERN, and vanilla CSS. Check them out.
        </p>
      </div>

      {/* Project Cards */}
      <div className="w-full px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded shadow-lg">
              <img
                className="h-[200px] w-full object-cover"
                src={project.image}
                alt="Project screenshot"
              />
              <div className="project-desc bg-black bg-opacity-70 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <p className="text-center px-5 py-5">{project.description}</p>
                <a
                  className="btn bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
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