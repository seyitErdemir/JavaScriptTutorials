const bcrypt = require('bcryptjs')

const valideteUserInput = (email, pasword) => {
  return email && pasword
}

const comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword)
}

module.exports = { comparePassword, valideteUserInput }
