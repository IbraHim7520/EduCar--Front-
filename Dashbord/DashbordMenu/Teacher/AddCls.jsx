import React from 'react';
import { Link } from 'react-router';
import { MdAddBox } from "react-icons/md";
const AddCls = () => {
    return (
        <Link to={"my-enrollment"} className='flex mt-2 bg-green-200 w-fit md:w-full btn items-center justify-start gap-2'>
        <MdAddBox size={25}/>
        <p className='hidden md:block'>My Enrolled Class</p>
        </Link>
    );
};

export default AddCls;