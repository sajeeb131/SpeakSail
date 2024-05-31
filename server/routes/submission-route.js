const express = require('express')
const router = express.Router()

const {getSubmissions, postSubmissions} = require('../controllers/submission/submission-controller')


router.get('/all', getSubmissions);
router.post('/', postSubmissions);

module.exports = router