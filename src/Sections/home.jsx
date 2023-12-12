import { Icon } from '@iconify/react'
import me from '../img/me.png'
import { Link } from 'react-scroll'
import links  from '../js/links'

const Home = () => {

    return (
        <div className='h-[100dvh] w-full bg-darkwhite dark:bg-inherit relative text-black dark:text-white '>
            <div className='absolute bottom-0 left-0 overflow-hidden w-full'>
                <svg 
                    className='relative block h-[150px] max-md:h-[70px] max-lg:h-[100px] w-full '
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"      
                >
                    <path 
                        // d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                        className="fill-white dark:fill-midnight "
                    ></path>
                </svg>
            </div>        
            <div className='h-[calc(100dvh-150px)] max-md:h-[calc(100dvh-70px)] max-lg:h-[calc(100dvh-100px)] bg-white dark:bg-midnight '>
                <div className='container mx-auto h-full px-4 md:px-4 flex items-center justify-between max-lg:block pt-20 lg:pt-36'>
                    <div className=' flex items-end justify-center h-3/6 lg:pl-10 lg:items-center max-lg:py-8 animate__animated animate__zoomIn animate__delay-1s'>
                        <img src={me} alt="me" className='w-[250px] lg:w-[450px] object-cover animate-animate' />
                    </div>
                    <div className='order-first flex items-start justify-center h-3/6 lg:items-center max-lg:text-center max-lg:py-8 '>
                        <div>
                            <p className='font-medium lg:py-2 text-lg lg:text-xl animate__animated animate__fadeInTopLeft'>
                                Hey there,
                            </p>
                            <h1 className="capitalize text-black dark:text-white text-3xl lg:text-5xl font-bold py-0.5 lg:py-2 animate__animated animate__fadeInUp animate__delay-1s">
                                I'm <span className="text-blue">Christian Joseph</span>
                            </h1>
                            <p className='text-sm lg:text-base text-subtxt-light dark:text-subtxt-dark line-clamp-3 max-w-prose animate__animated animate__fadeInUp animate__delay-2s'>
                                I'm a fresh graduate with a degree of Bachelor of Science in Information Technology.
                                I’m an aspiring front-end web developer.
                            </p>
                            <div className="icons flex max-lg:justify-center gap-5 text-blue text-3xl py-2 animate__animated animate__lightSpeedInLeft animate__delay-3s">
                            {links.map((list) => (
                                <a key={list.icon} href={list.social} target='_blank' rel="noreferrer" className='hvr-bob'> 
                                    <Icon icon={`tabler:brand-${list.icon}`} />
                                </a>
                            ))}
                            </div>
                            <div className='my-6 animate__animated animate__fadeInUpBig animate__delay-3s'>
                                <Link 
                                    className="bg-light-red rounded-xl px-8 py-3 text-white font-semibold text-sm lg:text-base cursor-pointer hvr-wobble-vertical"
                                    to='contact'
                                    spy={true}
                                    smooth='easeInOutCubic'
                                    duration={800}
                                >
                                    Contact Me
                                </Link> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;