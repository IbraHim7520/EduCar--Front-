import React from 'react';
import { Link, NavLink } from 'react-router';
import { LuSend } from "react-icons/lu";
const TecherReq = () => {
    return (
        <NavLink to={"teacher-requests"} 
        className={({isActive})=> isActive ? 'flex justify-center bg-blue-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start ': 'flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'}
        >
        <LuSend size={25}/>
        <p className='hidden md:block'>Teacher Request</p>
        </NavLink>
    );
};

export default TecherReq;