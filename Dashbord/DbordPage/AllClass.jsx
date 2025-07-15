import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { faL } from '@fortawesome/free-solid-svg-icons';
import NoDataImage from "../../imgs/nodata.jpg"
import AllClassTable from '../../Components/AllClassTable';
import toast from 'react-hot-toast';
const AllClass = () => {
    ///getallclass
    const [classinfo, setClassInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["Class_Lecture"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/getallclass`)
            return result;
        }
    })
    useEffect(() => {
        setLoading(true)
        if (data?.data) {
            setLoading(false)
            setClassInfo(data?.data)
        } else {
            setLoading(false)
        }

    }, [data?.data])
    const handleApproveClass = async(id) =>{
        const res= await axios.put(`${import.meta.env.VITE_API_URL}/update-clsstats/${id}`)
        if(res?.data?.modifiedCount > 0 ){
            toast.success("Class has been approved")
        }
    }

    const handleClassReject = (id) =>{
        const result = axios.put(`${import.meta.env.VITE_API_URL}/reject-cls/${id}`)
        if(result?.data.modifiedCount > 0){
            toast.success("Class has been rejectted")
        }
    }
 //   console.log(classinfo)
    return (
        <div>
            {
                loading ?
                    <div className='w-full h-screen flex flex-col justify-center items-center'>
                        <span className='loading loading-spinner text-success'></span>
                        <p className='text-semibold'>Loading....</p>
                    </div>
                    :
                    <div>
                        {
                            classinfo.length == 0 ?
                                <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                                    <img src={NoDataImage} className='max-w-72'></img>
                                    <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
                                </div>
                                :
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Serial</th>
                                            <th>Image</th>  
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Aproved</th>
                                            <th>Accept</th>
                                            <th>Reject</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            classinfo.map((request, index) => <AllClassTable 
                                            key={index} index={index}  
                                            handleApproveClass={handleApproveClass}
                                            handleClassReject={handleClassReject}
                                            request={request}></AllClassTable>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
            }
        </div>
    );
};

export default AllClass;