// import WaveWhite from '../img/Vector 4.svg'
// import WaveDark from '../img/wave dark.svg'
import { Icon } from '@iconify/react'
import me from '../img/me.png'
import { Link } from 'react-scroll'

const Home = () => {

    return (
        <div className='h-[100dvh] w-full relative bg-white dark:bg-[#1C232D] text-black dark:text-white'>
            {/* <img src={WaveWhite} alt="bg" className='absolute bottom-[-15rem] w-full'/> */}

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
                        className="fill-darkwhite dark:fill-black"
                    ></path>
                </svg>
           </div>

            <div className='container mx-auto h-full px-4 md:px-6 flex items-center justify-between max-lg:block '>
                <div className=' flex items-end justify-center h-3/6 lg:pl-10 lg:items-center max-lg:py-8'>
                    <img src={me} alt="me" className='w-[250px] lg:w-[450px] object-cover animate-animate' />
                </div>
                <div className='order-first flex items-start justify-center h-3/6 lg:items-center max-lg:text-center max-lg:py-8'>
                    <div>
                        <p className='font-medium lg:py-2 text-lg lg:text-xl'>
                            Hey there,
                        </p>
                        <h1 className="capitalize text-black dark:text-white text-3xl lg:text-5xl font-bold py-0.5 lg:py-2">
                            I'm <span className="text-blue">Christian Joseph</span>
                        </h1>
                        <p className='text-sm lg:text-base text-subtxt-light dark:text-subtxt-dark line-clamp-3 max-w-prose '>
                            I'm a fresh graduate with a degree of Bachelor of Science in Information Technology.
                            I’m an aspiring front-end web developer.
                        </p>
                        <div className="icons flex max-lg:justify-center gap-5 text-blue text-3xl py-2 ">
                            <Icon icon="tabler:brand-facebook" />
                            <Icon icon="tabler:brand-instagram" />
                            <Icon icon="tabler:brand-github" />
                        </div>
                        <div className='my-6 '>
                            <Link 
                                className="bg-light-red rounded-xl px-8 py-3 text-white font-semibold text-sm lg:text-base cursor-pointer"
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
    );
}

export default Home;