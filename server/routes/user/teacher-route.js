const express = require('express');
const router = express.Router()

const {signupUser, loginUser, getUser} = require('../../controllers/user/teacher-controller')


//signup route
router.post('/signup',signupUser)

//login route
router.post('/login',loginUser)

//get user
router.get('/:id',getUser)

module.exports = router