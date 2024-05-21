const {DownloadListeningMaterials, DownloadSpeakingMaterials,
      DownloadWritingMaterials,DownloadReadingMaterials} 
      = require('../../models/materials/material-model')
const cloudinary = require('../../utils/cloudinary')

const uploadListeningActivity = async (req, res) => {
    try {
      const audioFile = req.files.audio[0];
      const pdfFile = req.files.pdf[0];
  
      const audioUploadResponse = await cloudinary.uploader.upload(audioFile.path, {
        resource_type: 'auto'
      });
  
      const pdfUploadResponse = await cloudinary.uploader.upload(pdfFile.path, {
        resource_type: 'auto'
      });
  
      const newActivity = new DownloadListeningMaterials({
        name: req.body.name,
        activity_no: req.body.activity_no,
        audioFilePath: audioUploadResponse.secure_url,
        pdfPath: pdfUploadResponse.secure_url
      });
  
      await newActivity.save();
      res.status(201).json(newActivity);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error creating new activity' });
    }
  };

const uploadSpeakingActivity = async(req, res) => {
    try{
        const {file} = req.file;

        const uploadResponse = await cloudinary.uploader.upload(
            req.file.path,
            {resource_type: 'auto'}
        );
        const newActivity = new DownloadSpeakingMaterials({
            name: req.body.name,
            activity_no:req.body.activity_no,
            pdfPath:uploadResponse.secure_url
        })
        await newActivity.save()
        res.status(201).json(newActivity);
    }
    catch(err){
        console.log(err);
        res.status.json({message: 'Error creating new activity'})
    }
    

}

const uploadReadingActivity = async(req, res) => {
    try{
        const {file} = req.file;

        const uploadResponse = await cloudinary.uploader.upload(
            req.file.path,
            {resource_type: 'auto'}
        );
        const newActivity = new DownloadReadingMaterials({
            name: req.body.name,
            activity_no:req.body.activity_no,
            pdfPath:uploadResponse.secure_url
        })
        await newActivity.save()
        res.status(201).json(newActivity);
    }
    catch(err){
        console.log(err);
        res.status.json({message: 'Error creating new activity'})
    }
}

const uploadWritingActivity = async(req, res) => {
    try{
        const {file} = req.file;

        const uploadResponse = await cloudinary.uploader.upload(
            req.file.path,
            {resource_type: 'auto'}
        );
        const newActivity = new DownloadWritingMaterials({
            name: req.body.name,
            activity_no:req.body.activity_no,
            pdfPath:uploadResponse.secure_url
        })
        await newActivity.save()
        res.status(201).json(newActivity);
    }
    catch(err){
        console.log(err);
        res.status.json({message: 'Error creating new activity'})
    }
}

const getListeningActivities = async(req, res) =>{
    try{
        const materials = await DownloadListeningMaterials.find();
        res.json(materials)
    }
    catch(err){
        console.log(err)
        res.status.json({message: 'Error fetching listening materials!'})
    }
}

const getSpeakingActivities = async(req, res) => {
    try{
        const materials = await DownloadSpeakingMaterials.find();
        res.json(materials)
    }
    catch(err){
        console.log(err)
        res.status.json({message: 'Error fetching Speaking materials!'})
    }
}

const getReadingActivities = async(req, res) => {
    try{
        const materials = await DownloadReadingMaterials.find();
        res.json(materials)
    }
    catch(err){
        console.log(err)
        res.status.json({message: 'Error fetching Reading materials!'})
    }
}

const getWritingActivities = async(req, res) => {
    try{
        const materials = await DownloadWritingMaterials.find();
        res.json(materials)
    }
    catch(err){
        console.log(err)
        res.status.json({message: 'Error fetching Writing materials!'})
    }
}


module.exports = { uploadListeningActivity, uploadReadingActivity, 
    uploadSpeakingActivity, uploadWritingActivity,
    getListeningActivities, getReadingActivities,
     getSpeakingActivities, getWritingActivities
}