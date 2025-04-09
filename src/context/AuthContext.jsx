import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const LoginContext=createContext()


const AuthContext = ({children}) => {
    const[isLoggined,setIsLoginned]=useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            setIsLoginned(true)
        }
        else{
            setIsLoginned(false)
        }
    },[isLoggined])
  return (
    <div>
        <LoginContext.Provider
        value={{isLoggined,setIsLoginned}}>
            {children}

        </LoginContext.Provider>
      
    </div>
  )
}

export default AuthContext
