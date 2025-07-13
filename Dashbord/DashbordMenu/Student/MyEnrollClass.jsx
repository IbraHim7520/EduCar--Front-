import React from 'react';
import { MdClass } from "react-icons/md";
import { Link } from 'react-router';
const MyEnrollClass = () => {
    return (
        <Link to={"my-enrollment"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start '>
        <MdClass size={25}/>
        <p className='hidden md:block'>My Enrolled Class</p>
        </Link>
    );
};

export default MyEnrollClass;