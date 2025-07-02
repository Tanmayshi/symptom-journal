const asyncHandlar=require("../utils/asyncHandlar");
const User=require("../models/userModel");
const grnretAccessTokenAndRefreshToken=require("../utils/grnretAccessTokenAndRefreshToken")


//user resister
const userResister=asyncHandlar(async(req,res)=>{
    const {userName,password,email,fullName,age,gender}=req.body;
    
   if ([userName,email,password].some((fileds)=>fileds?.trim()==="") ){
    console.log("place fill all deaitls");
   };

   console.log(userName);
   

 const exirts= await User.findOne({$or:[{userName},{email}]})

 if (exirts) {
    return res.status(409).json("user has been already exits")
    
 }

 


const user= await User.create({
    userName,
    age,
    gender,
    email,
    password,
    fullName


});




let userdailets=await User.findById(user._id).select(
  "-password -refreshToken"
).exec();


if (!userdailets) {
  throw new Error("somthing went worng for create user");

  
}

console.log("user is created successfully");


const apiResponce = (status, data, message) => {
    return {
        status,
        data,
        message,
        
    };
  };
  return res.status(201).json(apiResponce(201,userdailets, "User created successfully"));

});

//login User
const loginUser =asyncHandlar(async(req,res)=>{
    
      let {  email, password } = req.body;
      password = password.trim();

      console.log(req.body); 

      if (!email ||!password ) {
        return res.status(400).json({ message:`place provide all deaitls username or email` });
      }
      
      
    const user=await User.findOne({
      $or:[{email}]
    });
      
       
      if (!user) {
          throw new Error("user not found");
      }
           
           
      if (!password) {
          throw new Error("place fill password");
          
      }
          
           
     const validPassword= await user.isPasswordCorrect(password);
     
     
     if (validPassword == false) {
      console.log("Invalid password");
      
      return res.status(401).json({
        message: "Invalid password! Please enter a valid password"
      });
    }
     const {refreshToken,accessToken}=await grnretAccessTokenAndRefreshToken(user._id)

     const loginduser=await User.findById(user._id).select("-password -refreshToken");

   const option={
    httpOnly:true,
    secure:true
   };
   const apiResponce = (status, data, message) => {
    return {
        status,
        data,
        message
    };
   };

   console.log(loginduser+"gjgh");
   

     return res.
     status(201).
     cookie("accessToken",accessToken,option)   
     .cookie("refreshToken",refreshToken,option)
     .json(apiResponce(201,loginduser,"user sucess fully login") ) 
      
      
})

module.exports={userResister,loginUser};

