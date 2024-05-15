import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    // set toggleMenu

    const toggleMenu = () => {
        setOpen(!open)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {

            window.addEventListener('scroll', handleScroll);

        }
    }, []);

    const sidebarRef = useRef(null);


    useEffect(() => {
        // Function to handle click outside of the sidebar
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setOpen]);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About Us", path: "aboutUs" },
        { link: "Services", path: "services" },
        { link: "Projects", path: "projects" },
        { link: "Blog", path: "blogs" },
    ]
    return (
        <header className="w-full fixed top-0 left-0 right-0 z-10  ">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0  duration-500 ease-in-out bg-black text-white border-b border-zinc-800' : ''}`} ref={sidebarRef}>
                <div className='container mx-auto flex items-center justify-between'>
                    <div>
                        <Link to='/'> <img src={logo} alt="logo" className='w-28 lg:w-fit' /></Link>
                    </div>
                    {/* navbar for large device  */}
                    <ul className='md:flex space-x-6 lg:space-x-12 hidden '>
                        {navItems.map((item, i) => (
                            < NavLink key={i} to={item.path} offset={-100} className='block  text-white hover:text-[#d0f053] first:font-medium'>{item.link}</NavLink>
                        ))}

                    </ul>

                    <div className='hidden md:flex items-center text-white border px-4 py-2 rounded-sm border-gray-500'>
                        Lets talk
                    </div>

                    {/* menu btn for mobile  */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none focus:text-gray-600'> {!open && <GiHamburgerMenu size={20} className='text-white' />}
                        </button>
                    </div>

                </div>

                {/* nav item for mobile  */}
                <div className={`${open ? 'right-0' : '-right-full'} space-y-4 px-4  py-7 bg-slate-800 text-white w-[80%] fixed top-0 bottom-0 z-999 h-screen transition-all duration-700 overflow-auto `}>
                    <button
                        onClick={toggleMenu}
                        className='focus:outline-none focus:text-gray-600 bg-transparent fixed'> {open && <FaXmark size={20} />}
                    </button>
                    {navItems.map((item, i) => (
                        < NavLink key={i} to={item.path} offset={-100} className='flex flex-col pt-10 text-center  text-white hover:text-gray-400 bg-transparent'>{item.link}</NavLink>
                    ))}

                    <div className=''>
                        <p className='text-center my-12 text-white border px-4 py-2 rounded-sm border-gray-500'> Lets talk</p>
                    </div>

                </div>
            </nav>
        </header >
    )
}

export default Header