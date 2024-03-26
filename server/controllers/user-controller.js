const User = require('../models/user-model');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); 
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isMatch = await user.comparePassword(password); 
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');

    // Create token using user ID
    const token = createToken(user._id);

    // Respond with limited user information and token
    res.status(200).json({
      email,
      token,
      id: user._id
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup user
const signupUser = async (req, res) => {
  const { fullName, email, password, userID } = req.body;

  try {
    const existingUser = await User.findOne({ email }); 
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const user = new User({
      fullName,
      email,
      password, 
      userID,
    });

    await user.save(); 

    const token = createToken(user._id);

    res.status(200).json({ email, token }); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
