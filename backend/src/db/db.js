const mongoose=require("mongoose");

const MongodbConnection=(req,res)=>{
         try {
            mongoose.connect(`${process.env.MONGODB_STRING}${process.env.MONGODB_NAME}`)
            console.log("db connetion sussefully");
            
         } catch (error) {
            console.log("mongodb connetion error"+error);
            process.exit(1);
            
         }
    }

    module.exports=MongodbConnection