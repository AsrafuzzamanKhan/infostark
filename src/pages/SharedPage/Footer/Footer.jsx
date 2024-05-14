import React from 'react'
import './Footer.css'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { LuMapPin } from "react-icons/lu";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer bg-zinc-900 text-white'>
            <div className='container mx-auto py-12'>
                <div className='flex flex-col md:flex-row px-[2vw] md:px-0 gap-8'>
                    <div className='flex-1 flex flex-col gap-y-5'>
                        <div><img src={logo} alt="" /></div>
                        <div className="flex flex-col gap-y-2">
                            <div className='flex gap-2 items-center'>
                                <LuMapPin />
                                Rampura, Dhaka, Bangladesh.
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdCall />
                                +88-01533410928
                            </div>
                            <div className='flex gap-2 items-center'>
                                <CiMail />
                                contact@infostark.com
                            </div>
                        </div>
                        <div className="">
                            <button className='uppercase border px-4 py-2 tracking-tighter rounded-md'> book a call now</button>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col gap-y-5'>

                        <div className="">
                            <h5 className='text-2xl font-semibold'>Discover</h5>
                        </div>
                        <div className="">
                            <ul className='flex flex-col gap-y-2'>
                                <li>
                                    <Link href="about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link href="client-feedback">Award Winning</Link>
                                </li>
                                <li>
                                    <Link href="blog">News & Blog</Link>
                                </li>
                                <li>
                                    <Link href="contact-us">Careers</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='flex-1 flex flex-col gap-y-5'>
                        <div className="">
                            <h5 className='text-2xl font-semibold tracking-tight'>Subscribe our newsletter</h5>
                        </div>
                        <div className=" flex flex-col gap-y-3">
                            <p className=''>
                                Welcome to our digital agency We specialize in helping
                                business most like yours succeed online.
                            </p>
                            <div className="footer__single-form">
                                <form >
                                    <div className="flex border rounded w-[65%]">
                                        <input
                                            className='border-0 bg-transparent p-4'
                                            type="email"
                                            name="subscribe-news"
                                            id="subscribeNews"
                                            placeholder="Enter Your Email"
                                            required
                                        />
                                        {/* <button type="submit" className="subscribe">
                                            <IoPaperPlaneOutline />
                                        </button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copy write  */}
                <div className="flex items-center justify-between mt-10 px-[2vw] md:px-0">
                    <div>
                        <p>
                            Copyright &copy;
                            <span id="copyYear">{currentYear}</span> by INFOStark
                            . All Rights Reserved
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/" target="_blank">
                            <CiFacebook size={35} />
                        </Link>

                        <Link href="https://www.pinterest.com/" target="_blank">
                            <TiSocialLinkedinCircular size={35} />

                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <FaInstagram size={30} />
                        </Link>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer