import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const res = await axios.post("/api/v1/user/resister", userData);

       return {
      success: true,
      ...res.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || 500,
      message:
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "Unknown error occurred",
    };
  }
};

export const loginUser =async(userData)=>{
     try {
         const user=await axios.post("/api/v1/user/login",userData);
          
         console.log(user.data.status,"this si spi");
         
         
         return  user
     } catch (error) {
       return error;
       
     }
}
