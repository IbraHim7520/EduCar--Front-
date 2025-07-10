import React from 'react';
import webLogo from "../imgs/logo.webp"
import { Outlet } from 'react-router';
import MyEnrollClass from "../Dashbord/DashbordMenu/Student/MyEnrollClass"
import useAuth from '../CustomHooks/useAuth';
import Profile from './DashbordMenu/Profile';
import AllUsers from "../Dashbord/DashbordMenu/Admin/Users"
import AllClasses from "../Dashbord/DashbordMenu/Admin/AllClass"
import TecherReq from "../Dashbord/DashbordMenu/Admin/TecherReq"

import AddClass from "../Dashbord/DashbordMenu/Teacher/AddCls"
import TecherClass from "../Dashbord/DashbordMenu/Teacher/MyCls"
const Dashbord = () => {
    const {User} = useAuth();
    return (
        <div>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <a href="/">
                    <img className="w-28" src={webLogo} alt="dummyLogoColored" />
                </a>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className="flex w-full ">
                <div className="w-1/4  flex flex-col items-center min-h-screen border-r-1 grow ">
                    <MyEnrollClass></MyEnrollClass>
                    <Profile></Profile>
                    <AllUsers></AllUsers>
                    <AllClasses></AllClasses>
                    <TecherReq></TecherReq>
                    <AddClass></AddClass>
                    <TecherClass></TecherClass>
                </div>

                <div className="w-3/4   grid min-h-screen p-5 grow ">
                
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;