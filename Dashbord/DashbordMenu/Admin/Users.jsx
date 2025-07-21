import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
const Users = () => {
    return (
    <NavLink to={"all-users"} 
    className={({isActive})=> isActive ? 'flex justify-center bg-blue-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start ': 'flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'}
    >
        <FaUsers size={25}></FaUsers>
        <p className='hidden md:block'>All Users</p>
    </NavLink>
    );
};

export default Users;