import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextApi";
import { loginUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate=useNavigate();
  const { setUserData ,setIsAuthenticated} = useContext(UserContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    const response = await loginUser(formData);
    console.log(response.data.status,"this is login ifo");
    
  console.log("Login response", response);

  if (response?.data?.status === 201) {
    setUserData(response.data); 
    setIsAuthenticated(true)
    navigate("/dashboard");
  } else {
    setError(response?.data?.message || "Login failed.");
  }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        {/* Email */}
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

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-sm text-right mb-6">
          <Link
            to="/forgot-password"
            className="text-cyan-400 hover:underline transition-all"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
           onClick={submitForm}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Login
        </button>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Register Link */}
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/api/v1/user/register"
            className="text-cyan-400 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default LoginForm;
