const  {ListeningSenDict, ListeningSenDict_Answers} = require('../../models/listening/sentenceDictation-model')
const  {ListeningQA,ListeningQA_Answers} = require('../../models/listening/qa-model')
const  {ReadingComprehension, ReadingComprehension_answers} = require('../../models/reading/comprehension-model')
const  {SpeakingStorytelling, SpeakingStorytelling_Answers} = require('../../models/speaking/storytelling-model')
const  {WritingPictureDescription, WritingPictureDescription_answers} = require('../../models/writing/pictureDescription-model')

const getLessons = async (req, res) => {
  console.log('inside lessons')
    try {
      const listeningSEN = await ListeningSenDict.find();
      const listeningQA = await ListeningQA.find();
      const speaking = await SpeakingStorytelling.find();
      const reading = await ReadingComprehension.find();
      const writing = await WritingPictureDescription.find();
      
      const lengths = {
        listeningSEN: listeningSEN.length,
        listeningQA: listeningQA.length,
        speaking: speaking.length,
        reading: reading.length,
        writing: writing.length
      };
  
      res.status(200).json(lengths);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Error retrieving all lessons' });
    }
  };

  module.exports = {getLessons}