const mongoose = require('mongoose')
const slugify = require('slugify')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  title: {
    type: 'string',
    required: [true, 'Please provide a title'],
    minlength: [10, 'Please provide a title at least 10 characters'],
    unique: true
  },
  content: {
    type: 'string',
    required: [true, 'Please provide a content'],
    minlength: [20, 'Please provide a title at least 20 characters']
  },
  slug: {
    type: 'string'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  answers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Answer'
    }
  ]
})

QuestionSchema.pre('save', function (next) {
  if (!this.isModified('title')) {
    next()
  }
  this.slug = this.makeSlug()
  next()
})

QuestionSchema.methods.makeSlug = function () {
  return slugify(this.title, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })
}

module.exports = mongoose.model('Question', QuestionSchema)