import React from 'react';
import { Link } from 'react-router';
import { FaFileVideo } from "react-icons/fa";
const MyCls = () => {
    return (
        <Link to={"my-classes"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'>
        <FaFileVideo size={25}/>
        <p className='hidden md:block'>My Classes</p>
        </Link>
    );
};

export default MyCls;