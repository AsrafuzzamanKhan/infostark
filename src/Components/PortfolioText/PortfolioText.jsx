import React from 'react';
import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa6";

const PortfolioText = () => {
    return (
        <section className='bg-zinc-900 text-white '>
            <div className="w-full py-10 bg-[rgb(0,77,67)] ">
                <Marquee speed={120} className='overflow-hidden'>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-6xl  uppercase font-semibold tracking-tighter ">Ui/ UX Design</div>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-6xl  uppercase font-semibold tracking-tighter">Website development</div>

                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-6xl  uppercase font-semibold tracking-tighter ">Search Engine Optimaization (SEO)</div>
                    <div className='px-10 text-4xl '><FaRegStar /></div>
                    <div className="text-6xl  uppercase font-semibold tracking-tighter ">Social Media Marketing</div>
                </Marquee >
            </div >

        </section >
    )
}

export default PortfolioText