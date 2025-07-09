import React, { useEffect, useState } from 'react';
import AuthenticatonContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './firebase.config';

const AuthProvider = ({children}) => {
    const [User , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
                setLoading(false)
            }
        })
        return ()=>{ unsubscribe()}
    },[])

    const LoginUser = (email , pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , pass);
    }

    const SignupUser = (email , pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , pass);
    }
    const UserLogout = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const GoogleLogin = () =>{
        return signInWithPopup(auth , provider);
    }

    const UserInfo = {
        SignupUser,
        LoginUser,
        User,
        UserLogout,
        loading,
        GoogleLogin
    }
    return (
        <AuthenticatonContext value={UserInfo}>
            {children}
        </AuthenticatonContext>
    );
};

export default AuthProvider;