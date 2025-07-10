import React from 'react';
import { Link } from 'react-router';
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <Link to={"my-profile"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <CgProfile size={25} />
        <p className='hidden md:block'>My Profile</p>
        </Link>
    );
};

export default Profile;