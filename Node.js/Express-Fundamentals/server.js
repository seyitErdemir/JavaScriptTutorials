const express = require("express")
const {accessControl, accesControl} = require("./middleware")


const users =[
       {id:1, name:"seyit",place:"Konya"} ,
      {id:2, name:"arif",place:"Ankara"}  
]


const app =express()
const PORT =5000

app.use(accesControl)//uygulama kapsamında

//Get Request
//localhosy:5000/users
app.get("/users",(req,res,next)=>{
    res.json(users)
})
app.get("/products",(req,res,next)=>{
    res.send("products sssssssaaassss")
})

app.listen(PORT,()=>{
    console.log("Server Started PORT: "+ PORT)
})