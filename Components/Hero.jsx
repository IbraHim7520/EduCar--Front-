import React from 'react';
import banner from "../imgs/banner-1.png"
import Marquee from 'react-fast-marquee';
const Hero = () => {
    return (
        <div className='w-full relative flex flex-col justify-center items-center h-fit bg-gray-100'>
            <img src={banner} className='
            w-full h-96 md:h-[600px] lg:h-fit object-cover '></img>
            <div className='absolute space-y-3 flex flex-col items-center w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
               <p className=' w-fit bg-linear-to-r from-amber-400 to-green-500 p-1 px-5 rounded-sm'>LISTEN TO OUR NEW ATHEM</p>
                <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Exploring New Technologies and<br></br>Gaining Skills to Solve Real Problems</h1>
            <p className='text-lg md:w-2/4 md:text-xl text-gray-700'>Stay ahead with hands-on courses focused on the latest technologies—designed to build real-world skills and solve practical problems across development, design, and data.</p>
            <div className='flex  px-4 mt-5  w-full md:w-3/4 xl:w-2/5'>
                <input className='input h-16 rounded-tl-lg rounded-bl-lg w-full text-xl' placeholder='Search Courses'>
                </input>
                <button className='btn h-16 bg-green-700 px-5 text-white rounded-tr-lg rounded-br-lg '>Search</button>
            </div>
            </div>
        </div>
    );
};

export default Hero;