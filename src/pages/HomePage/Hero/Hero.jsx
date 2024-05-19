import React, { useEffect, useState } from 'react';
import "./hero.css"
import { motion } from "framer-motion";
import { BsArrowDownRightSquareFill } from "react-icons/bs";

const Hero = () => {
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className=' w-full bg-zinc-900 text-white pb-12 pt-24 lg:pt-40  '>
            <div className="container mx-auto mt-0 md:mt-12">
                <div className='flex flex-col gap-y-12 px-[2vw] md:px-0'>
                    <div className=''>
                        <div className=''>
                            <span className='text-[34px] md:text-7xl font-bold uppercase leading-normal tracking-tighter'>We are </span>
                            <span className='text-[#c4ef17] text-[34px] md:text-7xl font-bold uppercase tracking-tighter '>Creative</span>
                        </div>
                        <div className='flex gap-2'>
                            {/* <img className='arrowImg w-12 lg:w-20 bg-red-[#c4ef17] ' src={arrow} alt="" /> */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: mobile ? '12vw' : '6vw' }}
                                whileInView={{ left: '8px' }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className=" rounded-lg bg-[#c4ef17] flex items-center justify-center ">
                                <BsArrowDownRightSquareFill className='text-black text-3xl lg:text-5xl ' />
                            </motion.div>
                            <div className='text-[34px] md:text-7xl font-bold uppercase tracking-tighter '>Digital agency</div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%]'>
                        <p>We are a full-service website design, development and digital marketing company specializing in SEO, content marketing that grows brands.</p>
                    </div>
                    <div className='flex gap-4 w-full md:w-[50%]'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-3xl font-bold'>12+</p>
                            <p>Years Of Experience</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-3xl font-bold'>15k+</p>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;