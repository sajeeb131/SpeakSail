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
    },
    completedBy: {
        type: String,
        required: false
    },
    completedBy:{
        type: [String],
        required: false
    },
    submittedBy:{
        type: [String],
        required: false
    }
});

const speakingStorytellingAnswerSchema = new mongoose.Schema({
    lessonType:{
        type: String,
        required: false,
    },
    lessonNumber:{
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: false,
      },
    story: {
        type: String, 
        required: true
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
        type: Boolean,
        required: false
    }
});

module.exports = {
    SpeakingStorytelling: mongoose.model('SpeakingStorytelling', speakingStorytellingSchema),
    SpeakingStorytelling_Answers: mongoose.model('SpeakingStorytelling_Answers', speakingStorytellingAnswerSchema)
};