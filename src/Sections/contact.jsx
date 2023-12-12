import { Icon } from '@iconify/react'
import SendMail from '../js/sendmail'
import links  from '../js/links'

const Contact = () => {

    const contact = [
        {icon: 'mail', title: 'email address', details: 'cjdimla1227@gmail.com'},
        {icon: 'phone', title: 'phone number', details: '+639455377999'},
        {icon: 'map-pin', title: 'home address', details: 'Balanga City, Bataan, Philippines'}
    ]

    const { formSubmit, formData, handeInput, nameError, emailError, subjectError, messageError } = SendMail();

    return (  
        <div className="min-h-[100dvh] bg-white dark:bg-midnight text-black dark:text-white flex items-center justify-center">
            <div className="container mx-auto py-20 ">
                <h1 className="text-blue text-2xl font-bold text-center mb-5 lg:mb-10">
                    Contact me
                </h1>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 ">
                    <div className='px-4 md:px-6 '>
                        <div className='max-lg:flex max-lg:flex-wrap justify-center'>
                            {contact.map((list) => (
                            <div key={list.title} className="flex items-center py-4 max-lg:py-1.5 max-lg:block text-center lg:text-left max-sm:w-full max-lg:w-[300px] ">
                                <div className='flex justify-center max-lg:py-2'>
                                    <div className='w-16 h-16 max-md:h-14 max-md:w-14 bg-blue rounded-full flex items-center justify-center text-white'>
                                        <Icon icon={`tabler-${list.icon}`} className='w-8 h-8 max-md:w-7 max-md:h-7'></Icon>
                                    </div>
                                </div>
                                <div className='px-8 '>
                                    <p className='capitalize font-semibold text-light-red dark:text-white'>{list.title}</p>
                                    <span className='text-sm text-subtxt-light dark:text-subtxt-dark'>{list.details}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className='py-8 max-lg:text-center'>
                            <p className='font-semibold text-light-red dark:text-white'>Visit my social profile and get connected.</p>
                            <div className="icons flex max-lg:justify-center gap-5 text-blue text-3xl py-2 ">
                                {links.map((list) => (
                                    <a key={list.icon} href={list.social} target='_blank' rel="noreferrer" className='hvr-bob'> 
                                        <Icon icon={`tabler:brand-${list.icon}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=' py-1 px-4 md:px-6 max-lg:order-first '>
                        <form onSubmit={formSubmit}>
                            <div className='relative pt-3 pb-6'>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className={`rounded-2xl px-5 py-3.5 border bg-inherit w-full outline-none peer 
                                    ${nameError ? 'border-red-500' : 'border-outline dark:border-subtxt-dark' }`}
                                    autoComplete='off'
                                    placeholder=' '
                                    value={formData.name}
                                    onChange={handeInput}
                                />
                                <label 
                                    htmlFor="name" 
                                    className={`absolute text-label dark:text-subtxt-dark left-4 duration-200 bg-white
                                    top-0 text-sm peer-focus:text-sm peer-focus:top-0 peer-placeholder-shown:top-[27px] 
                                    peer-placeholder-shown:text-base px-1.5 bg-white dark:bg-midnight
                                    ${nameError ? 'peer-focus:text-red-500' : '' }`}
                                >Name</label>
                                <small className='absolute left-0 bottom-0 text-red-500 '>{nameError}</small>
                            </div>
                            <div className='relative pt-3 pb-6 '>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className={`rounded-2xl px-5 py-3.5 border bg-inherit w-full outline-none peer 
                                    ${emailError ? 'border-red-500' : 'border-outline dark:border-subtxt-dark' }`}
                                    autoComplete='off'
                                    placeholder=' '
                                    value={formData.email}
                                    onChange={handeInput}
                                />
                                <label 
                                    htmlFor="email" 
                                    className={`absolute text-label dark:text-subtxt-dark left-4 duration-200 bg-white 
                                    top-0 text-sm peer-focus:text-sm peer-focus:top-0 peer-placeholder-shown:top-[27px] 
                                    peer-placeholder-shown:text-base px-1.5 bg-white dark:bg-midnight
                                    ${emailError ? 'peer-focus:text-red-500' : '' }`}
                                >Email address</label>
                                <small className='absolute left-0 bottom-0 text-red-500'>{emailError}</small>
                            </div>
                            <div className='relative pt-3 pb-6'>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    id="subject" 
                                    className={`rounded-2xl px-5 py-3.5 border bg-inherit w-full outline-none peer 
                                    ${subjectError ? 'border-red-500' : 'border-outline dark:border-subtxt-dark' }`}
                                    autoComplete='off'
                                    placeholder=' '
                                    value={formData.subject}
                                    onChange={handeInput}
                                />
                                <label
                                    htmlFor="subject" 
                                    className={`absolute text-label dark:text-subtxt-dark left-4 duration-200 bg-white
                                    top-0 text-sm peer-focus:text-sm peer-focus:top-0 peer-placeholder-shown:top-[27px] 
                                    peer-placeholder-shown:text-base px-1.5 bg-white dark:bg-midnight
                                    ${subjectError ? 'peer-focus:text-red-500' : '' }`}
                                >Subject</label>
                                <small className='absolute left-0 bottom-0 text-red-500'>{subjectError}</small>
                            </div>
                            <div className='relative pt-3 pb-4 '>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className={`rounded-2xl px-5 py-3.5 border bg-inherit w-full h-32 resize-none outline-none peer
                                    ${messageError ? 'border-red-500' : 'border-outline dark:border-subtxt-dark' }`}
                                    autoComplete='off'
                                    placeholder=' '
                                    value={formData.message}
                                    onChange={handeInput}
                                ></textarea>
                                <label 
                                    htmlFor="message" 
                                    className={`absolute text-label dark:text-subtxt-dark left-4 duration-200 bg-white
                                    top-0 text-sm peer-focus:text-sm peer-focus:top-0 peer-placeholder-shown:top-[27px] 
                                    peer-placeholder-shown:text-base px-1.5 bg-white dark:bg-midnight
                                    ${messageError ? 'peer-focus:text-red-500' : '' }`}
                                >Message</label>
                                <small className='absolute left-0 bottom-0 text-red-500'>{messageError}</small>
                            </div>
                            <div className='my-5 max-lg:text-center max-lg:mb-10'>
                                <button className="bg-light-red rounded-xl px-8 py-3 text-white font-semibold text-sm lg:text-base cursor-pointer">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;