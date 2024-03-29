const express = require('express');
const listeningQA = require('../../controllers/listening/qa-controller'); 

const router = express.Router();

// Lesson routes
router.post('/qa', listeningQA.createLesson);
router.get('/qa', listeningQA.getLessons);
router.get('/qa/:id', listeningQA.getLessonByNumber);

// Answer routes
router.post('/qa/:lessonNumber/answers', listeningQA.createAnswers);
router.get('/qa/:lessonNumber/answers', listeningQA.getAnswersByLesson);

module.exports = router;
