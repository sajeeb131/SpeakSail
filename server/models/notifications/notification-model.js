const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    studentID:{
        type: String,
        required: true
    },
    lessonType:{
        type: String,
        required: true
    },
    lessonNumber:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    time : { 
        type : Date,
        default: Date.now
    },
    read: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ['info', 'warning', 'alert', 'other'],
        default: 'info'
    }
})

module.exports = {Notifications: mongoose.model('notifications', notificationSchema)}