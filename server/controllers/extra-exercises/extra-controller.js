const { VocabTreasureWords, DailyMissionQuestions } = require('../../models/extra-exercises/extra-model');

let currentQuestionSet = null;
let currentVocabWords = [];
let congratsShown = false;

const updateQuestionSet = async () => {
    try {
        const questions = await DailyMissionQuestions.find();
        if (questions.length > 0) {
            currentQuestionSet = questions[Math.floor(Math.random() * questions.length)];
            congratsShown = false; // Reset congratsShown when new questions are fetched
        }
    } catch (err) {
        console.log(err);
    }
};

const updateVocabWords = async () => {
    try {
        const words = await VocabTreasureWords.find();
        currentVocabWords = words;
    } catch (err) {
        console.log(err);
    }
};

const getVocabTreasure = async (req, res) => {
    try {
        if (currentVocabWords.length === 0) {
            await updateVocabWords();
        }
        res.json(currentVocabWords);
    } catch (err) {
        console.log(err);
        res.status.json({ message: 'Error fetching Vocab materials!' });
    }
};

const getDailyMission = async (req, res) => {
    try {
        if (!currentQuestionSet) {
            await updateQuestionSet();
        }
        console.log(congratsShown)
        res.json({ currentQuestionSet, congratsShown });
        
    } catch (err) {
        console.log(err);
        res.status.json({ message: 'Error fetching Daily mission materials!' });
    }
};

// Update the question set every 5 minutes
setInterval(updateQuestionSet, 300000);

// Update vocab words every 5 minutes
setInterval(updateVocabWords, 300000);


module.exports = { getVocabTreasure, getDailyMission };
