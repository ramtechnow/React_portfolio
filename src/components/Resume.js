import ResumeImg1 from '../assets/resume.svg'

export default function Resume() {
    const config ={
        link:'https://drive.google.com/file/d/1592DsngFxG5MCfQnxL2GAoKhPa27Lxfe/view?usp=sharing'
    }
    return<section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg1} />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>You can view a my resume <a className='btn' href={config.link}>Download</a></p>
       </div>    
    </div>
    </section>
}