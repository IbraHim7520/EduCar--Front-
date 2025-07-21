import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFileVideo } from "react-icons/fa";
const MyCls = () => {
    return (
        <NavLink to={"my-classes"} 
        className={({isActive})=> isActive ? 'flex justify-center bg-blue-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start ': 'flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'}
        >
        <FaFileVideo size={25}/>
        <p className='hidden md:block'>My Classes</p>
        </NavLink>
    );
};

export default MyCls;