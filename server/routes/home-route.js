const express = require('express')
const router = express.Router()

const {getUser, getCompletedLessons, } = require('../controllers/home-controller') 
const {getLessons} = require('../controllers/lessons/lessons-route')

// get user by id
router.get('/:id', getUser);
router.get('/completed-lessons/:id', getCompletedLessons)

router.get('/', getLessons);

module.exports = router