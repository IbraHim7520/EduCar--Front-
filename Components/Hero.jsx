import React from 'react';
import banner from "../imgs/banner-1.png"
import Marquee from 'react-fast-marquee';
const Hero = () => {
    return (
        <div className='w-full relative flex flex-col justify-center items-center h-fit bg-gray-100'>
            <img src={banner} className='
            w-full h-96 md:h-[600px] lg:h-fit object-cover '></img>
            <div className='absolute space-y-3 flex flex-col items-center w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
               <p className=' w-fit text-sm bg-linear-to-r from-amber-400 to-green-500 p-1 px-5 rounded-sm'>LISTEN TO OUR NEW ATHEM</p>
                <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Exploring New Technologies and<br></br>Gaining Skills to Solve Real Problems</h1>
            <p className='text-lg md:w-2/4 md:text-xl text-gray-700'>Stay ahead with hands-on courses focused on the latest technologies—designed to build real-world skills and solve practical problems across development, design, and data.</p>


<form class="flex items-center border gap-2 bg-white border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden">
    <input type="text" placeholder="Search here" class="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder-gray-500" required></input>
    <button type="submit" class="bg-success active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1">Subscribe</button>
</form>
            </div>
        </div>
    );
};

export default Hero;