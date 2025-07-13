import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router';
const Users = () => {
    return (
    <Link to={"all-users"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'>
        <FaUsers size={25}></FaUsers>
        <p className='hidden md:block'>All Users</p>
    </Link>
    );
};

export default Users;