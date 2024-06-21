const mongoose = require('mongoose')

const speakingConversationExchangeSchema = new mongoose.Schema({
    lessonNumber: {
        type: String,
        required: true,
    },
    dialogues: {
        type: [String],
        required: true,
    },
    completedBy:{
        type: [String],
        required: false
    },
    submittedBy:{
        type: [String],
        required: false
    },
    time : { 
        type : Date,
        default: Date.now
    }
    
});

const speakingConversationExchangeAnswerSchema = new mongoose.Schema({
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
    dialogues: {
        type: [String], 
        required: true
    },
    studentID: {
        type: String,
        required: true,
    },
    audioFilePath1:{
        type: String,
        required: true,
    },
    audioFilePath2:{
        type: String,
        required: true,
    },
    audioFilePath3:{
        type: String,
        required: true,
    },
    feedback: {
        type: Boolean,
        required: false
    },
    time : { 
        type : Date,
        default: Date.now
      },
      comment:{
        type: String,
        required: false
      }
});

module.exports = {
    SpeakingConversationExchange: mongoose.model('SpeakingConversationExchange', speakingConversationExchangeSchema),
    SpeakingConversationExchange_Answers: mongoose.model('SpeakingConversationExchange_Answers', speakingConversationExchangeAnswerSchema)
};