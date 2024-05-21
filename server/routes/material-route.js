const express = require('express')
const router = express.Router()

const {uploadListeningActivity,uploadReadingActivity,uploadSpeakingActivity,uploadWritingActivity,
    getListeningActivities,getReadingActivities,getSpeakingActivities,getWritingActivities
} = require('../controllers/materials/material-controller')

const upload = require('../middleware/multer')

//new material upload routes
router.post('/listening', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), uploadListeningActivity);
router.post('/speaking',upload.single('file'), uploadSpeakingActivity);
router.post('/reading',upload.single('file'), uploadReadingActivity);
router.post('/writing',upload.single('file'), uploadWritingActivity);

//get material routes
router.get('/listening', getListeningActivities);
router.get('/speaking', getSpeakingActivities);
router.get('/reading', getReadingActivities);
router.get('/writing', getWritingActivities);

module.exports = router