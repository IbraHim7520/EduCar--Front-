import React from 'react';
import { Link } from 'react-router';

const MyClassCard = ({ cls , handleClassDelete , handleClassUpdate}) => {
    return (
<div className="p-4 bg-white rounded-lg shadow text-sm w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-fit">
    <div className="relative">
        <img
            className="rounded-md max-h-40 w-full object-cover"
            src={cls.Image}
            alt="Class"
        />
        <p className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
            {cls.Status}
        </p>
    </div>
    
    <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        {cls.ClassTitle}
    </p>
    <p className="text-gray-500 mt-3 ml-2">{cls.Description}</p>
    <hr className="mt-2 text-gray-500" />
    
    <div className="flex justify-between p-1 items-center flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-1">
            <div className="avatar">
                <div className="w-8 rounded-full">
                    <img src={cls.TeacherImage} />
                </div>
            </div>
            <div className="flex flex-col justify-center truncate">
                <p className="text-lg font-semibold truncate">{cls.TeacherName}</p>
                <p className="text-xs text-gray-500 font-semibold truncate">{cls.TeacherEmail}</p>
            </div>
        </div>
        <p className="font-semibold text-xl whitespace-nowrap">${cls.ClassPrice}</p>
    </div>

    <div className="w-full flex flex-wrap justify-between gap-2 mt-2">
        <button 
        onClick={()=>handleClassUpdate(cls._id)}
        className="btn btn-sm flex-1 min-w-[100px] btn-primary">Update</button>
        <button 
        onClick={()=>handleClassDelete(cls._id)}
        className="btn btn-sm flex-1 min-w-[100px] btn-error text-white">Delete</button>
        <Link to={`/my-class-details/${cls._id}`}  className={cls.Status === "Approved" ? 'btn btn-sm flex-1 min-w-[100px]  btn-success text-white': "btn btn-sm flex-1 min-w-[100px] btn-disabled btn-success text-white"}>See Details</Link>
    </div>
</div>

    );
};

export default MyClassCard;
