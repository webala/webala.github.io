import dp from '../assets/dp.jpg'
import { useState, useEffect } from 'react'
import {BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'

function Title() {

  const [titlePosition, setTitlePosition] = useState('-translate-x-56')
  useEffect (() => {
    setTitlePosition('translate-x-0')
  }, [])
  return (
    <div className={`flex items-center ${titlePosition} transition-transform duration-500 ease-in`}>
        <img className='w-24 rounded-full md:w-44' src={dp} alt='profile' />
        <div className='ml-7'>
            <h1 className='text-2xl md:text-3xl'>DANIEL</h1>
            <h2 className='ml-4 text-2xl md:text-3xl'>WEBALA</h2>
            <p>SOFTWARE ENGINEER</p>
        </div>
    </div>
  )
}

function About() {
  const [aboutPosition, setAboutPosition] = useState('-translate-y-72')

  useEffect (() => {
    setAboutPosition('translate-y-0')
  }, [])
  return (
    <div className={`flex px-2 flex-col sm:px-10 md:px-5 xl:px-12 ${aboutPosition} transition-transform duration-500 ease-in`}>
        <h1 className='text-xl mb-3'>Who I'm I?</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
  )
}

function Socials() {
  const [socialsPosition, setSocialsPosition] = useState('-translate-y-96')

  useEffect (() => {
    setSocialsPosition('translate-y-0')
  }, [])
  return (
    <div className={`flex flex-col ${socialsPosition} transition-transform duration-700 ease-in`}>
        <a><BsTwitter className='my-4 text-2xl hover:animate-bounce '/></a>
        <a><FaDiscord className='my-4 text-2xl hover:animate-bounce '/></a>
        <a><BsGithub className='my-4 text-2xl hover:animate-bounce'/></a>
        <a><BsLinkedin className='my-4 text-2xl hover:animate-bounce '/></a>
    </div>
  )
}

function Header() {
  return (
    <div className='w-full px-10 h-fit pt-10 md:py-16 xl:py-44 flex flex-col md:flex-row border-b border-text-secondary pb-10'>
        <Title className='md:w-1/3'/>
        <div className='flex items-center h-full mt-10 md:w-2/3 md:mt-0'>
            <About className='md:mt-0 mt-3'/>
            <Socials />
        </div>
    </div>
  )
}

export default Header