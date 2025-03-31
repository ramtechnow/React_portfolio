import websiteImg1 from '../assets/company project.png';
import websiteImg2 from '../assets/ecommerce-website.png';
import websiteImg3 from '../assets/project.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Company website. Built with React bootstrap 5.',
                link: 'https://github.com/ramtechnow/SINX-TECHNOLOGIES'
            },
            {
                image: websiteImg2,
                description: 'Login and logout tracker. Bulit with python tkinter and send email.',
                link: 'https://github.com/ramtechnow/LILO-Tracker'
            },
            {
                image: websiteImg3,
                description: 'Image Search App using Unsplash API.',
                link: 'https://github.com/ramtechnow/image_search-using-unsplash-api'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}