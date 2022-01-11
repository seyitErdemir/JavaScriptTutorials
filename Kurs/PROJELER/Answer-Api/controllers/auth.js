const User = require('../models/User')

const register = async (req, res, next) => {
  //POST DATA

  const name = 'Arif Erdemir'
  const email = 'arif@gmail.com'
  const password = '1234'

  //async await

  const user = await User.create({
    name,
    email,
    password
  })

  res.status(200).json({
    succes: true,
    data: user
  })
}

module.exports = {
  register
}
