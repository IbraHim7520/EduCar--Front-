import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router';
const Users = () => {
    return (
    <Link to={"my-enrollment"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <FaUsers size={25}></FaUsers>
        <p className='hidden md:block'>All Users</p>
    </Link>
    );
};

export default Users;