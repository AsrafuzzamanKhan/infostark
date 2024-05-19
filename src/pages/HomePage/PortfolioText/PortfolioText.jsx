import React from 'react';
import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa6";

const PortfolioText = () => {
    return (
        <section className='bg-zinc-900 text-white '>
            <div className="w-full py-10 bg-[#222] opacity-[0.3] shadow-md">
                <Marquee speed={120} className='overflow-hidden'>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className=" text-3xl lg:text-5xl  uppercase font-semibold tracking-tight ">Ui/ UX Design</div>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-3xl lg:text-5xl  uppercase font-semibold tracking-tight">Website development</div>

                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-3xl lg:text-5xl  uppercase font-semibold tracking-tight ">Search Engine Optimaization (SEO)</div>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-3xl lg:text-5xl  uppercase font-semibold tracking-tight ">Social Media Marketing</div>
                </Marquee >
            </div >

        </section >
    )
}

export default PortfolioText