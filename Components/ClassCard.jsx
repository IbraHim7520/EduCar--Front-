import React from 'react';
import { Link } from 'react-router';

const ClassCard = ({ clases }) => {
    return (
<div className="bg-base-100 hover:scale-105 transition duration-500 flex flex-col justify-between p-3 w-full max-w-sm shadow-sm rounded-xl h-full min-h-[250px]">
  {/* Image section */}
  <div className="w-full h-48 overflow-hidden rounded-md">
    <img src={clases.Image} alt={clases.ClassTitle} className="w-full h-full object-cover" />
  </div>

  {/* Info section */}
  <div className="flex flex-col justify-between flex-grow mt-4">
    <div>
      <h1 className="card-title text-xl">{clases.ClassTitle}</h1>
      <p className="text-gray-700 text-sm mt-2">
        {clases.Description.slice(0, 100)}...
      </p>
    </div>

    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">${clases.ClassPrice}</h1>
        <Link to={`class-details/${clases._id}`} className="btn btn-sm lg:btn-md px-6 bg-green-500 text-white">Enroll</Link>
      </div>

      <hr className="text-gray-400 my-4" />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={clases.Uploader} alt="teacher" />
            </div>
          </div>
          <p className="text-md font-semibold">{clases.TeacherName}</p>
        </div>
        <p className="text-md font-semibold">Enrolled: {clases.EnrolledBy.length}</p>
      </div>
    </div>
  </div>
</div>

    );
};

export default ClassCard;