const mongoose =  require('mongoose')

const readingStoryboardingSchema = new mongoose.Schema({
    lessonNumber:{
        type: String,
        required: true,
        unique: true,
    },
    stories: {
        type: Map,
        of: {
            img: String,
            text: String,
        },
        required: true,
    },
    answer: [String]
});

const readingStoryboardingAnswerSchema = new mongoose.Schema({
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
        type: [String],
        required: true,
    },
    feedback: {
        type: Boolean,
        required: false,
    },
});

module.exports = {
    ReadingStoryboarding: mongoose.model('readingStoryboarding', readingStoryboardingSchema),
    ReadingStoryboarding_answers: mongoose.model('readingStoryboarding_answers', readingStoryboardingAnswerSchema),
};