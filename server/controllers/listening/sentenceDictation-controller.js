const {ListeningSenDict, ListeningSenDict_Answers} = require('../../models/listening/sentenceDictation-model')
const cloudinary = require('../../utils/cloudinary')
const Student = require('../../models/user/student-model')



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
    const { lessonNumber, studentID,studentName, answers} = req.body
    try{

        const newAnswer = new ListeningSenDict_Answers({
            lessonNumber,
            studentID,
            studentName,
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
const getAllAnswers = async(req, res) =>{
    try{ 
        const answers = await ListeningSenDict_Answers.find();
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

const updateFeedback = async(req, res) =>{
    try {
        const id = req.params.id
        
        const { feedback, lessonNumber, studentID, value1, value2} = req.body;
        const userID = studentID;
        const updatedLesson = await ListeningSenDict_Answers.findByIdAndUpdate(
            id,
            { feedback: feedback }
        );
        if (!updatedLesson) { 
            return res.status(404).send('Lesson answer feedback not updated!');
        }
        
        if(feedback == "true"){
            console.log('yoo')
            const lesson = await ListeningSenDict.findOne({lessonNumber})
            if(!lesson){
                throw new Error('Completed by not updated!')
            }
            console.log(studentID)
            lesson.completedBy.push(studentID);
            await lesson.save();
            console.log(lesson)

        }
        
        const student = await Student.findOneAndUpdate(
            {userID},
            {listening: value1, sentence_dictation: value2 }
        )
        await student.save()
        

        res.status(200).json(updatedLesson);
      } catch (error) {
        res.status(500).send(error.message);
      }
}



module.exports = {updateFeedback, getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson,getAllAnswers, getAnswersByStudentID}