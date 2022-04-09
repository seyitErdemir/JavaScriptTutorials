const User = require('../models/User')


module.exports = (roles) => {
   
    return  async (req, res, next) => {

        
        const user = await User.findById({_id:req.session.userID})
     
        // const userRole = req.body.role 
        const userRole = user.role
 
        if (roles.includes(userRole)) {
            next()
        } else {
            return res.status(401).send("you cant do it")
        }

    }

}