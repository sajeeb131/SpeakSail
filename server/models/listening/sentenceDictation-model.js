const mongoose =  require('mongoose')

const listeningSenDictSchema = new mongoose.Schema({
    lessonNumber: {
      type: String,
      required: true,
      unique: true
    },
    lessonName: {
        type: String,
        required: true
    },
    audioFilePath: {
      type: String,
      required: true
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
  

const listeningSenDictAnswerSchema = new mongoose.Schema({
    lessonType:{
        type: String,
        required: false,
    },
    lessonNumber:{
        type: String,
        required: true,
    },
    studentID: {
        type: String,
        required: true,
    },
    answers: {
        type: String,
        required: true,
    },
    feedback: {
        type: Boolean,
        required: false,
    },
});

module.exports = {
    ListeningSenDict: mongoose.model('ListeningSentenceDictation', listeningSenDictSchema),
    ListeningSenDict_Answers: mongoose.model('ListeningSentenceDictation_Answers',listeningSenDictAnswerSchema),
};