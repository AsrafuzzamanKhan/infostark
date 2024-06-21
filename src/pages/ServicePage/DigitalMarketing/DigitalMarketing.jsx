import React from 'react'
import { CiMobile1 } from 'react-icons/ci'
import { MdComputer, MdContentPasteGo, MdFindInPage, MdMarkEmailRead, MdOutlineSocialDistance } from 'react-icons/md'
import digitalImg from '../../../assets/digital/digital.jpg'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { VscSymbolKeyword } from 'react-icons/vsc'
const DigitalMarketing = () => {
    return (
        <div className=''>
            <div className='flex flex-col-reverse md:flex-row container mx-auto items-center justify-center gap-8 py-12 lg:py-20 px-[2vw] lg:px-0'>
                <div className='flex-1 flex flex-col gap-y-4 lg:gap-y-7'>
                    <h1 className='text-3xl font-semibold'>Digital Marketing services</h1>
                    <p className='text-gray-400'>Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.</p>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='w-96 rounded-xl shadow-2xl' src={digitalImg} alt="" />
                </div>
            </div>
            <div className='bg-zinc-800 '>
                <div className='container mx-auto py-12 lg:py-20 px-[2vw] lg:px-40'>
                    <div className='text-center py-4 w-full lg:max-w-md  mx-auto flex flex-col gap-4'>
                        <h1 className='text-3xl lg:text-4xl font-semibold '>Check Why You Should Choose Us</h1>
                        <p className='text-gray-400'>Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business.</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
                        <div className='border border-slate-700 rounded p-4 md:p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <MdOutlineSocialDistance size={40} className='text-black' />
                            </div>


                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>Social Marketing</h1>

                            </div>
                        </div>
                        <div className='border border-slate-700 rounded p-4 md:p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <IoBriefcaseOutline size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>SEO Optimization</h1>

                            </div>
                        </div>
                        <div className='border border-slate-700 rounded p-4 md:p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <MdFindInPage size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>One-Page SEO</h1>

                            </div>
                        </div>
                        <div className='border border-slate-700 rounded p-4 md:p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <MdContentPasteGo size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>Content Marketing</h1>

                            </div>
                        </div>
                        <div className='border border-slate-700 rounded p-4 md:p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <MdMarkEmailRead size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>Email Marketing</h1>

                            </div>
                        </div>
                        <div className='border border-slate-700 rounded p-4 md:p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <VscSymbolKeyword size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>Keyword Research</h1>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default DigitalMarketing