import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { createBrowserRouter,  RouterProvider,}from 'react-router-dom';
import RegisterForm from './pages/RegisterForm.jsx'
import { UserContextProvider } from './context/UserContextApi.jsx'
import LoginForm from './pages/LoginForm.jsx'
import AddEntryForm from './pages/AddEntryForm.jsx'
import TrendChart from './pages/TrendChart.jsx'
import { SymptomContextApi } from './context/SymptomContextApi.jsx'
const routes=createBrowserRouter([
 {
  path:"/",
  element:<App/>
 },
 {
  path: "dashboard",
  element:<Dashboard/>
 },
  {
  path: "/Login",
  element:<LoginForm/>
 },
 {
 
  path: "/register",
  element:<RegisterForm/>

 },
 {
 
  path: "/Symptom-Trends",
  element:<TrendChart/>

 },
 {
 
  path: "/add-symptom",
  element:<AddEntryForm/>

 },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      
     <SymptomContextApi>

    <RouterProvider router={routes} /> 


     </SymptomContextApi>
     


    </UserContextProvider>
   
  </StrictMode>,
)
