import glitch from '../assets/glitch.jpeg'
import veannes from '../assets/veannes.png'
import cakeFairy from '../assets/cake-fairy.png'
import {BsGithub} from 'react-icons/bs'

const projects = [
    {
        projectName: 'Veannes',
        tools: [
            'Python',
            'Django',
            'Tailwindcss',
            'JavaScript',
            'HTML5 & CSS'
        ],
        projectPicture: veannes,
        projectDescription: 'This is a fully functional e-commerce website. It gives a merchant a the ability to upload any product of their choice, record inventory, receive online payments, store customer data, create discounts for products among other key features',
        url: 'https://github.com/webala/ecom-classic'
    },
    {
        projectName: 'Cake Fairy',
        tools: [
            'JavaScript',
            'React',
            'NextJs',
            'Tailwindcss',
            'CSS'
        ],
        projectPicture: cakeFairy,
        projectDescription: 'This is a website used by a cake business. Among the key features include ability to view menu, place orders, make online paayment, store customer data, store customer reviews for the service etc.',
        url: 'https://github.com/webala/cake-fairy'
    },
    {
        projectName: 'Glitch Cloud Photography',
        tools: [
            'Python',
            'Django',
            'Tailwindcss',
            'JavaScript',
            'HTML5 & CSS'
        ],
        projectPicture: glitch,
        projectDescription: 'This is a website used by a photography business. It includes features such as ability to book shoots, ability to make online payment for a shoot, storing of client data, automated messaging ability to manage shoots for the photographer etc',
        url: 'https://github.com/webala/mosh-photograpy'
    }, 
    
]

function Project({projectName, tools, projectPicture, projectDescription, url}) {
  return (
    <div className="relative w-full mt-10 group sm:w-72 h-fit md:w-96">
        <div className='md:hidden'>
            <h1 className='text-2xl'>{projectName}</h1>
            <div className='flex flex-col'>
                <div>
                    <p>{projectDescription}</p>
                    <a href={url} className='text-xl mt-2'><BsGithub /></a>
                </div>
                    <div className='mt-3'>
                    <h2 className='text-xl underline'>Tools</h2>
                    <ul className="list-disc flex flex-wrap gap-5">
                    {tools.map((tool, index) => {
                        return (
                            <li key={index}>{tool}</li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
        <img src={projectPicture} alt='project' className='rounded-lg border border-black transition-opacity duration-300 ease-in'/>
        <div className="absolute top-3 left-10 opacity-0 duration-500 ease-in-out sm:group-hover:right-0 md:group-hover:opacity-100 md:group-hover:translate-x-96 md:transition-all">
            <h1 className='text-2xl'>{projectName}</h1>
            <div className='flex'>
                <div>
                    <p>{projectDescription}</p>
                    <a href={url} className='text-xl mt-2'><BsGithub /></a>
                </div>
                    <div className='ml-5'>
                    <h2 className='text-xl underline'>Tools</h2>
                    <ul className="list-disc">
                    {tools.map((tool, index) => {
                        return (
                            <li key={index}>{tool}</li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

function Projects() {
  return (
    <div className='w-full px-5 pb-20 flex flex-col items-start xl:px-44 py-16 md:py-44'>
        <h1 className='my-5 text-2xl underline-offset-4 underline uppercase'>Take a look at some of my work</h1>
        <div className='w-full'>
        { projects.map((project, index) => {
            return (<Project url={project.url} projectName={project.projectName} projectDescription={project.projectDescription} tools={project.tools} projectPicture={project.projectPicture} key={index}/>)
        })}
        </div>
    </div>
  )
}

export default Projects