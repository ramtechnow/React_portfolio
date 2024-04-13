import AboutImg from '../assets/about.svg'

export default function About() {
    return<section className='flex bg-secondary px-5'>
    <div className='w-1/2'>
        <img src={AboutImg} />
    </div>
    <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className=' text-white'>Some Information About myself</p>
        </div>    
    </div>
    </section>
}