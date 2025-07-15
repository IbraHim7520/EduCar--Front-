import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { MdEmail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import ReviewCard from '../Components/ReviewCard';
import NoDataImage from "../imgs/nodata.jpg"
const ClassDetails = () => {
    const data = useLoaderData()
    const [classData , setClassData] = useState(data?.data)
   
    return (
       <div className="w-full flex flex-col min-h-screen bg-gradient-to-r from-white via-blue-50 to-blue-100 text-gray-800">
      {/* Banner Section */}
      <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src={classData.Image}
          alt="Course Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        {/* Title and Price */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{classData.ClassTitle}</h1>
          <span className="text-xl font-semibold text-green-600 bg-green-100 px-4 py-1 rounded-full">
            ${classData.ClassPrice}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed">{classData.Description}</p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button className="btn btn-primary px-8">Enroll Now</button>
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <span className="badge badge-info text-white">Status: {classData.Status}</span>
            <span className="flex items-center gap-1 text-base">
              <FaUsers className="text-purple-600" />
              {classData.EnrolledBy.length} Enrolled
            </span>
          </div>
        </div>

        {/* Teacher Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-gray-300 pt-6">
          <img
            src={classData.Uploader}
            alt="Teacher"
            className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-md"
          />
          <div>
            <h2 className="text-lg font-semibold">
              Teacher: <span className="text-indigo-600">{classData.TeacherName}</span>
            </h2>
            <p className="text-sm flex items-center gap-1 text-gray-600">
              <MdEmail className="text-xl text-gray-500" />
              {classData.TeacherEmail}
            </p>
          </div>
        </div>

      </section>

      <div className='p-5 mt-24 flex flex-col'>
        <p className='font-bold text-gray-800 text-2xl md:text-3xl xl:text-4xl text-center'>What our Student Say</p>
        {
            classData.Reviews.length == 0?
            <div className='flex justify-center items-center flex-col'>
                <img src={NoDataImage} className='w-36'></img>
                <p className='text-xl font-semibold text-black text-center mt-2'>No Reviews to Yet</p>
            </div>
            :
            <div className='grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 space-y-15 2xl:grid-cols-5'>
            <ReviewCard></ReviewCard>
        </div>
        }
      </div>
    </div>
    );
};

export default ClassDetails;