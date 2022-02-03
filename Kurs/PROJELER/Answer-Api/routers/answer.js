const express = require('express')
const { getAccessToRoute } = require('../middlewares/authorization/auth')
const {
  addNewAnswerToQuestion,
  getAllAnswerByQuestion,
  getSingleAnswer,
  editAnswer
} = require('../controllers/answer')

const {
  checkQuestionAndAnswerExist
} = require('../middlewares/database/databaseErrorHelpers')

const { getAnswerOwnerAccess } = require('../middlewares/authorization/auth')

const router = express.Router({ mergeParams: true })

router.post('/', getAccessToRoute, addNewAnswerToQuestion)
router.get('/', getAllAnswerByQuestion)
router.get('/:answer_id', checkQuestionAndAnswerExist, getSingleAnswer)
router.put(
  '/:answer_id/edit',
  [checkQuestionAndAnswerExist, getAccessToRoute, getAnswerOwnerAccess],
  editAnswer
)

module.exports = router
