import React, { useEffect, useState } from 'react';
import Navbar from '../../../../components/teacherNav';
import UploadNavbar from '../../../../components/upNav';
import './UploadD.css';

const UploadSD = () => {
  const [lessonName, setLessonName] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [lessonNameError, setLessonNameError] = useState('');
  const [classError, setClassError] = useState('');
  const [file, setFile] = useState('')
  const [lessonNumber, setLessonNumber] = useState('')
  const [fileError, setFileError] = useState('')

  //lesson number calculate
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`http://localhost:4000/lessons/listening/sentence-dictation/`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLessonNumber(data.lessons.length+1)

      } catch (error) {
          console.error('Error fetching lesson:', error);
      }
      
    };
    fetchLessons()
  },[])

  const handleLessonNameChange = (event) => {
    setLessonName(event.target.value);
  };
  const handleAudioChange = (event) => {
    const selectedFile = event.target.files[0];
    const audioBlob = new Blob([selectedFile], { type: selectedFile.type });
    setFile(audioBlob);
  };
  const handleClassChange = (event) => {
    setClassNumber(event.target.value);
  };

  //submit 
  const handleSubmit = async (event) => {
    
    event.preventDefault()

    if (!lessonName.trim()) {
      setLessonNameError('Lesson Name cannot be empty');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(lessonName.trim())) {
      setLessonNameError('Lesson Name should contain alphabets only');
      return;
    } else {
      setLessonNameError('');
    }

    if(!file){
      setFileError('File not selected')
    }
    if (!classNumber.trim()) {
      setClassError('Class Number cannot be empty');
      return;
    } else if (!/^[1-5]+$/.test(classNumber.trim())) {
      setClassError('Class Number should contain 1, 2, 3, 4, or 5');
      return;
    } else {
      setClassError('');
    }

    try{
      console.log(file)
      const formData = new FormData();
      formData.append('lessonNumber', lessonNumber);
      formData.append('lessonName', lessonName);
      formData.append('file', file); 

      const response = await fetch('http://localhost:4000/lessons/listening/sentence-dictation/',{
        method: 'POST',
        body: formData
      })
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      console.log('Data submitted successfully');

    }catch(error){
      console.log('Unable to create lesson', error.message)
    }


  };

  return (
    <div className='upload-container'>
      <div className='sideBar'>
        <Navbar />
      </div>
      <div className='content-right'>
        <div className='upp'>
          <UploadNavbar />
        </div>
        <div className='down'>
          <h2>Sentence Dictation</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='lessonNumber'>Lesson Name:</label>
              <input
                type='text'
                id='lessonNumber'
                name='lessonNumber'
                value={lessonName}
                placeholder='Enter lesson name here'
                onChange={handleLessonNameChange}
              />
              {lessonNameError && <div className='error'>{lessonNameError}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='class'>Class:</label>
              <input
                type='number'
                id='class'
                name='class'
                value={classNumber}
                onChange={handleClassChange}
                placeholder='Enter class here'
                min='1'
                max='5'
              />
              {classError && <div className='error'>{classError}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='audioFile'>Audio File:</label>
              <input type='file' id='audioFile' name='audioFile' accept='audio/*' onChange={handleAudioChange}/>
              {fileError && <div>{fileError} </div>}
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadSD;
