const CustomError = require('../../helpers/error/CustomError')

const customErrorHandler = (err, req, res, next) => {
  let customError = err

  //hata türünü anlamak için kullanılan satır
    // console.log(err.name)  

  if (err.name === 'SyntaxError') {
    customError = new CustomError('Unexpected Syntax')
  }

  if (err.name === 'ValidationError') {
    customError = new CustomError(err.message,400)
  }
  if(err.code==11000){
    customError = new CustomError("Dublicate Key Found : Check your Input",400)

  }

  // console.log(  customError.message, customError.status)


  res.status(customError.status || 500).json({
     success: false,
     message: customError.message
     })
}

module.exports = customErrorHandler
