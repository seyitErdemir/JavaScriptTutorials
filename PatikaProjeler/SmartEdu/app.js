const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require("method-override")
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')

const app = express()

//connect Db
// .connect('mongodb://localhost/smartedu-db')

mongoose
    .connect('mongodb+srv://dbUser:8vLqamfpn1JsgVu5@cluster0.deskt.mongodb.net/smartedu-db?retryWrites=true&w=majority')
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
        store: MongoStore.create({ mongoUrl: 'mongodb+srv://dbUser:8vLqamfpn1JsgVu5@cluster0.deskt.mongodb.net/smartedu-db?retryWrites=true&w=majority' })
    })
)
app.use(flash());
app.use((req, res ,next) => {
    res.locals.flashMessages = req.flash()
    next()
})
app.use(methodOverride('_method' , {
    methods : ['GET', 'POST']
}))



//route
app.use('*', (req, res, next) => {
    userIN = req.session.userID
    next()
})
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App Listen  ${port} `)
})