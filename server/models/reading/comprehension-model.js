const mongoose =  require('mongoose')

const readingComprehensionSchema = new mongoose.Schema({
    lessonNumber:{
        type: String,
        required: true,
        unique: true,
    },
    passage: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer:{
        type: String,
        required: true,
    },
    options:{
        type: [String],
        required: true,
    }
});

const readingComprehensionAnswerSchema = new mongoose.Schema({
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
    ReadingComprehension: mongoose.model('readingComprehension', readingComprehensionSchema),
    ReadingComprehension_answers: mongoose.model('readingComprehension_answers',readingComprehensionAnswerSchema),
};