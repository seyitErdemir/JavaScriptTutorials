const express = require('express')
const fs = require('fs')
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST']
  })
)
app.use(fileUpload())

app.get('/', (req, res) => {
  const img = 1
  res.render('../index', {
    img
  })
})

app.post('/example', (req, res) => {
  try {
    const uploadDir = 'public/images'
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir)
    }
    if (!(!req.files || Object.keys(req.files).length === 0)) {
      let uploadImage = req.files.image
      const type = uploadImage.mimetype.slice(
        uploadImage.mimetype.search('/') + 1
      )
      const imageName = Math.floor(Math.random() * 1000000000000000000)
      let uploadPath = __dirname + '/public/images/' + imageName + '.' + type
      uploadImage.mv(uploadPath)

      const message = { success: 'Kayıt işlemi başarılı' }
      const img = imageName + '.' + type
      res.status(200).render('../index', {
        img,
        message
      })
    }
  } catch (e) {
    res.status(400).render('../index', {})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
