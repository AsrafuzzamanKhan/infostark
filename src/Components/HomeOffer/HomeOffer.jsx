import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import { MdArrowOutward } from "react-icons/md";

const HomeOffer = () => {
    return (
        <div className='bg-zinc-900 text-white py-8 md:py-20'>
            <div className='container mx-auto px-[2vw] md:px-0'>

                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* text */}
                    <div className='flex-1 flex flex-col gap-y-10 px-[2vw] md:px-0 mr-0 lg:mr-28'>
                        <div className=''>
                            <button className='flex items-center gap-x-1 border border-gray-500  px-4 py-2 rounded-md uppercase tracking-wide text-[#c4ef17]'>
                                WHAT WE OFFER <LuArrowUpRight /></button>
                        </div>
                        <div className=''>
                            <h1 className='text-3xl xl:text-6xl font-bold tracking-wide leading-tight'>Giving Your Business Some Great Ideas</h1>
                        </div>
                        <div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation on the runway heading towards a streamlined cloud solution going forward porttitor dictum sapien..</p>
                        </div>

                        <div>
                            <button className='border border-[#c4ef17] px-6 py-3 rounded-md uppercase tracking-wide text-[#c4ef17]'>View all service</button>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col  gap-y-12'>

                        <div className='flex flex-col gap-2'>
                            <div>
                                <button className='flex items-center gap-1 border px-3 py-1 rounded-full'><p>01</p>
                                    <MdArrowOutward /></button>
                            </div>

                            <h1 className='text-5xl text-gray-600  font-medium'>UI/UX Experience</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <button className='flex items-center gap-1 border px-3 py-1 rounded-full'><p>02</p>
                                    <MdArrowOutward /></button>
                            </div>

                            <h1 className='text-5xl text-gray-600 font-medium'>Web Development</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <button className='flex items-center gap-1 border px-3 py-1 rounded-full'><p>03</p>
                                    <MdArrowOutward /></button>
                            </div>
                            <div className='text-5xl text-gray-600 font-medium'>Digital Marketing</div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <button className='flex items-center gap-1 border px-3 py-1 rounded-full'>
                                    <p>04</p>
                                    <MdArrowOutward />
                                </button>
                            </div>
                            <div className='text-5xl text-gray-600 font-medium'>Product Design</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeOffer