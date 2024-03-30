const mongoose = require('mongoose')

const speakingStorytellingSchema = new mongoose.Schema({
    lessonNumber: {
        type: String,
        required: true,
        unique: true,
    },
    story: {
        type: String,
        required: true,
    }
});

const speakingStorytellingAnswerSchema = new mongoose.Schema({
    lessonType:{
        type: String,
        required: true,
    },
    lessonNumber:{
        type: String,
        required: true,
    },
    studentID: {
        type: String,
        required: true,
    },
    audioFilePath:{
        type: String,
        required: true,
    },
    feedback: {
        type: Boolean
    }
});

module.exports = {
    SpeakingStorytelling: mongoose.model('SpeakingStorytelling', speakingStorytellingSchema),
    SpeakingStorytelling_Answers: mongoose.model('SpeakingStorytelling_Answers', speakingStorytellingAnswerSchema)
};