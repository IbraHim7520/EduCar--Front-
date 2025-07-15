import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoDataImage from "../imgs/nodata.jpg"
import ClassCard from '../Components/ClassCard';
const AllClass = () => {
    const [cls, setCls] = useState([])
    const [loading, setLoading] = useState(false);
    const { data } = useQuery({
        queryKey: ["topClasses"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/top-classes`)
            return result
        }
    })
    useEffect(() => {
        setLoading(true)
        if (data) {
            setLoading(false)
            setCls(data?.data || [])
        }
    }, [data])
    return (
        <div className='w-full'>
            {
                loading ?
                    <div className='w-full min-h-screen justify-center items-center flex-col'>
                        <span className='loading loading-spinner text-green-500'></span>
                        <p className='text-xl text-black'>Loading....</p>
                    </div>
                    :
                    <div>
                        {
                            cls.length == 0 ?
                                <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                                    <img src={NoDataImage} className='max-w-72'></img>
                                    <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
                                </div>
                                :
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-5 space-y-3'>
                                    {
                                        cls.map(clases => <ClassCard
                                            clases={clases}
                                            key={clases._id}
                                        ></ClassCard>)
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default AllClass;