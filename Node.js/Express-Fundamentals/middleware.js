const accesControl =(req,res,next)=>{
    const access = true 
    if (!access) {
        res.status(401).json({
            success: false,
            message:"You are not authorized"
        })
    }
    next()
}

 
module.exports ={
    accesControl 
}