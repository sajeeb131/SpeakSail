const express = require('express');
const router = express.Router()

const {signupUser, loginUser, getUser, getAllUsers} = require('../../controllers/user/student-controller')


//signup route
router.post('/signup',signupUser)

//login route
router.post('/login',loginUser)

//get user
router.get('/:id',getUser)

//get all student users
router.get('/',getAllUsers)

module.exports = router