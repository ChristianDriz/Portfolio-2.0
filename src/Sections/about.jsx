import WorkSpace from '../img/workspace.svg'
import { Icon } from '@iconify/react'
import IT from '../img/it.png'
import Dev from '../img/coder.png'
import Designer from '../img/designer.png'

import CV from '../img/updated_cv.pdf'

const About = () => {
 
    const skills = [
        {image: IT, title: 'IT Support', desc: 'Solving Technical Problems'},
        {image: Dev, title: 'Front end development', desc: 'Building functional and user-friendly web interfaces'},
        {image: Designer, title: 'UI Design', desc: "Designing clean and user-friendly interfaces"}
    ]

    return (  
        <div className="min-h-[100dvh] flex items-center bg-darkwhite dark:bg-inherit text-black dark:text-white relative">
            <div className='container mx-auto max-lg:py-20'>
                <div className="grid grid-cols-2 max-md:block ">
                    <div className='flex justify-center '>
                        <img src={WorkSpace} alt="workspace" className='h-96 max-lg:h-[325px] max-md:h-[250px] '/>
                    </div>
                    
                    <div className="px-4 py-6 max-md:text-center md:px-6 ">
                        <h1 className="text-2xl font-bold text-blue">
                            About Me
                        </h1>
                        <p className="py-3 text-sm lg:text-base text-subtxt-light dark:text-subtxt-dark "> 
                           I'm an Information Technology graduate majoring in Network and Web Application, with a background in IT support and front-end development. My web development experience comes from academic and personal projects, including my capstone project.

I'm familiar with HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js. After gaining professional experience in IT support and remote work, I'm now getting back into development and strengthening my technical skills.
                        </p>
                        <div className='flex gap-5 text-3xl icons max-md:justify-center text-blue '>
                            <Icon icon='tabler:brand-html5' className='hvr-float'/>
                            <Icon icon='tabler:brand-css3' className='hvr-float'/>
                            <Icon icon='tabler:brand-javascript' className='hvr-float'/>
                            <Icon icon='tabler:brand-php' className='hvr-float'/>
                            <Icon icon='tabler:brand-bootstrap' className='hvr-float'/>
                            <Icon icon='tabler:brand-react' className='hvr-float'/>
                            <Icon icon='tabler:brand-tailwind' className='hvr-float'/>
                        </div>
                        <div className='my-10 max-md:my-8 '>
                            <a 
                                target={`_blank`}
                                className="px-8 py-3 text-sm font-semibold text-white cursor-pointer bg-light-red rounded-xl lg:text-base hvr-wobble-vertical"
                                href={CV}
                            >Download CV
                            </a> 
                        </div>
                    </div>
                </div>
                <div className='text-center '>
                    <h2 className='p-5 text-xl font-semibold'>Skills</h2>
                    <div className='flex flex-wrap justify-center gap-8 px-6 max-md:gap-6 '>
                    {skills.map((list) => (
                        <div key={list.title} className={`bg-white dark:bg-midnight rounded-2xl w-72 min-h-[326px] px-10 py-9 h-full `}>
                            <div className='flex justify-center pb-2'>
                                <img src={list.image} alt="skill-icon" className='w-40 h-40'/>
                            </div>
                            <div className='pt-2'>
                                <h1>{list.title}</h1>
                                <p className='pt-2 text-sm text-subtxt-light dark:text-subtxt-dark'>{list.desc}</p>
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