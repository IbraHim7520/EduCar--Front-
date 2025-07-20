import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

const MyClassDetails = () => {
    const location = useParams()
    const classId = location?.id;
    const [oneClass, setOneClass] = useState('');
    const [TotalclassEnroll, setTotalClassEnroll] = useState(0)
    const [totalAssignment, setTotalAssignment] = useState(0);
    const [totalAssignmentSubmission, setTotalAssignmentSubmission] = useState(0);
    const {register, reset , handleSubmit} = useForm()
    const { data } = useQuery({
        queryKey: ["getAClassDetails"],
        queryFn: async () => await axios.get(`${import.meta.env.VITE_API_URL}/get-class/${classId}`)
    })
    useEffect(() => {
        if (data?.data) {
            setOneClass(data?.data)
            setTotalClassEnroll(oneClass?.EnrolledBy?.length)
            setTotalAssignment(oneClass?.PublishAsgnment?.length)
            setTotalAssignmentSubmission(oneClass?.PostedAsgnment?.length);
        }
    }, [
        data, oneClass?.EnrolledBy?.length, oneClass?.PublishAsgnment?.length, oneClass?.PostedAsgnment?.length
    ])
    const handleOpenModal = () => {
        const modal = document.getElementById("modal");
        modal.showModal();
    }
    const handleCloseModal = ()=>{
         const modal = document.getElementById("modal");
        modal.close();
    }
    const onSubmit = async(formData) => {
        console.log(formData)
        formData.PostedAsgnment = [];
       const result = await axios.put(`${import.meta.env.VITE_API_URL}/add-assignment/${classId}`, {formData})
        if(result?.data?.modifiedCount > 0){
            reset()
            const modal = document.getElementById("modal");
        modal.close();
        toast.success("Assignment added successfully.")
        setTotalAssignment(totalAssignment + 1);
        }
    }
    return (
        <div className='p-3 bg-base-300 min-h-screen md:p-6 lg:p-12 xl:p-16'>
            <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-full h-fit flex flex-col ">
                    <h3 className="font-bold text-lg text-center">Assignment Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-xl mx-auto">
                        <div>
                            <label className="label">
                                <span className="label-text">Assignment Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter assignment title"
                                {...register("AssignmentTitle", {required:true})}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Assignment Deadline</span>
                            </label>
                            <input
                                type="date"
                                {...register("AssignmentDeadLine", {required:true})}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Assignment Description</span>
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Enter assignment details"
                                {...register("AssignmentDescription", {required:true})}
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Add Assignment
                        </button>
                    </form>
                    <button onClick={handleCloseModal} className='btn mt-2 btn-error text-white'>Cancel</button>

                </div>
            </dialog>
            <div className="flex w-full flex-col">

                {/* Coloumn - 1 */}
                <div className="bg-white rounded-box p-5 place-items-center">
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold '>Class Progress</h1>
                    <div className="card w-full bg-white rounded-box gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center justify-around  p-5 place-items-center">
                        <div className="card h-52 w-full flex flex-col justify-center items-center bg-blue-300 shadow-sm">
                            <h1 className="text-xl font-semibold">Total Enrollment</h1>
                            <h1 className="text-5xl font-bold">{TotalclassEnroll}</h1>
                        </div>

                        <div className="card h-52 w-full flex flex-col justify-center items-center bg-red-300 shadow-sm">
                            <h1 className="text-xl font-semibold">Total Assignment</h1>
                            <h1 className="text-5xl font-bold">{totalAssignment}</h1>
                        </div>

                        <div className="card h-52 w-full flex flex-col justify-center items-center bg-yellow-200 shadow-sm">
                            <h1 className="text-xl font-semibold">Total Assignment Submission</h1>
                            <h1 className="text-5xl font-bold">{totalAssignmentSubmission}</h1>
                        </div>
                    </div>
                </div>

                {/* Coloumn - 2 */}
                <div className="card bg-white rounded-box mt-12  p-5 place-items-center">
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold '>Class Assignment</h1>
                    <button onClick={handleOpenModal} className='btn btn-primary px-24 mt-12'>Create a new Assignment</button>
                </div>


            </div>
        </div>
    );
};

export default MyClassDetails;