const express = require('express')
const router = express.Router()
const SpeakingStorytelling = require('../controllers/speaking/storytelling-controller');
const { SpeakingStorytelling_Answers } = require('../models/speaking/storytelling-model');

//Storytelling lesson route
router.post('/storytelling',SpeakingStorytelling.createLesson);
router.get('/storytelling', SpeakingStorytelling.getLessons);
router.get('/storytelling/:lessonNumber', SpeakingStorytelling.getLessonByNumber);

//Storytelling lesson answer route
router.post('/storytelling/answer', SpeakingStorytelling.createAnswers);
router.get('/storytelling/:lessonNumber/answers', SpeakingStorytelling.getAnswersByLesson);
router.get('/storytelling/:studentID/answers', SpeakingStorytelling.getAnswersByStudentID);

module.exports = router; 