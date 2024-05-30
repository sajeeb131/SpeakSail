const mongoose = require('mongoose')

const vocabTreasureSchema = new mongoose.Schema({
    word:{
        type: String,
        required: true,
    },
    partsOfSpeech:{
        type: String,
        required: true
    },
    meaning:{
        type: String,
        required: true
    },
    example:{
        type: String,
        required: true
    },
    time : { 
        type : Date,
        default: null
    }
})
const DailyMissionSchema = new mongoose.Schema({
    question:{
        type: [String],
        required: true
    },
    answer:{
        type: [String],
        required: true,
    },
    options:{
        type: [String],
        required: true
    },
    time : { 
        type : Date,
        default: null
    }
})




module.exports = {
    VocabTreasureWords: mongoose.model('VocabTreasureWords', vocabTreasureSchema),
    DailyMissionQuestions: mongoose.model('DailyMissionQuestions', DailyMissionSchema)
}