import HeroImg from '../assets/profile.svg'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin, } from "react-icons/ai";
export default function Hero() {
    const config ={
        subtitle : 'Im a Full-stack Developer and designer',
        social:{
            twiter:'https://twitter.com/',
            facebook:'https://www.facebook.com/',
            linkedin:'https://www.linkedin.com/in/shriram-m-g-387a59241/'     
        }
    }


    return <section className='flex md:flex-row flex-col px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'> 
        <h1 className='text-white text-4xl font-hero-font'>Hi,<br/> Im <span className='text-black'>M G</span> Shriram 
        <p className='text-2xl'>{config.subtitle}</p></h1>    
        <div className='flex py-10'>
            <a href={config.social.twiter}className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/> </a>
            <a href={config.social.facebook}className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/> </a>
            <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/> </a>
        </div>
        </div>
        <img className='md:w-1/3'src={HeroImg} />
    </section>
}