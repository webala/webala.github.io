import {FaPython, FaReact} from 'react-icons/fa'
import {DiJavascript1, DiNodejsSmall} from 'react-icons/di'
import {SiPostgresql, SiTailwindcss, SiFlask, SiCplusplus, SiSolidity, SiDjango} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {VscJson} from 'react-icons/vsc'

function Skills() {
  return (
    <div className='md:px-20'>
    <h1 className='text-2xl mt-10 ml-10 md:ml-0 underline-offset-4 underline'>Tools of craft</h1>
    <div className='grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center pt-20'>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <DiJavascript1 className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. JavaScript .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <FaReact className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. React .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <DiNodejsSmall className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. NodeJs .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiDjango className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Django .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <FaPython className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Python .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiPostgresql className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Postgresql .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiTailwindcss className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Tailwindcss .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <BsFillBootstrapFill className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Bootstrap .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <VscJson className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. JSON .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiFlask className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Flask .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiCplusplus className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. C++ .</p>
        </div>
        <div className='flex flex-col group items-center m-4 cursor-pointer'>
            <SiSolidity className='text-4xl md:text-5xl group-hover:animate-bounce'/>
            <p className='md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>. Solidity .</p>
        </div>
    </div>
    </div>
  )
}

export default Skills