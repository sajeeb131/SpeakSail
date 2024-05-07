const {ListeningQA, ListeningQA_Answers} = require('../../models/listening/qa-model'); 
const cloudinary = require('../../utils/cloudinary')


const createLesson = async (req, res) => {
  
  try {
    const { filename } = req.file;

    // Upload audio to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(
      req.file.path,
      { resource_type: 'auto' } 
    );
    // create a new lesson
    const newLesson = new ListeningQA({
      lessonNumber: req.body.lessonNumber,
      lessonName: req.body.lessonName,
      audioFilePath: uploadResponse.secure_url,
      questions: [
        req.body.question1,
        req.body.question2,
        req.body.question3
      ]
    });
    // save the lesson to mongoDB
    await newLesson.save();
    // fetch it to the client
    res.status(201).json(newLesson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating lesson' });
  }
};

const getLessons = async (req, res) => {
  try {
    const lessons = await ListeningQA.find();
    const name = "Question/Answer"
    
    res.json({lessons, name});
    

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving lessons' });
  }
};

const getLessonByNumber = async (req, res) => {
    try {
        const lessonNumber = req.params.lessonNumber; 
        const lesson = await ListeningQA.findOne({ lessonNumber });
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.json(lesson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving lesson' });
    }
};

const createAnswers = async (req, res) => {
  try {
    const newAnswer = new ListeningQA_Answers({
      ...req.body,
    });
    await newAnswer.save();
    res.status(201).json(newAnswer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating answers' });
  }
};

const getAnswersByLesson = async (req, res) => {
  try {
    const lessonNumber = req.params.lessonNumber;
    const answers = await ListeningQA_Answers.find({ lessonNumber });
    res.json(answers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving answers' });
  }
};
const getAnswersByStudentID = async (req, res) => {
    try {
      const studentID = req.params.studentID;
      const answer = await ListeningQA_Answers.find({ studentID });
      res.json(answer);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving answers' });
    }
  };

module.exports = {getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}