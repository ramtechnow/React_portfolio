import websiteImg1 from '../assets/ecommerce-website.jpg'
import websiteImg2 from '../assets/project.jpg'
export default function Projects(){
    return <section className="flex py-20 px-5 justify-center bg-primary text-white">
        <div className="w-1/2">
            <div className="flex justify-center">
            <h1 className='text-4xl border-b-4 border-Secondary mb-5 w-[150px] font-bold'>Projects</h1>
            </div>
        </div>
        <div className="w-1/2">
            <div>
                <img src={websiteImg1}/>
                <img src={websiteImg2}/>
            </div>    
        </div>
    </section>
}