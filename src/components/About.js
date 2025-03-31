import AboutImg from '../assets/about.svg'

export default function About() {
    const config ={
        line1:'Hi, My Name is shriram,Im a full stack devloper.I built Beautiful Website with React.js and Tailwind css + boostarp.',
        line2:'I am proficient in the frontend skills like React redux Tool kit,Tailwind CSS,SaSS,Css3 and many more.',
        line3:'Developed a Python-based bot using Tkinter and Outlook integration. The bot automates the process of sending emails and tracking login/logout times.',
    }


    return<section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
    <div className='md:w-1/2'>
        <img src={AboutImg} />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
        <p className='pb-5'>{config.line3}</p>
        </div>    
    </div>
    </section>
}