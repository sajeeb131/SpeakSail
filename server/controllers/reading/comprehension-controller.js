const {ReadingComprehension, ReadingComprehension_answers} = require('../../models/reading/comprehension-model')


const createLesson = async(req,res) =>{
    try{
        const newLesson = new ReadingComprehension(req.body);
        await newLesson.save();
        res.status(201).json(newLesson)
    }catch(err){
        console.error(err);
        res.status(400).json({message: "Error creating lesson"})
    }
};

const getLessons = async(req, res) =>{
    try{
        const lessons = await ReadingComprehension.find();
        const name = "Comprehension"
        res.json({lessons, name});
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lessons'})
    }
};

const getLessonByNumber = async (req,res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const lesson = await ReadingComprehension.findOne({lessonNumber});
        if(!lesson){
            return res.status(404).json({message: 'Lesson not found'});
        }

        res.json(lesson);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lesson'});
    }
};

const createAnswers = async(req,res) =>{
    try{
        const newAnswer = new ReadingComprehension_answers({
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
        const answers = await ReadingComprehension_answers.findOne({lessonNumber});
        res.json(answers);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const getAnswersByStudentID = async(req, res) =>{
    try{
        const studentID = req.params.studentID;
        const answer = await ReadingComprehension_answers.findOne({studentID})
        res.json(answer);
    }
    catch(error){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const updateCompletedBy = async (req, res) => {
    try {
        const lessonNumber = req.params.lessonNumber;
        const userID = req.body.userID; 
        const lesson = await ReadingComprehension.findOne({ lessonNumber });

        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }

        lesson.completedBy.push(userID);
        await lesson.save();

        res.status(200).json({ message: 'CompletedBy updated successfully', lesson });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error updating completedBy' });
    }
};


module.exports = { getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID, updateCompletedBy };
