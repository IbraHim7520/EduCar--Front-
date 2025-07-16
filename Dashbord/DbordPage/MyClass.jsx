import React, { useEffect, useState } from 'react';
import useAuth from "../../CustomHooks/useAuth"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import NoDataImage from "../../imgs/nodata.jpg"
import MyClassCard from '../../Components/MyClassCard';
const MyClass = () => {
    const [myClass, setMyClasses] = useState([])
    const [loading, setLoading] = useState(true);
    const { User } = useAuth()
    const { data } = useQuery({
        queryKey: ["gtMyClass"],
        enabled: !!User?.email,
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/my-class/${User?.email}`)
            return result?.data
        }
    })

    useEffect(() => {
        if (data) {
            setLoading(false)
            setMyClasses(data)
        }
    }, [data])

    return (
        <div>
            {
                loading ?
                    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                        <span className='loading loading-spinner text-green-500'></span>
                        <p className='text-xl font-semibold'>Loading....</p>
                    </div>
                    :
                    <div>
                        {
                            myClass.length == 0 ?
                                <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                                    <img src={NoDataImage} className='max-w-72'></img>
                                    <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
                                </div>
                                :
                               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                                {
                                    myClass.map((cls , index)=> <MyClassCard key={index} cls={cls} ></MyClassCard>)
                                }
                            </div>
                        }
                    </div>
            }
        </div>
    );
};

export default MyClass;