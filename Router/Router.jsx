import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashbord from "../Dashbord/Dashbord";
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
        children: BaseUser
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