import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiFilter } from "react-icons/ci";
import NoDataImage from "../imgs/nodata.jpg"
import ClassCard from '../Components/ClassCard';
import { useForm } from 'react-hook-form';
const AllClass = () => {
    const [cls, setCls] = useState([])
    const [loading, setLoading] = useState(false);
    const {register , watch }= useForm()
    const { data } = useQuery({
        queryKey: ["topClasses"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/all-classes`)
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

    const handleFilterData = async (e) =>{
       const filteredValue = e.target.value;
       if (filteredValue === "High to low"){
        const result = await axios.get(`${import.meta.env.VITE_API_URL}/hightolow`)
        setCls(result?.data || [])
       }else if (filteredValue === "Low to high"){
            const resp = await axios.get(`${import.meta.env.VITE_API_URL}/fromlow`);
            setCls(resp?.data || [])
       }

    }
    return (
        <div className='w-full'>
            {
                loading ?
                    <div className='w-full flex h-screen flex-col justify-center items-center '>
                        <span className='loading loading-spinner text-2xl text-green-500'></span>
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
                                <div className='w-full p-2 space-y-5 '>
                                    <div className='w-full mt-5 flex  justify-end '>
                                        <form  className='flex select justify-between items-center gap-2'>
                                            <select onChange={(e)=>handleFilterData(e)}  defaultValue="Default" className="select select-neutral">
                                                <option  value={"Default"}  disabled={true}>Default</option>
                                                <option value={"High to low"} >High to low</option>
                                                <option value={"Low to high"} >Low to high</option>
                                            </select>
                                        </form>

                                    </div>
                                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-items-center gap-5 space-y-3'>
                                    {
                                        cls.map(clases => <ClassCard
                                            clases={clases}
                                            key={clases._id}
                                        ></ClassCard>)
                                    }
                                </div>
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default AllClass;