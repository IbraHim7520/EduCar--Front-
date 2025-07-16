import React, { useEffect, useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from '../../Components/Table';
import UsersTable from '../../Components/UsersTable';
import toast from 'react-hot-toast';
import NoDataImage from "../../imgs/nodata.jpg"
import { faL } from '@fortawesome/free-solid-svg-icons';
const Users = () => {
    const { UserRole } = useAuth()
    const [adminRole, setAdminRole] = useState(false);
    const [users, setusers] = useState([])
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["getAllUsers"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/getroles`)
            return result;
        }
    })
    useEffect(() => {
        if (data?.data) {
            setusers(data?.data);
        }
    }, [data?.data])
    const handleMakeAdmin = async (id) => {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/make-admin/${id}`)
        if (response?.data?.modifiedCount > 0) {
            setAdminRole(true)
            toast.success("Successfully make a new admin")

        }
    }
    return (
        <div className=' flex flex-col lg:overflow-x-hidden  overflow-x-auto'>
            {
                isPending ?
                    <div className='w-full flex flex-col min-h-screen justify-center items-center'>
                        <span className='loading loading-spinner text-success'></span>
                        <p className='text-xl font-semibold text-black'>Loading.....</p>
                    </div>
                    :
                    <div>
                        {
                            users.length == 0 ?
                                <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                                    <img src={NoDataImage} className='max-w-72'></img>
                                    <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
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
                                                    adminRole={adminRole}
                                                    request={request}></UsersTable>)
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

export default Users;