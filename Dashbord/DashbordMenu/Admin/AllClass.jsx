import React from 'react';
import { Link } from 'react-router';
import { TiThMenu } from "react-icons/ti";
const AllClass = () => {
    return (
        <Link to={"all-classes"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'>
        <TiThMenu size={25}/>
        <p className='hidden md:block'>All Classes</p>
        </Link>
    );
};

export default AllClass;