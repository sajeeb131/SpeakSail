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
    type: String,
    default: "0", 
  },
  speaking: {
    type: String,
    default: "0",
  },
  writing: {
    type: String,
    default: "0",
  },
  reading: {
    type: String,
    default: "0",
  },
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('student_user', userSchema);
