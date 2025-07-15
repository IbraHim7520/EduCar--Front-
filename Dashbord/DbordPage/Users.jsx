import React, { useEffect, useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from '../../Components/Table';
import UsersTable from '../../Components/UsersTable';
import toast from 'react-hot-toast';
const Users = () => {
    const { UserRole } = useAuth()

    const [users , setusers] = useState([])
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["getAllUsers"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/getroles`)
            return result;
        }
    })
    useEffect( ()=>{
        if(data?.data){
            setusers(data?.data);
        }
    },  [data?.data] )
    const handleMakeAdmin = async(id) =>{
        const result = await axios.put(`${import.meta.env.VITE_API_URL}//make-admin/${id}`)
          if(result?.data?.modifiedCount > 0 ){
            toast.success("Successfully make Admin.")
        }else{
            toast.error("Somehing went wrong!")
        }
    }
    return (
        <div className=' flex flex-col lg:overflow-x-hidden  overflow-x-auto'>
            {
                isPending ?
                    <div className='w-full min-h-screen justify-center items-center'>
                        <span className='loading loading-spinner text-success'></span>
                        <p className='text-xl font-semibold text-black'>Loading.....</p>
                    </div>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>isAdmin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((request, index) => <UsersTable
                                        key={index} index={index}
                                        handleMakeAdmin={handleMakeAdmin}
                                        request={request}></UsersTable>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default Users;