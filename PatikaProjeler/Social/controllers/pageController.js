const nodemailer = require("nodemailer");
const Course = require("../models/Course")
const User = require("../models/User")


exports.getIndexPage = async (req, res) => {
    // console.log(req.session.userID);
    const courses = await Course.find().sort("-createdAt").limit(2)
    const totalCourses =await Course.find().countDocuments()
    const totalStudents =await User.find().countDocuments({role: "Student"})
    const totalTeachers =await User.find().countDocuments({role: "Teacher"} )

    res.status(200).render('newindex', { page_name: 'index' , courses , totalCourses , totalStudents ,totalTeachers})
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