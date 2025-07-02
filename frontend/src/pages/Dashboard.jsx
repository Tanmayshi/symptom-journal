import React from 'react'
import Navbar from '../components/layout/Navbar'
import ChromaGrid from '../components/ui/ChromaGrid'
import { useEffect } from 'react'
import axios from"axios"
import { SymptomContext } from '../context/SymptomContextApi'
import { UserContext } from '../context/UserContextApi'
import { useContext } from 'react'
  function Dashboard () {
    const {setSymptoms}=useContext(SymptomContext)
  useEffect(()=>{
    (async()=>{
    const user=await axios.get("/api/v1/symptom/getSymptoms");
    console.log(user.data.data);
    setSymptoms(user.data.data)
    })()
    
  },[])
  return (
    <div className='bg-black'>
      <div><Navbar/></div>
<div className='min-h-screen ' style={{  position: 'relative' ,paddingTop:"5rem"}}>
  <ChromaGrid 
    
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
    </div>
  )
}

export default Dashboard
