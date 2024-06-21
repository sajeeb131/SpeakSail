const express = require('express')
const router = express.Router()

const {getSubmissions, postSubmissions, getSubmissionComment} = require('../controllers/submission/submission-controller')


router.get('/all', getSubmissions);
router.post('/', postSubmissions);
router.get('/get-comment', getSubmissionComment)
module.exports = router