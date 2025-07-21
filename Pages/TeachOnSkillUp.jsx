import React, { useEffect, useState } from 'react';
import useAuth from '../CustomHooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import unableToSubmitImg from "../imgs/unable.jpg"
import { useMutation, useQuery } from '@tanstack/react-query';

const TeachOnSkillUp = () => {
    const { User, UserRole } = useAuth();
    const [requestStatus , setRequestStatus] = useState('');
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if(User?.email && User?.photoURL){
            setValue("TeacherMail", User.email);
            setValue("TeacherImage", User.photoURL);
        }
    }, [User?.email, setValue, User?.photoURL]);

    const insertID = localStorage.getItem("insertID");

    const { data } = useQuery({
        queryKey: ["getTeacherReq"],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/get-tecReq/${insertID}`);
            return result;
        }
    });

    useEffect(() => {
        if(data?.data?.Status){
            setRequestStatus(data.data.Status);
        }
    }, [data]);

    const { mutate: submitTeacherRequest } = useMutation({
        mutationFn: async (formData) => {
            return await axios.post(`${import.meta.env.VITE_API_URL}/post-teachereq`, { data: formData });
        },
        onSuccess: (res) => {
            if (res?.data) {
                toast.success("Application submission success!");
                setRequestStatus("Pending");
                localStorage.setItem("insertID", res.data.insertedId);
                reset();
            }
        },
        onError: () => {
            toast.error("Something went wrong!");
        }
    });

    const onSubmit = (formData) => {
        if (!User) {
            toast.error("Please login to be a teacher");
            return;
        }
        formData.Status = "Pending";
        submitTeacherRequest(formData);
    };

    return (
        <div>
            {
                UserRole?.Role === "Teacher" || UserRole?.Role === "Admin" ? (
                    <div className='w-full min-h-screen flex flex-col justify-center items-center space-y-2'>
                        <img src={unableToSubmitImg} className='max-w-96' alt="Not allowed" />
                        <p className='text-xl font-semibold'>
                            You are already in Teacher or Admin role, so you cannot apply to become a teacher again.
                        </p>
                    </div>
                ) : (
                    <div>
                        <div className="max-w-4xl mx-auto text-center px-4 py-6">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                                Become a Teacher on SkillUp
                            </h1>
                            <p className="text-base md:text-lg text-gray-600">
                                Share your skills, inspire learners, and earn money by teaching what you love.
                                Apply now to join our growing instructor community.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4 bg-white shadow rounded-xl space-y-4">
                            {/* Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("TeacherName", { required: true })}
                                    placeholder='Teacher Name'
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Image (read-only view) */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Profile Image</span>
                                </label>
                                <img
                                    src={User?.photoURL}
                                    alt="User"
                                    className="w-24 h-24 rounded-full object-cover border"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("TeacherMail")}
                                    defaultValue={User?.email}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Experience */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Experience</span>
                                </label>
                                <select {...register("ExperienceLevel")} className="select select-bordered w-full">
                                    <option>Beginner</option>
                                    <option>Mid Level</option>
                                    <option>Experienced</option>
                                </select>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input {...register("Title", { required: true })} type="text" placeholder="Enter your title" className="input input-bordered w-full" />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register("Category")} className="select select-bordered w-full">
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>Machine Learning</option>
                                    <option>UI/UX Design</option>
                                    <option>Game Development</option>
                                    <option>Cybersecurity</option>
                                    <option>Data Science</option>
                                </select>
                            </div>

                            {/* ✅ Submit Button (fixed - removed onClick) */}
                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className='px-16 btn bg-green-500 text-white'
                                    disabled={requestStatus === "Pending"}
                                >
                                    {requestStatus === "Pending" ? "Submitted (Pending)" : "Submit for review"}
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default TeachOnSkillUp;
