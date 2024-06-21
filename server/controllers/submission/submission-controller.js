const  {Submission} = require('../../models/submissions/submission-model')

const getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ time: -1 });
        res.status(200).json(submissions);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error fetching submissions" });
    }
};
const postSubmissions = async (req, res) => {
    try {
        const { lessonType, lessonNumber, studentID, studentName, comment } = req.body;

        // Create a new submission
        const newSubmission = new Submission({
            lessonType,
            lessonNumber,
            studentID,
            studentName,
            comment
        });

        // Save the submission to the database
        await newSubmission.save();

        res.status(201).json({ message: "Submission saved successfully", submission: newSubmission });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error saving submission", error: error.message });
    }
};

// Controller to get the comment for a specific submission
const getSubmissionComment = async (req, res) => {
    const { lessonType, studentID, lessonNumber } = req.query;
  
    try {
      const submission = await Submission.findOne({
        lessonType,
        studentID,
        lessonNumber
      });
  
      if (!submission) {
        return res.status(404).json({ error: 'Submission not found' });
      }
  
      res.status(200).json({ comment: submission.comment });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports = {getSubmissions, postSubmissions, getSubmissionComment}