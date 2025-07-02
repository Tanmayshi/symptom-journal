const asyncHandlar=(request)=>{
    return    (req,res,next)=>{
            Promise.resolve(request(req,res,next)).catch((error)=> next(`${error}`)
            )
        }
    }
    
    module.exports=asyncHandlar;
    