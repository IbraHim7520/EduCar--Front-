import React from 'react';
import { Link } from 'react-router';
import { MdAddBox } from "react-icons/md";
const AddCls = () => {
    return (
        <Link to={"add-classes"} className='flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'>
        <MdAddBox size={25}/>
        <p className='hidden md:block'>Add Class</p>
        </Link>
    );
};

export default AddCls;