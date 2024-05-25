const express = require('express')
const router = express.Router()
const SpeakingStorytelling = require('../controllers/speaking/storytelling-controller');
const upload = require('../middleware/multer')
//Storytelling lesson route
router.post('/storytelling',SpeakingStorytelling.createLesson);
router.get('/storytelling', SpeakingStorytelling.getLessons);
router.get('/storytelling/:lessonNumber', SpeakingStorytelling.getLessonByNumber);

//Storytelling lesson answer route
router.post('/storytelling/answer',upload.single('file'), SpeakingStorytelling.createAnswers);
router.get('/storytelling/answer/all', SpeakingStorytelling.getAllAnswers);
router.get('/storytelling/:lessonNumber/answers', SpeakingStorytelling.getAnswersByLesson);
router.get('/storytelling/:studentID/answers', SpeakingStorytelling.getAnswersByStudentID);

router.patch('/storytelling/:id', SpeakingStorytelling.updateFeedback)

module.exports = router; 