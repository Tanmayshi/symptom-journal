const express=require("express");
const app=express();
const cors=require("cors")
const  cookie_parser=require("cookie-parser")

app.use(cors());
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookie_parser())


const router=require("./routes/routes")
app.use("/api/v1/user/",router)
app.use("/api/v1/symptom/",router)


app.listen(process.env.PORT,()=>{
     console.log("server start on port no ",process.env.PORT);
     
})