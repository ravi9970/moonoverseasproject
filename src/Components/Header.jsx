
import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

let Links = [
    { name: "HOME", link: "/Home" },
    { name: "ABOUTUS", link: "/AboutUs" },
    { name: "PROJECTS", link: "/Projects" },
    { name: "SUCCESS STORIES", link: "/Success STORIES" },
    { name: "CAUSES", link: "/Causes" },
    { name: "PRESS", link: "/Press" },
    { name: "CONTACTUS", link: "/Contact Us" },


];


const Header = () =>
{
    let [open, setOpen] = useState(false);


 return (
        <>
            <div className="container mx-auto">
                <div className='shadow-md w-full top-0 left-0'>
                    <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
                        {/* logo section */}
                        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                            <img src="https://moonoverseas.in/wp-content/uploads/2019/07/logo.png" />
                        </div>


                        {/* Menu icon */}
                        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6  cursor-pointer md:hidden w-7 h-7'>
                            {
                                open ? <XMarkIcon className="md:flex md:items-center z-[1] md:z-auto" /> : <Bars3BottomRightIcon className="" />
                            }
                        </div>
                        {/* linke items */}
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                            {
                                Links.map((link) => (
                                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                                        <a href={link.link} className=' hover:text-amber-600 duration-500 font-mono'>{link.name}</a>
                                    </li>))
                            }
                            <button className=' font-mono btn bg-orange-500 hover:bg-[#000] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static animate-pulse'>LOGIN</button>
                        </ul>
                        {/* button */}
                    </div>
                </div>

            </div>

        </>
    )
};

export default Header;