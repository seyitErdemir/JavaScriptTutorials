const express = require('express')
const { body, validationResult } = require('express-validator')

const adminController = require('../controllers/adminController')

const authMiddleware = require('../middlewares/authMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')

const User = require('../models/User')




const authController = require('../controllers/authController')


const router = express.Router()



router.route('/').get( [authMiddleware , roleMiddleware([  'admin']) ] , adminController.getIndexPage) //   http://localhost:3000/admin/
router.route('/users').get( [authMiddleware , roleMiddleware([  'admin']) ] ,  adminController.getUsersPage) //   http://localhost:3000/admin/users
router.route('/users/:id').delete( [authMiddleware , roleMiddleware([  'admin']) ] ,  adminController.deleteUser) // http://localhost:3000/admin/users/id

//panel için giriş  sayfası   ,   kullanıcıları listeleme ve silme  bölümleri oluşturuldu



router.route('/login').post(authController.loginUser) //   http://localhost:3000/users/login
router.route('/logout').get(authController.logoutUser) //
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage) //  http://localhost:3000/users/dashboard
router.route('/:id').delete(authController.deleteUser) // http://

module.exports = router
