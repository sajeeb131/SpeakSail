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
        const { lessonType, lessonNumber, studentID, studentName } = req.body;

        // Create a new submission
        const newSubmission = new Submission({
            lessonType,
            lessonNumber,
            studentID,
            studentName
        });

        // Save the submission to the database
        await newSubmission.save();

        res.status(201).json({ message: "Submission saved successfully", submission: newSubmission });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error saving submission", error: error.message });
    }
};

module.exports = {getSubmissions, postSubmissions}