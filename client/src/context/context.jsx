/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [isSignup, setIsSignUp] = useState(true);
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/auth/me');
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);


  const switchForm =() =>{
    setIsSignUp((prevIsSignup)=>!prevIsSignup )
  }

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await api.post('/auth/signup', signupData);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/accounts/login');
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await api.post('/auth/login', loginData);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/account');
  };

  return (
    <GlobalContext.Provider
      value={{
        signupData,
        setSignupData,
        loginData,
        setLoginData,
        isSignup,
        setIsSignUp,
        switchForm,
        user,
        loading,
        error,
        handleSignup,
        handleLogin,
        logout
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
