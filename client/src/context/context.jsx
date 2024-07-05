/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

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
  const switchForm =() =>{
    setIsSignUp((prevIsSignup)=>!prevIsSignup )
  }

  return (
    <GlobalContext.Provider
      value={{
        signupData,
        setSignupData,
        loginData,
        setLoginData,
        isSignup,
        setIsSignUp,
        switchForm
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
