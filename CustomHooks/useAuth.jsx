import React, { use } from 'react';
import AuthenticatonContext from '../Firebase/AuthContext';

const useAuth = () => {
    const AuthInfo = use(AuthenticatonContext)
   return AuthInfo
};

export default useAuth;