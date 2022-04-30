const express = require('express')
const mainRoute = require('./routes/mainRoute')


const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/', mainRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})