import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

const SymptomContext=createContext()

function SymptomContextApi({children}) {
    const [symptoms , setSymptoms]=useState([]);
    
  return (
    <SymptomContext.Provider
    value={{symptoms , setSymptoms}}>
      {children}
    </SymptomContext.Provider>
  )
}

export  {SymptomContextApi,SymptomContext}
