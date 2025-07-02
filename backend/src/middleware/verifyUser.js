const asyncHandlar=require("../utils/asyncHandlar");
const User=require("../models/userModel");
const jwt=require("jsonwebtoken");

const verifyUser=asyncHandlar(async function (req, res, next) {
    
  
    
    const token = req.cookies    ; 
  
      if (!token) {
           
      throw new Error("do not have access token");
           
    };
 
   const authUser= await jwt.verify(token.accessToken,process.env.ACCESS_TOKEN_KEY);
   
   
   
   
     
   const validUser= await User.findById(authUser.id);
   

   
 
   req.user=validUser;
  
   next();
  

});


module.exports=verifyUser;