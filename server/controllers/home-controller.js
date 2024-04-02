const User = require('../models/user/student-model')

const getUser = async(req, res) =>{
    try{
        const userID = req.params.userID;
        const user = await User.findOne({userID})
        res.status(200).json(user);
    }catch(error){
        console.error(err);
        res.status(400).json({message: "Error creating lesson"})
    }
}

module.exports = {getUser}