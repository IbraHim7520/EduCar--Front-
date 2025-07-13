import React from 'react';
import useAuth from '../../CustomHooks/useAuth';
import noUser from "../../imgs/noUser.jpg"
const MyProfile = () => {

    const { User, UserRole } = useAuth()
    
    return (
        <div className='w-full min-h-screen  flex flex-col lg:justify-center items-center'>
        <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl mb-8'>My Profile</h1>
            <div className=' w-full lg:w-2/4 bg-base-200  space-y-2 items-center h-fit flex flex-col  py-5 p-2 md:p-5 lg:p-8 xl:p-12 rounded-sm shadow-lg'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 lg:w-48 w-36 rounded-full ring-2 ring-offset-2">
                        <img src={User?.photoURL || noUser} />
                    </div>
                </div>
                <h1 className='text-3xl font-bold'>{User?.displayName || "No Name"}</h1>
                <p className='text-lg'>{User?.email}</p>
                <hr className='w-full text-gray-500 mt-5'></hr>
                <div className='w-full space-y-3'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold text-black'>Role:</p>
                        <p className='text-xl font-semibold '>{UserRole?.Role}</p>
                    </div>
                      <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold text-black'>Facebook:</p>
                        <p className='text-xl font-semibold '>{"Student"}</p>
                    </div>
                      <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold text-black'>Number:</p>
                        <p className='text-xl font-semibold '>{"Student"}</p>
                    </div>
                </div>
                <button className='btn btn-error text-white px-12 mt-12'>Logout</button>
            </div>
        </div>
    );
};

export default MyProfile;