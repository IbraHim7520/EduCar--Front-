import React, { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import WebLogo from "../imgs/logo.webp"
import { Link, NavLink } from 'react-router';
import { IoLogIn } from "react-icons/io5";
import useAuth from '../CustomHooks/useAuth';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {User} = useAuth()

    const handleMenuShow = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
            <a href="#">
                <img
                    className=" w-32"
                    src={WebLogo}

                    alt="dummyLogoColored"
                />
            </a>

            <div className='md:block hidden'>
                <ul className='flex justify-center font-semibold xl:text-lg items-center gap-4'>
                    <NavLink>Home</NavLink>
                    <NavLink>All Classes</NavLink>
                    <NavLink>Teach on Skillup</NavLink>
                    {
                        User ? 
                        <div className='flex justify-center items-center gap-3'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                    </div>
                                </div>
                                <button className='btn btn-sm lg:btn-md bg-green-500 text-white'>Logout</button>
                        </div>
                        :

                            <div className='md:flex hidden items-center justify-center gap-3'>
                                <Link to={'/login'} className='flex hover:cursor-pointer justify- items-center gap-2'>
                                    <IoLogIn size={25} /><p className='font-semibold'>Login</p>
                                </Link>
                                <Link to={'/signup'} className='btn  bg-transparent rounded-full px-12 '>Get Started</Link>
                            </div>
                    }
                </ul>
            </div>



            <button
                onClick={handleMenuShow}
                aria-label="menu-btn"
                type="button"
                className="menu-btn inline-block md:hidden active:scale-90 transition"
            >
                {
                    menuOpen ? <RiMenuUnfold4Fill size={25}/> : <TfiMenu size={25}/>
                }
            </button>

            {/* Mobile menu */}
            <div
                id="mobileMen"
                className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} md:hidden`}
            >
                <ul className="flex flex-col space-y-4 text-lg">
                    <li><a href="#" className="text-sm">Home</a></li>
                    <li><a href="#" className="text-sm">Services</a></li>
                    <li><a href="#" className="text-sm">Portfolio</a></li>
                    <li><a href="#" className="text-sm">Pricing</a></li>
                    <li>
                      <Link to={'/login'} className='flex hover:cursor-pointer justify-center items-center gap-2'>
                            <IoLogIn size={25}/><p className='font-semibold'>Login</p>
                        </Link>
                    </li>
                    <li>
                      <Link to={'/signup'} className='btn  bg-transparent rounded-full px-12 '>Get Started</Link> 
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Nav;
