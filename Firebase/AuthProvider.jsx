import React, { use, useEffect, useState } from 'react';
import AuthenticatonContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './firebase.config';
import axios from 'axios';
import { data } from 'react-router';

const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()
    const [UserRole , setUserRole] = useState(null);
    //${import.meta.env.VITE_API_URL}/get-role/${User?.email}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email: user?.email})
                .then(res=>{
                    console.log(res?.data?.token);
                    localStorage.setItem('token', res.data.token);
                })
                setLoading(false)
            }
           
        })
        return () => { unsubscribe() }
    }, [])

    useEffect(() => {
       if(User?.email){
         const getUserRole = async () => {
            axios.get(`${import.meta.env.VITE_API_URL}/get-role/${User?.email}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(data=>{
              //  console.log(data?.data);
                setUserRole(data?.data);
            })
        }
        getUserRole();
       }
        
    }, [User?.email])

    const LoginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const SignupUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const UserLogout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const GoogleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    const UserInfo = {
        SignupUser,
        LoginUser,
        User,
        UserLogout,
        loading,
        setUser,
        GoogleLogin,
        UserRole
    }
    return (
        <AuthenticatonContext value={UserInfo}>
            {children}
        </AuthenticatonContext>
    );
};

export default AuthProvider;