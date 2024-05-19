import React from 'react'
import { FaMobileButton } from "react-icons/fa6";

export const AboutDetails = () => {
    return (
        <div className='container mx-auto py-12 lg:py-20'>
            <div className='flex flex-col md:flex-row items-center gap-6 px-[2vw] md:px-0'>
                <div className='flex-1'>
                    <h1 className='text-3xl lg:text-5xl font-semibold tracking-tight leading-2 text-gray-400'>INFOStark - <span className='text-2xl lg:text-4xl'>Grow Your Business</span>
                    </h1>
                </div>
                <div className='flex-1 '>
                    <p className='leading-6 lg:leading-7 traking-tight lg:tracking-wide mb-10'>
                        We are a specialized web design agency committed to make world-class websites in terms of design, functionality and usability. We help create compelling brand image by designing impactful website that not only looks great but helps grow a business. All of our websites are designed with perfection, keeping international design trends and standards. Additionally, we also provide copywriting, photography and video production services along with our web design and development services. Let us take your brand impression to the next level.
                    </p>
                    <button className='flex items-center gap-x-1 border border-gray-500  px-4 py-2 rounded-md uppercase tracking-wide text-[#c4ef17] hover:scale-95 duration-300'>
                        Contact us <FaMobileButton
                        /></button>
                </div>
            </div>
        </div>
    )
}
