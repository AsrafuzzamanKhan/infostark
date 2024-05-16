import React, { useState } from 'react'
import { motion } from 'framer-motion';
import image1 from '../../assets/testimonial/one.png'
import image2 from '../../assets/testimonial/two.png'
import image3 from '../../assets/testimonial/three.png'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
// import './HomeTestimonial.css'
const HomeTestimonial = () => {
    const transition = { type: 'spring', duration: 3 };
    const [selected, setSelected] = useState(0);
    const testimonialsData = [
        {
            image: image1,
            review:
                'I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!',
            name: 'MATHEW HENDRICKSON',
            status: 'ENTREPRENEUR',
        },
        {
            image: image2,
            review:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
            name: 'JOHN KEVIN',
            status: 'COACH',
        },
        {
            image: image3,
            review:
                ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
            name: 'FRANKLIN',
            status: 'CUSTOMER',
        },
    ];
    const tLength = testimonialsData.length;

    return (
        <div className="bg-zinc-900 text-white" >
            <div className='container mx-auto px-[2vw] md:px-0 py-10'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                    <div className="flex-1 flex flex-col gap-y-12">
                        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
                        <span className="stroke-text">WHAT THEY</span>
                        <span>SAY ABOUT US</span>

                        <motion.span
                            key={selected}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={transition}
                        >
                            {testimonialsData[selected].review}
                        </motion.span>

                        <span>
                            <span style={{ color: '#c4ef17' }}>
                                {testimonialsData[selected].name}
                            </span>{' '}
                            - {testimonialsData[selected].status}
                        </span>
                    </div>

                    <div className='flex-1 relative z-0 mb-[100px] px-[8vw] md:px-0 '>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ ...transition, duration: 2 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className='relative left-0 md:left-[20%]  bg-[#707c41] rounded w-64 h-72' alt="" />
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ ...transition, duration: 2 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            src={testimonialsData[selected].image} className=' absolute w-64 h-72 object-cover rounded left-[25%] bottom-[-15%]' alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 py-4">
                    <IoMdArrowRoundBack size={30} className='cursor-pointer hover:text-[#c4ef17] duration-300'
                        onClick={() =>
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }


                    />
                    <IoMdArrowRoundForward size={30} className='cursor-pointer hover:text-[#c4ef17] duration-300'
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}

                    />

                </div>
            </div>

        </div>

    );
}

export default HomeTestimonial