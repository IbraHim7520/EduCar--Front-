import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import { Link } from 'react-router';
import noDataImg from "../imgs/nodata.jpg"
const TopClass = () => {
    const [cls , setCls] = useState([])
    const {data } = useQuery({
        queryKey: ["topClasses"],
        queryFn: async()=>{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/top-classes`)
            return result
        }
    })
    useEffect(()=>{
        if(data){
            setCls(data?.data)
        }
    }, [data])
    return (
        <div className='w-full px-5 md:px-8 lg:px-12'>
        
        {
            cls.length==0 ?
            <div className='w-full  flex flex-col justify-center items-center'>
                                                <img src={noDataImg} className='max-w-72'></img>
                                                <h1 className='text-center text-3xl font-semibold'>No Class Available</h1>
            </div>
            :
                    <div className='flex flex-col items-center justify-center  '>
                        <div  className='text-center p-5 mb-12 '>
                    <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Top <span className='text-green-500'>Classes</span></h1>
                    <p className='lg:text-xl mt-5'>Explore our newly added course to enhance your skills and prove youreself as a fighter</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 space-y-3'>
                {
                    cls.map(clases => <ClassCard
                    clases={clases}
                    key={clases._id}
                    ></ClassCard>)
                }
            </div>
            <Link to={'/get-all-classes'} className='btn bg-green-500 px-12 text-white mt-12'>View All</Link>
        </div>
        }
    
        
        </div>
    );
};

export default TopClass;