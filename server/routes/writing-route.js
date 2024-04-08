const express = require('express')
const router = express.Router()
const WritingPictureDescription = require('../controllers/writing/pictureDescription-controller');

//Storytelling lesson route
router.post('/picturedescription',WritingPictureDescription.createLesson);
router.get('/picturedescription', WritingPictureDescription.getLessons);
router.get('/picturedescription/:lessonNumber', WritingPictureDescription.getLessonByNumber);

//Storytelling lesson answer route
router.post('/picturedescription/answer', WritingPictureDescription.createAnswers);
router.get('/picturedescription/:lessonNumber/answers', WritingPictureDescription.getAnswersByLesson);
router.get('/picturedescription/:studentID/answers', WritingPictureDescription.getAnswersByStudentID);

module.exports = router; 