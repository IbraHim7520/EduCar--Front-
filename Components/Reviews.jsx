import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect( ()=>{
        const getAllReviews = async()=>{
                const reviewResponse = await axios.get(`${import.meta.env.VITE_API_URL}/getreviews`);
                setReviews(reviewResponse?.data);
        }
        getAllReviews()
    }, [] )
    console.log(reviews)
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-5 md:p-12 lg:p-24 '>
                <div  className='text-center p-5 mb-12 '>
                    <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>What Our Learners <span className='text-green-500'>Say</span></h1>
                    <p className='lg:text-xl mt-5'>Real experiences from our community sharing their learning journey.</p>
            </div>
            </div>

            <div className='w-full'>
             <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...reviews, ...reviews].map((card, index) => (
                        <ReviewCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...reviews, ...reviews].map((card, index) => (
                        <ReviewCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
            </div>
        </div>
    );
};

export default Reviews;