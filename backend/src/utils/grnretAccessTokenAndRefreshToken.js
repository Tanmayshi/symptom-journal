const User=require("../models/userModel");

const grnretAccessTokenAndRefreshToken =async function(userId){
    try {
     const user= await  User.findById(userId)
       console.log(user);
       
     const accessToken=await user.genretAccessToken();
     const refreshToken=await user.genretRefreshToken();

     user.refreshToken=refreshToken;
     await user.save({validebefoursave:false})
  
    return{accessToken,refreshToken};
;


    } catch (error) {
        throw new Error("token is not generated");
        
    }
}

module.exports=grnretAccessTokenAndRefreshToken