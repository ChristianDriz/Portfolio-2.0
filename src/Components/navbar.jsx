import { Disclosure } from '@headlessui/react'
import DarkMode from '../js/darkmode'
import { Icon } from '@iconify/react'
import { Link } from 'react-scroll'

const navigation = [
    { name: 'Home', section: 'home'},
    { name: 'About', section: 'about'},
    { name: 'Projects', section: 'projects'},
    { name: 'Contact', section: 'contact'},
] 

const Navbar = () => {

    const { changeTheme, enabled } = DarkMode();

    return (  
    <Disclosure as="nav" className="bg-white dark:bg-midnight text-black dark:text-white fixed inset-x-0 z-10 ">
        {({ open }) => (
            <>
            <div className="container mx-auto px-4 md:px-6 ">
                <div className=" flex h-16 items-center justify-between ">
                    <div className="flex flex-1 items-center justify-between ">
                        <div className='brand animate__animated animate__fadeInLeft animate__delay-4s'>
                            <p className='text-blue font-extrabold text-lg lg:text-xl'>
                                &lt;/<span className='text-black dark:text-white'>drix</span>&gt;
                            </p>
                        </div>

                        <div className="hidden ml-[-28px] sm:block animate__animated animate__fadeInUp animate__delay-4s">
                            <div className="flex gap-8 lg:gap-10">
                                {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.section}
                                    spy={true}
                                    smooth='easeInOutCubic'
                                    duration={800}
                                    isDynamic={true}
                                    activeClass='text-blue'
                                    className={`hover:text-blue cursor-pointer`}
                                    // onClick={() => handleSetActive(item.section)}
                                >
                                    {item.name}
                                </Link>
                                ))}
                            </div>
                        </div>
                        <div className=' animate__animated animate__rotateIn animate__delay-4s'>
                            <Icon 
                                icon={`${enabled ? 'tabler:sun-high' : 'tabler:moon'}`} 
                                className='text-black dark:text-white text-2xl transition hover:rotate-45' 
                                onClick={changeTheme}
                            />
                        </div>
                        <div className="flex items-center sm:hidden animate__animated animate__fadeInRight animate__delay-4s">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="relative inline-flex items-center justify-center p-2  ">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Icon icon={`${open ? 'heroicons:x-mark' : 'heroicons:bars-3'}`} className="block h-6 w-6" aria-hidden="true" />
                            </Disclosure.Button>
                        </div>
                    </div>    
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden shadow-lg ">
                <div className="space-y-0.5 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                        as={Link}
                        key={item.name}
                        to={item.section}
                        spy={true}
                        smooth='easeInOutCubic'
                        duration={800}
                        isDynamic={true}
                        activeClass='bg-blue text-white'
                        className='block rounded-lg px-3 py-2 cursor-pointer hover:bg-blue hover:text-white'
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
    );
}
 
export default Navbar;