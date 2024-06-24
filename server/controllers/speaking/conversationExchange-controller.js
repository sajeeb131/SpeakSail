const {SpeakingConversationExchange, SpeakingConversationExchange_Answers} = require('../../models/speaking/conversationExchange-model')
const cloudinary = require('../../utils/cloudinary')
const Student = require('../../models/user/student-model')



const name = "Conversation Exchange";

const createLesson = async (req, res) => {
    try {
        
        const { lessonNumber, dialogues} = req.body; // Extract lessonNumber and dialogues from request body
        console.log('The lesson number :', lessonNumber)

        const newLesson = new SpeakingConversationExchange({
            lessonNumber: req.body.lessonNumber,
            dialogues: req.body.dialogues
          });

        await newLesson.save();
        res.status(201).json(newLesson);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Error creating lesson" });
    }
};

const getLessons = async(req, res) =>{
    try{
        const lessons = await SpeakingConversationExchange.find();
        res.json({lessons, name});
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lessons'})
    }
};

const getLessonByNumber = async (req,res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const lesson = await SpeakingConversationExchange.findOne({lessonNumber});
        if(!lesson){
            return res.status(404).json({message: 'Lesson not found'});
        }
        res.json(lesson);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving lesson'});
    }
};


const createAnswers = async (req, res) => {
    try {
        const audioFile1 = req.files['audio1'][0];
        const audioFile2 = req.files['audio2'][0];
        const audioFile3 = req.files['audio3'][0];

        if (!audioFile1 || !audioFile2 || !audioFile3) {
            return res.status(400).json({ message: 'Please upload three audio files' });
        }

        const audioUploadResponse1 = await cloudinary.uploader.upload(audioFile1.path, { resource_type: 'auto' });
        const audioUploadResponse2 = await cloudinary.uploader.upload(audioFile2.path, { resource_type: 'auto' });
        const audioUploadResponse3 = await cloudinary.uploader.upload(audioFile3.path, { resource_type: 'auto' });

        // Create a new answer script
        const newAnswer = new SpeakingConversationExchange_Answers({
            lessonNumber: req.body.lessonNumber,
            lessonType: req.body.lessonType,
            audioFilePath1: audioUploadResponse1.secure_url,
            audioFilePath2: audioUploadResponse2.secure_url,
            audioFilePath3: audioUploadResponse3.secure_url,
            studentID: req.body.studentID,
        });

        await newAnswer.save();
        res.status(201).json(newAnswer);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error creating answers' });
    }
};

module.exports = { createAnswers };



const getAnswersByLesson = async(req, res) =>{
    try{
        const lessonNumber = req.params.lessonNumber;
        const answers = await SpeakingConversationExchange_Answers.findOne({lessonNumber});
        res.json(answers);
    }catch(err){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};

const getAnswersByStudentID = async(req, res) =>{
    try{
        const studentID = req.params.studentID;
        const answer = await SpeakingConversationExchange_Answers.findOne({studentID})
        res.json(answer);
    }
    catch(error){
        console.error(err);
        res.status(400).json({message: 'Error retrieving answers'});
    }
};
const getAllAnswers = async(req, res) =>{
    try{ 
        const answers = await SpeakingConversationExchange_Answers.find();
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
        const updatedLesson = await SpeakingConversationExchange_Answers.findByIdAndUpdate(
            id,
            { feedback: feedback }
        );
        if (!updatedLesson) { 
            return res.status(404).send('Lesson answer feedback not updated!');
        }
        if(feedback == 'true'){
            const lesson = await SpeakingConversationExchange.findOne({lessonNumber})
            if(!lesson){
                throw new Error('Completed by not updated!')
            }
            lesson.completedBy.push(studentID);
            await lesson.save();
        }
        const student = await Student.findOneAndUpdate(
            {userID},
            {speaking: value1, conversation_exchange: value2 }
        )
        await student.save()
        

        res.status(200).json(updatedLesson);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports = {updateFeedback, getAllAnswers, getAnswersByLesson, createAnswers, getLessonByNumber, getLessons, createLesson, getAnswersByStudentID}