const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String 
    },
     about: {
        type: String 
    },


    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'preuser', 'admin'],
        default: 'user'
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],


    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]

})

// UserSchema.pre('save', function(next) {
//     const user = this
//     bcrypt.hash(user.password, 10, (error, hash) => {
//         user.password = hash;
//         next();
//     })
// })

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});



const User = mongoose.model('User', UserSchema)

module.exports = User