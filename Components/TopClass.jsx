import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import { Link } from 'react-router';

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
        <div className='w-full'>
        <div className='flex flex-col items-center justify-center p-5 md:p-12 lg:p-24 '>
                        <div  className='text-center p-5 mb-12 '>
                    <h1 className='font-bold text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Top <span className='text-green-500'>Classes</span></h1>
                    <p className='lg:text-xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam libero rerum ex fugit reprehenderit dolorem non quas vitae sunt.</p>
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
        
        </div>
    );
};

export default TopClass;