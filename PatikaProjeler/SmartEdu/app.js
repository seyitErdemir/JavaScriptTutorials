const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');

const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')

const app = express()

//connect Db

mongoose
    .connect('mongodb://localhost/smartedu-db')
    .then(() => {
        console.log('MongoDb connection succesful')
    })
    .catch(err => {
        console.error(err)
    })

//template engine
app.set('view engine', 'ejs')

//global veriables
global.userIN = null

//Middlewares

app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(
    session({
        secret: 'my_keyboard_cat',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' })
    })
)


//route
app.use('*', (req, res, next) => {
    userIN = req.session.userID
    next()
})
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)

const port = 3000
app.listen(port, () => {
    console.log(`App Listen  ${port} `)
})