import React from 'react'
import './ServiceHero.css'
import { FaMobileButton } from 'react-icons/fa6'
const ServiceHero = () => {
    return (
        <div className='serviceHero relative h-[60vh]'>
            <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70  rounded-lg  '>
            </div>
            <div className=' container mx-auto  pt-24 lg:pt-40 relative'>
                <div className='relative'>
                    <div className='absolute inset-0 flex flex-col gap-y-12 px-[2vw] md:px-0'>
                        <p className='text-xl font-bold text-gray-400'>Our Services</p>
                        <div className='w-full lg:w-[60%]'>
                            <h3 className='text-2xl lg:text-4xl font-bold tracking-wide leading-snug '>We help elevate your brand’s first impression with your potential customers, so it can help you grow your business.</h3>
                        </div>
                        <div>
                            <button className='flex items-center gap-x-1 border border-gray-500  px-4 py-2 rounded-md uppercase tracking-wide text-[#c4ef17] hover:scale-95 duration-300'>
                                Contact us <FaMobileButton
                                /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHero