const express = require('express')
const router = express.Router()

const {getUser, getCompletedLessons, } = require('../controllers/home-controller') 
const {getLessons} = require('../controllers/lessons/lessons-route');
const { updateProgress, getMarks } = require('../controllers/report/marks-controller');


// get user by id
router.get('/:id', getUser);

// get lessons
router.get('/completed-lessons/:id', getCompletedLessons)
router.get('/', getLessons);

//get marks
router.patch('/update-marks',updateProgress)
router.get('/get-marks/:id',getMarks)



module.exports = router