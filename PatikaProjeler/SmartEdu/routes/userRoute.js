const express = require('express')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')


const router = express.Router()

router.route('/singup').post(authController.createUser) //   http://localhost:3000/users/singup

router.route('/login').post(authController.loginUser) //   http://localhost:3000/users/login
router.route('/logout').get(authController.logoutUser) // 
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage) //  http://localhost:3000/users/dashboard

module.exports = router