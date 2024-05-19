import React from 'react'
import './AboutMarquee.css'
import Marquee from "react-fast-marquee";
import { FaMobileButton, FaRegStar } from "react-icons/fa6";
const AboutMarquee = () => {
    return (
        <div>
            <div className='about-marquee bg-fixed py-20 '>
                <Marquee speed={120} className='overflow-hidden'>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className=" text-3xl lg:text-5xl  uppercase font-semibold tracking-tight ">Think Different</div>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-3xl lg:text-5xl  uppercase font-semibold tracking-tight">Think Different</div>

                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-3xl lg:text-5xl  uppercase font-semibold tracking-tight ">Think Different</div>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-3xl lg:text-5xl  uppercase font-semibold tracking-tight ">Think Different</div>
                </Marquee >
            </div>
            <div className='container mx-auto flex flex-col gap-y-6 lg:gap-y-12 py-20 px-[2vw] md:px-0'>
                <div className='text-2xl leading-snug w-full lg:text-5xl lg:w-[60%] lg:leading-10 font-semibold text-gray-400'>
                    Don't wait any longer, take control of your brand today.
                </div>
                <div className=''>
                    <div className='flex-1'>
                        <p className='leading-6 lg:leading-7 traking-tight lg:tracking-wide mb-10'>
                            Get a finely crafted website for your business and make an impactful connection with your customers.
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center lg:justify-end'>
                        <button className='flex items-center gap-x-1 border border-gray-500  px-4 py-2 rounded-md uppercase tracking-wide text-[#c4ef17] hover:scale-95 duration-300'>
                            Contact us <FaMobileButton
                            /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMarquee