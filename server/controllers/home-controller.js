const User = require('../models/user/student-model')

const getUser = async(req, res) =>{
    const userID = req.params.id;
    try{
        const user = await User.findOne({userID})
        res.status(200).json(user);
    }catch(error){
        console.error(error);
        res.status(400).json({message: "Error creating lesson"})
    }
}

module.exports = {getUser}