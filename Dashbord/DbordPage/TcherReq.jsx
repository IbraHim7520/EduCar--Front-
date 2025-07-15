import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from '../../Components/Table';
import NoDataImage from "../../imgs/nodata.jpg"
import toast from 'react-hot-toast';
const TcherReq = () => {
    const [ReqInfo, setRequestInfo] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/get-teacher-request`)
            .then(data => {
                setRequestInfo(data?.data);
                setLoading(false)
            })
    }, [])

  const updateRequestStatus = async(id) =>{
        const result = await axios.put(`${import.meta.env.VITE_API_URL}/update-role/${id}`)
        if(result?.data?.modifiedCount > 0 ){
            toast.success("Request Approved!")
        }else{
            toast.error("Somehing went wrong!")
        }
    }
    const handleRequestReject = async(id) =>{
    const result = await axios.put(`${import.meta.env.VITE_API_URL}/reject-req/${id}`)
        if(result?.data?.modifiedCount > 0 ){
            toast.success("Request Approved!")
        }else{
            toast.error("Somehing went wrong!")
        }
    }
    return (
        <div className='flex flex-col lg:overflow-x-hidden  overflow-x-auto'>
            {
                loading ?
                    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                        <span className='loading loading-spinner text-warning'></span>
                        <p className='text-xl font-semibold'>loading</p>
                    </div>
                    :
                    <div>
                        {
                        ReqInfo.length == 0 ?
                            <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                                <img src={NoDataImage} className='max-w-72'></img>
                                <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
                            </div>
                            :
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Image</th>  
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Title</th>
                                            <th>Experience</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Accept</th>
                                            <th>Reject</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ReqInfo.map((request, index) => <Table 
                                            updateRequestStatus={updateRequestStatus}  
                                            key={index} index={index}  
                                            handleRequestReject={handleRequestReject}
                                            request={request}></Table>)
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

export default TcherReq;