import AboutImg from '../assets/about.svg'

export default function About() {
    return<section className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2'>
        <img src={AboutImg} />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hi, My Name is shriram,I'm a full stack devloper.I built Beautiful Website with React.js and Tailwind css.</p>
        <p className='pb-5'>I am proficient in the frontend skills like React redux Tool kit,Tailwind CSS,SaSS,Css3 and many more.</p>
        <p className='pb-5'>In Backend I know Node js, Express.js,Mango DB and Mongoose. </p>
        </div>    
    </div>
    </section>
}