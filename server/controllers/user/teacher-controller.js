const User = require("../../models/user/teacher-model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
      throw new Error('Password did not match');
    }

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');

    // Create token using user ID
    const token = createToken(user._id);

    // Respond with user information and token
    res.status(200).json({
      email,
      token,
      id: user._id,
      userID: user.userID,
      name: user.fullName
    });  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const signupUser = async (req, res) => {
  const { fullName, email, password, userID } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    const user = new User({
      fullName,
      email,
      password: hashedPassword, // Use the hashed password
      userID,
    });

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res)=>{
  const userID = req.params.id;
    try{
        const user = await User.findOne({userID})
        res.status(200).json(user);
    }catch(error){
        console.error(error);
        res.status(400).json({message: "Error creating lesson"})
    }
}


module.exports = { signupUser, loginUser, getUser};
