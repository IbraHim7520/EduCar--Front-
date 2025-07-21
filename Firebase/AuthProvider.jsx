import React, { useEffect, useState } from 'react';
import AuthenticatonContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import auth from './firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [UserRole, setUserRole] = useState(null);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.email) {
        try {
          setUser(user);

          // Fetch JWT token
          const jwtRes = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: user.email
          });
          localStorage.setItem('token', jwtRes.data.token);

          // Fetch user role
          const roleRes = await axios.get(`${import.meta.env.VITE_API_URL}/get-role/${user.email}`, {
            headers: {
              Authorization: `Bearer ${jwtRes.data.token}`
            }
          });
          setUserRole(roleRes.data);
        } catch (err) {
          console.error('Auth Error:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const LoginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const SignupUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const UserLogout = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const UserInfo = {
    SignupUser,
    LoginUser,
    User,
    UserLogout,
    loading,
    setUser,
    GoogleLogin,
    UserRole
  };

  return (
    <AuthenticatonContext value={UserInfo}>
      {children}
    </AuthenticatonContext>
  );
};

export default AuthProvider;
