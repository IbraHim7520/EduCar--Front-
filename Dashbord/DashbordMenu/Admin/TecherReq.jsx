import React from 'react';
import { Link } from 'react-router';
import { LuSend } from "react-icons/lu";
const TecherReq = () => {
    return (
        <Link to={"teacher-requests"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'>
        <LuSend size={25}/>
        <p className='hidden md:block'>Teacher Request</p>
        </Link>
    );
};

export default TecherReq;