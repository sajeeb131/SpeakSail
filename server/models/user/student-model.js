const mongoose = require('mongoose');
const validator = require('validator'); 
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    default: null,
  },
  school: {
    type: String,
    default: null,
    // required: true,
    trim: true,
  },
  class: {
    type: Number,
    default: null,
    // required: true,
  },
  section: {
    type: String,
    default: null,
    // required: true,
    trim: true,
  },
  listening: {
    type: Number,
    default: "0", 
  },
  speaking: {
    type: Number,
    default: "0",
  },
  writing: {
    type: Number,
    default: "0",
  },
  reading: {
    type: Number,
    default: "0",
  },
  comprehension:{
    type: Number,
    default: 0
  },
  storytelling:{
    type: Number,
    default: 0
  },
  picture_description:{
    type: Number,
    default: 0
  },
  question_answer:{
    type: Number,
    default: 0
  },
  sentence_dictation:{
    type: Number,
    default: 0
  },
  daily_mission:{
    type: Number,
    default: 0
  }
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('student_user', userSchema);
