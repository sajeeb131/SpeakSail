const { VocabTreasureWords, DailyMissionQuestions } = require('../../models/extra-exercises/extra-model');
const User = require('../../models/user/student-model');
const mongoose = require('mongoose');

let currentQuestionSet = null;
let currentVocabWords = [];
let congratsShown = false;
let storedUserID = null; // To store userID for interval usage

const updateQuestionSet = async (userID) => {
    if (userID) {
        try {
            const questions = await DailyMissionQuestions.find();
            if (questions.length > 0) {
                currentQuestionSet = questions[Math.floor(Math.random() * questions.length)];
                congratsShown = false; // Reset congratsShown when new questions are fetched

                // Update the daily_mission_completed flag for the user
                await User.updateOne({ userID: userID }, { $set: { daily_mission_completed: false } });
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log('UserID is undefined in updateQuestionSet');
    }
};

const updateVocabWords = async () => {
    try {
        const words = await VocabTreasureWords.find();
        const shuffledWords = shuffleArray(words);
        currentVocabWords = shuffledWords.slice(0, 2);
    } catch (err) {
        console.log(err);
    }
};

// Function to shuffle an array
const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const getVocabTreasure = async (req, res) => {
    try {
        if (currentVocabWords.length === 0) {
            await updateVocabWords();
        }
        res.json(currentVocabWords);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching Vocab materials!' });
    }
};

const getDailyMission = async (req, res) => {
    try {
        const userID = req.params.id;
        storedUserID = userID; // Store userID for interval usage
        // console.log('UserID received in getDailyMission:', userID); // Debugging statement
        const { skip } = req.query;
        if (skip || !currentQuestionSet) {
            await updateQuestionSet(userID);
        }
        res.json({ currentQuestionSet, congratsShown });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching Daily mission materials!' });
    }
};

// Wrapper function to call updateQuestionSet with storedUserID from setInterval
const updateQuestionSetWrapper = () => {
    return () => {
        if (storedUserID) {
            updateQuestionSet(storedUserID);
        } else {
            // console.log('Stored userID is undefined in interval');
        }
    };
};

// Update the question set every 5 minutes with the stored userID
setInterval(updateQuestionSetWrapper(), 30000); // 5 minutes

// Update vocab words every 5 minutes
setInterval(updateVocabWords, 30000); // 5 minutes

module.exports = { getVocabTreasure, getDailyMission };
