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