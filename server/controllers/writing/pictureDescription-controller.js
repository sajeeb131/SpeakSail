const {WritingPictureDescription, WritingPictureDescription_answers} = require('../../models/writing/pictureDescription-model')
const cloudinary = require('../../utils/cloudinary')
const Student = require('../../models/user/student-model')


const name = "Picture Description"
const createLesson = async(req,res) =>{
    try{
        const { filename } = req.file;
  
        // Upload audio to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(
          req.file.path,
          { resource_type: 'auto' } 
        );
        // create a new lesson
        const newLesson = new WritingPictureDescription({
        lessonNumber: req.body.lessonNumber,
        lessonName: req.body.lessonName,
        imagePath: uploadResponse.secure_url, 
        });

        await newLesson.save();
        res.status(201).json(newLesson)
    }catch(err){
        console.error(err);
        res.status(400).json({message: "Error creating lesson"})
    }
};

const getLessons = async(req, res) =>{
    try{
        const lessons = await WritingPictureDescription.find();

        res.json({lessons, name});
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lessons'})
    }
};

const getLessonByNumber = async (req,res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const lesson = await WritingPictureDescription.findOne({lessonNumber});
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
        const newAnswer = new WritingPictureDescription_answers({
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
        const answers = await WritingPictureDescription_answers.findOne({lessonNumber});
        res.json(answers);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const getAnswersByStudentID = async(req, res) =>{
    try{
        const studentID = req.params.studentID;
        const answer = await WritingPictureDescription_answers.findOne({studentID})
        res.json(answer);
    }
    catch(error){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const getAllAnswers = async(req, res) =>{
    try{ 
        const answers = await WritingPictureDescription_answers.find();
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

        const updatedLesson = await WritingPictureDescription_answers.findByIdAndUpdate(
            id,
            { feedback: feedback }
        );
        if (!updatedLesson) { 
            return res.status(404).send('Lesson answer feedback not updated!');
        }
        if(feedback == 'true'){
            const lesson = await WritingPictureDescription.findOne({lessonNumber})
            if(!lesson){
                throw new Error('Completed by not updated!')
            }
            lesson.completedBy.push(studentID);
            await lesson.save();
        }
        const student = await Student.findOneAndUpdate(
            {userID},
            {writing: value1, picture_description: value2 }
        )
        await student.save()
        

        res.status(200).json(updatedLesson);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports = {updateFeedback, getAllAnswers, getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}