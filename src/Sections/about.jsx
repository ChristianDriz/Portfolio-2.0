import WorkSpace from '../img/workspace.svg'
import { Icon } from '@iconify/react'
import UI from '../img/ui design.png'
import Web from '../img/web dev.png'
import Graphics from '../img/graphics design.png'
import CV from '../img/Christian Joseph Dimla - CV.pdf'

const About = () => {

    const skills = [
        {image: UI, title: 'User Interface Design', desc: 'Elevate User Experiences'},
        {image: Web, title: 'Web development', desc: 'Turning Ideas into Online Realities'},
        {image: Graphics, title: 'Graphics Design', desc: "Unleash Your Brand's Creativity"}
    ]

    return (  
        <div className="min-h-[100dvh] flex items-center bg-darkwhite dark:bg-black text-black dark:text-white">
            <div className='container mx-auto max-lg:py-20'>
                <div className="grid grid-cols-2 max-md:block ">
                    <div className='flex justify-center'>
                        <img src={WorkSpace} alt="workspace" className='h-96 max-lg:h-[325px] max-md:h-[250px]'/>
                    </div>
                    
                    <div className="max-md:text-center py-6 px-4 md:px-6 ">
                        <h1 className="text-blue text-2xl font-bold">
                            About Me
                        </h1>
                        <p className="text-sm lg:text-base text-subtxt-light dark:text-subtxt-dark py-3 "> 
                            A front-end web developer who loves bringing digital ideas to life. 
                            I have experience with Figma, HTML, CSS, and JavaScript, 
                            and I'm currently diving into the world of React. 
                            Whether it's building with Bootstrap or styling efficiently with Tailwind CSS, 
                            I'm all about creating awesome online experiences. 
                            Let's connect and make something cool together!
                        </p>
                        <div className='icons flex max-md:justify-center gap-5 text-blue text-3xl '>
                            <Icon icon='tabler:brand-html5'/>
                            <Icon icon='tabler:brand-css3'/>
                            <Icon icon='tabler:brand-javascript'/>
                            <Icon icon='tabler:brand-php'/>
                            <Icon icon='tabler:brand-bootstrap'/>
                            <Icon icon='tabler:brand-react'/>
                            <Icon icon='tabler:brand-tailwind'/>
                        </div>
                        <div className='my-10 max-md:my-8'>
                            <a 
                                className="bg-light-red rounded-xl px-8 py-3 text-white font-semibold text-sm lg:text-base cursor-pointer"
                                href={CV}
                            >Download CV
                            </a> 
                        </div>
                    </div>
                </div>
                <div className='text-center '>
                    <h2 className='text-xl font-semibold p-5'>Skills</h2>
                    <div className='flex flex-wrap justify-center gap-8 max-md:gap-6 px-6 '>
                    {skills.map((list) => (
                        <div key={list.title} className={`bg-white dark:bg-midnight rounded-2xl w-72 min-h-[326px] px-10 py-9 h-full `}>
                            <div className='flex justify-center pb-2'>
                                <img src={list.image} alt="skill-icon" className='w-40 h-40'/>
                            </div>
                            <div className='pt-2'>
                                <h1>{list.title}</h1>
                                <p className='text-sm text-subtxt-light dark:text-subtxt-dark pt-2'>{list.desc}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;