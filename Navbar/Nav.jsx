import React, { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import WebLogo from "../imgs/logo.webp"
import { NavLink } from 'react-router';
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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

            <ul className="md:flex hidden items-center gap-5">
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            </ul>
            <button
                type="button"
                className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
            >
                Get started
            </button>

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
                </ul>

                <button
                    type="button"
                    className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
                >
                    Get started
                </button>
            </div>
        </nav>
    );
};

export default Nav;
