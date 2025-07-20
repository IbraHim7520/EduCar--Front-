import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import GetAllClass from "../Pages/AllClass"
import Signup from "../Pages/Signup";
import Dashbord from "../Dashbord/Dashbord";
import TeachOnSkillUp from "../Pages/TeachOnSkillUp";
import MyProfile from "../Dashbord/DbordPage/MyProfile"

//---------------Base users page--------------------------
import MyEnrollClass from "../Dashbord/DbordPage/MyEnRollClass"

//------------Teacher Pages-----------------
import MyClass from "../Dashbord/DbordPage/MyClass"
import AddClass from "../Dashbord/DbordPage/AddClass"

//---------Admin Pages---------------------
import Users from "../Dashbord/DbordPage/Users"
import AllClass from "../Dashbord/DbordPage/AllClass"
import TeacherReq from "../Dashbord/DbordPage/TcherReq"

import { Component } from "react";
import ClassDetails from "../Pages/ClassDetails";
import axios from "axios";
import MyClassDetails from "../Dashbord/DbordPage/MyClassDetails";
import Payment from "../Pages/Payment";
import EnrollClassDetails from "../Dashbord/DbordPage/EnrollClassDetails";


const BaseUser = [
    {index:true , path: "my-enrollment" , Component:MyEnrollClass },
    { path:"my-profile", Component:MyProfile }
]
const Teacher = [
    {index: true, path : "my-classes", Component: MyClass},
    {path:"add-classes", Component:AddClass},
    {path:"my-profile",Component:MyProfile}
]

const Admin = [
    {index:true , path: "all-users", Component:Users },
    {path: "all-classes", Component:AllClass},
    {path:"teacher-requests", Component:TeacherReq},
    {path:"my-profile",Component:MyProfile}
]
const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/get-all-classes",
                Component: GetAllClass
            },
            {
                path:"/teach-in-here",
                Component: TeachOnSkillUp
            },
            {
                path: "class-details/:id",
                loader : async({params})=> await axios.get(`${import.meta.env.VITE_API_URL}/get-class/${params.id}`), 
                Component:ClassDetails
            }

        ]
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/signup",
        Component: Signup
    },
    {
        path: "/dashbord",
        Component:Dashbord,
        children: [
            {index:true , path: "my-enrollment" , Component:MyEnrollClass },
            { path:"my-profile", Component:MyProfile },

            {path : "my-classes", Component: MyClass},
            {path:"add-classes", Component:AddClass},
            {path:"my-profile",Component:MyProfile},

            {path: "all-users", Component:Users },
            {path: "all-classes", Component:AllClass},
            {path:"teacher-requests", Component:TeacherReq},
            {path:"my-profile",Component:MyProfile}
            
        ]
    },
    {
        path: "/my-class-details/:id",
        Component: MyClassDetails
    },
    {
        path: "/make-payment/:id",
        Component: Payment
    },
    {
        path: "/enrolled-class-details/:id",
        Component:EnrollClassDetails
    }
])
export default router





//----------Student Dashbord-----------------
// [
//             {
//                 index: true,
//                 path: "my-enrollment",
//                 Component: MyEnrollClass
//             },
//             {
//                 path: 'my-profile',
//                 Component: MyProfile
//             }
// ]