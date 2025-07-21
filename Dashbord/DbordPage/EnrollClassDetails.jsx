import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NoDataImage from "../../imgs/nodata.jpg"
import AssignmentTable from '../../Components/AssignmentTable';
import { MdAdd } from "react-icons/md";
import useAuth from '../../CustomHooks/useAuth';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
const EnrollClassDetails = () => {
    const classId =  useParams().id;
    const [classAssignment , setClassAssignment] = useState([]);
    const [loading, setLoading] = useState(true)
    const [submissionCount , setSubmissionCount]= useState(0);
    const {register ,  handleSubmit , reset} = useForm()
    const {User} = useAuth()
    const {data} =  useQuery({
        queryKey: ["get_one_class"],
        queryFn: async(req, red)=>{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/get-class/${classId}`)
            return response?.data
        }
    })
    
    useEffect( ()=>{
        if(data){
            setLoading(false)
            setSubmissionCount(data?.SubmittedAsgnment?.length)
            setClassAssignment(data?.PublishAsgnment);
 
        }

    }, [data])
    const handleAssignmentSubmission = async(id, classObeject) =>{
        classObeject.SubmittedBy = User?.displayName;
        classObeject.SubmitterEmail = User?.email
        
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/submit-assignment/${id}`, {classObeject})
       if(response?.data?.modifiedCount > 0){
        setSubmissionCount(submissionCount+1)
        toast.success("Assignment has been submitted.")
       }
    
    }


    const openModal = () =>{
            const modal = document.getElementById('modal');
            modal.showModal(); 
    }
    const closeModal = ()=>{
        const modal = document.getElementById('modal');
        modal.close(); 
    }



    const mutation = useMutation({
        mutationFn: async (Evaluationdata) => {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/post-evaluation`,
                {Evaluationdata}
            );
            return response.data;
        },
        onSuccess: (data) => {
            toast.success("Evaluate Successfully")
            reset(); // Reset form if needed
            document.getElementById('modal')?.close(); // Optional: Close modal
        },
        onError: (error) => {
            console.error("Error submitting evaluation:", error);
        },
    });

    const onSubmit = async(Evaluationdata) =>{
        Evaluationdata.Rating = parseInt(Evaluationdata.Rating)
        Evaluationdata.Reviewedby = User?.email
        Evaluationdata.ReviewerImage = User?.photoURL
        Evaluationdata.ClassTitle =  data?.ClassTitle
         mutation.mutate(Evaluationdata);
    }
    return (
        <div className='flex flex-col lg:overflow-x-hidden  overflow-x-auto p-12'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Teaching Evaluation</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center space-y-3'>
                        <textarea {...register("Description", {required: true})} className='w-full textarea text-black' placeholder='Your Experience'></textarea>
                        <div className="rating rating-lg  ">
                            <input {...register("Rating", { required: true })} value="1" type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input {...register("Rating", { required: true })} value="2" type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input {...register("Rating", { required: true })} value="3" type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input {...register("Rating", { required: true })} value="4" type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input {...register("Rating", { required: true })} value="5" type="radio" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>

                        <div className='flex w-full justify-between items-center'>
                            <button type='submit'  className='btn bg-green-500 text-white'>Submit</button>
                            <button className='btn btn-error text-white' onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
            {
                loading ?
                    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                        <span className='loading loading-spinner text-warning'></span>
                        <p className='text-xl font-semibold'>loading</p>
                    </div>
                    :
                    <div>
                        {
                        classAssignment.length == 0 ?
                            <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                                <img src={NoDataImage} className='max-w-72'></img>
                                <h1 className='text-center text-3xl font-semibold'>No data to show</h1>
                            </div>
                            :
                            <div className="overflow-x-auto">
                            <div className='w-full flex justify-between mb-8 items-center'>
                            <div className='px-8 btn btn-success text-white'>
                                Submission {submissionCount}
                            </div>
                                <div onClick={openModal} className='flex btn justify-end btn-success w-fit  items-center'>
                                    <MdAdd></MdAdd>
                                    <p>Create TER</p>
                                </div>
                            </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Serial</th>
                                            <th>Assignment Title</th>  
                                            <th>Assignment Description</th>
                                            <th>Deadline</th>
                                            <th>Button</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            classAssignment.map((request, index) => 
                                            <AssignmentTable 
                                            key={index}  
                                            index={index}
                                            request={request}
                                            handleAssignmentSubmission={handleAssignmentSubmission}
                                            data={data}
                                            submissionCount={submissionCount}
                                            
                                            
                                            >
                                            
                                            </AssignmentTable>)
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

export default EnrollClassDetails;