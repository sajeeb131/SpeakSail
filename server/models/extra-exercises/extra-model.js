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
    } 
})

module.exports = {
    VocabTreasureWords: mongoose.model('VocabTreasureWords', vocabTreasureSchema),
}