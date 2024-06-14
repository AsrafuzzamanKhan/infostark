import React from 'react'
import webImg from '../../../assets/web/web.png';
import { GrBasket } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { FaMobileAlt, FaNetworkWired } from 'react-icons/fa';
import { SiCraftcms } from 'react-icons/si';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { LuComputer } from 'react-icons/lu';
import { PiHourglassSimpleLow } from 'react-icons/pi';
const Web = () => {
    return (
        <div>

            <div className='flex flex-col-reverse md:flex-row container mx-auto items-center justify-center gap-8 py-12 lg:py-20 px-[2vw] lg:px-0'>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='w-96 rounded-xl shadow-2xl' src={webImg} alt="" />
                </div>
                <div className='flex-1 flex flex-col gap-y-4 lg:gap-y-7'>
                    <h1 className='text-3xl font-semibold'>Web development services</h1>
                    <p className='text-gray-400'>Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS..</p>
                </div>

            </div>


            <div className='bg-zinc-800 '>
                <div className='container mx-auto py-12 lg:py-20 px-[2vw] lg:px-40'>
                    <div className='text-center py-4 w-full lg:max-w-md  mx-auto flex flex-col gap-4'>
                        <h1 className='text-3xl lg:text-4xl font-semibold '>Achieve your business goals with web development solutions</h1>
                        <p className='text-gray-400'>Our battle-tested developers specialize in a wide range of web development services. Here are some of the solutions that we can deliver for you.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-12'>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <TbWorld size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Websites.</span> A well-designed website is a powerful marketing and communication tool that helps build trust and generate leads.</p>
                            </div>
                        </div>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <GrBasket size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Ecommerce.</span> With eCommerce solutions, businesses can operate 24 hours a day, 7 days a week, and reach customers in any time zone.</p>
                            </div>
                        </div>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <FaMobileAlt size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Web Applications.</span>  Web applications can reach a global audience. They're interactive and engaging, so can easily hold users' attention.</p>
                            </div>
                        </div>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <SiCraftcms size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Content Management System.</span>  A dedicated CMS designed to the specific needs of your business will save time and money by optimizing internal workflows.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div >
            <div className='bg-zinc-800 '>
                <div className='container mx-auto pb-12 lg:pb-20 px-[2vw] lg:px-40'>
                    <div className='text-center py-4 w-full lg:max-w-md  mx-auto flex flex-col gap-4'>
                        <h1 className='text-3xl lg:text-4xl font-semibold '>Which technologies will bring maximum value to your business?</h1>
                        <p className='text-gray-400'>Solve customer problems by choosing cutting-edge technologies for your tech stack. Take your business to the next level with the right solutions tailored to your own requirements.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-12'>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <HiOutlineComputerDesktop size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Frontend Development.</span> We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.</p>
                            </div>
                        </div>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <FaNetworkWired size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Backend Development. </span> We use server-side technologies like Python, Ruby on Rails, and Node.js for prototyping and development, producing fast and scalable web apps.</p>
                            </div>
                        </div>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <LuComputer size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Full Stack Development.</span>  We deliver end-to-end web development, combining frontend and backend solutions and other technologies necessary to make your product a success.
                                </p>
                            </div>
                        </div>
                        <div className='rounded p-8 flex flex-col gap-6 bg-slate-900 shadow-xl'>
                            <div className='w-12 h-12 flex justify-center items-center p-2 rounded-full bg-[#c4ef17]'>
                                <PiHourglassSimpleLow size={40} className='text-black' />
                            </div>
                            <div className='flex flex-col gap-y-2'>

                                <p className='text-gray-400'><span className='font-semibold'>Low-Code Development.</span>  We also specialize in building no-code and low-code web solutions that allow clients to save time and money. We use platforms like Webflow or Mendix.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div >
    )
}

export default Web