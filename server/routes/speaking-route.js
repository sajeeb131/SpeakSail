const express = require('express')
const router = express.Router()
const SpeakingStorytelling = require('../controllers/speaking/storytelling-controller');
const SpeakingConversationExchange = require('../controllers/speaking/conversationExchange-controller');
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


//Conversation Exchange lesson route
router.post('/conversation-exchange',SpeakingConversationExchange.createLesson);
router.get('/conversation-exchange', SpeakingConversationExchange.getLessons);
router.get('/conversation-exchange/:lessonNumber', SpeakingConversationExchange.getLessonByNumber);

//Conversation Exchange lesson answer route
router.post('/conversation-exchange/answer', upload.fields([
    { name: 'audio1', maxCount: 1 },
    { name: 'audio2', maxCount: 1 },
    { name: 'audio3', maxCount: 1 }
]), SpeakingConversationExchange.createAnswers);

router.get('/conversation-exchange/answer/all', SpeakingConversationExchange.getAllAnswers);
router.get('/conversation-exchange/:lessonNumber/answers', SpeakingConversationExchange.getAnswersByLesson);
router.get('/conversation-exchange/:studentID/answers', SpeakingConversationExchange.getAnswersByStudentID);

router.patch('/conversation-exchange/:id', SpeakingConversationExchange.updateFeedback)

module.exports = router; 