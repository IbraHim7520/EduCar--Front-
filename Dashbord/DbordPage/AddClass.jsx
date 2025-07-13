import React from 'react';
import { useForm } from 'react-hook-form';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
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
                    <input {...register("TeacherName")} type="text" value="Md Ibrahim" readOnly className="input input-bordered w-full bg-gray-100" />
                </div>

                {/* Email (not editable) */}
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("TeacherEmail")} type="email" value="ibrahim@example.com" readOnly className="input input-bordered w-full bg-gray-100" />
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
                    <input type="file" {...register("Image")}  className="file-input file-input-bordered w-full" accept="image/*" required />
                </div>

                {/* Submit button */}
                <div className="text-center">
                    <button type='submit' className="btn btn-primary w-full">Add Class</button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;