import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import {UserContext} from "../context/UserContextApi";
import {registerUser} from "../api/userApi"
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const {setUserData,setIsAuthenticated,isAuthenticated}=useContext(UserContext);
  const navigate=useNavigate()
  const [error,setError]=useState("");
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });
  const submitFrom = async (e) => {
  e.preventDefault();

  const response = await registerUser(formData);

  if (!response.success) {
   
    if (response.status === 409) {
      setError(response.message);
      console.error(" User already exists:", response.message);
    } else {
            setError(response.message);

      console.error(" Registration failed:", response.message);
    }
    return;
  }

  if (response.status==201) {
    navigate("/dashboard")
  }
 
  console.log(" User registered successfully!");
  console.log(response.data);

  setUserData(response.data);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Register</h2>
                <h2 className="text-3xl font-bold mb-6 text-center text-red">{error}</h2>


       
        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

       
        <div className="mb-4">
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

      
        <div className="mb-4">
          <label className="block text-sm mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select</option>
            <option value="Male">👦 Male</option>
            <option value="Female">👧 Female</option>
            <option value="Other">🌈 Other</option>
          </select>
        </div>

        <button
          onClick={submitFrom}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Create Account
        </button>
      </motion.form>
    </div>
  );
};

export default RegisterForm;
