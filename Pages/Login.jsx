import React, { useState } from 'react';
import loginImg from "../imgs/loginImg.jpg"
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../CustomHooks/useAuth';
import Loading from '../Components/Loading';
const Login = () => {
    const {GoogleLogin , LoginUser} = useAuth();
    const {register , handleSubmit , formState: {errors} } = useForm()
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    const onSubmit = (data) =>{
        setLoading(true)
        const {email , pass} = data
        LoginUser(email , pass)
            .then((res)=> {
                if(res){
                    setLoading(false)
                    toast.success("Login successfull!")
                    navigate("/");
                }
            }).catch(err=>{
                setLoading(false)
                toast.error("Invalid credentials!")
            })
    }

    const handleGoogleLogin = () =>{
        setLoading(true)
        GoogleLogin().then(res =>{
            if(res){
                setLoading(false)
                toast.success("Login Successfull!")
                navigate("/")
            }else{
                setLoading(false)
                toast.error("Something went wrong!")
            }
        })
    }
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='container justify-items-center p-5 gap-5 grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full mx-auto bg-base-200 shadow-lg'>
            <div>
                <img src={loginImg} className='w-96 md:w-full'></img>
            </div>
            <div class="w-full flex flex-col items-center justify-center">

        <form onSubmit={handleSubmit(onSubmit)} class="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 class="text-4xl text-gray-900 font-medium">Log in</h2>
            <p class="text-sm text-gray-500/90 mt-3">Welcome back! Please sign in to continue</p>

            <button onClick={handleGoogleLogin} type="button" class="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
                    {
                                        loading ? 
                <Loading></Loading>
                :
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo"></img>
                    }
            </button>

            <div class="flex items-center gap-4 w-full my-5">
                <div class="w-full h-px bg-gray-300/90"></div>
                <p class="w-full text-nowrap text-sm text-gray-500/90">or sign in with email</p>
                <div class="w-full h-px bg-gray-300/90"></div>
            </div>

            <div class="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                </svg>
                <input {...register("email", {required:true})} type="email" placeholder="Email id" class="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required></input>                
            </div>

            <div class="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                </svg>
                <input {...register("password", {required:true})} type="password" placeholder="Password" class="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required></input>
            </div>

            <div class="w-full flex items-center justify-end mt-8 text-gray-500/80">
                <a class="text-sm  underline" href="#">Forgot password?</a>
            </div>

            <button type="submit" class="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                {
                    loading ? 
                    <Loading></Loading>
                    :
                    "Login"
                }
            </button>
            <p class="text-gray-500/90 text-sm mt-4">Don’t have an account? <Link to={"/signup"}
             class="text-indigo-400 hover:underline" href="#">Sign up</Link></p>
        </form>
    </div>

            </div>
        </div>
    );
};

export default Login;