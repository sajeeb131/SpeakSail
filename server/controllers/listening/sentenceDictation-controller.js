const {ListeningSenDict, ListeningSenDict_Answers} = require('../../models/listening/sentenceDictation-model')
const cloudinary = require('../../utils/cloudinary')

const name = "Sentence Dictation"
const createLesson = async (req, res) => {
    try {
      const { filename } = req.file;
  
      // Upload audio to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(
        req.file.path,
        { resource_type: 'auto' } 
      );
      // create a new lesson
      const newLesson = new ListeningSenDict({
        lessonNumber: req.body.lessonNumber,
        lessonName: req.body.lessonName,
        audioFilePath: uploadResponse.secure_url, 
      });
      
      // save the lesson to mongoDB
      await newLesson.save();
      res.status(201).json(newLesson);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error creating lesson", });
    }
};
const getLessons = async(req, res) =>{
    try{
        const lessons = await ListeningSenDict.find();
        res.json({lessons, name});
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lessons'})
    }
};

const getLessonByNumber = async (req,res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const lesson = await ListeningSenDict.findOne({lessonNumber});
        if(!lesson){
            return res.status(404).json({message: 'Lesson not found'});
        }
        res.json(lesson.audioFilePath);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lesson'});
    }
};

const createAnswers = async(req,res) =>{
    const { lessonNumber, studentID, answers} = req.body
    try{

        const newAnswer = new ListeningSenDict_Answers({
            lessonNumber,
            studentID,
            answers,
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
        const answers = await ListeningSenDict_Answers.findOne({lessonNumber});
        res.json(answers);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const getAnswersByStudentID = async(req, res) =>{
    try{
        const studentID = req.params.studentID;
        const answer = await ListeningSenDict_Answers.findOne({studentID})
        res.json(answer);
    }
    catch(error){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

module.exports = {getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}