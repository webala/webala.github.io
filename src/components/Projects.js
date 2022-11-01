import glitch from '../assets/glitch.jpeg'
import veannes from '../assets/veannes.png'
import cakeFairy from '../assets/cake-fairy.png'

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
        projectPicture: veannes
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
        projectPicture: cakeFairy
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
        projectPicture: glitch
    },
    
]

function Project({projectName, tools, projectPicture}) {
  return (
    <div className="relative w-full mt-10 group sm:w-72 h-fit md:w-96">
        <img src={projectPicture} alt='project' className='group-hover:opacity-25 rounded-lg border border-black transition-opacity duration-300 ease-in sm:group-hover:opacity-100'/>
        <div className="absolute top-3 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in sm:group-hover:right-0 sm:group-hover:translate-x-96 sm:transition-transform">
            <h1 className='text-2xl'>{projectName}</h1>
            <h2 className='text-xl'>Tools</h2>
            <ul className="list-disc">
            {tools.map((tool, index) => {
                return (
                    <li key={index}>{tool}</li>
                )
            })}
            </ul>
        </div>
    </div>
  )
}

function Projects() {
  return (
    <div className='w-full px-5 pb-20 flex flex-col items-start md:px-44'>
        <h1 className='my-5'>Take a look at some of my work</h1>
        <div className='w-full'>
        { projects.map((project, index) => {
            return (<Project projectName={project.projectName} tools={project.tools} projectPicture={project.projectPicture} key={index}/>)
        })}
        </div>
    </div>
  )
}

export default Projects