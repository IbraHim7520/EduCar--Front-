import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const FeaturesAmount = () => {
    const [registeredUsers, setRegiteredUsers] = useState([]); //   /getroles
    const [allClasses, setAllClasses] = useState([]) // /getallclass
    const [totalEnroll, setTotalEnrollment] = useState(0);
    useEffect(() => {
        const getTotalEnrolldClass = async () => {
            const enrollResponse = await axios.get(`${import.meta.env.VITE_API_URL}/total-enrolled`);
            setTotalEnrollment(enrollResponse?.data?.totalEnrolled)

            const Rolesresponse = await axios.get(`${import.meta.env.VITE_API_URL}/getroles`);
            setRegiteredUsers(Rolesresponse?.data)


            const Classresponse = await axios.get(`${import.meta.env.VITE_API_URL}/getallclass`);
            setAllClasses(Classresponse?.data)
        }
        getTotalEnrolldClass()
    }, [])
    return (
        <div>
            <div className='flex flex-col items-center justify-center px-5 md:px-8 lg:px-12 p-8 '>
                <div className='text-center p-5 mb-12 '>
                    <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Empowering Learners <span className='text-green-500'>Worldwide</span></h1>
                    <p className='lg:text-xl mt-5'>Explore a wide range of courses and join a thriving learning community.</p>
                </div>
                <div className='grid grid-cols-1  lg:flex lg:justify-center justify-items-center items-center gap-5'>
                    <div className="card bg-gray-200 shadow shadow-gray-300  text-primary-content">
                        <div className="card-body flex flex-col justify-center items-center text-center">
                            <p className=' text-xl font-semibold text-gray-700'>Total Users</p>
                            <h1 className='text-black font-bold text-7xl'>
                                <CountUp
                                    end={registeredUsers.length}
                                    duration={7}
                                >
                                </CountUp>
                            </h1>
                        </div>
                    </div>


                    <div className="card bg-gray-200 shadow shadow-gray-300  text-primary-content">
                        <div className="card-body flex flex-col justify-center items-center text-center">
                            <p className=' text-xl font-semibold text-gray-700'>Total Enrollment</p>
                            <h1 className='text-black font-bold text-7xl'>
                                <CountUp
                                    end={totalEnroll}
                                    duration={7}
                                >
                                </CountUp>
                            </h1>
                        </div>
                    </div>



                    <div className="card bg-gray-200 shadow shadow-gray-300  text-primary-content">
                        <div className="card-body flex flex-col justify-center items-center text-center">
                            <p className=' text-xl font-semibold text-gray-700'>Total Courses</p>
                            <h1 className='text-black font-bold text-7xl'>
                                <CountUp
                                    end={allClasses.length}
                                    duration={7}
                                >
                                </CountUp>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesAmount;