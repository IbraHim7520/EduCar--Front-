import React from 'react';
import { Link } from 'react-router';

const EnrolledClassCard = ({classes}) => {
    return (
        <div className="card bg-base-100  shadow-sm h-full min-h-[250px]">
            <div className=" h-48 overflow-hidden rounded-md">
                <img src={classes.Image} alt={classes.ClassTitle} className="w-full h-full object-cover" />
            </div>

            <div className="card-body">
                <h2 className="card-title">{classes.ClassTitle}</h2>
                <p>{classes.Description}</p>
            <div className='w-full mt-5 flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-1'>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={classes.TeacherImage}/>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm font-semibold'>{classes.TeacherName}</h1>
                            <p className='text-xs text-gray-500'>{classes.TeacherEmail}</p>
                        </div>
                    </div>

                    <Link to={`/enrolled-class-details/${classes._id}`} className='btn btn-success text-white'>Continue</Link>
            </div>
            </div>
        </div>
    );
};

export default EnrolledClassCard;