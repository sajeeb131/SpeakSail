const  {ListeningSenDict, ListeningSenDict_Answers} = require('../../models/listening/sentenceDictation-model')
const  {ListeningQA,ListeningQA_Answers} = require('../../models/listening/qa-model')
const  {ReadingComprehension, ReadingComprehension_answers} = require('../../models/reading/comprehension-model')
const  {SpeakingStorytelling, SpeakingStorytelling_Answers} = require('../../models/speaking/storytelling-model')
const  {SpeakingConversationExchange, SpeakingConversationExchange_Answers} = require('../../models/speaking/conversationExchange-model')
const  {WritingPictureDescription, WritingPictureDescription_answers} = require('../../models/writing/pictureDescription-model')

const getLessons = async (req, res) => {
    try {
      const listeningSEN = await ListeningSenDict.find();
      const listeningQA = await ListeningQA.find();
      const speakingST = await SpeakingStorytelling.find();
      const speakingCE = await SpeakingConversationExchange.find();
      const reading = await ReadingComprehension.find();
      const writing = await WritingPictureDescription.find();
      
      const lengths = {
        listeningSEN: listeningSEN.length,
        listeningQA: listeningQA.length,
        speakingST: speakingST.length,
        speakingCE: speakingCE.length,
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