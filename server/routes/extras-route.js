const express = require('express')
const router = express.Router()

const {getVocabTreasure, getDailyMission} = require('../controllers/extra-exercises/extra-controller') 

// get user by id
router.get('/vocab-treasure', getVocabTreasure);
router.get('/daily-mission', getDailyMission);

module.exports = router