import dp from '../assets/dp.jpg'
import { useState, useEffect } from 'react'
import {BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'

function Title({titlePosition, setTitlePosition}) {

  
  useEffect (() => {
    setTitlePosition('translate-x-0')
  }, [])
  return (
    <div className={`flex items-center ${titlePosition} transition-transform duration-500 ease-in`}>
        <img className='w-24 rounded-full md:w-44' src={dp} alt='profile' />
        <div className='ml-7'>
            <h1 className='text-2xl md:text-3xl'>DANIEL</h1>
            <h2 className='ml-4 text-2xl md:text-3xl'>WEBALA</h2>
            <p>FULL STACK DEVELOPER</p>
        </div>
    </div>
  )
}

function About({aboutPosition, setAboutPosition}) {
  
  useEffect (() => {
    setAboutPosition('translate-y-0')
  }, [])
  return (
    <div className={`flex px-2 flex-col sm:px-10 md:px-5 xl:px-12 ${aboutPosition} transition-transform duration-500 ease-in`}>
        <h1 className='text-xl mb-3'>Who I'm I? 🤔</h1>
        <p>"I am a self taught full stack developer. Creativity and building things is a passion of mine and programming is the best way to express myself. I am a very quick learner and I never shy off from a challenge. I also believe in uplifting others therefore I always lend a hand whenever assistance is needed from me. I love working and learning from others especially those ahead of me in my field. Finally, I have a very good taste in music and film 😁"</p>
    </div>
  )
}

function Socials({socialsPosition, setSocialsPosition}) {
  

  useEffect (() => {
    setSocialsPosition('translate-y-0')
  }, [])
  return (
    <div className={`flex flex-col ${socialsPosition} transition-transform duration-700 ease-in`}>
        <a href='https://twitter.com/Webbie1001' target='blank'><BsTwitter className='my-4 text-2xl hover:animate-bounce '/></a>
        <a href='https://github.com/webala' target='blank'><BsGithub className='my-4 text-2xl hover:animate-bounce'/></a>
        <a href='https://www.linkedin.com/in/daniel-webala-8b4992184' target='blank'><BsLinkedin className='my-4 text-2xl hover:animate-bounce '/></a>
    </div>
  )
}

function Header() {
  const [aboutPosition, setAboutPosition] = useState('-translate-y-72')
  const [socialsPosition, setSocialsPosition] = useState('-translate-y-96')
  const [titlePosition, setTitlePosition] = useState('-translate-x-56')


  return (
    <div className='w-full px-10 h-fit pt-10 md:py-16 xl:py-44 flex flex-col md:flex-row border-b border-text-secondary pb-10'>
        <Title className='md:w-1/3' titlePosition={titlePosition} setTitlePosition={setTitlePosition}/>
        <div className='flex items-center h-full mt-10 md:w-2/3 md:mt-0'>
            <About className='md:mt-0 mt-3' aboutPosition={aboutPosition} setAboutPosition={setAboutPosition}/>
            <Socials socialsPosition={socialsPosition} setSocialsPosition={setSocialsPosition}/>
        </div>
    </div>
  )
}

export default Header