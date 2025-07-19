import ResumeImg1 from '../assets/resume.svg'

export default function Resume() {
    const config ={
        link:'https://drive.google.com/file/d/1AwG3ZmoxldSdOjh3HMy_pTQ3v_BGfxAr/view?usp=sharing'
    }
    return<section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        
    <div className='md:w-1/2 flex justify-center md:justify-end'>
          {/* Bubble Animation Background */}
      <div className="bubble-bg z-10">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>
        <img className='w-[300px]' src={ResumeImg1} alt='my_resume' />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>You can view my resume <a className='btn bg-warning' target="_blank" href={config.link}>Download</a></p>
       </div>    
    </div>
    </section>
}