const User = require('../models/User')

exports.getIndexPage = async (req, res) => {
    // console.log(req.session.userID);
 

    res.status(200).render('./panel/index', { page_name: 'index'  })
}


exports.getUsersPage= async (req, res) => {
    // console.log(req.session.userID);
    const users = await User.find()

    res.status(200).render('./panel/users', { page_name: 'index'  , users })
}



exports.deleteUser = async (req, res) => {
 
    try {   
     const user=  await User.findByIdAndRemove({_id:req.params.id}) 
    //  await Course.deleteMany({user:req.params.id}) 
    //  await Course.deleteMany({user:user._id}) 
     res.status(200).redirect('/admin/users')
  

    } catch (error) {
      res.status(201).json({
        status: 'fail',
        error
      })
    }
  }
