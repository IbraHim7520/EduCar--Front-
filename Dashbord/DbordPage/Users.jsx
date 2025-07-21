import React, { useEffect, useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from '../../Components/Table';
import UsersTable from '../../Components/UsersTable';
import toast from 'react-hot-toast';
import NoDataImage from "../../imgs/nodata.jpg"
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Users = () => {
    const { UserRole } = useAuth()
    const [adminRole, setAdminRole] = useState(false);
    const [users, setusers] = useState([])
    const [searcvalue , setSearchvalue] = useState('');
    const {register , handleSubmit } = useForm()
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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.put(`${import.meta.env.VITE_API_URL}/make-admin/${id}`);
                    if (response?.data.modifiedCount > 0) {
                        const updatedUsers = users.map((user) => {
                            if (user._id === id) {
                                return { ...user, Role: "Admin" };
                            }
                            return user;
                        });
                        setusers(updatedUsers);
                        Swal.fire({
                            title: "Success!",
                            text: "User has been made Admin.",
                            icon: "success"
                        });
                    } else {
                        toast.error("Unable to make admin!");
                    }
                } catch (error) {
                    toast.error("Request failed!");
                }
            }
        });
    };

    const onSubmit = async(data)=>{
        const value = data?.Search;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/search-user/${value}`)
        setusers(response?.data)
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
                                <div className='w-full flex justify-end items-center'>
                                        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-3 max-w-md w-full">
                                            <div className="flex items-center w-full border gap-2 bg-white  border-gray-500/30 h-12 rounded-full overflow-hidden">
                                                <input type="text" {...register("Search", {required:true})} placeholder="Search use by email or username" className="w-full h-full pl-6 outline-none text-sm " />
                                            </div>
                                            <button type="submit" className="bg-indigo-500 active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer">Search</button>
                                        </form>
                                </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Current Role</th>
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
            }
        </div>
    );
};

export default Users;