import React from 'react';
import { Link } from 'react-router';
import { TiThMenu } from "react-icons/ti";
const AllClass = () => {
    return (
        <Link to={"my-enrollment"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <TiThMenu size={25}/>
        <p className='hidden md:block'>All Classes</p>
        </Link>
    );
};

export default AllClass;