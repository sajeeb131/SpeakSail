const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
    lessonType:{
        type: String,
        required: true
    },
    lessonNumber: {
        type: String,
        required: true,
    },
    studentID:{
        type: String,
        required: true
    },
    studentName:{
        type: String,
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
    Submission: mongoose.model('submissions', submissionSchema)
};