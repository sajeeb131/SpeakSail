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
    unique: true,
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

userSchema.statics.signup = async function(fullName, email, password, userID) {
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    if(!email || !password){
        throw Error('Email is not valid')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({fullName, email, password: hash, userID})
    return user
}


userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('Email is not valid')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return user

}

module.exports = mongoose.model('User', userSchema);
