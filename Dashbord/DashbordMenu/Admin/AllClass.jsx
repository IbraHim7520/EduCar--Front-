import React from 'react';
import { Link, NavLink } from 'react-router';
import { TiThMenu } from "react-icons/ti";
const AllClass = () => {
    return (
        <NavLink to={"all-classes"} 
        className={({isActive})=> isActive ? 'flex justify-center bg-blue-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start ': 'flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'}
        >
        <TiThMenu size={25}/>
        <p className='hidden md:block'>All Classes</p>
        </NavLink>
    );
};

export default AllClass;