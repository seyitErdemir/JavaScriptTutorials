const CustomError = require('../../helpers/error/CustomError')
const jwt = require('jsonwebtoken')
const {isTokenIncluded , getAccessTokenFromHeader } = require('../../helpers/authorization/tokenHelpers')
const getAccessToRoute = (req, res, next) => {
  //token
  const {JWT_SECRET_KEY} =process.env

   if (!isTokenIncluded(req)) {
     //herhangi bir token gelmedi 
     //401 unauthorized
     //403 forbiden
      return next(new CustomError("You are not outhorized to acces this route",401))
   }

   const accessToken = getAccessTokenFromHeader(req)
   jwt.verify(accessToken, JWT_SECRET_KEY,(err,decoded) =>{
     if(err) {
       return next(new CustomError("You are not outhorized to acces this route",401))
     }

     req.user = {
       id : decoded.id,
       name : decoded.name

     }
     console.log(decoded)
     next()

   })

}

module.exports = { getAccessToRoute }
