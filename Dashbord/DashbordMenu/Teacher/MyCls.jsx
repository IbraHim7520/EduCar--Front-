import React from 'react';
import { Link } from 'react-router';
import { FaFileVideo } from "react-icons/fa";
const MyCls = () => {
    return (
        <Link to={"my-enrollment"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <FaFileVideo size={25}/>
        <p className='hidden md:block'>My Classes</p>
        </Link>
    );
};

export default MyCls;