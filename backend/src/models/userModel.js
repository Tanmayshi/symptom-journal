const {mongoose,Schema}=require("mongoose");

const jwt =require("jsonwebtoken")
const bcrypt =require('bcrypt')


const user=new Schema({
      
      userName:{
        type:String,
        lowercase: true,
        required:true,
        index:true,
       },
       email:{
        type:String,
        unique:true,
        lowercase: true,
        required:true,
       },
       token:{
        type:String
       },
      fullName:{
        type:String,
        required:true,
        index:true,
    
       },
      
      password:{
        type:String,
        unique:true,
        required:true,
    
       },
       updateAt:{
        type:String
       },
       refreshToken:{
        type:String
       },
       age:{
        type:Number
       },
       gender:{
        type:String
       }
       
});

user.pre("save",async function(next){
  console.log("Password before hashing:", this.password); // Add this line
       if(this.isModified("password")){
          this.password= await bcrypt.hash(this.password,10);
          console.log("Hashed password:", this.password); // Add this line
       }

       next()

})

user.methods.isPasswordCorrect=async function (password){
  let planePassword=password;
  const bcryptPassword=this.password
  console.log(`${planePassword}or ${bcryptPassword}`)
    const isMatch= bcrypt.compareSync(password,this.password);
    console.log(isMatch);
                                                                                    
    return isMatch;


          }
  



user.methods.genretAccessToken=async function (password){
     try {
      return await jwt.sign(
        {
          id:this._id,
          email:this.email,
          username:this.username,
          fullName:this.fullName,
        },
          process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn:process.env.ACCESS_TOKEN_EXPIREY,
        }
  
       )
     } catch (error) {
        throw new Error("access token is not generated");
        
     }
}

user.methods.genretRefreshToken =async function (password) {
  try {
    return await jwt.sign(
      {
        id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName,
      },
        process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn:process.env.REFRESH_TOKEN_EXPIREY,
      }

     )
  } catch (error) {
    throw new Error("refresh token is not generated");
    
  }
}

const User=mongoose.model("User",user);

module.exports=User;


