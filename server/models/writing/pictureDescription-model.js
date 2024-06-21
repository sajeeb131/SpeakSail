const mongoose =  require('mongoose')

const writingPictureDescriptionSchema = new mongoose.Schema({
    lessonNumber:{
        type: String,
        required: true,
        unique: true,
    },
    lessonName: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
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

const writingPictureDescriptionAnswerSchema = new mongoose.Schema({
    lessonNumber:{
        type: String,
        required: true,
    },
    studentID: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: false,
      },
    answers: {
        type: String,
        required: true,
    },
    feedback: {
        type: Boolean,
        required: false,
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
    WritingPictureDescription: mongoose.model('writingPictureDescriptions', writingPictureDescriptionSchema),
    WritingPictureDescription_answers: mongoose.model('writingPictureDescriptions_answers', writingPictureDescriptionAnswerSchema),
};