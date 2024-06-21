const StudentUser = require('../../models/user/student-model');  // Adjust the path as necessary

const updateField = async (userID, field, value) => {
    try {
      const update = {};
      update[field] = value;
  
      const updatedUser = await StudentUser.findOneAndUpdate(
        { userID },
        { $inc: update },
        { new: true }
      );
  
      if (!updatedUser) {
        throw new Error('User not found');
      }
  
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };
  
  const updateProgress = async (req, res) => {
    console.log('inside update marks controller')
    const { userID, field, value } = req.body;
    console.log('updading marks')
    // Validate field name
    const validFields = [
      'marks_sentence_dictation', 
      'marks_question_answer', 
      'marks_storytelling', 
      'marks_conversation_exchange', 
      'marks_picture_description', 
      'marks_comprehension'
    ];
  
    if (!validFields.includes(field)) {
      return res.status(400).json({ error: 'Invalid field name' });
    }
  
    try {
      const updatedUser = await updateField(userID, field, value);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const getMarks = async (req, res) => {
    console.log('inside marks')
    const userID = req.params.id;
    try {
      const user = await StudentUser.findOne({ userID });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const {
        marks_sentence_dictation,
        marks_question_answer,
        marks_storytelling,
        marks_conversation_exchange,
        marks_picture_description,
        marks_comprehension
      } = user;
      res.status(200).json({
        marks_sentence_dictation,
        marks_question_answer,
        marks_storytelling,
        marks_conversation_exchange,
        marks_picture_description,
        marks_comprehension
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    updateProgress, getMarks
  };