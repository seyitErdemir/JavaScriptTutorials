const express = require('express')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const { body, validationResult } = require('express-validator')

const User = require('../models/User')

const router = express.Router()

router.route('/singup').post(
    [
        body('name').not().isEmpty().withMessage("please enter your name"),


        body('email').isEmail().withMessage("please enter your Email")
        .custom((userEmil) =>{
            return User.findOne({ email: userEmil}).then(user => {
                if(user){
                    return Promise.reject("Email is alredy exists")
                }
            })
        }) , 
        
        body('password').not().isEmpty().withMessage("please enter a password")

    ], authController.createUser) //   http://localhost:3000/users/singup

router.route('/login').post(authController.loginUser) //   http://localhost:3000/users/login
router.route('/logout').get(authController.logoutUser) //
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage) //  http://localhost:3000/users/dashboard
router.route('/:id').delete(authController.deleteUser) // http://

module.exports = router
