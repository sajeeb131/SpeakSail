const User = require('../models/user/student-model')
const  {ListeningSenDict, ListeningSenDict_Answers} = require('../models/listening/sentenceDictation-model')
const  {ListeningQA,ListeningQA_Answers} = require('../models/listening/qa-model')
const  {ReadingComprehension, ReadingComprehension_answers} = require('../models/reading/comprehension-model')
const  {SpeakingStorytelling, SpeakingStorytelling_Answers} = require('../models/speaking/storytelling-model')
const  {SpeakingConversationExchange, SpeakingConversationExchange_Answers} = require('../models/speaking/conversationExchange-model')
const  {WritingPictureDescription, WritingPictureDescription_answers} = require('../models/writing/pictureDescription-model')


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
const getCompletedLessons = async(req,res) =>{
    const studentID = req.params.id 
    try{
        const sd_lessons_ans = await ListeningSenDict_Answers.find({studentID});
        const qa_lessons_ans = await ListeningQA_Answers.find({studentID})
        const comprehension_lessons_ans = await ReadingComprehension_answers.find({studentID})
        const pd_lessons_ans = await WritingPictureDescription_answers.find({studentID})
        const storytelling_lessons_ans = await SpeakingStorytelling_Answers.find({studentID})
        const ce_lessons_ans = await SpeakingConversationExchange_Answers.find({studentID})
        res.status(200).json({sd_lessons_ans, qa_lessons_ans, comprehension_lessons_ans, pd_lessons_ans, storytelling_lessons_ans, ce_lessons_ans})
    }catch(error){
        console.log(error);
        res.status(400).json({message: 'Error getting lessons'})
    }
}

module.exports = {getUser,getCompletedLessons}