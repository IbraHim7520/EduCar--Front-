import React from 'react';
import { Link, NavLink } from 'react-router';
import { MdAddBox } from "react-icons/md";
const AddCls = () => {
    return (
        <NavLink to={"add-classes"} 
        className={({isActive})=> isActive ? 'flex justify-center bg-blue-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start ': 'flex justify-center bg-green-500 text-lg h-fit py-3 text-white w-full btn items-center md:justify-start'}
        >
        <MdAddBox size={25}/>
        <p className='hidden md:block'>Add Class</p>
        </NavLink>
    );
};

export default AddCls;