const {ListeningQA, ListeningQA_Answers} = require('../../models/listening/qa-model'); 

const createLesson = async (req, res) => {
  try {
    const newLesson = new ListeningQA(req.body);
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating lesson' });
  }
};

const getLessons = async (req, res) => {
  try {
    const lessons = await ListeningQA.find();
    res.json(lessons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving lessons' });
  }
};

const getLessonByNumber = async (req, res) => {
    try {
        const lessonNumber = req.params.lessonNumber; // Assuming lesson number is in the URL parameter
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
      const lessonNumber = req.params.studentID;
      const answer = await ListeningQA_Answers.find({ lessonNumber });
      res.json(answer);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving answers' });
    }
  };

module.exports = {getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}