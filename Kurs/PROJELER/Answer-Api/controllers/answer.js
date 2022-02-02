const Question = require('../models/Question')
const Answer = require('../models/Answer')
const CustomError = require('../helpers/error/CustomError')
const asyncErrorWrapper = require('express-async-handler')

const addNewAnswerToQuestion = asyncErrorWrapper(async (req, res, next) => {
  const { question_id } = req.params
  const user_id = req.user.id

  const information = req.body

  const answer = await Answer.create({
    ...information,
    question: question_id,
    user: user_id
  })
})

module.exports = {
  addNewAnswerToQuestion
}
