import React, { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import WebLogo from "../imgs/logo.webp"
import { Link, NavLink } from 'react-router';
import { IoLogIn } from "react-icons/io5";
import useAuth from '../CustomHooks/useAuth';
import toast from 'react-hot-toast';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { User, UserLogout, setUser , UserRole } = useAuth()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleMenuShow = () => {
        setMenuOpen(!menuOpen);
    };
    const handleUserLogout = () => {
        UserLogout().then(() => {
            setUser(null)
            toast.success("Logout Successfull!")
        })
    }

    return (
        <nav className=" sticky z-50 top-0 w-full px-5 md:px-8 lg:px-12 p-3 flex items-center justify-between  bg-green-50 text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
            <Link to={"/"}>
                <img
                    className=" w-32"
                    src={WebLogo}

                    alt="dummyLogoColored"
                />
            </Link>

            <div className='md:block hidden'>
                <ul className='flex justify-center font-semibold text-sm 2xl:text-lg items-center gap-4'>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>Home</NavLink>
                    <NavLink to={"/get-all-classes"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>All Classes</NavLink>
                    <NavLink to={"/teach-in-here"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>Teach on Skillup</NavLink>
                    {
                        User ?
                            <div className='flex justify-center items-center gap-3'>
                                <div className="relative">
                                    <div className="avatar">
                                        <div onClick={() => setDropdownOpen(!dropdownOpen)} className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                            <img src={User?.photoURL} />
                                        </div>
                                    </div>
                                    {
                                        dropdownOpen && (
                                            <div className="absolute top-12 right-0 bg-white shadow-md rounded-sm w-40 z-50">
                                                <ul className=" space-y-2">
                                                    <li className='px-4 p-2 flex justify-center items-center gap-1'>{User.displayName || "No Name"} <span className='text-xs text-gray-500 '>({UserRole.Role})</span> </li>
                                                    <li>
                                                        <Link to="/dashbord" className="block px-4 p-2 hover:bg-gray-100">Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <button onClick={handleUserLogout} className='btn w-full btn-sm lg:btn-md bg-green-500 text-white'>Logout</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }

                                </div>
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
                    menuOpen ? <RiMenuUnfold4Fill size={25} /> : <TfiMenu size={25} />
                }
            </button>

            {/* Mobile menu */}
            <div
                id="mobileMen"
                className={`mobile-menu absolute top-[70px] left-0 w-full bg-base-300 shadow-xl shadow-green-200 p-6 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} md:hidden`}
            >
                <ul className='flex flex-col justify-center font-semibold xl:text-lg items-start gap-4'>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>Home</NavLink>
                    <NavLink to={"/get-all-classes"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>All Classes</NavLink>
                    <NavLink to={"/teach-in-here"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>Teach on Skillup</NavLink>
                    {
                        User ?
                            <div className='flex justify-center items-center gap-3'>
                                <div className="relative">
                                    <div className="avatar">
                                        <div onClick={() => setDropdownOpen(!dropdownOpen)} className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                            <img src={User?.photoURL} />
                                        </div>
                                    </div>
                                    {
                                        dropdownOpen && (
                                            <div className="absolute top-12  bg-white shadow-md rounded-sm w-40 z-50">
                                                <ul className=" space-y-2">
                                                     <li className='px-4 p-2 flex justify-center gap-1 items-center '>{User.displayName || "No Name"} <span className='text-xs text-gray-500 '>({UserRole.Role})</span> </li>
                                                    <li>
                                                        <Link to="/dashbord" className="block px-4 p-2 hover:bg-gray-100">Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <button onClick={handleUserLogout} className='btn w-full btn-sm lg:btn-md bg-green-500 text-white'>Logout</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }

                                </div>
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


        </nav>
    );
};

export default Nav;
