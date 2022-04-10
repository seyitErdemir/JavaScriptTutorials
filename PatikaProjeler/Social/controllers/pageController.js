const nodemailer = require("nodemailer");
const Course = require("../models/Course")
const User = require("../models/User")


exports.getIndexPage = async (req, res) => {
    // console.log(req.session.userID);
    res.status(200).render('newindex', { page_name: 'index'  })
}

exports.getSearchPage = async (req, res) => { 
    try { 
        const query = req.body.search
        let filter = {};
        if(query) {
          filter = {name:query}
        }else{
             filter.name = "" 
        }
        const users = await User.find({
          $or: [
            { name: { $regex: '.*' + filter.name + '.*', $options: 'i' } } 
          ]
        }).sort('-createdAt')  
        res.status(200).render('searchList', { page_name: 'index' , users  , query })
    } catch (error) {
        res.status(201).json({
          status: 'fail',
          error
        })
      }
}

exports.getUserProfilePage = async (req, res) => { 
    try { 
       var active = " "
 
        const user = await User.findById({_id:req.session.userID})
        
        const userProfile = await User.findById({ _id: req.params.id })
      
        const totalFollowing =userProfile.following.length  
       
        const totalFollowers =userProfile.followers.length  
        console.log(totalFollowers);

        if( req.session.userID === req.params.id){
            active = true
        } else{
          active = false
        } 

        //search  ve   profile detay kısımları yapıldı
 
       
        res.status(200).render('profile', { page_name: 'index' , userProfile  , user  , active , totalFollowing , totalFollowers })
    } catch (error) {
        res.status(201).json({
          status: 'fail',
          error
        })
      }
}

exports.updateUser = async (req, res) => {
  try {    
  
   const user =  await User.findById({_id:req.params.id}) 
   user.name = req.body.name
   user.title = req.body.title
   user.about = req.body.about
    user.save()  
    res.status(200).redirect('back')

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error
    })
  }
}

exports.followUser = async (req, res) => {
  try {
      //giriş yapan kullanıcı bir kullanıcıyı takip ettiği zaman  ? 


    //alttaki satırda giriş yapan kullnıcının following dizisine takip etmek istediği profilin idsini eklemekte
    const user = await User.findById(req.session.userID)
    await user.following.push({ _id: req.body.user_id })

    //alttaki satırda ise takip ettigi kullanıcının followers  dizisine  takip eden profilin idsini eklemekte
    const followUser = await User.findById( req.body.user_id) 
    await followUser.followers.push({ _id: req.session.userID })
   

     await user.save() 
     await followUser.save() 


    res.status(200).redirect('back')
  } catch (error) {
    res.status(201).json({
      status: 'fail',
      error
    })
  }
}

exports.unfollowUser = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID)
    await user.following.pull({ _id:  req.body.user_id })

    const unfollowUser = await User.findById( req.body.user_id)
    await unfollowUser.followers.pull({ _id: req.session.userID })

    await user.save()
    await unfollowUser.save() 

    res.status(200).redirect('back')
  } catch (error) {
    res.status(201).json({
      status: 'fail',
      error
    })
  }
}







exports.getAboutPage = (req, res) => {
    res.status(200).render('about', { page_name: 'about' })
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('newregister', { page_name: 'register' })
}

exports.getLoginPage = (req, res) => {
    res.status(200).render('newlogin', { page_name: 'login' })
}

exports.getContactPage = (req, res) => {
    res.status(200).render('contact', { page_name: 'contact' })
}

exports.sendEmail = async (req, res) => { 

    try {
        


    const outputMessage = ` 
        <h1>Message Details</h1>
        <ul>
            <li> name : ${req.body.name} </li>
            <li> email :  ${req.body.email}  </li>
            <li> message : ${req.body.message}   </li>
        
        </ul>
    `


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "seyiterdemir4242@gmail.com", // gmail account
          pass: "qzylnxurwlullnci", // gmail password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Smart Edu Contact Form" <seyiterdemir4242>', // sender address
        to: "seyiterdemir4242@gmail.com,", // list of receivers
        subject: "Smart Edu Contact Form New Message ", // Subject line 
        html: outputMessage, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      req.flash('success','We recoived your message successfully')
      res.status(200).redirect('/contact')

    } catch (error) {
        // req.flash('error',` Something Happened  ${error}` )
        req.flash('error',  "Something Happened" )
        res.status(200).redirect('/contact')
    }
}