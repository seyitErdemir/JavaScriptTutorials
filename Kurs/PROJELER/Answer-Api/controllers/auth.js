const User = require('../models/User')
const CustomError = require('../helpers/error/CustomError')
const asyncErrorWrapper = require('express-async-handler')
const { sendJwtToClient } = require('../helpers/authorization/tokenHelpers')
const {  valideteUserInput , comparePassword}= require('../helpers/input/inputHelpers')

const register = asyncErrorWrapper(async (req, res, next) => {
  //POST DATA

  const { name, email, password, role } = req.body

  const user = await User.create({
    name,
    email,
    password,
    role
  })

  sendJwtToClient(user, res)
})

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body
  if (!valideteUserInput(email, password)) {
    return next(new CustomError('Plase check your inputs', 400))
  }

  const user = await User.findOne({ email }).select('+password')
  if (!comparePassword(password, user.password)) {
    return next(new CustomError('Please check your credentials ', 400))
  }

  sendJwtToClient(user, res)
})

const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name
    }
  })
}

module.exports = {
  register,
  getUser,
  login
}
