import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../CustomHooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
const AddClass = () => {
    const { User } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState(false);


    const addClassMutation = useMutation({
        mutationFn: async (formData) => {
            const { Image, ...rest } = formData;

            // Upload image to imgbb
            const ImageForm = new FormData();
            ImageForm.append('image', Image[0]);
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                ImageForm
            );

            // Prepare data object
            const finalData = {
                ...rest,
                ClassPrice: parseFloat(rest.ClassPrice),
                Status: 'Pending',
                EnrolledBy: [],
                Image: response?.data?.data?.url,
                Reviews: [],
                PublishAsgnment: [],
                TeacherImage: User?.photoURL,
                SubmittedAsgnment: []
              
            };
            const result = await axios.post(
                `${import.meta.env.VITE_API_URL}/insert-class`,
                finalData
            );
            return result;
        },

        onSuccess: (result) => {
            if (result?.data?.insertedId) {
                toast.success("Class Added Successfully!");
                setLoading(false);
                reset();
            }
        },

        onError: (error) => {
            toast.error("Something went wrong!");
            setLoading(false);
            console.error(error);
        }
    });

    const onSubmit = (data) => {
        setLoading(true);
        addClassMutation.mutate(data);
    };

    return (
        <div className='w-full max-h-screen  justify-center  items-center p-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-6 bg-base-100 rounded-lg shadow-md space-y-4">
                <h2 className="text-2xl font-semibold text-center">Add a New Class</h2>

                {/* Title */}
                <div>
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input {...register('ClassTitle')} type="text" placeholder="Class Title" className="input input-bordered w-full" required />
                </div>

                {/* Name (not editable) */}
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("TeacherName")} type="text" value={User?.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
                </div>

                {/* Email (not editable) */}
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("TeacherEmail")} type="email" value={User?.email} readOnly className="input input-bordered w-full bg-gray-100" />
                </div>

                {/* Price */}
                <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register("ClassPrice")} type="number" placeholder="Enter Price" className="input input-bordered w-full" required />
                </div>

                {/* Description */}
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("Description")} className="textarea textarea-bordered w-full" placeholder="Enter description..." required></textarea>
                </div>

                {/* Image upload */}
                <div>
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register("Image")} className="file-input file-input-bordered w-full" accept="image/*" required />
                </div>

                {/* Submit button */}
                <div className="text-center">
                    <button type='submit' className="btn btn-primary w-full">
                        {
                            loading ?
                                <span className='loading loading-spinner text-center text-white'></span>
                                :
                                "Add Class"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;