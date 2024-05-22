import React from 'react'
import './Process.css'
import { FaSearchPlus } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { TfiVideoClapper } from "react-icons/tfi";
import { BsSpeedometer } from "react-icons/bs";
const Process = () => {
    const process = [
        {
            id: 1,
            title: 'Market Research',
            description: 'A deep market research is executed to find essential information about competitors and existing products.',
            image: <FaSearchPlus />

        },
        {
            id: 2,
            title: 'Brand Strategy',
            description: 'A cohesive brand strategy is created to help communicate with the customers more clearly.',
            image: <FaUserFriends />

        },
        {
            id: 3,
            title: 'UI Design',
            description: 'Aesthetically pleasing user interface is crafted to influence great first impression and inspire trust.',
            image: <SiAffinitydesigner />

        },
        {
            id: 4,
            title: 'Web Development',
            description: 'The website is comprehensively developed with modern technology and tested on various devices.',
            image: <CgWebsite />

        },
        {
            id: 5,
            title: 'Content Creation',
            description: 'Excellent and engaging content is produced to grab the attention of users.',
            image: <TfiVideoClapper />

        },
        {
            id: 6,
            title: 'Maintenance',
            description: 'After launching the website yearly maintenance service is provided to avoid further inconvenience.',
            image: <BsSpeedometer />

        },
    ]
    return (
        <section className=' py-12 md:py-20 bg-fixed  ' >

            <div className='container mx-auto px-[2vw] md:px-0'>
                <div className='flex flex-col gap-y-8 md:gap-y-20'>
                    <div className='flex flex-col gap-6'>
                        <h4 className='text-lg font-medium text-gray-400'>Our Process</h4>
                        <h1 className='text-4xl font-semibold'>
                            Each website is meticulously crafted.
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            process.map(p => <div key={p.id}>
                                <div className='flex gap-4 p-4 md:p-0'>
                                    <div className='text-3xl'>{p.image}</div>
                                    <div>
                                        <h1 className='text-2xl font-medium'>{p.title}</h1>
                                        <p className='text-gray-400'>{p.description}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Process