const {VocabTreasureWords} = require('../../models/extra-exercises/extra-model')

const getVocabTreasure = async(req, res) =>{
    try{
        const words = await VocabTreasureWords.find();
        res.json(words)
    }
    catch(err){
        console.log(err)
        res.status.json({message: 'Error fetching listening materials!'})
    }
}

module.exports = {getVocabTreasure}