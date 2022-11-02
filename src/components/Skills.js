import {FaPython, FaReact, FaTools, FaGit} from 'react-icons/fa'
import {DiJavascript1, DiNodejsSmall} from 'react-icons/di'
import {SiPostgresql, SiTailwindcss, SiFlask, SiCplusplus, SiSolidity, SiDjango, SiFirebase, SiVisualstudio} from 'react-icons/si'
import {BsFillBootstrapFill, BsGithub} from 'react-icons/bs'
import {VscJson} from 'react-icons/vsc'

function Skills() {
  return (
    <div className='md:px-20 py-44 border-b border-text-secondary'>
    <h1 className='text-2xl px-15 mt-10 ml-10 md:px-20 underline-offset-4 underline flex items-center uppercase'><FaTools className='mx-2'/> Tools of craft</h1>
    <div className='grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center pt-20'>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <DiJavascript1 className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. JavaScript .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <FaReact className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. React .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <DiNodejsSmall className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. NodeJs .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiDjango className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Django .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <FaPython className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Python .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiPostgresql className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Postgresql .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiTailwindcss className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Tailwindcss .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <BsFillBootstrapFill className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Bootstrap .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <VscJson className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. JSON .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiFlask className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Flask .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiCplusplus className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. C++ .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiSolidity className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Solidity .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <FaGit className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Git .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <BsGithub className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Github .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiFirebase className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Firebase .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiVisualstudio className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className=' ease-in-out md:text-xl'>. Visual Studio Code .</p>
        </div>
    </div>
    </div>
  )
}

export default Skills