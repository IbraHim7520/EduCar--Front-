import React, { useEffect, useState } from 'react';
import useAuth from "../../CustomHooks/useAuth"
import NoDataImage from "../../imgs/nodata.jpg"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EnrolledClassCard from '../../Components/EnrolledClassCard';
const MyEnRollClass = () => {
    const {User} = useAuth()
    const [enrolledClasses , setenrolledClasses] = useState([])
    const [loading , setLoading] = useState(true);
    const {data} = useQuery({
        queryKey: ["getMyEnrolledClass"],
        enabled: !!User?.email,
        queryFn: async()=>{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/my-enrolled-class/${User?.email}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response?.data
        }
    })
    useEffect( ()=>{
        if(data){
            setenrolledClasses(data)
            setLoading(false)
        }
    }, [data] )
    return (
        <div>
           {
            loading ? 
            <div className='w-full min-h-screen flex justify-center items-center'>
                <span className='loading loading-spinner text-green-500'></span>
                <p className='text-xl'>Loading....</p>
            </div>
            :
            <div>
                {
                    enrolledClasses.length==0 ?
                    <div className='w-full min-h-screen flex justify-center items-center'>
                        <img src={NoDataImage} className='max-w-72'></img>
                        <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5'>
                        {
                            enrolledClasses.map(classes => 
                            <EnrolledClassCard classes={classes}>

                            </EnrolledClassCard>)
                        }
                    </div>
                }
            </div>
           }
        </div>
    );
};

export default MyEnRollClass;