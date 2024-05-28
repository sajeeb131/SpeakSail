const express = require('express')
const router = express.Router()

const {getUser, getCompletedLessons, } = require('../controllers/home-controller') 

// get user by id
router.get('/:id', getUser);
router.get('/completed-lessons/:id', getCompletedLessons)
module.exports = router