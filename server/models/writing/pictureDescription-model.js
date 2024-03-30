const mongoose =  require('mongoose')

const writingPictureDescriptionSchema = new mongoose.Schema({
    lessonNumber:{
        type: String,
        required: true,
        unique: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
});

const writingPictureDescriptionAnswerSchema = new mongoose.Schema({
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
    WritingPictureDescription: mongoose.model('writingPictureDescriptions', writingPictureDescriptionSchema),
    WritingPictureDescription_answers: mongoose.model('writingPictureDescriptions_answers', writingPictureDescriptionAnswerSchema),
};