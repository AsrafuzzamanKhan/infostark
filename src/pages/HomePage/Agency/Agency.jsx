import React from 'react'
import { motion } from 'framer-motion';
import imageOne from '../../../assets/agency/image-one.png'
import imagetwo from '../../../assets/agency/image-two.png'
import { LuArrowUpRight } from "react-icons/lu";

const Agency = () => {
    const transition = { type: 'spring', duration: 3 };
    return (
        <section className='bg-zinc-900 text-white'>
            <div className='container mx-auto py-6 lg:py-20'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                    {/* image  */}
                    <div className='flex-1 relative z-0 mb-[100px] px-[8vw] md:px-0 '>
                        <motion.img
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ ...transition, duration: 2 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            src={imageOne} className='relative rounded-md left-[-15%] md:left-0 w-64 xl:w-96' alt="" />
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ ...transition, duration: 2 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            src={imagetwo} className=' absolute rounded-md  w-64 xl:w-96 left-[15%] md:left-[25%] bottom-[-15%]' alt="" />
                    </div>
                    {/* text */}
                    <div className='flex-1 flex flex-col gap-y-10 px-[2vw] md:px-0'>
                        <div className=''>
                            <button className='flex items-center gap-x-1 border border-gray-500  px-4 py-2 rounded-md uppercase tracking-wide text-[#c4ef17]'>
                                Welcome <LuArrowUpRight /></button>
                        </div>
                        <div>
                            <h1 className='text-3xl xl:text-6xl font-bold tracking-wide leading-tight'>We Are Digital Creative
                                Agency In London</h1>
                        </div>
                        <div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation on the runway heading towards a streamlined cloud solution going forward porttitor dictum sapien.</p>
                        </div>
                        {/* progress bar  */}
                        <div className='flex  flex-col gap-y-6'>
                            <div className='flex flex-col gap-y-2'>
                                <div>Website design</div>
                                <div className="bg-gray-500 rounded">
                                    <div className="rounded text-center bg-white text-black" style={{ width: "75%" }}>75%</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <div>Digital Marketing</div>
                                <div className="bg-gray-500 rounded">
                                    <div className="rounded text-center bg-white text-black" style={{ width: "90%" }}>90%</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='border border-[#c4ef17] px-6 py-3 rounded-md uppercase tracking-wide text-[#c4ef17]'>Know More</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}

export default Agency