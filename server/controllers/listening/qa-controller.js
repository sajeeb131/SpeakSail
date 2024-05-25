const {ListeningQA, ListeningQA_Answers} = require('../../models/listening/qa-model'); 
const cloudinary = require('../../utils/cloudinary')
const Student = require('../../models/user/student-model')

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
    const { lessonNumber, studentID,studentName, answers } = req.body;

    // Create a new answer script
    const newAnswer = new ListeningQA_Answers({
      lessonNumber,
      studentID,
      studentName,
      answers
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

  const getAllAnswers = async(req, res) =>{
    try{ 
        const answers = await ListeningQA_Answers.find();
        res.json(answers);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};
const updateFeedback = async(req, res) =>{
  try {
      const id = req.params.id
      const { feedback, lessonNumber, studentID, value1, value2} = req.body;
      const userID = studentID;
      const updatedLesson = await ListeningQA_Answers.findByIdAndUpdate(
          id,
          { feedback: feedback }
      );
      if (!updatedLesson) { 
          return res.status(404).send('Lesson answer feedback not updated!');
      }
      if(feedback == 'true'){
          const lesson = await ListeningQA.findOne({lessonNumber})
          if(!lesson){
              throw new Error('Completed by not updated!')
          }
          lesson.completedBy.push(studentID);
          await lesson.save();
      }
      const student = await Student.findOneAndUpdate(
          {userID},
          {listening: value1, question_answer: value2 }
      )
      await student.save()
      

      res.status(200).json(updatedLesson);
    } catch (error) {
      res.status(500).send(error.message);
    }
}
module.exports = {updateFeedback, getAllAnswers, getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}