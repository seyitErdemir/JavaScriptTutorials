const express = require('express')
const dotenv = require('dotenv')
// const question =require("./routers/question")    1. bölüm
// const auth =require("./routers/auth")
const connectDatabase = require('./helpers/database/connectDatabase')
const customErrorHandler = require('./middlewares/errors/customErrorHandler')
const path = require("path")

const routers = require('./routers')

//enviromenment Veriables
dotenv.config({
  path: './config/env/config.env'
})

//MongoDb COnnection
connectDatabase()

const app = express()

//express - body middleware
app.use(express.json())

const PORT = process.env.PORT

//routers Middleware
// app.use("/api/questions",question)   1. bölüm
// app.use("/api/auth",auth)
// app.use("/api/answers" )

app.use('/api', routers)

//error handler
app.use(customErrorHandler)

//static files
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
  console.log(`App started on   ${PORT}  :  ${process.env.NODE_ENV}`)
})
