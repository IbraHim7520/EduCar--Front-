import React, { useEffect, useState, Fragment } from 'react';
import useAuth from "../../CustomHooks/useAuth"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import NoDataImage from "../../imgs/nodata.jpg"
import MyClassCard from '../../Components/MyClassCard';
import Swal from 'sweetalert2';
import { Dialog, Transition } from '@headlessui/react'
import toast from 'react-hot-toast';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
const MyClass = () => {
    const [myClass, setMyClasses] = useState([])
    const [loading, setLoading] = useState(true);
    const [updateableClass, setUpdateableClass] = useState('')
    const [currentImage , setCurrentImage] = useState('');
    const [updating , setUpdating] = useState(false);
    const { User } = useAuth()
    const { data } = useQuery({
        queryKey: ["gtMyClass"],
        enabled: !!User?.email,
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/my-class/${User?.email}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return result?.data
        }
    })

    useEffect(() => {
        if (data) {
            setLoading(false)
            setMyClasses(data)
        }
    }, [data])
    const handleClassDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleteResult = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-class/${id}`)
                if (deleteResult?.data?.deletedCount > 0) {
                    const remainingClasses = myClass.filter((cls) => cls._id != id);
                    setMyClasses(remainingClasses)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                } else {
                    toast.error("Failed to delete class")
                }

            }
        });
    }
    const handleCloseModal = () => {
        const modal = document.getElementById('modal');
        modal.close()
    }
    const handleClassUpdate = (id) => {
        const modal = document.getElementById('modal');
        modal.showModal()
        const clickedClass = myClass.find(cls => cls._id == id);
        setUpdateableClass(clickedClass);

    }
    const handleUpdateDataSubmit = async(e, id) => {
        setUpdating(true)
        e.preventDefault();
        const form = e.target;
        const ClassTitle = form.ClassTitle.value;
        const ClassPrice = parseFloat(form.ClassPrice.value)
        const Description = form.Description.value;
        const Image = form.Image.files;
        let imageUrl = updateableClass?.Image;
        if (Image[0]) {
            const imgForm = new FormData();
            imgForm.append('image', Image[0]);
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                imgForm
            );
            imageUrl = response?.data?.data?.url;
        }
            const UpdatedData = {
            ClassTitle,
            ClassPrice, 
            Description,
            Image: imageUrl
          
        }
     //   console.log(UpdatedData);
        const updatedRes = await axios.put(`${import.meta.env.VITE_API_URL}/update-class/${id}`, {UpdatedData});
        if(updatedRes?.data?.modifiedCount > 0){
            toast.success("Class Updated! Please Reload.");
            form.reset();
             const modal = document.getElementById('modal');
            modal.close()
            setUpdating(false)
            window.location.reload()
        }else{
            toast.error("Failed to Update Class Info!")
        }
    }
    return (
        <div>
            <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={(e) => handleUpdateDataSubmit(e, updateableClass._id)} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue={updateableClass.ClassTitle} className="input input-bordered w-full" name='ClassTitle' />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" readOnly value={updateableClass.TeacherName} className="input input-bordered w-full" name='TeacherName' />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" readOnly value={updateableClass.TeacherEmail} className="input input-bordered w-full" name='TeacherEmail' />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={updateableClass.ClassPrice} className="input input-bordered w-full" name='ClassPrice' />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea defaultValue={updateableClass.Description} name='Description' className="textarea textarea-bordered w-full" ></textarea>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                                name='Image'
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input
                                type="text"
                                value={updateableClass.Status}
                                className="input input-bordered w-full"
                                name='Status'
                            />
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <button type="submit" className="btn px-12 btn-primary">{
                                updating ? <span className='loading loading-spinner text-white text-center'></span> : "Update"
                            }</button>
                            <button onClick={handleCloseModal} className="btn btn-error text-white px-5">Close</button>
                        </div>

                    </form>

                </div>
            </dialog>
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
                                        myClass.map((cls, index) => <MyClassCard
                                            key={index}
                                            cls={cls}
                                            handleClassDelete={handleClassDelete}
                                            handleClassUpdate={handleClassUpdate}
                                        ></MyClassCard>)
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default MyClass;