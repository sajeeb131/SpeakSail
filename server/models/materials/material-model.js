const mongoose = require('mongoose')

const listeningMaterialSchema = new mongoose.Schema({
    activity_no:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    pdfPath:{
        type: String,
        required: true
    },
    audioFilePath:{
        type: String,
        required: true
    }

})

const speakingMaterialSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    activity_no:{
        type: String,
        required: true,
        unique: true
    },
    pdfPath:{
        type: String,
        required: true
    },

})

const readingMaterialSchema = new mongoose.Schema({
    activity_no:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    pdfPath:{
        type: String,
        required: true
    },

})

const writingMaterialSchema = new mongoose.Schema({
    activity_no:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    pdfPath:{
        type: String,
        required: true
    },

})

module.exports = {
    DownloadListeningMaterials: mongoose.model('DownloadListeningMaterials', listeningMaterialSchema),
    DownloadSpeakingMaterials: mongoose.model('DownloadSpeakingMaterials', speakingMaterialSchema),
    DownloadReadingMaterials: mongoose.model('DownloadReadingMaterials', readingMaterialSchema),
    DownloadWritingMaterials: mongoose.model('DownloadWritingMaterials', writingMaterialSchema)
}