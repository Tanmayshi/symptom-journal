import React, { useState } from 'react'
import { createContext } from 'react'

const UserContext=createContext();

function UserContextProvider({children}) {


  const [userData,setUserData]=useState({});
  const[isAuthenticated,setIsAuthenticated]=useState(false)
  console.log(userData);
  
  return (
    <UserContext.Provider
    value={{userData,setUserData,isAuthenticated,setIsAuthenticated}}
    >

    {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider,UserContext}
