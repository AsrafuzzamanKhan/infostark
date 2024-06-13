import React from 'react'
import uiImg from '../../../assets/ui/ui.jpg';
import { MdComputer } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
const UiDesign = () => {
    return (
        <div className=''>
            <div className='flex flex-col-reverse md:flex-row container mx-auto items-center justify-center gap-8 py-12 lg:py-20 px-[2vw] lg:px-0'>
                <div className='flex-1 flex flex-col gap-y-4 lg:gap-y-7'>
                    <h1 className='text-3xl font-semibold'>UI/UX design services</h1>
                    <p className='text-gray-400'>Powered by first-class specialists, INFOStark provides you with top-notch UI and UX design services for web and mobile applications. We know how to efficiently engage your audience with your product. The project’s architecture and user needs are our top priorities that allow us to organize clear logical user flows to get a unique interface.</p>
                </div>
                <div className='flex-1'>
                    <img className='w-96 rounded-xl shadow-2xl' src={uiImg} alt="" />
                </div>
            </div>
            <div className='bg-zinc-800 '>
                <div className='container mx-auto py-12 lg:py-20 px-[2vw] lg:px-40'>
                    <div className='text-center py-4 w-full lg:max-w-md  mx-auto flex flex-col gap-4'>
                        <h1 className='text-3xl lg:text-4xl font-semibold '>UX & UI design services we provide</h1>
                        <p className='text-gray-400'>Successful UI/UX design is a result of mixing up art, technology, experience, strategy, and engineering. Here are the UI and UX services our team can assist you with.</p>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-8 py-12'>
                        <div className='border border-slate-700 rounded p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <MdComputer size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>Web app design</h1>
                                <p className='text-gray-400'>Creative and understandable website design significantly increases the chances of a visitor taking the target action we need. There must be no extra distractions that will influence the website navigation. The design’s role is to create a likable atmosphere for the selected product or service and encourage users to make a choice.</p>
                            </div>
                        </div>
                        <div className='border border-slate-700 rounded p-8 flex flex-col gap-6'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <CiMobile1 size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl font-semibold'>Mobile app design</h1>
                                <p className='text-gray-400'>Mobile UX design defines the correct user flow of the app. How many actions will the user take to reach what they want? What additional features will they face on this path (read reviews, specifications, check photos, rate, watch ads)? How to combine all this and not confuse the user? Our team can answer these questions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-slate-700 rounded p-8 flex items-center justify-center gap-6' >
                        <div className=''>
                            <h1 className='text-3xl font-semibold w-full lg:max-w-xl'>If you need UI design services for your web or mobile app, we are here to help</h1>
                        </div>
                        <div className='bg-[#c4ef17] p-4 rounded'>
                            <button className='text-black font-semibold'>Drop a Message</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UiDesign