const {SpeakingStorytelling, SpeakingStorytelling_Answers} = require('../../models/speaking/storytelling-model')

const createLesson = async(req,res) =>{
    try{
        const newLesson = new SpeakingStorytelling(req.body);
        await newLesson.save();
        res.status(201).json(newLesson)
    }catch(err){
        console.error(err);
        res.status(400).json({message: "Error creating lesson"})
    }
};

const getLessons = async(req, res) =>{
    try{
        const lessons = await SpeakingStorytelling.find();
        res.json(lessons);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lessons'})
    }
};

const getLessonByNumber = async (req,res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const lesson = await SpeakingStorytelling.findOne({lessonNumber});
        if(!lesson){
            return res.status(404).json({message: 'Lesson not found'});
        }
        res.json(`sentence dictation lesson: ${lesson}`);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lesson'});
    }
};

const createAnswers = async(req,res) =>{
    try{
        const newAnswer = new SpeakingStorytelling_Answers({
            ...req.body,
        });
        await newAnswer.save();
        res.status(201).json(newAnswer);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error creating answers'});
    }
};

const getAnswersByLesson = async(req, res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const answers = await SpeakingStorytelling_Answers.findOne({lessonNumber});
        res.json(answers);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const getAnswersByStudentID = async(req, res) =>{
    try{
        const studentID = req.params.studentID;
        const answer = await SpeakingStorytelling_Answers.findOne({studentID})
        res.json(answer);
    }
    catch(error){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

module.exports = {getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}