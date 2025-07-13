import React from 'react';
import useAuth from '../CustomHooks/useAuth';
import { useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {User} = useAuth();
    const navigate = useNavigate();
    if(!User){
        return navigate("/login")
    }
    return children
};

export default PrivateRoute;