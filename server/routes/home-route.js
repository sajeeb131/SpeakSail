const express = require('express')
const router = express.Router()

const {getUser} = require('../controllers/home-controller') 

// get user by id
router.get('/:id', getUser);

module.exports = router