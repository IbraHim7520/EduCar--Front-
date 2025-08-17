import React from 'react';
import Marquee from 'react-fast-marquee';
import coursera from "../imgs/lg-1.png"
import udemy from "../imgs/lg-5.png"
import udacamy from "../imgs/lg-6.png"
import udacity from "../imgs/lg-7.png"
const Marque = () => {
    return (
        <div className='w-full px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-16'>
            <div  className='text-center p-5'>
                    <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Our <span className='text-green-500'>Partners</span></h1>
                    <p className='lg:text-xl'>We are globaly engaged with more then 7+ top rated companies in world</p>
            </div>
            <Marquee className='mt-12'>
            <img src={coursera}  className='w-44 lg:w-52 ml-12 '></img>
            <img src={udemy} className='w-44 lg:w-52 ml-12 '></img>
            <img src={udacamy} className='w-44 lg:w-52 ml-12 '></img>
            <img src={udacity} className='w-44 lg:w-52  ml-12'></img>
            </Marquee>
        </div>
    );
};

export default Marque;