import { Icon } from '@iconify/react'
import Data from '../js/projects'
import { useState } from 'react'

const Projects = () => {

    const navigation = [
        { name: 'All', filter: 'all'},
        { name: 'Website', filter: 'web'},
        { name: 'UI Design', filter: 'ui'},
        { name: 'Graphics Design', filter: 'graphics'},
    ] 

    const [projlist, setProjList] = useState(4);
    const [activeCategory, setActiveCategory] = useState('all');

    const loadMore = () => {
        setProjList(projlist + 4);
    }

    const filterData = (filter) => {
        setActiveCategory(filter);
        setProjList(4); // Reset the project list when a new category is selected
    };

    const filteredData = activeCategory === 'all' ? Data : Data.filter(project => project.type === activeCategory);

    return (  
        <div className="min-h-[100dvh] bg-darkwhite dark:bg-inherit text-black dark:text-white text-center relative py-24">
            <div className='absolute bottom-0 left-0 w-full overflow-hidden '>
                <svg 
                    className='relative block h-[150px] max-md:h-[70px] max-lg:h-[100px] w-full'
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"      
                >
                    <path 
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                        className="fill-white dark:fill-midnight"
                    ></path>
                </svg>
           </div>
        
            <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-32 lg:mb-48">
                <h1 className="text-blue text-2xl font-bold text-center ">
                    Projects
                </h1>
                <div className="flex items-center justify-center pt-8 md:pb-6">
                    <div className="flex items-center justify-center text-black dark:text-white bg-white dark:bg-midnight p-3 rounded-2xl text-sm sm:text-base">
                        {navigation.map((item) => (
                        <div 
                            key={item.name}
                            className={`rounded-lg px-3.5 sm:px-5  cursor-pointer leading-10 line-clamp-1
                            ${activeCategory === item.filter ? 'bg-light-red text-white' : ''}`}
                            onClick={() => filterData(item.filter)}
                        >
                            {item.name}
                        </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 py-4">
                    {filteredData.slice(0, projlist).map((projects) => (
                    <div key={projects.id} className="rounded-2xl bg-white dark:bg-midnight p-5 sm:p-7">
                        <div className='text-left'>
                            <h1 className='font-medium'>{projects.title}</h1>
                            <p className='text-sm text-subtxt-light dark:text-subtxt-dark h-10 line-clamp-2 mt-1'>{projects.desc} </p>
                        </div>
                        <div className='w-full bg-darkwhite dark:bg-black rounded-xl mt-2.5 mb-4 overflow-hidden'>
                            <img src={projects.img} alt='projimg' loading='lazy' className='rounded-xl w-full  object-cover bg-white transition ease-in-out duration-500 hover:scale-105'/>
                        </div>
                        <div className={`sm:flex sm:items-center ${projects.github || projects.preview ? 'sm:justify-between ' : 'sm:justify-center'}`}>
                            <div className='icons flex flex-wrap justify-center items-center gap-1.5 text-blue text-2xl sm:text-3xl '>
                            {(projects.tech).map((tech) => (
                                <p className='text-xs py-1 px-3 rounded-xl font-medium bg-darkwhite dark:bg-black'>{tech}</p>
                                // <Icon key={tech} icon={`${projects.type === 'graphics' ? `${tech}` : `tabler:brand-${tech}`}`}/>
                            ))}
                            </div>       
                            <div className={`flex gap-2 justify-center max-sm:pt-3 text-blue text-2xl ${projects.github || projects.preview ? '' : 'hidden'}`}>
                                <a className={`${projects.github ? 'hvr-bob' : 'hidden'}`} href={projects.github} target='_blank' rel="noreferrer">
                                    <Icon icon='tabler:brand-github'></Icon>
                                </a>
                                <a className={`${projects.preview ? 'hvr-bob' : 'hidden'} `} href={projects.preview} target='_blank' rel="noreferrer">
                                    <Icon icon='tabler:link'></Icon>
                                </a>  
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='py-2'>
                {projlist < filteredData.length && (
                    <button className='bg-white dark:bg-midnight px-16 py-3 rounded-xl font-semibold text-blue' onClick={loadMore}>Load more</button>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default Projects;