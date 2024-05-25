const express = require('express')
const router = express.Router()
const ReadingStoryboarding = require('../controllers/reading/storyboarding-controller');
const ReadingComprehension = require('../controllers/reading/comprehension-controller');

//Storytelling lesson route
router.post('/storyboarding',ReadingStoryboarding.createLesson);
router.get('/storyboarding', ReadingStoryboarding.getLessons);
router.get('/storyboarding/:lessonNumber', ReadingStoryboarding.getLessonByNumber);

//Storytelling lesson answer route
router.post('/storyboarding/answer', ReadingStoryboarding.createAnswers);
router.get('/storyboarding/:lessonNumber/answers', ReadingStoryboarding.getAnswersByLesson);
router.get('/storyboarding/:studentID/answers', ReadingStoryboarding.getAnswersByStudentID);

//Comprehension lesson route
router.post('/comprehension',ReadingComprehension.createLesson);
router.get('/comprehension', ReadingComprehension.getLessons);
router.get('/comprehension/:lessonNumber', ReadingComprehension.getLessonByNumber);


//Comprehension lesson answer route
router.post('/comprehension/answer', ReadingComprehension.createAnswers);
router.get('/comprehension/answer/all', ReadingComprehension.getAllAnswers);
router.get('/comprehension/:lessonNumber/answers', ReadingComprehension.getAnswersByLesson);
router.get('/comprehension/:studentID/answers', ReadingComprehension.getAnswersByStudentID);


router.patch('/comprehension/:id', ReadingComprehension.updateFeedback)


module.exports = router; 