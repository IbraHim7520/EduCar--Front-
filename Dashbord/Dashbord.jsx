import webLogo from "../imgs/logo.webp"
import { Link, Outlet } from 'react-router';
import MyEnrollClass from "../Dashbord/DashbordMenu/Student/MyEnrollClass"
import useAuth from '../CustomHooks/useAuth';
import Profile from './DashbordMenu/Profile';
import AllUsers from "../Dashbord/DashbordMenu/Admin/Users"
import AllClasses from "../Dashbord/DashbordMenu/Admin/AllClass"
import TecherReq from "../Dashbord/DashbordMenu/Admin/TecherReq"

import AddClass from "../Dashbord/DashbordMenu/Teacher/AddCls"
import TecherClass from "../Dashbord/DashbordMenu/Teacher/MyCls"

const Dashbord = () => {
const {UserRole} = useAuth()
    console.log(UserRole?.Role)
    return (
        <div>
            <div className="flex overflow-x-auto items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <a href="/">
                    <img className="w-28" src={webLogo} alt="dummyLogoColored" />
                </a>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Dashbord</p>
                    <Link to={"/"} className='border rounded-full text-sm px-4 py-1'>Logout</Link>
                </div>
            </div>
            <div className="flex w-full ">
                <div className="w-0.5/4  flex flex-col items-center min-h-screen border-r-1 grow ">
                    {
                        UserRole?.Role === "Student" ? 
                        <div className='w-full'>
                    <MyEnrollClass></MyEnrollClass>
                    <Profile></Profile>
                        </div>
                        :
                        <div>
                            
                        </div>
                    }

                   {
                    UserRole?.Role === "Admin" ?
                    <div className='w-full'>
                    <AllUsers></AllUsers>
                    <AllClasses></AllClasses>
                    <TecherReq></TecherReq>
                     <Profile></Profile>
                    </div>
                    :
                    <div></div>
                   }
                   {
                    UserRole?.Role === "Teacher" ?
                    <div className='w-full'>
                    <AddClass></AddClass>
                    <TecherClass></TecherClass>
                     <Profile></Profile>
                    </div>
                    :
                    <div></div>
                   }

                    
                </div>

                <div className="w-3/4   grid min-h-screen p-5 grow ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;