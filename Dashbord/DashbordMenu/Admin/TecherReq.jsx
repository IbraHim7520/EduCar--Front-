import React from 'react';
import { Link } from 'react-router';
import { LuSend } from "react-icons/lu";
const TecherReq = () => {
    return (
        <Link to={"my-enrollment"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <LuSend size={25}/>
        <p className='hidden md:block'>Teacher Request</p>
        </Link>
    );
};

export default TecherReq;