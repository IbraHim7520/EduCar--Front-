import React from 'react';
import BeTeacher from "../imgs/beTeacher.jpg"
import { Link } from 'react-router';
import img2 from "../imgs/lmp-1.png"
const BeaTeacher = () => {
    return (
        <div className='w-full mt-12 p-5 md:p-12 lg:p-24 flex flex-col justify-center items-center'>
            <div className='container flex flex-col lg:flex-row justify-center gap-5 items-center'>
                    <div className='w-full text-center lg:text-start space-y-5 mt-12 lg:mt-0'>
                        <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>
                        Transform Lives Beyond the Classroom Step Into the Role of an Instructor</h1>
                        <p className='text-lg  md:text-xl text-gray-700'>Your knowledge has the power to shape futures. Share your passion, guide eager learners, and make a lasting impact.</p>
                        <Link to={"/teach-in-here"} className='btn bg-green-500 px-24 text-white'>Become an Instructor Today</Link>
                    </div>

                    <div className='w-full -order-1 lg:order-1'>
                        <img className='' src={BeTeacher}></img>
                    </div>
            </div>


            <div className='container mt-12 lg:mt-[250px] gap-5 flex flex-col lg:flex-row justify-center items-center'>
                 <div className='w-full '>
                        <img className='' src={img2}></img>
                    </div>

                     <div className='w-full -order-1 lg:order-1 text-center lg:text-start space-y-5 mt-12 lg:mt-0'>
                        <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>
                        We Have The Best Instructors Available in The City</h1>
                        <p className='text-lg  md:text-xl text-gray-700'>Our mentors are industry-leading experts dedicated to guiding you with real-world insights and hands-on experience.</p>
                        <ul className='space-y-5 text-xl text-start font-semibold list-disc ml-7'>
                            <li> Full Lifetime Access</li>
                            <li> Downloadable Reources</li>
                            <li> Certificate of Completion</li>
                            <li> Free Trial 7 Days</li>
                        </ul>
                        <Link className='btn bg-green-500 text-white px-12'>Enroll Today</Link>
                    </div>
            </div>
        </div>
    );
};

export default BeaTeacher;