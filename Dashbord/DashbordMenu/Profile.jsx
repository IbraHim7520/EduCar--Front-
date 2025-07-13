import React from 'react';
import { Link } from 'react-router';
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <Link to={"my-profile"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'>
        <CgProfile size={25} />
        <p className='hidden md:block'>My Profile</p>
        </Link>
    );
};

export default Profile;