const express = require('express')
const router = express.Router()
const ListeningSentenceDictation = require('../controllers/listening/sentenceDictation-controller')
const listeningQA = require('../controllers/listening/qa-controller'); 

const upload = require('../middleware/multer')



//Sentence Dictation lesson route
router.post('/sentence-dictation', upload.single('file'), ListeningSentenceDictation.createLesson);
router.get('/sentence-dictation', ListeningSentenceDictation.getLessons);
router.get('/sentence-dictation/:lessonNumber',  ListeningSentenceDictation.getLessonByNumber);

//Sentence Dictation lesson answers route
router.post('/sentence-dictation/answer', ListeningSentenceDictation.createAnswers);
router.get('/sentence-dictation/:lessonNumber/answers', ListeningSentenceDictation.getAnswersByLesson);
router.get('/sentence-dictation/:studentID/answers', ListeningSentenceDictation.getAnswersByLesson);

// QuestionAnswer Lesson routes
router.post('/qa',upload.single('file'), listeningQA.createLesson);
router.get('/qa', listeningQA.getLessons);
router.get('/qa/:lessonNumber', listeningQA.getLessonByNumber);

// QuestionAnswer Answer routes
router.post('/qa/answer', listeningQA.createAnswers);
router.get('/qa/:lessonNumber/answers', listeningQA.getAnswersByLesson);
router.get('/qa/:studentID/answers', listeningQA.getAnswersByLesson);

module.exports = router;



