const mongoose = require('mongoose');

const listeningQASchema = new mongoose.Schema({
  lessonNumber: {
    type: String,
    required: true,
    unique: true,
  },
  audioFilePath: {
    type: String,
    required: true,
  },
  questions: {
    type: [String],
    required: true,
  },
});

const listeningQAAnswerSchema = new mongoose.Schema({
  lessonNumber: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  feedback: {
    type: Boolean,
    required: true,
  },
});

module.exports = {
  ListeningQA: mongoose.model('ListeningQA', listeningQASchema),
  ListeningQA_Answers: mongoose.model('ListeningQA_Answers', listeningQAAnswerSchema
  ),
};
