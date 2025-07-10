import React from 'react';
import { MdClass } from "react-icons/md";
import { Link } from 'react-router';
const MyEnrollClass = () => {
    return (
        <Link to={"my-enrollment"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <MdClass size={25}/>
        <p className='hidden md:block'>My Enrolled Class</p>
        </Link>
    );
};

export default MyEnrollClass;