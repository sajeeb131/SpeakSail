const express = require('express')
const router = express.Router()

const {getVocabTreasure} = require('../controllers/extra-exercises/extra-controller') 

// get user by id
router.get('/vocab-treasure', getVocabTreasure);

module.exports = router