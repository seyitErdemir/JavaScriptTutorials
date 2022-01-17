const User = require('../models/User')
const CustomError = require('../helpers/error/CustomError')
const asyncErrorWrapper = require('express-async-handler')

const register =  asyncErrorWrapper(async (req, res, next) => {
  //POST DATA
  
  const {name,email,password,role} = req.body
   
    const user = await User.create({
      name,
      email,
      password,
      role
    })

    res.status(200).json({
      succes: true,
      data: user
    })
    
})

const errorTest = (req, res, next) => {
  return next(new TypeError('Type Error message')) 
}

module.exports = {
  register,
  errorTest
}
