/* eslint-disable react/prop-types */
import {createContext, useState} from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    
    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
      });
      const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
      const [user,setUser] = useState(null)

    return <GlobalContext.Provider value={{signupData, setSignupData,loginData, setLoginData,user,setUser}}>{children}</GlobalContext.Provider>
}